import { GFG, TUTORIALS, BROWSERSTACK } from './sources'

export const fakecheckQuestions = [
  {
    question: 'Show framework flow step by step.',
    answer:
      'Typical pytest + Selenium + POM flow:\n\n1. pytest collects tests from tests/ per markers in pytest.ini\n2. conftest.py fixtures run — session driver, env config, report hooks\n3. Test calls Page Object method (e.g., LoginPage.login(user, pass))\n4. Page uses locators from locators/ or class attributes + WebDriverWait utilities\n5. Assertions in test or page (expected vs actual)\n6. On failure: screenshot hook in conftest attaches to HTML/Allure report\n7. Fixture teardown — driver.quit(), log flush\n8. pytest-html or Allure generates report; Jenkins archives artifacts\n\nSpeak this as YOUR project: name folders, who owns config, which CI job runs regression.',
    code: [{
      language: 'python',
      snippet: "# tests/test_login.py\ndef test_valid_login(driver, config):\n    login = LoginPage(driver)\n    login.open(config.base_url)\n    login.login(config.test_user, config.test_pass)\n    assert login.is_dashboard_visible()",
    }],
    source: GFG('page-object-model-in-selenium-python'),
  },
  {
    question: 'Where exactly are locators stored?',
    answer:
      'Locators live in a dedicated layer — not scattered in tests.\n\nCommon patterns:\n1. locators/ package — one file per page (login_locators.py) with tuples/constants\n2. Inside Page Object class as class variables (LOC_USERNAME = (By.ID, "user"))\n3. YAML/JSON locator files loaded by a LocatorReader utility (environment-specific overrides)\n\nRule: tests never contain raw By.XPATH strings. Page methods import locators. When UI changes, you update one file, not 50 tests.',
    code: [{
      language: 'python',
      snippet: "# locators/login_locators.py\nfrom selenium.webdriver.common.by import By\n\nUSERNAME = (By.ID, 'username')\nPASSWORD = (By.ID, 'password')\nSUBMIT   = (By.CSS_SELECTOR, 'button[type=\"submit\"]')\n\n# pages/login_page.py — uses locators above",
    }],
    source: GFG('locators-in-selenium'),
  },
  {
    question: 'What is inside conftest.py?',
    answer:
      'conftest.py is pytest\'s shared configuration module (auto-discovered). Typical contents:\n\n- @pytest.fixture(scope="session") for WebDriver — create once, yield, quit in teardown\n- Environment fixture — loads config.ini / .env (base_url, credentials from secrets)\n- Autouse fixtures — logging setup, screenshot directory creation\n- Hooks: pytest_runtest_makereport — capture failure state for screenshots\n- Custom CLI options via pytest_addoption (--env=qa)\n- Shared API session or DB connection fixtures\n\nAnything in conftest is available to all tests in that directory tree without import.',
    code: [{
      language: 'python',
      snippet: "# conftest.py\nimport pytest\n\n@pytest.fixture(scope='session')\ndef driver():\n    from selenium import webdriver\n    d = webdriver.Chrome()\n    yield d\n    d.quit()\n\n@pytest.hookimpl(hookwrapper=True)\ndef pytest_runtest_makereport(item, call):\n    outcome = yield\n    report = outcome.get_result()\n    setattr(item, 'rep_' + report.when, report)",
    }],
    source: GFG('pytest-fixtures'),
  },
  {
    question: 'How are fixtures triggered?',
    answer:
      'Fixtures run when pytest sees them as test function parameters (dependency injection).\n\n1. Test declares fixture name: def test_x(driver, login_user)\n2. pytest builds dependency graph — session fixtures run first, then function scope\n3. Code before yield = setup; after yield = teardown\n4. autouse=True runs fixture without being listed in test signature\n5. @pytest.mark.usefixtures("cleanup") triggers fixture by marker\n\nScope controls lifetime: function (per test), class, module, session (once per run). Nested fixtures chain automatically — login_user may depend on driver.',
    code: [{
      language: 'python',
      snippet: "@pytest.fixture\ndef login_user(driver):\n    page = LoginPage(driver)\n    page.login('qa_user', 'pass')\n    yield page\n    page.logout()  # teardown\n\ndef test_dashboard(login_user):\n    assert login_user.is_dashboard_visible()",
    }],
    source: GFG('pytest-fixtures'),
  },
  {
    question: 'How are reports generated?',
    answer:
      'Reporting stack in most Python frameworks:\n\n1. pytest-html — plugin adds --html=report.html; conftest embeds screenshots via extras\n2. Allure — pytest-allure-adaptor; steps/attachments; allure generate for dashboard\n3. Custom listener — pytest hook writes JSON results per test for Jenkins parsing\n4. Logging — loguru/logging to logs/run_<timestamp>.log\n\nFlow: test runs → makereport hook captures pass/fail/duration → on fail attach screenshot/log → pytest sessionfinish writes HTML → Jenkins archives report/ and publishes HTML Publisher or Allure plugin.',
    code: [{
      language: 'bash',
      snippet: "pytest tests/ --html=reports/report.html --self-contained-html\n# or\npytest tests/ --alluredir=allure-results\nallure serve allure-results",
    }],
    source: GFG('pytest-html-report'),
  },
  {
    question: 'How do retries work internally?',
    answer:
      'Retries re-run failed tests without manual intervention.\n\n1. pytest-rerunfailures — @pytest.mark.flaky(reruns=2, reruns_delay=1) or --reruns 2 CLI\n2. Custom wrapper — for loop around action catching StaleElementReferenceException\n3. Tenacity library on API calls — retry on 503/timeout\n4. CI level — Jenkins retry stage (not ideal; prefer test-level)\n\nInternal flow: test fails → plugin checks reruns remaining → same test re-executed → pass stops retry; final fail logged once in report. Combine with root-cause fix — retries mask locator/timing bugs if overused.',
    code: [{
      language: 'python',
      snippet: "import pytest\n\n@pytest.mark.flaky(reruns=2, reruns_delay=1)\ndef test_flaky_submit(driver):\n    LoginPage(driver).submit_form()",
    }],
    source: GFG('pytest-rerunfailed-tests'),
  },
  {
    question: 'How are screenshots attached?',
    answer:
      'Screenshot on failure pattern:\n\n1. pytest_runtest_makereport hook stores report on item\n2. Fixture with request.node accesses rep_call.failed\n3. driver.save_screenshot(path) or element.screenshot()\n4. Attach to report: pytest-html extras (pytest_html.extras.image), or allure.attach.file()\n\nPaths usually: reports/screenshots/<test_name>_<timestamp>.png. Session fixture ensures screenshots/ exists. Only capture on call phase failure to avoid duplicate shots on setup errors unless needed.',
    code: [{
      language: 'python',
      snippet: "@pytest.fixture(autouse=True)\ndef screenshot_on_fail(request, driver):\n    yield\n    if hasattr(request.node, 'rep_call') and request.node.rep_call.failed:\n        path = f\"reports/screenshots/{request.node.name}.png\"\n        driver.save_screenshot(path)",
    }],
    source: GFG('screenshots-in-selenium-webdriver'),
  },
  {
    question: 'Explain one Jenkinsfile.',
    answer:
      'Declarative Jenkinsfile example for automation:\n\npipeline {\n  agent any\n  environment { ENV = \'qa\' }\n  stages {\n    stage(\'Checkout\') { steps { git branch: \'develop\', url: \'...\' } }\n    stage(\'Setup\') { steps { sh \'pip install -r requirements.txt\' } }\n    stage(\'Tests\') { steps { sh \'pytest tests/ -m smoke --html=report.html\' } }\n    stage(\'Publish\') {\n      steps {\n        publishHTML(target: [reportDir: \'.\', reportFiles: \'report.html\'])\n        archiveArtifacts \'reports/**\')\n      }\n    }\n  }\n  post {\n    failure { emailext attachLog: true, to: \'team@company.com\' }\n  }\n}\n\nKnow YOUR pipeline: branch triggers, parallel stages, credentials binding, Allure plugin.',
    code: [{
      language: 'groovy',
      snippet: "stage('Run Tests') {\n  steps {\n    sh '''\n      export ENV=qa\n      pytest tests/ -n 4 --alluredir=allure-results\n    '''\n  }\n}",
    }],
    source: GFG('jenkins-pipeline-tutorial'),
  },
  {
    question: 'Explain exact Git flow in your project.',
    answer:
      'Typical QA automation Git flow:\n\n1. main — production-ready framework + stable tests\n2. develop — integration branch; nightly regression runs here\n3. feature/<ticket>-<desc> — branched from develop for new tests/fixes\n4. Commit with ticket ID: "QA-123 Add payment status API tests"\n5. Push → open Pull Request to develop\n6. CI runs smoke on PR (pytest -m smoke)\n7. Code review from lead/peer → merge squash\n8. Release: develop → main via release PR after UAT sign-off\n9. hotfix/<issue> from main for urgent locator fix → PR back to main and develop\n\nYou personally: create branch, write tests, push, fix CI failures, update PR from review comments.',
    source: GFG('git-branching-strategies'),
  },
  {
    question: 'Show one XPath you wrote recently.',
    answer:
      'Interviewers want a real, purposeful XPath — not textbook examples.\n\nExample (dynamic table row by payment reference):\n//tr[td[normalize-space()=\'REF12345\']]//button[@aria-label=\'View Details\']\n\nWhy: REF in td is stable business key; normalize-space handles whitespace; button located relative to row, not brittle absolute path.\n\nOther patterns you can cite:\n- contains(@id,\'account\') for partial dynamic IDs\n- following-sibling:: for label-to-input\n- ancestor::div[@class=\'modal\'] for scoped search\n\nAlways mention you verified in Chrome DevTools ($x) before adding to framework.',
    code: [{
      language: 'python',
      snippet: "STATUS_CELL = (\n    By.XPATH,\n    \"//tr[td[normalize-space()='{ref}']]//span[contains(@class,'status')]\"\n)\n# format with payment ref from test data\ndriver.find_element(By.XPATH, STATUS_CELL[1].format(ref='REF12345'))",
    }],
    source: GFG('dynamic-xpath-in-selenium'),
  },
  {
    question: 'Explain one SQL query you used recently.',
    answer:
      'Tie query to test validation — not random SQL.\n\nExample: verify payment reached COMPLETED in DB after UI/API test:\n\nSELECT t.transaction_id, t.status, t.amount, a.account_no\nFROM transactions t\nINNER JOIN accounts a ON t.account_id = a.account_id\nWHERE t.transaction_id = \'TXN98765\'\n  AND t.status = \'COMPLETED\';\n\nUsed in: post-test DB assertion or test data setup (find stuck PENDING payments for retry tests).\n\nMention: read-only DB user in automation, no production writes, connection from config, results compared to API/UI response.',
    code: [{
      language: 'sql',
      snippet: "SELECT t.transaction_id, t.status, t.amount\nFROM transactions t\nINNER JOIN accounts a ON t.account_id = a.account_id\nWHERE t.transaction_id = 'TXN98765'\n  AND t.status = 'COMPLETED';",
    }],
    source: GFG('sql-join-set-operators'),
  },
  {
    question: 'Explain one real defect you found.',
    answer:
      'Use STAR format with technical depth:\n\nSituation: regression on payment transfer page after UI release.\nTask: automate happy path + edge cases for cross-border transfer.\nAction: API returned 200 but UI showed "Processing" indefinitely. Compared API JSON status vs DB — DB stuck PENDING. Traced to missing status callback when intermediary bank rejected. Logged Sev-2, attached HAR, API response, SQL proof.\nResult: dev fixed webhook handler; added API+DB assertion in automation; defect prevented in 2 later releases.\n\nPick YOUR story: wrong amount decimal, duplicate SWIFT message, sanction hold not displayed, timezone on value date. Quantify impact if possible.',
    source: TUTORIALS('software_testing/bug_life_cycle.htm'),
  },
  {
    question: 'What exactly did YOU do personally?',
    answer:
      'Separate team vs personal ownership clearly:\n\nI personally:\n- Built/maintained Page Objects and locators for 3 modules (login, transfers, admin)\n- Wrote 40+ pytest tests (UI + API) and parametrized data sets\n- Designed conftest fixtures (driver, env, screenshot hook)\n- Integrated Jenkins pipeline and fixed 5+ CI-only failures (headless, paths, secrets)\n- Triaged flaky tests — replaced implicit waits, added explicit waits\n- Raised 12 production/UAT defects with logs and steps\n- Reviewed PRs for locator standards and POM compliance\n\nTeam/shared: overall architecture decision, Grid infra, some legacy test migration.\n\nNever claim sole credit for entire framework if you joined mid-project — be honest and specific.',
    source: TUTORIALS('software_testing/skills_required_for_software_tester.htm'),
  },
]
