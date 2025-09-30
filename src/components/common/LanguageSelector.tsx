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

  const triggerClassName = [
    'min-w-0 h-10 px-3 sm:px-4',
    'bg-white/80 dark:bg-slate-900/80 border border-default-200/70 dark:border-white/10',
    'shadow-sm backdrop-blur supports-[backdrop-filter]:backdrop-blur data-[hover=true]:bg-default-100',
    'text-sm font-semibold text-default-700 dark:text-default-200',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <HeroUIProvider>
      <Dropdown placement="bottom-end" classNames={{ content: 'min-w-[220px] rounded-2xl border border-default-200/70 shadow-lg p-2' }}>
        <DropdownTrigger>
          <Button
            disableAnimation
            disableRipple
            radius="full"
            variant="flat"
            className={triggerClassName}
            startContent={
              <Avatar
                src={selectedOption.flagSrc}
                alt={selectedOption.nativeLabel}
                radius="full"
                className="h-6 w-6 border border-white/80 bg-transparent shadow-sm"
              />
            }
            endContent={<ChevronDownIcon className="h-4 w-4 text-default-400" />}
          >
            <span className="flex flex-col items-start leading-tight">
              <span className="text-sm font-semibold text-default-700 dark:text-default-100">{selectedOption.nativeLabel}</span>
              <span className="text-[0.7rem] uppercase tracking-wide text-default-400 sm:hidden">{currentLang}</span>
              <span className="hidden text-xs font-medium text-default-400 sm:inline">{selectedOption.label}</span>
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
          {SUPPORTED_LANGUAGES.map((code) => {
            const option = LANGUAGE_OPTIONS[code];
            return (
              <DropdownItem
                key={code}
                startContent={
                  <Avatar
                    src={option.flagSrc}
                    alt={option.nativeLabel}
                    radius="full"
                    className="h-7 w-7 border border-white/80 bg-transparent shadow-sm"
                  />
                }
                className="gap-3 rounded-xl px-3 py-2 text-start"
              >
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-default-700 dark:text-default-100">{option.nativeLabel}</span>
                  <span className="text-xs font-medium text-default-400">{option.label}</span>
                </div>
              </DropdownItem>
            );
          })}
        </DropdownMenu>
      </Dropdown>
    </HeroUIProvider>
  );
};

export default LanguageSelector;
