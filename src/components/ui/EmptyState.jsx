import { BookOpen, Bookmark, Search } from 'lucide-react'

const VARIANTS = {
  search: {
    Icon: Search,
    title: 'No results found',
    subtitle: 'Try a different keyword or check your filters.',
  },
  bookmarks: {
    Icon: Bookmark,
    title: 'No bookmarks yet',
    subtitle: 'Click the bookmark icon on any question to save it here.',
  },
  filtered: {
    Icon: BookOpen,
    title: 'No questions match',
    subtitle: 'Try adjusting the priority or difficulty filter.',
  },
  default: {
    Icon: BookOpen,
    title: 'Nothing here yet',
    subtitle: 'Content will appear once data is populated.',
  },
}

export function EmptyState({ variant = 'default', query = '' }) {
  const { Icon, title, subtitle } = VARIANTS[variant] ?? VARIANTS.default

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px',
        padding: '64px 24px',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: 'var(--bg-raised)',
          color: 'var(--text-muted)',
          marginBottom: '4px',
        }}
      >
        <Icon size={24} />
      </div>

      <p className="typo-title">{title}</p>

      <p className="typo-body-sm" style={{ maxWidth: '280px' }}>
        {variant === 'search' && query
          ? `No matches for "${query}"`
          : subtitle}
      </p>
    </div>
  )
}
