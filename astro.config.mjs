// @ts-check

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.vibeperform.com',
	// Remove base when using custom domain
	integrations: [react()],
	i18n: {
		defaultLocale: 'de',
		locales: ['en', 'de'],
		routing: {
			prefixDefaultLocale: false,
		},
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
