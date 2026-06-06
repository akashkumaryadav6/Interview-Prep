import { applySectionColors } from './sectionColors'
import { hrSection }          from './hr'
import { pythonSection }      from './python'
import { seleniumSection }    from './selenium'
import { frameworkSection }   from './framework'
import { apiSection }         from './api'
import { sqlSection }         from './sql'
import { jenkinsSection }     from './jenkins'
import { bankingSection }     from './banking'
import { scenarioSection }    from './scenario'
import { manualSection }      from './manual'
import { gitSection }         from './git'
import { deepdiveSection }    from './deepdive'
import { fakecheckSection }   from './fakecheck'
import { highprioritySection } from './highpriority'
import { javaSection }        from './java'
import { javascriptSection }  from './javascript'
import { springbootSection }  from './springboot'

const rawSections = [
  hrSection,
  pythonSection,
  seleniumSection,
  frameworkSection,
  apiSection,
  sqlSection,
  jenkinsSection,
  bankingSection,
  scenarioSection,
  manualSection,
  gitSection,
  deepdiveSection,
  fakecheckSection,
  highprioritySection,
  javaSection,
  javascriptSection,
  springbootSection,
]

export const allSections = rawSections.map(applySectionColors)

export { getSectionPalette, applySectionColors } from './sectionColors'
