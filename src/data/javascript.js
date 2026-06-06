import { buildSection, createQuestions } from './buildSection'
import {
  basicQuestions,
  intermediateQuestions,
  challengingQuestions,
} from './javascriptQuestions'

const basicDefaults = {
  category:   'Basic JavaScript',
  tags:       ['javascript', 'core'],
  difficulty: 'easy',
  priority:   'high',
}

const intermediateDefaults = {
  category:   'Intermediate JavaScript',
  tags:       ['javascript', 'closures', 'async'],
  difficulty: 'medium',
  priority:   'high',
}

const challengingDefaults = {
  category:   'Challenging JavaScript',
  tags:       ['javascript', 'event-loop', 'advanced'],
  difficulty: 'hard',
  priority:   'critical',
}

export const javascriptSection = buildSection({
  id:          'javascript',
  number:      16,
  title:       'JavaScript',
  description: 'From language fundamentals to closures, async/await, the event loop, and advanced patterns — critical for web automation and full-stack interviews.',
  priority:    'high',
  color:       'var(--amber)',
  questions:   [
    ...createQuestions('js', basicQuestions, basicDefaults),
    ...createQuestions('jsm', intermediateQuestions, intermediateDefaults),
    ...createQuestions('jsc', challengingQuestions, challengingDefaults),
  ],
})
