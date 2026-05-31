import { buildSection, createQuestions } from './buildSection'
import { fakecheckQuestions } from './fakecheckQuestions'

export const fakecheckSection = buildSection({
  id:          'fakecheck',
  number:      13,
  title:       'Fake Experience Checks',
  description: 'Very important. If you cannot answer these naturally, the interviewer will know instantly. Know your framework internals cold.',
  priority:    'critical',
  color:       'var(--red)',
  questions:   createQuestions('fc', fakecheckQuestions, {
    tags:       ['verification', 'framework', 'authenticity'],
    difficulty: 'hard',
    priority:   'critical',
  }),
})
