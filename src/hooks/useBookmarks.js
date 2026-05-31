import { useCallback, useEffect, useState } from 'react'

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

export function useBookmarks() {
  const [bookmarks, setBookmarks] = useState(loadBookmarks)

  useEffect(() => {
    saveBookmarks(bookmarks)
  }, [bookmarks])

  // Toggle bookmark on / off
  const toggleBookmark = useCallback((questionId) => {
    setBookmarks(prev =>
      prev.includes(questionId)
        ? prev.filter(id => id !== questionId)
        : [...prev, questionId]
    )
  }, [])

  // Check if a question is bookmarked
  const isBookmarked = useCallback(
    (questionId) => bookmarks.includes(questionId),
    [bookmarks]
  )

  // Get all bookmarked question ids
  const getBookmarkIds = useCallback(() => bookmarks, [bookmarks])

  // Get count of bookmarks
  const bookmarkCount = bookmarks.length

  // Clear all bookmarks
  const clearBookmarks = useCallback(() => {
    setBookmarks([])
  }, [])

  return {
    toggleBookmark,
    isBookmarked,
    getBookmarkIds,
    bookmarkCount,
    clearBookmarks,
  }
}