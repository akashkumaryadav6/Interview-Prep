import { buildSection, createQuestions } from './buildSection'
import { gitQuestions } from './gitQuestions'

export const gitSection = buildSection({
  id:          'git',
  number:      11,
  title:       'Git',
  description: 'Version control workflow questions — branching, merging, conflicts, and pull request process.',
  priority:    'medium',
  color:       'var(--text-muted)',
  questions:   createQuestions('git', gitQuestions, {
    tags:       ['git', 'version-control'],
    difficulty: 'easy',
    priority:   'medium',
  }),
})
