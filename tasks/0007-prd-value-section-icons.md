# Value Section Icons PRD

## 1. Introduction / Overview
We want to enhance the “Why teams work with us” value section in `WorkshopsPage.astro` by adding Lucide icons to each value card. Icons should sit above the existing titles to reinforce the high-level theme of each bullet and make the section easier to scan.

## 2. Goals
- Help visitors understand each value card’s theme at a glance by pairing it with an icon.
- Preserve the current clean visual style by reusing the slate palette and spacing conventions.
- Keep content localized for both English and German while allowing icon selection per bullet.

## 3. User Stories
- As a prospective client skimming the page, I want visual cues for each value so I can quickly grasp what working with Vibeperform delivers.
- As a marketing editor, I want to choose which Lucide icon appears on each bullet so the icon matches the message.
- As a developer, I want the icon configuration to live alongside existing content data so updates require no template changes.

## 4. Functional Requirements
1. The value cards must display a Lucide icon above the title within each bullet.
2. Each bullet must support a manually specified icon name so different cards can use different icons.
3. Icons must render using the existing slate color palette (e.g., `text-slate-900` / `text-slate-500`) and respect current spacing rhythm.
4. The icon element must remain accessible: include descriptive alt text via `aria-label` or a visually hidden text node.
5. The content source (`workshopsContent.ts`) must expose icon metadata for both `en` and `de` value bullets.
6. The implementation must rely on the `lucide-static` package already in the project (or be added if missing) and avoid loading entire icon sets at runtime.

## 5. Non-Goals
- Changing copy, order, or number of value bullets.
- Introducing animations or interactive behavior for the icons.
- Modifying other sections (offerings, proof, etc.).

## 6. Design Considerations
- Icons sit centered above the title, matching the current card padding and aligning with the grid layout.
- Use existing slate color tokens (e.g., `text-slate-500` or `text-slate-600`) to keep visual harmony.
- Icon size should balance with the `text-lg` title—anticipated ~32–40px.

## 7. Technical Considerations
- Import icons from `lucide-static` using named exports (e.g., `import { Compass } from 'lucide-static';`).
- Consider creating a lightweight mapping helper in the component to translate icon names from content into actual icon components.
- Ensure bundler tree-shakes unused icons by importing only what we need.

## 8. Success Metrics
- Visual QA confirms each card displays its intended icon without layout regression on mobile and desktop breakpoints.
- Stakeholder feedback notes improved clarity of the value section (qualitative).

## 9. Open Questions
- Final icon choices per bullet (Compass? Cog? Shield?)—requires stakeholder confirmation.
- Acceptance criteria depth (visual QA only vs. adding tests) is still to be decided later per user direction.
