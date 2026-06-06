import { createContext, useContext, useEffect, useState, useCallback } from 'react'

const STORAGE_KEY = 'ip-bookmarks'

function loadBookmarks() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function saveBookmarks(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  } catch {
    console.warn('Could not save bookmarks to localStorage')
  }
}

const BookmarkContext = createContext(null)

export function BookmarkProvider({ children }) {
  const [bookmarks, setBookmarks] = useState(loadBookmarks)

  useEffect(() => {
    saveBookmarks(bookmarks)
  }, [bookmarks])

  const toggleBookmark = useCallback((questionId) => {
    setBookmarks(prev =>
      prev.includes(questionId)
        ? prev.filter(id => id !== questionId)
        : [...prev, questionId]
    )
  }, [])

  const isBookmarked = useCallback(
    (questionId) => bookmarks.includes(questionId),
    [bookmarks]
  )

  const getBookmarkIds = useCallback(() => bookmarks, [bookmarks])

  const bookmarkCount = bookmarks.length

  const clearBookmarks = useCallback(() => {
    setBookmarks([])
  }, [])

  return (
    <BookmarkContext.Provider
      value={{
        bookmarks,
        toggleBookmark,
        isBookmarked,
        getBookmarkIds,
        bookmarkCount,
        clearBookmarks,
      }}
    >
      {children}
    </BookmarkContext.Provider>
  )
}

export function useBookmarks() {
  const ctx = useContext(BookmarkContext)
  if (!ctx) throw new Error('useBookmarks must be used inside BookmarkProvider')
  return ctx
}
