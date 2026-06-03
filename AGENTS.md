<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project docs

Read **[README.md](./README.md)** for full project documentation: tech stack, getting
started, project structure, theming, the `asset()`/basePath rules, content recipes
(pages, blog articles, SDK doc pages, chat knowledge base), and deployment.

Two things that are easy to get wrong on this statically-exported, sub-path GitHub Pages site:

- Use the `asset()` helper from `lib/asset.ts` for raw `<img>`/`<video>`/CSS `url()` asset paths.
- Use Next.js `<Link>` (not a plain `<a href="/...">`) for internal navigation — a plain
  `<a>` does not get the `/outshift-design-next` basePath and will 404.
