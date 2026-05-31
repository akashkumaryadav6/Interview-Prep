import { buildSection, createQuestions } from './buildSection'
import { highpriorityQuestions } from './highpriorityQuestions'

export const highprioritySection = buildSection({
  id:          'highpriority',
  number:      14,
  title:       'Extra Hard Prep',
  description: 'These are the highest probability topics based on your profile. Review these last and make sure you can speak to each one confidently.',
  priority:    'critical',
  color:       'var(--amber)',
  questions:   createQuestions('hp', highpriorityQuestions, {
    priority: 'critical',
  }),
})
