import { buildSection, createQuestions } from './buildSection'
import { scenarioQuestions } from './scenarioQuestions'

export const scenarioSection = buildSection({
  id:          'scenario',
  number:      9,
  title:       'Scenario-Based',
  description: 'These are the real elimination questions. Interviewers test your debugging mindset, prioritization, and communication under pressure.',
  priority:    'critical',
  color:       'var(--red)',
  questions:   createQuestions('scen', scenarioQuestions, {
    tags:       ['scenario', 'debugging', 'process'],
    difficulty: 'medium',
    priority:   'critical',
  }),
})
