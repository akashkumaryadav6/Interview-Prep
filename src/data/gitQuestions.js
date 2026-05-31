import { GFG, TUTORIALS } from './sources'

export const gitQuestions = [
  {
    question: 'Difference between clone and fork.',
    answer:
      'git clone copies a remote repository to your local machine — full history, you push/pull to that remote (origin).\n\nFork (GitHub/GitLab feature) creates your own copy of someone else\'s repo on the hosting platform. You clone your fork, make changes, and submit a Pull Request to the original repo.\n\nClone = local copy. Fork = your own remote copy of another project.',
    source: GFG('difference-between-fork-and-clone-in-github'),
  },
  {
    question: 'Difference between fetch and pull.',
    answer:
      'git fetch downloads commits from remote to your local repo but does NOT merge — safe to inspect changes first.\n\ngit pull = git fetch + git merge (or rebase). Downloads and immediately integrates into your current branch.\n\nUse fetch when you want to review remote changes before merging. Use pull for quick sync when you trust remote changes.',
    code: [{ language: 'bash', snippet: "git fetch origin          # download only\ngit log origin/main       # review changes\ngit pull origin main      # fetch + merge in one step" }],
    source: GFG('git-fetch-vs-pull'),
  },
  {
    question: 'Rebase vs merge.',
    answer:
      'git merge combines branches — creates a merge commit, preserves full history with branches visible.\n\ngit rebase replays your commits on top of another branch — linear history, no merge commit, cleaner log. Never rebase public/shared branches others are using.\n\nUse merge for shared/main branches. Use rebase to update feature branch before PR.',
    code: [{ language: 'bash', snippet: "# Merge — preserves branch history\ngit checkout main\ngit merge feature/login\n\n# Rebase — linear history\ngit checkout feature/login\ngit rebase main" }],
    source: GFG('git-merge-vs-rebase'),
  },
  {
    question: 'Cherry-pick?',
    answer:
      'git cherry-pick <commit-hash> applies a specific commit from one branch onto your current branch — without merging the entire branch.\n\nUseful for hotfixes: pick a bug fix commit from develop into release branch without merging everything else.',
    code: [{ language: 'bash', snippet: "git checkout release/v1.2\ngit cherry-pick abc1234   # apply single commit\ngit push" }],
    source: GFG('git-cherry-pick'),
  },
  {
    question: 'Resolve merge conflict.',
    answer:
      'Conflicts occur when Git cannot auto-merge changes to the same lines.\n\nSteps:\n1. git pull or git merge triggers conflict\n2. Open conflicted files — look for <<<<<<< HEAD markers\n3. Manually edit to keep correct code\n4. git add <resolved-files>\n5. git commit (merge commit completes)\n\nUse IDE conflict resolver or git mergetool for help.',
    code: [{ language: 'bash', snippet: "git pull origin main\n# CONFLICT in test_login.py\n\n# Edit file — remove conflict markers\n# <<<<<<< HEAD\n# your changes\n# =======\n# their changes\n# >>>>>>> origin/main\n\ngit add test_login.py\ngit commit -m 'Resolve merge conflict in test_login.py'" }],
    source: GFG('merge-conflicts-in-git'),
  },
  {
    question: 'Git stash.',
    answer:
      'git stash temporarily saves uncommitted changes and reverts working directory to clean state. Useful when you need to switch branches but aren\'t ready to commit.\n\ngit stash — save changes\ngit stash pop — restore and remove from stash\ngit stash list — view all stashes\ngit stash apply — restore without removing',
    code: [{ language: 'bash', snippet: "git stash save 'WIP login tests'\ngit checkout hotfix/urgent-bug\n# ... fix and commit ...\ngit checkout feature/login\ngit stash pop" }],
    source: GFG('git-stash'),
  },
  {
    question: 'Git revert vs reset.',
    answer:
      'git revert <commit> — creates a NEW commit that undoes a specific commit. Safe for shared/public branches — does not rewrite history.\n\ngit reset — moves branch pointer backward. --soft keeps changes staged, --mixed keeps changes unstaged, --hard discards all changes. Dangerous on pushed branches.\n\nUse revert for production/shared branches. Use reset only on local unpushed commits.',
    code: [{ language: 'bash', snippet: "# Safe for shared branches\ngit revert abc1234\ngit push\n\n# Local only — undo last commit, keep changes\ngit reset --soft HEAD~1\n\n# Local only — discard everything\ngit reset --hard HEAD~1" }],
    source: GFG('git-revert-vs-reset'),
  },
  {
    question: 'Branching strategy.',
    answer:
      'Common strategies:\n\nGit Flow: main (production) + develop + feature/release/hotfix branches. Formal, good for scheduled releases.\n\nGitHub Flow: main + short-lived feature branches + PR. Simple, continuous delivery.\n\nTrunk-Based: everyone commits to main frequently with feature flags. Fast CI/CD.\n\nFor QA automation: feature branches per story, PR review, merge to develop, regression on staging, release to main.',
    source: GFG('git-branching-strategies'),
  },
  {
    question: 'Pull request process.',
    answer:
      'Pull Request (PR) / Merge Request workflow:\n\n1. Create feature branch from main/develop\n2. Commit changes with clear messages\n3. Push branch to remote\n4. Open PR with description, linked ticket, test evidence\n5. Code review + CI pipeline runs (tests must pass)\n6. Address review comments\n7. Squash/merge into target branch\n8. Delete feature branch\n\nAs QA: include test results, automation report links in PR description.',
    source: GFG('pull-request-in-git'),
  },
]
