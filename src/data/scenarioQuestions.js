import { GFG, TUTORIALS, BROWSERSTACK } from './sources'

export const scenarioQuestions = [
  {
    question: 'Test case is failing intermittently. What will you do?',
    answer:
      'Treat it as a flaky test until proven otherwise. First, check failure rate and pattern — same step every time vs random, specific browser/env, or after parallel run. Collect evidence: screenshots, logs, HAR, timestamps, and compare pass vs fail runs.\n\nCommon causes: timing (use explicit waits), shared test data, environment load, async UI/API, or order dependency in suite. Reproduce locally with same seed/data; run 10–20 times (pytest --count). Fix root cause — do not mask with blind retries unless transient infra is documented. Quarantine in CI if blocking pipeline while investigating.',
    source: BROWSERSTACK('flaky-selenium-test'),
  },
  {
    question: 'Dev says issue is not reproducible. What will you do?',
    answer:
      'Provide a reproducible package: exact steps, environment (browser/OS/build), test data, user role, time zone, and video/screenshot. Confirm you are on the same build and config as dev (feature flags, API URL).\n\nTry on another machine or clean profile to rule out local cache. Check if issue is data-specific — share DB snapshot or API request/response. If still not reproducible, log as intermittent with severity based on business impact, request logging/monitoring in prod-like env, and agree on watch period after release.',
    source: GFG('how-to-report-bug-effectively'),
  },
  {
    question: 'Requirement changes during sprint. How do you handle it?',
    answer:
      'Acknowledge change with PO/BA in writing (Jira comment or updated AC). Impact analysis: which test cases/scripts are obsolete, what new coverage is needed, and effort delta. Update test plan and automation backlog; do not silently delete tests without review.\n\nRe-prioritize sprint QA work with the team — negotiate scope trade-off if capacity is fixed. Run regression on affected module plus adjacent integrations. Flag release risk if change is late and untested; never sign off without explicit PO acceptance of residual risk.',
    source: GFG('agile-testing'),
  },
  {
    question: 'You have limited time. What will you prioritize?',
    answer:
      'Prioritize by risk and business impact: critical path (login, payment submit, compliance checks), new/changed code in the sprint, and production defect hotspots. Run smoke first, then targeted regression on touched modules — not full suite if time-boxed.\n\nAutomate high-value repeatable checks for next sprint. Communicate clearly what was not tested and get PO sign-off on gaps. Document deferred areas in test summary. Never skip security/compliance or financial calculation tests in banking without explicit approval.',
    source: GFG('test-prioritization'),
  },
  {
    question: 'Smoke passes but regression fails. What next?',
    answer:
      'Smoke passing only means core paths work — regression failure indicates deeper or edge-case breakage. Triage failures: group by module/root cause (one bug vs many). Check if regression env differs from smoke (data, config, feature flags).\n\nCompare last green build — bisect commits if needed. Block release if failures are in scope of release or severity High/Critical. Fix or log defects with clear repro; re-run failed subset after fix before full regression. Update smoke suite if gap allowed regression failure to surprise late.',
    source: GFG('smoke-testing-vs-regression-testing'),
  },
  {
    question: 'Production defect found after release. What steps?',
    answer:
      '1. Contain — assess severity, notify on-call/lead, disable feature flag or rollback if customer-impacting. 2. Document — steps, users affected, time window, logs/SWIFT traces (no PII in tickets). 3. Reproduce in lower environment with prod-like data mask. 4. Root cause with dev — code, config, data, or missed test scenario.\n\n5. Hotfix + targeted regression + smoke in prod after deploy. 6. Post-incident: add regression test, improve monitoring/alert, update test plan. Communicate status to stakeholders until closed.',
    source: BROWSERSTACK('production-testing'),
  },
  {
    question: 'Automation script unstable only in CI environment.',
    answer:
      'CI differs from local: headless mode, screen resolution, parallel workers, network latency, no display, different Chrome/driver versions, and shared agents. Compare Jenkins job config vs local — branches, env vars, secrets, base URL.\n\nFixes: pin browser/driver versions, increase timeouts modestly with explicit waits, use unique test users per worker, disable unnecessary video if resource-starved, run job on dedicated agent. Capture CI artifacts (screenshot, console, page source) on failure. Reproduce with Docker image matching CI.',
    source: BROWSERSTACK('selenium-ci-cd'),
  },
  {
    question: 'API works manually but fails in automation.',
    answer:
      'Compare manual (Postman) vs script byte-for-byte: URL, method, headers (Content-Type, Authorization, Accept), body encoding, and query params. Common misses: missing Bearer token refresh, wrong Content-Type, trailing slash, HTTP vs HTTPS, or certificate issues in CI.\n\nCheck session/cookie not carried from UI test. Assert on response body in script — status 200 with error JSON is still failure. Log request/response in test for debugging. Use same environment variables as manual collection.',
    code: [{ language: 'python', snippet: "import requests\n\nresp = requests.post(url, json=payload, headers=headers, timeout=30)\nprint(resp.status_code, resp.text)  # debug CI failure\nassert resp.status_code == 200" }],
    source: GFG('api-testing-interview-questions'),
  },
  {
    question: 'Element works locally but not in Jenkins.',
    answer:
      'Typical causes: headless rendering differences, viewport size hiding elements, slower page load in CI, different locale/date format, and stale locators after deploy timing. Use explicit waits for element visible + clickable, scroll into view, and stable locators (data-testid).\n\nVerify Jenkins runs against correct environment URL and build. Check for overlays, cookie banners, or MFA disabled in test env only locally. Increase logging: save screenshot and HTML on failure. Run Jenkins job from branch with fix before merging.',
    source: BROWSERSTACK('selenium-jenkins'),
  },
  {
    question: 'Business says expected result changed.',
    answer:
      'Do not change tests unilaterally. Request updated acceptance criteria or change request from BA/PO — email/Jira ticket. Assess impact on automation baselines, regression suite, and UAT sign-off documents.\n\nUpdate test cases and scripts after approval; version-control with ticket reference. Re-run affected suite and communicate to team if other tests assumed old behavior. If change is retroactive for in-flight defects, clarify which failures are now invalid.',
    source: GFG('change-management-in-testing'),
  },
  {
    question: 'Test data unavailable.',
    answer:
      'Escalate early — blocked testing is a sprint risk. Options: work with DBA/ops for masked prod subset, use API/factory scripts to create data, maintain golden test accounts documented in wiki, or use stub/mock for non-UI layers with PO agreement.\n\nNever use real customer PII in test. For banking, use compliance-approved synthetic IBANs/BICs. Meanwhile execute static tests (message validation, unit-level) or peer review test cases. Log blocker in daily standup with ETA.',
    source: GFG('test-data-management'),
  },
  {
    question: 'Application response slow.',
    answer:
      'Separate environment slowness from product defect. Measure response time with timestamps in automation (soft assert threshold), APM tools, or browser Network tab. Identify layer — UI, API, DB, third-party screening/SWIFT.\n\nIf slowness causes failures, adjust waits strategically (explicit, not huge sleep) and flag performance defect with evidence (p95 latency). Run tests off-peak or on dedicated env. Do not ignore — slow prod impacts STP and cut-offs in banking.',
    source: GFG('performance-testing-basics'),
  },
  {
    question: 'Random popup appears.',
    answer:
      'Identify trigger — cookie consent, session timeout, marketing modal, error toast, or concurrent user alert. Reproduce with video; check if popup is iframe or shadow DOM.\n\nShort-term: handle in Page Object — wait and close if displayed within short timeout (do not fail if absent). Long-term: request disable in test env or data-testid for dismiss button. Avoid clicking random coordinates. If popup is a bug (should not block flow), log defect separately from test maintenance.',
    source: GFG('handle-alerts-popups-selenium'),
  },
  {
    question: 'Test passes individually but fails in suite execution.',
    answer:
      'Classic test isolation failure. Check shared state: same user logged in twice, data consumed by prior test, database not reset, static variables, or file locks. Review test order — @pytest.mark dependency or alphabetical order may expose coupling.\n\nFix: unique data per test, cleanup in teardown, independent browser session per test, pytest random order to detect. Run failed test with tests that ran before it. Use pytest fixtures with function scope for driver and fresh login.',
    source: GFG('test-isolation'),
  },
  {
    question: 'Parallel execution causing failures.',
    answer:
      'Parallel tests must not share accounts, payment references, or DB rows. Use worker-specific IDs (pytest-xdist worker_id), separate browsers, and thread-safe reporting. Race conditions on same record cause intermittent failures.\n\nReduce parallelism for tests that hit single shared resource, or mock backend. Verify Grid/hub capacity — session timeouts under load. Run with -n auto locally to reproduce; fix data strategy before increasing CI parallelism.',
    code: [{ language: 'bash', snippet: 'pytest tests/ -n 4 --dist loadscope\n# Each worker: unique user via worker input' }],
    source: GFG('parallel-testing-in-selenium'),
  },
  {
    question: 'Database values mismatch.',
    answer:
      'Confirm UI/API action completed — check transaction status and timestamps. Query correct schema/environment; watch replication lag in clustered DB. Compare expected vs actual with SQL — payment amount, status, nostro, message id.\n\nMismatch sources: async posting, rollback after SWIFT NACK, wrong test account, or date boundary (value date). Attach query results to defect. Automate DB assertion via controlled test API or read-only test DB user; avoid hardcoding prod connection.',
    source: GFG('database-testing'),
  },
  {
    question: 'User story unclear.',
    answer:
      'Do not guess expected behavior. Schedule refinement with BA/PO — list specific questions (edge cases, error messages, limits). Document assumptions and get written answers in Jira AC before test design.\n\nWrite draft test scenarios and send for review — often clarifies gaps early. If story stays unclear, mark story as blocked in sprint; testing on ambiguity creates false defects. Escalate to Scrum Master if recurring.',
    source: GFG('user-story-in-agile'),
  },
  {
    question: 'Requirement document missing.',
    answer:
      'Use available sources: Jira AC, mockups, API Swagger, previous sprint behavior, and SME interview. Produce a short test basis document listing assumptions and send to PO for confirmation before execution.\n\nLog risk: incomplete coverage without BRD. For regulated banking, insist on compliance-approved requirements for audit trail. Do not sign UAT without documented expected results. Follow up formally for missing artifacts.',
    source: GFG('software-requirement-specification'),
  },
  {
    question: 'High severity defect near release date.',
    answer:
      'Immediately notify QA lead, PM, and release manager with impact assessment — modules affected, workaround exists or not, regulatory exposure. Do not quietly downgrade severity without approval.\n\nOptions: fix and targeted retest, defer release, release with known issue + waiver (PO/compliance sign-off), or hotfix branch. Accelerate regression on fix; avoid skipping full smoke. Document decision in release notes. Post-release: monitor production closely for related symptoms.',
    source: GFG('defect-life-cycle'),
  },
]
