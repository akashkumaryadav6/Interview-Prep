import { buildSection, createQuestions } from './buildSection'
import { deepdiveQuestions } from './deepdiveQuestions'

export const deepdiveSection = buildSection({
  id:          'deepdive',
  number:      12,
  title:       'Real Project Deep-Dive',
  description: 'These decide seniority. Prepare concrete stories about automation flows, failed releases, and improvements you personally drove.',
  priority:    'critical',
  color:       'var(--accent)',
  questions:   createQuestions('dd', deepdiveQuestions, {
    tags:       ['project', 'senior', 'behavioral'],
    difficulty: 'hard',
    priority:   'critical',
  }),
})
