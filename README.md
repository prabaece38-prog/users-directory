# Users Directory

A small React + TypeScript app that lists users from [dummyjson.com](https://dummyjson.com/users), with search, pagination, dark mode, and loading/error/empty states.

## Tech Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS
- Vitest + React Testing Library
- ESLint + Prettier

## Project Structure

```
src/
├── api/         # Raw fetch calls to dummyjson (one function per endpoint)
├── components/  # Small, reusable UI pieces (SearchBar, Pagination, UserCard, etc.)
├── constants/    # Shared config values (page size, debounce delay, API base URL)
├── context/      # React Context providers (ThemeContext for dark/light mode)
├── hooks/        # Custom hooks (useUsers, usePagination, useDebounce)
├── pages/        # Page-level components that compose everything together
├── services/     # Pure business logic on top of raw data (search/filter helpers)
├── tests/        # Vitest + RTL test files
├── types/        # Shared TypeScript interfaces
├── utils/        # Generic, framework-agnostic helpers (pagination math)
├── App.tsx
└── main.tsx
```

**Why this split?** `api` only knows how to talk to dummyjson. `services` and `utils`
hold logic that can be unit-tested without React. `hooks` connect that logic to
component state. `components` are presentational and reusable. `pages` wire
hooks + components together for a specific screen. This keeps each layer easy
to find, test, and replace independently.

## Setup

```bash
npm install
npm run dev
```

App runs at `http://localhost:5173`.

### Other scripts

```bash
npm run build      # type-check + production build
npm run preview    # preview the production build locally
npm run lint        # ESLint
npm run test        # run unit tests once
npm run test:watch  # run unit tests in watch mode
```

## Features

- Fetches users from `https://dummyjson.com/users` (100 users in one request)
- Search by name or email, debounced by 400ms
- Client-side pagination (10 users per page)
- Skeleton loading state, error state with retry, empty state for no results
- Dark/light mode toggle (persisted to `localStorage`, respects OS preference on first load)
- Responsive grid: 1 column on mobile, up to 4 on large screens

## Running with Docker

```bash
docker build -t users-directory .
docker run -p 8080:80 users-directory
```

Then open `http://localhost:8080`.

## Deploying to Vercel

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Vercel auto-detects Vite. Confirm these settings (defaults are fine):
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Click **Deploy**.

No environment variables are needed since the app calls the public dummyjson API directly.

## Suggested Git Commit History

```
chore: scaffold Vite + React + TypeScript + Tailwind project
feat: add User types and dummyjson API client
feat: add useUsers hook with loading/error/retry
feat: build UserCard and responsive UserGrid
feat: add search bar with debounced filtering
feat: implement client-side pagination
feat: add skeleton, error, and empty states
feat: add dark/light theme toggle with persistence
test: add unit tests for pagination, search, and components
docs: add README with setup and deployment instructions
chore: add Dockerfile and nginx config for containerized deploy
```
