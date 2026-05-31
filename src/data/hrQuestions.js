import { GFG } from './sources'

export const hrQuestions = [
  {
    question: 'Tell me about yourself.',
    answer:
      'Structure your answer in 3 parts: Present (current role + key skills), Past (relevant experience that led here), Future (why this role excites you). Keep it under 90 seconds. Avoid reading your resume — tell a story instead.\n\nExample: "I am currently working as a QA Automation Engineer at [company], where I build and maintain Selenium + pytest frameworks for payment applications. Over the past [X] years I moved from manual testing into automation and API testing. I am now looking for a role where I can deepen framework design and work in the banking domain."',
    source: GFG('tell-me-about-yourself-in-interview'),
    tags: ['behavioral', 'introduction', 'HR'],
    priority: 'critical',
  },
  {
    question: 'Walk me through your current project.',
    answer:
      'Cover these 5 points: (1) Application purpose and domain, (2) Your role and team size, (3) Tech stack — languages, tools, CI/CD, (4) Testing scope — modules, manual vs automation split, regression/smoke, (5) One concrete challenge you solved.\n\nExample: "We test a SWIFT payment processing portal. I own the automation framework in Python/Selenium, integrate API tests with Postman/pytest, and run nightly Jenkins pipelines. I recently fixed flaky login tests by replacing implicit waits with explicit expected conditions."',
    source: GFG('how-to-answer-tell-me-about-your-current-project'),
    tags: ['behavioral', 'project', 'HR'],
    priority: 'critical',
  },
  {
    question: 'Explain your role in your current organization.',
    answer:
      'Describe reporting line, team structure, and day-to-day ownership. Cover: test planning, execution, automation, defect management, and collaboration with dev/BA/ops.\n\nExample: "I report to the QA Lead in a squad of 4 testers. I am the primary automation owner — I write frameworks, review test scripts, maintain Jenkins jobs, and support production UAT. I also mentor junior testers on Python basics and participate in sprint ceremonies."',
    source: GFG('how-to-explain-your-role-in-interview'),
    tags: ['behavioral', 'HR'],
    priority: 'critical',
  },
  {
    question: 'Why are you looking for a job change?',
    answer:
      'Stay positive — never criticize your current employer. Valid reasons: growth, new tech stack, better automation exposure, domain interest, relocation, contract ending.\n\nExample: "I have learned a lot in my current role, but the project is stabilizing and automation opportunities are limited. I want a role with stronger framework ownership, CI/CD integration, and exposure to modern API and cloud-based testing."',
    source: GFG('why-are-you-looking-for-a-job-change'),
    tags: ['behavioral', 'HR'],
    priority: 'critical',
  },
  {
    question: 'Why should we hire you?',
    answer:
      'Match your strengths to the job description. Highlight: relevant domain, automation skills, problem-solving, team collaboration, and quick learning.\n\nExample: "I bring hands-on Selenium + Python automation, experience in banking payments, and a track record of reducing regression time by 40%. I communicate clearly with developers and business teams, and I take ownership of quality end-to-end — not just writing scripts."',
    source: GFG('why-should-we-hire-you'),
    tags: ['behavioral', 'HR'],
    priority: 'critical',
  },
  {
    question: 'What makes you suitable for Automation Testing?',
    answer:
      'Connect programming ability, testing mindset, and tool experience. Mention: coding skills (Python/Java), understanding of SDLC, debugging ability, framework knowledge, and passion for efficiency.\n\nExample: "I enjoy coding and have built reusable Page Object frameworks. I think like a tester — I cover edge cases and negative flows — but I also think like a developer — clean code, version control, and CI integration. That combination makes me effective at automation."',
    source: GFG('automation-tester-interview-questions'),
    tags: ['behavioral', 'automation', 'HR'],
    priority: 'high',
  },
  {
    question: 'Difference between QA Analyst and Automation Tester?',
    answer:
      'QA Analyst focuses on overall quality — test planning, manual execution, test cases, defect logging, process adherence, UAT support. Automation Tester writes and maintains automated scripts, builds frameworks, integrates with CI/CD, and reduces manual regression effort.\n\nKey difference: QA Analyst is process- and coverage-oriented; Automation Tester is code- and efficiency-oriented. Many roles combine both.',
    source: GFG('difference-between-qa-analyst-and-automation-tester'),
    tags: ['QA', 'automation', 'comparison'],
    priority: 'high',
  },
  {
    question: 'What challenges are you facing in your current project?',
    answer:
      'Pick a real challenge and explain how you handle it — shows honesty and problem-solving. Examples: flaky tests, unstable test data, unclear requirements, tight deadlines, legacy code without locators.\n\nExample: "Our biggest challenge is dynamic locators in a React frontend. I addressed it by working with devs to add data-testid attributes and by building a custom wait utility that retries with multiple locator strategies before failing."',
    source: GFG('common-challenges-in-software-testing'),
    tags: ['behavioral', 'HR'],
    priority: 'medium',
  },
  {
    question: 'Describe a production issue you handled.',
    answer:
      'Use STAR: Situation, Task, Action, Result. Show calmness, triage skills, communication, and follow-up.\n\nExample: "A payment message failed validation in production after a release. I reproduced it in UAT, identified a missing XML field mapping, logged a critical defect with logs and screenshots, coordinated a hotfix, and added an automated regression test to prevent recurrence. The fix went live within 4 hours."',
    source: GFG('production-support-interview-questions'),
    tags: ['behavioral', 'production', 'HR'],
    priority: 'high',
  },
  {
    question: 'Describe your biggest achievement.',
    answer:
      'Quantify impact where possible. Examples: built framework from scratch, cut regression time, found critical bug before release, improved CI pipeline stability.\n\nExample: "I built our automation framework from scratch using Python, Selenium, and pytest. We went from 100% manual regression (3 days) to 70% automated coverage with a 6-hour nightly run. Defect leakage dropped and the team freed up time for exploratory testing."',
    source: GFG('what-is-your-greatest-achievement-interview-question'),
    tags: ['behavioral', 'HR'],
    priority: 'medium',
  },
  {
    question: 'Describe a conflict with developers/business users.',
    answer:
      'Show professionalism — focus on resolution, not blame. Use STAR format.\n\nExample: "A developer marked my defect as \'Not Reproducible\' but I had logs and screenshots. I set up a 15-minute call, walked through steps live, and we found an environment-specific config issue. We agreed on clearer environment tagging going forward. The relationship improved because I stayed factual, not emotional."',
    source: GFG('conflict-resolution-interview-questions'),
    tags: ['behavioral', 'conflict', 'HR'],
    priority: 'medium',
  },
  {
    question: 'Why banking domain?',
    answer:
      'Show genuine interest in domain complexity: compliance, accuracy, payment flows, security.\n\nExample: "Banking testing is high-stakes — a missed decimal or wrong SWIFT field has real financial impact. I enjoy the challenge of validating payment lifecycles, message formats, and regulatory rules. My experience with SWIFT MT/MX and reconciliation gives me confidence to add value quickly."',
    source: GFG('domain-knowledge-interview-questions'),
    tags: ['domain', 'banking', 'HR'],
    priority: 'high',
  },
  {
    question: 'Explain your daily activities.',
    answer:
      'Walk through a typical day: stand-up, test execution, automation maintenance, defect triage, meetings, documentation.\n\nExample: "Morning stand-up → execute assigned test cases and triage failures → fix/update automation scripts → attend refinement/planning as needed → log defects with clear evidence → end-of-day status update. On regression days I monitor Jenkins runs and investigate failures."',
    source: GFG('software-tester-daily-activities'),
    tags: ['behavioral', 'HR'],
    priority: 'medium',
  },
  {
    question: 'What percentage of work is automation vs manual?',
    answer:
      'Be honest and explain the split logically. Typical mid-level: 60–70% automation, 30–40% manual/exploratory.\n\nExample: "Currently about 65% automation — I maintain scripts, framework, and CI jobs. 35% manual — new feature exploratory testing, UAT support, and complex scenarios not yet automated. I am actively increasing automation coverage for stable modules."',
    source: GFG('manual-testing-vs-automation-testing'),
    tags: ['behavioral', 'automation', 'HR'],
    priority: 'medium',
  },
  {
    question: 'What kind of applications have you tested?',
    answer:
      'List types with brief context: web apps, APIs, mobile (if applicable), domain (banking, e-commerce, etc.).\n\nExample: "Web-based payment portals, SWIFT message validation tools, REST APIs for transaction status, and internal admin dashboards. Mostly browser-based on Chrome/Firefox with some headless CI execution."',
    source: GFG('types-of-software-testing'),
    tags: ['behavioral', 'testing', 'HR'],
    priority: 'medium',
  },
  {
    question: 'Have you worked in Agile?',
    answer:
      'Confirm experience and name ceremonies you participate in: sprint planning, daily stand-up, refinement, review, retrospective.\n\nExample: "Yes, Scrum with 2-week sprints. I join planning to estimate testing effort, daily stand-ups for blockers, refinement to clarify acceptance criteria, and retrospectives to suggest process improvements. Testing is embedded in the sprint, not a separate phase."',
    source: GFG('agile-testing-interview-questions'),
    tags: ['Agile', 'process', 'HR'],
    priority: 'high',
  },
  {
    question: 'Explain your sprint lifecycle.',
    answer:
      'Map testing activities to each sprint phase:\n\nPlanning — estimate stories, identify test scope. Development — write test cases, start automation. Testing — execute manual + automated, log defects. Review — demo tested features. Retro — discuss what worked.\n\nExample: "Day 1–2: review stories, write cases. Day 3–7: dev delivers, I test and automate. Day 8–9: regression + bug fixes. Day 10: sprint review and retro."',
    source: GFG('scrum-sprint-lifecycle'),
    tags: ['Agile', 'sprint', 'HR'],
    priority: 'high',
  },
  {
    question: 'How do you estimate testing effort?',
    answer:
      'Factors: story complexity, number of acceptance criteria, new vs existing module, automation vs manual, environment readiness, regression impact.\n\nTechniques: experience-based, task breakdown, test case count × time per case, historical velocity, three-point estimation (optimistic/likely/pessimistic).\n\nExample: "I break each story into test scenarios, estimate hours per scenario, add buffer for defect retesting, and flag dependencies like test data or API availability."',
    source: GFG('test-estimation-techniques'),
    tags: ['estimation', 'planning', 'HR'],
    priority: 'medium',
  },
  {
    question: 'What tools are you currently using?',
    answer:
      'Organize by category — be specific with versions if asked.\n\nAutomation: Selenium, pytest, Python. API: Postman, requests. CI/CD: Jenkins, Git. Reporting: Allure / HTML reports. Defect: Jira. DB: SQL Developer / pgAdmin. Other: Git, Confluence, BrowserStack (if applicable).',
    source: GFG('software-testing-tools'),
    tags: ['tools', 'HR'],
    priority: 'medium',
  },
  {
    question: 'Why do you want this company?',
    answer:
      'Research the company beforehand. Mention: product/domain fit, tech stack, culture, growth, reputation.\n\nExample: "I admire your focus on digital payments and the scale of transactions you handle. The role combines automation framework work with banking domain — exactly where I want to grow. Your investment in CI/CD and modern testing practices aligns with how I work."',
    source: GFG('why-do-you-want-to-work-for-our-company'),
    tags: ['behavioral', 'motivation', 'HR'],
    priority: 'high',
  },
  {
    question: 'Explain your notice period situation.',
    answer:
      'Be direct and honest. State notice period length, whether negotiable, buyout option, and earliest joining date.\n\nExample: "My notice period is 60 days as per company policy, but my manager is open to negotiation to 30 days for the right opportunity. I can join immediately after relieving. I am already wrapping up documentation for a smooth handover."',
    source: GFG('notice-period-interview-questions'),
    tags: ['HR', 'logistics'],
    priority: 'medium',
  },
  {
    question: 'What are your strengths and weaknesses?',
    answer:
      'Strengths: pick 2–3 relevant ones (attention to detail, debugging, collaboration, self-learning).\n\nWeaknesses: pick a real one with improvement action — never say "I work too hard."\n\nExample strengths: "Strong debugging of flaky tests and clear defect reporting."\nExample weakness: "I sometimes dive deep into automation before confirming requirements — I now validate acceptance criteria in refinement before writing scripts."',
    source: GFG('strengths-and-weaknesses-in-interview'),
    tags: ['behavioral', 'HR'],
    priority: 'high',
  },
]
