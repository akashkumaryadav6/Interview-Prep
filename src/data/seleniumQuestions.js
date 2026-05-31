import { GFG, TUTORIALS, BROWSERSTACK } from './sources'

export const seleniumBasicsQuestions = [
  {
    question: 'What is Selenium?',
    answer:
      'Selenium is an open-source suite of tools for automating web browsers. It supports functional and regression testing of web applications across browsers and platforms. Selenium is not a single tool — it includes WebDriver, IDE, and Grid.\n\nWebDriver is the primary component used in professional automation frameworks today.',
    source: GFG('selenium-interview-questions'),
  },
  {
    question: 'Selenium components?',
    answer:
      '1. Selenium WebDriver — API to control browsers programmatically (most used).\n2. Selenium IDE — browser extension for record-and-playback (prototyping only).\n3. Selenium Grid — runs tests in parallel across machines/browsers.\n4. Selenium RC (deprecated) — old server-based approach, replaced by WebDriver.',
    source: GFG('components-of-selenium'),
  },
  {
    question: 'Why Selenium over other tools?',
    answer:
      'Selenium is free, open-source, supports multiple languages (Python, Java, C#), all major browsers, and integrates with TestNG/pytest, Jenkins, and CI/CD. Large community and extensive documentation.\n\nAlternatives like Cypress, Playwright, and Katalon exist — Selenium remains industry standard due to flexibility and vendor-neutral browser control.',
    source: GFG('why-selenium-is-best-automation-tool'),
  },
  {
    question: 'Advantages and limitations of Selenium.',
    answer:
      'Advantages: free, multi-browser, multi-language, parallel execution with Grid, large ecosystem, CI/CD friendly.\n\nLimitations: web-only (no native mobile/desktop), no built-in reporting, CAPTCHA/OTP/barcode cannot be automated easily, steep learning curve for framework design, flaky tests if waits/locators are poor, no automatic test maintenance.',
    source: GFG('advantages-and-disadvantages-of-selenium'),
  },
  {
    question: 'Difference between Selenium RC and WebDriver.',
    answer:
      'Selenium RC used a JavaScript-based server (Selenium Server) as a proxy between code and browser — slower, more complex. WebDriver communicates directly with browser native APIs — faster, simpler, more stable.\n\nWebDriver is the modern standard. RC is deprecated and removed from Selenium 3+.',
    source: GFG('difference-between-selenium-rc-and-webdriver'),
  },
  {
    question: 'WebDriver architecture.',
    answer:
      'Client Library (Python/Java code) → JSON Wire Protocol / W3C WebDriver Protocol → Browser Driver (ChromeDriver, GeckoDriver) → Browser.\n\nYour test script sends commands (find element, click) as HTTP requests. The driver translates them to browser-native calls. Each browser needs its own driver executable.',
    source: GFG('selenium-webdriver-architecture'),
  },
  {
    question: 'How browser communicates with Selenium?',
    answer:
      'Selenium WebDriver uses the W3C WebDriver protocol (formerly JSON Wire Protocol). Test code sends HTTP REST commands to the browser driver, which controls the browser.\n\nExample flow: driver.get(url) → HTTP POST to driver → ChromeDriver opens URL in Chrome → response sent back to test script.',
    source: GFG('how-does-selenium-webdriver-work'),
  },
]

export const locatorsQuestions = [
  {
    question: 'Types of locators.',
    answer:
      '8 locator strategies in Selenium:\n1. ID — fastest, most reliable if unique\n2. Name\n3. ClassName\n4. TagName\n5. LinkText / PartialLinkText\n6. CSS Selector\n7. XPath\n8. DOM (rarely used)\n\nPriority: ID > Name > CSS > XPath. Always prefer stable, unique locators.',
    source: GFG('locators-in-selenium'),
  },
  {
    question: 'Difference between XPath and CSS Selector.',
    answer:
      'CSS Selector: faster, simpler syntax, good for class/id/tag-based selection, cannot traverse up the DOM easily.\n\nXPath: more powerful, can traverse any direction (parent, sibling, ancestor), supports text-based matching, but slower and more brittle if overused.\n\nUse CSS for simple locators; XPath when you need text, axes, or complex hierarchy.',
    source: GFG('css-selectors-vs-xpath'),
  },
  {
    question: 'Absolute vs relative XPath.',
    answer:
      'Absolute XPath starts from root (/html/body/div[1]/...) — breaks with any DOM change, avoid in automation.\n\nRelative XPath starts from anywhere (//div[@id=\'login\']) — more resilient, preferred approach.\n\nAlways use relative XPath with unique attributes, not positional indexes like div[3]/span[2].',
    source: GFG('absolute-and-relative-xpath-in-selenium'),
  },
  {
    question: 'Dynamic XPath.',
    answer:
      'Dynamic XPath handles elements whose attributes change at runtime (dynamic IDs, auto-generated classes). Strategies:\n\n- contains(): //input[contains(@id, \'username\')]\n- starts-with(): //button[starts-with(@id, \'submit\')]\n- text(): //span[text()=\'Login\']\n- Combine stable parent + relative child\n- Use data-testid attributes (best practice)',
    code: [{ language: 'python', snippet: "# Dynamic ID partial match\ndriver.find_element(By.XPATH, \"//input[contains(@id, 'email')]\")\n\n# Text-based\ndriver.find_element(By.XPATH, \"//button[normalize-space()='Submit']\")" }],
    source: GFG('dynamic-xpath-in-selenium'),
  },
  {
    question: 'Write XPath for difficult elements.',
    answer:
      'Techniques for hard elements:\n\n1. Following sibling: //label[text()=\'Email\']/following-sibling::input\n2. Parent: //input[@type=\'checkbox\']/..\n3. Ancestor: //span[text()=\'Error\']/ancestor::div[@class=\'form-group\']\n4. Multiple conditions: //input[@type=\'text\' and @name=\'user\']\n5. Index: (//div[@class=\'row\'])[2]//button',
    code: [{ language: 'python', snippet: "# Label-to-input association\nemail = driver.find_element(\n    By.XPATH, \"//label[text()='Email']/following-sibling::input\"\n)\n\n# Table cell by row/column text\ncell = driver.find_element(\n    By.XPATH, \"//td[text()='John']/following-sibling::td[2]\"\n)" }],
    source: GFG('xpath-axes-in-selenium'),
  },
  {
    question: 'Following-sibling, ancestor, descendant usage.',
    answer:
      'XPath axes navigate relative to current node:\n\n- following-sibling:: — siblings after current node\n- preceding-sibling:: — siblings before\n- ancestor:: — parent/grandparent chain\n- descendant:: — all children at any depth\n- parent:: — immediate parent\n- child:: — direct children',
    code: [{ language: 'python', snippet: "# Sibling\n//h3[text()='Section']/following-sibling::p[1]\n\n# Ancestor\n//span[@class='error']/ancestor::form\n\n# Descendant\n//div[@id='menu']//a[text()='Settings']" }],
    source: GFG('xpath-axes-in-selenium'),
  },
  {
    question: 'When CSS is preferred over XPath?',
    answer:
      'Prefer CSS when:\n- Element has stable id, class, or name\n- Simple hierarchy selection (#login-form input[type=email])\n- Performance matters (CSS is generally faster)\n- You do not need text or upward traversal\n\nPrefer XPath when you need text matching, sibling/parent navigation, or complex conditional logic.',
    source: GFG('css-selectors-in-selenium'),
  },
]

export const webElementsQuestions = [
  {
    question: 'Difference between find_element and find_elements.',
    answer:
      'find_element(locator) — returns the first matching WebElement. Throws NoSuchElementException if not found.\n\nfind_elements(locator) — returns a list of all matches. Returns empty list [] if none found (no exception).\n\nUse find_elements when checking existence without failing, or when iterating multiple elements.',
    code: [{ language: 'python', snippet: "from selenium.webdriver.common.by import By\n\n# Single element\nbtn = driver.find_element(By.ID, 'submit')\n\n# Multiple — no exception if empty\nitems = driver.find_elements(By.CLASS_NAME, 'list-item')\nprint(len(items))" }],
    source: GFG('find-element-and-find-elements-in-selenium'),
  },
  {
    question: 'How to handle dropdowns?',
    answer:
      'Use Select class from selenium.webdriver.support.ui for standard <select> elements.\n\nMethods: select_by_visible_text(), select_by_value(), select_by_index(), deselect_all().\n\nFor custom dropdowns (non-select), click to open and click the option element directly.',
    code: [{ language: 'python', snippet: "from selenium.webdriver.support.ui import Select\n\ndropdown = Select(driver.find_element(By.ID, 'country'))\ndropdown.select_by_visible_text('India')\ndropdown.select_by_value('IN')" }],
    source: GFG('how-to-handle-dropdown-in-selenium'),
  },
  {
    question: 'How to handle autosuggestions?',
    answer:
      'Type into input, wait for suggestion list to appear, then click the matching option.\n\nSteps: locate input → send_keys(partial text) → explicit wait for suggestions → click desired item by text or index.',
    code: [{ language: 'python', snippet: "from selenium.webdriver.support.ui import WebDriverWait\nfrom selenium.webdriver.support import expected_conditions as EC\n\ninp = driver.find_element(By.ID, 'search')\ninp.send_keys('Pyth')\n\noption = WebDriverWait(driver, 10).until(\n    EC.element_to_be_clickable((By.XPATH, \"//li[contains(text(),'Python')]\"))\n)\noption.click()" }],
    source: GFG('handling-auto-suggestion-in-selenium'),
  },
  {
    question: 'How to handle checkboxes/radio buttons?',
    answer:
      'Use is_selected() to check state. Use click() to toggle checkbox or select radio button.\n\nFor radio groups, find by value or associated label. Do not assume click is needed — check state first to avoid deselecting.',
    code: [{ language: 'python', snippet: "checkbox = driver.find_element(By.ID, 'terms')\nif not checkbox.is_selected():\n    checkbox.click()\n\nradio = driver.find_element(By.XPATH, \"//input[@type='radio' and @value='male']\")\nradio.click()" }],
    source: GFG('how-to-handle-checkbox-in-selenium'),
  },
  {
    question: 'Handle hidden elements.',
    answer:
      'Hidden elements (display:none, visibility:hidden) cannot be clicked directly. Options:\n\n1. JavaScript click: driver.execute_script("arguments[0].click()", element)\n2. Scroll into view first, then click\n3. Remove hidden attribute via JS (use cautiously)\n4. Interact with visible proxy element if available',
    code: [{ language: 'python', snippet: "elem = driver.find_element(By.ID, 'hidden-btn')\ndriver.execute_script('arguments[0].click();', elem)\n\n# Scroll into view\ndriver.execute_script('arguments[0].scrollIntoView(true);', elem)\nelem.click()" }],
    source: GFG('how-to-click-on-hidden-element-in-selenium'),
  },
  {
    question: 'Handle dynamic elements.',
    answer:
      'Dynamic elements load asynchronously or change attributes. Solutions:\n\n1. Explicit waits (WebDriverWait + expected_conditions)\n2. Stable locators (data-testid, partial attribute match)\n3. Retry logic with custom wait\n4. Avoid Thread.sleep — use condition-based waits',
    code: [{ language: 'python', snippet: "from selenium.webdriver.support.ui import WebDriverWait\nfrom selenium.webdriver.support import expected_conditions as EC\n\nelement = WebDriverWait(driver, 15).until(\n    EC.visibility_of_element_located((By.ID, 'dynamic-content'))\n)" }],
    source: GFG('handling-dynamic-elements-in-selenium'),
  },
  {
    question: 'Handle stale element exception.',
    answer:
      'StaleElementReferenceException occurs when an element reference is outdated — DOM was refreshed or page re-rendered after you found the element.\n\nFix: re-find the element before interacting, use explicit waits, avoid storing WebElement references across page navigations. Retry wrapper is common in frameworks.',
    code: [{ language: 'python', snippet: "from selenium.common.exceptions import StaleElementReferenceException\n\ndef safe_click(driver, locator, retries=3):\n    for _ in range(retries):\n        try:\n            driver.find_element(*locator).click()\n            return\n        except StaleElementReferenceException:\n            continue" }],
    source: GFG('stale-element-reference-exception-selenium'),
  },
  {
    question: 'Handle element click intercepted exception.',
    answer:
      'ElementClickInterceptedException — another element (overlay, modal, cookie banner) covers the target. Fixes:\n\n1. Wait for overlay to disappear\n2. Scroll element into view\n3. JavaScript click\n4. Close popup/banner first',
    code: [{ language: 'python', snippet: "from selenium.webdriver.common.action_chains import ActionChains\n\n# Scroll then click\nelem = driver.find_element(By.ID, 'submit')\nActionChains(driver).move_to_element(elem).click().perform()\n\n# JS click fallback\ndriver.execute_script('arguments[0].click();', elem)" }],
    source: GFG('element-click-intercepted-exception-selenium'),
  },
  {
    question: 'Handle NoSuchElementException.',
    answer:
      'Thrown when find_element cannot locate the element. Causes: wrong locator, element not yet loaded, element in iframe, typo in attribute.\n\nFix: verify locator in DevTools, add explicit wait, check iframe context, use find_elements to check existence without crash.',
    source: GFG('nosuchelementexception-in-selenium'),
  },
  {
    question: 'Difference between implicit and explicit wait.',
    answer:
      'Implicit wait: driver.implicitly_wait(10) — global setting, driver polls for element before throwing exception. Applies to all find_element calls.\n\nExplicit wait: WebDriverWait + expected condition — waits for a specific condition on a specific element (clickable, visible). More precise and recommended.\n\nNever mix many implicit waits with explicit waits — causes unpredictable delays.',
    code: [{ language: 'python', snippet: "# Implicit — global\ndriver.implicitly_wait(10)\n\n# Explicit — recommended\nfrom selenium.webdriver.support.ui import WebDriverWait\nfrom selenium.webdriver.support import expected_conditions as EC\n\nWebDriverWait(driver, 10).until(\n    EC.element_to_be_clickable((By.ID, 'login-btn'))\n)" }],
    source: GFG('implicit-wait-vs-explicit-wait-in-selenium'),
  },
  {
    question: 'Fluent wait?',
    answer:
      'FluentWait polls at a custom interval and ignores specific exceptions during the wait period. More flexible than WebDriverWait.\n\nUse when you need custom polling frequency or to ignore StaleElementReferenceException during wait.',
    code: [{ language: 'python', snippet: "from selenium.webdriver.support.ui import WebDriverWait\nfrom selenium.webdriver.support import expected_conditions as EC\nfrom selenium.common.exceptions import NoSuchElementException\n\nwait = WebDriverWait(\n    driver, timeout=30, poll_frequency=2,\n    ignored_exceptions=[NoSuchElementException]\n)\nwait.until(EC.visibility_of_element_located((By.ID, 'result')))" }],
    source: GFG('fluent-wait-in-selenium'),
  },
  {
    question: 'Which wait do you prefer and why?',
    answer:
      'Explicit wait (WebDriverWait) — it waits for a specific condition rather than a fixed time, reducing flakiness and execution time. Encapsulate common waits in utility methods (wait_for_clickable, wait_for_visible).\n\nAvoid Thread.sleep — wastes time and does not guarantee readiness. Set implicit wait to 0 when using explicit waits consistently.',
    source: BROWSERSTACK('selenium-wait-for-page-to-load'),
  },
  {
    question: 'What is synchronization issue?',
    answer:
      'Synchronization issues occur when test speed outpaces application load speed — test tries to interact before element is ready. Symptoms: NoSuchElementException, stale element, click intercepted.\n\nFix with proper waits, page load strategy, and ensuring AJAX/dynamic content completes before assertions.',
    source: GFG('synchronization-in-selenium-webdriver'),
  },
]

export const browserHandlingQuestions = [
  {
    question: 'Handle multiple windows/tabs.',
    answer:
      'Use driver.window_handles (list of IDs) and driver.switch_to.window(handle). Get current with driver.current_window_handle. Always switch back to original window after validation.',
    code: [{ language: 'python', snippet: "main = driver.current_window_handle\ndriver.find_element(By.LINK_TEXT, 'Open New Tab').click()\n\nfor handle in driver.window_handles:\n    if handle != main:\n        driver.switch_to.window(handle)\n        break\n\n# do work in new tab\ndriver.close()\ndriver.switch_to.window(main)" }],
    source: GFG('how-to-handle-multiple-windows-in-selenium'),
  },
  {
    question: 'Handle frames/iFrames.',
    answer:
      'Switch context with driver.switch_to.frame(index/name/WebElement). Always switch back with driver.switch_to.default_content() when done.\n\nNested frames require switching into each level. Elements outside frame are not accessible while inside frame context.',
    code: [{ language: 'python', snippet: "driver.switch_to.frame('iframe-id')\n# or\ndriver.switch_to.frame(driver.find_element(By.TAG_NAME, 'iframe'))\n\ndriver.find_element(By.ID, 'inner-btn').click()\ndriver.switch_to.default_content()" }],
    source: GFG('how-to-handle-frames-in-selenium'),
  },
  {
    question: 'Handle alerts/popups.',
    answer:
      'JavaScript alerts/confirms/prompts: use driver.switch_to.alert. Methods: accept(), dismiss(), send_keys() (prompt), .text.\n\nHTML modals are NOT alerts — handle them as regular DOM elements with explicit waits.',
    code: [{ language: 'python', snippet: "from selenium.webdriver.support.ui import WebDriverWait\nfrom selenium.webdriver.support import expected_conditions as EC\n\nalert = WebDriverWait(driver, 10).until(EC.alert_is_present())\nprint(alert.text)\nalert.accept()  # or alert.dismiss()" }],
    source: GFG('alert-popup-handling-in-selenium-webdriver'),
  },
  {
    question: 'Handle file upload/download.',
    answer:
      'Upload: send_keys with absolute file path directly to <input type="file"> — no need to open OS dialog.\n\nDownload: configure browser profile to set download directory, then verify file exists after click. ChromeOptions with prefs for download.default_directory.',
    code: [{ language: 'python', snippet: "upload = driver.find_element(By.ID, 'file-upload')\nupload.send_keys('/absolute/path/to/file.pdf')\n\n# Chrome download config\nopts = webdriver.ChromeOptions()\nopts.add_experimental_option('prefs', {\n    'download.default_directory': '/tmp/downloads'\n})" }],
    source: GFG('file-upload-in-selenium'),
  },
  {
    question: 'Handle authentication popup.',
    answer:
      'HTTP Basic Auth popup: pass credentials in URL — https://username:password@host.com. Or use Chrome DevTools Protocol / AutoIt (Windows) for native dialogs.\n\nForm-based login: automate normally with find_element + send_keys. Never hardcode credentials in scripts — use environment variables or secrets manager.',
    code: [{ language: 'python', snippet: "import os\n\n# Form login\ndriver.find_element(By.ID, 'user').send_keys(os.getenv('TEST_USER'))\ndriver.find_element(By.ID, 'pass').send_keys(os.getenv('TEST_PASS'))\ndriver.find_element(By.ID, 'login').click()" }],
    source: GFG('how-to-handle-login-popup-in-selenium-webdriver'),
  },
  {
    question: 'Execute JavaScript in Selenium.',
    answer:
      'driver.execute_script(js, *args) runs JavaScript in browser context. Common uses: click hidden elements, scroll, remove overlays, get page load state, set attribute values.',
    code: [{ language: 'python', snippet: "# Scroll to bottom\ndriver.execute_script('window.scrollTo(0, document.body.scrollHeight);')\n\n# Click via JS\ndriver.execute_script('arguments[0].click();', element)\n\n# Get return value\ntitle = driver.execute_script('return document.title;')" }],
    source: GFG('javascriptexecutor-in-selenium'),
  },
  {
    question: 'Scroll page.',
    answer:
      'Methods: scrollIntoView on element, window.scrollBy pixels, scroll to bottom/top via JS, ActionChains move_to_element for hover menus.',
    code: [{ language: 'python', snippet: "elem = driver.find_element(By.ID, 'footer')\ndriver.execute_script('arguments[0].scrollIntoView(true);', elem)\n\n# Scroll down 500px\ndriver.execute_script('window.scrollBy(0, 500);')" }],
    source: GFG('scroll-down-in-selenium-webdriver'),
  },
  {
    question: 'Screenshot capture.',
    answer:
      'driver.save_screenshot(\'path.png\') — full page screenshot. element.screenshot(\'element.png\') — specific element.\n\nIn pytest: capture screenshot on failure in conftest.py using request.node and driver fixture. Attach to Allure/HTML reports.',
    code: [{ language: 'python', snippet: "driver.save_screenshot('screenshots/failure.png')\n\n# Element screenshot\nelem = driver.find_element(By.ID, 'error-msg')\nelem.screenshot('error_element.png')" }],
    source: GFG('how-to-take-screenshot-in-selenium-webdriver'),
  },
]

export const seleniumScenariosQuestions = [
  {
    question: 'How would you automate OTP-based login?',
    answer:
      'Approaches:\n1. Test environment: disable OTP or use static test OTP from backend team\n2. Read OTP from test email/SMS API (Mailosaur, Twilio test API)\n3. Fetch OTP from database in test env\n4. Mock OTP validation via API stub\n\nNever automate production OTP SMS — use test hooks agreed with dev team.',
    source: BROWSERSTACK('automate-otp-authentication-selenium'),
  },
  {
    question: 'How would you automate CAPTCHA?',
    answer:
      'CAPTCHA is designed to block automation. Options:\n1. Disable CAPTCHA in test/staging environment (best practice)\n2. Use test bypass key from dev team\n3. Mock CAPTCHA service in test env\n\nDo NOT use third-party CAPTCHA solving services in professional test suites — unreliable and against most ToS.',
    source: GFG('how-to-handle-captcha-in-selenium'),
  },
  {
    question: 'How would you handle dynamic IDs?',
    answer:
      '1. Use partial match: contains(@id, \'stable-part\')\n2. Use data-testid or data-qa attributes (request from devs)\n3. CSS attribute selectors: [id^=\'prefix\']\n4. Locate by stable parent + relative XPath\n5. Avoid absolute XPath with indexes',
    code: [{ language: 'python', snippet: "driver.find_element(By.CSS_SELECTOR, '[data-testid=\"login-button\"]')\ndriver.find_element(By.XPATH, \"//button[contains(@id, 'submit-btn')]\")" }],
    source: GFG('dynamic-xpath-in-selenium'),
  },
  {
    question: 'How would you validate broken links?',
    answer:
      'Collect all <a href> elements, send HTTP HEAD/GET request to each URL, assert status code is 200. Use requests library alongside Selenium, or Java HttpURLConnection.\n\nSkip mailto:, javascript:, and anchor-only links.',
    code: [{ language: 'python', snippet: "import requests\n\nlinks = driver.find_elements(By.TAG_NAME, 'a')\nfor link in links:\n    url = link.get_attribute('href')\n    if url and url.startswith('http'):\n        resp = requests.head(url, timeout=5)\n        assert resp.status_code < 400, f'Broken: {url}'" }],
    source: GFG('find-broken-links-in-selenium'),
  },
  {
    question: 'How would you validate UI alignment?',
    answer:
      'Compare element location and size using .location, .size, .rect. Assert relative positions (button below label, elements aligned). Visual regression tools (Applitools, Percy) compare screenshots pixel-by-pixel.\n\nFor manual-style checks: get bounding boxes of two elements and compare y-coordinates for horizontal alignment.',
    source: GFG('ui-testing-with-selenium'),
  },
  {
    question: 'How would you test pagination?',
    answer:
      'Verify: page 1 loads with expected row count, Next/Previous buttons work, page numbers update, last page disables Next, first page disables Previous, data changes between pages, URL/page param updates correctly.',
    code: [{ language: 'python', snippet: "rows = driver.find_elements(By.CSS_SELECTOR, 'table tbody tr')\nassert len(rows) <= 10  # page size\n\ndriver.find_element(By.LINK_TEXT, 'Next').click()\nWebDriverWait(driver, 10).until(\n    EC.text_to_be_present_in_element((By.ID, 'page-num'), '2')\n)" }],
    source: GFG('pagination-handling-in-selenium'),
  },
  {
    question: 'How would you test a search feature?',
    answer:
      'Test cases: valid search returns results, invalid/no results message, partial match, special characters, empty search, case sensitivity, result count, pagination of results, search persistence on navigation back.',
    source: GFG('test-cases-for-search-functionality'),
  },
  {
    question: 'How would you automate table validation?',
    answer:
      'Read table rows/cells via find_elements on tr/td. Compare cell text against expected data from a list or Excel. Dynamic tables: use column headers to map indices, then iterate rows.',
    code: [{ language: 'python', snippet: "rows = driver.find_elements(By.CSS_SELECTOR, 'table tbody tr')\ndata = []\nfor row in rows:\n    cols = row.find_elements(By.TAG_NAME, 'td')\n    data.append([c.text for c in cols])\n\nassert data[0] == ['John', 'Admin', 'Active']" }],
    source: GFG('handling-web-table-in-selenium'),
  },
  {
    question: 'How would you validate sorting functionality?',
    answer:
      'Click column header, read all values in that column, verify ascending/descending order in Python with sorted(). Click again to verify toggle. Test numeric vs alphabetic sort separately.',
    code: [{ language: 'python', snippet: "driver.find_element(By.XPATH, \"//th[text()='Name']\").click()\n\ncells = driver.find_elements(By.CSS_SELECTOR, 'td.name-col')\nnames = [c.text for c in cells]\nassert names == sorted(names)" }],
    source: GFG('sorting-in-web-table-selenium'),
  },
  {
    question: 'How would you automate calendar/date picker?',
    answer:
      'Approach depends on widget type. Standard HTML5 date input: send_keys(\'2024-01-15\'). Custom widgets: click input, navigate month/year, click day cell by text or attribute. Use explicit waits after each navigation click.',
    code: [{ language: 'python', snippet: "# HTML5 date input\ndate_input = driver.find_element(By.CSS_SELECTOR, 'input[type=\"date\"]')\ndate_input.send_keys('2024-06-15')\n\n# Custom picker\ndriver.find_element(By.ID, 'date-picker').click()\ndriver.find_element(By.XPATH, \"//td[@data-date='2024-06-15']\").click()" }],
    source: GFG('how-to-handle-date-picker-in-selenium'),
  },
  {
    question: 'How would you handle flaky tests?',
    answer:
      'Root causes: poor locators, hard sleeps, test data dependency, environment instability, async loading.\n\nFixes: explicit waits, stable locators (data-testid), test isolation, retry only for known transient failures (pytest-rerunfailures), parallel-safe test data, screenshot + logs on failure, quarantine consistently failing tests until fixed.',
    source: BROWSERSTACK('flaky-selenium-test'),
  },
  {
    question: 'How would you reduce execution time?',
    answer:
      'Run headless, parallel execution (pytest-xdist), skip unnecessary waits, reuse browser session where safe, run smoke subset on commit and full regression nightly, optimize locators, disable images in browser prefs, use API setup instead of UI for test data creation.',
    source: GFG('speed-up-selenium-test-cases-execution'),
  },
  {
    question: 'How would you run tests in parallel?',
    answer:
      'pytest-xdist: pytest -n 4 (4 workers). Each worker needs isolated browser instance and test data. Selenium Grid distributes tests across machines/browsers.\n\nEnsure tests are independent — no shared state, unique user accounts, thread-safe reporting.',
    code: [{ language: 'bash', snippet: "# Parallel with pytest-xdist\npytest tests/ -n 4 --dist loadscope\n\n# Selenium Grid — point driver to hub\ndriver = webdriver.Remote(\n    command_executor='http://localhost:4444',\n    options=chrome_options\n)" }],
    source: GFG('parallel-testing-in-selenium'),
  },
  {
    question: 'How would you run tests on multiple browsers?',
    answer:
      'Parameterize browser in pytest with @pytest.mark.parametrize. Use WebDriver Manager or Grid to provision Chrome, Firefox, Edge drivers. Run same test suite against each browser — catches browser-specific issues.',
    code: [{ language: 'python', snippet: "import pytest\nfrom selenium import webdriver\n\n@pytest.mark.parametrize('browser', ['chrome', 'firefox'])\ndef test_login(browser):\n    if browser == 'chrome':\n        driver = webdriver.Chrome()\n    else:\n        driver = webdriver.Firefox()\n    driver.get('https://example.com')\n    # ... test logic\n    driver.quit()" }],
    source: GFG('cross-browser-testing-using-selenium-webdriver'),
  },
]
