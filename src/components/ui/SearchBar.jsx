import { useEffect, useRef, useState } from 'react'
import { Search, X } from 'lucide-react'
import { useApp } from '../../context/AppContext'

export function SearchBar({ accentColor = '#6366f1' }) {
  const { searchQuery, triggerSearch } = useApp()
  const [localQuery, setLocalQuery]   = useState(searchQuery)
  const inputRef                       = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      // Only trigger search when the local query actually differs
      // from the shared searchQuery to avoid flipping views on mount.
      if (localQuery !== searchQuery) {
        triggerSearch(localQuery)
      }
    }, 300)
    return () => clearTimeout(timer)
  }, [localQuery, searchQuery, triggerSearch])

  useEffect(() => {
    if (!searchQuery) setLocalQuery('')
  }, [searchQuery])

  const handleClear = () => {
    setLocalQuery('')
    triggerSearch('')
    inputRef.current?.focus()
  }

  useEffect(() => {
    const handler = (e) => {
      if (e.key === '/' && document.activeElement !== inputRef.current) {
        e.preventDefault()
        inputRef.current?.focus()
      }
      if (e.key === 'Escape') {
        handleClear()
        inputRef.current?.blur()
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  return (
    <div className="search-bar">
      <Search
        className="search-bar__icon"
        size={15}
        aria-hidden
      />

      <input
        ref={inputRef}
        type="search"
        className="search-bar__input"
        placeholder='Search…  "/"'
        value={localQuery}
        onChange={e => setLocalQuery(e.target.value)}
        onFocus={e => {
          e.target.style.borderColor = accentColor
        }}
        onBlur={e => {
          e.target.style.borderColor = ''
        }}
        aria-label="Search questions, answers, and tags"
      />

      {localQuery && (
        <button
          type="button"
          onClick={handleClear}
          className="search-bar__clear"
          aria-label="Clear search"
        >
          <X size={13} />
        </button>
      )}
    </div>
  )
}
