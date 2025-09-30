export const SUPPORTED_LANGUAGES = [
  {
    code: 'es',
    name: 'Español',
    nativeName: 'Español',
    flag: '/flags/es.svg',
  },
  {
    code: 'bg',
    name: 'Bulgarian',
    nativeName: 'Български',
    flag: '/flags/bg.svg',
  },
  {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flag: '/flags/en.svg',
  },
] as const;

export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number]['code'];

export const DEFAULT_LANGUAGE: SupportedLanguage = 'es';

export function isSupportedLanguage(lang: string | null | undefined): lang is SupportedLanguage {
  return SUPPORTED_LANGUAGES.some((item) => item.code === lang);
}

export function getLanguagePath(lang: SupportedLanguage): string {
  if (lang === 'es') {
    return '/';
  }

  return `/${lang}/`;
}
