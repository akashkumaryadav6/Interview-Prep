import { createContext, useContext, useState, useCallback } from 'react'

const AppContext = createContext(null)

export function AppProvider({ children }) {
  const [activeSection, setActiveSection] = useState('hr')
  const [searchQuery, setSearchQuery]     = useState('')
  const [activeView, setActiveView]       = useState('landing')
  const [filterPriority, setFilterPriority] = useState('all')
  const [filterDifficulty, setFilterDifficulty] = useState('all')
  const [sidebarOpen, setSidebarOpen]     = useState(false)

  const closeSidebar = useCallback(() => setSidebarOpen(false), [])
  const toggleSidebar = useCallback(() => setSidebarOpen(prev => !prev), [])

  const navigateTo = (sectionId) => {
    setActiveSection(sectionId)
    setActiveView('section')
    setSearchQuery('')
    setSidebarOpen(false)
  }

  const triggerSearch = (query) => {
    setSearchQuery(query)
    setActiveView(query.trim() ? 'search' : 'section')
    if (query.trim()) setSidebarOpen(false)
  }

  const openBookmarks = () => {
    setActiveView('bookmarks')
    setSearchQuery('')
    setSidebarOpen(false)
  }

  const goToLanding = () => {
    setActiveView('landing')
    setSearchQuery('')
    setSidebarOpen(false)
  }

  const resetFilters = () => {
    setFilterPriority('all')
    setFilterDifficulty('all')
  }

  return (
    <AppContext.Provider
      value={{
        activeSection,
        searchQuery,
        activeView,
        filterPriority,
        filterDifficulty,
        sidebarOpen,
        setFilterPriority,
        setFilterDifficulty,
        navigateTo,
        triggerSearch,
        openBookmarks,
        goToLanding,
        toggleSidebar,
        closeSidebar,
        resetFilters,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used inside AppProvider')
  return ctx
}