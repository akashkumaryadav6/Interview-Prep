import { useApp } from '../context/AppContext'
import { useSearch } from '../hooks/useSearch'
import { useBookmarks } from '../hooks/useBookmarks'
import { SectionHeader } from './SectionHeader'
import { QuestionList } from '../components/question/QuestionList'
import { QuestionCard } from '../components/question/QuestionCard'
import { EmptyState } from '../components/ui/EmptyState'
import { allSections } from '../data/index'

/* ── Search Results View ── */
function SearchView({ query }) {
  const { results, totalCount, hasResults } = useSearch(allSections, query)

  return (
    <div>
      {/* Header */}
      <div style={{ padding: '24px 0 20px', borderBottom: '1px solid var(--border)', marginBottom: '20px' }}>
        <h1 className="view-title">Search Results</h1>
        <p className="view-subtitle">
          {hasResults
            ? `${totalCount} result${totalCount !== 1 ? 's' : ''} for "${query}"`
            : `No results for "${query}"`}
        </p>
      </div>

      {/* Results */}
      {!hasResults ? (
        <EmptyState variant="search" query={query} />
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {results.map((question, idx) => (
            <div key={question.id}>
              {/* Section label */}
              <p
                className="typo-label"
                style={{
                  color: question.sectionColor ?? 'var(--text-muted)',
                  marginBottom: '6px',
                  paddingLeft: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  textTransform: 'none',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-xs)',
                  letterSpacing: 'var(--tracking-wide)',
                }}
              >
                <span style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: question.sectionColor ?? 'var(--text-muted)',
                }} />
                {question.sectionTitle}
              </p>
              <QuestionCard question={question} index={idx + 1} accentColor={question.sectionColor} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

/* ── Bookmarks View ── */
function BookmarksView() {
  const { getBookmarkIds, bookmarkCount, clearBookmarks } = useBookmarks()
  const bookmarkIds = getBookmarkIds()

  // Collect all bookmarked questions across sections
  const bookmarked = allSections.flatMap(s => s.questions).filter(q => bookmarkIds.includes(q.id))

  return (
    <div>
      {/* Header */}
      <div style={{
        padding: '24px 0 20px',
        borderBottom: '1px solid var(--border)',
        marginBottom: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <div>
          <h1 className="view-title">Bookmarks</h1>
          <p className="view-subtitle">
            {bookmarkCount} saved question{bookmarkCount !== 1 ? 's' : ''}
          </p>
        </div>

        {bookmarkCount > 0 && (
          <button type="button" onClick={clearBookmarks} className="filter-bar__reset">
            Clear all
          </button>
        )}
      </div>

      {/* Bookmarked questions */}
      {bookmarked.length === 0 ? (
        <EmptyState variant="bookmarks" />
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {bookmarked.map((question, idx) => (
            <QuestionCard key={question.id} question={question} index={idx + 1} />
          ))}
        </div>
      )}
    </div>
  )
}

/* ── Section View ── */
function SingleSectionView({ sectionId }) {
  const section = allSections.find(s => s.id === sectionId)

  if (!section) {
    return <EmptyState variant="default" />
  }

  return (
    <div>
      <SectionHeader section={section} />
      <div style={{ marginTop: '20px' }}>
        <QuestionList questions={section.questions} accentColor={section.color} />
      </div>
    </div>
  )
}

/* ── Root SectionView (decides which view to render) ── */
export function SectionView() {
  const { activeView, activeSection, searchQuery } = useApp()

  return (
    <main className="section-view">
      {activeView === 'search'    && <SearchView    query={searchQuery} />}
      {activeView === 'bookmarks' && <BookmarksView />}
      {activeView === 'section'   && <SingleSectionView sectionId={activeSection} />}
    </main>
  )
}