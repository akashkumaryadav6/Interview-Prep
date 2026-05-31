import { getPriorityConfig, getDifficultyConfig } from '../../utils/helpers'

const badgeStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  padding: '2px 8px',
  borderRadius: '99px',
  whiteSpace: 'nowrap',
}

export function PriorityBadge({ priority }) {
  const config = getPriorityConfig(priority)
  return (
    <span
      className="typo-badge"
      style={{
        ...badgeStyle,
        color: config.color,
        background: config.bg,
      }}
    >
      {config.label}
    </span>
  )
}

export function DifficultyBadge({ difficulty }) {
  const config = getDifficultyConfig(difficulty)
  return (
    <span
      className="typo-badge"
      style={{
        ...badgeStyle,
        color: config.color,
        background: config.bg,
      }}
    >
      {config.label}
    </span>
  )
}

export function TagBadge({ label, color = 'var(--text-muted)', bg = 'var(--bg-primary)' }) {
  return (
    <span
      className="typo-badge"
      style={{
        ...badgeStyle,
        color,
        background: bg,
        border: '1px solid var(--border)',
        fontWeight: 'var(--font-medium)',
      }}
    >
      {label}
    </span>
  )
}

export function TagList({ tags = [] }) {
  if (!tags.length) return null
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
      {tags.map(tag => (
        <TagBadge key={tag} label={tag} />
      ))}
    </div>
  )
}
