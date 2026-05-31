const PYTHON_KEYWORDS = new Set([
  'and', 'as', 'assert', 'async', 'await', 'break', 'class', 'continue', 'def',
  'del', 'elif', 'else', 'except', 'False', 'finally', 'for', 'from', 'global',
  'if', 'import', 'in', 'is', 'lambda', 'None', 'nonlocal', 'not', 'or', 'pass',
  'raise', 'return', 'True', 'try', 'while', 'with', 'yield',
])

const SQL_KEYWORDS = new Set([
  'SELECT', 'FROM', 'WHERE', 'JOIN', 'INNER', 'LEFT', 'RIGHT', 'OUTER', 'ON',
  'GROUP', 'BY', 'HAVING', 'ORDER', 'ASC', 'DESC', 'INSERT', 'INTO', 'VALUES',
  'UPDATE', 'SET', 'DELETE', 'CREATE', 'TABLE', 'VIEW', 'INDEX', 'UNIQUE',
  'PRIMARY', 'KEY', 'FOREIGN', 'REFERENCES', 'AS', 'DISTINCT', 'COUNT', 'AVG',
  'SUM', 'MAX', 'MIN', 'AND', 'OR', 'NOT', 'NULL', 'IS', 'IN', 'EXISTS',
  'BETWEEN', 'LIKE', 'LIMIT', 'OFFSET', 'UNION', 'ALL', 'CASE', 'WHEN', 'THEN',
  'ELSE', 'END', 'WITH', 'OVER', 'PARTITION', 'ROW_NUMBER', 'DENSE_RANK',
  'PROCEDURE', 'EXEC', 'BEGIN', 'END', 'INT', 'VARCHAR', 'BOOLEAN',
])

const BASH_KEYWORDS = new Set([
  'if', 'then', 'else', 'elif', 'fi', 'for', 'while', 'do', 'done', 'case',
  'esac', 'function', 'return', 'in', 'export', 'local',
])

const JS_KEYWORDS = new Set([
  'const', 'let', 'var', 'function', 'return', 'if', 'else', 'for', 'while',
  'class', 'import', 'export', 'from', 'async', 'await', 'new', 'true', 'false',
  'null', 'undefined', 'typeof', 'instanceof',
])

function getKeywords(language) {
  const lang = (language ?? 'text').toLowerCase()
  if (lang === 'python') return PYTHON_KEYWORDS
  if (lang === 'sql') return SQL_KEYWORDS
  if (lang === 'bash' || lang === 'shell') return BASH_KEYWORDS
  if (lang === 'javascript' || lang === 'js') return JS_KEYWORDS
  return new Set()
}

function isWordChar(ch) {
  return /[\w$]/.test(ch)
}

/** @returns {{ type: string, text: string }[]} */
function tokenizeLine(line, keywords, language) {
  const tokens = []
  let i = 0
  const lang = (language ?? '').toLowerCase()

  while (i < line.length) {
    const rest = line.slice(i)

    // Comments
    if (lang === 'python' && rest.startsWith('#')) {
      tokens.push({ type: 'comment', text: rest })
      break
    }
    if ((lang === 'sql' || lang === 'bash') && rest.startsWith('--')) {
      tokens.push({ type: 'comment', text: rest })
      break
    }
    if (lang === 'bash' && rest.startsWith('#')) {
      tokens.push({ type: 'comment', text: rest })
      break
    }

    // Strings
    const strMatch = rest.match(/^(['"`])(?:\\.|(?!\1)[^\\])*\1/)
    if (strMatch) {
      tokens.push({ type: 'string', text: strMatch[0] })
      i += strMatch[0].length
      continue
    }

    // Decorators @pytest
    if (lang === 'python' && rest[0] === '@') {
      const dec = rest.match(/^@\w+/)
      if (dec) {
        tokens.push({ type: 'decorator', text: dec[0] })
        i += dec[0].length
        continue
      }
    }

    // Numbers
    const numMatch = rest.match(/^\d+(?:\.\d+)?/)
    if (numMatch) {
      tokens.push({ type: 'number', text: numMatch[0] })
      i += numMatch[0].length
      continue
    }

    // Words
    const wordMatch = rest.match(/^[A-Za-z_][\w]*/)
    if (wordMatch) {
      const word = wordMatch[0]
      const upper = word.toUpperCase()
      const isKeyword =
        keywords.has(word) ||
        keywords.has(upper) ||
        (lang === 'sql' && SQL_KEYWORDS.has(upper))

      if (isKeyword) {
        tokens.push({ type: 'keyword', text: word })
      } else if (rest[word.length] === '(') {
        tokens.push({ type: 'function', text: word })
      } else if (lang === 'python' && /^[A-Z]/.test(word)) {
        tokens.push({ type: 'class', text: word })
      } else {
        tokens.push({ type: 'plain', text: word })
      }
      i += word.length
      continue
    }

    // Operators / punctuation (group runs)
    const opMatch = rest.match(/^[+\-*/%=<>!&|^~.:,;()[\]{}]+/)
    if (opMatch) {
      tokens.push({ type: 'operator', text: opMatch[0] })
      i += opMatch[0].length
      continue
    }

    // Whitespace or other single char
    tokens.push({ type: 'plain', text: line[i] })
    i += 1
  }

  return tokens
}

/** @returns {{ type: string, text: string }[][]} */
export function highlightCode(snippet = '', language = 'text') {
  const keywords = getKeywords(language)
  const lines = snippet.replace(/\r\n/g, '\n').split('\n')
  return lines.map(line => tokenizeLine(line, keywords, language))
}
