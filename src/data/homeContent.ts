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
			kicker: 'Services',
			heading: 'Your sparring partners for AI & automation.',
			subheading:
				'We translate strategy into action with modular offers that scale across your organisation.',
			items: [
				{
					title: 'Speed meets clarity',
					description: [
						'We deliver lean, beautiful and functional setups - without long agency loops.',
					],
				},
				{
					title: 'Strategic by design',
					description: ['Everything we build is rooted in product thinking and clear messaging.'],
				},
				{
					title: 'Builder mindset',
					description: [
						'We are former founders and fast operators.',
						"We've been there. We think in next steps, not just deliverables.",
					],
				},
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
					title: '1 - Verstehen & Priorisieren',
					description: [
						'Workshops, die Ihre Mitarbeiter befähigen.',
					],
				},
				{
					title: '2 - Umsetzen & Verankern',
					description: [
						'Von der Idee zur gelebten Lösung.',
					],
				},
			],
		},
	},
} as const;

export type HomeLocale = keyof typeof homeContent;
export type HomeContent = (typeof homeContent)[HomeLocale];
