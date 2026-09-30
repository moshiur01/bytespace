# ByteSpace — Next.js

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4 (design tokens in `styles/variable.css`)
- Fonts: Satoshi + Clash Display (Fontshare, `next/font/local`), Poppins + Inter (`next/font/google`)

## Scripts

```bash
bun install
bun run dev      # http://localhost:3000
bun run build
bun run start
```

## Routes

| Route                     | Figma frame     |
| ------------------------- | --------------- |
| `/`                       | Home            |
| `/courses`                | Search Page     |
| `/courses/[slug]`         | Course Details  |
| `/courses/[slug]/lessons` | Course Lessons  |
| `/courses/[slug]/reviews` | Course Reviews  |
| `/creators/[slug]`        | Creator Profile |
| `/login`                  | Login           |
| `/register`               | Register        |
| any unknown URL           | 404 Not Found   |

## Structure

```
app/
  (main)/          pages with the shared navbar + footer
  (auth)/          login / register (own header, no footer)
  not-found.tsx    404
components/
  home/ courses/ course-details/ creator/ auth/ not-found/   page sections
  shared/          layout (navbar, footer), ui (buttons, cards, badges), icons, helpers
data/              page content (courses, categories, testimonials, footer, …)
interface/         shared TypeScript types
styles/            tokens (variable.css), typography, utilities
public/images/     photos, avatars, pre-tinted 3D shapes
```
