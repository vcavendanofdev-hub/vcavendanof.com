import { siteMeta, type Locale } from '../i18n/config';

const SITE = 'https://vavendano.com';

const provider = {
  '@type': 'Person',
  name: 'Victor Camilo Avendaño Forero',
  url: SITE,
  sameAs: [siteMeta.linkedin],
};

const serviceNames = {
  pm: { en: 'AI-Augmented Project Management', es: 'Gestión de proyectos potenciada con IA' },
  va: {
    en: 'Bilingual Virtual Assistant and Executive Support',
    es: 'Asistente Virtual y soporte ejecutivo bilingüe',
  },
} as const;

export function serviceSchema(kind: 'pm' | 'va', locale: Locale, description: string, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceNames[kind][locale],
    description,
    url: `${SITE}${path}`,
    inLanguage: locale,
    provider,
    areaServed: 'Worldwide',
    availableLanguage: ['es', 'en'],
  };
}

export function blogPostingSchema(
  locale: Locale,
  post: { title: string; description: string; pubDate: Date; category: string },
  path: string
) {
  const url = `${SITE}${path}`;
  const date = post.pubDate.toISOString().slice(0, 10);
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    url,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    datePublished: date,
    dateModified: date,
    inLanguage: locale,
    articleSection: post.category,
    image: `${SITE}/og-${locale}.png`,
    author: provider,
    publisher: provider,
  };
}

export function contactSchema(locale: Locale, name: string, description: string, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name,
    description,
    url: `${SITE}${path}`,
    inLanguage: locale,
    mainEntity: {
      ...provider,
      email: siteMeta.email,
      telephone: siteMeta.whatsapp,
      knowsLanguage: ['es', 'en'],
    },
  };
}
