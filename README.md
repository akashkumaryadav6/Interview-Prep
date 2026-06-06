# Interview Prep

A lightweight single-page React app for browsing, studying, and practicing technical interview questions.

## Quick overview

- Browse curated interview questions organized by sections.
- Search, filter, and bookmark items to track your progress.
- Inline code examples with syntax highlighting and source attribution.

## Tech stack

- React 18
- Vite (dev + build)
- lucide-react (icons)

## Quick start

Prerequisites: Node.js (16+) and npm.

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Build production bundle:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project structure (key files)

- `src/main.jsx` — app bootstrap and React root ([src/main.jsx](src/main.jsx#L1)).
- `src/components/layout/Layout.jsx` — main layout and sidebar ([src/components/layout/Layout.jsx](src/components/layout/Layout.jsx#L1)).
- `src/pages/LandingPage.jsx` — top-level entry page ([src/pages/LandingPage.jsx](src/pages/LandingPage.jsx#L1)).
- `src/data/index.js` — consolidated question data and exports ([src/data/index.js](src/data/index.js#L1)).
- `src/context/AppContext.jsx` — app state and bookmarks ([src/context/AppContext.jsx](src/context/AppContext.jsx#L1)).

## Development notes

- UI components live under `src/components` and are organized by feature (layout, question views, ui primitives).
- Question datasets are in `src/data` — each section has its own file (e.g., `javascriptQuestions.js`).
- Custom hooks are in `src/hooks` (search, bookmarks, progress tracking).

## Contributing

Issues and PRs are welcome. Keep changes focused, include data updates or tests where applicable, and describe the motivation.

## License

No license file is included in this repository. Add `LICENSE` if you plan to publish or share this project.
