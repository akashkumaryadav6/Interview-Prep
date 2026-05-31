import { useState } from 'react'
import { useApp } from '../../context/AppContext'
import { useTheme } from '../../context/ThemeContext'
import { useProgress } from '../../hooks/useProgress'
import { ProgressRing } from '../ui/ProgressBar'
import { allSections } from '../../data/index'
import { X } from 'lucide-react'

function SidebarItem({ section, isActive, onClick }) {
  const [hovered, setHovered] = useState(false)
  const { theme } = useTheme()
  const { getSectionProgress } = useProgress()
  const { reviewed, total }    = getSectionProgress(section.questions)
  const accent = section.color ?? '#6366f1'
  const isDark = theme === 'dark'

  const ringColor = (() => {
    if (isDark) {
      if (isActive) return '#ffffff'
      if (hovered) return accent
      return 'var(--text-muted)'
    }
    if (isActive || hovered) return accent
    return 'var(--text-muted)'
  })()

  return (
    <button
      type="button"
      onClick={onClick}
      className={`sidebar-item${isActive ? ' sidebar-item--active' : ''}${hovered && !isActive ? ' sidebar-item--hover' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        '--item-accent': accent,
        '--item-accent-dim': section.colorDim ?? 'var(--accent-dim)',
        '--item-text': section.darkCardText ?? '#1E293B',
      }}
    >
      <span className="sidebar-item__strip" aria-hidden />

      <span className="sidebar-item__num">
        {String(section.number).padStart(2, '0')}
      </span>

      <div className="sidebar-item__body">
        <div className="sidebar-item__title-row">
          <span className="sidebar-item__dot" aria-hidden />
          <span className="sidebar-item__title">{section.title}</span>
        </div>
        <span className="sidebar-item__meta">
          {reviewed}/{total} reviewed
        </span>
      </div>

      <div className="sidebar-item__ring">
        <ProgressRing
          value={reviewed}
          total={total}
          size={28}
          strokeWidth={2.5}
          color={ringColor}
        />
      </div>
    </button>
  )
}

export function Sidebar({ isMobile = false, isOpen = false }) {
  const { activeSection, activeView, navigateTo, closeSidebar } = useApp()

  return (
    <aside
      className={`sidebar glass-panel${isMobile ? ' sidebar--drawer' : ' sidebar--desktop'}${isOpen ? ' sidebar--open' : ''}`}
      aria-hidden={isMobile && !isOpen}
      aria-label="Sections navigation"
    >
      <div className="sidebar__header">
        <span className="sidebar__label">Sections</span>
        {isMobile && (
          <button
            type="button"
            className="sidebar__close"
            onClick={closeSidebar}
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
        )}
      </div>

      <nav className="sidebar__nav">
        {allSections.map(section => (
          <SidebarItem
            key={section.id}
            section={section}
            isActive={activeView === 'section' && activeSection === section.id}
            onClick={() => navigateTo(section.id)}
          />
        ))}
      </nav>
    </aside>
  )
}
