export type SupportedLanguage = 'es' | 'en' | 'bg';

export interface LanguageOption {
  code: SupportedLanguage;
  label: string;
  nativeLabel: string;
  flagSrc: string;
}

export const SUPPORTED_LANGUAGES: SupportedLanguage[] = ['es', 'en', 'bg'];
export const DEFAULT_LANGUAGE: SupportedLanguage = 'es';

export const LANGUAGE_OPTIONS: Record<SupportedLanguage, LanguageOption> = {
  es: {
    code: 'es',
    label: 'Spanish',
    nativeLabel: 'Español',
    flagSrc: '/flags/es.svg',
  },
  en: {
    code: 'en',
    label: 'English',
    nativeLabel: 'English',
    flagSrc: '/flags/en.svg',
  },
  bg: {
    code: 'bg',
    label: 'Bulgarian',
    nativeLabel: 'Български',
    flagSrc: '/flags/bg.svg',
  },
};

export const isSupportedLanguage = (value: string | undefined | null): value is SupportedLanguage => {
  return value ? (SUPPORTED_LANGUAGES as ReadonlyArray<string>).includes(value) : false;
};

export const resolveLanguage = (value: string | undefined | null): SupportedLanguage => {
  if (value && isSupportedLanguage(value)) {
    return value;
  }
  return DEFAULT_LANGUAGE;
};

const ensureLeadingSlash = (path: string): string => {
  if (!path.startsWith('/')) {
    return `/${path}`;
  }
  return path || '/';
};

export const getPathWithoutLanguage = (pathname: string): string => {
  const normalized = ensureLeadingSlash(pathname).replace(/\/+/g, '/');
  const segments = normalized.split('/').filter(Boolean);

  if (segments.length === 0) {
    return '/';
  }

  const [first, ...rest] = segments;
  if (isSupportedLanguage(first) && first !== DEFAULT_LANGUAGE) {
    return rest.length > 0 ? `/${rest.join('/')}` : '/';
  }

  return normalized;
};

export const buildLocalizedPath = (lang: SupportedLanguage, basePath: string): string => {
  const normalized = getPathWithoutLanguage(basePath);
  if (lang === DEFAULT_LANGUAGE) {
    return normalized;
  }

  if (normalized === '/') {
    return `/${lang}`;
  }

  return `/${lang}${normalized}`;
};
