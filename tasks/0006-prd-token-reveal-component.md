# Token Reveal Text Component PRD

## 1. Introduction / Overview
- Build a reusable text reveal component for the Workshops hero section that displays prewritten marketing copy by revealing tokens sequentially.
- Ensure the component supports AI consultancy storytelling needs (attention-grabbing, subtle motion, narrative pacing) without causing layout shifts.
- Deliver a solution that can be adopted elsewhere with minimal effort once proven in the Workshops hero.

## 2. Goals
- Present the Workshops hero intro text through a smooth token-by-token reveal that captures visitor attention, reinforces story beats, and feels premium.
- Guarantee the text block’s final footprint is reserved up-front so cumulative layout shift (CLS) remains 0.
- Respect motion preferences via `prefers-reduced-motion` and provide configurable pacing/tokenization for content authors or developers.

## 3. User Stories
- As a visitor landing on the Workshops page, I want the hero text to reveal itself in a smooth rhythm so I’m drawn into the narrative without being overwhelmed.
- As a marketing team member, I want to drop prewritten copy into the component and tune reveal speed/token granularity so the storytelling aligns with our AI consultancy positioning.
- As a developer maintaining the site, I want a reusable Astro component that plugs into data-driven content files with minimal markup changes.

## 4. Functional Requirements
1. The system must offer an Astro component that accepts a string of hero copy and renders it by progressively revealing tokens until the full message is displayed.
2. The component must reserve space equal to the fully rendered text before the animation starts to avoid layout shifts.
3. The component must allow per-instance configuration of delay between tokens and token granularity (e.g., word vs. character) while providing sensible defaults.
4. The component must automatically split copy into tokens but allow injection of a custom tokenizer function to handle locale-specific or storytelling needs.
5. The component must respect the visitor’s `prefers-reduced-motion` setting by displaying the full text immediately when reduction is requested.
6. The component must be compatible with existing Workshops hero data structures (e.g., `workshopsContent.ts`) without requiring breaking changes to data files.
7. The component must expose simple props so the Workshops page can be updated with minimal new markup.

## 5. Non-Goals (Out of Scope)
- Implementing analytics or instrumentation to track reveal completion events.
- Adding pause/resume on hover, scroll-triggered playback, or other complex interaction controls.
- Applying the component across all pages; initial release targets only the Workshops hero section.

## 6. Design Considerations
- Apply existing typography tokens for hero intro text to maintain visual consistency.
- Ensure the timing and animation feel confident and deliberate, matching the consultancy’s tone—no overly playful easing or flashy effects.
- Confirm readability for both English and German hero copy, including longer sentences and locale-specific punctuation.

## 7. Technical Considerations
- Implement as an Astro component rendered client-side with inline script for progressive reveal.
- Pre-measure the text using hidden DOM elements to compute width/height and set CSS custom properties that lock layout.
- Provide hooks for future reuse in data-driven sections (e.g., homepage) by keeping API generic and documented.
- Handle hydration only when needed (no heavy frameworks); prefer vanilla DOM manipulation to keep bundle small.

### Proposed Component API
- `text: string` (**required**) – Full copy string to reveal sequentially.
- `tokenDelay?: number` (default `80`) – Delay in milliseconds between token reveals.
- `granularity?: 'word' | 'character'` (default `'word'`) – Controls built-in tokenization mode.
- `tokenizer?: (text: string) => string[]` (default `undefined`) – Optional override enabling custom token splitting; takes precedence over `granularity`.
- `className?: string` (default `''`) – Additional classes forwarded to the wrapper for layout/typography control.
- `onComplete?: () => void` (default `undefined`) – Optional callback invoked when the full text is revealed; noop if omitted (reserved for future use).

### Integration Notes
- Replace the Workshops hero introduction paragraph with `<TokenReveal text={hero.intro} className="text-base text-slate-600 sm:text-lg md:text-xl" />` to preserve existing typography.
- Adjust `tokenDelay` when locale pacing feels off; 80–100 ms works well for 2–4 sentence intros.
- Provide a custom `tokenizer` when locale-specific punctuation should stay grouped (see component README for an example).

## 8. Success Metrics
- Workshops hero text render introduces zero measurable CLS (target CLS contribution: 0.000).
- Component respects `prefers-reduced-motion` and passes accessibility audit checks related to motion.
- Marketing feedback confirms the animation cadence supports storytelling goals without distracting or feeling sluggish.

## 9. Decisions & Open Questions
- Default timing is a single global value (`tokenDelay = 80ms`) that works for both EN and DE; teams can override per instance if pacing feels off.
- Default granularity remains word-based using a whitespace-aware splitter that keeps punctuation attached; authors can swap to character-level or custom tokenizers via props when needed.
- Component will ship under a generic name (`TokenReveal`) anticipating future reuse; additional rollouts will happen after Workshops adoption feedback.

**Remaining open questions:** None at this time.
