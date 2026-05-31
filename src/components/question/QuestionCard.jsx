import { useState } from 'react'
import { Bookmark, BookmarkCheck, CheckCircle, Circle, ChevronDown, ChevronUp } from 'lucide-react'
import { AnswerBlock } from './AnswerBlock'
import { PriorityBadge, DifficultyBadge, TagList } from '../ui/TagBadge'
import { useProgress } from '../../hooks/useProgress'
import { useBookmarks } from '../../hooks/useBookmarks'
import { useApp } from '../../context/AppContext'

export function QuestionCard({ question, index, accentColor }) {
  const [isOpen, setIsOpen] = useState(false)
  const { toggleReviewed, isReviewed }   = useProgress()
  const { toggleBookmark, isBookmarked } = useBookmarks()
  const { searchQuery }                  = useApp()

  const reviewed   = isReviewed(question.id)
  const bookmarked = isBookmarked(question.id)
  const accent     = accentColor ?? question.sectionColor ?? '#6366f1'

  return (
    <div
      className="glass-panel question-card"
      style={{
        background: 'var(--bg-surface)',
        border: `1px solid ${isOpen ? `${accent}55` : 'var(--border)'}`,
        borderLeft: `3px solid ${accent}`,
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        transition: 'all var(--transition)',
        opacity: reviewed ? 0.82 : 1,
        boxShadow: isOpen ? `0 6px 28px ${accent}22` : 'none',
      }}
    >
      <div
        className="question-card__header"
        onClick={() => setIsOpen(prev => !prev)}
      >
        <span
          className={`question-card__index typo-mono${isOpen ? ' question-card__index--open' : ''}`}
          style={{ color: isOpen ? accent : undefined }}
        >
          {String(index).padStart(2, '0')}
        </span>

        <div style={{ flex: 1, minWidth: 0 }}>
          <p className="question-card__question">{question.question}</p>

          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '6px' }}>
            {question.priority   && <PriorityBadge   priority={question.priority} />}
            {question.difficulty && <DifficultyBadge difficulty={question.difficulty} />}
            {question.tags?.length > 0 && <TagList tags={question.tags} />}
            {reviewed && <span className="question-card__reviewed">✓ Reviewed</span>}
          </div>
        </div>

        <div
          style={{ display: 'flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}
          onClick={e => e.stopPropagation()}
        >
          <button
            type="button"
            onClick={() => toggleBookmark(question.id)}
            title={bookmarked ? 'Remove bookmark' : 'Bookmark'}
            style={{
              padding: '4px',
              borderRadius: 'var(--radius-sm)',
              color: bookmarked ? accent : 'var(--text-muted)',
              transition: 'color 0.18s',
            }}
          >
            {bookmarked ? <BookmarkCheck size={15} /> : <Bookmark size={15} />}
          </button>

          <button
            type="button"
            onClick={() => toggleReviewed(question.id)}
            title={reviewed ? 'Mark as unreviewed' : 'Mark as reviewed'}
            style={{
              padding: '4px',
              borderRadius: 'var(--radius-sm)',
              color: reviewed ? 'var(--green)' : 'var(--text-muted)',
              transition: 'color 0.18s',
            }}
          >
            {reviewed ? <CheckCircle size={15} /> : <Circle size={15} />}
          </button>

          <button
            type="button"
            onClick={() => setIsOpen(prev => !prev)}
            style={{
              padding: '4px',
              borderRadius: 'var(--radius-sm)',
              color: 'var(--text-muted)',
            }}
          >
            {isOpen ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          style={{
            padding: '0 16px 16px',
            borderTop: '1px solid var(--border)',
            paddingTop: '14px',
          }}
        >
          <AnswerBlock question={{ ...question, searchQuery }} accentColor={accent} />
        </div>
      )}
    </div>
  )
}
