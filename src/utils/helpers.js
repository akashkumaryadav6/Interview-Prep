/* ════════════════════════════════════════════
   PRIORITY HELPERS
════════════════════════════════════════════ */

export const PRIORITY_CONFIG = {
  critical: { label: 'Critical', color: 'var(--red)',    bg: 'var(--red-dim)'    },
  high:     { label: 'High',     color: 'var(--amber)',  bg: 'var(--amber-dim)'  },
  medium:   { label: 'Medium',   color: 'var(--blue)',   bg: 'var(--blue-dim)'   },
  low:      { label: 'Low',      color: 'var(--green)',  bg: 'var(--green-dim)'  },
}

export const DIFFICULTY_CONFIG = {
  easy:   { label: 'Easy',   color: 'var(--green)',  bg: 'var(--green-dim)'  },
  medium: { label: 'Medium', color: 'var(--amber)',  bg: 'var(--amber-dim)'  },
  hard:   { label: 'Hard',   color: 'var(--red)',    bg: 'var(--red-dim)'    },
}

export function getPriorityConfig(priority) {
  return PRIORITY_CONFIG[priority] ?? PRIORITY_CONFIG.medium
}

export function getDifficultyConfig(difficulty) {
  return DIFFICULTY_CONFIG[difficulty] ?? DIFFICULTY_CONFIG.easy
}

/* ════════════════════════════════════════════
   TEXT HELPERS
════════════════════════════════════════════ */

/**
 * Truncates text to a max length and appends ellipsis.
 */
export function truncateText(text = '', maxLength = 120) {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).trimEnd() + '…'
}

/**
 * Highlights occurrences of `query` inside `text`
 * by wrapping them in <mark> tags.
 * Returns an array of React-safe segments: { text, highlight }
 */
export function getHighlightSegments(text = '', query = '') {
  if (!query.trim()) return [{ text, highlight: false }]

  const regex  = new RegExp(`(${escapeRegex(query.trim())})`, 'gi')
  const parts  = text.split(regex)

  return parts.map(part => ({
    text: part,
    highlight: regex.test(part),
  }))
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

/* ════════════════════════════════════════════
   PROGRESS HELPERS
════════════════════════════════════════════ */

/**
 * Returns a percentage string rounded to nearest integer.
 */
export function toPercent(value = 0, total = 1) {
  if (total === 0) return '0%'
  return `${Math.round((value / total) * 100)}%`
}

/* ════════════════════════════════════════════
   DATE / TIME HELPERS
════════════════════════════════════════════ */

/**
 * Returns a human-readable label for current time of day.
 */
export function getGreeting() {
  const hour = new Date().getHours()
  if (hour < 12) return 'Good morning'
  if (hour < 17) return 'Good afternoon'
  return 'Good evening'
}

/* ════════════════════════════════════════════
   CLIPBOARD
════════════════════════════════════════════ */

/**
 * Copies text to clipboard. Returns true on success.
 */
export async function copyToClipboard(text = '') {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    return false
  }
}