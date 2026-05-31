import { buildSection, createQuestions } from './buildSection'
import { hrQuestions } from './hrQuestions'

export const hrSection = buildSection({
  id:          'hr',
  number:      1,
  title:       'HR + Introduction',
  description: 'These decide whether the interviewer continues comfortably or starts attacking your weak areas. Nail the narrative first.',
  priority:    'critical',
  color:       'var(--red)',
  questions:   createQuestions('hr', hrQuestions, {
    difficulty: 'easy',
  }),
})
