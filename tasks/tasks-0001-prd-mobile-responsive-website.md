## Relevant Files

- `src/components/NavBar.astro` - Primary navigation component requiring mobile collapse behavior and accessibility updates.
- `src/components/HomePage.astro` - Aggregates homepage sections and layout spacing that must adapt across breakpoints.
- `src/components/Button.astro` - Shared CTA styles that need consistent touch target sizing.
- `src/pages/index.astro` - Entry page wiring HomePage component; may require meta updates for mobile tuning.
- `src/pages/de/index.astro` - German locale entry that must mirror responsive improvements.
- `src/styles/global.css` - Tailwind/global styles where responsive tokens and utilities are configured.
- `astro.config.mjs` - Ensure build assets and image handling align with responsive media needs.

### Notes

- `npm run build` currently fails under Node v18.15.0; upgrade to >=18.20.8 before running Astro builds.
- Use `npm run preview` with device emulation to validate responsive behavior before release.

## Tasks

- [x] 1.0 Establish responsive design foundations and spacing tokens
  - [x] 1.1 Audit existing Tailwind configuration and global styles to confirm breakpoint coverage aligned with ≤640px, 641–1024px, ≥1025px ranges.
  - [x] 1.2 Define mobile-first typography scale, spacing tokens, and utility classes for consistent vertical rhythm across sections.
  - [x] 1.3 Document responsive design tokens in project notes or README to guide future contributors.
- [x] 2.0 Implement mobile-first navigation experience
  - [x] 2.1 Redesign `NavBar.astro` structure to support a hamburger toggle pattern on widths ≤768px.
  - [x] 2.2 Add accessible toggle logic (focus trap, ARIA attributes, keyboard support) using Astro client interactivity where necessary.
  - [x] 2.3 Ensure locale switcher and CTA remain visible/tappable with ≥44px hit area across breakpoints.
- [x] 3.0 Reflow hero and conversion modules for small screens
  - [x] 3.1 Update hero layout to stack kicker, headline, subline, and CTAs with readable typography on narrow viewports.
  - [x] 3.2 Adjust CTA buttons and secondary links for touch spacing, including `Button.astro` refinements if needed.
  - [x] 3.3 Optimize hero media assets (illustrations/video) for responsive loading and maintain CLS ≤0.1.
- [x] 4.0 Adapt content sections to responsive grids and media handling
  - [x] 4.1 Refactor features/cards grid to collapse gracefully (desktop 3 columns → tablet 2 → mobile 1) with balanced spacing.
  - [x] 4.2 Prepare shared grid/tab/timeline utilities so additional sections (Problem->Loesung, Business-Mehrwert, etc.) can inherit responsive behavior.
  - [x] 4.3 Apply responsive image handling (`picture`, `srcset`, `loading="lazy"`) to section media and audit for overflow issues.
- [ ] 5.0 Validate accessibility, performance, and implementation handoff
  - [ ] 5.1 Run `npm run build` and any available automated tests or lint checks to confirm stability.
  - [ ] 5.2 Perform Lighthouse mobile audit plus manual keyboard/touch QA on popular devices (iPhone SE, Pixel, iPad).
  - [ ] 5.3 Capture before/after notes or screenshots and summarize responsive guidelines for handoff to marketing and design teams.
