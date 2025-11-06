export const homeContent = {
	en: {
		nav: {
			brand: 'vibeperform',
			links: [
				{ label: 'AI Strategy', href: '/vibeperform-astro-page/ai-strategy' },
				{ label: 'Workshops', href: '/vibeperform-astro-page/workshops' },
				{ label: 'About us', href: '/vibeperform-astro-page/about-us' },
			],
			toggleLabel: 'DE',
			toggleAriaLabel: 'Switch language to German',
			menuToggleLabel: 'Toggle navigation menu',
		},
		hero: {
			kicker: 'AI service provider',
			title: '',
			rotatingWords: ['Understand AI.', 'Seize opportunities.', 'Gain efficiency.'],
			subtitle: 'Move from zero to clarity - with fast tech and AI-powered workflows.',
			primaryCta: 'Start Building',
			secondaryCta: 'See how it works',
			secondaryHref: '/vibeperform-astro-page/ai-strategy',
			callouts: [
				{ label: 'Speed', description: 'Weeks, not months' },
				{ label: 'Focus', description: 'Clear roadmaps' },
				{ label: 'Outcomes', description: 'Measured impact' },
				{ label: 'Trust', description: 'Compliance ready' },
			],
		},
		features: {
			kicker: 'From idea to adoption.',
			heading: 'How we work',
			subheading:
				'We deliver end-to-end: understand the real problems, choose or build the right solutions, embed them in everyday work, and make the impact measurable.',
			items: [],
			cta: {
				heading: 'Sounds like the right approach?',
				primary: {
					label: 'Book a free discovery call',
					href: 'mailto:hello@vibeperform.com',
				},
				secondary: {
					label: 'Explore workshops',
					href: '/vibeperform-astro-page/workshops',
				},
			},
		},
		useCases: {
			kicker: 'Use Cases',
			heading: 'Proven Use Cases',
			subheading: 'Fast to launch, easy to measure - drawn from real mid-market projects.',
			cards: [
				{
					category: 'Sales',
					title: 'Proposal Assistant',
					description: 'AI combines CRM and email context to draft proposals and follow-ups with clear next steps.',
					highlights: [
						'Proposal draft (PDF/Doc)',
						'Follow-up email (prewritten)',
						'Open questions & to-dos',
						'Source log',
					],
					toneClass: 'rose',
					icon: 'proposal',
				},
				{
					category: 'Customer Service',
					title: 'Knowledge Assistant (RAG)',
					description: 'Answers with quoted sources from manuals, tickets, and Confluence. Consistent tone, fast, and verifiable.',
					highlights: [
						'Draft response with citations',
						'Relevant passages/links',
						'Quality check (policy/tone)',
						'Ticket handover',
					],
					toneClass: 'indigo',
					icon: 'support',
				},
				{
					category: 'Operations',
					title: 'Document Extraction & Checks',
					description: 'Extracts fields, validates rules, and syncs to ERP with audit trail and variance report.',
					highlights: [
						'Extracted fields (JSON/CSV)',
						'PO vs. invoice reconciliation',
						'Variance report',
						'ERP posting incl. log',
					],
					toneClass: 'emerald',
					icon: 'operations',
				},
			],
		},
		audience: {
			heading: 'Who our AI offering is for',
			subheading:
				'We partner with mid-sized companies that want to noticeably improve their operations with AI and automation.',
			cards: [
				{ copy: '<strong>SMBs</strong> with ambition but limited capacity.' },
				{
					copy: '<strong>Sales, customer service, and operations teams</strong> as well as <strong>IT and data teams</strong> looking for relief in day-to-day work.',
				},
				{ copy: '<strong>Executive and department leaders</strong> who want fast, measurable results.' },
			],
		},
	},
	de: {
		nav: {
			brand: 'vibeperform',
			links: [
				// { label: 'KI Strategie', href: '/vibeperform-astro-page/de/ki-strategie' },
				{ label: 'Workshops', href: '/vibeperform-astro-page/de/workshops' },
				{ label: 'Über uns', href: '/vibeperform-astro-page/de/ueber-uns' },
			],
			toggleLabel: 'EN',
			toggleAriaLabel: 'Sprache zu Englisch wechseln',
			menuToggleLabel: 'Navigationsmenue oeffnen',
		},
		hero: {
			kicker: 'KI Beratung & Umsetzung',
			title: '',
			rotatingWords: ['KI verstehen.', 'Chancen nutzen.', 'Effizienz gewinnen.'],
			subtitle: 'Wir machen KI & Automatisierung für KMU rund um München umsetzbar.',
			primaryCta: 'Kontakt aufnehmen',
			secondaryCta: 'So arbeiten wir',
			secondaryHref: '/vibeperform-astro-page/de/ki-strategie',
			callouts: [
				{ label: 'Tempo', description: 'Wochen statt Monate' },
				{ label: 'Fokus', description: 'Klare Roadmaps' },
				{ label: 'Ergebnis', description: 'Messbarer Impact' },
				{ label: 'Vertrauen', description: 'Compliance inklusive' },
			],
		},
		features: {
			kicker: 'Von der Idee bis zur Umsetzung.',
			heading: 'So arbeiten wir',
			subheading:
				'Wir bieten End-to-End: echte Probleme verstehen, passende Lösungen auswählen oder bauen, im Alltag verankern und messbar machen.',
			items: [],
			cta: {
				heading: 'Klingt nach dem richtigen Ansatz?',
				primary: {
					label: 'Kostenloses Erstgespräch vereinbaren',
					href: 'mailto:hello@vibeperform.com',
				},
				secondary: {
					label: 'Workshops ansehen',
					href: '/vibeperform-astro-page/de/workshops',
				},
			},
		},
		audience: {
			heading: 'Für wen unser KI-Angebot gemacht ist',
			subheading:
				'Unser Angebot richtet sich an mittelständische Unternehmen, die ihre Abläufe mit KI und Automatisierung spürbar verbessern wollen:',
			cards: [
				{ copy: '<strong>KMU</strong> mit Ambition, aber begrenzten Kapazitäten.' },
				{
					copy: '<strong>Teams in Vertrieb, Kundenservice und Operations</strong> sowie <strong>IT- und Daten-Teams</strong>, die Entlastung im Tagesgeschäft suchen.',
				},
				{
					copy: '<strong>Geschäftsführungen und Bereichsleitungen</strong>, die schnelle, messbare Ergebnisse sehen wollen.',
				},
			],
		},
		useCases: {
			kicker: 'Use Cases',
			heading: 'Bewährte Einsatzfelder',
			subheading: 'Schnell nutzbar, klar messbar – aus realen Projekten im Mittelstand.',
			cards: [
				{
					category: 'Vertrieb',
					title: 'Angebots-Assistent',
					description: 'KI bündelt Mail- und CRM-Infos, erstellt Angebotsentwürfe und Follow-ups inklusive offener Punkte.',
					highlights: [
						'Angebotsentwurf (PDF/Doc)',
						'Follow-up-Mail (vorformuliert)',
						'Offene Fragen & To-dos',
						'Protokoll der Datenquellen',
					],
					toneClass: 'rose',
					icon: 'proposal',
				},
				{
					category: 'Kundenservice',
					title: 'Wissens-Assistenz (RAG)',
					description: 'Antworten mit Quellenzitaten aus Handbuch, Tickets und Confluence. Einheitliche Tonalität, schnell und nachvollziehbar.',
					highlights: [
						'Antwortentwurf mit Zitaten',
						'Relevante Passagen/Links',
						'Qualitätscheck (Policy/Ton)',
						'Handover an Ticket-System',
					],
					toneClass: 'indigo',
					icon: 'support',
				},
				{
					category: 'Operations',
					title: 'Dokumenten-Extraktion & Prüfungen',
					description: 'Extrahiert Felder, prüft Regeln und schreibt ins ERP – mit Audit-Trail und Abweichungsreport.',
					highlights: [
						'Extrahierte Felder (JSON/CSV)',
						'Abgleich PO ↔ Rechnung',
						'Abweichungsreport',
						'ERP-Buchung inkl. Log',
					],
					toneClass: 'emerald',
					icon: 'operations',
				},
			],
		},
	},
} as const;

export type HomeLocale = keyof typeof homeContent;
export type HomeContent = (typeof homeContent)[HomeLocale];
