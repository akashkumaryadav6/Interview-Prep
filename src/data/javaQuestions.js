import { GFG, TUTORIALS, BROWSERSTACK, ORACLE_DOCS, DEV_JAVA } from './sources'

/* ── Basic Java (15) ── */
export const basicQuestions = [
  {
    question: 'What is Java, and how do the JDK, JRE, and JVM differ?',
    answer:
      'Java is a high-level, object-oriented, platform-independent programming language. Source code (.java) is compiled to bytecode (.class), which the JVM executes. The "Write Once, Run Anywhere" promise comes from running the same bytecode on any OS that has a compatible JVM.\n\nJVM (Java Virtual Machine) is the runtime engine that interprets/JIT-compiles bytecode and manages memory (heap, stack, GC). JRE (Java Runtime Environment) = JVM + core libraries needed to run Java applications. JDK (Java Development Kit) = JRE + development tools (javac compiler, jar, javadoc, debugger).\n\nExample: To run a packaged app you need only the JRE. To write and compile Java code you need the JDK.',
    source: ORACLE_DOCS('javase/tutorial/getStarted/intro/definition.html'),
  },
  {
    question: 'What is the difference between primitive types and reference types?',
    answer:
      'Primitive types (byte, short, int, long, float, double, char, boolean) store values directly on the stack (or inline in objects). They are not objects, have fixed size, and cannot be null.\n\nReference types (classes, interfaces, arrays, enums) store a reference (memory address) to an object on the heap. They can be null, support methods, and participate in polymorphism. Autoboxing wraps primitives in wrapper objects (int → Integer) when needed.\n\nExample: int x = 10 stores the value 10. String s = "hi" stores a reference to a String object on the heap.',
    code: [{ language: 'java', snippet: "int count = 42;              // primitive\nInteger boxed = count;       // autoboxing\nString name = \"Akash\";       // reference type\nname = null;                 // valid for references, not primitives" }],
    source: ORACLE_DOCS('javase/tutorial/java/nutsandbolts/datatypes.html'),
  },
  {
    question: 'What is a class, and what is an object?',
    answer:
      'A class is a blueprint that defines fields (state) and methods (behavior). It describes what data an entity holds and what operations it can perform. A class exists at compile time as a type definition.\n\nAn object is a runtime instance of a class — a concrete entity in memory with its own field values. You create objects with the new keyword and invoke constructors. Many objects can share one class definition.\n\nExample: class Car defines model and speed; new Car("Sedan") creates an object with its own model value.',
    code: [{ language: 'java', snippet: "class Car {\n    String model;\n    int speed;\n    Car(String model) { this.model = model; }\n}\n\nCar myCar = new Car(\"Sedan\");  // object instance" }],
    source: ORACLE_DOCS('javase/tutorial/java/concepts/'),
  },
  {
    question: 'What are the four main principles of object-oriented programming?',
    answer:
      'Encapsulation bundles data and methods inside a class, hiding internal state behind access modifiers and exposing controlled APIs (getters/setters). This protects invariants and reduces coupling.\n\nInheritance lets a subclass reuse and extend a superclass (extends keyword). It models is-a relationships and enables code reuse. Java supports single class inheritance but multiple interface implementation.\n\nPolymorphism allows one interface to take many forms — method overriding lets subclasses provide specific behavior; a superclass reference can point to subclass objects. Abstraction hides implementation complexity and exposes only essential behavior via abstract classes and interfaces.\n\nExample: List interface is polymorphic — ArrayList and LinkedList both implement List but behave differently internally.',
    source: ORACLE_DOCS('javase/tutorial/java/concepts/'),
  },
  {
    question: 'What is the difference between a constructor and a method?',
    answer:
      'A constructor initializes a new object when it is created. It has the same name as the class, no return type (not even void), and is invoked automatically by new. A class can have multiple constructors via overloading.\n\nA method performs operations on an object or class. It has a return type (or void), a name, parameters, and is called explicitly. Methods can be static or instance-level; constructors are always instance-level.\n\nExample: Employee(String name) is a constructor that sets initial state. calculateSalary() is a method that returns a computed value.',
    code: [{ language: 'java', snippet: "class Employee {\n    String name;\n    Employee(String name) { this.name = name; }  // constructor\n    double calculateSalary() { return 50000; }   // method\n}" }],
    source: GFG('constructors-in-java'),
  },
  {
    question: 'What do public, protected, package-private, and private mean in Java?',
    answer:
      'Access modifiers control visibility of classes, fields, and methods:\n\npublic — accessible from any class in any package.\nprotected — accessible within the same package and by subclasses (even in other packages).\npackage-private (default, no modifier) — accessible only within the same package.\nprivate — accessible only within the declaring class.\n\nPrinciple of least privilege: start with private, widen only when necessary. Protected is useful for framework extension points; public for API surfaces.',
    code: [{ language: 'java', snippet: "public class User {\n    private String password;       // class only\n    String email;                  // package-private\n    protected int age;             // package + subclasses\n    public String getName() { return \"Akash\"; }  // everywhere\n}" }],
    source: ORACLE_DOCS('javase/tutorial/java/javaOO/accesscontrol.html'),
  },
  {
    question: 'What is the difference between an instance member and a static member?',
    answer:
      'Instance members (fields and methods without static) belong to each object. Every instance has its own copy of instance fields. You access them via an object reference: obj.method().\n\nStatic members belong to the class itself, not any single instance. There is one copy shared by all instances. Access via ClassName.member or obj.member (discouraged). Static methods cannot access instance fields directly — they lack a this reference.\n\nExample: Math.PI is static (one constant for all). An Employee name field is instance-level (each employee has their own name).',
    code: [{ language: 'java', snippet: "class Counter {\n    static int total = 0;   // shared across all instances\n    int id;\n    Counter() { total++; id = total; }\n    static int getTotal() { return total; }\n}" }],
    source: GFG('static-keyword-in-java'),
  },
  {
    question: 'What is method overloading, and how is it different from method overriding?',
    answer:
      'Overloading (compile-time polymorphism) defines multiple methods with the same name but different parameter lists (type, count, or order) within the same class. Return type alone cannot distinguish overloads. Resolved at compile time.\n\nOverriding (runtime polymorphism) provides a subclass-specific implementation of a method already defined in a parent class. Requires the same method signature, compatible return type, and @Override annotation. Resolved at runtime via virtual method dispatch.\n\nExample: println(int) and println(String) are overloaded. A Dog class overriding Animal.speak() is overriding.',
    code: [{ language: 'java', snippet: "class Printer {\n    void print(int x) { System.out.println(x); }      // overload\n    void print(String s) { System.out.println(s); }   // overload\n}\n\nclass Animal { void speak() { System.out.println(\"...\"); } }\nclass Dog extends Animal {\n    @Override void speak() { System.out.println(\"Woof\"); }  // override\n}" }],
    source: GFG('method-overloading-in-java'),
  },
  {
    question: 'What is inheritance, and why does Java not support multiple inheritance of classes?',
    answer:
      'Inheritance (extends) lets a subclass acquire fields and methods from a superclass. It promotes reuse and establishes is-a relationships. Subclasses can override methods and add new behavior. Use super() to call parent constructors.\n\nJava allows only single inheritance of classes to avoid the diamond problem — if two parent classes define the same method, which one does the child inherit? Interfaces solve this: a class can implement multiple interfaces, each declaring contracts without state.\n\nExample: class SavingsAccount extends BankAccount inherits balance and deposit(), but also implements Auditable interface.',
    code: [{ language: 'java', snippet: "class BankAccount {\n    double balance;\n    void deposit(double amt) { balance += amt; }\n}\n\nclass SavingsAccount extends BankAccount {\n    double interestRate;\n    void addInterest() { balance += balance * interestRate; }\n}" }],
    source: ORACLE_DOCS('javase/tutorial/java/IandI/subclasses.html'),
  },
  {
    question: 'What is the difference between an interface and an abstract class?',
    answer:
      'An interface defines a contract — abstract methods (plus default and static methods since Java 8) that implementing classes must provide. A class can implement multiple interfaces. Interfaces cannot have instance fields (only public static final constants).\n\nAn abstract class can have both abstract and concrete methods, instance fields, and constructors. A class extends only one abstract class. Use it when related classes share common state and partial implementation.\n\nRule of thumb: prefer interfaces for capabilities (Serializable, Runnable). Use abstract classes when subclasses share substantial common code (e.g., BasePage in a test framework).',
    code: [{ language: 'java', snippet: "interface Payable {\n    double getAmount();\n    default void log() { System.out.println(getAmount()); }\n}\n\nabstract class Shape {\n    String color;\n    abstract double area();\n}" }],
    source: GFG('difference-between-abstract-class-and-interface-in-java'),
  },
  {
    question: 'What is the difference between == and equals() when comparing objects?',
    answer:
      '== compares references for objects — true only if both variables point to the exact same memory location. For primitives, == compares values.\n\nequals() compares logical equality as defined by the class (default implementation in Object compares references, same as ==). Override equals() to compare meaningful fields. Always override hashCode() when overriding equals() to satisfy the hashCode contract.\n\nExample: Two String objects with "hello" may be == if interned, but equals() always compares character content. For value comparison of objects, use equals(), never ==.',
    code: [{ language: 'java', snippet: "String a = new String(\"hi\");\nString b = new String(\"hi\");\nSystem.out.println(a == b);       // false — different objects\nSystem.out.println(a.equals(b));  // true — same content" }],
    source: GFG('equals-method-in-java'),
  },
  {
    question: 'Why is String immutable in Java?',
    answer:
      'String objects cannot be modified after creation — any "change" (concat, replace) creates a new String. The char array inside is final and the class is final (cannot be subclassed to break immutability).\n\nReasons: (1) Security — strings used in class loading, network connections, and file paths cannot be altered by malicious code. (2) String pool — immutability allows safe interning and reuse in the literal pool, saving memory. (3) Thread safety — immutable objects are inherently thread-safe without synchronization. (4) Hash stability — a String used as a HashMap key will not change its hashCode.\n\nExample: String s = "hello"; s.concat(" world") returns a new String; s remains "hello".',
    code: [{ language: 'java', snippet: "String s = \"hello\";\ns.concat(\" world\");   // returns new String\nSystem.out.println(s);  // still \"hello\"" }],
    source: GFG('string-class-in-java'),
  },
  {
    question: 'How do String, StringBuilder, and StringBuffer differ?',
    answer:
      'String is immutable — every modification creates a new object. Safe for sharing but inefficient for many concatenations in loops.\n\nStringBuilder is mutable and not thread-safe. It modifies an internal char array in place, making it fast for single-threaded string building. Introduced in Java 5.\n\nStringBuffer is mutable and thread-safe (synchronized methods). Slightly slower than StringBuilder due to locking. Use when multiple threads modify the same buffer.\n\nExample: Building a CSV in a loop — use StringBuilder. Building a shared log buffer across threads — use StringBuffer.',
    code: [{ language: 'java', snippet: "String s = \"a\" + \"b\" + \"c\";  // compiler may optimize\n\nStringBuilder sb = new StringBuilder();\nfor (int i = 0; i < 1000; i++) sb.append(i);  // efficient\n\nStringBuffer sbf = new StringBuffer();  // thread-safe variant" }],
    source: GFG('string-vs-stringbuilder-vs-stringbuffer-in-java'),
  },
  {
    question: 'What is an exception, and how do checked and unchecked exceptions differ?',
    answer:
      'An exception is an event that disrupts normal program flow, represented by Throwable subclasses. Use try-catch-finally to handle them; throw to signal errors; throws to declare checked exceptions on a method signature.\n\nChecked exceptions (extend Exception but not RuntimeException) must be declared or caught at compile time — e.g., IOException, SQLException. They represent recoverable conditions the caller should handle.\n\nUnchecked exceptions (extend RuntimeException) — e.g., NullPointerException, IllegalArgumentException — do not require declaration. They usually indicate programming bugs or unrecoverable failures.\n\nExample: Opening a file throws FileNotFoundException (checked) — caller must handle. Passing null where forbidden throws NullPointerException (unchecked).',
    code: [{ language: 'java', snippet: "try (BufferedReader br = new BufferedReader(new FileReader(\"data.txt\"))) {\n    String line = br.readLine();\n} catch (IOException e) {          // checked — must handle\n    System.err.println(e.getMessage());\n}" }],
    source: ORACLE_DOCS('javase/tutorial/essential/exceptions/'),
  },
  {
    question: 'What is the purpose of the final keyword when applied to a variable, method, or class?',
    answer:
      'final variable — value cannot be reassigned after initialization. For primitives, the value is fixed. For references, the reference cannot point to another object (but the object itself may still be mutable unless it is immutable).\n\nfinal method — cannot be overridden by subclasses. Used to lock critical behavior (e.g., security-sensitive methods in java.lang.SecurityManager).\n\nfinal class — cannot be extended. Examples: String, Integer, Math. Prevents subclassing that could break invariants.\n\nExample: final int MAX_RETRIES = 3 prevents accidental reassignment. final class Utility prevents inheritance of a class meant only for static helpers.',
    code: [{ language: 'java', snippet: "final int MAX = 100;\n// MAX = 200;  // compile error\n\nfinal class Utility {\n    static int add(int a, int b) { return a + b; }\n}" }],
    source: GFG('final-keyword-in-java'),
  },
]

/* ── Intermediate Java (20) ── */
export const intermediateQuestions = [
  {
    question: 'What contract must equals() and hashCode() satisfy?',
    answer:
      'If two objects are equal according to equals(), they must have the same hashCode(). This is required for correct behavior in hash-based collections (HashMap, HashSet).\n\nThe contract also requires: reflexivity (x.equals(x)), symmetry (x.equals(y) ⇔ y.equals(x)), transitivity, consistency (repeated calls return same result if state unchanged), and x.equals(null) must be false.\n\nViolating the hashCode contract causes objects to land in wrong buckets — lookups fail even when equals() would return true. Use IDE generation or Objects.equals()/Objects.hash() for consistency.',
    code: [{ language: 'java', snippet: "@Override\npublic boolean equals(Object o) {\n    if (this == o) return true;\n    if (!(o instanceof User u)) return false;\n    return Objects.equals(id, u.id);\n}\n\n@Override\npublic int hashCode() { return Objects.hash(id); }" }],
    source: ORACLE_DOCS('en/java/javase/25/docs/api/java.base/java/lang/Object.html'),
  },
  {
    question: 'How do List, Set, Queue, and Map differ?',
    answer:
      'List — ordered collection allowing duplicates. Access by index. Implementations: ArrayList (fast random access), LinkedList (fast insert/delete at ends).\n\nSet — no duplicate elements. HashSet (unordered, O(1)), LinkedHashSet (insertion order), TreeSet (sorted).\n\nQueue — FIFO (or priority-ordered) processing. LinkedList, PriorityQueue, ArrayDeque (double-ended).\n\nMap — key-value pairs, no duplicate keys. Not a Collection. HashMap, LinkedHashMap, TreeMap, ConcurrentHashMap.\n\nExample: Use List for test case ordering, Set for unique test IDs, Queue for job scheduling, Map for test data keyed by username.',
    source: ORACLE_DOCS('en/java/javase/25/docs/api/java.base/java/util/Collections.html'),
  },
  {
    question: 'When would you choose ArrayList over LinkedList, or vice versa?',
    answer:
      'ArrayList uses a dynamic array — O(1) random access by index, O(1) amortized append at end, but O(n) insert/delete in the middle (shifting elements). Best when you frequently access elements by index or iterate sequentially.\n\nLinkedList uses a doubly-linked node structure — O(1) insert/delete at known node position, O(n) random access. Implements Deque, so efficient as a queue/stack. Higher memory overhead per element (node pointers).\n\nExample: Storing 10,000 test results and accessing by index — ArrayList. Implementing a work queue with frequent add/remove at both ends — LinkedList or ArrayDeque.',
    source: GFG('arraylist-vs-linkedlist-in-java'),
  },
  {
    question: 'How does HashMap store and retrieve entries, and how are hash collisions handled?',
    answer:
      'HashMap computes hashCode() of the key, applies an internal hash function to spread bits, then maps to a bucket index (array position). Each bucket holds a linked list or tree (when bucket size exceeds TREEIFY_THRESHOLD = 8) of entries with the same bucket index.\n\nOn put: compute bucket, traverse the chain comparing keys with equals(). If found, replace value; otherwise add new node. On get: same bucket lookup, then equals() chain walk.\n\nCollisions (different keys, same bucket) are handled by chaining (linked list) or treeification for many collisions in one bucket. Load factor (default 0.75) triggers resize/rehash when buckets get too full.',
    code: [{ language: 'java', snippet: "Map<String, Integer> scores = new HashMap<>();\nscores.put(\"Alice\", 95);\nscores.put(\"Bob\", 87);\nInteger alice = scores.get(\"Alice\");  // hash → bucket → equals match" }],
    source: GFG('internal-working-of-hashmap-java'),
  },
  {
    question: 'How do HashMap, LinkedHashMap, TreeMap, and ConcurrentHashMap differ?',
    answer:
      'HashMap — unordered, not thread-safe, O(1) average get/put. Default choice for single-threaded maps.\n\nLinkedHashMap — maintains insertion order (or access order if configured). Slightly more memory due to linked list links. Useful for LRU caches with removeEldestEntry override.\n\nTreeMap — Red-Black tree, keys sorted by natural order or Comparator. O(log n) operations. No null keys (in natural ordering mode).\n\nConcurrentHashMap — thread-safe without locking the entire map. Uses segment/bucket-level locking or CAS. Preferred over Collections.synchronizedMap(new HashMap<>()) for concurrent reads/writes.',
    source: ORACLE_DOCS('en/java/javase/25/docs/api/java.base/java/util/HashMap.html'),
  },
  {
    question: 'What are generics, and what problems does type erasure create?',
    answer:
      'Generics add compile-time type safety to collections and methods: List<String> rejects adding an Integer at compile time. Syntax: class Box<T>, List<? extends Number>.\n\nType erasure removes generic type information at compile time — bytecode only sees raw types. The compiler inserts casts and bridge methods. This means: (1) you cannot use new T() or new T[] at runtime, (2) instanceof List<String> is illegal, (3) overloads differing only by generic type erasure collide, (4) runtime Class tokens lose parameterization.\n\nExample: List<String> and List<Integer> are both just List at runtime — erasure enables backward compatibility with pre-generics bytecode.',
    code: [{ language: 'java', snippet: "List<String> names = new ArrayList<>();\nnames.add(\"Akash\");\n// names.add(42);  // compile error — type safety at compile time\n\n// At runtime: names is just ArrayList (erased)" }],
    source: ORACLE_DOCS('javase/tutorial/java/generics/'),
  },
  {
    question: 'Explain the difference between <? extends T> and <? super T>.',
    answer:
      '<? extends T> (upper bounded wildcard) — accepts T or any subtype. You can read (get) as T but cannot add (except null). Producer — produces T values. Example: List<? extends Number> can hold List<Integer>.\n\n<? super T> (lower bounded wildcard) — accepts T or any supertype. You can add T (and subtypes) but read as Object. Consumer — consumes T values. Example: List<? super Integer> can hold List<Number>.\n\nPECS: Producer Extends, Consumer Super. Use extends when you read from the structure; super when you write to it.',
    code: [{ language: 'java', snippet: "void sumNumbers(List<? extends Number> nums) {\n    double total = 0;\n    for (Number n : nums) total += n.doubleValue();  // read OK\n}\n\nvoid addIntegers(List<? super Integer> list) {\n    list.add(42);  // write OK\n}" }],
    source: GFG('wildcard-in-java'),
  },
  {
    question: 'What is the difference between Comparable and Comparator?',
    answer:
      'Comparable is implemented by the class itself (compareTo method) — defines natural ordering. One ordering per class. Used by TreeSet, TreeMap, Collections.sort() without explicit comparator.\n\nComparator is a separate strategy object (compare method) — defines external, multiple orderings. Pass to sort(), TreeSet constructor, or stream sorted(). Lambda-friendly: Comparator.comparing(User::getName).\n\nExample: Employee implements Comparable by empId (natural order). Use Comparator.comparing(Employee::getSalary) for salary-based sorting without modifying the class.',
    code: [{ language: 'java', snippet: "class Employee implements Comparable<Employee> {\n    int empId;\n    public int compareTo(Employee other) {\n        return Integer.compare(this.empId, other.empId);\n    }\n}\n\nComparator<Employee> bySalary = Comparator.comparing(e -> e.salary);\nemployees.sort(bySalary);" }],
    source: GFG('comparable-vs-comparator-in-java'),
  },
  {
    question: 'What are lambda expressions and functional interfaces?',
    answer:
      'A lambda expression is a concise anonymous function: (params) -> expression or (params) -> { statements }. It implements the single abstract method of a functional interface.\n\nA functional interface has exactly one abstract method (e.g., Runnable, Callable, Comparator, Predicate). Annotate with @FunctionalInterface. Java provides java.util.function.* (Predicate, Function, Consumer, Supplier).\n\nExample: list.forEach(s -> System.out.println(s)) uses Consumer. Streams heavily use lambdas for filtering, mapping, and reducing.',
    code: [{ language: 'java', snippet: "List<String> names = List.of(\"Alice\", \"Bob\");\nnames.forEach(n -> System.out.println(n));  // Consumer\n\nPredicate<String> longName = s -> s.length() > 5;\nnames.stream().filter(longName).count();" }],
    source: DEV_JAVA,
  },
  {
    question: 'How do intermediate and terminal Stream operations differ?',
    answer:
      'Intermediate operations (filter, map, sorted, distinct, flatMap) return a new Stream and are lazy — they do not process elements until a terminal operation triggers the pipeline. They can be chained.\n\nTerminal operations (collect, forEach, reduce, count, findFirst, anyMatch) produce a non-Stream result (or void) and trigger execution of the entire pipeline. After a terminal operation, the stream is consumed and cannot be reused.\n\nExample: users.stream().filter(u -> u.isActive()).map(User::getName).collect(toList()) — filter and map are intermediate; collect is terminal and drives execution.',
    code: [{ language: 'java', snippet: "List<Integer> result = Stream.of(1, 2, 3, 4, 5)\n    .filter(n -> n % 2 == 0)   // intermediate\n    .map(n -> n * 10)          // intermediate\n    .collect(Collectors.toList());  // terminal → [20, 40]" }],
    source: ORACLE_DOCS('en/java/javase/25/docs/api/java.base/java/util/stream/Stream.html'),
  },
  {
    question: 'Why are Java streams lazy, and why should a stream normally be used only once?',
    answer:
      'Laziness means intermediate operations build a pipeline without processing data until a terminal operation requests results. This enables short-circuiting (findFirst stops after first match) and fusing operations for efficiency.\n\nA stream maintains internal state (spliterator position, consumed flag). Once a terminal operation runs, the source is marked consumed. Reusing the same stream throws IllegalStateException. Create a new stream from the source for another pass.\n\nExample: Calling .count() then .collect() on the same stream fails. Instead: List<T> copy = stream.collect(toList()) then process copy twice.',
    source: ORACLE_DOCS('en/java/javase/25/docs/api/java.base/java/util/stream/Stream.html'),
  },
  {
    question: 'What is the difference between map() and flatMap()?',
    answer:
      'map() transforms each element to exactly one output element — 1:1 mapping. Stream<T> → function → Stream<R> with one R per T.\n\nflatMap() transforms each element to zero or more elements and flattens the nested streams into one. Stream<T> → function → Stream<Stream<R>> → flattened Stream<R>. Use when each input produces a collection or optional result.\n\nExample: map(s -> s.length()) turns strings to integers. flatMap(s -> Arrays.stream(s.split(" "))) turns each sentence into multiple words in one stream.',
    code: [{ language: 'java', snippet: "List<String> words = List.of(\"hello world\", \"java streams\");\n\nList<Integer> lengths = words.stream()\n    .map(String::length)           // [11, 13]\n    .collect(Collectors.toList());\n\nList<String> tokens = words.stream()\n    .flatMap(s -> Arrays.stream(s.split(\" \")))  // [hello, world, java, streams]\n    .collect(Collectors.toList());" }],
    source: GFG('map-vs-flatmap-in-java-stream'),
  },
  {
    question: 'What is Optional intended for, and when should it not be used?',
    answer:
      'Optional<T> is a container that may or may not hold a non-null value. It makes absence explicit in return types, reducing NullPointerException risk. Use orElse/orElseGet/orElseThrow, map, flatMap, filter for safe chaining.\n\nIntended for return values where a result may legitimately be absent — e.g., findUserById() returning Optional<User>. Not intended for: fields, method parameters, collections (use empty collection), or serializable DTOs.\n\nDo not use Optional everywhere — it adds overhead and verbosity. Use null for internal implementation details; Optional for public API return types where absence is meaningful.',
    code: [{ language: 'java', snippet: "Optional<User> user = findUserById(42);\nString name = user.map(User::getName).orElse(\"Guest\");\n\nUser required = user.orElseThrow(() -> new NotFoundException(\"User 42\"));" }],
    source: ORACLE_DOCS('en/java/javase/25/docs/api/java.base/java/util/Optional.html'),
  },
  {
    question: 'How do orElse() and orElseGet() differ?',
    answer:
      'orElse(T other) takes the fallback value directly — it is always evaluated, even if Optional is present. Use for cheap constants: orElse("default").\n\norElseGet(Supplier<T> supplier) takes a lambda that produces the fallback — invoked only if Optional is empty. Use when the fallback is expensive to compute (database call, heavy object creation).\n\nPerformance trap: orElse(computeDefault()) calls computeDefault() even when value is present. orElseGet(() -> computeDefault()) defers computation. orElseThrow() throws if empty.',
    code: [{ language: 'java', snippet: "Optional<String> opt = Optional.of(\"present\");\n\nString a = opt.orElse(\"fallback\");              // \"present\" — fallback not used\nString b = opt.orElseGet(() -> expensiveLookup()); // supplier NOT called\nString c = opt.orElse(expensiveLookup());          // expensiveLookup() STILL called!" }],
    source: ORACLE_DOCS('en/java/javase/25/docs/api/java.base/java/util/Optional.html'),
  },
  {
    question: 'Explain thread states and the difference between start() and run().',
    answer:
      'Thread states (Thread.State enum): NEW (created, not started), RUNNABLE (executing or ready for CPU), BLOCKED (waiting for monitor lock), WAITING (wait()/join() with no timeout), TIMED_WAITING (sleep/join with timeout), TERMINATED (completed).\n\nstart() creates a new native thread and calls run() asynchronously — JVM schedules it. Calling start() twice throws IllegalThreadStateException.\n\nrun() is an ordinary method — calling it directly executes synchronously in the current thread with no new thread created. Common interview trap: myThread.run() does not start a thread.',
    code: [{ language: 'java', snippet: "Thread t = new Thread(() -> System.out.println(\"running\"));\nt.start();  // new thread, async\nt.run();    // runs in current thread — NOT concurrent" }],
    source: ORACLE_DOCS('javase/tutorial/essential/concurrency/'),
  },
  {
    question: 'How do synchronized, volatile, and atomic classes solve different concurrency problems?',
    answer:
      'synchronized (method or block) provides mutual exclusion and visibility — only one thread holds the lock; unlock establishes happens-before. Use for compound operations (check-then-act, read-modify-write).\n\nvolatile guarantees visibility of writes across threads and prevents instruction reordering for that variable. Does NOT make i++ atomic. Use for single-field flags (boolean done, int status code).\n\njava.util.concurrent.atomic (AtomicInteger, AtomicReference) provide lock-free CAS operations for single-variable atomic updates. Faster than synchronized for counters and reference swaps.\n\nExample: volatile boolean shutdown flag for visibility. AtomicInteger for request counter. synchronized block for transfer between two accounts.',
    code: [{ language: 'java', snippet: "volatile boolean running = true;\nAtomicInteger counter = new AtomicInteger(0);\n\ncounter.incrementAndGet();  // atomic, lock-free\n\nsynchronized void transfer(Account from, Account to, int amt) {\n    from.balance -= amt;\n    to.balance += amt;\n}" }],
    source: GFG('volatile-keyword-in-java'),
  },
  {
    question: 'What is the difference between Runnable, Callable, Future, and CompletableFuture?',
    answer:
      'Runnable — void run(), no return value, cannot throw checked exceptions. Used with Thread or ExecutorService.execute().\n\nCallable — V call() returns a value and can throw checked exceptions. Submitted via ExecutorService.submit(), returns Future<V>.\n\nFuture — represents async result: get() blocks, isDone(), cancel(). Limited — no chaining, no combining multiple futures.\n\nCompletableFuture — Future + completion callbacks. Supports thenApply, thenCompose, allOf, exceptionally, non-blocking composition. Preferred for async pipelines.',
    code: [{ language: 'java', snippet: "ExecutorService pool = Executors.newFixedThreadPool(2);\n\nFuture<Integer> future = pool.submit(() -> 42);\nInteger result = future.get();\n\nCompletableFuture<String> cf = CompletableFuture\n    .supplyAsync(() -> \"Hello\")\n    .thenApply(s -> s + \" World\");" }],
    source: GFG('callable-vs-runnable-in-java'),
  },
  {
    question: 'How does try-with-resources work, and what is the role of AutoCloseable?',
    answer:
      'try-with-resources (Java 7+) automatically closes resources declared in the try header at block exit, even if an exception occurs. Replaces manual finally { resource.close() }.\n\nAutoCloseable interface defines void close() throws Exception. Any class implementing it (or Closeable) can be used. Resources are closed in reverse declaration order. Suppressed exceptions from close() are attached to the primary exception.\n\nExample: try (BufferedReader br = new BufferedReader(new FileReader(f))) { ... } — br.close() called automatically.',
    code: [{ language: 'java', snippet: "try (FileInputStream fis = new FileInputStream(\"data.txt\");\n     BufferedInputStream bis = new BufferedInputStream(fis)) {\n    byte[] buf = bis.readAllBytes();\n}  // fis and bis closed automatically" }],
    source: ORACLE_DOCS('javase/tutorial/essential/exceptions/tryResourceClose.html'),
  },
  {
    question: 'What is the difference between shallow copying and deep copying?',
    answer:
      'Shallow copy duplicates the top-level object but copies references to nested objects — both original and copy share the same mutable nested objects. Cloneable default clone() is shallow. Changes to nested state affect both.\n\nDeep copy recursively duplicates all nested objects, producing fully independent graphs. No shared mutable state between original and copy. Implement manually, via serialization, or copy constructors.\n\nExample: Shallow copy of a List<String> is safe (strings are immutable). Shallow copy of List<List<Integer>> shares inner lists — use deep copy when nested mutability matters.',
    code: [{ language: 'java', snippet: "class Address { String city; }\nclass Person implements Cloneable {\n    Address addr;\n    public Person clone() throws CloneNotSupportedException {\n        Person p = (Person) super.clone();  // shallow\n        p.addr = new Address(); p.addr.city = this.addr.city;  // deep fix\n        return p;\n    }\n}" }],
    source: GFG('deep-copy-vs-shallow-copy-in-java'),
  },
  {
    question: 'What are records and sealed classes, and when are they useful?',
    answer:
      'Records (Java 16+) are concise immutable data carriers: record Point(int x, int y) {} auto-generates constructor, equals, hashCode, toString, and final fields. Ideal for DTOs, value objects, and API responses.\n\nSealed classes (Java 17+) restrict which classes can extend them: sealed class Shape permits Circle, Rectangle. Combined with pattern matching (switch expressions), enables exhaustive handling without default fallthrough.\n\nUse records for immutable data with no behavior beyond accessors. Use sealed classes for controlled inheritance hierarchies (e.g., AST node types, payment methods) where all subtypes are known.',
    code: [{ language: 'java', snippet: "record UserDto(String name, String email) {}\n\nsealed interface Payment permits Card, UPI {\n    double amount();\n}\nrecord Card(double amount, String last4) implements Payment {}\nrecord UPI(double amount, String vpa) implements Payment {}" }],
    source: DEV_JAVA,
  },
]

/* ── Challenging Java (20) ── */
export const challengingQuestions = [
  {
    question: 'Explain the Java Memory Model\'s happens-before relationship and its practical importance.',
    answer:
      'The JMM defines when writes by one thread are guaranteed visible to another. A happens-before edge establishes ordering and visibility guarantees. Without it, the compiler and CPU may reorder reads/writes, causing surprising behavior.\n\nKey rules: unlock on a monitor happens-before subsequent lock on same monitor; write to volatile happens-before subsequent read; Thread.start() happens-before any action in started thread; thread termination happens-before return from join().\n\nPractical importance: without happens-before, a thread may never see an update to a shared flag, or see partially constructed objects. Use synchronized, volatile, concurrent utilities, or java.util.concurrent locks to establish ordering.',
    source: ORACLE_DOCS('javase/tutorial/essential/concurrency/memconsist.html'),
  },
  {
    question: 'Why does volatile provide visibility but not make compound operations atomic?',
    answer:
      'volatile ensures that a write is immediately flushed to main memory and subsequent reads see the latest value — no thread-local cache staleness. It also restricts reordering around volatile accesses.\n\nHowever, volatile does not compose multiple operations into one atomic step. count++ is three operations: read, increment, write. Two threads can both read the same value, increment, and write — losing an update.\n\nUse AtomicInteger.incrementAndGet() for atomic counters, or synchronized/Lock for multi-field invariants. volatile is correct for single-write / single-read flags (initialized, shutdown).',
    code: [{ language: 'java', snippet: "volatile int count = 0;\n\nvoid increment() {\n    count++;  // NOT atomic — race condition possible\n}\n\n// Fix:\nAtomicInteger safeCount = new AtomicInteger(0);\nvoid safeIncrement() { safeCount.incrementAndGet(); }" }],
    source: GFG('volatile-keyword-in-java'),
  },
  {
    question: 'Describe a deadlock, livelock, and starvation. How would you diagnose and prevent each?',
    answer:
      'Deadlock — two or more threads permanently block, each holding a resource the other needs (circular wait). Diagnose: thread dumps (jstack, VisualVM) show "Found one Java-level deadlock". Prevent: lock ordering (always acquire A then B), tryLock with timeout, reduce lock scope.\n\nLivelock — threads actively respond to each other but make no progress (e.g., two people stepping aside in a hallway). Diagnose: high CPU, no state change. Prevent: randomized backoff, state machine with progress guarantees.\n\nStarvation — a thread never gets the resource because higher-priority or greedy threads monopolize it. Diagnose: one thread always waiting in dump. Prevent: fair locks (new ReentrantLock(true)), avoid thread priority abuse, separate thread pools.',
    code: [{ language: 'java', snippet: "// Deadlock prevention — consistent lock order\nsynchronized (lockA) {\n    synchronized (lockB) { /* work */ }\n}\n\n// Fair lock\nReentrantLock fairLock = new ReentrantLock(true);" }],
    source: GFG('deadlock-in-java'),
  },
  {
    question: 'How does ConcurrentHashMap support concurrency, and why is it preferable to synchronizing a HashMap?',
    answer:
      'ConcurrentHashMap uses fine-grained locking (Java 7 segments) or CAS + synchronized bucket heads (Java 8+). Reads are generally lock-free. Writes lock only the affected bucket, not the entire map.\n\nCollections.synchronizedMap(new HashMap<>()) wraps every method in one lock — all reads and writes serialize, killing scalability under contention.\n\nConcurrentHashMap also provides atomic compound operations: putIfAbsent, compute, merge. Never use null keys or values. Prefer it for shared caches, registries, and concurrent counters keyed by ID.',
    code: [{ language: 'java', snippet: "ConcurrentHashMap<String, Integer> map = new ConcurrentHashMap<>();\nmap.putIfAbsent(\"key\", 1);\nmap.compute(\"key\", (k, v) -> v == null ? 1 : v + 1);" }],
    source: GFG('concurrenthashmap-in-java'),
  },
  {
    question: 'What makes a Stream reduction safe or unsafe for parallel execution?',
    answer:
      'A reduction is parallel-safe when the accumulator is associative — grouping does not matter: (a op b) op c == a op (b op c). Integer sum and min are associative. String concatenation and subtraction are NOT.\n\nThe combiner must be compatible with the accumulator — merging partial results from different threads must produce the same result as sequential processing. Identity element must satisfy: identity op x == x.\n\nUnsafe: collecting into a non-thread-safe shared container (ArrayList via forEach side effect). Safe: Collectors.toConcurrentMap, reducing with associative ops, or collect(toList()) which uses thread-safe merging internally.',
    code: [{ language: 'java', snippet: "int sum = IntStream.range(1, 1000).parallel()\n    .reduce(0, Integer::sum);  // safe — associative\n\n// UNSAFE — shared mutation:\nList<Integer> list = new ArrayList<>();\nIntStream.range(1, 100).parallel().forEach(list::add);  // race!" }],
    source: ORACLE_DOCS('en/java/javase/25/docs/api/java.base/java/util/stream/Stream.html'),
  },
  {
    question: 'When can parallel streams reduce performance or produce incorrect results?',
    answer:
      'Performance degrades when: dataset is small (fork/join overhead exceeds benefit), tasks are trivially cheap, source splitting is poor (LinkedList, IO-bound tasks), or pipeline runs on common ForkJoinPool already saturated with blocking work.\n\nIncorrect results when: operations have side effects on shared mutable state, reduction is non-associative, or ordering-dependent logic assumes sequential encounter order without forOrdered().\n\nUse parallel streams for large in-memory datasets with CPU-bound, stateless, associative operations on ArrayList/arrays. For IO or blocking, use dedicated ExecutorService or virtual threads instead.',
    source: GFG('parallel-streams-in-java'),
  },
  {
    question: 'Explain covariance, contravariance, invariance, and PECS in the context of Java generics.',
    answer:
      'Invariance — Java generics are invariant: List<Dog> is NOT a List<Animal>, even though Dog extends Animal. Prevents adding a Cat to a List<Dog> through an Animal reference.\n\nCovariance (producer) — ? extends T lets you read T but not write (except null). List<? extends Animal> can reference List<Dog> — you get Animals out.\n\nContravariance (consumer) — ? super T lets you write T but read as Object. List<? super Dog> can reference List<Animal> — you put Dogs in.\n\nPECS: Producer Extends, Consumer Super. Collections.copy uses this: dest is super (consumer), src is extends (producer).',
    code: [{ language: 'java', snippet: "List<? extends Number> producers = List.of(1, 2.5);\nNumber n = producers.get(0);  // read OK\n\nList<? super Integer> consumers = new ArrayList<Number>();\nconsumers.add(42);  // write OK" }],
    source: ORACLE_DOCS('javase/tutorial/java/generics/wildcards.html'),
  },
  {
    question: 'What are bridge methods, and why can type erasure cause the compiler to generate them?',
    answer:
      'Bridge methods are synthetic methods the compiler generates to preserve polymorphism after type erasure. When a class implements Comparable<Employee>, the compiled bytecode only knows Comparable.compareTo(Object). The actual compareTo(Employee) needs a bridge that casts and delegates.\n\nWithout bridges, overriding a generic method with type-specific parameters would not override the erased signature — JVM method resolution would break.\n\nYou can see them with javap -p or reflection getDeclaredMethods() — they appear as bridge synthetic methods with erased parameter types.',
    code: [{ language: 'java', snippet: "class Employee implements Comparable<Employee> {\n    @Override\n    public int compareTo(Employee other) {  // compiler adds bridge:\n        return this.id - other.id;        // compareTo(Object) → cast + delegate\n    }\n}" }],
    source: GFG('bridge-method-in-java'),
  },
  {
    question: 'How does class loading work through loading, linking, initialization, and parent delegation?',
    answer:
      'Loading — ClassLoader finds bytecode (.class), defines Class object in method area/metaspace. Binary name → Class<?>\n\nLinking — (1) verify bytecode validity, (2) prepare static fields with default values, (3) resolve symbolic references to direct references (may be lazy).\n\nInitialization — execute <clinit> (static initializers and static field assignments) once per class, thread-safe, parent-first.\n\nParent delegation: custom loader asks parent (bootstrap → platform → app) first. Prevents core class spoofing (java.lang.String from random JAR). Bootstrap loads java.* from modules/JDK.',
    source: ORACLE_DOCS('javase/tutorial/ext/basics/load.html'),
  },
  {
    question: 'What types of references can prevent or permit garbage collection, and how do strong, soft, weak, and phantom references differ?',
    answer:
      'Strong reference (default) — obj = new Object() prevents GC while reachable. Only collected when no strong path from GC roots.\n\nSoft reference — collected when memory is pressured, before OutOfMemoryError. Useful for memory-sensitive caches (SoftReference<byte[]>).\n\nWeak reference — collected at next GC cycle regardless of memory pressure. WeakHashMap keys for listener maps that should not prevent key GC.\n\nPhantom reference — enqueued after finalization when object is unreachable; get() always returns null. Used for post-mortem cleanup tracking via ReferenceQueue, not accessing the object.',
    code: [{ language: 'java', snippet: "SoftReference<byte[]> cache = new SoftReference<>(largeData);\nWeakReference<Object> weak = new WeakReference<>(obj);\nPhantomReference<Object> phantom =\n    new PhantomReference<>(obj, referenceQueue);" }],
    source: GFG('reference-types-in-java'),
  },
  {
    question: 'How would you investigate a Java memory leak, high garbage-collection pause time, or OutOfMemoryError?',
    answer:
      'Step 1: Reproduce and capture evidence — enable GC logging (-Xlog:gc*), heap dump on OOM (-XX:+HeapDumpOnOutOfMemoryError), thread dump (jcmd <pid> Thread.print).\n\nStep 2: Analyze heap with Eclipse MAT, VisualVM, or JFR — look for dominator tree, retained size, leak suspects (collections growing unbounded, static maps holding references, unclosed connections, classloader leaks).\n\nStep 3: For long GC pauses — check heap size vs allocation rate, tune G1/ZGC (-XX:MaxGCPauseMillis), reduce object churn, fix leaks. For OOM — identify Metaspace (class loading), heap (leak), or direct memory (ByteBuffer). Profile with async-profiler or JFR allocation events.',
    source: BROWSERSTACK('java-memory-leak'),
  },
  {
    question: 'What is escape analysis, and how can the JIT compiler use it to optimize allocation and locking?',
    answer:
      'Escape analysis determines whether an object\'s scope exceeds the current method/thread. If an object does not escape (not returned, not stored in a field, not passed to external code), the JIT can apply optimizations.\n\nOptimizations: scalar replacement (allocate fields on stack instead of heap — no GC pressure), lock elision (remove synchronized on non-shared objects), dead allocation elimination.\n\nExample: Creating a Point inside a loop for local calculation — if it does not escape, the JIT may eliminate heap allocation entirely. Not guaranteed — depends on HotSpot heuristics and -XX:+DoEscapeAnalysis (enabled by default).',
    source: GFG('escape-analysis-in-java'),
  },
  {
    question: 'Compare platform threads and virtual threads. Which workloads benefit from virtual threads?',
    answer:
      'Platform threads (java.lang.Thread) map 1:1 to OS threads — expensive to create (MB stack), limited to thousands. Blocking one blocks an OS thread.\n\nVirtual threads (Project Loom, Java 21+) are JVM-managed, lightweight (KB stack), cheap to create millions. Blocking I/O unmounts the virtual thread from its carrier platform thread, freeing the carrier for other work.\n\nIdeal workloads: high-concurrency I/O-bound tasks — HTTP servers handling many concurrent requests, database connection pools with blocking JDBC, microservice fan-out. Poor fit: CPU-bound computation (use platform threads or parallel streams) and code that pins carriers (synchronized blocks, native code).',
    code: [{ language: 'java', snippet: "try (var executor = Executors.newVirtualThreadPerTaskExecutor()) {\n    for (int i = 0; i < 10_000; i++) {\n        executor.submit(() -> fetchFromApi());  // cheap per task\n    }\n}" }],
    source: DEV_JAVA,
  },
  {
    question: 'Why is pinning important with virtual threads, and how would you detect or reduce it?',
    answer:
      'Pinning occurs when a virtual thread cannot unmount from its carrier platform thread during a blocking operation — typically inside synchronized blocks/methods or native (JNI) code. While pinned, the carrier is blocked, reducing scalability toward platform-thread limits.\n\nDetect: JFR event jdk.VirtualThreadPinned, thread dumps showing carrier blocked in synchronized. JDK 21+ reports pinned duration in JFR.\n\nReduce: replace synchronized with ReentrantLock (virtual-thread-friendly), minimize critical sections, avoid blocking in synchronized, use java.net socket refactored for async or non-blocking I/O. For native libraries, offload to dedicated platform thread pool.',
    source: DEV_JAVA,
  },
  {
    question: 'How would you design an immutable, thread-safe class whose fields include mutable collections?',
    answer:
      'Defensive copying: copy mutable inputs in constructor; never expose internal references directly. Use Collections.unmodifiableList/Map on copies for getters, or return new copies each time.\n\nEnsure all fields are final. If the class itself can be subclassed, make it final or prevent overriding of methods that expose state.\n\nFor nested mutability: deep copy collections and their elements if elements are mutable. Use immutable collection factories: List.copyOf(), Map.copyOf(), or Guava ImmutableList.\n\nExample: a TestSuite class wrapping List<TestCase> — constructor copies list, getTests() returns List.copyOf(tests).',
    code: [{ language: 'java', snippet: "final class TestSuite {\n    private final List<String> cases;\n    TestSuite(List<String> cases) {\n        this.cases = List.copyOf(cases);  // defensive copy\n    }\n    List<String> getCases() {\n        return cases;  // already unmodifiable\n    }\n}" }],
    source: GFG('immutable-class-in-java'),
  },
  {
    question: 'Explain optimistic and pessimistic concurrency strategies and when each is appropriate.',
    answer:
      'Optimistic concurrency assumes conflicts are rare — read without locking, validate at write time (version field, CAS). If conflict detected, retry or fail. Examples: AtomicReference.compareAndSet, JPA @Version, ConcurrentHashMap.compute. Good for read-heavy, low-contention workloads.\n\nPessimistic concurrency locks before access — synchronized, ReentrantLock, database SELECT FOR UPDATE. Guarantees exclusive access during critical section. Good for write-heavy, high-contention, or strict invariants (financial transfers).\n\nChoose optimistic when retry cost is low and contention is rare. Choose pessimistic when conflicts are frequent or retry is expensive (long transactions).',
    code: [{ language: 'java', snippet: "// Optimistic — CAS retry loop\nAtomicReference<State> state = new AtomicReference<>(initial);\nboolean updated;\ndo {\n    State current = state.get();\n    State next = current.increment();\n    updated = state.compareAndSet(current, next);\n} while (!updated);\n\n// Pessimistic\nlock.lock();\ntry { /* critical section */ } finally { lock.unlock(); }" }],
    source: GFG('optimistic-vs-pessimistic-locking'),
  },
  {
    question: 'How would you implement a bounded producer-consumer system with backpressure and graceful shutdown?',
    answer:
      'Use a bounded BlockingQueue (ArrayBlockingQueue) — producers block on put() when full (backpressure), consumers block on take() when empty. Decouples rates without unbounded memory growth.\n\nGraceful shutdown: volatile boolean shutdown flag, poison pill sentinel object, or ExecutorService.shutdown() + awaitTermination. Producers check shutdown before put; consumers drain remaining items after shutdown signal.\n\nFor multiple producers/consumers: use thread pool executors. CountDownLatch or Phaser to coordinate completion. Handle InterruptedException by restoring interrupt status and exiting cleanly.',
    code: [{ language: 'java', snippet: "BlockingQueue<Task> queue = new ArrayBlockingQueue<>(100);\n\n// Producer\nvoid produce(Task t) throws InterruptedException {\n    queue.put(t);  // blocks when full — backpressure\n}\n\n// Consumer loop\nvoid consume() throws InterruptedException {\n    while (running || !queue.isEmpty()) {\n        Task t = queue.poll(1, TimeUnit.SECONDS);\n        if (t != null) process(t);\n    }\n}" }],
    source: GFG('producer-consumer-problem-in-java'),
  },
  {
    question: 'What can go wrong when CompletableFuture stages use the common ForkJoinPool for blocking work?',
    answer:
      'CompletableFuture.supplyAsync() and runAsync() default to ForkJoinPool.commonPool() — sized to CPU cores. Blocking calls (JDBC, HTTP, file I/O) inside these tasks occupy worker threads without releasing them, starving other async and parallel stream work system-wide.\n\nSymptoms: throughput collapse under load, deadlocks when all common pool threads block waiting for tasks that cannot start, increased latency for unrelated CompletableFuture chains.\n\nFix: pass a dedicated Executor for blocking work — Executors.newFixedThreadPool(n), cached pool, or virtual thread executor. Reserve common pool for short CPU-bound tasks only.',
    code: [{ language: 'java', snippet: "ExecutorService blockingPool = Executors.newFixedThreadPool(50);\n\nCompletableFuture<User> future = CompletableFuture\n    .supplyAsync(() -> db.fetchUser(id), blockingPool);  // not commonPool\n\n// Java 21+: Executors.newVirtualThreadPerTaskExecutor()" }],
    source: GFG('completablefuture-in-java'),
  },
  {
    question: 'How would you preserve exception context and cancellation across a multi-stage asynchronous workflow?',
    answer:
      'Chain with exceptionally() or handle() to recover/log without losing the original cause. Use whenComplete() for side effects that need both result and throwable. Wrap checked exceptions in CompletionException.\n\nPropagate cancellation: CompletableFuture.cancel(true) cascades to incomplete dependencies if composed correctly. Use orTimeout()/completeOnTimeout() (Java 9+) to prevent hung stages. Store correlation IDs in MDC — copy MDC to child tasks explicitly (MDC is thread-local).\n\nFor complex workflows, record each stage\'s outcome in a structured result object rather than swallowing exceptions. Use allOf() + join() carefully — collect all failures, not just the first.',
    code: [{ language: 'java', snippet: "CompletableFuture<String> pipeline = fetchData()\n    .thenApply(this::transform)\n    .orTimeout(5, TimeUnit.SECONDS)\n    .exceptionally(ex -> {\n        log.error(\"Stage failed\", ex);\n        return \"fallback\";\n    });\n\npipeline.cancel(true);  // cancel pending work" }],
    source: GFG('completablefuture-in-java'),
  },
  {
    question: 'Design an in-memory, thread-safe cache with expiration. What correctness and performance trade-offs would you consider?',
    answer:
      'Core design: ConcurrentHashMap for storage, value wrapper holding data + expiry timestamp. On get: return if not expired, else remove and miss. Background ScheduledExecutorService or Caffeine\'s eviction thread for proactive cleanup.\n\nCorrectness: handle thundering herd on expiry (only one thread reloads — use compute or Future), null values (ConcurrentHashMap disallows null — use Optional), clock skew (use System.nanoTime() or Instant).\n\nTrade-offs: size-bound (LRU via LinkedHashMap removeEldestEntry vs Caffeine W-TinyLFU), TTL vs idle expiration, read-through vs cache-aside, soft references for memory pressure. For production, prefer Caffeine or Guava Cache over hand-rolled — battle-tested eviction, stats, and concurrency.',
    code: [{ language: 'java', snippet: "class CacheEntry<V> {\n    final V value;\n    final long expiresAt;\n    boolean isExpired() { return System.currentTimeMillis() > expiresAt; }\n}\n\nConcurrentHashMap<String, CacheEntry<User>> cache = new ConcurrentHashMap<>();\n\nUser get(String key) {\n    CacheEntry<User> entry = cache.get(key);\n    if (entry == null || entry.isExpired()) {\n        cache.remove(key);\n        return loadAndPut(key);\n    }\n    return entry.value;\n}" }],
    source: GFG('lru-cache-in-java'),
  },
]
