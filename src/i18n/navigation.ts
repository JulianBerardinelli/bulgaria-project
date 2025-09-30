import { getAsset, getBlogPermalink, getPermalink } from '~/utils/permalinks';
import { DEFAULT_LANGUAGE, type LanguageCode } from './config';

const appendLangParam = (href: string, lang: LanguageCode): string => {
  if (!href || href === '#' || href.startsWith('http') || href.startsWith('mailto:')) {
    return href;
  }

  const [path, hash] = href.split('#');

  if (path.includes('lang=')) {
    return href;
  }

  const separator = path.includes('?') ? '&' : '?';
  const pathWithLang = `${path}${separator}lang=${lang}`;

  return hash ? `${pathWithLang}#${hash}` : pathWithLang;
};

const homesLinks = [
  { id: 'saas', href: getPermalink('/homes/saas') },
  { id: 'startup', href: getPermalink('/homes/startup') },
  { id: 'mobileApp', href: getPermalink('/homes/mobile-app') },
  { id: 'personal', href: getPermalink('/homes/personal') },
];

const pagesLinks = [
  { id: 'features', href: getPermalink('/#features') },
  { id: 'services', href: getPermalink('/services') },
  { id: 'pricing', href: getPermalink('/pricing') },
  { id: 'about', href: getPermalink('/about') },
  { id: 'contact', href: getPermalink('/contact') },
  { id: 'terms', href: getPermalink('/terms') },
  { id: 'privacy', href: getPermalink('/privacy') },
];

const landingLinks = [
  { id: 'leadGeneration', href: getPermalink('/landing/lead-generation') },
  { id: 'sales', href: getPermalink('/landing/sales') },
  { id: 'clickThrough', href: getPermalink('/landing/click-through') },
  { id: 'product', href: getPermalink('/landing/product') },
  { id: 'preLaunch', href: getPermalink('/landing/pre-launch') },
  { id: 'subscription', href: getPermalink('/landing/subscription') },
];

const blogLinks = [
  { id: 'list', href: getBlogPermalink() },
  { id: 'article', href: getPermalink('get-started-website-with-astro-tailwind-css', 'post') },
  { id: 'articleMdx', href: getPermalink('markdown-elements-demo-post', 'post') },
  { id: 'category', href: getPermalink('tutorials', 'category') },
  { id: 'tag', href: getPermalink('astro', 'tag') },
];

const footerSections = [
  { id: 'product', links: ['features', 'security', 'team', 'enterprise', 'stories', 'pricing', 'resources'] as const },
  { id: 'platform', links: ['api', 'partners', 'atom', 'electron', 'desktop'] as const },
  { id: 'support', links: ['docs', 'community', 'services', 'skills', 'status'] as const },
  { id: 'company', links: ['about', 'blog', 'careers', 'press', 'inclusion', 'impact', 'shop'] as const },
];

const headerTranslations: Record<LanguageCode, {
  homes: string;
  homesLinks: Record<(typeof homesLinks)[number]['id'], string>;
  pages: string;
  pagesLinks: Record<(typeof pagesLinks)[number]['id'], string>;
  landing: string;
  landingLinks: Record<(typeof landingLinks)[number]['id'], string>;
  blog: string;
  blogLinks: Record<(typeof blogLinks)[number]['id'], string>;
  widgets: string;
  actionDownload: string;
}> = {
  es: {
    homes: 'Inicios',
    homesLinks: {
      saas: 'SaaS',
      startup: 'Startups',
      mobileApp: 'Aplicaciones móviles',
      personal: 'Portafolios personales',
    },
    pages: 'Páginas',
    pagesLinks: {
      features: 'Características (ancla)',
      services: 'Servicios',
      pricing: 'Planes',
      about: 'Sobre nosotros',
      contact: 'Contacto',
      terms: 'Términos y condiciones',
      privacy: 'Política de privacidad',
    },
    landing: 'Landings',
    landingLinks: {
      leadGeneration: 'Generación de leads',
      sales: 'Ventas de alto impacto',
      clickThrough: 'Click-through',
      product: 'Ficha de producto / servicio',
      preLaunch: 'Prelanzamiento',
      subscription: 'Suscripciones',
    },
    blog: 'Blog',
    blogLinks: {
      list: 'Listado del blog',
      article: 'Artículo',
      articleMdx: 'Artículo (MDX)',
      category: 'Categorías',
      tag: 'Etiquetas',
    },
    widgets: 'Componentes',
    actionDownload: 'Descargar',
  },
  bg: {
    homes: 'Начало',
    homesLinks: {
      saas: 'SaaS',
      startup: 'Стартиращи компании',
      mobileApp: 'Мобилни приложения',
      personal: 'Лични портфолиа',
    },
    pages: 'Страници',
    pagesLinks: {
      features: 'Функционалности (котва)',
      services: 'Услуги',
      pricing: 'Цени',
      about: 'За нас',
      contact: 'Контакти',
      terms: 'Общи условия',
      privacy: 'Политика за поверителност',
    },
    landing: 'Лендинг страници',
    landingLinks: {
      leadGeneration: 'Генериране на лидове',
      sales: 'Продажбени страници',
      clickThrough: 'Click-through',
      product: 'Продукти и услуги',
      preLaunch: 'Преди официален старт',
      subscription: 'Абонаменти',
    },
    blog: 'Блог',
    blogLinks: {
      list: 'Блог статии',
      article: 'Статия',
      articleMdx: 'Статия (MDX)',
      category: 'Категории',
      tag: 'Тагове',
    },
    widgets: 'Уиджети',
    actionDownload: 'Изтегли',
  },
  en: {
    homes: 'Homes',
    homesLinks: {
      saas: 'SaaS',
      startup: 'Startup',
      mobileApp: 'Mobile App',
      personal: 'Personal',
    },
    pages: 'Pages',
    pagesLinks: {
      features: 'Features (Anchor Link)',
      services: 'Services',
      pricing: 'Pricing',
      about: 'About us',
      contact: 'Contact',
      terms: 'Terms',
      privacy: 'Privacy policy',
    },
    landing: 'Landing',
    landingLinks: {
      leadGeneration: 'Lead Generation',
      sales: 'Long-form Sales',
      clickThrough: 'Click-Through',
      product: 'Product Details (or Services)',
      preLaunch: 'Coming Soon or Pre-Launch',
      subscription: 'Subscription',
    },
    blog: 'Blog',
    blogLinks: {
      list: 'Blog List',
      article: 'Article',
      articleMdx: 'Article (with MDX)',
      category: 'Category Page',
      tag: 'Tag Page',
    },
    widgets: 'Widgets',
    actionDownload: 'Download',
  },
};

const footerTranslations: Record<LanguageCode, {
  titles: Record<(typeof footerSections)[number]['id'], string>;
  links: Record<(typeof footerSections)[number]['links'][number], string>;
  secondary: { terms: string; privacy: string };
  footNoteHtml: string;
}> = {
  es: {
    titles: {
      product: 'Producto',
      platform: 'Plataforma',
      support: 'Soporte',
      company: 'Compañía',
    },
    links: {
      features: 'Características',
      security: 'Seguridad',
      team: 'Equipo',
      enterprise: 'Empresas',
      stories: 'Historias de clientes',
      pricing: 'Planes',
      resources: 'Recursos',
      api: 'API para desarrolladores',
      partners: 'Partners',
      atom: 'Atom',
      electron: 'Electron',
      desktop: 'AstroWind Desktop',
      docs: 'Documentación',
      community: 'Comunidad',
      services: 'Servicios profesionales',
      skills: 'Academia',
      status: 'Estado',
      about: 'Sobre nosotros',
      blog: 'Blog',
      careers: 'Carreras',
      press: 'Prensa',
      inclusion: 'Inclusión',
      impact: 'Impacto social',
      shop: 'Tienda',
    },
    secondary: {
      terms: 'Términos',
      privacy: 'Política de privacidad',
    },
    footNoteHtml:
      'Creado por <a class="text-blue-600 underline dark:text-muted" href="https://github.com/arthelokyo">Arthelokyo</a> · Todos los derechos reservados.',
  },
  bg: {
    titles: {
      product: 'Продукт',
      platform: 'Платформа',
      support: 'Поддръжка',
      company: 'Компания',
    },
    links: {
      features: 'Функции',
      security: 'Сигурност',
      team: 'Екип',
      enterprise: 'Корпоративни клиенти',
      stories: 'Истории на клиенти',
      pricing: 'Ценоразпис',
      resources: 'Ресурси',
      api: 'API за разработчици',
      partners: 'Партньори',
      atom: 'Atom',
      electron: 'Electron',
      desktop: 'AstroWind Desktop',
      docs: 'Документация',
      community: 'Общност',
      services: 'Професионални услуги',
      skills: 'Умения',
      status: 'Статус',
      about: 'За нас',
      blog: 'Блог',
      careers: 'Кариери',
      press: 'Пресцентър',
      inclusion: 'Приобщаване',
      impact: 'Социално въздействие',
      shop: 'Магазин',
    },
    secondary: {
      terms: 'Условия',
      privacy: 'Политика за поверителност',
    },
    footNoteHtml:
      'Създадено от <a class="text-blue-600 underline dark:text-muted" href="https://github.com/arthelokyo">Arthelokyo</a> · Всички права запазени.',
  },
  en: {
    titles: {
      product: 'Product',
      platform: 'Platform',
      support: 'Support',
      company: 'Company',
    },
    links: {
      features: 'Features',
      security: 'Security',
      team: 'Team',
      enterprise: 'Enterprise',
      stories: 'Customer stories',
      pricing: 'Pricing',
      resources: 'Resources',
      api: 'Developer API',
      partners: 'Partners',
      atom: 'Atom',
      electron: 'Electron',
      desktop: 'AstroWind Desktop',
      docs: 'Docs',
      community: 'Community Forum',
      services: 'Professional Services',
      skills: 'Skills',
      status: 'Status',
      about: 'About',
      blog: 'Blog',
      careers: 'Careers',
      press: 'Press',
      inclusion: 'Inclusion',
      impact: 'Social Impact',
      shop: 'Shop',
    },
    secondary: {
      terms: 'Terms',
      privacy: 'Privacy Policy',
    },
    footNoteHtml:
      'Made by <a class="text-blue-600 underline dark:text-muted" href="https://github.com/arthelokyo">Arthelokyo</a> · All rights reserved.',
  },
};

const mapLinks = <T extends { id: string; href: string }>(
  items: T[],
  labels: Record<string, string>,
  lang: LanguageCode,
) =>
  items.map((item) => ({
    text: labels[item.id] ?? item.id,
    href: appendLangParam(item.href, lang),
  }));

export const getHeaderData = (lang: LanguageCode = DEFAULT_LANGUAGE) => {
  const t = headerTranslations[lang];

  return {
    links: [
      {
        text: t.homes,
        links: mapLinks(homesLinks, t.homesLinks, lang),
      },
      {
        text: t.pages,
        links: mapLinks(pagesLinks, t.pagesLinks, lang),
      },
      {
        text: t.landing,
        links: mapLinks(landingLinks, t.landingLinks, lang),
      },
      {
        text: t.blog,
        links: mapLinks(blogLinks, t.blogLinks, lang),
      },
      {
        text: t.widgets,
        href: '#',
      },
    ],
    actions: [
      {
        text: t.actionDownload,
        href: 'https://github.com/arthelokyo/astrowind',
        target: '_blank',
      },
    ],
  };
};

export const getFooterData = (lang: LanguageCode = DEFAULT_LANGUAGE) => {
  const t = footerTranslations[lang];

  return {
    links: footerSections.map((section) => ({
      title: t.titles[section.id],
      links: section.links.map((linkId) => ({
        text: t.links[linkId],
        href: '#',
      })),
    })),
    secondaryLinks: [
      { text: t.secondary.terms, href: appendLangParam(getPermalink('/terms'), lang) },
      { text: t.secondary.privacy, href: appendLangParam(getPermalink('/privacy'), lang) },
    ],
    socialLinks: [
      { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
      { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
      { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
      { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
      { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/arthelokyo/astrowind' },
    ],
    footNote: t.footNoteHtml,
  };
};

export const headerData = getHeaderData(DEFAULT_LANGUAGE);
export const footerData = getFooterData(DEFAULT_LANGUAGE);
