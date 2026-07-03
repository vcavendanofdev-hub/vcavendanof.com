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
  email: 'melethestel@gmail.com',
  whatsapp: '+573057218436',
  whatsappDisplay: '+57 305 721 8436',
  linkedin: 'https://linkedin.com/in/vavendanof',
  location: 'Bogotá, Colombia',
};
