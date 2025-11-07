# React Landing Page Integration PRD

## Introduction/Overview
Expose the existing React landing page (`docs/landingpage.tsx`) inside the Astro site as a new route `/landing-react`. The current Astro-built landing page (`src/pages/landing.astro`) stays intact; the React version is rendered alongside it using Astro’s React integration with client-side hydration so the site remains static-host friendly.

## Goals
- Create a new Astro route that renders the React landing page component with `client:load`, served at `/landing-react` (respecting the site `base` path).
- Keep the original Astro landing page untouched so both versions coexist.
- Ensure all icons, gradients, Tailwind classes, and hover behaviors from the React implementation are preserved by importing the existing icon set from `docs/icons.tsx`.

## User Stories
- As a stakeholder, I can access `/landing-react` and see the original React landing page exactly as designed, including animations and styling.
- As a developer, I can maintain the React landing page source in the Astro project without losing any existing Astro routes or build outputs.
- As a content editor, I can update the React component or Astro version independently, knowing both routes deploy through the same static pipeline.

## Functional Requirements
1. Add Astro’s React integration to the project (`npx astro add react` or equivalent manual configuration) so React components can hydrate on the client.
2. Relocate `docs/landingpage.tsx` into the Astro source tree (e.g., `src/components/ReactLandingPage.tsx`) while adjusting import paths for supporting modules.
3. Move `docs/icons.tsx` into the Astro source (e.g., `src/components/icons.tsx`) and update the React landing page imports to reference the new location.
4. Ensure Tailwind utility classes used in the React component are recognized by the build (update `tailwind.config.mjs` content paths or safelist as needed).
5. Create a new Astro page at `src/pages/landing-react.astro` that:
   - Imports global styles if required by project convention.
   - Imports the relocated React landing page component.
   - Renders the component with `client:load` without additional Astro layout wrappers.
   - Sets the `<html lang>` and `<head>` metadata appropriately (can mirror `landing.astro` or keep minimal metadata).
6. Confirm that visiting `/landing-react` in dev and preview builds renders the React landing page with all original visual details (background gradients, icons, hover states).
7. Update documentation or README as necessary to explain where the React page lives and how to access it.

## Non-Goals
- Do not replace or delete the existing Astro landing page (`src/pages/landing.astro`).
- Do not refactor the React component’s markup or styling beyond path/import adjustments.
- Do not introduce SSR for the React page; client-side hydration only.
- Do not add automated testing or CI changes.

## Design Considerations
- Preserve the React component’s Tailwind classes; verify that bracketed utilities (e.g., `left-[calc(50%-4rem)]`) are not purged.
- Maintain icon fidelity by using the bespoke SVG components from `docs/icons.tsx`; avoid substituting third-party icon packages.
- Keep the React page standalone within the Astro route (no extra Astro headers/footers) for parity with the original design.

## Technical Considerations
- Astro’s React integration adds dependencies (`@astrojs/react`, `react`, `react-dom`) and updates `astro.config.mjs`; ensure `package.json`/`package-lock.json` capture these changes.
- When moving the React files, adjust relative imports (e.g., icon paths) and update TypeScript/TSX compiler options if necessary.
- Confirm that the new page path respects the configured `base` (`/vibeperform-astro-page/landing-react`) and update any internal links if you add them later.
- Keep the component exported as default (`export default App;`) so Astro can import it directly.

## Success Metrics
- `/landing-react` renders identically to the current `docs/landingpage.tsx` when viewed locally and in Astro preview build.
- Static build (`npm run build`) completes without errors and outputs the new route without requiring server-side processing.
- Deployment via GitHub Pages continues to succeed with the React integration in place.

## Open Questions
- Should we add navigation links pointing to `/landing-react`, or leave it as a hidden/preview route?
- Do we need to document a process for keeping the React and Astro landing pages in sync (e.g., shared content source)?
- Are there plans to remove the Astro version once the React route is validated?
