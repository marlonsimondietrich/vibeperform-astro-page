## Relevant Files

- `src/components/RotatingHeadline.astro` - Existing rotating headline component to be enhanced with scrolling animation.
- `src/components/HomePage.astro` - Consumes the rotating headline in the hero section; may need adjustments for layout or props.
- `src/data/homeContent.ts` - Holds localized word lists and intervals; verify configuration compatibility.
- `src/styles/global.css` - Potential location for shared animation tokens or custom properties, if required.
- `tests` (if available) - Add or update tests ensuring the headline always renders the first word.

### Notes

- Respect `prefers-reduced-motion` when defining animations.
- Confirm Tailwind utilities or global styles do not conflict with overflow handling for the rotating container.

## Tasks

- [ ] 1.0 Audit Existing Hero Rotation Implementation
  - [x] 1.1 Review current `RotatingHeadline.astro` structure and script behavior
  - [x] 1.2 Identify dependencies in `HomePage.astro` and styles impacting the hero headline
- [ ] 2.0 Define CSS-Based Sliding Animation Approach
  - [x] 2.1 Draft desired animation sequence and easing respecting PRD goals
  - [x] 2.2 Specify reduced-motion behavior and fallback strategy
- [ ] 3.0 Implement Simultaneous Downward Slide Transition
  - [x] 3.1 Update component markup to support stacked words and overflow handling
  - [x] 3.2 Add CSS animations for synchronized downward sliding
  - [x] 3.3 Integrate timing logic to trigger animations on interval
- [ ] 4.0 Ensure Accessibility, Responsiveness, and Fallbacks
  - [x] 4.1 Verify first word renders immediately and remains visible on failures
  - [x] 4.2 Adjust layout for mobile font sizes without clipping or CLS
  - [x] 4.3 Implement reduced motion preference handling and basic non-animation fallback
- [ ] 5.0 Validate Performance and Update Documentation
  - [ ] 5.1 Smoke test animation in dev build and document checklist results
  - [ ] 5.2 Update PRD task list and code comments/documentation as needed
