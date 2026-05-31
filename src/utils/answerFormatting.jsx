import { getHighlightSegments } from './helpers'

const EXAMPLE_PREFIX = /^(Examples?|e\.g\.|For example)\s*:?\s*/i

const INLINE_PATTERNS = [
  /`([^`]+)`/g,
  /('(?:\\.|[^'\\])*'|"(?:\\.|[^"\\])*")/g,
  /\b(?:True|False|None)\b/g,
  /\b[a-zA-Z_][\w]*(?:\.[a-zA-Z_][\w]*)*\([^)]*\)/g,
  /\[[^\[\]]{1,120}\]/g,
  /\b(?:def|class|import|from|return|append|extend|len|is|==)\b/g,
  /\b[a-z_][\w]*\(\)/g,
]

export function isExampleParagraph(text = '') {
  return EXAMPLE_PREFIX.test(text.trim())
}

function splitExampleLabel(text) {
  const match = text.trim().match(EXAMPLE_PREFIX)
  if (!match) return { label: null, body: text }
  const start = text.indexOf(match[0])
  return {
    label: match[0].trim(),
    body: text.slice(start + match[0].length),
  }
}

function findInlineCodeSpans(text) {
  const spans = []

  for (const regex of INLINE_PATTERNS) {
    regex.lastIndex = 0
    let m
    while ((m = regex.exec(text)) !== null) {
      spans.push({ start: m.index, end: m.index + m[0].length, text: m[0] })
    }
  }

  spans.sort((a, b) => a.start - b.start || b.end - a.end - (a.end - a.start))
  const merged = []
  for (const span of spans) {
    const last = merged[merged.length - 1]
    if (last && span.start < last.end) continue
    merged.push(span)
  }
  return merged
}

function RichInline({ text, accentColor }) {
  const codeSpans = findInlineCodeSpans(text)
  if (!codeSpans.length) return <>{text}</>

  const nodes = []
  let cursor = 0

  codeSpans.forEach((span, idx) => {
    if (span.start > cursor) {
      nodes.push(<span key={`t-${idx}-pre`}>{text.slice(cursor, span.start)}</span>)
    }
    const raw = span.text
    const display = raw.startsWith('`') ? raw.slice(1, -1) : raw
    nodes.push(
      <code key={`c-${idx}`} className="inline-code">
        {display}
      </code>,
    )
    cursor = span.end
  })

  if (cursor < text.length) {
    nodes.push(<span key="tail">{text.slice(cursor)}</span>)
  }

  return <>{nodes}</>
}

function HighlightedRichText({ text, query, accentColor }) {
  if (!query?.trim()) {
    return <RichInline text={text} accentColor={accentColor} />
  }

  const segments = getHighlightSegments(text, query)
  return (
    <>
      {segments.map((seg, idx) =>
        seg.highlight ? (
          <mark
            key={idx}
            className="search-highlight"
            style={{
              background: `${accentColor}22`,
              color: accentColor,
            }}
          >
            {seg.text}
          </mark>
        ) : (
          <RichInline key={idx} text={seg.text} accentColor={accentColor} />
        ),
      )}
    </>
  )
}

export function FormattedAnswerParagraph({ text, query, accentColor }) {
  if (isExampleParagraph(text)) {
    const { label, body } = splitExampleLabel(text)
    return (
      <p className="answer-block__paragraph answer-example">
        {label && <span className="answer-example__label">{label}</span>}
        <HighlightedRichText text={body} query={query} accentColor={accentColor} />
      </p>
    )
  }

  return (
    <p className="answer-block__paragraph">
      <HighlightedRichText text={text} query={query} accentColor={accentColor} />
    </p>
  )
}
