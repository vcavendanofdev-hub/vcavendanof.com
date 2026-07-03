import * as es from './es';
import * as en from './en';
import type { Locale } from '../../i18n/config';

export const site = { es, en } satisfies Record<Locale, typeof es>;

export function getSite(locale: Locale) {
  return site[locale];
}
