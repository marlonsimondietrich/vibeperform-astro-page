## Relevant Files

- `src/components/NavBar.astro` - Primary navigation component requiring mobile collapse behavior and accessibility updates.
- `src/components/HomePage.astro` - Aggregates homepage sections and layout spacing that must adapt across breakpoints.
- `src/components/Button.astro` - Shared CTA styles that need consistent touch target sizing.
- `src/pages/index.astro` - Entry page wiring HomePage component; may require meta updates for mobile tuning.
- `src/styles/global.css` - Tailwind/global styles where responsive tokens and utilities are configured.
- `astro.config.mjs` - Ensure build assets and image handling align with responsive media needs.

### Notes

- Run `npm run build` to ensure Astro compilation passes after structural changes.

## Tasks

- [ ] 1.0 Establish responsive design foundations and spacing tokens
- [ ] 2.0 Implement mobile-first navigation experience
- [ ] 3.0 Reflow hero and conversion modules for small screens
- [ ] 4.0 Adapt content sections to responsive grids and media handling
- [ ] 5.0 Validate accessibility, performance, and implementation handoff
