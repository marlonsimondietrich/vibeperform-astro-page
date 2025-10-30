import { homeContent } from './homeContent';

export const workshopsContent = {
	en: {
		nav: homeContent.en.nav,
		metaTitle: 'Vibeperform',
		hero: {
			kicker: 'Workshops',
			title: 'Explore tailored learning experiences',
			intro:
				'Our workshops help teams discover how AI and automation unlock real business outcomes. We combine strategic framing with hands-on prototyping so your stakeholders leave with clear next steps.',
		},
		offerings: [
			{
				title: 'Strategy Alignment',
				description:
					'Craft an AI adoption roadmap anchored in business value. We run discovery, define priorities, and turn them into executable initiatives.',
			},
			{
				title: 'Automation Sprint',
				description:
					'Bring the right people into the room, map repetitive workflows, and prototype automations together.',
			},
			{
				title: 'Product Co-Lab',
				description:
					'Pair with our builders to refine messaging, wireframes, and GTM experiments for your next AI feature.',
			},
		],
		cta: {
			title: 'Ready to plan a session?',
			body: 'Share your goals and we will suggest an agenda to match. We can join remotely or on-site.',
			button: {
				label: 'Book a call',
				href: 'mailto:hello@vibeperform.com',
			},
		},
	},
	de: {
		nav: homeContent.de.nav,
		metaTitle: 'Vibeperform Workshops',
		hero: {
			kicker: 'Workshops',
			title: 'Massgeschneiderte Lernformate entdecken',
			intro:
				'Unsere Workshops zeigen Teams, wie KI und Automatisierung echten Mehrwert schaffen. Wir verknuepfen strategische Einordnung mit praktischen Prototypen, damit alle mit klaren To-dos starten.',
		},
		offerings: [
			{
				title: 'Strategie-Ausrichtung',
				description:
					'Wir entwickeln mit euch eine Roadmap fuer KI-Einsatz, priorisieren Vorhaben und uebersetzen sie in konkrete Initiativen.',
			},
			{
				title: 'Automation Sprint',
				description:
					'Die richtigen Personen an einen Tisch, wiederholende Prozesse kartieren und Automationen gemeinsam testen.',
			},
			{
				title: 'Product Co-Lab',
				description:
					'Mit unseren Buildern Messaging, Wireframes und Go-to-Market-Experimente fuer euer naechstes KI-Feature schaerfen.',
			},
		],
		cta: {
			title: 'Bereit fuer einen Termin?',
			body: 'Teilt eure Ziele und wir schlagen die passende Agenda vor. Remote oder vor Ort moeglich.',
			button: {
				label: 'Call buchen',
				href: 'mailto:hello@vibeperform.com',
			},
		},
	},
} as const;

export type WorkshopsLocale = keyof typeof workshopsContent;
export type WorkshopsContent = (typeof workshopsContent)[WorkshopsLocale];
