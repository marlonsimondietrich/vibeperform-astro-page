# Localized Page Content Separation PRD

## Introduction / Overview
We need to align every existing Astro page (including language-specific routes) with the `Home` page pattern, where localized copy lives in dedicated TypeScript data modules instead of the `.astro` files. This keeps layout/presentation isolated from content, reduces merge conflicts, and makes it easier for developers or content contributors to manage translations.

## Goals
- Unify all pages under `src/pages/` so they source localized content from dedicated TypeScript modules.
- Maintain existing page layouts and content while improving maintainability and localization clarity.
- Ensure Astro builds continue to pass without additional configuration changes.

## User Stories
- As a developer, I can update any page content by editing a locale-specific data module and see the page render without touching the Astro layout code.
- As a contributor onboarding to the project, I can create a new localized page by duplicating a content module template, populate strings, and hook it up without changing how the page component is structured.
- As a reviewer, I can confirm navigation links and CTAs are localized correctly by inspecting the relevant data modules.

## Functional Requirements
1. Each page under `src/pages/` and its language-specific counterpart must import content from a TypeScript module located in `src/data/`.
2. Every content module must export an object keyed by locale (currently `en` and `de`) and typed so required fields cannot be omitted.
3. Astro page files must pass the appropriate locale slice to their components (or inline markup) in place of hard-coded strings.
4. Navigation labels, CTAs, and other localized text must come from the same content module that feeds the page.
5. The refactor cannot alter visible copy, URLs, or page structure beyond moving strings to data modules.
6. Local development (`npm run dev`) and production builds (`npm run build`) must complete without TypeScript, ESLint, or Astro warnings introduced by this change.

## Non-Goals (Out of Scope)
- Introducing new locales or modifying existing copy.
- Replacing or redesigning current page components or layouts.
- Switching to alternative formats (e.g., JSON/YAML) for storing content.
- Implementing CMS integration or runtime content editing.

## Design Considerations
- Follow the existing `HomePage` pattern: Astro page imports a component and passes `content[locale]`.
- Maintain the current component structure; do not standardize on a generic page shell at this time (component strategy remains TBD).
- Mirror file naming such as `src/data/<pageName>Content.ts` for consistency and discoverability.

## Technical Considerations
- Keep compatibility with the existing Astro + Tailwind build pipeline; no new dependencies.
- Use TypeScript types (`as const`, exported types) to catch missing or mismatched fields.
- Ensure locale detection and routing logic (e.g., `/de/` subpaths) continue to function without additional code changes.

## Success Metrics
- A new contributor can add or update localized content by editing `src/data/*.ts` files only, without touching `.astro` files.
- Developers report fewer merge conflicts related to content changes (tracked informally through PR feedback).
- Pages continue to build successfully in CI/CD with no new warnings.

## Open Questions
- Do we need shared TypeScript interfaces for repeating structures (e.g., navigation) to reduce duplication across content modules?
- Should we create simple scripts or documentation to verify that all locales export identical key sets?
- Are there upcoming locales that should influence how we design the content module structure?
