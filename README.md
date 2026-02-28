# Admin Dashboard

A modern admin dashboard built with Next.js, TypeScript, and Tailwind CSS. Manage users, payments, and analytics from a single, responsive interface.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI:** shadcn/ui (Radix primitives), Lucide icons
- **Charts:** Recharts
- **Tables:** TanStack Table
- **Forms:** React Hook Form, Zod, @hookform/resolvers
- **Theme:** next-themes (light / dark / system)

## Features

- **Dashboard** — Overview with bar, area, and pie charts; todo list; latest transactions and popular content cards
- **Payments** — Data table with sorting, pagination, row selection, and status badges (NGN)
- **Users** — User list (placeholder) and per-user profile with badges, info, activity chart, and edit form
- **Layout** — Collapsible sidebar (state persisted via cookie), navbar with theme toggle and user menu
- **Resilience** — Root error boundary (`error.tsx`), 404 page (`not-found.tsx`), and loading skeleton

## Project Structure

```
app/                    # Next.js App Router
  page.tsx              # Dashboard home
  user/                 # Users list & [username] profile
  payments/             # Payments table
  layout.tsx            # Root layout (sidebar, theme, providers)
  error.tsx             # Error boundary
  not-found.tsx         # 404 page
  loading.tsx           # Loading UI
components/             # Shared UI
  ui/                   # shadcn primitives + dashboard-card, section-title, status-badge
  sidebar/              # Sidebar nav, footer, config
  data-table.tsx        # Generic TanStack Table wrapper
  TablePagination.tsx
features/
  dashboard/            # Dashboard widgets (charts, TodoList, CardList, EditUser, AppLineChart)
  payments/             # Payments columns, mock data
lib/                    # Utils (cn), dashboard layout constants
types/                  # dashboard.ts, payments.ts
hooks/                  # use-mobile (sidebar)
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

## Environment

No environment variables are required for the current mock-data setup. For a real backend, add a `.env.local` with your API base URL and any keys.

## License

Private. All rights reserved.
