import { buildSection, createQuestions } from './buildSection'
import { bankingQuestions } from './bankingQuestions'

export const bankingSection = buildSection({
  id:          'banking',
  number:      8,
  title:       'Banking / SWIFT Domain',
  description: 'This is your differentiator. Most testers cannot answer domain questions properly — payment lifecycle, SWIFT messages, and reconciliation.',
  priority:    'high',
  color:       'var(--red)',
  questions:   createQuestions('bank', bankingQuestions, {
    tags:       ['banking', 'swift', 'domain'],
    difficulty: 'medium',
    priority:   'high',
  }),
})
