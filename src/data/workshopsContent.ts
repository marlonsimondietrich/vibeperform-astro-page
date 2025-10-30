import { homeContent } from './homeContent.ts';

export const workshopsContent = {
	en: {
		metaTitle: 'Workshops – Vibeperform',
		nav: homeContent.en.nav,

		hero: {
			kicker: 'Workshops',
			title: 'From idea to working AI in weeks, not months.',
			intro:
				'Our workshops are built for operators, not theorists. We help you spot real AI opportunities in sales, service, and operations – and turn the best one into something you can actually use.',
			// sub: 'No generic slide decks. We work on your process, with your team, toward a solution you could ship.',
			cta: {
				label: 'Book intro call',
				href: 'mailto:hello@vibeperform.com',
			},
		},

		valueSection: {
			heading: 'Why teams work with us',
			bullets: [
				{
					title: "You don't need more theory.",
					body: 'You need clarity on where AI can drive revenue, save hours, or remove bottlenecks. That’s what we map with you in under a day.',
					icon: 'lightbulb',
				},
				{
					title: 'We build, not just advise.',
					body: 'We combine software engineering and learning design. We don’t hand you slides – we co-design and then prototype with you.',
					icon: 'user-round-cog',
				},
				{
					title: 'Your team leaves with next steps.',
					body: 'Every session ends with 1 owned use case, success criteria, and a concrete path to implementation.',
					icon: 'rocket',
				},
			],
		},

		offeringsIntro: {
			heading: 'Formats',
			body: "Three modular formats. Start where you are. Combine if you're ready to move fast.",
		},

		offerings: [
			{
				title: 'Explore Session',
				meta: '1 hour / remote / leadership + key operators',
				description:
					'Identify high-value AI opportunities in your business. We look at where time is lost, where quality breaks, and where capacity is limited. You leave with 2–3 use cases ranked by impact and feasibility.',
				outcomes: [
					'Map of current bottlenecks',
					'Shortlist of AI/automation use cases',
					'Which one is worth building first – and why',
				],
				ctaLabel: 'Request Explore Session',
			},
			{
				title: 'Design Workshop',
				meta: '1 day / on-site or remote / up to 8 people',
				description:
					'We take the top use case and design it in detail: how it fits into your workflow, what inputs it needs, what it should deliver, and how we measure success.',
				outcomes: [
					'Future-state workflow with AI in the loop',
					'Defined feature set and data requirements',
					'Trust & acceptance criteria for the team',
				],
				ctaLabel: 'See sample agenda',
			},
			{
				title: 'Build Sprint',
				meta: '2–4 weeks / engineering + iteration with your team',
				description:
					'We prototype the solution with your real context. That can be workflow automation, smart replies, content generation, internal assistant, or lead intake.',
				outcomes: [
					'Working prototype or automated process',
					'Live demo in your environment',
					'Clear path for rollout or extension',
				],
				ctaLabel: 'Start a Sprint',
			},
		],

		proof: {
			heading: 'What happens after the workshop',
			items: [
				{
					stat: '+6 hours/week freed',
					body: 'Automated quote follow-ups and first-response handling removed repetitive manual typing for a 15-person service business.',
				},
				{
					stat: 'More inbound without ads',
					body: 'A craft business now auto-generates social posts from finished project photos – and gets steady leads instead of waiting on referrals only.',
				},
				{
					stat: 'No more dropped requests',
					body: 'Website assistant qualifies and routes inquiries so nothing gets lost when owners are on site.',
				},
			],
		},

		team: {
			heading: "Who you'll work with",
			body:
				"We’re builders with a coaching mindset. We’ve shipped software, designed learning experiences, and implemented AI in real operations. We sit next to your team, map the work, and make sure the solution fits how people actually work.",
		},

		finalCta: {
			heading: 'Want to see what AI could do in your business?',
			body: "Book a 30-minute intro. We'll ask how you work today and tell you which format makes sense.",
			button: {
				label: 'Book a call',
				href: 'mailto:hello@vibeperform.com',
			},
		},
	},
	de: {
		metaTitle: 'Workshops – Vibeperform',
		nav: homeContent.de.nav,

		hero: {
			kicker: 'Workshops',
			title: 'Von der Idee zur funktionierenden KI in Wochen, nicht Monaten.',
			intro:
				'Unsere Formate richten sich an Menschen aus der Praxis, nicht an Theoretiker. Wir identifizieren gemeinsam, wo KI in Vertrieb, Service oder Operations wirklich hilft – und machen daraus etwas Greifbares.',
			// sub: 'Keine Folienschlacht. Wir arbeiten direkt an euren Abläufen, mit eurem Team, auf ein konkretes Ergebnis hin.',
			cta: {
				label: 'Gespräch buchen',
				href: 'mailto:hello@vibeperform.com',
			},
		},

		valueSection: {
			heading: 'Warum Teams mit uns arbeiten',
			bullets: [
				{
					title: 'Weniger Theorie. Mehr Umsetzung.',
					body: 'Ihr braucht Klarheit, wo KI echten Mehrwert bringt, Zeit spart oder Engpässe löst. Genau das machen wir mit euch – in unter einem Tag.',
					icon: 'lightbulb',
				},
				{
					title: 'Wir bauen mit euch.',
					body: 'Wir verbinden Software-Entwicklung mit Lern- und Change-Kompetenz. Heißt: Wir entwerfen die Lösung mit euch – und setzen sie um.',
					icon: 'user-round-cog',
				},
				{
					title: 'Klarheit. Nächste Schritte. Loslegen.',
					body: 'Am Ende steht ein priorisierter Use Case mit Nutzen, Erfolgskennzahlen und Umsetzungsplan.',
					icon: 'rocket',
				},
			],
		},

		offeringsIntro: {
			heading: 'Unsere Formate',
			body: 'Drei Bausteine. Einstieg niedrigschwellig. Kombinierbar, wenn es schnell gehen soll.',
		},

		offerings: [
			{
				title: 'Explore Session',
				meta: '1 Stunde / remote / Geschäftsführung + Schlüsselrollen',
				description:
					'Wir identifizieren, wo in eurem Alltag Potenzial für KI steckt: Wo geht Zeit verloren? Wo brechen Abläufe? Wo liegen Chancen für neue Aufträge? Ergebnis: 2–3 priorisierte Use Cases mit klarer Wirkung.',
				outcomes: [
					'Übersicht über eure größten Pain Points',
					'Shortlist an KI-/Automations-Ideen',
					'Empfehlung: Womit starten und warum',
				],
				ctaLabel: 'Explore anfragen',
			},
			{
				title: 'Design Workshop',
				meta: '1 Tag / vor Ort oder remote / bis 8 Personen',
				description:
					'Wir nehmen den wichtigsten Use Case auseinander: Wer nutzt die Lösung? Welche Daten braucht sie? Wie sieht der Ablauf aus? Wie wird Erfolg gemessen? Ergebnis ist ein klares Soll-Szenario.',
				outcomes: [
					'Zukünftiger Prozess mit KI-Unterstützung',
					'Feature-Set und Datenbedarf',
					'Vertrauens- und Qualitätskriterien fürs Team',
				],
				ctaLabel: 'Agenda ansehen',
			},
			{
				title: 'Build Sprint',
				meta: '2–4 Wochen / Umsetzung mit echten Daten',
				description:
					'Wir bauen einen funktionierenden Prototypen oder automatisieren einen Teilprozess. Typische Ergebnisse: Angebots-Assistent, Social-Content-Generator, Lead-Intake-Bot, interne Wissenssuche.',
				outcomes: [
					'Laufender Prototyp oder automatisierter Ablauf',
					'Test in eurer echten Umgebung',
					'Nächste Schritte für Rollout oder Skalierung',
				],
				ctaLabel: 'Sprint starten',
			},
		],

		proof: {
			heading: 'Was nach dem Workshop passiert',
			items: [
				{
					stat: '+6 Stunden / Woche',
					body: 'Durch automatisierte Angebots-Nachverfolgung musste ein Handwerksbetrieb deutlich weniger manuell nachfassen – ohne Qualitätsverlust.',
				},
				{
					stat: 'Mehr Anfragen, ohne Anzeigenbudget',
					body: 'Ein kleines Unternehmen veröffentlicht jetzt automatisch Social-Posts aus echten Projektfotos. Ergebnis: neue Anfragen statt Warten auf Empfehlungen.',
				},
				{
					stat: 'Kein Anfrageverlust mehr',
					body: 'Ein Assistent auf der Website qualifiziert und sortiert eingehende Anfragen, auch wenn niemand ans Telefon gehen kann.',
				},
			],
		},

		team: {
			heading: 'Mit wem ihr arbeitet',
			body:
				'Wir sind ein Team aus Entwicklung und Enablement. Wir bringen KI dorthin, wo sie Wirkung hat – in die tägliche Arbeit. Uns ist wichtig: Umsetzung statt Buzzword, Praxis statt Politik.',
		},

		finalCta: {
			heading: 'Wollt ihr sehen, was bei euch möglich ist?',
			body:
				'Bucht ein 30-minütiges Gespräch. Wir verstehen euren Kontext und sagen klar, welches Format für euch Sinn ergibt.',
			button: {
				label: 'Gespräch buchen',
				href: 'mailto:hello@vibeperform.com',
			},
		},
	},
} as const;

export type WorkshopsLocale = keyof typeof workshopsContent;
export type WorkshopsContent = (typeof workshopsContent)[WorkshopsLocale];
