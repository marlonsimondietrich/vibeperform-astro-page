# Vibeperform Astro Site

A bilingual marketing site built with [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/). The project targets deployment under the `/vibeperform-astro-page` base path (for example on GitHub Pages) and ships with reusable UI primitives and structured content for fast iteration.

## 1. Prerequisites
- Node.js 20 LTS (aligns with the GitHub Actions workflow)
- npm (comes with Node 20)  
- Optional: `npx astro` for project utilities

Keep Node versions in sync across local environments and CI to avoid lockfile drift.

## 2. Installation & Local Development
1. Install dependencies once:
   ```sh
   npm install
   ```
2. Start the dev server with hot reload:
   ```sh
   npm run dev
   ```
   Astro prints a local URL (default `http://localhost:4321`). Use `?lang=de` when previewing locale-specific routes if your browser caches redirects.
3. Create optimized production output before deploying:
   ```sh
   npm run build
   ```
4. Preview the built site (uses the output in `dist/`):
   ```sh
   npm run preview
   ```

Always run `npm run build` before shipping changes so Astro detects base-path issues early.

## 3. Repository Layout

```
src/
  components/
    Button.astro        # Reusable CTA button with confetti behaviour
    HomePage.astro      # Landing page shell (hero + features) that consumes localised content
    NavBar.astro        # Shared navigation bar used across every page
  data/
    homeContent.ts      # Locale-specific strings and navigation definitions
  pages/
    index.astro         # English landing page
    de/index.astro      # German landing page
    workshops.astro     # English detail page
    about-us.astro      # English detail page
    de/workshops.astro  # German counterpart
    de/ueber-uns.astro  # German counterpart
    markdown-page.md    # Sample markdown content page
styles/
  global.css            # Tailwind base styles + custom utilities
```

Astro routes map 1:1 to files (`src/pages/**/*.astro`). English pages live at `/vibeperform-astro-page/...`; German pages sit under `/vibeperform-astro-page/de/...`.

## 4. Navigation & Routing Best Practices
- `NavBar.astro` is the single source of truth for navigation markup. When creating new pages, import it instead of rebuilding headers.
- Set `homeHref` using the `/vibeperform-astro-page` prefix so deployments under a project subpath keep working.
- Each page’s locale toggle (`alternateLocaleHref`) should point to the equivalent page in the other language. Keep these links absolute to the project root (e.g. `/vibeperform-astro-page/de/workshops`).
- Use `npm run build` to validate that generated asset paths respect the base path before publishing.

## 5. Styling & Color System
- Tailwind classes provide the primary styling. To change global colours, edit `src/styles/global.css` and extend the Tailwind config if you need custom tokens.
- For consistent backgrounds and typography, rely on Tailwind palette tokens (`bg-white`, `text-slate-900`, etc.) rather than hard-coded hex values.
- When updating colour usage:
  1. Adjust the tailwind class at the component level.
  2. Audit dark/light contrast using Tailwind’s numbered scale (`slate-500`, `slate-700`) for predictable accessibility.
  3. Keep reuse high—if you find repeated overrides, graduating colours into Tailwind’s theme configuration avoids duplication.
- Buttons and links use shared patterns (`Button.astro` and NavBar classes). Update those components first so colour tweaks cascade everywhere.

## 6. Managing Text & Localisation
- Centralise shared copy in `src/data/homeContent.ts`. Each locale has a `nav`, `hero`, and `features` block. Update copy here instead of editing multiple components.
- Honour the structure:
  - `nav.links` controls both label text and target URLs. Use absolute URLs that include `/vibeperform-astro-page` so navigation works in production.
  - `hero` strings feed the landing page hero via `HomePage.astro`.
  - `features.items` is an array; keep copy concise to preserve layout on mobile.
- For page-specific content (e.g., `/workshops`), edit the relevant `.astro` file. Maintain parity between English and German versions to keep toggles symmetrical.
- When adding a new locale:
  1. Duplicate the page structure under a new directory (e.g., `src/pages/fr/`).
  2. Extend `homeContent` with the new locale key.
  3. Provide translations for every navigation label and feature string before exposing the locale toggle.

## 7. Deployment Guidance
- The site expects the `/vibeperform-astro-page` prefix. If you deploy elsewhere, update:
  - `homeHref` derivation in `HomePage.astro`
  - All hard-coded `homeHref` and locale URLs in the content pages
  - The navigation links in `homeContent.ts`
- Keep CI/CD on Node 20 (`actions/setup-node` already pins it). Regenerate `package-lock.json` only with that version to avoid inconsistencies.
- After each deploy, smoke-test both locales, the locale toggle, and static assets (`favicon.svg`, CSS) to confirm base URLs are correct.

## 8. Recommended Workflow
1. Branch from `master`.
2. Implement UI/content updates in the component or data file where the copy lives.
3. Run `npm run dev` for live feedback; run `npm run build` before opening a PR.
4. Verify navigation links and language toggles manually in both locales.
5. Commit with a concise, descriptive message and open a review-ready PR.

Following this checklist keeps the marketing site consistent, accessible, and production-ready with minimal effort.
