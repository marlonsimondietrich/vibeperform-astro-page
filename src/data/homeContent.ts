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
			kicker: 'Vibeperform',
			title: 'From idea to impact. Fast.',
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
				{ label: 'KI Strategie', href: '/vibeperform-astro-page/de/ki-strategie' },
				{ label: 'Workshops', href: '/vibeperform-astro-page/de/workshops' },
				{ label: 'Ueber uns', href: '/vibeperform-astro-page/de/ueber-uns' },
			],
			toggleLabel: 'EN',
			toggleAriaLabel: 'Sprache zu Englisch wechseln',
			menuToggleLabel: 'Navigationsmenue oeffnen',
		},
		hero: {
			kicker: 'Vibeperform',
			title: 'Von der Idee zur Wirkung. Schnell.',
			subtitle: 'Vom Start zur Klarheit - mit schneller Technologie und KI-gestuetzten Workflows.',
			primaryCta: 'Jetzt starten',
			secondaryCta: 'So funktioniert es',
			secondaryHref: '/vibeperform-astro-page/de/ki-strategie',
			callouts: [
				{ label: 'Tempo', description: 'Wochen statt Monate' },
				{ label: 'Fokus', description: 'Klare Roadmaps' },
				{ label: 'Ergebnis', description: 'Messbarer Impact' },
				{ label: 'Vertrauen', description: 'Compliance inklusive' },
			],
		},
		features: {
			kicker: 'Leistungen',
			heading: 'Eure Sparringspartner fuer KI & Automatisierung.',
			subheading:
				'Wir uebersetzen Strategie in Umsetzung - mit modularen Angeboten, die innerhalb eurer Organisation skalieren.',
			items: [
				{
					title: 'Tempo trifft Klarheit',
					description: [
						'Wir liefern schlanke, schoene und funktionale Setups - ohne lange Agenturschleifen.',
					],
				},
				{
					title: 'Strategisch durchdacht',
					description: [
						'Alles, was wir bauen, basiert auf Produktdenken und klarer Botschaft.',
					],
				},
				{
					title: 'Builder-Mentalitaet',
					description: [
						'Wir sind ehemalige Gruender und schnelle Operatoren.',
						'Wir kennen die Praxis. Wir denken in naechsten Schritten, nicht nur in Deliverables.',
					],
				},
			],
		},
	},
} as const;

export type HomeLocale = keyof typeof homeContent;
export type HomeContent = (typeof homeContent)[HomeLocale];
