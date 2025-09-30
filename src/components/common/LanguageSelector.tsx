import { useEffect, useState, type ChangeEvent } from 'react';

import {
  LANGUAGES,
  LANGUAGE_STORAGE_KEY,
  type LanguageCode,
  isLanguageCode,
} from '~/i18n/config';

export interface LanguageSelectorProps {
  currentLang: LanguageCode;
  id?: string;
  label?: string;
}

const updateLocation = (lang: LanguageCode) => {
  const url = new URL(window.location.href);
  url.searchParams.set('lang', lang);
  window.location.href = url.toString();
};

const LanguageSelector = ({ currentLang, id = 'language-selector', label = 'Language selector' }: LanguageSelectorProps) => {
  const [value, setValue] = useState<LanguageCode>(currentLang);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const stored = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);

    if (!stored || !isLanguageCode(stored)) {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, currentLang);
      return;
    }

    if (!window.location.search.includes('lang=')) {
      if (stored !== currentLang) {
        updateLocation(stored);
      }
      return;
    }

    if (stored !== currentLang) {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, currentLang);
    }
  }, [currentLang]);

  useEffect(() => {
    setValue(currentLang);
  }, [currentLang]);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newLang = event.target.value as LanguageCode;
    setValue(newLang);

    if (typeof window === 'undefined') {
      return;
    }

    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, newLang);
    updateLocation(newLang);
  };

  return (
    <div className="relative">
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={handleChange}
        className="appearance-none bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 rounded-lg py-2 pl-3 pr-9 text-sm font-medium text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
      >
        {LANGUAGES.map((language) => (
          <option key={language.code} value={language.code}>
            {language.label}
          </option>
        ))}
      </select>
      <span className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-gray-500 dark:text-gray-400">
        <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.939l3.71-3.71a.75.75 0 111.06 1.061l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </div>
  );
};

export default LanguageSelector;
