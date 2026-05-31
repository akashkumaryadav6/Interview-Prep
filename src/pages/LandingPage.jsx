import { ArrowRight, BookOpen, Layers, Sparkles } from 'lucide-react'
import { useApp } from '../context/AppContext'
import { allSections } from '../data/index'
import { useProgress } from '../hooks/useProgress'

export function LandingPage() {
  const { navigateTo } = useApp()
  const { getOverallProgress } = useProgress()
  const { reviewed, total } = getOverallProgress(allSections)
  const pct = total === 0 ? 0 : Math.round((reviewed / total) * 100)
  const questionCount = allSections.reduce((n, s) => n + s.questions.length, 0)
  const answeredCount = allSections.reduce(
    (n, s) => n + s.questions.filter(q => q.answer).length,
    0,
  )

  return (
    <div style={{ padding: '32px 0 64px' }}>
      {/* Hero */}
      <section style={{ textAlign: 'center', marginBottom: '56px' }}>
        <div
          className="landing-eyebrow"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '5px 12px',
            borderRadius: '99px',
            background: 'var(--bg-raised)',
            border: '1px solid var(--border)',
            marginBottom: '20px',
          }}
        >
          <Sparkles size={12} />
          {questionCount} questions · {allSections.length} sections · {answeredCount} answered
        </div>

        <h1 className="typo-display" style={{ marginBottom: '16px' }}>
          Ace your next
          <br />
          <span
            style={{
              background: 'linear-gradient(135deg, #7c3aed, #ea580c, #ca8a04)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            QA interview
          </span>
        </h1>

        <p className="typo-body-lg" style={{ maxWidth: '480px', margin: '0 auto 28px', textAlign: 'center' }}>
          Structured prep for automation testing — Python, Selenium, API, SQL,
          Jenkins, banking domain, and more. Review answers, track progress, bookmark tough ones.
        </p>

        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button type="button" onClick={() => navigateTo('hr')} className="btn-cta btn-cta--primary">
            Start preparing
            <ArrowRight size={16} />
          </button>

          <button
            type="button"
            onClick={() => navigateTo('python')}
            className="btn-cta btn-cta--secondary"
            onMouseEnter={e => (e.currentTarget.style.borderColor = '#7c3aed')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
          >
            <BookOpen size={16} />
            Jump to Python
          </button>
        </div>

        {/* Progress snapshot */}
        {reviewed > 0 && (
          <p className="typo-body-sm" style={{ marginTop: '24px' }}>
            You&apos;ve reviewed{' '}
            <strong style={{ color: 'var(--text-primary)' }}>{reviewed}</strong> of{' '}
            {total} questions ({pct}%)
          </p>
        )}
      </section>

      {/* Section grid */}
      <section>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '20px',
          }}
        >
          <Layers size={16} color="var(--text-muted)" />
          <h2 className="landing-section-label">All sections</h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            gap: '12px',
          }}
        >
          {allSections.map(section => (
            <button
              key={section.id}
              onClick={() => navigateTo(section.id)}
              className="glass-panel"
              style={{
                textAlign: 'left',
                padding: '16px 18px',
                borderRadius: 'var(--radius-lg)',
                background: 'var(--bg-surface)',
                border: `1px solid var(--border)`,
                borderLeft: `4px solid ${section.color}`,
                cursor: 'pointer',
                transition: 'all var(--transition)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = `${section.color}55`
                e.currentTarget.style.boxShadow = `0 6px 24px ${section.color}22`
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.transform = 'none'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                <span className="landing-card__num" style={{ background: section.color }}>
                  {String(section.number).padStart(2, '0')}
                </span>
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: section.color,
                    boxShadow: `0 0 8px ${section.color}88`,
                  }}
                />
              </div>
              <p className="landing-card__title">{section.title}</p>
              <p className="landing-card__meta">{section.questions.length} questions</p>
            </button>
          ))}
        </div>
      </section>
    </div>
  )
}
