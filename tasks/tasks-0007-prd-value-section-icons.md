## Relevant Files

- `src/data/workshopsContent.ts` - Stores localized workshop copy; needs new `icon` keys for each value bullet.
- `src/components/WorkshopsPage.astro` - Renders the value cards; must import icons and update markup/styling.
- `tasks/0007-prd-value-section-icons.md` - Source PRD providing requirements and acceptance context.

### Notes

- Icon strings are fixed to `lightbulb`, `user-round-cog`, and `rocket`; align casing with Lucide component exports.
- Keep icon styling within the existing slate palette to preserve section aesthetics.
- Ensure accessibility by labeling icons or marking them decorative when redundant.
- `npm run build` currently fails locally because Node.js v18.15.0 is below Astro's requirement (>=18.20.8); visual QA pending manual run on supported version.

## Tasks

- [ ] 1.0 Add icon metadata to workshop value bullets
  - [x] 1.1 Confirm Lucide component names for `lightbulb`, `user-round-cog`, `rocket` (`Lightbulb`, `UserRoundCog`, `Rocket`)
  - [x] 1.2 Add `icon: 'lightbulb'` to each English value bullet in `workshopsContent.ts`
  - [x] 1.3 Add `icon: 'lightbulb'`/`'user-round-cog'`/`'rocket'` to each German value bullet in `workshopsContent.ts`
  - [x] 1.4 Verify `WorkshopsContent` types include the new `icon` property via the `as const` export
- [ ] 2.0 Import Lucide icons and map string keys to components
  - [x] 2.1 Import `Lightbulb`, `UserRoundCog`, `Rocket` from `lucide-static` in `WorkshopsPage.astro`
  - [x] 2.2 Create an icon map (e.g., `const valueIcons = { lightbulb: Lightbulb, ... }`)
  - [x] 2.3 Provide a default icon mapping for unexpected keys
- [ ] 3.0 Render icons above card titles with slate palette styling
  - [x] 3.1 Render the mapped icon component before each value card heading
  - [x] 3.2 Apply size and color classes (`w-10 h-10 text-slate-500`, etc.) matching the design spec
  - [x] 3.3 Adjust spacing utilities to maintain vertical rhythm after introducing icons
- [ ] 4.0 Ensure accessibility, localization symmetry, and fallbacks
  - [x] 4.1 Add accessible labeling (e.g., `aria-label` or hidden text) or mark icons decorative when appropriate
  - [x] 4.2 Handle missing or undefined icon keys gracefully (fallback icon or skip render)
  - [x] 4.3 Double-check both locales provide the same icon keys to avoid runtime gaps
- [ ] 5.0 Smoke-test layout (mobile/desktop) and capture verification notes
  - [ ] 5.1 Run the project locally (`npm run dev`) and visually QA the value cards at key breakpoints
  - [ ] 5.2 Document any follow-up tweaks or confirmed acceptance criteria in task notes
