import { buildSection, createQuestions } from './buildSection'
import {
  basicQuestions,
  intermediateQuestions,
  challengingQuestions,
} from './javaQuestions'

const basicDefaults = {
  category:   'Basic Java',
  tags:       ['java', 'core'],
  difficulty: 'easy',
  priority:   'high',
}

const intermediateDefaults = {
  category:   'Intermediate Java',
  tags:       ['java', 'collections', 'concurrency'],
  difficulty: 'medium',
  priority:   'high',
}

const challengingDefaults = {
  category:   'Challenging Java',
  tags:       ['java', 'advanced', 'jvm'],
  difficulty: 'hard',
  priority:   'critical',
}

export const javaSection = buildSection({
  id:          'java',
  number:      15,
  title:       'Java',
  description: 'Core Java from fundamentals through collections, concurrency, JVM internals, and system design — essential for backend and automation roles.',
  priority:    'high',
  color:       'var(--accent)',
  questions:   [
    ...createQuestions('java', basicQuestions, basicDefaults),
    ...createQuestions('jav', intermediateQuestions, intermediateDefaults),
    ...createQuestions('javc', challengingQuestions, challengingDefaults),
  ],
})
