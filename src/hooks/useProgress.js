import { useCallback, useEffect, useState } from 'react'

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

export function useProgress() {
  const [progress, setProgress] = useState(loadProgress)

  useEffect(() => {
    saveProgress(progress)
  }, [progress])

  // Mark a question as reviewed / unreviewed
  const toggleReviewed = useCallback((questionId) => {
    setProgress(prev => ({
      ...prev,
      [questionId]: !prev[questionId],
    }))
  }, [])

  // Check if a specific question is reviewed
  const isReviewed = useCallback(
    (questionId) => !!progress[questionId],
    [progress]
  )

  // Get count of reviewed questions for a section
  const getSectionProgress = useCallback(
    (questions = []) => {
      const reviewed = questions.filter(q => !!progress[q.id]).length
      return { reviewed, total: questions.length }
    },
    [progress]
  )

  // Get overall progress across all questions
  const getOverallProgress = useCallback(
    (allSections = []) => {
      let total = 0
      let reviewed = 0
      allSections.forEach(section => {
        section.questions.forEach(q => {
          total++
          if (progress[q.id]) reviewed++
        })
      })
      return { reviewed, total }
    },
    [progress]
  )

  // Reset all progress
  const resetProgress = useCallback(() => {
    setProgress({})
  }, [])

  return {
    toggleReviewed,
    isReviewed,
    getSectionProgress,
    getOverallProgress,
    resetProgress,
  }
}