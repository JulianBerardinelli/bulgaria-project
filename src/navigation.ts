import dossierPdf from '~/assets/docs/sports-scouting-sudamerica-bulgaria.pdf';
import type { CallToAction } from '~/types';
import type { SupportedLanguage } from '~/utils/i18n';
import { DEFAULT_LANGUAGE } from '~/utils/i18n';

interface BaseLink {
  text?: string;
  href?: string;
  ariaLabel?: string;
  icon?: string;
}

export interface HeaderLink extends BaseLink {
  links?: Array<HeaderLink>;
}

export interface HeaderContent {
  homeHref: string;
  links: Array<HeaderLink>;
  actions: Array<CallToAction>;
}

export interface FooterSection {
  title?: string;
  links: Array<BaseLink>;
}

export interface FooterContent {
  homeHref: string;
  links: Array<FooterSection>;
  secondaryLinks: Array<BaseLink>;
  socialLinks: Array<BaseLink>;
  footNote?: string;
}

interface NavigationTranslation {
  header: {
    links: Array<BaseLink>;
    actionLabel: string;
  };
  footer: {
    sections: Array<{ title: string; items: Array<BaseLink> }>;
    secondary: Array<BaseLink>;
    footNote: string;
  };
}

const NAVIGATION_TRANSLATIONS: Record<SupportedLanguage, NavigationTranslation> = {
  es: {
    header: {
      links: [
        { text: 'Programa Integral', href: '#programa' },
        { text: 'Infraestructura', href: '#infraestructura' },
        { text: 'Talento y Formación', href: '#talento' },
        { text: 'Impacto Social', href: '#impacto' },
        { text: 'Contacto', href: '#contacto' },
      ],
      actionLabel: 'Descargar dossier',
    },
    footer: {
      sections: [
        {
          title: 'Ejes del proyecto',
          items: [
            { text: 'Objetivos estratégicos', href: '#programa' },
            { text: 'Ciudad Deportiva', href: '#infraestructura' },
            { text: 'Centros de Talento', href: '#talento' },
          ],
        },
        {
          title: 'Impacto y comunidad',
          items: [
            { text: 'Acción social', href: '#impacto' },
            { text: 'Desarrollo educativo', href: '#impacto' },
            { text: 'Eventos y Copa Bulgaria', href: '#programa' },
          ],
        },
        {
          title: 'Contacto',
          items: [
            { text: 'hola@sportsscouting.bg', href: 'mailto:hola@sportsscouting.bg' },
            { text: '+359 000 000 000', href: 'tel:+359000000000' },
            { text: 'Formulario de contacto', href: '#contacto' },
          ],
        },
      ],
      secondary: [],
      footNote: `© ${new Date().getFullYear()} Sports Scouting Sudamérica · Bulgaria. Proyecto deportivo integral para el desarrollo del fútbol profesional.`,
    },
  },
  en: {
    header: {
      links: [
        { text: 'Comprehensive Program', href: '#programa' },
        { text: 'Infrastructure', href: '#infraestructura' },
        { text: 'Talent & Development', href: '#talento' },
        { text: 'Social Impact', href: '#impacto' },
        { text: 'Contact', href: '#contacto' },
      ],
      actionLabel: 'Download dossier',
    },
    footer: {
      sections: [
        {
          title: 'Project pillars',
          items: [
            { text: 'Strategic objectives', href: '#programa' },
            { text: 'Sports City', href: '#infraestructura' },
            { text: 'Talent centers', href: '#talento' },
          ],
        },
        {
          title: 'Impact & community',
          items: [
            { text: 'Social action', href: '#impacto' },
            { text: 'Educational development', href: '#impacto' },
            { text: 'Events & Bulgaria Cup', href: '#programa' },
          ],
        },
        {
          title: 'Get in touch',
          items: [
            { text: 'hola@sportsscouting.bg', href: 'mailto:hola@sportsscouting.bg' },
            { text: '+359 000 000 000', href: 'tel:+359000000000' },
            { text: 'Contact form', href: '#contacto' },
          ],
        },
      ],
      secondary: [],
      footNote: `© ${new Date().getFullYear()} Sports Scouting South America · Bulgaria. An integrated sports project for professional football development.`,
    },
  },
  bg: {
    header: {
      links: [
        { text: 'Интегрална програма', href: '#programa' },
        { text: 'Инфраструктура', href: '#infraestructura' },
        { text: 'Талант и развитие', href: '#talento' },
        { text: 'Социално въздействие', href: '#impacto' },
        { text: 'Контакт', href: '#contacto' },
      ],
      actionLabel: 'Изтегли досие',
    },
    footer: {
      sections: [
        {
          title: 'Основни направления',
          items: [
            { text: 'Стратегически цели', href: '#programa' },
            { text: 'Спортен град', href: '#infraestructura' },
            { text: 'Центрове за таланти', href: '#talento' },
          ],
        },
        {
          title: 'Общество и ефект',
          items: [
            { text: 'Социални инициативи', href: '#impacto' },
            { text: 'Образователно развитие', href: '#impacto' },
            { text: 'Събития и Купа България', href: '#programa' },
          ],
        },
        {
          title: 'Свържете се',
          items: [
            { text: 'hola@sportsscouting.bg', href: 'mailto:hola@sportsscouting.bg' },
            { text: '+359 000 000 000', href: 'tel:+359000000000' },
            { text: 'Формуляр за контакт', href: '#contacto' },
          ],
        },
      ],
      secondary: [],
      footNote: `© ${new Date().getFullYear()} Sports Scouting South America · Bulgaria. Интегриран спортен проект за развитие на професионалния футбол.`,
    },
  },
};

const SOCIAL_LINKS: Array<BaseLink> = [
  { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/' },
  { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/' },
  { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/' },
];

const getHomeHref = (lang: SupportedLanguage) => (lang === DEFAULT_LANGUAGE ? '/' : `/${lang}`);

export const getNavigationData = (lang: SupportedLanguage): {
  headerData: HeaderContent;
  footerData: FooterContent;
} => {
  const translation = NAVIGATION_TRANSLATIONS[lang];

  return {
    headerData: {
      homeHref: getHomeHref(lang),
      links: translation.header.links,
      actions: [
        {
          text: translation.header.actionLabel,
          variant: 'secondary',
          icon: 'tabler:download',
          href: dossierPdf,
          download: true,
        },
      ],
    },
    footerData: {
      homeHref: getHomeHref(lang),
      links: translation.footer.sections.map((section) => ({
        title: section.title,
        links: section.items,
      })),
      secondaryLinks: translation.footer.secondary,
      socialLinks: SOCIAL_LINKS,
      footNote: translation.footer.footNote,
    },
  };
};
