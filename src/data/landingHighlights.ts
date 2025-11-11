export type LandingLocale = "en" | "de";

export const landingHighlightsContent = {
  en: {
    applications: {
      heading: "Typical application areas",
      description: "Where we see quick wins for mid-sized teams.",
      cards: [
        {
          icon: "barChart3",
          title: "Sales",
          items: [
            "Lead prioritisation",
            "Proposal & email assistant",
            "Call preparation",
          ],
        },
        {
          icon: "users",
          title: "Customer service",
          items: [
            "Knowledge assistant (RAG)",
            "Ticket triage",
            "Draft replies with quality check",
          ],
        },
        {
          icon: "briefcase",
          title: "Operations",
          items: [
            "Document extraction",
            "Review & approval assistants",
            "Standard reporting",
          ],
        },
      ],
    },
    security: {
      heading: "Data protection & security",
      body: [
        "We work fully GDPR-compliant, use secure setups such as isolated tenants, API-based processing, and data minimisation, and sign NDAs whenever required. Private cloud and on-prem deployments are part of our toolkit.",
      ],
      highlight:
        "No training on your proprietary data without explicit approval.",
    },
    audience: {
      heading: "Who is this for?",
      description:
        "Executives, sales/service/operations leads, and IT or data teams who want fast, dependable AI decisions.",
    },
  },
  de: {
    applications: {
      heading: "Typische Anwendungsfelder",
      description: "Wo wir schnelle Ergebnisse für mittelständische Teams sehen.",
      cards: [
        {
          icon: "barChart3",
          title: "Vertrieb",
          items: [
            "Lead-Priorisierung",
            "Angebots- & Mail-Assistent",
            "Call-Vorbereitung",
          ],
        },
        {
          icon: "users",
          title: "Kundenservice",
          items: [
            "Wissensassistenz (RAG)",
            "Ticket-Triage",
            "Antwort-Entwürfe mit Qualitätscheck",
          ],
        },
        {
          icon: "briefcase",
          title: "Operations",
          items: [
            "Dokumenten-Extraktion",
            "Prüf- & Freigabe-Assistenten",
            "Standardberichte",
          ],
        },
      ],
    },
    security: {
      heading: "Datenschutz & Sicherheit",
      body: [
        "Wir arbeiten DSGVO-konform, nutzen sichere Setups wie isolierte Tenants, API-basierte Verarbeitung und Datenminimierung und schließen bei Bedarf NDA. Private Cloud und On-Prem-Szenarien sind Teil unseres Werkzeugkastens.",
      ],
      highlight:
        "Kein Training auf euren proprietären Daten ohne ausdrückliche Freigabe.",
    },
    audience: {
      heading: "Für wen ist unser Angebot gemacht?",
      description:
        "Geschäftsführungen, Leitungen in Vertrieb/Service/Operations sowie IT- oder Daten-Teams, die schnelle, belastbare KI-Entscheidungen wollen.",
    },
  },
} as const;

export const landingIconKeys = [
  "barChart3",
  "users",
  "briefcase",
  "shieldCheck",
] as const;

export type LandingIconKey = (typeof landingIconKeys)[number];
