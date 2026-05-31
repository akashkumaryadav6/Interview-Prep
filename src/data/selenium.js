import { buildSection, createQuestions } from './buildSection'
import {
  seleniumBasicsQuestions,
  locatorsQuestions,
  webElementsQuestions,
  browserHandlingQuestions,
  seleniumScenariosQuestions,
} from './seleniumQuestions'

const basicsDefaults = {
  category:   'Selenium Basics',
  tags:       ['selenium', 'basics'],
  difficulty: 'easy',
  priority:   'high',
}

const locatorsDefaults = {
  category:   'Locators',
  tags:       ['selenium', 'locators', 'xpath'],
  difficulty: 'medium',
  priority:   'critical',
}

const webElementsDefaults = {
  category:   'Web Elements',
  tags:       ['selenium', 'waits', 'elements'],
  difficulty: 'medium',
  priority:   'critical',
}

const browserDefaults = {
  category:   'Browser Handling',
  tags:       ['selenium', 'browser'],
  difficulty: 'medium',
  priority:   'high',
}

const scenariosDefaults = {
  category:   'Selenium Scenarios',
  tags:       ['selenium', 'scenarios'],
  difficulty: 'hard',
  priority:   'high',
}

export const seleniumSection = buildSection({
  id:          'selenium',
  number:      3,
  title:       'Selenium',
  description: 'This section is guaranteed in automation interviews. Cover locators, waits, browser handling, and real-world scenarios.',
  priority:    'critical',
  color:       'var(--green)',
  questions:   [
    ...createQuestions('sel', seleniumBasicsQuestions, basicsDefaults),
    ...createQuestions('loc', locatorsQuestions, locatorsDefaults),
    ...createQuestions('we', webElementsQuestions, webElementsDefaults),
    ...createQuestions('bh', browserHandlingQuestions, browserDefaults),
    ...createQuestions('scn', seleniumScenariosQuestions, scenariosDefaults),
  ],
})
