import { buildSection, createQuestions } from './buildSection'
import { sqlQuestions } from './sqlQuestions'

export const sqlSection = buildSection({
  id:          'sql',
  number:      6,
  title:       'SQL',
  description: 'Very common in QA interviews. Practice writing queries for duplicates, rankings, and joins.',
  priority:    'high',
  color:       'var(--blue)',
  questions:   createQuestions('sql', sqlQuestions, {
    tags:       ['sql', 'database'],
    difficulty: 'medium',
    priority:   'high',
  }),
})
