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
				'We partner with you end-to-end: first we create clarity, then we build and embed what matters.',
			items: [
				{
					title: '1 – Understand & Prioritize',
					icon: 'search-check',
					blocks: [
						{ type: 'lead', html: '<strong>Workshops that empower your people.</strong>' },
						{
							type: 'paragraph',
							html: 'Together with your team (4–10 employees) we analyze workflows, identify bottlenecks, and prioritize the biggest levers.',
						},
						{ type: 'heading', html: '<strong>In facilitated workshops we create clarity:</strong>' },
						{
							type: 'list',
							items: [
								'Which processes cost you time or quality?',
								'Where will AI or automation deliver the biggest benefit?',
								'What does the team really need to work more efficiently?',
							],
						},
						{ type: 'heading', html: '<strong>Afterwards we scan the market:</strong>' },
						{
							type: 'paragraph',
							html: 'If proven solutions already exist that solve your challenge faster or more affordably, we recommend them openly.',
						},
						{
							type: 'paragraph',
							html: 'If no suitable solution exists, we co-develop a <strong>tailor-made AI or automation solution.</strong>',
						},
					],
				},
				{
					title: '2 – Build & Embed',
					icon: 'workflow',
					blocks: [
						{ type: 'lead', html: '<strong>From idea to lived solution.</strong>' },
						{
							type: 'paragraph',
							html: 'Only once we know what works do we move into delivery — <strong>together with you.</strong>',
						},
						{
							type: 'paragraph',
							html: 'We develop, test, and anchor solutions in everyday work.',
						},
						{ type: 'heading', html: '<strong>That includes:</strong>' },
						{
							type: 'list',
							items: [
								'close collaboration with business units',
								'smooth introduction of new tools and workflows',
								'targeted <strong>change management</strong> so people adopt new processes',
							],
						},
						{
							type: 'paragraph',
							html: 'For bespoke solutions we start with a prototype you can test within 7 days.',
						},
						{
							type: 'paragraph',
							html: '<strong>Our approach:</strong> experiment with use cases quickly to deliver value fast.',
						},
					],
				},
			],
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
				'Wir verstehen unser Angebot als End-to-End-Leistung: von der Identifikation echter Potenziale bis zur nachhaltigen Umsetzung im Alltag.',
			items: [
				{
					title: '1 – Verstehen & Priorisieren',
					icon: 'search-check',
					blocks: [
						{ type: 'lead', html: '<strong>Workshops, die Ihre Mitarbeiter befähigen.</strong>' },
						{
							type: 'paragraph',
							html: 'Gemeinsam mit Ihrem Team (4–10 Mitarbeitende) analysieren wir Abläufe, identifizieren Engpässe und priorisieren die größten Hebel.',
						},
						{ type: 'heading', html: '<strong>In moderierten Workshops schaffen wir Klarheit:</strong>' },
						{
							type: 'list',
							items: [
								'Welche Prozesse kosten Zeit oder Qualität?',
								'Wo entsteht der größte Nutzen durch KI oder Automatisierung?',
								'Was braucht das Team wirklich, um effizienter zu arbeiten?',
							],
						},
						{ type: 'heading', html: '<strong>Im Anschluss screenen wir den Markt:</strong>' },
						{
							type: 'paragraph',
							html: 'Wenn es bereits erprobte Lösungen gibt, die Ihre Herausforderung schneller oder günstiger lösen, empfehlen wir diese offen weiter.',
						},
						{
							type: 'paragraph',
							html: 'Wenn keine passende Lösung existiert, entwickeln wir gemeinsam eine <strong>maßgeschneiderte KI- oder Automatisierungslösung.</strong>',
						},
					],
				},
				{
					title: '2 – Umsetzen & Verankern',
					icon: 'workflow',
					blocks: [
						{ type: 'lead', html: '<strong>Von der Idee zur gelebten Lösung.</strong>' },
						{
							type: 'paragraph',
							html: 'Erst wenn klar ist, was wirkt, gehen wir in die Umsetzung – <strong>gemeinsam mit Ihnen.</strong>',
						},
						{
							type: 'paragraph',
							html: 'Wir entwickeln, testen und verankern Lösungen im Arbeitsalltag.',
						},
						{ type: 'heading', html: '<strong>Dazu gehören:</strong>' },
						{
							type: 'list',
							items: [
								'enge Zusammenarbeit mit Fachbereichen',
								'einfache Einführung neuer Tools und Workflows',
								'gezieltes <strong>Change-Management</strong>, damit Mitarbeitende neue Prozesse auch leben',
							],
						},
						{
							type: 'paragraph',
							html: 'Bei personalisierten Lösungen starten wir mit einem Prototypen, den Sie innerhalb von 7 Tagen testen können.',
						},
						{
							type: 'paragraph',
							html: '<strong>Unser Ansatz:</strong> Use Cases schnell testen, um zügig Mehrwerte zu liefern.',
						},
					],
				},
			],
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
	},
} as const;

export type HomeLocale = keyof typeof homeContent;
export type HomeContent = (typeof homeContent)[HomeLocale];
