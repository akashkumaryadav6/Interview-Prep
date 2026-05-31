import { useState } from 'react'
import { Check, Copy } from 'lucide-react'
import { copyToClipboard } from '../../utils/helpers'
import { highlightCode } from '../../utils/highlightCode'

function getLangLabel(lang = 'text') {
  const labels = {
    python: 'Python',
    javascript: 'JavaScript',
    java: 'Java',
    sql: 'SQL',
    bash: 'Bash',
    xml: 'XML',
    json: 'JSON',
  }
  return labels[lang.toLowerCase()] ?? 'Text'
}

function HighlightedLines({ lines }) {
  return (
    <>
      {lines.map((tokens, lineIdx) => (
        <span key={lineIdx} className="code-block__line">
          {tokens.map((token, tokenIdx) => (
            <span key={tokenIdx} className={`code-token code-token--${token.type}`}>
              {token.text}
            </span>
          ))}
          {lineIdx < lines.length - 1 ? '\n' : null}
        </span>
      ))}
    </>
  )
}

export function CodeBlock({ language = 'text', snippet = '' }) {
  const [copied, setCopied] = useState(false)
  const lines = highlightCode(snippet, language)

  const handleCopy = async () => {
    const success = await copyToClipboard(snippet)
    if (success) {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className={`code-block code-block--${language.toLowerCase()}`}>
      <div className="code-block__header">
        <span className="code-block__lang">{getLangLabel(language)}</span>

        <button
          type="button"
          onClick={handleCopy}
          className="code-block__copy"
          style={{ color: copied ? 'var(--text-primary)' : undefined }}
        >
          {copied ? <Check size={12} /> : <Copy size={12} />}
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>

      <pre className="code-block__pre">
        <code>
          <HighlightedLines lines={lines} />
        </code>
      </pre>
    </div>
  )
}

export function CodeBlockList({ codeBlocks = [] }) {
  if (!codeBlocks.length) return null
  return (
    <div className="code-block-list">
      {codeBlocks.map((block, idx) => (
        <CodeBlock
          key={idx}
          language={block.language}
          snippet={block.snippet}
        />
      ))}
    </div>
  )
}
