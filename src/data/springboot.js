import { buildSection, createQuestions } from './buildSection'
import {
  basicQuestions,
  intermediateQuestions,
  challengingQuestions,
} from './springbootQuestions'

const basicDefaults = {
  category:   'Basic Spring Boot',
  tags:       ['spring', 'spring-boot', 'core'],
  difficulty: 'easy',
  priority:   'high',
}

const intermediateDefaults = {
  category:   'Intermediate Spring Boot',
  tags:       ['spring-boot', 'jpa', 'testing'],
  difficulty: 'medium',
  priority:   'high',
}

const challengingDefaults = {
  category:   'Challenging Spring Boot',
  tags:       ['spring-boot', 'architecture', 'resilience'],
  difficulty: 'hard',
  priority:   'critical',
}

export const springbootSection = buildSection({
  id:          'springboot',
  number:      17,
  title:       'Spring Boot',
  description: 'Spring Boot from DI and REST APIs through JPA, transactions, Actuator, and production patterns like outbox, graceful shutdown, and resilience.',
  priority:    'high',
  color:       'var(--green)',
  questions:   [
    ...createQuestions('sb', basicQuestions, basicDefaults),
    ...createQuestions('sbm', intermediateQuestions, intermediateDefaults),
    ...createQuestions('sbc', challengingQuestions, challengingDefaults),
  ],
})
