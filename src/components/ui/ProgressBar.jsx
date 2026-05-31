import { toPercent } from '../../utils/helpers'

/* ── Thin Progress Bar ── */
export function ProgressBar({
  value = 0,
  total = 1,
  height = 4,
  color = 'var(--accent)',
  bg = 'var(--border)',
  showLabel = false,
  style = {},
}) {
  const pct = total === 0 ? 0 : Math.round((value / total) * 100)

  return (
    <div style={{ width: '100%', ...style }}>
      {showLabel && (
        <div
          className="progress-bar__label"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '4px',
          }}
        >
          <span>{value} / {total} reviewed</span>
          <span>{pct}%</span>
        </div>
      )}
      <div
        style={{
          width: '100%',
          height: `${height}px`,
          background: bg,
          borderRadius: '99px',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${pct}%`,
            background: color,
            borderRadius: '99px',
            transition: 'width 0.4s ease',
          }}
        />
      </div>
    </div>
  )
}

/* ── Circular Progress Ring ── */
export function ProgressRing({
  value = 0,
  total = 1,
  size = 36,
  strokeWidth = 3,
  color = 'var(--accent)',
}) {
  const pct    = total === 0 ? 0 : Math.round((value / total) * 100)
  const radius = (size - strokeWidth * 2) / 2
  const circ   = 2 * Math.PI * radius
  const offset = circ - (pct / 100) * circ

  return (
    <div style={{ position: 'relative', width: size, height: size }}>
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
        {/* Track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="var(--border)"
          strokeWidth={strokeWidth}
        />
        {/* Progress */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circ}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 0.4s ease' }}
        />
      </svg>
      {/* Label inside ring */}
      <span
        className="progress-ring__label"
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {pct}%
      </span>
    </div>
  )
}