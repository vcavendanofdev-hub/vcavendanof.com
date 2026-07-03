import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO: replace with the real domain once Victor confirms the exact name
// registered in Google Cloud Domains (see roadmap.md section 5).
const SITE_URL = 'https://vavendano.com';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'never',
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          es: 'es',
          en: 'en',
        },
      },
    }),
  ],
});
