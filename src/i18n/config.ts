export const locales = ['en', 'es'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

/** Prefix used in URLs for a given locale (default locale has none). */
export function localePrefix(locale: Locale): string {
  return locale === defaultLocale ? '' : `/${locale}`;
}

/** Build a localized path, e.g. path('/project-manager', 'en') -> '/en/project-manager' */
export function path(pathname: string, locale: Locale): string {
  const clean = pathname === '/' ? '' : pathname;
  return `${localePrefix(locale)}${clean}` || '/';
}

export const siteMeta = {
  name: 'Victor Avendaño',
  email: 'info@vavendano.com',
  whatsapp: '+573219052343',
  whatsappDisplay: '+57 321 905 2343',
  linkedin: 'https://linkedin.com/in/vavendanof',
  location: 'Bogotá, Colombia',
};
