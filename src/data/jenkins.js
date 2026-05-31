import { buildSection, createQuestions } from './buildSection'
import { jenkinsQuestions } from './jenkinsQuestions'

export const jenkinsSection = buildSection({
  id:          'jenkins',
  number:      7,
  title:       'Jenkins / CI-CD',
  description: 'You already got asked pipeline questions. Expect more on stages, triggers, debugging, and environment failures.',
  priority:    'high',
  color:       'var(--amber)',
  questions:   createQuestions('jen', jenkinsQuestions, {
    tags:       ['jenkins', 'ci-cd', 'pipeline'],
    difficulty: 'medium',
    priority:   'high',
  }),
})
