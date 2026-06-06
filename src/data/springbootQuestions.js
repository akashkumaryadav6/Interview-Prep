const SPRING = (path) => ({
  name: 'Spring Boot Reference',
  url: `https://docs.spring.io/spring-boot/${path}`,
})

/* ── Basic Spring Boot (15) ── */
export const basicQuestions = [
  {
    question: 'What is Spring Boot, and what problems does it solve compared with manual Spring configuration?',
    answer:
      'Spring Boot is an opinionated layer on top of the Spring Framework that gets production-ready applications running quickly with minimal boilerplate.\n\nManual Spring requires extensive XML or Java configuration for component scanning, embedded servers, data sources, transaction managers, and MVC setup. Spring Boot solves this with:\n\n• Auto-configuration — beans created based on classpath and properties\n• Starter dependencies — curated dependency bundles (spring-boot-starter-web, -data-jpa)\n• Embedded servers — Tomcat/Jetty/Undertow included, no WAR deployment needed\n• Production features — Actuator health, metrics, externalized config\n• Opinionated defaults — sensible starting point, override when needed\n\nYou still use Spring DI, MVC, Data, Security — Boot removes ceremony so you focus on business logic.',
    code: [{ language: 'java', snippet: '@SpringBootApplication\npublic class PaymentApplication {\n    public static void main(String[] args) {\n        SpringApplication.run(PaymentApplication.class, args);\n    }\n}' }],
    source: SPRING('reference/'),
  },
  {
    question: 'What does @SpringBootApplication combine?',
    answer:
      '@SpringBootApplication is a convenience meta-annotation that combines three core annotations:\n\n1. @SpringBootConfiguration — marks the class as a source of @Bean definitions (specialized @Configuration)\n2. @EnableAutoConfiguration — triggers Spring Boot auto-configuration based on classpath\n3. @ComponentScan — scans the package of the annotated class and sub-packages for @Component, @Service, @Repository, @Controller\n\nEquivalent to writing all three explicitly. Place it on your main application class in the root package so component scanning covers your entire application structure.',
    code: [{ language: 'java', snippet: '@Target(ElementType.TYPE)\n@Retention(RetentionPolicy.RUNTIME)\n@Documented\n@SpringBootConfiguration\n@EnableAutoConfiguration\n@ComponentScan\npublic @interface SpringBootApplication { }' }],
    source: SPRING('reference/using/using-the-springbootapplication-annotation.html'),
  },
  {
    question: 'What is dependency injection, and why is constructor injection usually preferred?',
    answer:
      'Dependency Injection (DI) is an IoC pattern where Spring creates objects and supplies their dependencies instead of classes constructing collaborators with new.\n\nConstructor injection is preferred because:\n\n• Immutability — dependencies declared as final fields\n• Required dependencies enforced at construction — object cannot exist in invalid state\n• Testability — pass mocks directly in unit tests without Spring context\n• Circular dependency detection — fails fast at startup with constructor injection\n• No reflection needed — unlike field injection (@Autowired on fields)\n\nField injection is discouraged. Setter injection is acceptable for optional dependencies.',
    code: [{ language: 'java', snippet: '@Service\npublic class OrderService {\n    private final OrderRepository repository;\n    private final PaymentClient paymentClient;\n\n    public OrderService(OrderRepository repository, PaymentClient paymentClient) {\n        this.repository = repository;\n        this.paymentClient = paymentClient;\n    }\n}' }],
    source: SPRING('reference/features/developing-auto-configuration.html'),
  },
  {
    question: 'What is a Spring bean?',
    answer:
      'A Spring bean is an object that is instantiated, assembled, and managed by the Spring IoC container (ApplicationContext).\n\nBeans are created from:\n• Component scanning (@Component and stereotype annotations)\n• @Bean methods in @Configuration classes\n• Auto-configuration classes\n\nThe container handles lifecycle (creation, initialization, destruction), dependency wiring, and scope (singleton by default). You retrieve beans by type or name, though constructor injection is the standard approach in modern Spring Boot apps.',
    code: [{ language: 'java', snippet: '@Configuration\npublic class AppConfig {\n    @Bean\n    public RestTemplate restTemplate(RestTemplateBuilder builder) {\n        return builder.build();\n    }\n}\n\n// Component-scanned bean\n@Component\npublic class AuditLogger { }' }],
    source: SPRING('reference/'),
  },
  {
    question: 'What are @Component, @Service, @Repository, and @Controller used for?',
    answer:
      'All four are stereotype annotations — specialized @Component markers that tell Spring to register the class as a bean and convey semantic intent:\n\n@Component — generic Spring-managed component\n@Service — business/service layer logic\n@Repository — data access layer; adds persistence exception translation (SQLException → DataAccessException)\n@Controller — MVC controller that returns view names (Thymeleaf, JSP)\n\nFunctionally similar for bean registration. Use the stereotype that matches the layer for readability and tooling support. @RestController = @Controller + @ResponseBody for REST APIs.',
    code: [{ language: 'java', snippet: '@Service\npublic class AccountService { }\n\n@Repository\npublic interface AccountRepository extends JpaRepository<Account, Long> { }\n\n@Controller\npublic class HomeController {\n    @GetMapping("/")\n    public String home() { return "index"; }\n}' }],
    source: SPRING('reference/'),
  },
  {
    question: 'What is the difference between @Controller and @RestController?',
    answer:
      '@Controller is for traditional server-side MVC — handler methods return view names resolved to HTML templates.\n\n@RestController combines @Controller and @ResponseBody. Return values are serialized directly to the HTTP response body (JSON/XML) via HttpMessageConverters (Jackson by default).\n\nUse @Controller for web pages. Use @RestController for REST APIs. You can add @ResponseBody to individual @Controller methods when only some endpoints return JSON.',
    code: [{ language: 'java', snippet: '@RestController\n@RequestMapping("/api/accounts")\npublic class AccountController {\n    private final AccountService service;\n\n    public AccountController(AccountService service) { this.service = service; }\n\n    @GetMapping("/{id}")\n    public AccountDto get(@PathVariable Long id) {\n        return service.findById(id);\n    }\n}' }],
    source: SPRING('reference/web/servlet.html'),
  },
  {
    question: 'What is component scanning, and how does package placement affect it?',
    answer:
      'Component scanning tells Spring to detect and register classes annotated with @Component, @Service, @Repository, @Controller, and @Configuration by scanning specified packages.\n\n@SpringBootApplication enables scanning starting from the package of the annotated class downward. If your main class is com.bank.app.Application, beans in com.bank.app.service are found, but beans in com.bank.config (sibling package) are NOT scanned unless you add @ComponentScan("com.bank").\n\nBest practice: place the main application class in the root package (com.bank.app) with sub-packages for layers (controller, service, repository). Use @ComponentScan only when you need to include beans from external or sibling packages.',
    code: [{ language: 'java', snippet: '// com.bank.app.Application — root package\n@SpringBootApplication\npublic class Application { }\n\n// Scanned: com.bank.app.controller.UserController\n// NOT scanned: com.bank.security.JwtFilter (sibling package)\n\n@SpringBootApplication\n@ComponentScan(basePackages = "com.bank")\npublic class ApplicationWithWideScan { }' }],
    source: SPRING('reference/using/using-the-springbootapplication-annotation.html'),
  },
  {
    question: 'What are Spring Boot starters?',
    answer:
      'Starters are curated dependency descriptors (POMs) that bundle commonly used libraries for a specific feature. They follow the naming convention spring-boot-starter-*.\n\nExamples:\n• spring-boot-starter-web — Spring MVC, Jackson, embedded Tomcat\n• spring-boot-starter-data-jpa — Hibernate, Spring Data JPA, JDBC\n• spring-boot-starter-test — JUnit, Mockito, AssertJ, Spring Test\n• spring-boot-starter-security — Spring Security\n\nStarters reduce version conflicts (managed by spring-boot-dependencies BOM) and ensure compatible transitive dependencies. Custom starters package reusable auto-configuration for internal libraries.',
    code: [{ language: 'xml', snippet: '<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-web</artifactId>\n</dependency>\n<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-data-jpa</artifactId>\n</dependency>' }],
    source: SPRING('reference/using/build-systems.html'),
  },
  {
    question: 'What is auto-configuration?',
    answer:
      'Auto-configuration is Spring Boot\'s mechanism for automatically configuring beans based on the classpath, existing beans, and property settings.\n\nWhen you add spring-boot-starter-data-jpa and a DataSource URL, Boot configures a DataSource, EntityManagerFactory, and JpaTransactionManager without manual @Bean definitions.\n\nAuto-configuration classes are conditional — they apply only when relevant classes are present and required beans are missing (@ConditionalOnClass, @ConditionalOnMissingBean). You can exclude unwanted auto-config with @SpringBootApplication(exclude = {...}) or spring.autoconfigure.exclude property.\n\nGoal: sensible defaults you can override with your own @Bean or properties.',
    code: [{ language: 'java', snippet: '@SpringBootApplication(exclude = DataSourceAutoConfiguration.class)\npublic class NoDatabaseApp { }\n\n// application.properties\n// spring.autoconfigure.exclude=org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration' }],
    source: SPRING('reference/using/auto-configuration.html'),
  },
  {
    question: 'How do application.properties and application.yml differ?',
    answer:
      'Both externalize configuration with identical capabilities — format is the only difference.\n\napplication.properties — flat key=value pairs:\nserver.port=8081\nspring.datasource.url=jdbc:postgresql://localhost/bank\n\napplication.yml — hierarchical YAML structure, often more readable for nested config:\nserver:\n  port: 8081\nspring:\n  datasource:\n    url: jdbc:postgresql://localhost/bank\n\nSpring Boot loads both if present (properties override yml for same keys depending on order). Use @ConfigurationProperties for type-safe binding regardless of format. YAML supports multi-document files separated by ---.',
    code: [{ language: 'yaml', snippet: 'server:\n  port: 8081\nspring:\n  application:\n    name: payment-service\n  datasource:\n    url: jdbc:postgresql://localhost:5432/bank\n    username: app\n    password: secret' }],
    source: SPRING('how-to/properties-and-configuration.html'),
  },
  {
    question: 'What are Spring profiles, and how are they activated?',
    answer:
      'Profiles group beans and configuration for specific environments (dev, test, staging, prod). Beans annotated @Profile("prod") register only when that profile is active.\n\nActivation methods:\n• spring.profiles.active=dev in application.properties\n• --spring.profiles.active=dev command-line argument\n• SPRING_PROFILES_ACTIVE=dev environment variable\n• @ActiveProfiles("test") in tests\n\nProfile-specific files: application-dev.properties, application-prod.yml. Multiple profiles can be active: spring.profiles.active=dev,h2.',
    code: [{ language: 'java', snippet: '@Configuration\n@Profile("dev")\npublic class DevDataSourceConfig {\n    @Bean\n    public DataSource dataSource() {\n        return new EmbeddedDatabaseBuilder()\n            .setType(EmbeddedDatabaseType.H2)\n            .build();\n    }\n}\n\n// application.properties\n// spring.profiles.active=dev' }],
    source: SPRING('how-to/properties-and-configuration.html'),
  },
  {
    question: 'How do @Value and @ConfigurationProperties differ?',
    answer:
      '@Value injects individual properties using SpEL or placeholders. Good for one-off values but scatters property keys across classes and is harder to test.\n\n@ConfigurationProperties binds a prefix of properties to a typed POJO. Supports validation (@Validated, @NotNull), relaxed binding (max-pool-size ↔ maxPoolSize), lists, maps, and nested objects.\n\nPrefer @ConfigurationProperties for grouped settings (database, feature flags, API client config). Use @Value for single optional overrides. Enable @ConfigurationProperties with @EnableConfigurationProperties or @ConfigurationPropertiesScan.',
    code: [{ language: 'java', snippet: '@ConfigurationProperties(prefix = "app.payment")\n@Validated\npublic record PaymentProperties(\n    @NotBlank String baseUrl,\n    Duration timeout,\n    int maxRetries\n) { }\n\n@Service\npublic class PaymentClient {\n    public PaymentClient(PaymentProperties props) {\n        // type-safe, testable config object\n    }\n}' }],
    source: SPRING('how-to/properties-and-configuration.html'),
  },
  {
    question: 'How do @RequestMapping, @GetMapping, @PostMapping, @PutMapping, and @DeleteMapping work?',
    answer:
      '@RequestMapping is the general mapping annotation — configure path, HTTP method, consumes, produces, headers.\n\nHTTP-method-specific shortcuts reduce boilerplate:\n• @GetMapping — HTTP GET (read)\n• @PostMapping — HTTP POST (create)\n• @PutMapping — HTTP PUT (replace)\n• @DeleteMapping — HTTP DELETE (remove)\n• @PatchMapping — HTTP PATCH (partial update)\n\nClass-level @RequestMapping("/api/orders") sets base path; method-level annotations add segment and method. Spring MVC matches incoming requests to handler methods and invokes them with resolved arguments.',
    code: [{ language: 'java', snippet: '@RestController\n@RequestMapping("/api/orders")\npublic class OrderController {\n    @GetMapping("/{id}")\n    public Order get(@PathVariable Long id) { }\n\n    @PostMapping\n    public ResponseEntity<Order> create(@RequestBody CreateOrderRequest req) { }\n\n    @PutMapping("/{id}")\n    public Order replace(@PathVariable Long id, @RequestBody Order order) { }\n\n    @DeleteMapping("/{id}")\n    @ResponseStatus(HttpStatus.NO_CONTENT)\n    public void delete(@PathVariable Long id) { }\n}' }],
    source: SPRING('reference/web/servlet.html'),
  },
  {
    question: 'What is the difference between @PathVariable, @RequestParam, and @RequestBody?',
    answer:
      '@PathVariable — binds a URI template variable from the path. /users/{id} → @PathVariable Long id.\n\n@RequestParam — binds query string parameters. /users?status=ACTIVE → @RequestParam String status. Supports defaultValue and required=false.\n\n@RequestBody — deserializes the HTTP request body (JSON/XML) into a Java object via HttpMessageConverter (Jackson). Used with POST/PUT/PATCH.\n\nChoose based on REST conventions: resource identity in path, filters/sorting in query params, payload in body.',
    code: [{ language: 'java', snippet: '@GetMapping("/users/{id}")\npublic User getUser(\n    @PathVariable Long id,\n    @RequestParam(defaultValue = "false") boolean includeOrders) { }\n\n@PostMapping("/users")\npublic User createUser(@Valid @RequestBody CreateUserRequest request) { }' }],
    source: SPRING('reference/web/servlet.html'),
  },
  {
    question: 'How do you change the application port and provide environment-specific configuration?',
    answer:
      'Change the embedded server port via server.port property or SERVER_PORT environment variable.\n\nEnvironment-specific configuration strategies:\n• Profile-specific files: application-dev.yml, application-prod.yml\n• Environment variables: SPRING_DATASOURCE_URL (relaxed binding)\n• External config: spring.config.import=optional:file:./config/\n• Command line: --server.port=9090 --spring.profiles.active=prod\n• Cloud config servers (Spring Cloud Config) for centralized management\n\nPrecedence (highest wins): command-line args > SPRING_APPLICATION_JSON > OS env vars > profile-specific files > application.properties.',
    code: [{ language: 'properties', snippet: '# application-dev.properties\nserver.port=8080\nspring.datasource.url=jdbc:h2:mem:devdb\n\n# application-prod.properties\nserver.port=8080\nspring.datasource.url=${DB_URL}\nlogging.level.root=WARN' }],
    source: SPRING('how-to/properties-and-configuration.html'),
  },
]

/* ── Intermediate Spring Boot (20) ── */
export const intermediateQuestions = [
  {
    question: 'How does Spring Boot decide which auto-configurations to apply?',
    answer:
      'At startup, @EnableAutoConfiguration imports AutoConfigurationImportSelector, which loads candidate auto-configuration classes from META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports (Spring Boot 3+) or spring.factories (older versions).\n\nEach candidate is evaluated against @Conditional annotations:\n• @ConditionalOnClass — required class on classpath\n• @ConditionalOnMissingBean — no user-defined bean of type\n• @ConditionalOnProperty — property matches value\n• @ConditionalOnWebApplication — servlet vs reactive context\n\nOnly configurations whose conditions pass are registered. Auto-config runs before user @Configuration but respects @ConditionalOnMissingBean — your beans win.',
    source: SPRING('reference/using/auto-configuration.html'),
  },
  {
    question: 'What roles do @ConditionalOnClass, @ConditionalOnMissingBean, and related conditional annotations play?',
    answer:
      'Conditional annotations gate whether a @Configuration class or @Bean method is processed. They are the core of Spring Boot\'s "convention over configuration" safety net.\n\n@ConditionalOnClass — activate when specified classes are present (e.g., DataSource when JDBC driver exists)\n@ConditionalOnMissingBean — skip if application already defined a bean of that type — prevents overriding user beans\n@ConditionalOnProperty — enable feature flags via properties\n@ConditionalOnWebApplication / @ConditionalOnNotWebApplication — servlet vs non-web\n@ConditionalOnResource — file exists on classpath\n\nTogether they ensure auto-config applies only in relevant contexts and backs off when you provide your own configuration.',
    code: [{ language: 'java', snippet: '@Configuration\n@ConditionalOnClass(DataSource.class)\n@ConditionalOnProperty(name = "app.db.enabled", havingValue = "true", matchIfMissing = true)\npublic class DataSourceAutoConfiguration {\n    @Bean\n    @ConditionalOnMissingBean\n    public DataSource dataSource(DataSourceProperties props) {\n        return props.initializeDataSourceBuilder().build();\n    }\n}' }],
    source: SPRING('reference/features/developing-auto-configuration.html'),
  },
  {
    question: 'How can an application override or exclude an auto-configuration?',
    answer:
      'Override: define your own @Bean of the same type — @ConditionalOnMissingBean causes auto-config to skip. Or use @Primary / @Order for multiple candidates.\n\nExclude entirely:\n• @SpringBootApplication(exclude = {DataSourceAutoConfiguration.class})\n• @EnableAutoConfiguration(exclude = {...})\n• spring.autoconfigure.exclude in properties\n• spring.boot.autoconfigure.exclude in Spring Boot 3.x\n\nFor fine control, use @AutoConfigureBefore / @AutoConfigureAfter in custom config. spring.main.allow-bean-definition-overriding=true (discouraged) permits bean overriding.',
    code: [{ language: 'java', snippet: '@SpringBootApplication(exclude = SecurityAutoConfiguration.class)\npublic class InternalApiApplication { }\n\n@Configuration\npublic class CustomSecurityConfig {\n    @Bean\n    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\n        return http.authorizeHttpRequests(a -> a.anyRequest().permitAll()).build();\n    }\n}' }],
    source: SPRING('reference/using/auto-configuration.html'),
  },
  {
    question: 'What is the difference between @Bean and component scanning?',
    answer:
      '@Bean — declared in @Configuration class methods. You control instantiation logic (third-party classes, conditional setup, multiple implementations). Method name becomes bean name by default.\n\nComponent scanning — registers classes annotated @Component/@Service/etc. automatically. Class is instantiated by Spring; you don\'t write factory methods.\n\nUse @Bean when you need programmatic construction (RestTemplate with interceptors, ObjectMapper customization). Use component scanning for your own application classes. Both produce beans managed by the same ApplicationContext.',
    code: [{ language: 'java', snippet: '@Configuration\npublic class JacksonConfig {\n    @Bean\n    public ObjectMapper objectMapper() {\n        return JsonMapper.builder()\n            .configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false)\n            .build();\n    }\n}\n\n@Service  // discovered by component scan\npublic class ReportService { }' }],
    source: SPRING('reference/'),
  },
  {
    question: 'What are bean scopes, and when would singleton, prototype, request, or session scope be appropriate?',
    answer:
      'Scope controls bean lifecycle and visibility:\n\nsingleton (default) — one instance per ApplicationContext. Use for stateless services, repositories, clients.\n\nprototype — new instance per injection/getBean call. Use for stateful, short-lived objects. Spring does not manage full prototype lifecycle destruction.\n\nrequest — one instance per HTTP request (web apps). Use for request-specific context (user request metadata).\n\nsession — one instance per HTTP session. Use for shopping cart, user wizard state.\n\napplication — one per ServletContext. Less common than singleton in Boot.\n\nMost Spring Boot beans are singleton. Request/session scopes require web context and @Scope(proxyMode = TARGET_CLASS) when injected into singletons.',
    code: [{ language: 'java', snippet: '@Component\n@Scope(value = WebApplicationContext.SCOPE_REQUEST, proxyMode = ScopedProxyMode.TARGET_CLASS)\npublic class RequestContextHolder {\n    private String correlationId;\n}' }],
    source: SPRING('reference/'),
  },
  {
    question: 'What is the bean lifecycle, and where do @PostConstruct and @PreDestroy fit?',
    answer:
      'Bean lifecycle: instantiate → populate properties → BeanNameAware/BeanFactoryAware callbacks → @PostConstruct → InitializingBean.afterPropertiesSet → custom init-method → bean ready → @PreDestroy → DisposableBean.destroy → custom destroy-method.\n\n@PostConstruct (JSR-250) — run after dependency injection, before bean is used. Initialize caches, validate config, open connections.\n\n@PreDestroy — cleanup before container removes bean. Close resources, flush buffers.\n\nIn Spring Boot, beans are destroyed gracefully on shutdown (see server.shutdown=graceful). Prefer @PostConstruct/@PreDestroy or initMethod/destroyMethod over implementing Spring lifecycle interfaces.',
    code: [{ language: 'java', snippet: '@Component\npublic class CacheWarmer {\n    @PostConstruct\n    public void warmCache() {\n        // load reference data on startup\n    }\n\n    @PreDestroy\n    public void shutdown() {\n        // release resources\n    }\n}' }],
    source: SPRING('reference/'),
  },
  {
    question: 'What causes circular dependencies, and why does constructor injection reveal them early?',
    answer:
      'Circular dependency: Bean A needs Bean B, and Bean B needs Bean A (directly or through a chain). Spring cannot resolve instantiation order.\n\nConstructor injection fails at startup with BeanCurrentlyInCreationException — neither bean can be constructed because each waits for the other\'s constructor. This is desirable: fail fast with a clear error.\n\nField/setter injection can sometimes defer the cycle (object created, then injected) and may mask design problems. Spring Boot 2.6+ disallows circular references by default (spring.main.allow-circular-references=false).\n\nFix: refactor to extract shared logic into a third bean, use @Lazy on one dependency, or redesign to eliminate mutual dependency.',
    code: [{ language: 'java', snippet: '@Service\npublic class OrderService {\n    public OrderService(PaymentService payment) { }\n}\n\n@Service\npublic class PaymentService {\n    public PaymentService(OrderService orders) { }  // circular — fails at startup\n}' }],
    source: SPRING('reference/'),
  },
  {
    question: 'How does externalized configuration precedence work?',
    answer:
      'Spring Boot PropertySource order (lowest to highest priority):\n\n1. Default properties (@SpringApplication.setDefaultProperties)\n2. @PropertySource on @Configuration classes\n3. Config data (application.properties/yml)\n4. Profile-specific application-{profile}.properties\n5. Application properties outside jar (./config/ adjacent to jar)\n6. OS environment variables\n7. Java System properties\n8. JNDI attributes\n9. ServletContext/ServletConfig init params\n10. SPRING_APPLICATION_JSON\n11. Command-line arguments\n12. @TestPropertySource / @DynamicPropertySource in tests\n\nHigher priority overrides lower. Relaxed binding maps SPRING_DATASOURCE_URL to spring.datasource.url. Use spring.config.import for additional locations.',
    source: SPRING('how-to/properties-and-configuration.html'),
  },
  {
    question: 'How do validation annotations work with request models and @ConfigurationProperties?',
    answer:
      'Add spring-boot-starter-validation (Hibernate Validator). Use JSR-380 annotations on DTOs and property classes.\n\nFor REST: annotate @RequestBody parameter with @Valid or @Validated. Validation runs before handler method; failures throw MethodArgumentNotValidException — handle with @ControllerAdvice.\n\nFor config: annotate @ConfigurationProperties class with @Validated and fields with @NotNull, @Min, @Pattern, etc. Bind failures throw BindException at startup or refresh.\n\nCustom constraints via @Constraint and ConstraintValidator. Group validation with @Validated(Create.class).',
    code: [{ language: 'java', snippet: 'public record CreateAccountRequest(\n    @NotBlank String name,\n    @Email String email,\n    @Min(18) int age\n) { }\n\n@PostMapping\npublic Account create(@Valid @RequestBody CreateAccountRequest req) { }\n\n@ConfigurationProperties(prefix = "app")\n@Validated\npublic class AppProperties {\n    @NotBlank private String apiKey;\n}' }],
    source: SPRING('reference/web/servlet.html'),
  },
  {
    question: 'How would you implement consistent REST error responses with @ControllerAdvice and @ExceptionHandler?',
    answer:
      '@ControllerAdvice defines global exception handling across controllers. @ExceptionHandler methods map exceptions to ResponseEntity with consistent JSON error body.\n\nPattern:\n1. Define ErrorResponse record (timestamp, status, error, message, path, fieldErrors)\n2. @ControllerAdvice class with handlers for MethodArgumentNotValidException, EntityNotFoundException, AccessDeniedException, Exception\n3. Log server errors; return safe messages to clients\n4. Use @ResponseStatus for simple cases or ResponseEntity for full control\n\nCombine with ProblemDetail (RFC 7807) via ResponseEntityExceptionHandler in Spring 6+ for standardized problem+json responses.',
    code: [{ language: 'java', snippet: '@ControllerAdvice\npublic class GlobalExceptionHandler {\n    @ExceptionHandler(MethodArgumentNotValidException.class)\n    public ResponseEntity<ErrorResponse> handleValidation(MethodArgumentNotValidException ex) {\n        var errors = ex.getBindingResult().getFieldErrors().stream()\n            .map(fe -> fe.getField() + ": " + fe.getDefaultMessage())\n            .toList();\n        return ResponseEntity.badRequest()\n            .body(new ErrorResponse(400, "Validation failed", errors));\n    }\n\n    @ExceptionHandler(EntityNotFoundException.class)\n    public ResponseEntity<ErrorResponse> handleNotFound(EntityNotFoundException ex) {\n        return ResponseEntity.status(HttpStatus.NOT_FOUND)\n            .body(new ErrorResponse(404, ex.getMessage(), List.of()));\n    }\n}' }],
    source: SPRING('reference/web/servlet.html'),
  },
  {
    question: 'What is Spring Data JPA, and how are repository implementations generated?',
    answer:
      'Spring Data JPA abstracts data access with repository interfaces. You declare interface extending JpaRepository<Entity, ID> — Spring generates the implementation at runtime via JDK dynamic proxy or class proxy.\n\nQuery methods parsed from method names (findByStatusAndCreatedAtAfter). @Query for JPQL/native SQL. @Modifying for updates. Pagination via Pageable.\n\nImplementation stack: Spring Data repository proxy → SimpleJpaRepository (default) → EntityManager → Hibernate → JDBC.\n\nEnable with @EnableJpaRepositories (auto-enabled with starter). Custom fragments: define custom interface + impl class named RepositoryImpl.',
    code: [{ language: 'java', snippet: 'public interface PaymentRepository extends JpaRepository<Payment, Long> {\n    List<Payment> findByStatus(PaymentStatus status);\n\n    @Query("select p from Payment p where p.amount > :min")\n    List<Payment> findLargePayments(@Param("min") BigDecimal min);\n}' }],
    source: SPRING('reference/data/sql.html'),
  },
  {
    question: 'What is the difference between lazy and eager fetching, and what is the N+1 query problem?',
    answer:
      'Eager fetching (FetchType.EAGER) — associated entities loaded immediately with parent. Risk: loads unnecessary data, multiple joins, Cartesian products.\n\nLazy fetching (FetchType.LAZY) — associated entities loaded on first access. Default for @OneToMany and @ManyToMany. Requires active persistence context (session).\n\nN+1 problem: loading N parent entities triggers 1 query for parents + N additional queries for each child association access. Classic with lazy collections in loops.\n\nFixes: JOIN FETCH in JPQL, @EntityGraph, batch fetching (@BatchSize), DTO projections, or spring.jpa.properties.hibernate.default_batch_fetch_size.',
    code: [{ language: 'java', snippet: '@Query("select o from Order o join fetch o.items where o.customerId = :id")\nList<Order> findWithItems(@Param("id") Long customerId);\n\n// Or @EntityGraph(attributePaths = {"items"})\nList<Order> findByCustomerId(Long customerId);' }],
    source: SPRING('reference/data/sql.html'),
  },
  {
    question: 'What does @Transactional do, and why can self-invocation prevent it from working as expected?',
    answer:
      '@Transactional wraps method calls in a database transaction managed by PlatformTransactionManager. Defines propagation (REQUIRED, REQUIRES_NEW, etc.), isolation, rollback rules (default: rollback on RuntimeException).\n\nSelf-invocation problem: calling this.saveInternal() from within the same class bypasses Spring\'s proxy. The proxy applies transaction advice only on external calls through the Spring bean.\n\nFixes: move @Transactional method to another bean, use self-injection (discouraged), or AspectJ compile-time weaving (spring-aspects).\n\nAlso: @Transactional only works on public methods of proxied beans by default. private/final methods are not advised with JDK/CGLIB proxy mode limitations.',
    code: [{ language: 'java', snippet: '@Service\npublic class TransferService {\n    private final TransferService self;  // injected proxy\n\n    public TransferService(@Lazy TransferService self) { this.self = self; }\n\n    public void transfer(Long from, Long to, BigDecimal amount) {\n        self.debitAndCredit(from, to, amount);  // goes through proxy\n    }\n\n    @Transactional\n    public void debitAndCredit(Long from, Long to, BigDecimal amount) { }\n}' }],
    source: SPRING('reference/data/sql.html'),
  },
  {
    question: 'What is the difference between unit tests, slice tests, and @SpringBootTest integration tests?',
    answer:
      'Unit tests — test single class in isolation with mocks (JUnit 5 + Mockito). No Spring context. Fast, narrow scope.\n\nSlice tests — load partial Spring context for one layer:\n• @WebMvcTest — controllers only, MockMvc, mock services\n• @DataJpaTest — JPA + in-memory DB, repositories only\n• @JsonTest — Jackson serialization\nFaster than full context, focused failures.\n\n@SpringBootTest — loads full ApplicationContext (or WebEnvironment). Integration/end-to-end tests with real or test containers wiring. Slower but validates bean assembly and cross-layer behavior.\n\nUse the narrowest test type that proves the behavior — pyramid: many unit, some slice, few full integration.',
    source: SPRING('reference/testing/index.html'),
  },
  {
    question: 'When would you use @WebMvcTest, @DataJpaTest, MockMvc, or Testcontainers?',
    answer:
      '@WebMvcTest(Controller.class) — test MVC layer: request mapping, JSON serialization, status codes, security. Uses MockMvc to simulate HTTP without starting full server. Mock @MockBean services.\n\n@DataJpaTest — test repositories with auto-configured in-memory DB (H2) or Testcontainers PostgreSQL. Rolls back transactions after each test by default.\n\nMockMvc — standalone or @AutoConfigureMockMvc for simulating HTTP requests and asserting responses.\n\nTestcontainers — spin real Docker containers (Postgres, Kafka, Redis) for integration tests that need production-like behavior. Repeatable, isolated, no shared test DB.\n\nUse Testcontainers when H2 incompatibilities or broker-specific behavior matter; use slices when mocking dependencies is sufficient.',
    code: [{ language: 'java', snippet: '@WebMvcTest(AccountController.class)\nclass AccountControllerTest {\n    @Autowired MockMvc mockMvc;\n    @MockBean AccountService accountService;\n\n    @Test\n    void returnsAccount() throws Exception {\n        when(accountService.find(1L)).thenReturn(new AccountDto(1L, "Akash"));\n        mockMvc.perform(get("/api/accounts/1"))\n            .andExpect(status().isOk())\n            .andExpect(jsonPath("$.name").value("Akash"));\n    }\n}' }],
    source: SPRING('reference/testing/index.html'),
  },
  {
    question: 'What does Spring Boot Actuator provide?',
    answer:
      'Actuator adds production-ready operational endpoints and metrics to your application:\n\nHealth — /actuator/health (liveness, readiness, diskSpace, DB)\nMetrics — /actuator/metrics, Micrometer integration (Prometheus, Datadog)\nInfo — build/git info via info.* properties\nEnvironment — /actuator/env, configprops for debugging config\nLoggers — adjust log levels at runtime\nHTTP mappings, thread dump, heap dump (sensitive)\n\nAdd spring-boot-starter-actuator dependency. Expose endpoints via management.endpoints.web.exposure.include. Separate management port possible: management.server.port=9090.',
    source: SPRING('reference/actuator/endpoints.html'),
  },
  {
    question: 'How should Actuator endpoints be exposed and secured?',
    answer:
      'Default: only /health exposed over HTTP (Boot 2.x+). Configure exposure explicitly:\n\nmanagement.endpoints.web.exposure.include=health,info,prometheus\nmanagement.endpoints.web.exposure.exclude=env,beans\n\nSecurity best practices:\n• Never expose env, heapdump, shutdown publicly\n• Use separate management port and network (management.server.port)\n• Require authentication/authorization via Spring Security for sensitive endpoints\n• Expose health/info on internal network only; use Kubernetes probes against /actuator/health/liveness\n• Disable JMX if unused: spring.jmx.enabled=false\n\nProduction: expose health + prometheus; secure with OAuth2/mTLS on internal VLAN.',
    code: [{ language: 'properties', snippet: 'management.endpoints.web.exposure.include=health,info,prometheus\nmanagement.endpoint.health.show-details=when_authorized\nmanagement.server.port=9090\nmanagement.endpoints.web.base-path=/actuator' }],
    source: SPRING('reference/actuator/endpoints.html'),
  },
  {
    question: 'How is security auto-configuration changed when a custom SecurityFilterChain bean is declared?',
    answer:
      'Spring Boot\'s SecurityAutoConfiguration backs off when a SecurityFilterChain @Bean is defined (Spring Security 6+ filter chain model). Your bean replaces Boot\'s default permit-all/basic setup.\n\nYou take full responsibility for:\n• Authorization rules (authorizeHttpRequests)\n• Authentication mechanism (form login, OAuth2, JWT)\n• CSRF, CORS, session management\n• Actuator endpoint protection (separate requestMatchers for /actuator/**)\n\nMultiple SecurityFilterChain beans supported with @Order — e.g., Order(1) for actuator on management port, Order(2) for application API.',
    code: [{ language: 'java', snippet: '@Configuration\n@EnableWebSecurity\npublic class SecurityConfig {\n    @Bean\n    SecurityFilterChain apiChain(HttpSecurity http) throws Exception {\n        return http\n            .securityMatcher("/api/**")\n            .authorizeHttpRequests(a -> a.anyRequest().authenticated())\n            .oauth2ResourceServer(o -> o.jwt(Customizer.withDefaults()))\n            .csrf(csrf -> csrf.disable())\n            .build();\n    }\n}' }],
    source: SPRING('reference/actuator/endpoints.html'),
  },
  {
    question: 'How do servlet-based Spring MVC and reactive Spring WebFlux differ?',
    answer:
      'Spring MVC (spring-boot-starter-web) — servlet stack (Tomcat), thread-per-request model. Blocking I/O. Mature ecosystem, Spring Data JPA works naturally. Best for typical CRUD REST, JDBC, most enterprise apps.\n\nSpring WebFlux (spring-boot-starter-webflux) — reactive stack (Netty), event-loop with small thread pool. Non-blocking I/O end-to-end required for benefit. Uses Mono/Flux (Project Reactor). Best for high-concurrency I/O-bound services, streaming, gateway patterns.\n\nDo not mix blocking JDBC/JPA calls on WebFlux event-loop threads — use bounded elastic scheduler or separate blocking service layer. Choose one stack per application; Boot auto-configures based on classpath (prefer WebFlux if both present unless spring.main.web-application-type=servlet).',
    code: [{ language: 'java', snippet: '// WebFlux reactive controller\n@RestController\npublic class EventController {\n    @GetMapping("/events")\n    public Flux<Event> stream() {\n        return eventRepository.findAll().delayElements(Duration.ofMillis(100));\n    }\n}' }],
    source: SPRING('reference/web/reactive.html'),
  },
  {
    question: 'How do executable JAR files work, and how are they typically built with Maven or Gradle?',
    answer:
      'Spring Boot repackages the application into an executable "fat" JAR with nested structure:\n• BOOT-INF/classes — your compiled classes and resources\n• BOOT-INF/lib — dependency JARs\n• JarLauncher as Main-Class in manifest\n\nRunning java -jar app.jar starts JarLauncher → LaunchedURLClassLoader → Spring Boot main method.\n\nMaven: spring-boot-maven-plugin with repackage goal (bound to package phase).\nGradle: org.springframework.boot plugin, bootJar task.\n\nLayers support (Spring Boot 2.3+) for efficient Docker caching. Buildpacks and Cloud Native Buildpacks produce images without Dockerfile.',
    code: [{ language: 'xml', snippet: '<build>\n  <plugins>\n    <plugin>\n      <groupId>org.springframework.boot</groupId>\n      <artifactId>spring-boot-maven-plugin</artifactId>\n    </plugin>\n  </plugins>\n</build>\n\n<!-- mvn package → target/myapp-0.0.1-SNAPSHOT.jar -->' }],
    source: SPRING('reference/using/build-systems.html'),
  },
]

/* ── Challenging Spring Boot (20) ── */
export const challengingQuestions = [
  {
    question: 'Trace the startup process from SpringApplication.run() to creation of the application context and singleton beans.',
    answer:
      'SpringApplication.run() sequence:\n\n1. Create SpringApplication instance — infer web app type (servlet/reactive/none) from classpath\n2. Load ApplicationContextInitializer and ApplicationListener via spring.factories\n3. Prepare Environment — process args, property sources, profiles\n4. Print banner (optional)\n5. Create ApplicationContext (AnnotationConfigServletWebServerApplicationContext for web)\n6. Prepare context — postProcessApplicationContext, apply initializers\n7. Refresh context (AbstractApplicationContext.refresh):\n   a. prepareRefresh\n   b. obtainFreshBeanFactory / refreshBeanFactory\n   c. prepareBeanFactory\n   d. postProcessBeanFactory (BeanFactoryPostProcessors — critical for auto-config)\n   e. invokeBeanFactoryPostProcessors (ConfigurationClassPostProcessor parses @Configuration, triggers auto-config import)\n   f. registerBeanPostProcessors\n   g. onRefresh — start embedded web server (Tomcat/Netty)\n   h. registerListeners, finishBeanFactoryInitialization — instantiate singleton beans (dependency injection, @PostConstruct)\n   i. finishRefresh — publish ContextRefreshedEvent\n8. Call runners — ApplicationRunner and CommandLineRunner beans\n9. Return running ApplicationContext\n\nFailures during refresh typically prevent context creation — fail-fast at startup.',
    source: SPRING('reference/using/auto-configuration.html'),
  },
  {
    question: 'How are auto-configuration candidates discovered in current Spring Boot versions?',
    answer:
      'Spring Boot 3.x uses META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports — plain text file listing fully qualified auto-configuration class names (one per line). AutoConfigurationImportSelector reads this file from all jars on classpath.\n\nOlder Boot 2.x used META-INF/spring.factories with org.springframework.boot.autoconfigure.EnableAutoConfiguration key.\n\nAdditional mechanisms:\n• @ImportAutoConfiguration for test slices and libraries\n• spring.autoconfigure.exclude property\n• AutoConfigurationCustomizer for programmatic filtering\n\nCandidates are filtered by @Conditional evaluation before registration. spring-boot-autoconfigure-processor generates metadata at compile time for IDE and conditions report.',
    source: SPRING('reference/features/developing-auto-configuration.html'),
  },
  {
    question: 'How would you design and package a reusable custom auto-configuration and starter?',
    answer:
      'Structure as two modules (convention):\n\n1. autoconfigure module — contains @AutoConfiguration class, @Conditional beans, META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports entry, spring-configuration-metadata.json for IDE property hints\n2. starter module — empty POM depending on autoconfigure + required libraries (e.g., my-feature-spring-boot-starter)\n\nDesign principles:\n• Use @ConditionalOnClass / @ConditionalOnMissingBean aggressively\n• Externalize settings with @ConfigurationProperties(prefix = "my.feature")\n• @AutoConfigureAfter(DataSourceAutoConfiguration.class) when order matters\n• Provide sensible defaults; document override points\n• Ship sample application and tests using @ApplicationContextRunner for auto-config unit tests\n\nConsumers add one starter dependency — beans appear automatically.',
    code: [{ language: 'java', snippet: '@AutoConfiguration\n@ConditionalOnClass(NotificationClient.class)\n@EnableConfigurationProperties(NotificationProperties.class)\npublic class NotificationAutoConfiguration {\n    @Bean\n    @ConditionalOnMissingBean\n    NotificationClient notificationClient(NotificationProperties props) {\n        return new NotificationClient(props.getUrl(), props.getApiKey());\n    }\n}' }],
    source: SPRING('reference/features/developing-auto-configuration.html'),
  },
  {
    question: 'How do you make a custom auto-configuration back off cleanly when an application supplies its own bean?',
    answer:
      'Annotate your @Bean methods with @ConditionalOnMissingBean (no name/type specified = any bean of return type). If the application defines NotificationClient, your auto-configured bean is skipped.\n\nFor multiple variants: @ConditionalOnMissingBean(NotificationClient.class) on default impl; user provides @Primary bean or named @Bean("customNotificationClient").\n\nFor entire configuration class: @ConditionalOnMissingBean(type = NotificationClient.class) on the @AutoConfiguration class.\n\nOffer extension points: interface + default impl auto-configured; user replaces interface bean. Document the bean type and property prefix. Use @ConditionalOnProperty for feature toggle: my.feature.enabled=false disables module entirely.',
    code: [{ language: 'java', snippet: '@Bean\n@ConditionalOnMissingBean\npublic NotificationClient notificationClient(NotificationProperties props) {\n    return new DefaultNotificationClient(props);\n}\n\n// Application override — no annotation needed\n@Bean\npublic NotificationClient notificationClient() {\n    return new CustomNotificationClient();\n}' }],
    source: SPRING('reference/features/developing-auto-configuration.html'),
  },
  {
    question: 'How would you debug why an expected auto-configuration or bean was not created?',
    answer:
      'Debugging checklist:\n\n1. Enable auto-config report: debug=true or --debug. Logs positive matches, negative matches, exclusions at startup.\n2. Actuator /actuator/conditions (if exposed) — same report in JSON.\n3. /actuator/beans — search for expected bean name/type.\n4. Verify @ConditionalOnClass — missing dependency on classpath?\n5. Check @ConditionalOnProperty — property misspelled or profile inactive?\n6. @ConditionalOnMissingBean — did another bean already exist?\n7. Component scan package — is class outside scan path?\n8. Exclude filters — spring.autoconfigure.exclude or @SpringBootApplication(exclude)\n9. Bean definition overriding disabled — duplicate bean types?\n10. Use ApplicationContextRunner in unit test to reproduce conditions in isolation.\n\nCommon fix: add missing starter, correct property, move class into scanned package, or remove conflicting @Bean.',
    code: [{ language: 'properties', snippet: 'debug=true\nlogging.level.org.springframework.boot.autoconfigure=DEBUG' }],
    source: SPRING('reference/using/auto-configuration.html'),
  },
  {
    question: 'Explain transaction propagation and isolation. Which combinations can create unexpected behavior?',
    answer:
      'Propagation — how transactional methods join existing transactions:\n• REQUIRED (default) — join or create new\n• REQUIRES_NEW — suspend current, always new transaction\n• NESTED — nested savepoint within current (if supported)\n• SUPPORTS — join if exists, non-transactional otherwise\n• NOT_SUPPORTED — suspend current, run non-transactional\n• MANDATORY — must have existing transaction or fail\n• NEVER — must not have transaction\n\nIsolation — concurrency visibility: DEFAULT, READ_UNCOMMITTED, READ_COMMITTED, REPEATABLE_READ, SERIALIZABLE.\n\nUnexpected behavior traps:\n• REQUIRES_NEW + outer rollback — inner commit persists (partial commit)\n• self-invocation skips @Transactional entirely\n• NESTED not supported on all JPA providers\n• READ_COMMITTED + non-repeatable reads in long transactions\n• SERIALIZABLE — deadlocks and performance hits\n• Catching exceptions without rollback — mark rollback-only or use rollbackFor',
    code: [{ language: 'java', snippet: '@Transactional(propagation = Propagation.REQUIRES_NEW)\npublic void writeAuditLog(String action) {\n    auditRepository.save(new Audit(action));  // commits even if outer rolls back\n}' }],
    source: SPRING('reference/data/sql.html'),
  },
  {
    question: 'Why might @Transactional fail on private methods, final methods, or self-invocation in proxy-based configurations?',
    answer:
      'Spring AOP applies @Transactional via proxy wrapping the bean. External calls hit the proxy → transaction interceptor → target method.\n\nSelf-invocation: internal this.method() bypasses proxy — no transaction advice applied.\n\nprivate methods: not visible to proxy/CGLIB subclass — cannot be overridden/intercepted.\n\nfinal methods/classes: CGLIB cannot subclass final class or override final methods — proxy limitations (JDK proxy uses interfaces only).\n\nSpring Boot default: CGLIB proxies for @Transactional on concrete classes (spring.aop.proxy-target-class=true).\n\nSolutions: move transactional logic to separate bean, use AspectJ mode (spring.transaction.aspectj.enabled), or inject self proxy with @Lazy.',
    source: SPRING('reference/data/sql.html'),
  },
  {
    question: 'How would you prevent lost updates in a concurrent REST API using optimistic locking?',
    answer:
      'Lost update: two clients read version N, both write, last write silently overwrites first.\n\nOptimistic locking: add @Version field (Long/Timestamp). JPA increments on successful update. Concurrent update throws OptimisticLockingFailureException → map to 409 Conflict.\n\nFlow:\n1. Client GET receives entity with version field\n2. Client PUT/PATCH includes version in body\n3. UPDATE ... WHERE id=? AND version=? — if 0 rows updated, conflict\n4. Return 409 with current state for client retry\n\nAlternative: ETag/If-Match headers. Pessimistic locking (@Lock(PESSIMISTIC_WRITE)) for high-contention financial operations — blocks readers/writers, use sparingly.',
    code: [{ language: 'java', snippet: '@Entity\npublic class Account {\n    @Id private Long id;\n    @Version private Long version;\n    private BigDecimal balance;\n}\n\n@PutMapping("/{id}")\npublic Account update(@PathVariable Long id, @RequestBody UpdateAccountRequest req) {\n    try {\n        return accountService.update(id, req);\n    } catch (OptimisticLockingFailureException ex) {\n        throw new ConflictException("Account was modified by another user");\n    }\n}' }],
    source: SPRING('reference/data/sql.html'),
  },
  {
    question: 'How would you diagnose connection-pool exhaustion, slow database calls, and thread-pool saturation?',
    answer:
      'Connection pool exhaustion:\n• Symptoms: timeouts waiting for connection, PoolExhaustedException\n• Check HikariCP metrics: hikaricp.connections.active, pending threads\n• Causes: pool too small, connection leaks (missing @Transactional close, stream not closed), long-running queries holding connections\n• Fix: right-size maximum-pool-size, leak detection threshold, ensure @Transactional boundaries, query tuning\n\nSlow database:\n• Enable spring.jpa.properties.hibernate.generate_statistics (dev)\n• Micrometer @Timed, datasource proxy logging, pg_stat_statements\n• Actuator metrics, distributed traces (Micrometer Tracing)\n\nThread pool saturation:\n• Tomcat: server.tomcat.threads.max, accept-count, queue metrics\n• Async @Async pool: TaskExecutor bean sizing, rejected execution handler\n• Symptoms: 503 responses, slow latency under load, threads blocked on JDBC\n\nCorrelate thread dumps (/actuator/threaddump) with DB active sessions.',
    source: SPRING('reference/actuator/endpoints.html'),
  },
  {
    question: 'How would you design idempotent POST processing for requests that may be retried?',
    answer:
      'Idempotent POST ensures duplicate requests (client retry, network timeout) produce same result without duplicate side effects.\n\nPatterns:\n1. Idempotency-Key header — client sends UUID; server stores key → response mapping in Redis/DB with TTL. Duplicate key returns cached response.\n2. Natural idempotency — upsert by business key (orderRef) with unique constraint; duplicate insert fails gracefully.\n3. Token-based — client obtains one-time token via GET, submits with POST.\n\nImplementation:\n• @Transactional: check idempotency store first\n• Unique index on idempotency_key\n• Return same HTTP status/body on replay (201 vs 200 debate — many return original 201 with same Location)\n• Handle in-flight duplicates: processing state + locked key\n\nEssential for payment APIs and message consumers with at-least-once delivery.',
    code: [{ language: 'java', snippet: '@PostMapping("/payments")\npublic ResponseEntity<PaymentResponse> pay(\n    @RequestHeader("Idempotency-Key") String key,\n    @RequestBody PaymentRequest req) {\n    return idempotencyService.execute(key, () -> paymentService.process(req));\n}' }],
    source: SPRING('reference/'),
  },
  {
    question: 'How would you coordinate database changes and message publication without relying on a distributed transaction?',
    answer:
      'Distributed transactions (2PC/XA) are slow, fragile, and discouraged across DB + Kafka.\n\nPreferred patterns:\n\n1. Transactional Outbox — write business data + outbox event in same local DB transaction. Separate poller publishes to broker and marks sent.\n\n2. Change Data Capture (Debezium) — read DB transaction log, publish events. No application publish code.\n\n3. Saga — choreographed or orchestrated compensating transactions across services.\n\nApplication flow (outbox):\n• BEGIN; UPDATE account; INSERT INTO outbox(event_type, payload); COMMIT\n• OutboxRelay (@Scheduled or separate process) reads unpublished rows, publishes to Kafka, updates status\n\nGuarantees at-least-once delivery to broker; consumers must be idempotent. No dual-write race between DB commit and message send.',
    source: SPRING('reference/'),
  },
  {
    question: 'What is the transactional outbox pattern, and what failure modes must its publisher handle?',
    answer:
      'Transactional outbox stores events in an outbox table within the same database transaction as domain changes. A separate publisher process relays events to the message broker.\n\nPublisher failure modes:\n1. Crash after DB commit, before publish — row stays pending; retry poller picks up (at-least-once)\n2. Publish succeeds, mark-sent fails — duplicate publish on retry → consumers need idempotency\n3. Ordering — publish in transaction order (ORDER BY created_at, id); partition by aggregate ID\n4. Poison messages — max retry + dead-letter queue\n5. Publisher faster than consumers — monitor lag, scale consumers\n6. Schema evolution — version events, backward compatible payloads\n\nUse SELECT ... FOR UPDATE SKIP LOCKED for concurrent pollers. Spring: @Scheduled relay, or Debezium for log-based capture without polling.',
    code: [{ language: 'java', snippet: '@Transactional\npublic void placeOrder(Order order) {\n    orderRepository.save(order);\n    outboxRepository.save(new OutboxEvent(\n        "OrderPlaced", order.getId().toString(), toJson(order)));\n}\n\n@Scheduled(fixedDelay = 1000)\npublic void publishOutbox() {\n    outboxRepository.findPendingForUpdate().forEach(this::publishAndMarkSent);\n}' }],
    source: SPRING('reference/'),
  },
  {
    question: 'How would you implement graceful shutdown while allowing in-flight requests and message handlers to finish?',
    answer:
      'Spring Boot graceful shutdown:\n\nserver.shutdown=graceful — stops accepting new requests, waits for in-flight HTTP requests to complete within spring.lifecycle.timeout-per-shutdown-phase (default 30s).\n\nAdditional steps:\n• Register SmartLifecycle / @PreDestroy to pause Kafka listeners (KafkaListenerEndpointRegistry.stop)\n• Use @EventListener(ContextClosedEvent) to drain executor queues\n• Configure TaskExecutor waitForTasksToCompleteOnShutdown=true, awaitTerminationSeconds\n• Kubernetes: preStop hook + sufficient terminationGracePeriodSeconds\n\nMessage consumers: stop polling, finish current message, commit offset, then exit. Avoid hard kill during DB transaction.\n\nFor long jobs: return 503 on health check during shutdown; register with platform load balancer deregistration first.',
    code: [{ language: 'properties', snippet: 'server.shutdown=graceful\nspring.lifecycle.timeout-per-shutdown-phase=30s\nspring.kafka.listener.ack-mode=record' }],
    source: SPRING('reference/actuator/endpoints.html'),
  },
  {
    question: 'How would you structure liveness, readiness, startup, and dependency health checks?',
    answer:
      'Kubernetes probe mapping:\n\nstartupProbe — slow-starting apps (migrations, cache warm). /actuator/health/liveness with long failureThreshold. Until success, other probes disabled.\n\nlivenessProbe — is process alive? Restart if fails. Lightweight — don\'t include external deps (avoid restart loops when DB down). Custom /actuator/health/liveness with diskSpace + internal state only.\n\nreadinessProbe — can accept traffic? Include DB, broker, cache checks. /actuator/health/readiness. Remove from load balancer when failing.\n\nImplementation:\n• Custom HealthIndicator beans for Kafka, Redis, downstream HTTP\n• @Component class implements HealthIndicator\n• management.endpoint.health.group.readiness.include=readinessState,db,kafka\n• management.endpoint.health.group.liveness.include=livenessState,ping\n\nActuator 3.x supports dedicated /actuator/health/liveness and /readiness groups.',
    code: [{ language: 'java', snippet: '@Component\npublic class PaymentGatewayHealth implements HealthIndicator {\n    private final PaymentClient client;\n\n    @Override\n    public Health health() {\n        try {\n            client.ping();\n            return Health.up().build();\n        } catch (Exception ex) {\n            return Health.down(ex).build();\n        }\n    }\n}' }],
    source: SPRING('reference/actuator/endpoints.html'),
  },
  {
    question: 'How would you add metrics, traces, structured logs, and correlation IDs across service boundaries?',
    answer:
      'Observability stack for Spring Boot:\n\nMetrics — Micrometer + spring-boot-starter-actuator. Export to Prometheus (management.prometheus.metrics.export.enabled=true). Custom @Timed, Counter, Gauge via MeterRegistry.\n\nTraces — Micrometer Tracing with OpenTelemetry or Brave bridge. Auto-instrumentation for WebMvc, WebClient, JDBC, Kafka. Propagate trace context via W3C traceparent headers.\n\nStructured logs — Logback JSON encoder (logstash-logback-encoder). Include traceId, spanId from MDC.\n\nCorrelation IDs — Servlet Filter or WebFilter reads/generates X-Correlation-Id, puts in MDC, adds to response. RestTemplate/WebClient ClientHttpRequestInterceptor propagates header downstream.\n\nUnified: same trace ID flows through logs, metrics (exemplars), and traces. Dashboard per request path in Grafana/Datadog.',
    code: [{ language: 'java', snippet: '@Component\npublic class CorrelationIdFilter extends OncePerRequestFilter {\n    @Override\n    protected void doFilterInternal(HttpServletRequest req, HttpServletResponse res, FilterChain chain)\n            throws ServletException, IOException {\n        String id = Optional.ofNullable(req.getHeader("X-Correlation-Id"))\n            .orElse(UUID.randomUUID().toString());\n        MDC.put("correlationId", id);\n        res.setHeader("X-Correlation-Id", id);\n        try { chain.doFilter(req, res); } finally { MDC.clear(); }\n    }\n}' }],
    source: SPRING('reference/actuator/endpoints.html'),
  },
  {
    question: 'How do you secure Actuator, management, and application endpoints when they use separate ports or networks?',
    answer:
      'Separate management port (management.server.port=9090) binds Actuator on different interface — firewall rules restrict 9090 to ops network only; public port 8080 has no actuator exposure.\n\nSecurity patterns:\n• Dual SecurityFilterChain with @Order — management chain permits health/prometheus from monitoring CIDR; requires ADMIN role for env/beans\n• mTLS for management port in service mesh\n• NetworkPolicy (K8s) — only Prometheus scrapes 9090\n• Do not expose management port via public Ingress\n• application API uses OAuth2/JWT; management uses separate credentials or IP allowlist\n\nmanagement.endpoints.web.exposure.include=health,prometheus — minimal surface. spring.security.user for simple setups; LDAP/OAuth for production.',
    code: [{ language: 'java', snippet: '@Bean\n@Order(1)\nSecurityFilterChain managementSecurity(HttpSecurity http) throws Exception {\n    return http\n        .securityMatcher(EndpointRequest.toAnyEndpoint())\n        .authorizeHttpRequests(a -> a\n            .requestMatchers(EndpointRequest.to("health", "prometheus")).permitAll()\n            .anyRequest().hasRole("ACTUATOR_ADMIN"))\n        .httpBasic(Customizer.withDefaults())\n        .build();\n}' }],
    source: SPRING('reference/actuator/endpoints.html'),
  },
  {
    question: 'How would you test an application against real database and message-broker behavior while keeping tests repeatable?',
    answer:
      'Testcontainers provides disposable Docker instances per test class or suite:\n\n• @Container static PostgreSQLContainer<?> postgres — JDBC URL injected via @DynamicPropertySource\n• KafkaContainer for producer/consumer integration\n• @ServiceConnection (Boot 3.1+) auto-wires datasource/kafka properties\n\nRepeatability practices:\n• Flyway/Liquibase migrations run before tests — known schema state\n• @Transactional test rollback OR @Sql cleanup scripts\n• Isolated topics/queues per test run (UUID suffix)\n• @DirtiesContext sparingly — expensive\n• Slice vs full: @SpringBootTest + Testcontainers for critical paths; @DataJpaTest + container for repository layer\n\nCI: Docker-in-Docker or Testcontainers Cloud. Pin image versions (postgres:16-alpine).',
    code: [{ language: 'java', snippet: '@SpringBootTest\n@Testcontainers\nclass PaymentIntegrationTest {\n    @Container\n    static PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>("postgres:16-alpine");\n\n    @DynamicPropertySource\n    static void configure(DynamicPropertyRegistry registry) {\n        registry.add("spring.datasource.url", postgres::getJdbcUrl);\n        registry.add("spring.datasource.username", postgres::getUsername);\n        registry.add("spring.datasource.password", postgres::getPassword);\n    }\n}' }],
    source: SPRING('reference/testing/index.html'),
  },
  {
    question: 'When should an application use asynchronous methods, scheduled jobs, messaging, or reactive processing?',
    answer:
      'Choose based on workload shape:\n\n@Async (TaskExecutor) — offload blocking work from HTTP thread (send email, generate PDF). Not for transaction boundaries across threads without TransactionSynchronization. Fire-and-forget or CompletableFuture return.\n\n@Scheduled — periodic housekeeping (outbox relay, cache refresh, cleanup). Single-node unless Quartz/ShedLock for cluster coordination.\n\nMessaging (Kafka/RabbitMQ) — decouple services, buffer spikes, event-driven architecture, cross-team contracts. At-least-once consumers with idempotency.\n\nReactive (WebFlux) — high concurrency I/O-bound with non-blocking stack end-to-end. Streaming, SSE, gateway aggregation.\n\nDecision guide: async for intra-service offload; messaging for inter-service events; reactive when thread pools become bottleneck on I/O; scheduled for time-based batch. Avoid @Async for DB transactions that must commit before response unless carefully designed.',
    code: [{ language: 'java', snippet: '@Async\npublic CompletableFuture<Void> sendReceipt(Order order) {\n    emailService.send(order);\n    return CompletableFuture.completedFuture(null);\n}\n\n@Scheduled(cron = "0 */5 * * * *")\npublic void relayOutbox() { outboxPublisher.publishPending(); }' }],
    source: SPRING('reference/'),
  },
  {
    question: 'How would you diagnose a memory leak caused by application-context references, caches, listeners, or thread-local state?',
    answer:
      'Leak sources in Spring Boot:\n\n1. Static fields holding ApplicationContext or beans — prevents GC of entire context on redeploy\n2. Unbounded caches (HashMap without eviction) — Caffeine/Guava with maximumSize and TTL\n3. Event listeners not removed — register/unregister pairs; avoid leaking references in @EventListener\n4. ThreadLocal without remove — request context, MDC, security context on pooled threads\n5. Custom ThreadPoolExecutor without shutdown on context destroy\n6. ClassLoader leaks from hot deploy (less common in Boot executable JAR)\n\nDiagnosis:\n• Heap dump (jmap, Actuator heapdump in dev only)\n• Eclipse MAT — dominator tree, leak suspects\n• Micrometer JVM memory metrics trend\n• Repeated redeploy test in dev — metaspace growth\n\nFix: @PreDestroy cleanup, remove ThreadLocal in finally, bounded caches, WeakReference where appropriate, avoid static context references.',
    source: SPRING('reference/actuator/endpoints.html'),
  },
  {
    question: 'Design a resilient Spring Boot service that calls an unreliable downstream API. Address timeouts, bounded retries, backoff, circuit breaking, bulkheads, observability, and fallback behavior.',
    answer:
      'Resilience design for downstream HTTP calls:\n\nTimeouts — connect + read timeouts on RestTemplate/WebClient (e.g., 2s connect, 5s read). Never infinite wait.\n\nBounded retries — retry only idempotent operations (GET) or with idempotency key. Max 3 attempts. Exponential backoff with jitter (Resilience4j Retry). No retry on 4xx (except 429).\n\nCircuit breaker — Resilience4j CircuitBreaker: open after failure rate threshold, half-open probe, slow call detection. Prevents cascade failures.\n\nBulkhead — separate thread pool/semaphore for downstream calls (Resilience4j Bulkhead). Payment API slowness does not exhaust Tomcat threads.\n\nFallback — return cached/default response, degraded mode flag, or queue for async retry. Log and metric the degradation.\n\nObservability — Micrometer metrics (resilience4j.circuitbreaker.calls), trace spans on each attempt, structured log with correlation ID and downstream status.\n\nImplementation: Resilience4j Spring Boot 3 integration (@CircuitBreaker, @Retry, @Bulkhead) or Spring Cloud Circuit Breaker abstraction with WebClient reactive stack.',
    code: [{ language: 'java', snippet: '@Service\npublic class RatingClient {\n    private final WebClient webClient;\n    private final CircuitBreaker circuitBreaker;\n\n    public RatingClient(WebClient.Builder builder, CircuitBreakerRegistry registry) {\n        this.webClient = builder.baseUrl("https://ratings.api").build();\n        this.circuitBreaker = registry.circuitBreaker("ratings");\n    }\n\n    public Rating fetchRating(String productId) {\n        Supplier<Rating> supplier = CircuitBreaker.decorateSupplier(circuitBreaker, () ->\n            webClient.get().uri("/ratings/{id}", productId)\n                .retrieve()\n                .bodyToMono(Rating.class)\n                .timeout(Duration.ofSeconds(3))\n                .blockOptional()\n                .orElse(Rating.unavailable()));\n        try {\n            return supplier.get();\n        } catch (CallNotPermittedException ex) {\n            return Rating.unavailable();  // circuit open — fallback\n        }\n    }\n}' }],
    source: SPRING('reference/'),
  },
]
