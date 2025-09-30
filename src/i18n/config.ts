export const LANGUAGES = [
  { code: 'es', label: 'Español', locale: 'es-ES' },
  { code: 'bg', label: 'Български', locale: 'bg-BG' },
  { code: 'en', label: 'English', locale: 'en-US' },
] as const;

export type LanguageCode = (typeof LANGUAGES)[number]['code'];

export const DEFAULT_LANGUAGE: LanguageCode = 'es';

export const LANGUAGE_STORAGE_KEY = 'preferredLanguage';

export const isLanguageCode = (value: string | null | undefined): value is LanguageCode =>
  Boolean(value) && LANGUAGES.some((language) => language.code === value);

export const getLanguageLabel = (code: LanguageCode): string =>
  LANGUAGES.find((language) => language.code === code)?.label ?? code;
