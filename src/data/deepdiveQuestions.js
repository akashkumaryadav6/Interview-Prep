import { GFG, TUTORIALS, BROWSERSTACK } from './sources'

export const deepdiveQuestions = [
  {
    question: 'Show me one automation flow you designed.',
    answer:
      'Describe end-to-end: trigger → layers → assertions → reporting.\n\nExample (payment portal): "I designed a nightly regression flow: Jenkins triggers pytest suite on staging. Tests pull test data from a JSON fixture factory. Flow: UI login via Page Object → navigate to Outgoing Payment → fill SWIFT fields via API shortcut for speed → submit → poll status API until SETTLED → assert DB record in Oracle via JDBC helper. Failures attach screenshot + log to Allure and Slack alert QA channel. Runtime dropped from 4h manual to 45 min automated."\n\nHighlight: why you chose UI vs API, how you handle async waits, and how the flow maps to a real business scenario.',
    source: BROWSERSTACK('test-automation-framework-design'),
  },
  {
    question: 'Explain your hardest bug.',
    answer:
      'Use STAR and technical depth — intermittent bugs impress when you explain investigation method.\n\nExample: "Intermittent duplicate SWIFT messages in UAT only under load. Reproduced after 200 parallel submissions. I correlated app logs with MQ queue depth — race condition: two threads read same sequence number before DB lock. I built a minimal JMeter script to reproduce, captured thread dumps, and paired with dev to add optimistic locking. Added an API-level idempotency test and a concurrency integration test. Bug was Critical severity — would have caused duplicate settlements in production."\n\nShow: hypothesis → evidence → collaboration → permanent test guard.',
    source: GFG('how-to-debug-intermittent-software-bugs'),
  },
  {
    question: 'Explain one failed release.',
    answer:
      'Be honest, blameless, and focus on process improvements — interviewers want maturity not excuses.\n\nExample: "Release 3.2 failed UAT because FX rate table migration script ran against wrong schema in pre-prod — rates showed zeros. Testing had used mocked rates in lower env; integration gap. We rolled back within 2 hours. Post-mortem actions: (1) mandatory data parity checklist before UAT, (2) automated smoke on live rate feed, (3) release checklist owner sign-off. I updated regression to include end-to-end rate validation, not just UI display."\n\nCover: what broke, impact, rollback, root cause, what you changed personally.',
    source: GFG('post-mortem-meeting-in-software-development'),
  },
  {
    question: 'Explain one production issue.',
    answer:
      'Demonstrate calm triage, communication, and follow-up automation.\n\nExample: "After go-live, corporate clients could not download MT940 statements. I joined the war room, reproduced in prod-like UAT with same client ID, traced to a null pointer when account had zero transactions for the day — edge case missed. Provided logs and SQL evidence. Hotfix in 6 hours. I added a negative test for empty-state download and a monitoring alert on 500 errors for that endpoint. Communicated workaround to support: use date range with prior day."\n\nMention: severity, stakeholders notified, workaround, prevention test.',
    source: GFG('production-support-interview-questions'),
  },
  {
    question: 'Explain your regression strategy.',
    answer:
      'Layer your answer: what runs when, on which environment, manual vs automated.\n\nExample structure:\n- Smoke (15 min) — every build: login, core navigation, one payment path\n- Sprint regression (2h) — end of sprint: all stories in sprint + affected modules\n- Full regression (nightly, 6h) — automated P1/P2 suites on staging\n- Pre-prod — manual exploratory on changed areas + full automated pass\n- Production sanity — post-deploy smoke only\n\nPrioritize by risk matrix. Maintain regression suite in version control; retire obsolete tests quarterly. Track pass rate trend — dropping pass rate signals tech debt.',
    source: GFG('regression-testing-in-software-testing'),
  },
  {
    question: 'How do you select automation candidates?',
    answer:
      'Use repeatable, stable, high-value criteria — not "automate everything."\n\nAutomate when:\n- Test runs frequently (every sprint/release)\n- Stable UI/API (locators agreed with dev, data-testid)\n- Clear expected results (assertions are deterministic)\n- High business risk or tedious manual effort\n- Good ROI — effort to automate < 3× manual run cost over 6 months\n\nDefer when:\n- One-off or changing requirements\n- Heavy visual/layout judgment\n- Third-party dependencies you cannot stub\n\nExample: automate login, payment submission, status API checks; keep one-time regulatory form layout review manual.',
    source: BROWSERSTACK('what-test-cases-to-automate'),
  },
  {
    question: 'Which tests should NOT be automated?',
    answer:
      'Shows judgment — senior testers know automation limits.\n\nDo NOT automate (or deprioritize):\n- Exploratory / usability / ad-hoc sessions\n- One-time tests (single migration validation)\n- Unstable features still in flux (locators change daily)\n- CAPTCHA, OTP hardware tokens, physical devices without harness\n- Subjective visual design ("does branding look right?")\n- Tests where maintenance cost exceeds manual run cost\n- Compliance interviews or document review workflows\n\nBetter approach: automate the stable checks around these areas (e.g., API returns 200) and keep human judgment for the rest.',
    source: GFG('when-not-to-automate-tests'),
  },
  {
    question: 'How do you measure automation success?',
    answer:
      'Use metrics that tie to business outcomes, not vanity counts.\n\nUseful metrics:\n- % critical regression automated (target e.g. 70% of P1 paths)\n- Manual regression effort hours saved per release\n- Defect leakage rate (prod bugs not caught in QA)\n- Mean time to feedback — build to test results (CI duration)\n- Flaky test rate (< 2% of runs)\n- Automation pass rate trend (stable or improving)\n- Cost per test run (infra + maintenance hours)\n\nAvoid: "we have 5000 tests" without context. Report: "Nightly suite covers 85% of P1 scenarios; regression manual effort down from 3 days to 4 hours; zero P1 leakage last 2 releases."',
    source: BROWSERSTACK('test-automation-metrics'),
  },
  {
    question: 'How do you reduce maintenance cost?',
    answer:
      'Maintenance kills automation ROI — explain concrete practices.\n\n1. Page Object Model / Screenplay — UI changes in one place\n2. Stable locators — data-testid agreements with frontend team\n3. API setup instead of UI for test data (faster, less brittle)\n4. Shared libraries for waits, drivers, DB helpers\n5. Remove obsolete tests — quarterly suite audit\n6. Parallel-safe tests — no shared state between tests\n7. Code review for test PRs same as production code\n8. Tag tests (@smoke, @payments) — run subsets, not always full suite\n\nExample: "Refactoring 40 duplicate login steps into one fixture cut login-related failures by 60% and fix time from 2 hours to 15 minutes per locator change."',
    source: GFG('page-object-model-in-selenium'),
  },
  {
    question: 'How do you improve execution speed?',
    answer:
      'Parallelization, smarter scope, and faster setup.\n\nTactics:\n- Parallel runs (pytest-xdist, Selenium Grid, cloud like BrowserStack)\n- Headless browsers where UI validation allows\n- API tests instead of UI for data setup and assertions\n- Skip unnecessary sleeps — explicit waits only\n- Test data caching / DB snapshots instead of full UI registration per test\n- Split suites: smoke on commit, full nightly\n- Reuse browser session where framework supports it\n- Mock external systems (credit bureau, SWIFT gateway) in lower envs\n\nExample: "Parallelizing 80 tests across 4 nodes + replacing UI login with token injection reduced suite from 3h to 40 min."',
    source: BROWSERSTACK('speed-up-selenium-test-automation'),
  },
  {
    question: 'How do you maintain test stability?',
    answer:
      'Flakiness erodes trust — describe prevention and detection.\n\nPrevention:\n- Explicit waits (expected conditions), never hard-coded sleep\n- Retry only for known infra issues, not masking real bugs\n- Isolate tests — independent data per test\n- Stable test environment — versioned browsers, pinned dependencies\n- Idempotent tests — can run in any order\n\nDetection:\n- Quarantine flaky tests immediately; fix or delete within sprint\n- Track flake rate in CI dashboard\n- Root-cause categories: timing, data, env, locator, external dependency\n\nExample: "We added a custom wait helper and banned Thread.sleep in reviews. Flaky rate went from 12% to under 2% in one quarter."',
    source: BROWSERSTACK('flaky-selenium-tests'),
  },
  {
    question: 'What improvements did you personally introduce?',
    answer:
      'Pick 2–3 with measurable impact — ownership matters for senior roles.\n\nExamples you can adapt:\n- "Built pytest + Selenium framework from scratch — team adopted in 2 months"\n- "Integrated Allure reports into Jenkins — stakeholders see pass/fail without asking QA"\n- "Introduced contract tests for payment API — caught breaking changes in CI before merge"\n- "Added data-testid standards with dev lead — locator breakage down 50%"\n- "Mentored 2 manual testers on Python — they now own 30% of automation backlog"\n\nFormula: Problem → your action → measurable result. Avoid "we" only — say "I proposed, I implemented, I drove adoption."',
    source: GFG('software-tester-career-growth'),
  },
  {
    question: 'What bottlenecks existed in your project?',
    answer:
      'Show awareness of process constraints and how you navigated them.\n\nCommon bottlenecks + responses:\n- Slow environment provisioning → pushed for Dockerized test env\n- Unclear requirements → asked for acceptance criteria in refinement, wrote BDD scenarios\n- Serial QA at end of sprint → advocated shift-left, dev pairing on unit tests\n- Shared test data conflicts → built data factory API\n- Long regression → automation + risk-based selection\n- Dev queue for bug fixes → prioritized by severity, daily triage with lead\n\nExample: "UAT environment was shared with 3 projects — bookings collided. I documented a booking calendar and pushed for dedicated automation sandbox — reduced blocked days from 5/sprint to zero."',
    source: GFG('common-challenges-in-software-testing'),
  },
  {
    question: 'How do you communicate with business teams?',
    answer:
      'Business cares about risk, timeline, and user impact — not Selenium details.\n\nPractices:\n- Plain language status: "Payment module — 2 high defects open, release at risk without fix by Wednesday"\n- Visual evidence — screenshots, short demo videos for UAT sign-off\n- Risk-based summaries in steering meetings — not raw defect counts\n- Clarify requirements early — "Given/When/Then" examples in refinement\n- Manage expectations on automation — what is covered, what is not\n- Document known issues and workarounds before go-live\n\nExample: "For business UAT I run a 30-minute walkthrough of test scope and show a one-page sign-off checklist with pass/fail per requirement — they sign digitally instead of reading 200 test cases."',
    source: GFG('communication-skills-for-software-testers'),
  },
  {
    question: 'How do you prepare solution documents?',
    answer:
      'Solution docs bridge QA findings and dev/BA implementation — structure matters.\n\nTypical sections:\n1. Problem statement and business impact\n2. Environment and reproduction steps\n3. Root cause analysis (with logs/evidence)\n4. Proposed solution options (pros/cons)\n5. Recommended approach and effort estimate\n6. Test impact — regression areas, new test cases\n7. Risks and rollback plan\n\nFor automation proposals add: framework diagram, folder structure, CI integration, timeline, maintenance ownership.\n\nExample: "For flaky payment tests I wrote a 3-page doc: root cause (implicit waits), option A (explicit waits, 3 days), option B (API-only path, 5 days). Lead chose hybrid. Attached sample code and migration plan for 45 tests."',
    source: TUTORIALS('/software_testing/software_test_documentation.htm'),
  },
]
