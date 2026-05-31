import { GFG, TUTORIALS, BROWSERSTACK } from './sources'

export const jenkinsQuestions = [
  {
    question: 'What is Jenkins?',
    answer:
      'Jenkins is an open-source automation server used for CI/CD — Continuous Integration and Continuous Delivery. It automates building, testing, and deploying software when developers push code.\n\nFor QA: Jenkins runs your pytest/Selenium/API suites on schedule or on every commit, publishes reports, notifies the team on failure, and keeps test execution consistent across machines.\n\nExample: Every push to develop triggers a Jenkins job that installs dependencies, runs smoke tests, and emails the team if any test fails.',
    source: GFG('what-is-jenkins'),
  },
  {
    question: 'Explain Jenkins pipeline.',
    answer:
      'A Jenkins Pipeline is a suite of plugins that models the delivery process as code — typically a Jenkinsfile in the repo. Pipelines define stages (Checkout, Build, Test, Deploy) and steps inside each stage.\n\nTwo types: Declarative (structured, recommended) and Scripted (Groovy-heavy, flexible). Pipeline runs on an agent (node) with defined tools and environment.\n\nExample: A Declarative pipeline has stages Checkout → Install Dependencies → Run Tests → Publish Report — each visible in Blue Ocean or Stage view with pass/fail per stage.',
    code: [{ language: 'bash', snippet: "pipeline {\n  agent any\n  stages {\n    stage('Checkout') { steps { checkout scm } }\n    stage('Test') {\n      steps { sh 'pytest tests/ -m smoke -v' }\n    }\n  }\n  post {\n    always { junit 'report.xml' }\n  }\n}" }],
    source: GFG('jenkins-pipeline-tutorial'),
  },
  {
    question: 'Difference between freestyle and pipeline job.',
    answer:
      'Freestyle project: configured entirely in Jenkins UI — build steps, shell commands, post-build actions. Simple for one-off jobs but hard to version, review, and reproduce.\n\nPipeline job: defined in Jenkinsfile stored in Git — version controlled, code-reviewed, supports complex parallel stages, checkpoints, and shared libraries. Industry standard for CI/CD.\n\nExample: A freestyle job runs "pytest tests/" via UI shell step; the same logic in a Jenkinsfile travels with the repo and works identically on every Jenkins instance.',
    source: GFG('difference-between-freestyle-and-pipeline-job-in-jenkins'),
  },
  {
    question: 'What stages are in your pipeline?',
    answer:
      'Typical QA automation pipeline stages:\n\n1. Checkout — clone repo from Git\n2. Setup — create venv, pip install -r requirements.txt\n3. Lint/Static check (optional) — flake8, pylint\n4. Test — pytest with markers (smoke/regression), env vars\n5. Report — publish JUnit, HTML, Allure\n6. Notify — email/Slack on failure\n7. Archive — screenshots, logs as artifacts\n\nTailor to your project — mention parallel API and UI stages if applicable.\n\nExample: "Our PR pipeline has Checkout → Install → Smoke Tests → Publish Allure; nightly adds Regression Tests with --env=staging."',
    source: TUTORIALS('/jenkins/jenkins_pipeline.htm'),
  },
  {
    question: 'How do you trigger execution?',
    answer:
      'Common triggers: (1) SCM polling or webhook on Git push/PR; (2) cron schedule (H 2 * * * for nightly); (3) manual Build with Parameters; (4) upstream job trigger after build completes; (5) remote API trigger (curl with Jenkins token).\n\nFor QA: smoke on every PR, full regression nightly, on-demand staging run before release.\n\nExample: GitHub webhook fires on push to main — Jenkins Multibranch Pipeline auto-discovers branch and runs smoke within 5 minutes of merge.',
    code: [{ language: 'bash', snippet: "# Trigger build remotely\ncurl -X POST https://jenkins.example.com/job/qa-smoke/build \\\n  --user user:api_token \\\n  --data-urlencode json='{\"parameter\": [{\"name\":\"ENV\", \"value\":\"qa\"}]}'" }],
    source: GFG('jenkins-build-triggers'),
  },
  {
    question: 'How do you integrate Git with Jenkins?',
    answer:
      'Install Git plugin. Configure credentials (SSH key or HTTPS username/token) in Jenkins Credentials. In job config or Jenkinsfile, use checkout scm or git url + branch.\n\nMultibranch Pipeline auto-scans repo branches and PRs — creates a job per branch. Link Jenkins to GitHub/GitLab via webhook for instant feedback on commits.\n\nExample: Jenkinsfile uses checkout scm; credentials ID git-ssh-key stored in Jenkins; branch main runs regression, feature/* runs smoke only.',
    code: [{ language: 'bash', snippet: "stage('Checkout') {\n  steps {\n    git branch: 'develop',\n        credentialsId: 'github-token',\n        url: 'https://github.com/org/automation-framework.git'\n  }\n}" }],
    source: GFG('jenkins-git-integration'),
  },
  {
    question: 'What happens when tests fail?',
    answer:
      'When pytest exits non-zero, the Test stage fails — pipeline marks build UNSTABLE or FAILED depending on configuration. JUnit plugin shows failed test names; HTML/Allure links show details; archived screenshots help triage.\n\nPost actions: post { failure { emailext ... } } notifies QA/dev; Slack webhook posts channel alert. Downstream deploy stages are skipped (when { expression { currentBuild.result == "SUCCESS" } }).\n\nExample: Failed login test → Jenkins build #452 FAILED → email to team with Allure link → developer checks screenshot artifact and fixes locator.',
    source: BROWSERSTACK('jenkins-test-failure-handling'),
  },
  {
    question: 'How do you generate reports in Jenkins?',
    answer:
      'Generate reports during test stage, publish in post. JUnit: pytest --junitxml=report.xml then junit \'report.xml\' in pipeline. HTML: archive reports/report.html as artifact or HTML Publisher plugin. Allure: pytest --alluredir=allure-results then Allure Jenkins plugin.\n\nTrend graphs come from JUnit history plugin. Keep reports self-contained for offline review.\n\nExample: post { always { junit \'report.xml\'; allure includeProperties: false, results: [[path: \'allure-results\']] } } publishes results even when tests fail.',
    code: [{ language: 'bash', snippet: "pytest tests/ --junitxml=report.xml --alluredir=allure-results\n# Jenkinsfile post block:\npost {\n  always {\n    junit 'report.xml'\n    archiveArtifacts artifacts: 'reports/**/*.html', allowEmptyArchive: true\n  }\n}" }],
    source: GFG('jenkins-junit-plugin'),
  },
  {
    question: 'How do you debug failed pipeline?',
    answer:
      'Steps: (1) Open Console Output — full shell log with stderr; (2) identify failed stage and exact command; (3) check workspace files (archived artifacts, screenshots); (4) Replay pipeline with same parameters; (5) add echo/debug steps temporarily; (6) reproduce locally with same ENV and command from log.\n\nCommon issues: wrong branch, missing credential, path differences (Windows vs Linux), timeout, agent missing Chrome/Java.\n\nExample: Console shows ModuleNotFoundError: selenium — fix by adding pip install -r requirements.txt in Setup stage before Test stage.',
    source: GFG('jenkins-troubleshooting'),
  },
  {
    question: 'Why script passes locally but fails in Jenkins?',
    answer:
      'Root causes: different Python/package versions; missing env vars or config files; headless vs headed browser; different OS paths (backslash vs slash); Jenkins runs as different user without display; stale dependencies; parallel tests colliding on shared data; firewall blocking URLs Jenkins agent cannot reach.\n\nFix: pin versions in requirements.txt, document exact Jenkins command in README, use same --env flag, run Docker agent matching local image.\n\nExample: Test passed locally with .env file but Jenkins had no BASE_URL — fixed by adding BASE_URL to Jenkins job environment parameters.',
    source: BROWSERSTACK('tests-pass-locally-fail-ci'),
  },
  {
    question: 'Environment issue handling?',
    answer:
      'Treat Jenkins agent environment explicitly: define ENV, BASE_URL, BROWSER in job parameters or credentials; use config files per env; verify agent has network access to test URLs and DB; install browsers/drivers on agent or use Docker with pre-baked image.\n\nUse labeled agents (agent { label \'linux-selenium\' }) for consistent capability. Health-check job validates env before regression.\n\nExample: Staging tests failed because Jenkins agent could not resolve internal hostname — added DNS entry and documented required VPN for on-prem agents.',
    source: GFG('jenkins-environment-variables'),
  },
  {
    question: 'Dependency issue handling?',
    answer:
      'Pin dependencies in requirements.txt with versions. Always create fresh venv in pipeline: python -m venv venv && source venv/bin/activate && pip install -r requirements.txt. Cache pip downloads with Jenkins cache plugin for speed but not stale packages.\n\nFor browsers: use webdriver-manager or Selenium Manager, or Docker image with Chrome + chromedriver pre-installed. Lock Node/Java versions if mixed stack.\n\nExample: Pipeline failed on import pandas — requirements.txt was updated locally but not committed — fix: commit lock file and fail PR if pip check fails.',
    code: [{ language: 'bash', snippet: "stage('Setup') {\n  steps {\n    sh '''\n      python3 -m venv venv\n      . venv/bin/activate\n      pip install --upgrade pip\n      pip install -r requirements.txt\n    '''\n  }\n}" }],
    source: GFG('jenkins-pipeline-python'),
  },
  {
    question: 'Parallel execution in Jenkins?',
    answer:
      'Pipeline parallel block runs stages concurrently — e.g. API tests and UI tests on different agents. pytest-xdist (-n auto) parallelizes inside one stage. Matrix builds test multiple browser/OS combinations.\n\nWatch shared resources (same test account, DB) — use isolated data per worker. Set adequate agent capacity to avoid queue timeouts.\n\nExample: parallel { stage(\'API\') { steps { sh \'pytest tests/api -n 4\' } }; stage(\'UI\') { agent { label \'chrome\' }; steps { sh \'pytest tests/ui -n 2\' } } } cuts total time nearly in half.',
    code: [{ language: 'bash', snippet: "parallel {\n  stage('Chrome') { steps { sh 'pytest tests/ --browser=chrome' } }\n  stage('Firefox') { steps { sh 'pytest tests/ --browser=firefox' } }\n}" }],
    source: GFG('jenkins-parallel-stages'),
  },
  {
    question: 'Headless execution?',
    answer:
      'Headless browsers run without GUI — required on Linux Jenkins agents with no display. Chrome: --headless=new; Firefox: --headless. Selenium 4 options: ChromeOptions().add_argument("--headless").\n\nSet window size explicitly in headless (1920x1080) — some layouts break at default small size. Xvfb (virtual framebuffer) is an alternative for older setups.\n\nExample: conftest reads HEADLESS=true from Jenkins env and passes headless ChromeOptions — same tests run locally headed for debug and in CI headless.',
    code: [{ language: 'python', snippet: "options = ChromeOptions()\nif os.getenv('HEADLESS', 'true').lower() == 'true':\n    options.add_argument('--headless=new')\n    options.add_argument('--window-size=1920,1080')\ndriver = webdriver.Chrome(options=options)" }],
    source: BROWSERSTACK('headless-browser-testing'),
  },
  {
    question: 'Docker exposure?',
    answer:
      'Run tests inside Docker for reproducible Jenkins agents: pipeline uses agent { docker { image \'selenium/standalone-chrome\' } } or docker-compose with app + tests. Expose ports (-p 4444:4444) for Selenium Grid; link containers on same network.\n\nBenefits: consistent Chrome/driver versions, no polluting Jenkins host, easy scale with Kubernetes agents. Mount workspace volume for code and reports.\n\nExample: Jenkins stage runs docker run -v $WORKSPACE:/app -w /app python:3.11 pytest tests/ — identical environment every build regardless of host OS.',
    code: [{ language: 'bash', snippet: "stage('Test in Docker') {\n  agent {\n    docker {\n      image 'python:3.11-slim'\n      args '-v $WORKSPACE:/app -w /app'\n    }\n  }\n  steps { sh 'pip install -r requirements.txt && pytest tests/' }\n}" }],
    source: GFG('jenkins-docker-pipeline'),
  },
  {
    question: 'GitHub webhook?',
    answer:
      'A GitHub webhook sends HTTP POST to Jenkins on events (push, pull_request, release). Jenkins GitHub plugin receives payload and triggers the matching job — no polling delay.\n\nSetup: Jenkins job → Build Triggers → GitHub hook trigger; GitHub repo → Settings → Webhooks → Payload URL https://jenkins.example.com/github-webhook/ → events Push and Pull request. Use secret token for security.\n\nExample: Developer opens PR → webhook fires → Multibranch Pipeline runs smoke on PR branch → status reported back to GitHub Checks API — merge blocked if red.',
    source: GFG('jenkins-github-webhook'),
  },
]
