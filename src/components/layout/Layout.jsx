import { AppHeader } from './AppHeader'
import { Sidebar } from './Sidebar'
import { SectionView } from '../../sections/SectionView'
import { LandingPage } from '../../pages/LandingPage'
import { useApp } from '../../context/AppContext'
import { useIsMobile } from '../../hooks/useMediaQuery'
import { allSections } from '../../data/index'
import { useEffect } from 'react'

export default function Layout() {
  const { activeSection, activeView, sidebarOpen, closeSidebar } = useApp()
  const isMobile = useIsMobile()
  const isLanding = activeView === 'landing'

  const current = allSections.find(s => s.id === activeSection)
  const accent  = activeView === 'section' ? current?.color  : '#6366f1'
  const pastel  = activeView === 'section' ? current?.pastel : 'transparent'

  /* Close drawer when resizing to desktop */
  useEffect(() => {
    if (!isMobile) closeSidebar()
  }, [isMobile, closeSidebar])

  /* Prevent body scroll when mobile drawer is open */
  useEffect(() => {
    if (isMobile && sidebarOpen && !isLanding) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isMobile, sidebarOpen, isLanding])

  return (
    <div
      className="app-shell"
      style={{
        '--section-accent': accent,
        '--section-pastel': isLanding ? 'rgba(196, 181, 253, 0.35)' : pastel,
      }}
    >
      <div className="app-shell__ambient" aria-hidden />

      <div className="app-shell__content">
        <AppHeader sectionColor={isLanding ? '#6366f1' : accent} showMenu={!isLanding} />

        {isLanding ? (
          <div className="main-scroll">
            <div className="page-container page-container--wide">
              <LandingPage />
            </div>
          </div>
        ) : (
          <div className="app-body">
            {isMobile && sidebarOpen && (
              <button
                type="button"
                className="sidebar-backdrop"
                onClick={closeSidebar}
                aria-label="Close menu"
              />
            )}

            <Sidebar isMobile={isMobile} isOpen={sidebarOpen} />

            <div className="main-scroll">
              <div className="page-container">
                <SectionView />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
