import { GFG, TUTORIALS, BROWSERSTACK } from './sources'

export const highpriorityQuestions = [
  {
    question: 'Python OOP — explain classes, inheritance, polymorphism, and encapsulation with examples.',
    answer:
      'Class — blueprint for objects (attributes + methods). Inheritance — child class gets parent behavior; use super() for parent __init__. Polymorphism — same interface, different behavior (method overriding, duck typing). Encapsulation — hide internal state; use _private convention and @property for controlled access.\n\nIn test frameworks: BasePage parent with common wait/click; LoginPage( BasePage ) overrides open().',
    code: [{
      language: 'python',
      snippet: "class BasePage:\n    def __init__(self, driver):\n        self._driver = driver  # encapsulation\n    def click(self, locator):\n        self._driver.find_element(*locator).click()\n\nclass LoginPage(BasePage):  # inheritance\n    def login(self, user, pwd):\n        self.click(USERNAME)\n        # polymorphism — same click(), page-specific flow",
    }],
    source: GFG('python-oops-concepts'),
  },
  {
    question: 'Pytest framework — explain fixtures, markers, parametrization, and conftest.py usage.',
    answer:
      'Fixtures — setup/teardown via @pytest.fixture; inject by parameter name; scopes: function/class/module/session.\nMarkers — @pytest.mark.smoke to categorize; run with pytest -m smoke; register in pytest.ini.\nParametrize — @pytest.mark.parametrize("user,pwd", [("a","1"),("b","2")]) runs same test with multiple data sets.\nconftest.py — shared fixtures/hooks for a directory tree; no import needed.\n\npytest.ini sets addopts, markers, test paths, log format.',
    code: [{
      language: 'python',
      snippet: "@pytest.mark.smoke\n@pytest.mark.parametrize('role', ['admin', 'viewer'])\ndef test_access(login_fixture, role):\n    assert login_fixture.has_permission(role)",
    }],
    source: GFG('pytest-fixtures'),
  },
  {
    question: 'Selenium waits — explain implicit, explicit, and fluent waits with when to use each.',
    answer:
      'Implicit wait — driver.implicitly_wait(n): global poll on find_element. Simple but imprecise; avoid mixing heavily with explicit.\nExplicit wait — WebDriverWait + expected_conditions on specific element/state. Preferred for automation.\nFluent wait — WebDriverWait with poll_frequency and ignored_exceptions; fine-grained polling.\n\nBest practice: set implicit to 0; use explicit helpers (wait_clickable, wait_visible) in BasePage. Never Thread.sleep except debugging.',
    code: [{
      language: 'python',
      snippet: "from selenium.webdriver.support.ui import WebDriverWait\nfrom selenium.webdriver.support import expected_conditions as EC\n\nWebDriverWait(driver, 15).until(\n    EC.element_to_be_clickable((By.ID, 'submit'))\n).click()",
    }],
    source: GFG('implicit-wait-vs-explicit-wait-in-selenium'),
  },
  {
    question: 'Dynamic XPath — write and explain XPath strategies for dynamic elements.',
    answer:
      "Dynamic elements change id/class at runtime. Strategies:\n\n1. contains() — //input[contains(@id,'email')]\n2. starts-with() — //div[starts-with(@id,'panel-')]\n3. normalize-space() text — //button[normalize-space()='Submit']\n4. Stable parent + relative child — //form[@id='login']//input[@name='user']\n5. Axes — following-sibling, ancestor for label-input pairs\n6. Prefer data-testid when devs add it — //*[@data-testid='login-btn']\n\nAvoid absolute XPath and index-only paths (div[3]/span[2]).",
    code: [{
      language: 'python',
      snippet: "driver.find_element(By.XPATH, \"//input[contains(@id,'username')]\")\ndriver.find_element(By.XPATH, \"//label[text()='Amount']/following-sibling::input\")",
    }],
    source: GFG('dynamic-xpath-in-selenium'),
  },
  {
    question: 'Jenkins pipeline failures — debug why tests pass locally but fail in CI.',
    answer:
      'Common causes:\n\n1. Environment — missing env vars, wrong BASE_URL, secrets not in Jenkins credentials\n2. Headless/browser — Chrome options differ; add --headless=new, --no-sandbox, --disable-dev-shm-usage\n3. Timing — CI slower; increase explicit waits; remove Thread.sleep assumptions\n4. Paths — Windows vs Linux case sensitivity; hardcoded C:\\ paths\n5. Dependencies — requirements.txt not installed; wrong Python version\n6. Parallel — race conditions only under -n auto\n7. Data — test account locked; DB not seeded in QA\n8. Display — no DISPLAY on Linux without headless\n\nDebug: reproduce with same Docker image, archive console + pytest log + screenshot on CI, compare pytest --collect-only locally vs CI.',
    source: BROWSERSTACK('common-jenkins-errors'),
  },
  {
    question: 'API automation — explain end-to-end API test automation using Python.',
    answer:
      'Stack: requests/httpx + pytest + JSON schema validation.\n\nFlow:\n1. Load config (base_url, credentials from env)\n2. Auth fixture — POST /login → store Bearer token in session fixture\n3. Test CRUD — assert status code, response time, JSON fields\n4. Chain tests — create order → get order → delete (use dynamic IDs from response)\n5. Negative tests — 400/401/404, invalid payload\n6. Data — JSON/YAML files or factories; pytest parametrize for boundary values\n7. Reports — pytest-html/Allure; CI publishes results\n\nIntegrate with UI: API setup data, UI validates display, API teardown cleanup.',
    code: [{
      language: 'python',
      snippet: "import requests\n\ndef test_get_user(auth_headers):\n    r = requests.get(f'{BASE_URL}/users/1', headers=auth_headers)\n    assert r.status_code == 200\n    assert r.json()['id'] == 1",
    }],
    source: GFG('api-testing-interview-questions'),
  },
  {
    question: 'SQL joins — explain INNER, LEFT, RIGHT, and FULL joins with examples.',
    answer:
      'INNER JOIN — only rows matching ON condition in both tables.\nLEFT (OUTER) JOIN — all left rows + matching right; NULL if no match.\nRIGHT JOIN — all right rows + matching left.\nFULL OUTER JOIN — all from both; NULLs where no match (not all DBs support).\n\nQA use: join transaction to account for validation; LEFT JOIN to find orphan records (NULL on right = missing account).',
    code: [{
      language: 'sql',
      snippet: "-- INNER: payments with account info\nSELECT p.payment_id, a.account_no\nFROM payments p\nINNER JOIN accounts a ON p.account_id = a.account_id;\n\n-- LEFT: all payments even if account missing\nSELECT p.payment_id, a.account_no\nFROM payments p\nLEFT JOIN accounts a ON p.account_id = a.account_id\nWHERE a.account_id IS NULL;  -- orphans",
    }],
    source: GFG('sql-join-set-operators'),
  },
  {
    question: 'SWIFT MT vs MX — explain the difference and when each format is used.',
    answer:
      'SWIFT MT (Message Type) — legacy FIN format, fixed/block structure (MT103 customer transfer, MT202 bank transfer). Text-based, field tags like :20:, :32A:.\n\nSWIFT MX — XML messages based on ISO 20022 (e.g., pacs.008, pain.001). Rich structured data, better for straight-through processing and modern APIs.\n\nWhen: MT still widely used in correspondent banking; MX/CBPR+ adoption growing for cross-border ISO 20022 migration. QA validates field tags in MT vs XSD/schema in MX; UAT often compares both during migration.',
    source: GFG('difference-between-mt-and-mx-messages'),
  },
  {
    question: 'Regression strategy — explain how you plan, select, and execute regression testing.',
    answer:
      'Plan:\n1. Risk-based selection — high-impact modules (payments, login, compliance) first\n2. Map tests to requirements/user stories — traceability matrix\n3. Suite tiers — smoke (<30 min), regression (full), full E2E (nightly)\n\nSelect:\n- Code change impact analysis (which modules touched)\n- Failed tests from last run always re-run\n- Stable automated suite in CI; manual exploratory for new features\n\nExecute:\n- Smoke on every PR; regression on develop nightly; pre-release full pass\n- Track pass rate trend; quarantine flaky tests with ticket\n- Sign-off criteria: zero Sev-1/2 open, >95% automated pass, known failures documented',
    source: TUTORIALS('software_testing/regression_testing.htm'),
  },
  {
    question: 'Production support scenarios — describe how you handle live production issues.',
    answer:
      'Production support flow:\n\n1. Triage — severity (Sev-1 payment down vs cosmetic), assign owner\n2. Reproduce — logs, transaction ID, timestamp, environment; compare with QA\n3. Mitigate — rollback, disable feature flag, manual workaround for ops\n4. Root cause — app logs, DB state, SWIFT message trace, API gateway\n5. Verify fix in UAT → deploy → smoke in prod (read-only checks)\n6. Post-incident — RCA document, new regression test, monitoring alert\n\nQA role: reproduce from prod data (sanitized), validate hotfix, run targeted regression, update automation for gap that missed it.',
    source: TUTORIALS('software_testing/incident_management.htm'),
  },
  {
    question: 'Framework architecture — explain layers, design patterns, and data flow in your framework.',
    answer:
      'Layers:\n1. Tests — assertions, markers, thin (no locators)\n2. Pages — user actions (login, transfer); inherit BasePage\n3. Locators — constants only\n4. Utilities — waits, driver factory, API client, DB helper, config reader\n5. Data — JSON/Excel/DB fixtures\n6. Reports/logs — hooks, Allure\n\nPatterns: Page Object Model, Factory (driver), Singleton (config), Facade (API helper).\n\nData flow: config.ini → conftest fixtures → test → page → driver → browser; parallel path API client → assertions on JSON + optional DB check.',
    source: GFG('page-object-model-in-selenium-python'),
  },
  {
    question: 'Exception handling — explain try/except/finally in Python and Selenium exception handling.',
    answer:
      'Python: try runs code; except catches specific errors; else if no error; finally always runs (cleanup).\n\nSelenium common exceptions:\n- NoSuchElementException — bad locator or timing\n- TimeoutException — explicit wait expired\n- StaleElementReferenceException — DOM refreshed\n- ElementClickInterceptedException — overlay blocking click\n\nFramework pattern: catch specific exceptions in retry wrapper; log context; re-raise after max retries; screenshot in except block.',
    code: [{
      language: 'python',
      snippet: "from selenium.common.exceptions import TimeoutException\n\ntry:\n    WebDriverWait(driver, 10).until(EC.visibility_of_element_located(loc))\nexcept TimeoutException:\n    driver.save_screenshot('timeout.png')\n    raise",
    }],
    source: GFG('python-exception-handling'),
  },
  {
    question: 'Logging and reporting — explain how logging and HTML reports are implemented in your framework.',
    answer:
      'Logging:\n- Python logging or loguru; config in conftest (level from --env)\n- Log test start/end, locator actions, API request/response (mask passwords)\n- File handler: logs/test_run_<timestamp>.log\n\nReporting:\n- pytest-html with --html=reports/report.html\n- conftest pytest_runtest_makereport → attach screenshot on failure\n- Optional Allure for steps and history trend\n- Jenkins archives reports/ and emails on failure\n\nCorrelation: test name in log matches report entry and screenshot filename.',
    code: [{
      language: 'python',
      snippet: "import logging\nlogger = logging.getLogger(__name__)\n\ndef test_transfer():\n    logger.info('Starting transfer test')\n    # ... on fail, hook attaches screenshot to HTML report",
    }],
    source: GFG('pytest-html-report'),
  },
  {
    question: 'Parallel execution — explain how you run tests in parallel locally and in CI.',
    answer:
      'Local/CI parallel with pytest-xdist:\npytest tests/ -n auto  (workers = CPU count)\npytest tests/ -n 4     (fixed workers)\n\nRequirements:\n- Tests independent — no shared static state\n- Session-scoped driver → use function scope OR pytest-xdist worker-specific fixtures\n- Unique test data per worker (UUID suffix on accounts)\n- Separate Grid nodes or Docker agents in Jenkins for heavy suites\n\nSelenium Grid: Hub routes to multiple nodes; each node one browser instance. CI: parallel stages or matrix (Chrome + Firefox).',
    code: [{
      language: 'bash',
      snippet: "pytest tests/ -n 4 --dist loadscope\n# loadscope keeps class tests on same worker",
    }],
    source: GFG('pytest-parallel-testing'),
  },
  {
    question: 'Real-time debugging scenarios — walk through how you debug flaky or failing tests live.',
    answer:
      'Live debugging checklist:\n\n1. Re-run single test verbose: pytest tests/test_x.py::test_y -v -s --tb=long\n2. Check failure screenshot/video and log timestamp\n3. Run headed (disable headless) to watch behavior\n4. Verify locator in DevTools; check iframe/shadow DOM\n5. Add temporary explicit wait — if passes, timing issue\n6. Check test data — account state changed, duplicate record\n7. API/UI mismatch — log response body vs UI text\n8. CI-only: env diff, headless, resolution, parallel collision\n9. Git bisect if regression started after specific commit\n10. Quarantine with @pytest.mark.flaky after 2 reruns fail; file ticket with evidence\n\nCommunicate: share screen, narrate hypothesis, prove with one targeted fix.',
    source: BROWSERSTACK('debug-flaky-selenium-tests'),
  },
]
