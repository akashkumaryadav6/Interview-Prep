import { buildSection, createQuestions } from './buildSection'
import { manualQuestions } from './manualQuestions'

export const manualSection = buildSection({
  id:          'manual',
  number:      10,
  title:       'Manual Testing',
  description: 'Do not underestimate this section. Core QA concepts like SDLC, defect lifecycle, and test design techniques are still frequently asked.',
  priority:    'high',
  color:       'var(--green)',
  questions:   createQuestions('man', manualQuestions, {
    tags:       ['manual', 'testing', 'fundamentals'],
    difficulty: 'easy',
    priority:   'high',
  }),
})
