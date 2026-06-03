# Outshift Design

The **Outshift Design** site — the design-research hub for [Outshift by Cisco](https://outshift.cisco.com/). It publishes research-backed frameworks, human–agent interaction (HAX) patterns, a developer-facing SDK reference, and a blog, all built as a statically-exported [Next.js](https://nextjs.org) App Router site. Styling is primarily hand-written CSS driven by CSS custom properties, with light/dark theming and a small built-in chat assistant that helps visitors navigate the content.

**Live demo: https://vaesposito.github.io/outshift-design-next/**

> ℹ️ The live URL above is a **demo-only GitHub Pages deployment** used for previewing this codebase. The real, production deployment of Outshift Design happens elsewhere — treat this Pages site purely as a sandbox/preview.

This README is written for both **humans** and the **AI agents** that help maintain the site. If you're adding or changing content, read the [Theming](#theming), [The `asset()` helper & the basePath gotcha](#the-asset-helper--the-basepath-gotcha), and [Adding & modifying content](#adding--modifying-content) sections carefully — the basePath rules in particular are easy to get wrong and cause broken links/images on the deployed site.

---

## Tech stack

| Concern | Choice | Version (from `package.json`) |
| --- | --- | --- |
| Framework | Next.js (App Router) | `16.2.7` |
| UI library | React + React DOM | `19.2.4` |
| Language | TypeScript | `^5` |
| Styling | Tailwind CSS | `^3.4.19` |
| CSS tooling | PostCSS + Autoprefixer | `^8.5.15` / `^10.5.0` |
| Theming | `next-themes` | `^0.4.6` |
| Node types | `@types/node` | `^20` |

- **Next.js App Router** with **React 19** and **TypeScript**. The site is configured as a **static export** (`output: 'export'`) — there is no Node server at runtime.
- **Styling is primarily hand-written CSS using CSS custom properties.** Global tokens and most layout live in `app/globals.css`, and individual routes ship their own `*.css` files (for example `app/sdk/sdk.css`, `app/blog/blog.css`, `app/research/research.css`). **Tailwind CSS is configured and available**, and its color tokens are **mapped to the CSS variables** (see `tailwind.config.ts`), so a Tailwind class like `bg-bg` or `text-text-muted` resolves to the same `--color-*` variable the hand-written CSS uses. In practice most components reach for hand-written classes; Tailwind is there when convenient.
- **`next-themes`** powers dark/light mode via a `data-theme` attribute on `<html>`.

---

## Getting started

### Prerequisites

- **Node.js 20.x** (the GitHub Actions deploy workflow uses Node 20; Next.js 16 requires a modern LTS Node).
- **npm** (a `package-lock.json` is committed; use `npm ci` for reproducible installs).

### Install

```bash
npm install
# or, for a clean, lockfile-exact install (what CI uses):
npm ci
```

### Develop

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). In development, `basePath` is **empty**, so URLs are served from the root.

### Build (static export)

```bash
npm run build
```

This produces a fully static site in the **`out/`** directory (`output: 'export'`). In a production build, `basePath` is set to `/outshift-design-next`, so the export is laid out to be served from that sub-path on GitHub Pages.

> The `start` script (`next start`) exists from the create-next-app scaffold but is **not used** for this project — a static export has no server to start. To preview the built output, serve the `out/` folder with any static file server.

---

## Project structure

```text
outshift-design-next/
├── app/                       # Next.js App Router. Each route = a folder with a page.tsx.
│   ├── layout.tsx             # Root layout: <html>, ThemeProvider, Header, Footer, ChatAssistant,
│   │                          #   inline theme bootstrap script, and basePath-aware CSS bg vars.
│   ├── globals.css            # Global CSS variables (theming), base styles, shared layout.
│   ├── page.tsx               # Home route ("/").
│   ├── favicon.ico
│   ├── hax/                   # "/hax" — the HAX pattern library (HaxPatterns.tsx client component).
│   ├── guiding-principles/    # "/guiding-principles" (+ guiding-principles.css, PatternTabs.tsx).
│   ├── human-centered-ai-patterns/  # "/human-centered-ai-patterns" (+ its own .css).
│   ├── components/            # "/components" demo route (+ components.css).
│   ├── styleguide/            # "/styleguide" (+ styleguide.css).
│   ├── blog/                  # "/blog" index (blog.css, BlogFilters.tsx = the article list/data).
│   │   ├── LightboxImage.tsx  # Shared blog image → lightbox wrapper.
│   │   ├── augmented-designer/            # "/blog/augmented-designer" (page.tsx + article.css)
│   │   ├── making-room-for-agents/        # "/blog/making-room-for-agents"
│   │   ├── building-accessible-interfaces/
│   │   └── future-of-design-systems/      # Each article folder: page.tsx, article.css,
│   │                                      #   and sometimes ArticleToc.tsx / ReadingProgress.tsx.
│   ├── research/              # "/research" hub (research.css) + sub-routes:
│   │   ├── foundational-principles/   # (+ PipelineStepper.tsx)
│   │   ├── cognitive-frameworks/
│   │   ├── security-privacy/
│   │   └── societal-impact/           # hub + agent-impact-map/, cognitive-load-audit/, foresight-canvas/
│   └── sdk/                   # "/sdk" HAX SDK reference.
│       ├── layout.tsx         # Wraps SDK routes with the sidebar + sdk.css.
│       ├── SdkSidebar.tsx     # The SDK left-nav (SECTIONS array = source of truth for sidebar links).
│       ├── sdk.css            # SDK-specific styling.
│       ├── page.tsx           # "/sdk" intro + COMPONENT_CARDS grid.
│       └── <slug>/page.tsx    # One folder per doc page (installation, code-editor, timeline, …).
├── components/                # Shared React components used across routes.
│   ├── Header.tsx             # Top nav (uses <Link> + asset() for logos/icons).
│   ├── Footer.tsx
│   ├── ThemeToggle.tsx        # next-themes light/dark toggle button.
│   ├── ChatAssistant.tsx      # Floating chat widget (reads lib/chatKnowledge.ts).
│   ├── HeroVideo.tsx          # Theme-aware <video> with light/dark sources via asset().
│   ├── ImageLightbox.tsx      # Generic image lightbox/modal.
│   └── ReadingProgress.tsx    # Rainbow scroll-progress bar for article pages.
├── lib/
│   ├── asset.ts               # asset() helper + BASE_PATH (basePath-aware public asset URLs).
│   └── chatKnowledge.ts       # KB[] knowledge base powering the ChatAssistant answers.
├── public/                    # Served as-is. Referenced via asset('/...') (see basePath section).
│   ├── images/                # Logos, SVG backgrounds, blog/ and research/ and patterns/ images.
│   ├── videos/                # Hero/section .mp4 files (light + dark variants).
│   ├── files/                 # Downloadable assets (e.g. ai-ethics-and-design.pdf).
│   ├── sdk.html               # Legacy redirect to /sdk/ (see Deployment).
│   ├── .nojekyll              # Tells GitHub Pages not to run Jekyll (preserves _next/ etc.).
│   ├── robots.txt, sitemap.xml
│   └── *.svg                  # Misc create-next-app leftovers (next.svg, vercel.svg, …).
├── .github/workflows/deploy.yml   # GitHub Actions → GitHub Pages deploy.
├── next.config.ts             # output:'export', basePath, assetPrefix, trailingSlash, images.unoptimized.
├── tailwind.config.ts         # Tailwind color tokens mapped to CSS variables.
├── postcss.config.mjs         # Tailwind + Autoprefixer.
├── tsconfig.json              # "@/*" path alias → project root.
├── AGENTS.md / CLAUDE.md      # Agent guidance (CLAUDE.md → @AGENTS.md).
└── README.md                  # You are here.
```

**Key conventions**

- A **route** is any folder under `app/` containing a `page.tsx`. Nested folders create nested URLs.
- Route-specific styling lives in a **co-located `*.css` file** imported by that route's `page.tsx` (or `layout.tsx`).
- Route-specific interactive pieces (filters, tabs, steppers, TOCs) are **co-located client components** (`'use client'`), while truly shared UI lives in top-level `components/`.
- The `@/` import alias maps to the project root (see `tsconfig.json`), e.g. `import { asset } from '@/lib/asset'`.

---

## Theming

Theming is a **CSS-variable system** toggled by a `data-theme` attribute on the `<html>` element, coordinated by `next-themes`.

- **Light tokens** are declared on `:root` in `app/globals.css`; **dark overrides** are declared under `[data-theme="dark"]`:

```css
/* app/globals.css */
:root {
  --color-bg: #fff;
  --color-text: #293247;
  --color-accent: #00BCEB;
  /* …more --color-* tokens… */
}

[data-theme="dark"] {
  --color-bg: #0f1117;
  --color-text: #e0e4ec;
  --color-accent: #3fc6ee;
  /* …dark overrides for the same tokens… */
}
```

- **`next-themes`** is configured in `app/layout.tsx` with `attribute="data-theme"`, `defaultTheme="system"`, and `enableSystem`. A tiny inline `themeScript` runs before hydration to set `data-theme` from `localStorage` (or the OS preference) and avoid a flash of the wrong theme.
- **`ThemeToggle.tsx`** flips between `light` and `dark` via `useTheme()` from `next-themes`.
- **Theme-aware media:** light/dark logos, images, and videos are swapped purely with CSS (`.logo-light`/`.logo-dark`, `video.video-light`/`video.video-dark`, etc.). `HeroVideo.tsx` renders both sources and shows the right one based on the resolved theme.
- **Decorative background SVGs** are defined as `--bg-*` variables. Because their URLs need the basePath, they're injected from `app/layout.tsx` using `asset()` (see below) rather than hard-coded in CSS.

**To change colors:** edit the `--color-*` variables in `app/globals.css` (both the `:root` light set and the `[data-theme="dark"]` set). Because Tailwind's color tokens point at these variables (in `tailwind.config.ts`), updating the variables updates both the hand-written CSS and any Tailwind color utilities at once.

---

## The `asset()` helper & the basePath gotcha

The site deploys to GitHub Pages **under a sub-path**: `/outshift-design-next`. In production, `next.config.ts` sets:

```ts
// next.config.ts
const nextConfig: NextConfig = {
  output: 'export',
  basePath,                          // '/outshift-design-next' in production, '' in dev
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // …
}
```

Next.js applies `basePath` **automatically** to `<Link href>` and `next/image` — but **NOT** to raw `<img>`, `<video>`/`<source>`, or CSS `url()`. There are therefore two hard rules:

### 1. Wrap raw asset URLs with `asset()`

Use `asset()` from `lib/asset.ts` for any root-relative asset path in a raw `<img>`, `<video>`/`<source>`, inline style, or JS-referenced asset under `public/`:

```ts
// lib/asset.ts
export function asset(p: string): string {
  const path = p.startsWith('/') ? p : `/${p}`
  return `${BASE_PATH}${path}`
}
```

```tsx
import { asset } from '@/lib/asset'

// ✅ correct — resolves to /outshift-design-next/images/logo.svg in production
<img src={asset('/images/outshift_logo.svg')} alt="Outshift" />

// ❌ wrong — 404s on GitHub Pages (missing basePath)
<img src="/images/outshift_logo.svg" alt="Outshift" />
```

> Do **not** wrap `<Link href>` or `next/image` `src` with `asset()` — those already get the basePath and double-prefixing would break them.

### 2. Use `<Link>` for internal navigation

Internal navigation **must** use the Next.js `<Link>` component. A plain `<a href="/...">` does **not** get the basePath rewritten and will **404** on the deployed site.

```tsx
import Link from 'next/link'

// ✅ correct — basePath is applied automatically
<Link href="/sdk/installation">Installation</Link>

// ❌ wrong — 404s on GitHub Pages
<a href="/sdk/installation">Installation</a>
```

(In-page anchors like `<a href="#section">` are fine — they don't involve the basePath. External links with full `https://` URLs are also fine as plain `<a>`.)

---

## Adding & modifying content

Below are concrete, copy-pasteable recipes. After any change, run `npm run dev` to verify locally; the deploy happens automatically on push to `main` (see [Deployment](#deployment)).

### Add a new top-level page/route

1. Create a folder under `app/`, e.g. `app/my-page/`.
2. Add `app/my-page/page.tsx` exporting a default React component and (optionally) `metadata`:

```tsx
import type { Metadata } from 'next'
import './my-page.css' // optional co-located styles

export const metadata: Metadata = {
  title: 'My Page — Outshift Design',
  description: 'What this page is about.',
}

export default function MyPage() {
  return (
    <main className="container">
      <h1>My Page</h1>
    </main>
  )
}
```

3. (Optional) Add `app/my-page/my-page.css` and import it from `page.tsx`.
4. Link to it from the nav (`components/Header.tsx`) or other pages using `<Link href="/my-page">`.

### Add a new blog article

Blog articles are App Router routes under `app/blog/`, and the **blog index list/data lives in `app/blog/BlogFilters.tsx`** (the `CARDS` array).

1. Create `app/blog/<slug>/page.tsx` (use an existing article like `app/blog/making-room-for-agents/page.tsx` as a template — they include `metadata`, JSON-LD, `import './article.css'`, and often `ReadingProgress`).
2. Add a co-located `app/blog/<slug>/article.css` for article-specific styling.
3. Put article images under `public/images/blog/<slug>/...` and reference them with `asset('/images/blog/<slug>/hero.png')` (or via the `LightboxImage` wrapper for zoomable figures).
4. **Register the card** so the article appears on `/blog`: add an entry to the `CARDS` array in `app/blog/BlogFilters.tsx`. For an internal article set `external: false` and `href: '/blog/<slug>'`; wrap image paths in `asset(...)`.

### Add a new SDK doc page

SDK pages live under `app/sdk/<slug>/` and share the sidebar from `app/sdk/layout.tsx`.

1. Create `app/sdk/<slug>/page.tsx` using this template (note the `sdk-main sdk-doc` class on `<main>`):

```tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HAX SDK — My Component',
  description: 'What this component/doc page covers.',
}

export default function Page() {
  return (
    <main className="sdk-main sdk-doc">
      <h1>My Component</h1>
      <p>Description…</p>
      <h2>Installation</h2>
      <pre><code>{`hax init
hax add artifact my-component`}</code></pre>
    </main>
  )
}
```

2. **Add a sidebar entry** so it's reachable: add `{ label: 'My Component', href: '/sdk/my-component' }` to the appropriate section in the `SECTIONS` array in `app/sdk/SdkSidebar.tsx`.
3. **If it's a component**, also add a card to the `COMPONENT_CARDS` array in `app/sdk/page.tsx` (slug, image URL, title, description) so it shows up in the `/sdk` components grid.
4. Note: **SDK entry links from outside the SDK open in a new tab** — when linking into the SDK from non-SDK pages, follow the existing pattern (target a new tab) rather than in-page `<Link>` navigation.

### Add images / assets

1. Drop files into `public/` (e.g. `public/images/...`, `public/videos/...`, `public/files/...`).
2. Reference them through `asset('/path')` in raw `<img>`/`<video>`/inline styles (see the [basePath section](#the-asset-helper--the-basepath-gotcha)). For theme-aware video use the `HeroVideo` component.

### Update the chat assistant knowledge base

The floating `ChatAssistant` answers from a simple keyword-matched knowledge base in **`lib/chatKnowledge.ts`** (the exported `KB` array of `{ keys, answer }` entries; `findAnswer()` picks the entry whose matched key is longest).

- To teach the assistant something new, **add a `KBEntry`** to `KB`: list trigger `keys` (lowercase phrases) and an `answer` (HTML string).
- Use the existing `siteLink()` / `extLink()` / `haxNav()` helpers to render internal links (already basePath-aware via `asset()`), external links (open in a new tab), and HAX section links.

---

## Deployment

Deployment is automated via **GitHub Actions → GitHub Pages** (`.github/workflows/deploy.yml`).

- **Trigger:** every push to **`main`** (also runnable manually via `workflow_dispatch`).
- **Pipeline:** checkout → setup Node 20 (with npm cache) → `npm ci` → `npm run build` → upload the **`out/`** directory as a Pages artifact → deploy to the `github-pages` environment.
- **Static export settings** (`next.config.ts`) that make this work:
  - `output: 'export'` — emits a static site to `out/` (no server).
  - `basePath: '/outshift-design-next'` (production only) + `assetPrefix` — so all routes/assets resolve under the Pages sub-path.
  - `trailingSlash: true` — emits `route/index.html` files so directory-style URLs work on Pages.
  - `images: { unoptimized: true }` — required because the Next.js image optimizer needs a server, which a static export doesn't have.
- **`public/.nojekyll`** is included so GitHub Pages serves the export verbatim (Jekyll would otherwise ignore the `_next/` directory whose name starts with an underscore).
- **Legacy redirect:** `output: 'export'` doesn't support `redirects()`/`rewrites()`, so the old `/sdk.html` URL is preserved by a static **`public/sdk.html`** file that meta-refreshes / `location.replace`s to `/outshift-design-next/sdk/#introduction`.

Pushing to `main` is all that's needed to deploy. **This is a demo/preview deployment only** — see the note near the top of this README.
