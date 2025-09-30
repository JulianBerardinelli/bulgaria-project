import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Programa Integral',
      href: getPermalink('#programa'),
    },
    {
      text: 'Infraestructura',
      href: getPermalink('#infraestructura'),
    },
    {
      text: 'Talento y Formación',
      href: getPermalink('#talento'),
    },
    {
      text: 'Impacto Social',
      href: getPermalink('#impacto'),
    },
    {
      text: 'Contacto',
      href: getPermalink('#contacto'),
    },
  ],
  actions: [
    {
      text: 'Descargar dossier',
      variant: 'secondary',
      type: 'button',
      icon: 'tabler:download',
      title: 'Disponible próximamente',
      'aria-disabled': 'true',
      disabled: true,
      class: 'cursor-not-allowed opacity-70 hover:opacity-70 focus:outline-none focus:ring-0',
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Ejes del proyecto',
      links: [
        { text: 'Objetivos estratégicos', href: getPermalink('#programa') },
        { text: 'Ciudad Deportiva', href: getPermalink('#infraestructura') },
        { text: 'Centros de Talento', href: getPermalink('#talento') },
      ],
    },
    {
      title: 'Impacto y comunidad',
      links: [
        { text: 'Acción social', href: getPermalink('#impacto') },
        { text: 'Desarrollo educativo', href: getPermalink('#impacto') },
        { text: 'Eventos y Copa Bulgaria', href: getPermalink('#programa') },
      ],
    },
    {
      title: 'Contacto',
      links: [
        { text: 'hola@sportsscouting.bg', href: 'mailto:hola@sportsscouting.bg' },
        { text: '+359 000 000 000', href: 'tel:+359000000000' },
        { text: 'Formulario de contacto', href: getPermalink('#contacto') },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/' },
  ],
  footNote: `
    © ${new Date().getFullYear()} Sports Scouting Sudamérica · Bulgaria. Proyecto deportivo integral para el desarrollo del fútbol profesional.
  `,
};
