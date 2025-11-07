## Relevant Files

- `docs/landingpage.tsx` - Existing React implementation that defines all content, structure, and styling to mirror in Astro.
- `src/pages` - Destination directory for the new `landing.astro` route; review existing page setups for layout conventions.
- `src/components` - Potential home for shared Astro components (e.g., FeatureCard, ProcessStep, FaqItem) to keep markup reusable.
- `src/styles/global.css` - Ensures Tailwind and global styles are loaded consistently across pages.
- `docs/components/README.md` - Documents icon usage expectations; confirm equivalent Astro icon source or create one if missing.

### Notes

- Confirm where the reusable icon set should live in the Astro codebase (e.g., create `src/components/icons.ts` or inline SVGs).
- Align new route naming (`landing.astro` vs. replacing `index.astro`) with project navigation before implementation.

## Tasks

- [ ] 1.0 Assess existing Astro page patterns, Tailwind setup, and icon sources needed for the landing page migration
  - [ ] 1.1 Review `src/pages/workshops.astro` and other Astro routes to confirm layout wrappers, head metadata patterns, and base URL usage
  - [ ] 1.2 Audit `src/styles/global.css` and Tailwind config to ensure classes from the React page exist and identify any needed additions
  - [ ] 1.3 Locate or plan the Astro equivalent of `./components/Icons` (e.g., create `src/components/icons.ts` or inline SVGs) and verify icon exports cover required symbols
- [ ] 2.0 Scaffold `src/pages/landing.astro` with global layout wrappers, metadata, and background/hero shell matching the React page
  - [ ] 2.1 Create `src/pages/landing.astro` using the project’s standard frontmatter and `<html>` structure
  - [ ] 2.2 Import global styles and apply page-level classes (`bg-slate-900 text-slate-300 antialiased selection:bg-purple-500 selection:text-white`)
  - [ ] 2.3 Implement SVG background pattern and gradient blob positioning, ensuring z-index layering matches React
  - [ ] 2.4 Recreate header/nav markup with `SparklesIcon` and brand text, preserving Tailwind utilities
- [ ] 3.0 Port hero, deliverables, and process sections with Tailwind parity and responsive spacing
  - [ ] 3.1 Translate hero headline, body copy, and CTA button with identical classes and mailto link
  - [ ] 3.2 Build “Was wir liefern” grid using FeatureCard structure, ensuring icon rendering and hover states replicate React
  - [ ] 3.3 Implement “Unser Vorgehen” process steps with number badges, subtitles, and supporting text; include the time commitment highlight box
- [ ] 4.0 Port remaining sections (use cases through footer) and ensure icon integration mirrors React behavior
  - [ ] 4.1 Build “Typische Anwendungsfelder” cards with list items and section spacing parity
  - [ ] 4.2 Implement “Ergebnisse” grid and “Datenschutz & Sicherheit” flex layout with Shield icon block
  - [ ] 4.3 Port “Für wen ist das gedacht?”, “Nächste Schritte” (including CTA), and “Kurz-FAQ” cards with matching typography and list semantics
  - [ ] 4.4 Recreate footer contact block, external link attributes, and closing note styling
- [ ] 5.0 Validate visual parity, responsive behavior, accessibility, and document follow-ups on open questions
  - [ ] 5.1 Manually verify layout at mobile, tablet, and desktop widths; capture discrepancies for adjustment
  - [ ] 5.2 Check focus states, hover transitions, and icon accessibility (aria-hidden or labeling) align with React behavior
  - [ ] 5.3 Answer or document decisions on open questions (route replacement, data centralization, analytics) and add notes to PRD or task file
