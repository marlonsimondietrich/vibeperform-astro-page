## Relevant Files

- `src/components/TokenReveal.astro` - Houses the new token-by-token text reveal component.
- `src/components/WorkshopsPage.astro` - Renders the Workshops hero section where the component will be embedded.
- `src/pages/workshops.astro` - Page entry point; ensure hydration/scripts load correctly after component integration.
- `src/data/workshopsContent.ts` - Provides hero copy in EN/DE that will feed the component.
- `src/styles/global.css` - Potential place for any shared utility styles or motion tokens if required.
- `docs/components/README.md` - Add usage notes if a component documentation folder already exists (create if missing).

### Notes

- Run `npm run build` to ensure Astro builds cleanly after implementation.
- Current environment uses Node 18.15.0; Astro build requires >=18.20.8, so upgrade Node before running the build command successfully.
- Respect the task execution protocol: finish one sub-task at a time and wait for explicit approval before moving to the next.

## Tasks

- [x] 1.0 Define Token Reveal component scope and API surface
  - [x] 1.1 Review existing Workshops hero markup/data flow to confirm integration requirements.
  - [x] 1.2 Draft component props (text, tokenDelay, tokenizer, className) and document default behaviors.
  - [x] 1.3 Resolve open questions about default timing/tokenization strategy for EN vs. DE and record the decision.
- [x] 2.0 Implement progressive reveal logic with layout reservation and motion preferences
  - [x] 2.1 Scaffold the Astro component structure with measurement container, content slot, and inline script entry point.
  - [x] 2.2 Implement tokenization and sequencing logic supporting configurable delay and custom tokenizer injection.
  - [x] 2.3 Add layout reservation via hidden measurement, reduced-motion handling, and clean-up guards for unmounted nodes.
  - [x] 2.4 Style the component (CSS variables, wrapper sizing) to ensure seamless typography alignment with hero text.
- [x] 3.0 Wire component into Workshops hero content flow (data + page markup)
  - [x] 3.1 Update Workshops hero markup to replace the static intro paragraph with the new component.
  - [x] 3.2 Ensure content from `workshopsContent.ts` flows into the component for both EN and DE locales.
  - [x] 3.3 Verify hydration triggers only where needed and no additional scripts execute for other hero elements.
- [x] 4.0 Add documentation and usage guidance for future reuse
  - [x] 4.1 Document component props, defaults, and example usage in the docs directory (create file if needed).
  - [x] 4.2 Note integration guidance inside the PRD or README, including how to tune timing/tokenization.
- [x] 5.0 Validate accessibility, performance, and answer PRD open questions
  - [x] 5.1 Test with actual EN/DE hero copy to confirm readability, pacing, and absence of layout shift.
  - [x] 5.2 Confirm `prefers-reduced-motion` compliance and overall accessibility (screen reader announcements).
  - [x] 5.3 Capture final answers to PRD open questions and update documentation or PRD notes accordingly.
