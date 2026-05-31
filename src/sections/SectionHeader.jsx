import { ProgressBar } from '../components/ui/ProgressBar'
import { PriorityBadge } from '../components/ui/TagBadge'
import { useProgress } from '../hooks/useProgress'

export function SectionHeader({ section }) {
  const { getSectionProgress } = useProgress()
  const { reviewed, total }    = getSectionProgress(section.questions)
  const pct = total === 0 ? 0 : Math.round((reviewed / total) * 100)
  const accent = section.color ?? '#6366f1'

  return (
    <div style={{ padding: '24px 0 20px', marginBottom: '8px' }}>
      <div
        className="section-hero"
        style={{
          background: `linear-gradient(135deg, ${section.colorDim ?? 'var(--accent-dim)'} 0%, transparent 70%)`,
          border: `1px solid ${accent}33`,
          borderLeft: `4px solid ${accent}`,
          boxShadow: `0 8px 32px ${accent}18`,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '8px',
            flexWrap: 'wrap',
          }}
        >
          <span className="section-hero__badge" style={{ background: accent }}>
            {String(section.number).padStart(2, '0')}
          </span>

          <h1 className="section-hero__title">{section.title}</h1>

          {section.priority && <PriorityBadge priority={section.priority} />}
        </div>

        {section.description && (
          <p className="section-hero__desc">{section.description}</p>
        )}
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          flexWrap: 'wrap',
          paddingTop: '12px',
          borderBottom: '1px solid var(--border)',
          paddingBottom: '16px',
        }}
      >
        <div style={{ display: 'flex', gap: '16px' }}>
          <Stat label="Questions" value={total} />
          <Stat label="Reviewed"  value={reviewed} color={accent} />
          <Stat label="Remaining" value={total - reviewed} color="var(--text-muted)" />
        </div>

        <div style={{ flex: 1, minWidth: '160px' }}>
          <ProgressBar
            value={reviewed}
            total={total}
            height={6}
            color={accent}
            showLabel={false}
          />
        </div>

        <span className="section-pct" style={{ color: accent }}>
          {pct}%
        </span>
      </div>
    </div>
  )
}

function Stat({ label, value, color = 'var(--text-primary)' }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
      <span className="section-stat__value" style={{ color }}>
        {value}
      </span>
      <span className="section-stat__label">{label}</span>
    </div>
  )
}
