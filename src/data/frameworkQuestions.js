import { GFG, TUTORIALS, BROWSERSTACK } from './sources'

export const frameworkQuestions = [
  {
    question: 'Explain your automation framework architecture.',
    answer:
      'A solid QA automation framework is layered: test layer (pytest test files), page object layer (UI locators and actions), business/service layer (API helpers, workflows), utilities (logging, config, data), and reporting/CI integration.\n\nTests stay thin — they call page methods and assert outcomes. Page objects hide Selenium/Playwright details. Config and credentials live outside tests. This separation makes maintenance easier when the UI or environment changes.\n\nExample: A login test calls LoginPage.enter_credentials() and LoginPage.click_submit(), then asserts dashboard URL — it never touches raw driver.find_element calls.',
    code: [{ language: 'python', snippet: "# tests/test_login.py — thin test layer\ndef test_valid_login(driver, config):\n    login = LoginPage(driver)\n    login.open(config.base_url)\n    login.login(config.test_user, config.test_password)\n    assert DashboardPage(driver).is_loaded()" }],
    source: BROWSERSTACK('test-automation-framework-design'),
  },
  {
    question: 'Did you create framework or maintain it?',
    answer:
      'Be honest about your role. If you built it: describe requirements gathered (POM, pytest, reporting, CI), tech choices, folder layout, and how you onboarded the team with README and code reviews.\n\nIf you maintained it: describe fixing flaky tests, adding page objects for new features, improving waits, refactoring duplicate code into utilities, and keeping Jenkins jobs green.\n\nExample: "I inherited a Selenium + pytest framework with 200 tests. I refactored hard-coded sleeps to explicit waits, introduced conftest fixtures for driver lifecycle, and added Allure reporting — failure rate in CI dropped from 15% to under 3%."',
    source: GFG('automation-testing-interview-questions'),
  },
  {
    question: 'Explain folder structure.',
    answer:
      'A typical Python + Selenium/Playwright framework structure:\n\nproject_root/\n  tests/          — test modules (test_*.py)\n  pages/          — Page Object classes\n  utils/          — helpers (waits, file IO, DB)\n  data/           — JSON/CSV test data\n  config/         — env YAML/INI files\n  reports/        — HTML/XML output\n  conftest.py     — shared pytest fixtures\n  pytest.ini      — pytest configuration\n  requirements.txt\n\nKeeping tests separate from page logic and config makes navigation predictable for any new team member.',
    code: [{ language: 'bash', snippet: "project/\n├── tests/\n│   ├── test_login.py\n│   └── test_checkout.py\n├── pages/\n│   ├── base_page.py\n│   └── login_page.py\n├── utils/\n│   ├── logger.py\n│   └── config_reader.py\n├── data/\n│   └── users.json\n├── conftest.py\n└── pytest.ini" }],
    source: TUTORIALS('/selenium/selenium_automation_framework.htm'),
  },
  {
    question: 'Explain Page Object Model.',
    answer:
      'Page Object Model (POM) maps each UI page (or component) to a class. The class holds locators as attributes and exposes methods for user actions (click, type, select). Tests interact only with these methods, not raw locators.\n\nWhen the UI changes, you update one page class instead of dozens of tests. POM also improves readability — test_login reads like a user story.\n\nExample: LoginPage has locators for username, password, submit button, and methods login(user, pwd) that encapsulates the full flow.',
    code: [{ language: 'python', snippet: "class LoginPage(BasePage):\n    USERNAME = (By.ID, 'username')\n    PASSWORD = (By.ID, 'password')\n    SUBMIT   = (By.CSS_SELECTOR, 'button[type=submit]')\n\n    def login(self, user, pwd):\n        self.type(self.USERNAME, user)\n        self.type(self.PASSWORD, pwd)\n        self.click(self.SUBMIT)" }],
    source: GFG('page-object-model-for-automation'),
  },
  {
    question: 'Why POM?',
    answer:
      'Without POM, locators and Selenium calls are duplicated across tests. A single ID change breaks many files. POM centralizes locators and actions in one place per page.\n\nBenefits: maintainability (one change point), readability (tests express intent), reusability (same page used by smoke and regression), and easier code review (reviewers see business actions, not XPath soup).\n\nExample: If the login button ID changes from btn-login to login-submit, you update LoginPage only — 30 tests keep working without edits.',
    source: GFG('advantages-of-page-object-model'),
  },
  {
    question: 'Hybrid framework?',
    answer:
      'A hybrid framework combines two or more approaches — commonly keyword-driven + data-driven + POM. Keywords describe actions (open browser, click, verify text); data files supply inputs; page objects implement the actual Selenium logic behind keywords.\n\nUseful when manual testers or BAs contribute test cases in Excel/CSV while engineers maintain the underlying keyword library. Reduces coding for repetitive flows but needs discipline to avoid a messy keyword sprawl.\n\nExample: A row in Excel says Action=Login, Username={user}, Password={pwd} — the keyword engine reads the row, loads user from a data sheet, and calls LoginPage.login().',
    source: TUTORIALS('/selenium/hybrid_framework.htm'),
  },
  {
    question: 'Data-driven framework?',
    answer:
      'Data-driven testing runs the same test logic with multiple data sets — from JSON, CSV, Excel, or pytest parametrize. Separates test data from test code so adding cases does not require new test methods.\n\nIn pytest, use @pytest.mark.parametrize or read external files in conftest. Assert the same outcomes for valid/invalid boundary cases.\n\nExample: test_login runs 5 times with different username/password pairs — one test function, five data rows, five independent results in the report.',
    code: [{ language: 'python', snippet: "import pytest\n\n@pytest.mark.parametrize('user,pwd,expected', [\n    ('valid@mail.com', 'Pass123', True),\n    ('invalid', 'wrong', False),\n    ('', 'Pass123', False),\n])\ndef test_login(user, pwd, expected, login_page):\n    result = login_page.login(user, pwd)\n    assert result.success == expected" }],
    source: GFG('data-driven-testing'),
  },
  {
    question: 'Keyword-driven framework?',
    answer:
      'Keyword-driven framework defines reusable action keywords (OPEN_URL, CLICK, INPUT, VERIFY_TEXT) stored in a library. Test cases are written as sequences of keywords — often in spreadsheets — without Python/Java code per case.\n\nEngine maps each keyword to an implementation function. Good for teams with mixed technical skills; downside is abstraction overhead and debugging indirection.\n\nExample: Robot Framework is keyword-driven by design — "Click Button    Submit" calls the built-in or custom keyword implemented in Python libraries.',
    source: GFG('keyword-driven-testing'),
  },
  {
    question: 'Explain utilities/helpers.',
    answer:
      'Utilities are shared, stateless helper modules — not tied to a single page. Common examples: explicit wait wrappers, screenshot capture, JSON/CSV readers, date generators, API client wrappers, DB query helpers, and random test data builders.\n\nKeep utilities generic and well-tested. Page objects use utilities; tests should rarely import utilities directly except for special setup.\n\nExample: wait_utils.wait_for_clickable(driver, locator, timeout=15) is used by every page class instead of repeating WebDriverWait boilerplate.',
    code: [{ language: 'python', snippet: "def wait_for_visible(driver, locator, timeout=10):\n    return WebDriverWait(driver, timeout).until(\n        EC.visibility_of_element_located(locator)\n    )\n\ndef read_json(path):\n    with open(path) as f:\n        return json.load(f)" }],
    source: GFG('test-automation-framework-best-practices'),
  },
  {
    question: 'How do you manage test data?',
    answer:
      'Strategies: (1) static JSON/CSV/YAML files in data/ folder versioned in Git; (2) pytest parametrize for small inline sets; (3) environment-specific data files (data/dev.json vs data/staging.json); (4) factories/faker for dynamic data; (5) DB seed scripts for integration tests.\n\nNever commit real passwords or PII. Use secrets/env vars for credentials. Keep data independent from test logic so QA can add cases without touching code.\n\nExample: users.json holds role-based accounts; conftest loads the file based on --env flag and injects test_user fixture into tests.',
    code: [{ language: 'python', snippet: "# conftest.py\n@pytest.fixture\ndef test_user(env):\n    data = json.load(open(f'data/{env}/users.json'))\n    return data['standard_user']" }],
    source: BROWSERSTACK('test-data-management-automation'),
  },
  {
    question: 'How do you manage configuration files?',
    answer:
      'Store environment settings in config files (config.ini, YAML, or .env) — base URL, timeouts, browser type, API endpoints. Load config once at session start via conftest or a Config singleton.\n\nOverride with CLI flags (--env=staging) or environment variables in Jenkins (BASE_URL, BROWSER). Never hardcode URLs or credentials in tests.\n\nExample: config/dev.yaml has base_url: https://dev.app.com; Jenkins job sets ENV=staging and the framework loads config/staging.yaml automatically.',
    code: [{ language: 'python', snippet: "import os, yaml\n\ndef load_config():\n    env = os.getenv('ENV', 'dev')\n    with open(f'config/{env}.yaml') as f:\n        return yaml.safe_load(f)" }],
    source: GFG('configuration-management-in-test-automation'),
  },
  {
    question: 'Explain logging framework.',
    answer:
      'Use Python logging module — not print statements. Configure log level (DEBUG locally, INFO in CI), format with timestamp/thread/test name, and write to console plus rotating file (logs/test.log).\n\nLog key steps: test start, navigation, assertions, failures with stack trace. Helps debug CI failures without re-running locally.\n\nExample: logger.info("Logging in as %s", user) before action; logger.error("Element not found: %s", locator) in exception handlers.',
    code: [{ language: 'python', snippet: "import logging\n\nlogging.basicConfig(\n    level=logging.INFO,\n    format='%(asctime)s [%(levelname)s] %(name)s: %(message)s',\n    handlers=[\n        logging.FileHandler('logs/run.log'),\n        logging.StreamHandler(),\n    ],\n)\nlogger = logging.getLogger(__name__)" }],
    source: GFG('logging-in-python'),
  },
  {
    question: 'Explain reporting mechanism.',
    answer:
      'Reporting answers: what ran, pass/fail, duration, failure reason, screenshots, and trends over time. Common tools: pytest-html, Allure, ExtentReports (Java), or custom JSON + dashboard.\n\nHook into pytest hooks (pytest_runtest_makereport) to capture status and attach screenshots on failure. Publish HTML/XML to Jenkins artifacts or Allure server after the pipeline.\n\nExample: After each failed test, conftest attaches screenshot and browser console log to the Allure report — reviewers see failure context without re-running.',
    source: BROWSERSTACK('test-reporting-in-automation'),
  },
  {
    question: 'Explain reusable methods.',
    answer:
      'Reusable methods live in base page classes, utility modules, or shared fixtures. Examples: click_and_wait, scroll_into_view, safe_type (clear + send_keys), login_as_role(role), and api_post_with_auth(endpoint, body).\n\nRule: if two tests duplicate more than 3 lines, extract a method. Name methods by user intent (submit_order) not by Selenium API (click_button_id_x).\n\nExample: BasePage.click(locator) wraps wait + click + log — every page inherits it instead of copying WebDriverWait code.',
    code: [{ language: 'python', snippet: "class BasePage:\n    def click(self, locator):\n        el = wait_for_clickable(self.driver, locator)\n        el.click()\n        logger.info('Clicked %s', locator)" }],
    source: GFG('reusable-functions-in-test-automation'),
  },
  {
    question: 'How do you capture screenshots on failure?',
    answer:
      'Use pytest hook pytest_runtest_makereport in conftest.py. When call.when == "call" and report.failed, call driver.save_screenshot() with a timestamped filename under reports/screenshots/.\n\nAttach to Allure with allure.attach.file() or embed in HTML report. Ensure screenshot dir exists and Jenkins archives it as a build artifact.\n\nExample: On failure, save reports/screenshots/test_login_20240531_143022.png and log the path in the console output for quick access.',
    code: [{ language: 'python', snippet: "@pytest.hookimpl(hookwrapper=True)\ndef pytest_runtest_makereport(item, call):\n    outcome = yield\n    report = outcome.get_result()\n    if report.when == 'call' and report.failed:\n        driver = item.funcargs.get('driver')\n        if driver:\n            path = f'reports/screenshots/{item.name}.png'\n            driver.save_screenshot(path)" }],
    source: BROWSERSTACK('screenshot-on-test-failure-selenium'),
  },
  {
    question: 'How do you retry failed test cases?',
    answer:
      'Options: (1) pytest-rerunfailures plugin — @pytest.mark.flaky(reruns=2, reruns_delay=1); (2) retry only in CI with --reruns 2; (3) Jenkins retry failed stage; (4) separate quarantine job for known flaky tests.\n\nUse retries sparingly — they mask real bugs. Pair with flake detection (track tests that pass on rerun) and fix root cause (waits, test data, env stability).\n\nExample: pytest tests/ --reruns 2 --reruns-delay 3 runs failed tests up to two more times before marking final failure.',
    code: [{ language: 'bash', snippet: "pip install pytest-rerunfailures\npytest tests/ --reruns 2 --reruns-delay 2" }],
    source: GFG('pytest-rerun-failed-tests'),
  },
  {
    question: 'How do you integrate Jenkins?',
    answer:
      'Create a Pipeline or Freestyle job that: checks out code from Git, creates a virtualenv, installs requirements.txt, runs pytest with markers/env vars, publishes HTML/Allure report, and archives screenshots/logs.\n\nStore secrets (passwords, API keys) in Jenkins Credentials and inject as env vars. Trigger on push, PR, or nightly cron. Fail the build if test pass rate drops below threshold.\n\nExample: Jenkinsfile runs stage("Test") { sh "pytest tests/ -m smoke --env=staging --alluredir=allure-results" } then allure includeProperties: false in post block.',
    code: [{ language: 'bash', snippet: "# Jenkinsfile excerpt\nstage('Automation') {\n  steps {\n    sh 'python -m venv venv && . venv/bin/activate'\n    sh 'pip install -r requirements.txt'\n    sh 'pytest tests/ -m regression --env=$ENV --junitxml=report.xml'\n  }\n  post {\n    always { junit 'report.xml' }\n  }\n}" }],
    source: GFG('jenkins-integration-with-selenium'),
  },
  {
    question: 'How do you execute from command line?',
    answer:
      'Run pytest from project root after activating venv and installing dependencies. Common flags: -v (verbose), -m smoke (marker), -k "login" (name filter), --env=staging (custom option via conftest), --headed/--headless, parallel with pytest-xdist (-n auto).\n\nCI and local should use the same command for consistency. Document the canonical run command in README.\n\nExample: pytest tests/ -m smoke -v --env=qa --tb=short runs only smoke-tagged tests against QA with short tracebacks.',
    code: [{ language: 'bash', snippet: "python -m venv venv\nsource venv/bin/activate   # Windows: venv\\Scripts\\activate\npip install -r requirements.txt\npytest tests/ -m regression -v --env=staging --html=reports/report.html" }],
    source: GFG('pytest-command-line'),
  },
  {
    question: 'Explain pytest.ini.',
    answer:
      'pytest.ini is the project-level pytest config file (also pyproject.toml [tool.pytest.ini_options]). It sets defaults so you do not repeat flags every run.\n\nCommon settings: testpaths = tests, python_files = test_*.py, addopts = -v --tb=short, markers (smoke, regression), log_cli = true, filterwarnings.\n\nExample: Defining marker smoke in pytest.ini lets you run pytest -m smoke without registering markers manually each time.',
    code: [{ language: 'ini', snippet: "[pytest]\ntestpaths = tests\npython_files = test_*.py\naddopts = -v --tb=short --strict-markers\nmarkers =\n    smoke: quick sanity tests\n    regression: full suite" }],
    source: GFG('pytest-ini-configuration'),
  },
  {
    question: 'Explain conftest.py.',
    answer:
      'conftest.py is a special pytest file for shared fixtures and hooks. pytest auto-discovers it — no import needed. Place at project root or tests/ folder; nested conftest.py scopes fixtures to subfolders.\n\nTypical contents: driver/browser fixture (setup/teardown), config loader, API session, database connection, screenshot-on-failure hook, and custom CLI options (--env, --browser).\n\nExample: A session-scoped driver fixture starts Chrome once for all tests in a module; function-scoped fixture clears cookies between tests.',
    code: [{ language: 'python', snippet: "# conftest.py\n@pytest.fixture(scope='function')\ndef driver(request):\n    drv = webdriver.Chrome()\n    yield drv\n    drv.quit()" }],
    source: GFG('pytest-conftest-py-file'),
  },
  {
    question: 'Explain fixtures.',
    answer:
      'Fixtures provide setup/teardown and dependency injection for tests. Declare with @pytest.fixture; tests receive them as parameters by name. Scopes: function (default), class, module, package, session — control how often setup runs.\n\nUse yield for teardown after test completes. fixture can depend on other fixtures (driver → login_page → logged_in_user). Use @pytest.fixture(params=[...]) for parametrized fixtures.\n\nExample: logged_in_user fixture depends on driver and config — test_checkout only requests logged_in_user and starts already authenticated.',
    code: [{ language: 'python', snippet: "@pytest.fixture\ndef logged_in_user(driver, config):\n    LoginPage(driver).login(config.user, config.password)\n    yield config.user\n    # teardown if needed" }],
    source: GFG('pytest-fixtures'),
  },
  {
    question: 'How do you generate HTML reports?',
    answer:
      'Popular options: pytest-html (pytest --html=report.html --self-contained-html), Allure (pytest --alluredir=results then allure serve), or junit XML + Jenkins HTML publisher.\n\npytest-html gives a single self-contained file good for email/artifact sharing. Allure gives rich dashboards with history, categories, and attachments.\n\nExample: pytest tests/ --html=reports/report.html --self-contained-html generates one HTML file with pass/fail, duration, and embedded logs — attach to Jenkins build.',
    code: [{ language: 'bash', snippet: "pip install pytest-html allure-pytest\npytest tests/ --html=reports/report.html --self-contained-html\npytest tests/ --alluredir=allure-results\nallure serve allure-results" }],
    source: BROWSERSTACK('pytest-html-report'),
  },
  {
    question: 'How do you manage environment-specific execution?',
    answer:
      'Use --env CLI option (registered in conftest), ENV environment variable in Jenkins, or separate config YAML per environment. Fixtures read config and expose base_url, credentials reference, and feature flags.\n\nSame test code runs against dev/qa/staging/prod — only config changes. Prod runs should use read-only test accounts and restricted markers (@pytest.mark.prod_safe).\n\nExample: pytest tests/ --env=staging loads config/staging.yaml; Jenkins sets ENV=qa in job parameters for on-demand QA runs.',
    code: [{ language: 'python', snippet: "def pytest_addoption(parser):\n    parser.addoption('--env', default='dev')\n\n@pytest.fixture(scope='session')\ndef config(request):\n    env = request.config.getoption('--env')\n    return load_config(env)" }],
    source: GFG('environment-configuration-testing'),
  },
  {
    question: 'How do you run smoke/regression suites?',
    answer:
      'Tag tests with pytest markers: @pytest.mark.smoke for critical path (login, checkout), @pytest.mark.regression for full coverage. Register markers in pytest.ini to avoid warnings.\n\nSmoke runs on every commit (fast, <15 min). Regression runs nightly or pre-release. Jenkins jobs pass -m smoke or -m regression. Can combine: -m "smoke and not slow".\n\nExample: PR pipeline runs pytest -m smoke; nightly job runs pytest -m regression --env=staging with parallel workers (-n 4).',
    code: [{ language: 'bash', snippet: "pytest tests/ -m smoke -v          # PR / quick check\npytest tests/ -m regression -n 4  # nightly full suite" }],
    source: BROWSERSTACK('smoke-testing-vs-regression-testing'),
  },
  {
    question: 'Git branching strategy?',
    answer:
      'For automation teams: feature branches per story (feature/QA-123-login-tests), PR into develop/main, CI runs smoke on PR, full regression on merge to develop, release branch for stabilization.\n\nKeep test code in same repo as framework (or dedicated automation repo linked to app releases). Tag framework versions to match app releases. Never commit secrets — use .gitignore for reports, screenshots, .env.\n\nExample: Branch feature/add-payment-tests → PR → Jenkins smoke on PR → merge to develop → nightly regression on develop.',
    source: GFG('git-branching-strategies'),
  },
  {
    question: 'How do you handle flaky scripts?',
    answer:
      'Flaky tests pass and fail without code changes. Fix systematically: (1) replace implicit waits/sleep with explicit waits; (2) isolate test data — no shared state; (3) mock unstable third parties; (4) quarantine flaky tests (@pytest.mark.quarantine) until fixed; (5) track flake rate in CI dashboard.\n\nDo not only add retries — investigate root cause (timing, env, data collision, locator fragility). Use stable locators (data-testid over dynamic XPath).\n\nExample: test_payment_flaked because two tests used same order ID — fix by generating unique order_id per test with uuid4() instead of increasing reruns.',
    source: BROWSERSTACK('flaky-test-automation'),
  },
]
