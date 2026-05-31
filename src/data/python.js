import { buildSection, createQuestions } from './buildSection'
import { basicQuestions, codingQuestions, advancedQuestions } from './pythonQuestions'

const basicDefaults = {
  category:   'Basic Python',
  tags:       ['python', 'core'],
  difficulty: 'easy',
  priority:   'high',
}

const codingDefaults = {
  category:   'Python Coding Questions',
  tags:       ['python', 'coding'],
  difficulty: 'medium',
  priority:   'high',
}

const advancedDefaults = {
  category:   'Advanced Python',
  tags:       ['python', 'advanced'],
  difficulty: 'medium',
  priority:   'critical',
}

export const pythonSection = buildSection({
  id:          'python',
  number:      2,
  title:       'Python Core',
  description: 'This section destroys many automation testers because they only know Selenium syntax. Master Python fundamentals and coding problems.',
  priority:    'critical',
  color:       'var(--amber)',
  questions:   [
    ...createQuestions('py', basicQuestions, basicDefaults),
    ...createQuestions('pyc', codingQuestions, codingDefaults),
    ...createQuestions('pya', advancedQuestions, advancedDefaults),
  ],
})
