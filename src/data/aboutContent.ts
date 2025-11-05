import { homeContent } from './homeContent';

export const aboutContent = {
	en: {
		nav: homeContent.en.nav,
		metaTitle: 'About Vibeperform',
		hero: {
			kicker: 'About us',
			title: 'Operators who ship, not just advise',
			intro:
				'We are builders who have scaled products, operations, and messaging from zero to traction. Vibeperform helps teams rethink their workflows with AI and launch faster than traditional agency cycles.',
		},
		values: [
			{
				title: 'Outcome first',
				description:
					'Every project starts with measurable goals. We help you define what success looks like and work backwards from there.',
			},
			{
				title: 'Builder mindset',
				description:
					'We prototype, test, and iterate. You get tangible momentum — not slide decks gathering dust.',
			},
		],
		cta: {
			title: 'Our partners',
			body: 'We collaborate with growth, product, and operations leaders in fast-moving teams across Europe. Each engagement is tailored to your stack, data, and customer experience.',
			button: {
				label: "Let's talk",
				href: 'mailto:hello@vibeperform.com',
			},
		},
	},
	de: {
		nav: homeContent.de.nav,
		metaTitle: 'Ueber Vibeperform',
		hero: {
			kicker: 'Ueber uns',
			title: 'Operatoren, die liefern statt nur beraten',
			intro:
				'Wir sind Builder, die Produkte, Operations und Messaging von Null auf Tempo gebracht haben. Vibeperform hilft Teams, ihre Workflows mit KI neu zu denken und schneller live zu gehen als klassische Agenturen.',
		},
		values: [
			{
				title: 'Ergebnisorientiert',
				description:
					'Jedes Projekt startet mit klaren KPIs. Wir definieren Erfolg gemeinsam und planen rueckwaerts.',
			},
			{
				title: 'Builder-Mentalitaet',
				description:
					'Wir prototypen, testen und iterieren. Ihr bekommt greifbare Fortschritte statt Slides, die in der Ablage enden.',
			},
		],
		cta: {
			title: 'Unsere Partner',
			body: 'Wir arbeiten mit Growth-, Produkt- und Operations-Teams in schnell wachsenden Unternehmen in Europa. Jede Zusammenarbeit wird auf Stack, Daten und Customer Experience abgestimmt.',
			button: {
				label: 'Kontakt aufnehmen',
				href: 'mailto:hello@vibeperform.com',
			},
		},
	},
} as const;

export type AboutLocale = keyof typeof aboutContent;
export type AboutContent = (typeof aboutContent)[AboutLocale];
