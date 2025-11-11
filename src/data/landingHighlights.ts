export type LandingLocale = "en" | "de";

export const landingHighlightsContent = {
  en: {
    applications: {
      heading: "Typical application areas",
      description: "Where we see quick wins for mid-sized teams.",
      cards: [
        {
          title: "Document analysis",
          imageSrc: "/example1.png",
          imageAlt: "Document analysis illustration",
          description:
            "We extract the signal from contracts, maintenance forms, and insurance policies. Up to −70% capture effort.",
          examples: [
            "Contract reviews: clauses, terms, variances from standard wording.",
            "Maintenance/service reports: fault codes, actions, parts, next due date — historical log stays current.",
            "Insurance policies: coverage, deductibles, exclusions, durations — spot renewals in time.",
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
          title: "Dokumentenanalyse",
          imageSrc: "/example1.png",
          imageAlt: "Dokumentenanalyse Beispiel",
          description:
            "Wir extrahieren relevante Inhalte und machen Dokumente durchsuchbar. Bis zu −70 % Erfassungsaufwand.",
          examples: [
            "Vertragsanalyse: Klauseln, Fristen, Abweichungen zur Standardklausel.",
            "Wartungs-/Serviceberichte: Fehlercodes, Maßnahmen, Ersatzteile, nächste Fälligkeit – Historie wird aktualisiert.",
            "Versicherungsverträge & Policen: Deckungssummen, Selbstbehalte, Ausschlüsse, Laufzeiten – Erneuerungen erkennen.",
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
