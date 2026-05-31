import { BookMarked, Menu, Moon, Sun } from 'lucide-react'
import { SearchBar } from '../ui/SearchBar'
import { useTheme } from '../../context/ThemeContext'
import { useApp } from '../../context/AppContext'
import { useProgress } from '../../hooks/useProgress'
import { useBookmarks } from '../../hooks/useBookmarks'
import { allSections } from '../../data/index'

export function AppHeader({ sectionColor = '#6366f1', showMenu = true }) {
  const { theme, toggleTheme } = useTheme()
  const { openBookmarks, activeView, goToLanding, toggleSidebar, sidebarOpen } = useApp()
  const { getOverallProgress } = useProgress()
  const { bookmarkCount } = useBookmarks()

  const { reviewed, total } = getOverallProgress(allSections)
  const pct = total === 0 ? 0 : Math.round((reviewed / total) * 100)

  return (
    <header className="app-header glass-panel">
      <div className="app-header__left">
        {showMenu && (
          <button
            type="button"
            className="app-header__menu-btn"
            onClick={toggleSidebar}
            aria-label={sidebarOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={sidebarOpen}
          >
            <Menu size={18} />
          </button>
        )}

        <button
          type="button"
          onClick={goToLanding}
          title="Back to home"
          className="app-header__brand"
        >
          <div
            className="app-header__logo"
            style={{
              background: `linear-gradient(135deg, ${sectionColor}, color-mix(in srgb, ${sectionColor} 60%, #fff))`,
              boxShadow: `0 2px 12px ${sectionColor}44`,
            }}
          >
            PF
          </div>
          <span
            className="app-header__title"
            style={{ color: activeView === 'landing' ? sectionColor : 'var(--text-primary)' }}
          >
            Prep First
          </span>
        </button>
      </div>

      <div className="app-header__search">
        <SearchBar accentColor={sectionColor} />
      </div>

      <div className="app-header__actions">
        <div className="app-header__progress">
          <span
            className="app-header__progress-dot"
            style={{
              background: pct === 100 ? 'var(--green)' : sectionColor,
              boxShadow: `0 0 6px ${sectionColor}66`,
            }}
          />
          <span className="app-header__progress-pct" style={{ color: sectionColor }}>
            {pct}%
          </span>
          <span className="app-header__progress-count">{reviewed}/{total}</span>
        </div>

        <button
          type="button"
          onClick={openBookmarks}
          title="Bookmarks"
          className={`app-header__icon-btn${activeView === 'bookmarks' ? ' app-header__icon-btn--active' : ''}`}
          style={{
            '--btn-accent': sectionColor,
            borderColor: activeView === 'bookmarks' ? sectionColor : undefined,
            color: activeView === 'bookmarks' ? sectionColor : undefined,
          }}
        >
          <BookMarked size={16} />
          {bookmarkCount > 0 && (
            <span className="app-header__badge" style={{ background: sectionColor }}>
              {bookmarkCount}
            </span>
          )}
        </button>

        <button
          type="button"
          onClick={toggleTheme}
          title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          className="app-header__icon-btn app-header__icon-btn--square"
          style={{ '--btn-accent': sectionColor }}
        >
          {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
        </button>
      </div>
    </header>
  )
}
