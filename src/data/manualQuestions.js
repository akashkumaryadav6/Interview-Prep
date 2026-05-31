import { GFG, TUTORIALS } from './sources'

export const manualQuestions = [
  {
    question: 'SDLC vs STLC.',
    answer:
      'SDLC (Software Development Life Cycle) is the end-to-end process of building software — planning, requirements, design, development, testing, deployment, maintenance. It is owned by the whole project team.\n\nSTLC (Software Testing Life Cycle) is the subset focused only on testing activities — requirement analysis, test planning, test case design, environment setup, execution, cycle closure. STLC fits inside SDLC.\n\nKey difference: SDLC produces the product; STLC validates it. Testing starts early in SDLC (shift-left) even though execution peaks before release.',
    source: GFG('software-development-life-cycle-sdlc'),
  },
  {
    question: 'Severity vs priority.',
    answer:
      'Severity = technical impact on the system (how bad is the defect?). Set by QA based on functionality/data loss.\n\nPriority = business urgency to fix (how soon should dev fix it?). Set by product/management based on release timelines and user impact.\n\nThey are independent. Example: wrong logo on login page — Low severity (cosmetic) but High priority if CEO demo is tomorrow. Payment calculation off by 1 cent — High severity but Low priority if feature is not live yet.\n\nCommon scale: Critical / Major / Minor / Trivial for severity; P1–P4 for priority.',
    source: GFG('difference-between-severity-and-priority'),
  },
  {
    question: 'Defect lifecycle.',
    answer:
      'Typical states:\n\n1. New — tester logs defect\n2. Assigned — triaged to developer\n3. Open / In Progress — developer investigating or fixing\n4. Fixed / Resolved — fix deployed to test environment\n5. Retest — QA verifies fix\n6. Verified / Closed — fix confirmed\n7. Reopened — fix failed retest\n8. Deferred / Rejected / Duplicate / Cannot Reproduce — alternate closures\n\nGood practice: every transition has an owner, comment, and build/version. Reopened defects often indicate poor root-cause analysis or missing regression coverage.',
    source: GFG('defect-life-cycle-in-software-testing'),
  },
  {
    question: 'Bug leakage vs bug release.',
    answer:
      'Bug leakage — a defect that existed in the application but was NOT found during testing; it escapes to production or UAT. Indicates gaps in test coverage, environment parity, or test data.\n\nBug release — a defect that WAS found during testing but was consciously released anyway (known issue) — usually documented with waiver, workaround, or deferred fix due to low risk or deadline.\n\nLeakage = testing miss. Release = informed business decision. Both hurt quality; leakage is worse for QA credibility.',
    source: TUTORIALS('/software_testing_dictionary/bug_leakage.htm'),
  },
  {
    question: 'Regression vs retesting.',
    answer:
      'Retesting — re-execute specific test cases that failed after a fix, on the same build or new build, to confirm the defect is resolved. Narrow scope, tied to defect IDs.\n\nRegression testing — re-run a broader (or full) suite to ensure new code or fixes did NOT break existing functionality. Wider scope, often automated.\n\nExample: login bug fixed → retest login test cases. Before release → run regression suite (smoke + critical paths + affected modules).',
    source: GFG('difference-between-retesting-and-regression-testing'),
  },
  {
    question: 'Smoke vs sanity.',
    answer:
      'Smoke testing — shallow, wide check that the build is stable enough for further testing. "Does it install, launch, and core paths work?" Run on every new build. Fail fast — reject build if smoke fails.\n\nSanity testing — narrow, deep check on a specific changed area after a small fix. "Does this one feature still work after the patch?" Subset of regression, not full suite.\n\nSmoke = build acceptance. Sanity = focused confidence after localized change.',
    source: GFG('difference-between-sanity-testing-and-smoke-testing'),
  },
  {
    question: 'Test plan vs test strategy.',
    answer:
      'Test Strategy — high-level, organization/project-wide document. Defines testing approach, tools, levels (unit/integration/system), entry/exit criteria, risk approach, roles. Usually stable across releases.\n\nTest Plan — project/release-specific document derived from strategy. Scope, schedule, features in/out of scope, test environment, deliverables, milestones, resources. Changes per sprint or release.\n\nAnalogy: Strategy = how we test in this company; Plan = how we test this release of Payment App v2.3.',
    source: GFG('difference-between-test-plan-and-test-strategy'),
  },
  {
    question: 'Functional vs non-functional testing.',
    answer:
      'Functional testing — validates WHAT the system does against requirements. Examples: login with valid credentials, transfer amount, search returns correct results. Black-box, requirement-driven.\n\nNon-functional testing — validates HOW WELL the system behaves. Examples: performance (load time under 2s), security (SQL injection blocked), usability, reliability, compatibility, scalability.\n\nBoth are required for production readiness. A feature can pass functional tests but fail performance under 1000 concurrent users.',
    source: GFG('functional-vs-non-functional-testing'),
  },
  {
    question: 'Black box vs white box.',
    answer:
      'Black box testing — tester has no knowledge of internal code structure. Tests based on inputs, outputs, and requirements. Techniques: equivalence partitioning, boundary values, decision tables, exploratory testing. Typical for manual and system testing.\n\nWhite box testing — tester knows internal logic, code paths, branches. Techniques: statement/branch coverage, path testing, unit tests by developers. Typical for unit and integration testing.\n\nGray box — partial knowledge (e.g., DB schema, API contracts) — common in API and integration testing.',
    source: GFG('difference-between-black-box-and-white-box-testing'),
  },
  {
    question: 'Boundary value analysis.',
    answer:
      'Defects cluster at boundaries of input ranges. BVA tests values at, just below, and just above boundaries rather than every value in the range.\n\nFor field accepting 1–100: test 0, 1, 2, 99, 100, 101 (min-1, min, min+1, max-1, max, max+1).\n\nWorks with equivalence partitioning — first divide inputs into valid/invalid classes, then apply BVA on class edges.',
    code: [{ language: 'text', snippet: 'Field: Age 18–60 (inclusive)\n\nBVA test values:\n  17  → invalid (below min)\n  18  → valid (min boundary)\n  19  → valid (min+1)\n  59  → valid (max-1)\n  60  → valid (max boundary)\n  61  → invalid (above max)' }],
    source: GFG('boundary-value-analysis-in-software-testing'),
  },
  {
    question: 'Equivalence partitioning.',
    answer:
      'Divide input data into partitions where all values in a partition are expected to behave the same. Pick one representative value per partition instead of testing every value — reduces test cases while maintaining coverage.\n\nExample: password length 8–20 characters.\n- Invalid partition 1: length < 8 (test: "abc")\n- Valid partition: length 8–20 (test: "password1")\n- Invalid partition 2: length > 20 (test: 21-char string)\n\nCombine with BVA for edge cases within each partition.',
    source: GFG('equivalence-partitioning-method'),
  },
  {
    question: 'Exploratory testing.',
    answer:
      'Simultaneous learning, test design, and test execution — no detailed pre-written scripts. Tester explores the application based on charter, intuition, and risk areas to find unexpected defects.\n\nBest for: new features, unclear requirements, usability issues, edge cases scripts miss. Often time-boxed (e.g., 90-minute session) with session notes and debrief.\n\nNot a replacement for scripted regression — complements it. Strong exploratory testers document findings and turn critical paths into automated checks later.',
    source: GFG('exploratory-testing-software-testing'),
  },
  {
    question: 'Risk-based testing.',
    answer:
      'Prioritize testing effort based on risk = Probability of failure × Impact if it fails. High-risk areas get more depth, earlier execution, and automation; low-risk areas get lighter coverage.\n\nRisk identification sources: requirements ambiguity, complex integrations, new technology, past defect history, regulatory impact (payments, healthcare).\n\nExample: in a banking app, fund transfer and authentication are high risk; "About Us" page is low risk. Allocate 60% of regression effort to payment and auth modules.',
    source: GFG('risk-based-testing-in-software-testing'),
  },
  {
    question: 'Agile testing principles.',
    answer:
      'Key principles (aligned with Agile Manifesto):\n\n1. Testing is whole-team responsibility — not only QA at the end\n2. Early and continuous testing — shift-left in every sprint\n3. Automate regression; keep manual for exploratory and new stories\n4. Working software over exhaustive documentation — lightweight test charters and BDD scenarios\n5. Adapt to changing requirements — reprioritize tests each sprint\n6. Face-to-face communication with dev and BA for quick clarification\n7. Sustainable pace — avoid death-marches; quality drops under burnout\n\nQA attends standups, refinement, and retros; defines Definition of Done with test evidence.',
    source: GFG('agile-testing-principles'),
  },
  {
    question: 'Entry and exit criteria.',
    answer:
      'Entry criteria — conditions that must be met BEFORE testing starts. Examples: requirements signed off, test environment available, test data loaded, build deployed, smoke passed, test cases reviewed.\n\nExit criteria — conditions to STOP testing for a phase/release. Examples: planned test cases executed, critical/high defects closed or waived, regression pass rate ≥ 95%, no open P1 defects, sign-off from stakeholders.\n\nWithout clear criteria, teams debate "are we done?" and releases slip or ship with unknown risk.',
    source: TUTORIALS('/software_testing/software_testing_entry_exit_criteria.htm'),
  },
  {
    question: 'Traceability matrix.',
    answer:
      'A document (often spreadsheet or ALM tool) mapping requirements → test cases → defects → test results. Ensures every requirement is tested and every test traces back to a business need.\n\nTypes: Forward (requirement → tests), Backward (test → requirement), Bi-directional (both).\n\nExample: REQ-101 "User can reset password" maps to TC-45, TC-46, TC-47. If REQ-101 fails UAT, you instantly see which tests should have caught it.\n\nCritical for audits in regulated domains (banking, healthcare).',
    source: GFG('requirement-traceability-matrix'),
  },
  {
    question: 'Defect report contents.',
    answer:
      'A good defect report enables reproduction without back-and-forth:\n\n1. Defect ID and title (clear, specific)\n2. Environment — build version, OS, browser, test data\n3. Steps to reproduce (numbered)\n4. Expected vs actual result\n5. Severity and priority\n6. Screenshots, logs, HAR files, or video\n7. Test case reference / requirement ID\n8. Reporter, date, assignment\n9. Attachments (sample payload, DB snapshot if relevant)\n\nBad example: "Login broken." Good example: "Login fails with valid AD user on Chrome 120 — build 2.4.1 — returns 500 after MFA step; see attached network log."',
    source: GFG('bug-report-format'),
  },
]
