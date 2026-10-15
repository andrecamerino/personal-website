# CLAUDE.md — Personal Website

## Project Overview

Andre Camerino's personal portfolio website. Showcases developer and creative projects, testimonials, resume, and a contact form with email integration.

**Live stack:** Next.js 16 (App Router) · React 19 · TypeScript 5 · Tailwind CSS 4 · Framer Motion 12 · Resend · Upstash Redis · Vercel

---

## Development & Git

- use pnpm instead of npm where possible
- ensure commits are smaller and meaningful, rather than larger one-time commits

```bash
pnpm run dev     # compress images, generate video posters + regenerate image manifest, then start dev server
pnpm run build   # regenerate image manifest, then production build
pnpm run start   # serve production build
pnpm run lint    # ESLint check
pnpm images      # compress everything under public/projects, generate video posters + regenerate manifest
pnpm compress <folder...> [--recursive] [--jpg]   # compress images in any folder, in place
```

- Pass extra Next.js flags directly, e.g. `pnpm dev -p 3001` (pnpm 11 passes a literal `--` through, which breaks `next dev`)
- pnpm 11 blocks dependency build scripts unless approved: `sharp` and `unrs-resolver` are approved under `allowBuilds` in `pnpm-workspace.yaml`. Approve any new ones there (or via `pnpm approve-builds`), otherwise every `pnpm` script fails its install check

No test suite exists in this project.

---

## Architecture

### Routing (App Router)

| Route | File | Notes |
|-------|------|-------|
| `/` | `app/page.tsx` | Single-page portfolio (client component) |
| `POST /api/contact` | `app/api/contact/route.tsx` | Contact form submission, email + rate limiting |

### Key Directories

```
app/              Next.js App Router (layout, page, API routes)
components/       All UI components, grouped by section
context/          ThemeContext (light/dark) + FullscreenContext (modal)
data/             Static content — projects, achievements, testimonials, etc.
hooks/            useTypewriter, isMobile
types/            TypeScript interfaces for all data shapes
utils/            scrollToSection, getDefaultTagColor, truncateText, ratelimit
scripts/          Image tooling: compress-images, generate-video-posters, generate-image-manifest (Node, run via pnpm)
styles/           Shared style objects (glassmorphism)
public/           Static assets — images, backgrounds, resume PDF, icons
```

### Page Sections (top → bottom)

1. **Navbar** — emoji theme toggle, "Get In Touch" CTA
2. **Hero** — typewriter animation, theme-based layout
3. **Projects** — tab-switched: Developer (dark mode) / Creative (light mode)
4. **Scroll1** — infinite marquee scroll section
5. **BentoGrid** — feature highlight grid
6. **Testimonials** — quote/review section
7. **ResumeSection** — dark mode only
8. **ContactSection** — validated form with rate limiting + email notification

---

## Theme System

- Toggled via `ThemeContext` (`context/ThemeContext.tsx`)
- Persisted to `localStorage` key `'currentView'`
- Applied as `data-theme` attribute on `<html>` — CSS variables switch in `globals.css`
- Dark mode is default; light mode shows creative projects and hides resume
- Backgrounds swap between `public/backgrounds/lg-dark.jpg` / `lg-light.jpg` (and `sm-*` variants)

---

## Contact Form & Email

**Flow:** `ContactSection` → `POST /api/contact` → Resend → two emails sent

- **Rate limit:** 3 requests / 60 s per IP (Upstash Redis sliding window, config in `utils/ratelimit.ts`)
- **Validation:** Zod schema in `app/api/contact/contactSchema.ts`
- **Emails sent:**
  - Admin notification → `RECEIVER_EMAIL` (camerinoandre@gmail.com)
  - User confirmation → submitted address
- **Templates:** React Email components — `EmailTemplate.tsx` (admin), `ConfirmationEmail.tsx` (user)
- **Frontend cooldown:** button disabled after submit until cooldown expires

---

## Environment Variables

Required in `.env` / Vercel environment:

| Variable | Purpose |
|----------|---------|
| `RESEND_API_KEY` | Resend email service auth |
| `SENDER_EMAIL` | From address (`delivered@andrecamerino.com`) |
| `RECEIVER_EMAIL` | Admin inbox (`camerinoandre@gmail.com`) |
| `UPSTASH_REDIS_REST_URL` | Upstash Redis instance URL |
| `UPSTASH_REDIS_REST_TOKEN` | Upstash Redis auth token |

---

## Data Layer

All content lives in `data/` as TypeScript files — edit these to update portfolio content:

| File | Content |
|------|---------|
| `projects.ts` | Developer + creative projects with tags, links, images |
| `achievements.ts` | Developer + creative achievement items |
| `testimonials.ts` | Testimonial quotes and metadata |
| `scrollContent.ts` | Marquee scroll section content |
| `descriptiveWords.ts` | Typewriter words in Hero |
| `emailText.ts` | Email template copy |
| `defaultTagColors.ts` | Color map for project technology tags (keys are lowercase tag names) |
| `imageManifest.json` | **Generated** by `scripts/generate-image-manifest.mjs` — maps each folder under `public/projects` to its images. Don't edit by hand |
| `imagePlaceholders.json` | **Generated** alongside the manifest — tiny blurred preview (data URL) of every project image, shown while it loads. Don't edit by hand |

### Project images

- Images live in `public/projects/<category>/<project>/`; paths in `projects.ts` are relative to `public/projects` (e.g. `/developer/slidedown`)
- `images` can be a **folder** (`images: "/developer/slidedown"`) — uses every image directly inside it (not subfolders), sorted by filename — or an explicit array of paths (use this when a folder is shared between projects, e.g. `creative/uoacs-photos`)
- Control display order with numeric filename prefixes (`01-home.jpg`, `02-about.jpg`); the first image is the card thumbnail
- After adding images run `pnpm compress <folder> --jpg` (screenshots/photos) or `pnpm compress <folder>` (keep PNG). Images are resized to ≤1920px wide; `--jpg` converts PNG/WebP to JPG and deletes the original, so only use it on folder-referenced projects
- The manifest regenerates on `dev`/`build`; run `pnpm images` to refresh it while the dev server is already running
- Project media renders through `components/Projects/ProjectImage.tsx` (`next/image` + blurred preview, shimmer fallback, fade-in); use it for any new project image
- Video posters: `pnpm images` grabs a frame from each project video with ffmpeg into a `posters/` folder next to it (e.g. `creative/videos/posters/uoacs_V1.jpg`). Vercel has no ffmpeg, so **commit the posters**; regenerate by deleting one or updating the video
- Keep files well under GitHub's limits (warns at 50MB, rejects at 100MB) — the compress script warns about anything over 25MB

---

## Styling Conventions

- **Tailwind CSS v4** — utility-first, configured via PostCSS (`postcss.config.mjs`)
- **No separate `tailwind.config.*`** — Tailwind v4 uses CSS-first config
- **Glassmorphism** — shared style object at `styles/glass.ts`, apply via spread
- **Animations** — Framer Motion (`framer-motion`) for component animations; `motion` package as alternative
- **Theme-aware** — use `[data-theme='light']` CSS selector for theme-specific overrides

---

## Fullscreen Modal System

- State managed in `FullscreenContext` (`context/FullscreenContext.tsx`)
- Any component can call `useFullscreen()` to open/close a modal with arbitrary `ReactElement` content
- Rendered globally by `FullscreenPopup` inside the context provider

---

## Deployment

Deployed on **Vercel**. Uses `@vercel/analytics` and `@vercel/speed-insights` (both wired in `app/layout.tsx`).

---

## Open TODOs (from TODO.md)

- Basic SEO metadata
- Fix achievement click bug on mobile
- Loading skeletons for images
- Convert contact links to icons
- Consider adding an experience section
