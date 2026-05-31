import { buildSection, createQuestions } from './buildSection'
import { frameworkQuestions } from './frameworkQuestions'

export const frameworkSection = buildSection({
  id:          'framework',
  number:      4,
  title:       'Framework',
  description: 'This is the most important section for experienced candidates. Be ready to explain architecture, POM, reporting, and CI integration in detail.',
  priority:    'critical',
  color:       'var(--accent)',
  questions:   createQuestions('fw', frameworkQuestions, {
    tags:       ['framework', 'architecture', 'pytest'],
    difficulty: 'medium',
    priority:   'critical',
  }),
})
