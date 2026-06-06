import { createContext, useContext, useState, useCallback, useEffect } from 'react'

const STORAGE_KEY = 'ip-app-state'
const AppContext = createContext(null)

function loadAppState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

export function AppProvider({ children }) {
  const persisted = loadAppState()

  const [activeSection, setActiveSection] = useState(persisted?.activeSection ?? 'hr')
  const [searchQuery, setSearchQuery]     = useState(persisted?.searchQuery ?? '')
  const [activeView, setActiveView]       = useState(persisted?.activeView ?? 'landing')
  const [filterPriority, setFilterPriority] = useState(persisted?.filterPriority ?? 'all')
  const [filterDifficulty, setFilterDifficulty] = useState(persisted?.filterDifficulty ?? 'all')
  const [sidebarOpen, setSidebarOpen]     = useState(persisted?.sidebarOpen ?? false)

  useEffect(() => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          activeSection,
          searchQuery,
          activeView,
          filterPriority,
          filterDifficulty,
          sidebarOpen,
        })
      )
    } catch {
      // ignore write failures
    }
  }, [activeSection, searchQuery, activeView, filterPriority, filterDifficulty, sidebarOpen])

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