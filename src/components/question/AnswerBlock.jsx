import { FileText } from 'lucide-react'
import { CodeBlockList } from './CodeBlock'
import { SourceRow } from '../ui/SourceBadge'
import { FormattedAnswerParagraph } from '../../utils/answerFormatting'

function AnswerPlaceholder() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '14px 16px',
        background: 'var(--bg-raised)',
        borderRadius: 'var(--radius-md)',
        border: '1px dashed var(--border)',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '32px',
          height: '32px',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--border)',
          color: 'var(--text-muted)',
          flexShrink: 0,
        }}
      >
        <FileText size={15} strokeWidth={1.5} />
      </div>
      <div>
        <p className="answer-block__placeholder-title">Answer not yet added.</p>
        <p className="typo-caption" style={{ marginTop: '2px' }}>
          This will be populated from a reputable source.
        </p>
      </div>
    </div>
  )
}

function AnswerText({ text = '', query = '', accentColor }) {
  const paragraphs = text.split('\n').filter(p => p.trim())

  return (
    <div className="answer-block__content">
      {paragraphs.map((para, idx) => (
        <FormattedAnswerParagraph
          key={idx}
          text={para}
          query={query}
          accentColor={accentColor}
        />
      ))}
    </div>
  )
}

export function AnswerBlock({ question, accentColor = '#6366f1' }) {
  const { answer, code = [], source, searchQuery = '' } = question

  if (!answer) return <AnswerPlaceholder />

  return (
    <div className="answer-block">
      <AnswerText text={answer} query={searchQuery} accentColor={accentColor} />
      {code.length > 0 && <CodeBlockList codeBlocks={code} />}
      <SourceRow source={source} />
    </div>
  )
}
