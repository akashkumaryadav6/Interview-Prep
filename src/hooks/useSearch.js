import { useMemo } from 'react'

/**
 * Searches across all sections or within a single section.
 *
 * @param {Array}  sections  - full sections array from data/index.js
 * @param {string} query     - search string from AppContext
 * @returns {Object}         - { results, totalCount }
 */
export function useSearch(sections = [], query = '') {
  const results = useMemo(() => {
    const trimmed = query.trim().toLowerCase()

    // Empty query → return nothing (caller decides what to show)
    if (!trimmed) return []

    const matched = []

    sections.forEach(section => {
      section.questions.forEach(q => {
        const inQuestion = q.question.toLowerCase().includes(trimmed)
        const inAnswer   = q.answer?.toLowerCase().includes(trimmed) ?? false
        const inTags     = q.tags?.some(t => t.toLowerCase().includes(trimmed)) ?? false

        if (inQuestion || inAnswer || inTags) {
          matched.push({
            ...q,
            sectionId:    section.id,
            sectionTitle: section.title,
            sectionColor: section.color,
            sectionPastel: section.pastel,
          })
        }
      })
    })

    return matched
  }, [sections, query])

  return {
    results,
    totalCount: results.length,
    hasResults: results.length > 0,
  }
}

/**
 * Filters questions within a single section by priority and difficulty.
 *
 * @param {Array}  questions       - questions array of one section
 * @param {string} filterPriority  - 'all' | 'critical' | 'high' | 'medium' | 'low'
 * @param {string} filterDifficulty - 'all' | 'easy' | 'medium' | 'hard'
 * @returns {Array}                - filtered questions
 */
export function useFilter(questions = [], filterPriority = 'all', filterDifficulty = 'all') {
  return useMemo(() => {
    return questions.filter(q => {
      const priorityMatch   = filterPriority === 'all'   || q.priority === filterPriority
      const difficultyMatch = filterDifficulty === 'all' || q.difficulty === filterDifficulty
      return priorityMatch && difficultyMatch
    })
  }, [questions, filterPriority, filterDifficulty])
}