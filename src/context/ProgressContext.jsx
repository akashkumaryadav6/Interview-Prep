import { createContext, useContext, useEffect, useState, useCallback } from 'react'

const STORAGE_KEY = 'ip-progress'

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

function saveProgress(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  } catch {
    console.warn('Could not save progress to localStorage')
  }
}

const ProgressContext = createContext(null)

export function ProgressProvider({ children }) {
  const [progress, setProgress] = useState(loadProgress)

  useEffect(() => {
    saveProgress(progress)
  }, [progress])

  const toggleReviewed = useCallback((questionId) => {
    setProgress(prev => ({
      ...prev,
      [questionId]: !prev[questionId],
    }))
  }, [])

  const isReviewed = useCallback(
    (questionId) => !!progress[questionId],
    [progress]
  )

  const getSectionProgress = useCallback(
    (questions = []) => {
      const reviewed = questions.filter(q => !!progress[q.id]).length
      return { reviewed, total: questions.length }
    },
    [progress]
  )

  const getOverallProgress = useCallback(
    (allSections = []) => {
      let total = 0
      let reviewed = 0

      allSections.forEach(section => {
        section.questions.forEach(q => {
          total += 1
          if (progress[q.id]) reviewed += 1
        })
      })

      return { reviewed, total }
    },
    [progress]
  )

  const resetProgress = useCallback(() => {
    setProgress({})
  }, [])

  return (
    <ProgressContext.Provider
      value={{
        progress,
        toggleReviewed,
        isReviewed,
        getSectionProgress,
        getOverallProgress,
        resetProgress,
      }}
    >
      {children}
    </ProgressContext.Provider>
  )
}

export function useProgress() {
  const ctx = useContext(ProgressContext)
  if (!ctx) throw new Error('useProgress must be used inside ProgressProvider')
  return ctx
}
