import { DEFAULT_LANGUAGE, type LanguageCode } from './config';

interface Action {
  text: string;
  href: string;
  target?: string;
  icon?: string;
  variant?: string;
}

interface FeatureItem {
  title: string;
  description: string;
  icon: string;
}

interface ContentSection {
  isReversed?: boolean;
  isAfterContent?: boolean;
  tagline?: string;
  title?: string;
  items: Array<{ title: string; description: string }>;
  contentHtml: string;
  imageAlt: string;
  imageSrc: string;
  background?: boolean;
}

interface TimelineItem {
  title: string;
  description?: string;
  icon: string;
}

interface SimpleItem {
  title: string;
  description: string;
  icon: string;
}

interface FAQItem {
  title: string;
  description: string;
}

export interface LandingContent {
  metadata: { title: string; description: string };
  hero: {
    titleHtml: string;
    subtitleHtml: string;
    actions: Action[];
    imageAlt: string;
  };
  note: { title: string; description: string };
  features: {
    tagline: string;
    title: string;
    subtitle: string;
    items: FeatureItem[];
  };
  contentSections: ContentSection[];
  steps: {
    title: string;
    items: TimelineItem[];
  };
  features2: {
    title: string;
    subtitle: string;
    tagline: string;
    items: SimpleItem[];
  };
  blog: {
    title: string;
    informationHtml: string;
    linkText: string;
  };
  faqs: {
    title: string;
    subtitle: string;
    tagline: string;
    items: FAQItem[];
  };
  stats: Array<{ title: string; amount: string }>;
  callToAction: {
    actions: Action[];
    titleHtml: string;
    subtitleHtml: string;
  };
}

export const landingContent: Record<LanguageCode, LandingContent> = {
  en: {
    metadata: {
      title: 'Bulgaria Project — Build multilingual experiences with AstroWind',
      description:
        'Professional landing page template optimized for Spanish, Bulgarian, and English audiences using Astro 5.0 and Tailwind CSS.',
    },
    hero: {
      titleHtml:
        'Flexible template for <span class="hidden xl:inline">building multilingual experiences with</span><span class="text-accent dark:text-white"> Astro 5.0</span> + Tailwind CSS',
      subtitleHtml:
        '<span class="hidden sm:inline"><span class="font-semibold">Bulgaria Project</span> delivers a production-ready AstroWind implementation for teams that need a consistent multilingual presence.</span><span class="block mb-1 sm:hidden font-bold text-blue-600">AstroWind, tailored for multilingual launch.</span>Launch refined experiences for startups, agencies, and digital products in minutes.',
      actions: [
        {
          variant: 'primary',
          text: 'Get template',
          href: 'https://github.com/arthelokyo/astrowind',
          target: '_blank',
          icon: 'tabler:download',
        },
        { text: 'Explore features', href: '#features' },
      ],
      imageAlt: 'AstroWind hero illustration',
    },
    note: {
      title: 'Philosophy:',
      description: 'Simplicity, best practices, and measurable performance.',
    },
    features: {
      tagline: 'Features',
      title: 'Why teams choose AstroWind',
      subtitle: 'A professional-grade toolkit for multilingual sites and high-performing marketing teams.',
      items: [
        {
          title: 'Astro + Tailwind CSS integration',
          description: 'A cohesive stack that keeps codebases lean, fast, and maintainable across languages.',
          icon: 'tabler:brand-tailwind',
        },
        {
          title: 'Ready-to-use components',
          description: 'Reusable widgets optimized for marketing sites, SaaS products, and corporate storytelling.',
          icon: 'tabler:components',
        },
        {
          title: 'Governance & best practices',
          description: 'Built with robust conventions that streamline reviews, localization workflows, and compliance.',
          icon: 'tabler:list-check',
        },
        {
          title: 'Exceptional performance',
          description: 'Delivers lightning-fast load times that translate into higher engagement and conversion rates.',
          icon: 'tabler:rocket',
        },
        {
          title: 'SEO foundations',
          description: 'Structured metadata, accessible markup, and semantic defaults to grow organic traffic.',
          icon: 'tabler:arrows-right-left',
        },
        {
          title: 'Open for collaboration',
          description: 'Extensible patterns that welcome contributions, experimentation, and continuous improvement.',
          icon: 'tabler:bulb',
        },
      ],
    },
    contentSections: [
      {
        isReversed: true,
        tagline: 'Inside the template',
        title: 'An architecture that scales with your roadmap',
        items: [
          {
            title: 'Built on Astro 5.0',
            description: 'Harness a modern static-first framework engineered for speed and resilience.',
          },
          {
            title: 'Tailwind CSS at scale',
            description: 'Ship polished interfaces faster with a proven design system and utility classes.',
          },
          {
            title: 'Cross-browser consistency',
            description: 'Guarantee a unified experience across devices, locales, and major browsers.',
          },
        ],
        contentHtml:
          '<h3 class="text-2xl font-bold tracking-tight dark:text-white sm:text-3xl mb-2">Build on modern foundations</h3>Empower your team with maintainable workflows and confident releases.',
        imageAlt: 'Colorful workflow illustration',
        imageSrc:
          'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        background: true,
      },
      {
        isAfterContent: true,
        items: [
          {
            title: 'High level of customization',
            description: "Tailor each section to your brand while keeping a coherent structure across markets.",
          },
          {
            title: 'Multiple layout possibilities',
            description: 'Explore flexible layouts that elevate storytelling and guide visitors effortlessly.',
          },
          {
            title: 'Fully responsive design',
            description: 'Ensure flawless experiences from mobile to desktop with responsive defaults.',
          },
          {
            title: 'Integration of media',
            description: 'Embed visuals, videos, and rich media that reinforce your value proposition.',
          },
        ],
        contentHtml: 'Ensure your online presence truly represents your brand.',
        imageAlt: 'Blueprint illustration',
        imageSrc:
          'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2194&q=80',
        background: true,
      },
      {
        isReversed: true,
        isAfterContent: true,
        items: [
          {
            title: 'Enhanced user engagement',
            description: 'Design intuitive journeys that encourage longer sessions and stronger conversions.',
          },
          {
            title: 'Continuous improvement',
            description: 'Iterate with confidence thanks to modular components and transparent versioning.',
          },
          {
            title: 'Time and resource efficiency',
            description: 'Reduce development overhead and focus on delivering impactful campaigns.',
          },
          {
            title: 'Community support',
            description: 'Join an active ecosystem for guidance, insights, and ongoing innovation.',
          },
        ],
        contentHtml: 'Designed to foster growth and long-term success.',
        imageAlt: 'Astronauts collaboration illustration',
        imageSrc:
          'https://images.unsplash.com/photo-1611462985358-60d3498e0364?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        background: true,
      },
    ],
    steps: {
      title: 'Launch your multilingual presence with AstroWind in four steps.',
      items: [
        {
          title: 'Step 1: <span class="font-medium">Download</span>',
          description:
            'Clone the repository or start from the template to inherit the optimized configuration.',
          icon: 'tabler:package',
        },
        {
          title: 'Step 2: <span class="font-medium">Add content</span>',
          description:
            'Structure copy, imagery, and localized assets with the provided content blocks.',
          icon: 'tabler:letter-case',
        },
        {
          title: 'Step 3: <span class="font-medium">Customize styles</span>',
          description:
            'Extend Tailwind tokens, components, and transitions to reflect your brand guidelines.',
          icon: 'tabler:paint',
        },
        {
          title: 'Launch',
          description: 'Deploy with analytics, SEO, and accessibility foundations already in place.',
          icon: 'tabler:check',
        },
      ],
    },
    features2: {
      title: 'Core interface components',
      subtitle: 'Essential building blocks to accelerate dependable web experiences.',
      tagline: 'Components',
      items: [
        {
          title: 'Headers',
          description: 'Establish clear navigation patterns and brand presence across every language.',
          icon: 'flat-color-icons:template',
        },
        {
          title: 'Hero sections',
          description: 'Make a compelling first impression with responsive hero layouts.',
          icon: 'flat-color-icons:gallery',
        },
        {
          title: 'Features',
          description: 'Present value propositions succinctly with structured, scannable content.',
          icon: 'flat-color-icons:approval',
        },
        {
          title: 'Content blocks',
          description: 'Deliver narratives that combine copy, imagery, and supporting facts seamlessly.',
          icon: 'flat-color-icons:document',
        },
        {
          title: 'Calls to action',
          description: 'Guide visitors toward the next step with persuasive, well-placed CTAs.',
          icon: 'flat-color-icons:advertising',
        },
        {
          title: 'Pricing tables',
          description: 'Communicate plans and value with clarity for global audiences.',
          icon: 'flat-color-icons:currency-exchange',
        },
        {
          title: 'Testimonials',
          description: 'Build trust through curated feedback and credible success stories.',
          icon: 'flat-color-icons:voice-presentation',
        },
        {
          title: 'Contact sections',
          description: 'Facilitate meaningful conversations with accessible inquiry forms.',
          icon: 'flat-color-icons:business-contact',
        },
        {
          title: 'Footers',
          description: 'Offer comprehensive links, compliance details, and secondary navigation.',
          icon: 'flat-color-icons:database',
        },
      ],
    },
    blog: {
      title: 'Latest insights from our blog',
      informationHtml:
        'Explore implementation guides, localization strategies, and AstroWind release notes. Every article helps you deliver premium web experiences backed by Astro + Tailwind CSS.',
      linkText: 'View all posts',
    },
    faqs: {
      title: 'Frequently asked questions',
      subtitle:
        'Get clarity on implementation, localization workflows, and the value AstroWind brings to your team.',
      tagline: 'FAQs',
      items: [
        {
          title: 'Why should I choose AstroWind for multilingual projects?',
          description:
            'AstroWind combines a modern architecture with reusable components, enabling teams to launch localized sites faster while keeping performance and governance under control.',
        },
        {
          title: 'What do I need to get started?',
          description:
            'A basic understanding of Astro and Tailwind CSS is enough. Clone the repository, install dependencies, and follow the documentation to adapt the content to your brand.',
        },
        {
          title: 'How do I integrate my own CMS or data source?',
          description:
            'The project structure is modular and can connect to headless CMS platforms or APIs. Replace the data providers with your own endpoints and adjust the content models.',
        },
        {
          title: 'Can I keep accessibility standards while customizing?',
          description:
            'Yes. Components are built with semantic HTML and accessible defaults. As you customize, follow the included guidelines to preserve contrast, focus states, and keyboard navigation.',
        },
        {
          title: 'Is there guidance for deploying to production?',
          description:
            'AstroWind works with modern hosting providers such as Vercel, Netlify, or your own infrastructure. Review the deployment recipes in the documentation for each environment.',
        },
        {
          title: 'How can my team contribute back to the project?',
          description:
            'Fork the repository, implement your improvements, and open a pull request. Contributions that improve performance, accessibility, or localization support are especially welcome.',
        },
      ],
    },
    stats: [
      { title: 'Downloads', amount: '132K' },
      { title: 'Stars', amount: '24.8K' },
      { title: 'Forks', amount: '10.3K' },
      { title: 'Users', amount: '48.4K' },
    ],
    callToAction: {
      actions: [
        {
          variant: 'primary',
          text: 'Get template',
          href: 'https://github.com/arthelokyo/astrowind',
          target: '_blank',
          icon: 'tabler:download',
        },
      ],
      titleHtml: 'Astro&nbsp;+&nbsp;<br class="block sm:hidden" /><span class="sm:whitespace-nowrap">Tailwind CSS</span>',
      subtitleHtml:
        'Experience a launch-ready stack with translation workflows, performance, and SEO handled from day one.',
    },
  },
  es: {
    metadata: {
      title: 'Bulgaria Project — Crea experiencias multilingües con AstroWind',
      description:
        'Landing page profesional optimizada para audiencias en español, búlgaro e inglés, desarrollada con Astro 5.0 y Tailwind CSS.',
    },
    hero: {
      titleHtml:
        'Plantilla flexible para <span class="hidden xl:inline">crear experiencias multilingües con</span><span class="text-accent dark:text-white"> Astro 5.0</span> + Tailwind CSS',
      subtitleHtml:
        '<span class="hidden sm:inline"><span class="font-semibold">Bulgaria Project</span> ofrece una implementación de AstroWind lista para producción que garantiza una presencia multilingüe consistente.</span><span class="block mb-1 sm:hidden font-bold text-blue-600">AstroWind, diseñado para un lanzamiento global.</span>Lanza experiencias refinadas para startups, agencias y productos digitales en minutos.',
      actions: [
        {
          variant: 'primary',
          text: 'Obtener plantilla',
          href: 'https://github.com/arthelokyo/astrowind',
          target: '_blank',
          icon: 'tabler:download',
        },
        { text: 'Ver funcionalidades', href: '#features' },
      ],
      imageAlt: 'Ilustración principal de AstroWind',
    },
    note: {
      title: 'Filosofía:',
      description: 'Simplicidad, buenas prácticas y rendimiento medible.',
    },
    features: {
      tagline: 'Funcionalidades',
      title: 'Por qué los equipos eligen AstroWind',
      subtitle: 'Un kit de herramientas profesional para sitios multilingües y equipos de marketing de alto desempeño.',
      items: [
        {
          title: 'Integración Astro + Tailwind CSS',
          description: 'Un stack cohesionado que mantiene el código ágil, rápido y fácil de mantener en cualquier idioma.',
          icon: 'tabler:brand-tailwind',
        },
        {
          title: 'Componentes listos para usar',
          description: 'Widgets reutilizables optimizados para sitios de marketing, productos SaaS y comunicación corporativa.',
          icon: 'tabler:components',
        },
        {
          title: 'Gobernanza y buenas prácticas',
          description: 'Estructura sólida que simplifica las revisiones, la localización y el cumplimiento normativo.',
          icon: 'tabler:list-check',
        },
        {
          title: 'Rendimiento excepcional',
          description: 'Velocidades de carga sobresalientes que se traducen en mayor interacción y conversión.',
          icon: 'tabler:rocket',
        },
        {
          title: 'Bases SEO',
          description: 'Metadatos estructurados y marcado accesible para impulsar el tráfico orgánico.',
          icon: 'tabler:arrows-right-left',
        },
        {
          title: 'Abierto a la colaboración',
          description: 'Patrones extensibles que favorecen contribuciones, experimentación y mejora continua.',
          icon: 'tabler:bulb',
        },
      ],
    },
    contentSections: [
      {
        isReversed: true,
        tagline: 'Dentro de la plantilla',
        title: 'Una arquitectura que crece con tu hoja de ruta',
        items: [
          {
            title: 'Construido sobre Astro 5.0',
            description: 'Aprovecha un framework moderno, estático y veloz pensado para la resiliencia.',
          },
          {
            title: 'Tailwind CSS a escala',
            description: 'Entrega interfaces pulidas más rápido con un sistema de diseño probado.',
          },
          {
            title: 'Consistencia cross-browser',
            description: 'Garantiza una experiencia unificada en dispositivos, idiomas y navegadores.',
          },
        ],
        contentHtml:
          '<h3 class="text-2xl font-bold tracking-tight dark:text-white sm:text-3xl mb-2">Base sólida y moderna</h3>Impulsa a tu equipo con flujos de trabajo mantenibles y despliegues seguros.',
        imageAlt: 'Ilustración de flujo de trabajo',
        imageSrc:
          'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        background: true,
      },
      {
        isAfterContent: true,
        items: [
          {
            title: 'Personalización de alto nivel',
            description: 'Adapta cada sección a tu marca sin perder coherencia entre mercados.',
          },
          {
            title: 'Diversidad de diseños',
            description: 'Explora estructuras flexibles que elevan la narrativa y guían al usuario.',
          },
          {
            title: 'Diseño totalmente responsive',
            description: 'Garantiza experiencias impecables desde móviles hasta escritorios.',
          },
          {
            title: 'Integración de medios',
            description: 'Incorpora imágenes y videos que refuercen tu propuesta de valor.',
          },
        ],
        contentHtml: 'Cuida que tu presencia digital represente fielmente a tu organización.',
        imageAlt: 'Ilustración de planos',
        imageSrc:
          'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2194&q=80',
        background: true,
      },
      {
        isReversed: true,
        isAfterContent: true,
        items: [
          {
            title: 'Mayor interacción',
            description: 'Diseña recorridos intuitivos que fomenten sesiones más largas y conversiones sólidas.',
          },
          {
            title: 'Mejora continua',
            description: 'Itera con confianza gracias a componentes modulares y versionado transparente.',
          },
          {
            title: 'Eficiencia de tiempo y recursos',
            description: 'Reduce la carga de desarrollo y enfócate en campañas de alto impacto.',
          },
          {
            title: 'Comunidad activa',
            description: 'Accede a una red dinámica para recibir soporte, aprendizajes y nuevas ideas.',
          },
        ],
        contentHtml: 'Pensado para impulsar el crecimiento y el éxito sostenido.',
        imageAlt: 'Ilustración de colaboración entre astronautas',
        imageSrc:
          'https://images.unsplash.com/photo-1611462985358-60d3498e0364?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        background: true,
      },
    ],
    steps: {
      title: 'Lanza tu presencia multilingüe con AstroWind en cuatro pasos.',
      items: [
        {
          title: 'Paso 1: <span class="font-medium">Descargar</span>',
          description: 'Clona el repositorio o inicia desde la plantilla para heredar la configuración optimizada.',
          icon: 'tabler:package',
        },
        {
          title: 'Paso 2: <span class="font-medium">Agregar contenido</span>',
          description: 'Organiza textos, imágenes y activos localizados con los bloques disponibles.',
          icon: 'tabler:letter-case',
        },
        {
          title: 'Paso 3: <span class="font-medium">Personalizar estilos</span>',
          description: 'Extiende tokens y componentes Tailwind para alinearlos con tu identidad visual.',
          icon: 'tabler:paint',
        },
        {
          title: 'Lanzar',
          description: 'Despliega con analítica, SEO y accesibilidad listos desde el primer día.',
          icon: 'tabler:check',
        },
      ],
    },
    features2: {
      title: 'Componentes clave de la interfaz',
      subtitle: 'Bloques esenciales para acelerar experiencias web fiables.',
      tagline: 'Componentes',
      items: [
        {
          title: 'Encabezados',
          description: 'Define rutas de navegación claras y refuerza tu marca en cada idioma.',
          icon: 'flat-color-icons:template',
        },
        {
          title: 'Secciones hero',
          description: 'Genera primeras impresiones impactantes con diseños responsivos.',
          icon: 'flat-color-icons:gallery',
        },
        {
          title: 'Destacados',
          description: 'Resume propuestas de valor con contenido estructurado y fácil de escanear.',
          icon: 'flat-color-icons:approval',
        },
        {
          title: 'Bloques de contenido',
          description: 'Combina texto, imagen y datos de apoyo para contar historias consistentes.',
          icon: 'flat-color-icons:document',
        },
        {
          title: 'Llamados a la acción',
          description: 'Orientan al usuario al siguiente paso con mensajes claros y convincentes.',
          icon: 'flat-color-icons:advertising',
        },
        {
          title: 'Tablas de precios',
          description: 'Comunica planes y beneficios de forma transparente para audiencias globales.',
          icon: 'flat-color-icons:currency-exchange',
        },
        {
          title: 'Testimonios',
          description: 'Genera confianza con comentarios verificados y casos de éxito.',
          icon: 'flat-color-icons:voice-presentation',
        },
        {
          title: 'Secciones de contacto',
          description: 'Facilita conversaciones con formularios accesibles y claros.',
          icon: 'flat-color-icons:business-contact',
        },
        {
          title: 'Pies de página',
          description: 'Incluye enlaces complementarios, avisos legales y navegación secundaria.',
          icon: 'flat-color-icons:database',
        },
      ],
    },
    blog: {
      title: 'Novedades y guías en nuestro blog',
      informationHtml:
        'Descubre guías de implementación, estrategias de localización y notas de lanzamiento de AstroWind. Cada artículo te ayuda a ofrecer experiencias web superiores con Astro + Tailwind CSS.',
      linkText: 'Ver todas las publicaciones',
    },
    faqs: {
      title: 'Preguntas frecuentes',
      subtitle: 'Aclara dudas sobre implementación, flujos de localización y el valor que AstroWind aporta a tu equipo.',
      tagline: 'FAQs',
      items: [
        {
          title: '¿Por qué elegir AstroWind para proyectos multilingües?',
          description:
            'AstroWind combina arquitectura moderna y componentes reutilizables para lanzar sitios localizados con rapidez, manteniendo el rendimiento y la gobernanza bajo control.',
        },
        {
          title: '¿Qué necesito para comenzar?',
          description:
            'Basta con conocimientos básicos de Astro y Tailwind CSS. Clona el repositorio, instala dependencias y adapta el contenido siguiendo la documentación.',
        },
        {
          title: '¿Cómo integro mi propio CMS o fuente de datos?',
          description:
            'La estructura es modular y se conecta fácilmente con CMS headless o APIs. Sustituye los proveedores de datos por tus endpoints y ajusta los modelos de contenido.',
        },
        {
          title: '¿Puedo mantener la accesibilidad al personalizar?',
          description:
            'Sí. Los componentes utilizan HTML semántico y valores accesibles. Mantén los contrastes, estados de foco y navegación por teclado para conservar la experiencia inclusiva.',
        },
        {
          title: '¿Existe guía para desplegar en producción?',
          description:
            'AstroWind es compatible con Vercel, Netlify u otras infraestructuras. Consulta las recetas de despliegue en la documentación para cada escenario.',
        },
        {
          title: '¿Cómo puede mi equipo contribuir al proyecto?',
          description:
            'Haz un fork del repositorio, implementa mejoras y envía un pull request. Se valoran especialmente los aportes que optimicen rendimiento, accesibilidad o localización.',
        },
      ],
    },
    stats: [
      { title: 'Descargas', amount: '132K' },
      { title: 'Estrellas', amount: '24.8K' },
      { title: 'Repositorios derivados', amount: '10.3K' },
      { title: 'Usuarios', amount: '48.4K' },
    ],
    callToAction: {
      actions: [
        {
          variant: 'primary',
          text: 'Obtener plantilla',
          href: 'https://github.com/arthelokyo/astrowind',
          target: '_blank',
          icon: 'tabler:download',
        },
      ],
      titleHtml: 'Astro&nbsp;+&nbsp;<br class="block sm:hidden" /><span class="sm:whitespace-nowrap">Tailwind CSS</span>',
      subtitleHtml:
        'Descubre un stack listo para lanzar con flujos de traducción, rendimiento y SEO resueltos desde el día uno.',
    },
  },
  bg: {
    metadata: {
      title: 'Bulgaria Project — Многоезични изживявания с AstroWind',
      description:
        'Професионална лендинг страница, оптимизирана за българска, испанска и английска аудитория, изградена с Astro 5.0 и Tailwind CSS.',
    },
    hero: {
      titleHtml:
        'Гъвкава шаблонна база за <span class="hidden xl:inline">изграждане на многоезични изживявания с</span><span class="text-accent dark:text-white"> Astro 5.0</span> + Tailwind CSS',
      subtitleHtml:
        '<span class="hidden sm:inline"><span class="font-semibold">Bulgaria Project</span> предоставя готова за продукция имплементация на AstroWind за екипи, които търсят консистентно присъствие на различни езици.</span><span class="block mb-1 sm:hidden font-bold text-blue-600">AstroWind, създаден за международен старт.</span>Стартирайте прецизирани изживявания за стартиращи компании, агенции и дигитални продукти за минути.',
      actions: [
        {
          variant: 'primary',
          text: 'Изтегли шаблона',
          href: 'https://github.com/arthelokyo/astrowind',
          target: '_blank',
          icon: 'tabler:download',
        },
        { text: 'Разгледай възможностите', href: '#features' },
      ],
      imageAlt: 'Илюстрация на AstroWind',
    },
    note: {
      title: 'Философия:',
      description: 'Простота, добри практики и измерим резултат.',
    },
    features: {
      tagline: 'Функционалности',
      title: 'Защо екипите избират AstroWind',
      subtitle:
        'Професионален комплект за многоезични сайтове и маркетинг екипи, които работят на високо ниво.',
      items: [
        {
          title: 'Интеграция Astro + Tailwind CSS',
          description: 'Хармоничен стек, който поддържа кода лек, бърз и лесен за управление на няколко езика.',
          icon: 'tabler:brand-tailwind',
        },
        {
          title: 'Готови компоненти',
          description: 'Повторно използваеми уиджети за маркетинг сайтове, SaaS продукти и корпоративни истории.',
          icon: 'tabler:components',
        },
        {
          title: 'Управление и най-добри практики',
          description: 'Стабилни конвенции, които улесняват ревюта, локализация и регулаторно съответствие.',
          icon: 'tabler:list-check',
        },
        {
          title: 'Изключителна производителност',
          description: 'Мълниеносни времена за зареждане, които носят по-високо ангажиране и конверсия.',
          icon: 'tabler:rocket',
        },
        {
          title: 'SEO основи',
          description: 'Структурирани метаданни и достъпно маркиране за устойчив органичен растеж.',
          icon: 'tabler:arrows-right-left',
        },
        {
          title: 'Отворен за сътрудничество',
          description: 'Разширяеми модели, които насърчават принос, експерименти и непрекъснато усъвършенстване.',
          icon: 'tabler:bulb',
        },
      ],
    },
    contentSections: [
      {
        isReversed: true,
        tagline: 'Вътре в шаблона',
        title: 'Архитектура, която расте заедно с вашата стратегия',
        items: [
          {
            title: 'Изграден върху Astro 5.0',
            description: 'Съвременен, статичен и бърз фреймуърк, проектиран за надеждност.',
          },
          {
            title: 'Tailwind CSS в мащаб',
            description: 'Създавайте завършени интерфейси по-бързо с утвърдена дизайн система.',
          },
          {
            title: 'Последователност във всеки браузър',
            description: 'Гарантирайте еднообразно изживяване на устройства, езици и браузъри.',
          },
        ],
        contentHtml:
          '<h3 class="text-2xl font-bold tracking-tight dark:text-white sm:text-3xl mb-2">Съвременни основи</h3>Дайте на екипа си устойчиви процеси и сигурни релийзи.',
        imageAlt: 'Илюстрация на работен процес',
        imageSrc:
          'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        background: true,
      },
      {
        isAfterContent: true,
        items: [
          {
            title: 'Висока степен на персонализация',
            description: 'Настройвайте всяка секция според бранда, без да жертвате консистентността.',
          },
          {
            title: 'Разнообразни оформления',
            description: 'Използвайте гъвкави структури, които подкрепят историята и насочват вниманието.',
          },
          {
            title: 'Напълно адаптивен дизайн',
            description: 'Безупречно представяне от мобилни устройства до настолни компютри.',
          },
          {
            title: 'Интеграция на медия',
            description: 'Вграждайте изображения и видео, които подсилват стойностното предложение.',
          },
        ],
        contentHtml: 'Представяйте организацията си автентично във всяка точка на допир.',
        imageAlt: 'Илюстрация на планове',
        imageSrc:
          'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2194&q=80',
        background: true,
      },
      {
        isReversed: true,
        isAfterContent: true,
        items: [
          {
            title: 'Повишено ангажиране',
            description: 'Интуитивни пътеки, които насърчават по-дълги посещения и стабилни резултати.',
          },
          {
            title: 'Непрекъснато усъвършенстване',
            description: 'Модулни компоненти и проследима история за уверени итерации.',
          },
          {
            title: 'Ефективност на ресурси',
            description: 'Съкратете разходите по разработка и фокусирайте усилията си върху кампаниите.',
          },
          {
            title: 'Подкрепяща общност',
            description: 'Активна екосистема за насоки, знания и съвместно развитие.',
          },
        ],
        contentHtml: 'Проектирано за растеж и дългосрочен успех.',
        imageAlt: 'Илюстрация на екип от астронавти',
        imageSrc:
          'https://images.unsplash.com/photo-1611462985358-60d3498e0364?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        background: true,
      },
    ],
    steps: {
      title: 'Стартирайте многоезично присъствие с AstroWind в четири стъпки.',
      items: [
        {
          title: 'Стъпка 1: <span class="font-medium">Изтеглете</span>',
          description: 'Клонирайте репозитория или започнете от шаблона и използвайте оптимизираната конфигурация.',
          icon: 'tabler:package',
        },
        {
          title: 'Стъпка 2: <span class="font-medium">Добавете съдържание</span>',
          description: 'Организирайте текстове, изображения и локализирани ресурси с готовите блокове.',
          icon: 'tabler:letter-case',
        },
        {
          title: 'Стъпка 3: <span class="font-medium">Персонализирайте стила</span>',
          description: 'Разширете Tailwind токените и компонентите, за да следват вашите бранд насоки.',
          icon: 'tabler:paint',
        },
        {
          title: 'Пуснете онлайн',
          description: 'Деплойте с активирана аналитика, SEO и достъпност от първия ден.',
          icon: 'tabler:check',
        },
      ],
    },
    features2: {
      title: 'Основни елементи на интерфейса',
      subtitle: 'Ключови блокове, които ускоряват надеждни уеб изживявания.',
      tagline: 'Компоненти',
      items: [
        {
          title: 'Хедъри',
          description: 'Осигуряват ясна навигация и разпознаваем бранд на всеки език.',
          icon: 'flat-color-icons:template',
        },
        {
          title: 'Hero секции',
          description: 'Първо впечатление с адаптивни и въздействащи оформления.',
          icon: 'flat-color-icons:gallery',
        },
        {
          title: 'Функционалности',
          description: 'Представят стойностните предложения кратко и структурирано.',
          icon: 'flat-color-icons:approval',
        },
        {
          title: 'Съдържателни блокове',
          description: 'Комбинират текст, визия и факти за последователно разказване.',
          icon: 'flat-color-icons:document',
        },
        {
          title: 'Призиви за действие',
          description: 'Насочват посетителя към следващата стъпка с ясни послания.',
          icon: 'flat-color-icons:advertising',
        },
        {
          title: 'Ценови таблици',
          description: 'Обясняват планове и стойност прозрачно за глобална аудитория.',
          icon: 'flat-color-icons:currency-exchange',
        },
        {
          title: 'Препоръки',
          description: 'Повишават доверието чрез реални истории за успех.',
          icon: 'flat-color-icons:voice-presentation',
        },
        {
          title: 'Контактни секции',
          description: 'Улесняват диалог чрез достъпни и ясни форми.',
          icon: 'flat-color-icons:business-contact',
        },
        {
          title: 'Футъри',
          description: 'Предоставят допълнителни връзки, правни бележки и вторична навигация.',
          icon: 'flat-color-icons:database',
        },
      ],
    },
    blog: {
      title: 'Актуални материали от блога',
      informationHtml:
        'Разгледайте ръководства за имплементация, стратегии за локализация и новини около AstroWind. Всяка публикация подпомага създаването на първокласни сайтове с Astro + Tailwind CSS.',
      linkText: 'Виж всички статии',
    },
    faqs: {
      title: 'Често задавани въпроси',
      subtitle:
        'Получете яснота относно имплементацията, процесите по локализация и ползите от AstroWind за вашия екип.',
      tagline: 'FAQs',
      items: [
        {
          title: 'Защо AstroWind е подходящ за многоезични проекти?',
          description:
            'AstroWind съчетава модерна архитектура и готови компоненти, което позволява бързо стартиране на локализирани сайтове без компромис с производителността и контрола.',
        },
        {
          title: 'Какво е необходимо, за да започна?',
          description:
            'Необходими са базови познания по Astro и Tailwind CSS. Клонирайте репозитория, инсталирайте зависимостите и следвайте документацията, за да адаптирате съдържанието.',
        },
        {
          title: 'Как да интегрирам собствен CMS или данни?',
          description:
            'Структурата е модулна и позволява връзка с headless CMS или API. Заменете източниците на данни със собствени и настройте моделите според нуждите.',
        },
        {
          title: 'Мога ли да запазя достъпността при персонализация?',
          description:
            'Да. Компонентите използват семантичен HTML и достъпни стойности. Следвайте указанията за контраст, фокус и клавиатурна навигация при персонализация.',
        },
        {
          title: 'Има ли насоки за пускане в продукция?',
          description:
            'AstroWind работи отлично с платформи като Vercel, Netlify или собствена инфраструктура. Прегледайте описаните сценарии за деплоймент в документацията.',
        },
        {
          title: 'Как можем да допринесем към проекта?',
          description:
            'Направете fork, разработете подобрения и изпратете pull request. Приветстваме оптимизации за производителност, достъпност и локализация.',
        },
      ],
    },
    stats: [
      { title: 'Изтегляния', amount: '132K' },
      { title: 'Звезди', amount: '24.8K' },
      { title: 'Разклонения', amount: '10.3K' },
      { title: 'Потребители', amount: '48.4K' },
    ],
    callToAction: {
      actions: [
        {
          variant: 'primary',
          text: 'Изтегли шаблона',
          href: 'https://github.com/arthelokyo/astrowind',
          target: '_blank',
          icon: 'tabler:download',
        },
      ],
      titleHtml: 'Astro&nbsp;+&nbsp;<br class="block sm:hidden" /><span class="sm:whitespace-nowrap">Tailwind CSS</span>',
      subtitleHtml:
        'Получете готов за продукция стек с локализация, производителност и SEO, подготвени още от първия ден.',
    },
  },
};

export const getLandingContent = (lang: LanguageCode = DEFAULT_LANGUAGE): LandingContent =>
  landingContent[lang] ?? landingContent[DEFAULT_LANGUAGE];
