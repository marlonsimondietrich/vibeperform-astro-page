# TokenReveal Component

Reusable Astro component that reveals prewritten copy token by token while preserving layout stability.

## Props

- `text: string` (required) – Full string to render.
- `tokenDelay?: number` (default `80`) – Delay in milliseconds between token reveals.
- `granularity?: 'word' | 'character'` (default `'word'`) – Built-in token splitting mode.
- `tokenizer?: (text: string) => string[]` – Optional custom tokenizer; must return an array of strings. The function is serialized and rehydrated on the client, so avoid referencing closure state.
- `className?: string` – Additional classes appended to the wrapper for layout/typography styling.

## Usage

```astro
---
import TokenReveal from '../../src/components/TokenReveal.astro';
const introCopy = `We design and ship AI workflows with the teams who run them every day.`;
---

<TokenReveal
	text={introCopy}
	className="text-base text-slate-600 sm:text-lg md:text-xl"
	tokenDelay={90}
/>
```

## Behavior

- Reserves the full width/height of the target text before the animation starts, preventing layout shifts.
- Honors `prefers-reduced-motion` by rendering the full text immediately and skipping timeouts.
- Dispatches a bubbling `token-reveal:complete` event once the final token is rendered.
- Guards against orphaned timers if Astro swaps the page component.

## Custom Tokenization

Use the `tokenizer` prop when punctuation or sentence-level reveals are required:

```astro
<TokenReveal
	text={longStory}
	tokenizer={(value) => value.split(/(?<=[.!?])\s+/)} // sentence-level reveal
/>
```

When providing a custom tokenizer, ensure it returns an array of strings and handles locale-specific punctuation as needed.

