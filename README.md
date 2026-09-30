# ByteSpace — Next.js

Pixel-perfect Next.js conversion of the **ByteSpace** Figma design (online-courses marketplace).
Built with the same structure and conventions as `saas-ns-next` (App Router, no `src/`, Tailwind v4 tokens, one component per file, data in `data/`).

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

| Route                       | Figma frame      |
| --------------------------- | ---------------- |
| `/`                         | Home             |
| `/courses`                  | Search Page      |
| `/courses/[slug]`           | Course Details   |
| `/courses/[slug]/lessons`   | Course Lessons   |
| `/courses/[slug]/reviews`   | Course Reviews   |
| `/creators/[slug]`          | Creator Profile  |
| `/login`                    | Login            |
| `/register`                 | Register         |
| any unknown URL             | 404 Not Found    |

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

## Notes

- The 3D shapes in the design are tinted in Figma with a hard-light colour layer masked by the image; they are pre-baked as `public/images/3d/*-lime.png` / `*-white.png` so they render identically without blend-mode tricks.
- Decorative artwork (3D shapes, floating cards) is positioned on a centred 1440px "artboard" layer at desktop sizes and hidden on small screens.
