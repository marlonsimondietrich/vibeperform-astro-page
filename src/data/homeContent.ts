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
			},
			hero: {
				kicker: 'Vibeperform',
				title: 'From idea to impact. Fast.',
				subtitle: 'Move from zero to clarity - with fast tech and AI-powered workflows.',
				primaryCta: 'Start Building',
			secondaryCta: 'See how it works',
			secondaryHref: '/vibeperform-astro-page/ai-strategy',
		},
		features: {
			heading: 'Your sparring partners for AI & automation.',
			items: [
				{
					title: 'Speed meets clarity',
					description: [
						'We deliver lean, beautiful and functional setups - without long agency loops.',
					],
				},
				{
					title: 'Strategic by design',
					description: [
						'Everything we build is rooted in product thinking and clear messaging.',
					],
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
			},
			hero: {
				kicker: 'Vibeperform',
				title: 'Von der Idee zur Wirkung. Schnell.',
				subtitle: 'Vom Start zur Klarheit - mit schneller Technologie und KI-gestuetzten Workflows.',
			primaryCta: 'Jetzt starten',
			secondaryCta: 'So funktioniert es',
			secondaryHref: '/vibeperform-astro-page/de/ki-strategie',
		},
		features: {
			heading: 'Eure Sparringspartner fuer KI & Automatisierung.',
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
