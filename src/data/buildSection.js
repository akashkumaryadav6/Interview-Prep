/**
 * Shared helpers for building section data objects.
 * Keeps every section file consistent with hr.js shape.
 */

export function createQuestion(id, question, opts = {}) {
  return {
    id,
    question,
    answer:     opts.answer ?? null,
    code:       opts.code ?? [],
    source:     opts.source ?? null,
    tags:       opts.tags ?? [],
    category:   opts.category ?? null,
    difficulty: opts.difficulty ?? 'medium',
    priority:   opts.priority ?? 'medium',
  }
}

export function createQuestions(prefix, items, defaults = {}) {
  return items.map((item, index) => {
    const num = String(index + 1).padStart(2, '0')

    if (typeof item === 'string') {
      return createQuestion(`${prefix}-${num}`, item, defaults)
    }

    const { question, ...overrides } = item
    return createQuestion(`${prefix}-${num}`, question, { ...defaults, ...overrides })
  })
}

export function buildSection({ id, number, title, description, priority, color, questions }) {
  return { id, number, title, description, priority, color, questions }
}
