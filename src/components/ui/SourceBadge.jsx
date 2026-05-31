import { ExternalLink } from 'lucide-react'

function getSourceStyle() {
  return {
    color: 'var(--text-secondary)',
    bg:    'var(--bg-raised)',
  }
}

/* ── Single Source Badge ── */
export function SourceBadge({ source }) {
  if (!source?.name) return null

  const { color, bg } = getSourceStyle()

  return (
    <a
      href={source.url ?? '#'}
      target="_blank"
      rel="noopener noreferrer"
      className="typo-badge"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '4px',
        padding: '3px 10px',
        borderRadius: '99px',
        color,
        background: bg,
        textDecoration: 'none',
        border: '1px solid var(--border)',
        fontWeight: 'var(--font-medium)',
        transition: 'opacity 0.18s ease',
      }}
      onMouseEnter={e => (e.currentTarget.style.opacity = '0.8')}
      onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
    >
      {source.name}
      {source.url && (
        <ExternalLink size={10} style={{ flexShrink: 0 }} />
      )}
    </a>
  )
}

/* ── Source Row (label + badge) ── */
export function SourceRow({ source }) {
  if (!source?.name) return null

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        marginTop: '12px',
      }}
    >
      <span className="typo-caption">Source</span>
      <SourceBadge source={source} />
    </div>
  )
}