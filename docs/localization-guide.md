# Localization Guide

This document explains how the landing page localization system is organized and how to update translations or extend the site with additional languages.

## Overview

The project supports fully localized landing pages for Spanish (`es`), English (`en`), and Bulgarian (`bg`). Each locale is rendered from the same Astro layouts and React components, with the copy provided by a centralized data module. The language selector in the site header lets visitors switch locales while keeping their current route.

## Key Files

- `src/utils/i18n.ts`
  - Declares the list of supported languages and their metadata (locale code, labels, and flag asset paths).
  - Provides helper utilities such as `buildLocalizedPath`, `getPathWithoutLanguage`, and `resolveLanguage` that the routing layer and language selector reuse.
- `src/data/landingContent.ts`
  - Exports a structured object containing all landing page copy grouped by language.
  - Each section of the landing experience (hero, features, pricing, FAQs, footer, etc.) is represented as strongly typed objects to keep the UI components presentation‑focused.
- `src/components/landing/LandingPage.astro`
  - Consumes the localized content for the requested language and renders the landing template.
- `src/components/common/LanguageSelector.tsx`
  - Renders the interactive dropdown that allows users to switch languages while staying on the same page.

## Updating Existing Text

1. Open `src/data/landingContent.ts` and locate the language block you need to update (for example, `landingContent.es` for Spanish).
2. Edit the relevant string values directly in that block. The TypeScript types ensure that each section contains all required fields, so any missing values will surface as compile-time errors.
3. If you update navigation labels, make sure the corresponding keys in `src/navigation.ts` remain aligned so that shared components (header, footer) display the correct copy.
4. Save your changes and rebuild or run the development server to verify the updated text renders as expected.

## Adding a New Language

1. Duplicate one of the existing entries in `SUPPORTED_LANGUAGES` within `src/utils/i18n.ts`, assigning a new language code, human-readable labels, and the path to the flag asset you intend to use.
2. Import or create the appropriate flag SVG in `public/flags/`. Keep the icon dimensions consistent with the existing files (24×24 viewBox) for visual consistency.
3. In `src/data/landingContent.ts`, add a new top-level object keyed by your language code. Populate every section with professional translations. Refer to the TypeScript interfaces in the same file for guidance on the required fields.
4. Update any auxiliary data structures that depend on the list of languages, such as `src/navigation.ts` if additional locale-specific routes or links are needed.
5. Run the build or dev server to confirm that the new locale renders correctly and that the language selector lists the new option.

## Routing Behavior

- The root route (`/`) renders the default language defined in `DEFAULT_LANGUAGE` within `src/utils/i18n.ts`.
- Locale-prefixed routes (`/[lang]/`) are statically generated through the `getStaticPaths` export in `src/pages/[lang]/index.astro`.
- When a visitor selects a new language from the header dropdown, the selector uses the utilities in `src/utils/i18n.ts` to compute the correct localized URL while preserving any query parameters or hash fragments.

By keeping all translatable text inside the centralized data module and routing helpers in `src/utils/i18n.ts`, the UI components stay presentation-focused and can evolve without coupling the markup to specific languages.
