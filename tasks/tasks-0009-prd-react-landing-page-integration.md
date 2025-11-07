## Relevant Files

- `src/components/ReactLandingPage.tsx` - React landing page component rendered via Astro.
- `src/components/icons.tsx` - Custom SVG icon exports consumed by the React page.
- `src/pages/landing-react.astro` - Astro route hydrating the React landing page at `/landing-react`.
- `src/styles/global.css` - Loads Tailwind utilities needed by the hydrated component.
- `astro.config.mjs` - Registers the React integration for Astro.
- `package.json` / `package-lock.json` - Contain React integration dependencies.

### Notes

- Run `npx astro add react` to install the React renderer; include resulting config and dependency changes in version control.
- After moving files, update import paths and confirm Tailwind’s content scan picks up all class strings (add safelist entries if purge issues appear).
- New route lives at `/landing-react`; no navigation link is required unless decided later.

## Tasks

- [ ] 1.0 Install and configure Astro’s React integration to enable client-side hydration
  - [x] 1.1 Run `npx astro add react` and accept prompts to add `@astrojs/react`, `react`, and `react-dom`
  - [x] 1.2 Commit or stage updates to `astro.config.mjs`, `package.json`, and `package-lock.json` from the integration
  - [ ] 1.3 Confirm dev server still launches (`npm run dev`) and no integration warnings appear
- [ ] 2.0 Relocate the React landing page and icon modules into `src` with updated imports
  - [x] 2.1 Move `docs/icons.tsx` to `src/components/icons.tsx` (adjust export paths if needed)
  - [x] 2.2 Move `docs/landingpage.tsx` to `src/components/ReactLandingPage.tsx` and update icon import to the new location
  - [x] 2.3 Verify other dependencies (e.g., types, styles) resolve correctly after relocation
- [ ] 3.0 Create the `landing-react.astro` route that renders the React page with `client:load`
  - [x] 3.1 Add `src/pages/landing-react.astro` importing global styles if required
  - [x] 3.2 Import `ReactLandingPage` and render it using `<ReactLandingPage client:load />`
  - [x] 3.3 Configure minimal `<html>` and `<head>` metadata (title, lang) to mirror project conventions
- [ ] 4.0 Verify styling, icons, and Tailwind utilities render correctly on `/landing-react`
  - [ ] 4.1 Run the dev server and visit `/landing-react` to visually confirm parity with the React source
  - [ ] 4.2 Inspect Tailwind classes (including bracketed utilities) to ensure none were purged; adjust config safelist if necessary
  - [ ] 4.3 Perform a production build (`npm run build && npm run preview`) to verify the static output renders the React page
- [ ] 5.0 Document the new route location and any parity considerations with the Astro landing page
  - [ ] 5.1 Update project README or docs to note the `/landing-react` route and how it differs from `landing.astro`
  - [ ] 5.2 Record any known differences or TODOs (e.g., navigation links, synchronization plan) linked to the PRD’s open questions
