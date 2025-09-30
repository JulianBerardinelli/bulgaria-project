import { useCallback } from 'react';

import { LANGUAGE_OPTIONS, SUPPORTED_LANGUAGES, buildLocalizedPath, getPathWithoutLanguage, type SupportedLanguage } from '~/utils/i18n';

interface Props {
  currentLang: SupportedLanguage;
  className?: string;
}

const LanguageSelector = ({ currentLang, className }: Props) => {
  const handleSelect = useCallback(
    (lang: SupportedLanguage) => {
      if (lang === currentLang) {
        return;
      }

      const { pathname, search, hash } = window.location;
      const basePath = getPathWithoutLanguage(pathname);
      const target = buildLocalizedPath(lang, basePath === '/' ? '/' : basePath);
      const composed = `${target}${search}${hash}`;

      window.location.href = composed;
    },
    [currentLang],
  );

  const wrapperClass = ['flex items-center gap-1 rounded-full border border-transparent bg-white/70 p-1 shadow-sm backdrop-blur dark:bg-slate-800/70', className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={wrapperClass}>
      {SUPPORTED_LANGUAGES.map((code) => {
        const option = LANGUAGE_OPTIONS[code];
        const isActive = code === currentLang;
        const baseClasses =
          'flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold transition-all duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900';
        const stateClasses = isActive
          ? 'bg-primary text-white shadow-sm shadow-primary/40 dark:bg-secondary'
          : 'text-slate-700 hover:bg-primary/10 dark:text-slate-200 dark:hover:bg-white/10';

        return (
          <button
            key={code}
            type="button"
            onClick={() => handleSelect(code)}
            className={`${baseClasses} ${stateClasses}`.trim()}
            aria-pressed={isActive}
          >
            <img
              src={option.flagSrc}
              alt={option.nativeLabel}
              className="h-4 w-4 rounded-full border border-white object-cover shadow-sm"
            />
            <span className="hidden sm:inline">{option.nativeLabel}</span>
            <span className="inline sm:hidden uppercase">{code}</span>
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSelector;
