import { buildSection, createQuestions } from './buildSection'
import { apiQuestions } from './apiQuestions'

export const apiSection = buildSection({
  id:          'api',
  number:      5,
  title:       'API Testing',
  description: 'Massively important now. Expect REST fundamentals, authentication, validation, and Python automation follow-ups.',
  priority:    'critical',
  color:       'var(--blue)',
  questions:   createQuestions('api', apiQuestions, {
    tags:       ['api', 'rest', 'automation'],
    difficulty: 'medium',
    priority:   'critical',
  }),
})
