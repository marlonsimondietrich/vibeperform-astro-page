# Rotating Hero Headline Animation PRD

## Introduction / Overview
Transform the landing page hero headline word rotation so that each word transition delivers a premium, kinetic feel. Instead of a hard swap, the outgoing word should scroll downward while the incoming word simultaneously scrolls downward from above, reinforcing the "speed" messaging for prospective clients evaluating Vibeperform on the homepage.

## Goals
- Deliver a performant, visually polished hero headline animation that aligns with brand perception.
- Ensure the rotating headline works flawlessly across breakpoints, including mobile and tablet.
- Provide motion alternatives that respect user accessibility preferences (reduced motion) without breaking the experience.
- Guarantee the hero headline always displays at least one word, even if animation fails.

## User Stories
- As a prospective client visiting the landing page, I want the hero headline to animate smoothly so I perceive Vibeperform as fast and high quality.
- As a mobile visitor, I want the rotating headline to fit the viewport without layout shifts so the message stays readable.
- As a user with reduced-motion preferences, I want a gentle or static experience without losing the core headline content.

## Functional Requirements
1. The hero headline must animate the final word segment by simultaneously sliding the current word downward and the next word into view from above, every two seconds by default.
2. The animation must run across all supported breakpoints, adjusting font sizing and spacing to prevent clipping or layout shift (≤0.01 CLS) on mobile devices.
3. The component must respect the operating system's `prefers-reduced-motion` setting by disabling or significantly softening the animation while still cycling words.
4. The implementation must guarantee the first word from the configuration is visible immediately on page load, with no blank state even if animation is interrupted.
5. The word list and interval values should remain configurable via the existing home content data structures for both EN and DE locales.
6. Degradation path: if CSS animations are unsupported, the component falls back to a simple fade or static display that keeps the first word visible.

## Non-Goals (Out of Scope)
- Introducing CMS-driven authoring of word lists or intervals beyond the existing TypeScript data files.
- Applying the slide animation to other sections; only the hero headline is affected.
- Adding new third-party animation libraries or global animation frameworks.

## Design Considerations
- Ensure typography and spacing match existing hero styling (`text-4xl` through `text-6xl`) with no perceivable jump between language locales.
- Provide a clear visual hierarchy where the rotating word remains aligned with the rest of the headline text.
- Consider subtle easing (`ease-in-out`) to emphasize simultaneous downward motion without appearing playful or distracting.

## Technical Considerations
- Favor CSS transitions/animations for the sliding effect; limit JavaScript to minimal class toggling or timing control if needed.
- Keep the component compatible with Astro's SSR + hydration model; avoid assumptions about client-only rendering.
- Account for Tailwind utility usage or inline styles for overflow handling to prevent word clipping.
- Write unit or component-level tests (if feasible) to ensure the rotation logic always sets an initial word.

## Success Metrics
- Animation achieves or approximates 60fps on mid-tier mobile and desktop devices (no dropped frames in Chrome DevTools performance sampling).
- Core Web Vitals remain within acceptable thresholds, specifically cumulative layout shift ≤0.01 during word transitions.
- Zero user-reported issues where the hero headline appears blank or stuck on an intermediate state.

## Open Questions
- Should the animation pause when the hero section is not in the viewport (for performance savings)?
- Do we need to synchronize the animation timing with other hero elements (e.g., call-to-action button hover states)?
- Would a short delay before the first rotation (e.g., 500ms) improve readability while preserving the desired effect?
