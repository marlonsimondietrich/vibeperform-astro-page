# Leistungen Page PRD

## 1. Introduction / Overview

Create a dedicated `Leistungen` page that presents the seven modular AI consulting offerings (Quickstart through Data & Integration Readiness) targeted at Mittelstand decision makers. The page should communicate the structure, outcomes, and prerequisites of each module in a clear, trustworthy tone and guide visitors toward booking a consultation.

## 2. Goals

- Provide a structured overview of the seven service modules with consistent formatting and scannable detail.
- Reinforce credibility by clearly stating objectives, deliverables, prerequisites, and timelines for each module.
- Encourage visitors to book a consultation as the primary call-to-action.

## 3. User Stories

- As a Mittelstand decision maker, I want to understand what AI consulting modules are offered so I can decide which fits my organization.
- As a prospective client, I want to evaluate the expected outcomes and prerequisites of each module to assess readiness and value.
- As a site visitor, I want a clear next step (book a consultation) once I identify an offering that fits my needs.

## 4. Functional Requirements

1. The page must display a hero/intro section summarizing the consulting approach and positioning the Leistungsbausteine.
2. The page must list the seven modules (`KI-Quickstart`, `Explore-Workshop`, `Design-Sprint "To-Be mit KI"`, `Pilot & Prototype`, `Roll-out & Enablement`, `Governance & Compliance (Light)`, `Data & Integration Readiness`) in order, each with:
   - Title and duration/location information where provided.
   - A short objective (`Ziel`) paragraph.
   - A structured breakdown of the process (`Ablauf` or `Vorgehen`) using ordered or unordered lists as supplied.
   - A highlighted deliverables/results section (`Ergebnisse`, `Technik`, `Abnahme`, `Liefergegenstände`) matching the source wording.
   - Prerequisites or required participants where supplied.
3. The module sections must respect the source formatting (bold emphasis, bullet hierarchy, timeline annotations) for readability.
4. A persistent or strategically placed primary CTA must be present (`Beratung buchen`), linking to the existing booking/contact flow (confirm URL with stakeholders).
5. The page must be responsive and align with the site’s existing typography and spacing tokens.
6. Internal navigation (e.g., anchor links or sticky sidebar) should be included if feasible to help users jump between modules.

## 5. Non-Goals (Out of Scope)

- Creating or modifying backend booking workflows.
- Adding new analytics or tracking scripts beyond existing site capabilities.
- Redesigning site-wide navigation or global layout.

## 6. Design Considerations

- Follow existing site components for headings, cards/sections, and primary buttons to maintain brand consistency.
- Ensure bold emphasis and list formatting mirror the provided copy for credibility.
- Content should remain primarily text-based; imagery is optional and only if existing assets are available.

## 7. Technical Considerations

- Implement as an Astro page within the existing `/src/pages/` structure, reusing shared layout components.
- Ensure markdown-like content (bold, lists) renders correctly—consider using MDX or Astro markdown support if needed.
- Verify CTA button routes to the correct booking URL (likely existing consultation page).

## 8. Success Metrics

- Visitors spend at least 60 seconds on the `Leistungen` page (proxy for content engagement).
- At least 30% of visitors scroll past the fourth module section.
- Increase consultation booking clicks from this page by 15% within the first month of launch.

## 9. Open Questions

- What exact URL/path should the `Beratung buchen` CTA target?
- Should anchor-based navigation be implemented (table of contents, sticky sidebar), and are there preferred interaction patterns?
- Are there any SEO keywords or meta descriptions that must be incorporated for this page?
- Are translations required (e.g., English version) now or in a later iteration?
