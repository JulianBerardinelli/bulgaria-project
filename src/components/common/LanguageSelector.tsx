import { useCallback, useMemo } from 'react';

import {
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  HeroUIProvider,
} from '@heroui/react';

import { LANGUAGE_OPTIONS, SUPPORTED_LANGUAGES, buildLocalizedPath, getPathWithoutLanguage, type SupportedLanguage } from '~/utils/i18n';

const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg
    aria-hidden="true"
    focusable="false"
    className={className}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

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

  const selectedOption = LANGUAGE_OPTIONS[currentLang];

  const selectedKeys = useMemo(() => new Set<SupportedLanguage>([currentLang]), [currentLang]);

  const menuItems = useMemo(
    () => SUPPORTED_LANGUAGES.map((code) => ({ code, option: LANGUAGE_OPTIONS[code] })),
    [],
  );

  const triggerClassName = [
    'group relative h-10 w-10 min-w-0 rounded-full p-0',
    'border border-default-200/70 dark:border-white/10',
    'bg-white/80 dark:bg-slate-900/80 shadow-sm backdrop-blur supports-[backdrop-filter]:backdrop-blur',
    'data-[hover=true]:bg-default-100/70',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const dropdownClassNames = useMemo(
    () => ({
      base: 'z-[60]',
      content:
        'z-[60] min-w-[220px] rounded-2xl border border-default-200/70 bg-white/95 p-2 shadow-xl backdrop-blur dark:border-white/10 dark:bg-slate-900/95',
    }),
    [],
  );

  return (
    <HeroUIProvider>
      <Dropdown placement="bottom-end" classNames={dropdownClassNames}>
        <DropdownTrigger>
          <Button
            disableAnimation
            disableRipple
            radius="full"
            variant="flat"
            isIconOnly
            aria-label={`Change language. Current language: ${selectedOption.nativeLabel}`}
            className={triggerClassName}
          >
            <span className="sr-only">{selectedOption.nativeLabel}</span>
            <Avatar
              src={selectedOption.flagSrc}
              alt=""
              radius="full"
              classNames={{
                base: 'h-6 w-6 border border-white/80 bg-transparent shadow-sm',
                img: 'h-full w-full object-cover',
              }}
            />
            <span className="pointer-events-none absolute -bottom-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full border border-default-200/70 bg-white text-default-400 shadow-sm dark:border-white/20 dark:bg-slate-900">
              <ChevronDownIcon className="h-3 w-3" />
            </span>
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Language selector"
          selectionMode="single"
          selectedKeys={selectedKeys}
          onAction={(key) => handleSelect(key as SupportedLanguage)}
          itemClasses={{
            base: 'data-[hover=true]:bg-default-100/80 data-[selected=true]:bg-primary/10 data-[selected=true]:text-primary',
          }}
        >
          {menuItems.map(({ code, option }) => (
            <DropdownItem
              key={code}
              startContent={
                <Avatar
                  src={option.flagSrc}
                  alt={option.nativeLabel}
                  radius="full"
                  classNames={{
                    base: 'h-7 w-7 border border-white/80 bg-transparent shadow-sm',
                    img: 'h-full w-full object-cover',
                  }}
                />
              }
              className="gap-3 rounded-xl px-3 py-2 text-start"
            >
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-default-700 dark:text-default-100">{option.nativeLabel}</span>
                <span className="text-xs font-medium text-default-400">{option.label}</span>
              </div>
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </HeroUIProvider>
  );
};

export default LanguageSelector;
