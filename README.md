# Interview Prep

A lightweight single-page React app for browsing and practicing technical interview questions.

## Features
- Browse curated interview questions organized by sections
- Search and filter questions
- Code examples with syntax highlighting
- Bookmark questions and track progress
- Clean layout with sidebar navigation

## Tech Stack
- React 18
- Vite (development/build)
- lucide-react (icons)

## Project Structure (important files)
- `src/components` — UI components and layout
- `src/data` — question datasets and sources
- `src/context` — app state providers
- `src/pages` — top-level pages (LandingPage)
- `src/hooks` — custom React hooks
- `src/utils` — helpers and formatting utilities

## Setup & Local Development
1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

Open the URL printed by Vite (usually `http://localhost:5173`).

## Build & Preview
Build the production bundle:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Contributing
Contributions welcome — open an issue or submit a pull request. Keep changes focused and add/update tests/data where appropriate.

## Notes
- This project does not include a LICENSE file. Add one if you plan to publish or share.
