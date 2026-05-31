import { useApp } from '../../context/AppContext'
import { useFilter } from '../../hooks/useSearch'
import { QuestionCard } from './QuestionCard'
import { EmptyState } from '../ui/EmptyState'

/* ── Filter Bar ── */
function FilterBar({ total, filtered }) {
  const { filterPriority, filterDifficulty, setFilterPriority, setFilterDifficulty, resetFilters } = useApp()

  const isFiltered = filterPriority !== 'all' || filterDifficulty !== 'all'

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '8px',
        flexWrap: 'wrap',
        marginBottom: '16px',
      }}
    >
      {/* Count */}
      <span className="filter-bar__count">
        {isFiltered ? `${filtered} of ${total}` : `${total}`} questions
      </span>

      {/* Filters */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        {/* Priority filter */}
        <select
          value={filterPriority}
          onChange={e => setFilterPriority(e.target.value)}
          className="filter-bar__select"
        >
          <option value="all">All Priorities</option>
          <option value="critical">Critical</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>

        {/* Difficulty filter */}
        <select
          value={filterDifficulty}
          onChange={e => setFilterDifficulty(e.target.value)}
          className="filter-bar__select"
        >
          <option value="all">All Difficulties</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>

        {/* Reset filters */}
        {isFiltered && (
          <button type="button" onClick={resetFilters} className="filter-bar__reset">
            Reset
          </button>
        )}
      </div>
    </div>
  )
}

/* ── Group questions by optional category field ── */
function groupByCategory(questions) {
  if (!questions.some(q => q.category)) {
    return [{ category: null, questions }]
  }

  const groups = []

  questions.forEach(question => {
    const category = question.category ?? 'General'
    const last = groups[groups.length - 1]

    if (last?.category === category) {
      last.questions.push(question)
    } else {
      groups.push({ category, questions: [question] })
    }
  })

  return groups
}

function CategoryHeading({ title, accentColor = '#6366f1' }) {
  return (
    <h2
      className="category-heading"
      style={{
        color: accentColor,
        borderBottomColor: `${accentColor}33`,
      }}
    >
      <span
        style={{
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          background: accentColor,
          flexShrink: 0,
        }}
      />
      {title}
    </h2>
  )
}

/* ── Main QuestionList ── */
export function QuestionList({ questions = [], accentColor = '#6366f1' }) {
  const { filterPriority, filterDifficulty } = useApp()
  const filtered = useFilter(questions, filterPriority, filterDifficulty)
  const groups = groupByCategory(filtered)

  if (questions.length === 0) {
    return <EmptyState variant="default" />
  }

  if (filtered.length === 0) {
    return (
      <>
        <FilterBar total={questions.length} filtered={0} />
        <EmptyState variant="filtered" />
      </>
    )
  }

  let index = 0

  return (
    <div>
      <FilterBar total={questions.length} filtered={filtered.length} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {groups.map(group => (
          <div
            key={group.category ?? 'default'}
            style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
          >
            {group.category && <CategoryHeading title={group.category} accentColor={accentColor} />}
            {group.questions.map(question => {
              index += 1
              return (
                <QuestionCard
                  key={question.id}
                  question={question}
                  index={index}
                  accentColor={accentColor}
                />
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}