import dossierPdf from '~/assets/docs/sports-scouting-sudamerica-bulgaria.pdf';
import type { CallToAction, Item, Stat } from '~/types';
import type { SupportedLanguage } from '~/utils/i18n';
import { DEFAULT_LANGUAGE } from '~/utils/i18n';

interface HeroContent {
  tagline: string;
  titleHtml: string;
  subtitleHtml: string;
  actions: Array<CallToAction>;
  image: {
    src: string;
    alt: string;
  };
}

interface HeadlineSection {
  id: string;
  tagline: string;
  title: string;
  subtitle?: string;
  items: Array<Item>;
  background?: 'primary' | 'secondary' | 'accent';
}

interface ContentSection {
  id: string;
  tagline: string;
  title: string;
  contentTitle: string;
  contentBody: string;
  items: Array<Item>;
  image: {
    src: string;
    alt: string;
  };
  isReversed?: boolean;
  isAfterContent?: boolean;
  background?: 'primary' | 'secondary' | 'accent';
}

interface RoadmapSection {
  tagline: string;
  title: string;
  subtitle: string;
  items: Array<Item>;
}

interface FAQSection {
  tagline: string;
  title: string;
  subtitle: string;
  items: Array<{ title: string; description: string }>;
}

interface ContactSection {
  tagline: string;
  title: string;
  subtitle: string;
  inputs: Array<{ name: string; label: string; placeholder: string; type?: string }>;
  textarea: { name: string; label: string; placeholder: string; rows?: number };
  disclaimer: { label: string };
  button: string;
}

interface CallToActionSection {
  title: string;
  subtitle: string;
  actions: Array<CallToAction>;
}

interface LandingContent {
  metadata: {
    title: string;
    description: string;
    ignoreTitleTemplate: boolean;
  };
  hero: HeroContent;
  vision: HeadlineSection;
  stats: {
    tagline: string;
    title: string;
    stats: Array<Stat>;
  };
  objectives: HeadlineSection;
  talent: ContentSection;
  infrastructure: ContentSection;
  projection: ContentSection;
  roadmap: RoadmapSection;
  impact: HeadlineSection;
  faqs: FAQSection;
  callToAction: CallToActionSection;
  contact: ContactSection;
}

const HERO_IMAGE = {
  src: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=1600&q=80',
};

const TALENT_IMAGE = {
  src: '~/assets/images/landing/img-3.jpg',
};

const INFRASTRUCTURE_IMAGE = {
  src: '~/assets/images/landing/img-2.jpg',
};

const PROJECTION_IMAGE = {
  src: '~/assets/images/landing/img-1.jpg',
};

const LANDING_TRANSLATIONS: Record<SupportedLanguage, LandingContent> = {
  es: {
    metadata: {
      title: 'Escuela Integral de Fútbol Profesional en Bulgaria',
      description:
        'Sports Scouting Sudamérica presenta un ecosistema deportivo integral para formar futbolistas profesionales en Bulgaria con estándares internacionales.',
      ignoreTitleTemplate: true,
    },
    hero: {
      tagline: 'Sports Scouting Sudamérica',
      titleHtml: 'Escuela Integral de Fútbol Profesional en <span class="text-primary">Bulgaria</span>',
      subtitleHtml:
        'Fundamos un ecosistema deportivo que une la fortaleza atlética búlgara con la creatividad sudamericana para formar profesionales capaces de conquistar el escenario internacional.',
      actions: [
        { variant: 'primary', text: 'Agendar reunión', href: '#contacto' },
        { text: 'Descargar dossier', variant: 'secondary', icon: 'tabler:download', href: dossierPdf, download: true },
      ],
      image: {
        ...HERO_IMAGE,
        alt: 'Entrenamiento de fútbol profesional',
      },
    },
    vision: {
      id: 'vision',
      tagline: 'Propósito',
      title: 'Visión, misión y compromisos',
      subtitle: 'Un proyecto que trasciende lo deportivo y consolida a Bulgaria como potencia futbolística y social.',
      items: [
        {
          title: 'Visión',
          description:
            'Posicionar a Bulgaria en la élite del fútbol mundial mediante una escuela integral que combina la potencia física local con la creatividad de la metodología sudamericana.',
          icon: 'tabler:eye-star',
        },
        {
          title: 'Misión',
          description:
            'Diseñar, gestionar y escalar un ecosistema profesional — scouting, formación, infraestructura y proyección internacional — que acompañe al jugador desde la detección hasta su debut profesional.',
          icon: 'tabler:flag-3',
        },
        {
          title: 'Compromisos clave',
          description:
            'Generar recursos sostenibles, integrar a las glorias búlgaras, impulsar el impacto social y educativo y garantizar un acompañamiento humano permanente para cada familia.',
          icon: 'tabler:heart-handshake',
        },
      ],
      background: 'primary',
    },
    stats: {
      tagline: 'Programa integral',
      title: 'Resultados que guían nuestra hoja de ruta',
      stats: [
        { amount: '14', title: 'Objetivos estratégicos', icon: 'tabler:target-arrow' },
        { amount: '16', title: 'Ejes de gestión integral', icon: 'tabler:chart-infographic' },
        { amount: '10', title: 'Áreas especializadas del staff', icon: 'tabler:users-group' },
        { amount: '1', title: 'Copa Bulgaria anual', icon: 'tabler:trophy' },
      ],
    },
    objectives: {
      id: 'objetivos',
      tagline: 'Objetivos estratégicos',
      title: 'Un plan en 14 metas que transforman el fútbol búlgaro',
      subtitle:
        'Cada iniciativa responde a una necesidad concreta: profesionalización, infraestructura, marketing y crecimiento social.',
      items: [
        {
          title: 'Profesionalizar al personal',
          description:
            'Planificación, reorganización y capacitación permanente para cada área clave: prensa, mantenimiento, secretaría técnica y juveniles.',
          icon: 'tabler:school',
        },
        {
          title: 'Ciudad Deportiva de referencia',
          description:
            'Complejo con canchas principales y auxiliares, gimnasio, vestuarios, departamento médico y oficinas dedicadas al proyecto juvenil.',
          icon: 'tabler:building-stadium',
        },
        {
          title: 'Vínculo con las glorias búlgaras',
          description:
            'Eventos y partidos homenaje para integrar ídolos históricos como Hristo Stoichkov y fortalecer el sentido de pertenencia.',
          icon: 'tabler:stars',
        },
        {
          title: 'Centros de detección y regionalización',
          description:
            'Red de clubes aliados en ciudades estratégicas para captar talento, compartir metodología y sostener el proyecto formativo.',
          icon: 'tabler:world-search',
        },
        {
          title: 'Competencias formativas y Casa Club',
          description:
            'Divisiones inferiores compitiendo con metodología propia y una pensión juvenil que garantice bienestar y foco en el alto rendimiento.',
          icon: 'tabler:home-heart',
        },
        {
          title: 'Marca, marketing y presencia digital',
          description:
            'Página oficial, redes sociales, videoteca y carpeta institucional para comunicar logros, captar sponsors y posicionar al club.',
          icon: 'tabler:brand-hipchat',
        },
      ],
    },
    talent: {
      id: 'talento',
      tagline: 'Formación y metodología',
      title: 'Proyecto Deportivo Integral',
      contentTitle: 'La excelencia deportiva nace desde la base',
      contentBody:
        'Combinamos procesos de scouting, entrenamiento y acompañamiento humano para que cada futbolista crezca dentro de una cultura ganadora.',
      items: [
        {
          title: 'Metodología sudamericana adaptada',
          description:
            'Capacitación continua para cuerpo técnico, preparación física y utilería con el acompañamiento del manager institucional.',
          icon: 'tabler:certificate',
        },
        {
          title: 'Proyecto de formación juvenil',
          description:
            'Plan de trabajo físico-técnico, premios por detección de futbolistas y seguimiento integral para acercarlos a la élite profesional.',
          icon: 'tabler:trophy',
        },
        {
          title: 'Competencia alineada al objetivo',
          description:
            'Organización de torneos y amistosos con clubes de primera categoría para medir el progreso y exponer a los talentos descubiertos.',
          icon: 'tabler:whistle',
        },
      ],
      image: {
        ...TALENT_IMAGE,
        alt: 'Equipo juvenil entrenando con cuerpo técnico especializado',
      },
      background: 'primary',
    },
    infrastructure: {
      id: 'infraestructura',
      tagline: 'Infraestructura y bienestar',
      title: 'Ciudad Deportiva y Casa Club',
      contentTitle: 'Espacios pensados para el alto rendimiento',
      contentBody:
        'Cada inversión en infraestructura refuerza nuestra promesa de bienestar, profesionalismo y proyección internacional.',
      items: [
        {
          title: 'Ciudad Deportiva multifunción',
          description:
            'Planificación de usos, jornadas de presentación y comercialización de espacios publicitarios para reinvertir en infraestructura.',
          icon: 'tabler:building',
        },
        {
          title: 'Casa Club para juveniles',
          description:
            'Habitaciones equipadas, áreas de estudio y convivencia saludable que aseguren calidad de vida y foco académico-deportivo.',
          icon: 'tabler:home-heart',
        },
        {
          title: 'Estadio y sede como vidriera',
          description:
            'Oficinas con vista al campo, museo y espacios para recibir sponsors siguiendo estándares de clubes europeos.',
          icon: 'tabler:building-community',
        },
      ],
      image: {
        ...INFRASTRUCTURE_IMAGE,
        alt: 'Complejo deportivo profesional con canchas y edificio principal en Sofía',
      },
      isReversed: true,
      background: 'secondary',
    },
    projection: {
      id: 'proyeccion',
      tagline: 'Proyección y marca',
      title: 'Expansión comercial y visibilidad global',
      contentTitle: 'Identidad que se siente dentro y fuera de la cancha',
      contentBody:
        'Desde la comunicación digital hasta los eventos insignia, todo el proyecto está orientado a generar recursos sostenibles y notoriedad internacional.',
      items: [
        {
          title: 'Plataforma digital y redes',
          description:
            'Sitio oficial, estrategia en redes sociales y contenidos exclusivos para informar, fidelizar y atraer inversores.',
          icon: 'tabler:devices',
        },
        {
          title: 'Videoteca y carpeta institucional',
          description:
            'Producción audiovisual para mostrar el talento formado y disponer de material de venta inmediata para clubes interesados.',
          icon: 'tabler:movie',
        },
        {
          title: 'Eventos insignia y Copa Bulgaria',
          description:
            'Torneo anual y presentaciones itinerantes que posicionan la marca en toda la región y fortalecen el sentido de pertenencia.',
          icon: 'tabler:calendar-event',
        },
      ],
      image: {
        ...PROJECTION_IMAGE,
        alt: 'Mapa abstracto que conecta alianzas de scouting y patrocinio',
      },
      isAfterContent: true,
      background: 'accent',
    },
    roadmap: {
      tagline: 'Roadmap',
      title: 'Etapas de implementación',
      subtitle: 'Una secuencia clara para activar, consolidar y proyectar cada área del proyecto.',
      items: [
        {
          title: 'Profesionalización del staff',
          description:
            'Entrega de manuales operativos, capacitaciones y organización del departamento comercial para generar recursos genuinos.',
          icon: 'tabler:clipboard-check',
        },
        {
          title: 'Puesta en marcha de la Ciudad Deportiva',
          description:
            'Ejecución de obras prioritarias, acondicionamiento de canchas y activaciones con juveniles y seleccionados locales.',
          icon: 'tabler:crane',
        },
        {
          title: 'Integración de glorias y sponsors',
          description:
            'Partidos homenaje y alianzas estratégicas para amplificar la visibilidad del proyecto y fortalecer la marca.',
          icon: 'tabler:hand-love-you',
        },
        {
          title: 'Red de talentos y competencias',
          description:
            'Lanzamiento de centros de detección, acuerdos con clubes aliados y programación de torneos para cada categoría.',
          icon: 'tabler:sitemap',
        },
        {
          title: 'Escalamiento internacional',
          description:
            'Convenios para experiencias en Argentina, Brasil, México y Europa, posicionando a los egresados en mercados globales.',
          icon: 'tabler:world',
        },
      ],
    },
    impact: {
      id: 'impacto',
      tagline: 'Impacto social y educativo',
      title: 'Una escuela que transforma comunidades',
      subtitle:
        'El proyecto trasciende la competencia deportiva y se integra con programas educativos, sociales y familiares.',
      items: [
        {
          title: 'Acción social continua',
          description:
            'Programa “El fútbol es solo un juego” con actividades en comedores, ONG e instituciones para integrar a niños y jóvenes.',
          icon: 'tabler:heart-handshake',
        },
        {
          title: 'Educación y neurodeporte',
          description:
            'Seminarios, clínicas y acuerdos con universidades y especialistas para vincular ciencia, psicología y deporte.',
          icon: 'tabler:brain',
        },
        {
          title: 'Gobernanza y acompañamiento familiar',
          description:
            'Comisión de acción social y estructura organizativa que garantiza seguimiento humano, legal y financiero del proyecto.',
          icon: 'tabler:users',
        },
      ],
      background: 'primary',
    },
    faqs: {
      tagline: 'Preguntas frecuentes',
      title: 'Todo lo que necesitas saber',
      subtitle: 'Resolvemos las dudas más habituales de clubes, inversores y aliados estratégicos.',
      items: [
        {
          title: '¿Qué diferencia a esta Escuela Integral?',
          description:
            'La combinación de talento sudamericano, la disciplina búlgara y una gestión profesional que abarca desde la captación hasta la proyección internacional.',
        },
        {
          title: '¿Cómo se financia el proyecto?',
          description:
            'Mediante recursos genuinos de patrocinadores, merchandising, eventos, comercialización de espacios y futuras transferencias de jugadores formados.',
        },
        {
          title: '¿Qué servicios se brindan a los juveniles?',
          description:
            'Pensión completa, acompañamiento académico, atención médica, nutricional y oportunidades de competir en ligas nacionales e internacionales.',
        },
        {
          title: '¿Cómo puede sumarse un club o inversor?',
          description:
            'A través de convenios de colaboración, patrocinios o participación en la Copa Bulgaria y los centros de detección regionales.',
        },
      ],
    },
    callToAction: {
      title: 'Construyamos juntos la próxima potencia del fútbol búlgaro',
      subtitle: 'Co-creemos alianzas estratégicas que potencien infraestructura, talento y visibilidad internacional.',
      actions: [
        { text: 'Hablar con el equipo', href: '#contacto', variant: 'primary' },
        { text: 'Descargar dossier', variant: 'secondary', icon: 'tabler:download', href: dossierPdf, download: true },
      ],
    },
    contact: {
      tagline: 'Contacto',
      title: 'Conversemos sobre el proyecto',
      subtitle: 'Completa el formulario y coordinemos una reunión presencial o virtual.',
      inputs: [
        { name: 'name', label: 'Nombre y apellido', placeholder: 'Ingresa tu nombre completo' },
        { type: 'email', name: 'email', label: 'Correo electrónico', placeholder: 'nombre@empresa.com' },
        { name: 'organization', label: 'Organización', placeholder: 'Club, academia o empresa' },
      ],
      textarea: {
        name: 'message',
        label: '¿Cómo podemos ayudarte?',
        placeholder: 'Cuéntanos qué tipo de colaboración o información estás buscando.',
        rows: 5,
      },
      disclaimer: {
        label: 'Acepto ser contactado para conocer más sobre el proyecto.',
      },
      button: 'Enviar mensaje',
    },
  },
  en: {
    metadata: {
      title: 'Comprehensive Professional Football Academy in Bulgaria',
      description:
        'Sports Scouting South America introduces an end-to-end sports ecosystem in Bulgaria to develop professional football players that meet international standards.',
      ignoreTitleTemplate: true,
    },
    hero: {
      tagline: 'Sports Scouting South America',
      titleHtml: 'Professional Football Academy in <span class="text-primary">Bulgaria</span>',
      subtitleHtml:
        'We build a sports ecosystem that blends Bulgarian athletic strength with South American creativity to prepare players ready to conquer the global stage.',
      actions: [
        { variant: 'primary', text: 'Book a meeting', href: '#contacto' },
        { text: 'Download dossier', variant: 'secondary', icon: 'tabler:download', href: dossierPdf, download: true },
      ],
      image: {
        ...HERO_IMAGE,
        alt: 'Professional football training session',
      },
    },
    vision: {
      id: 'vision',
      tagline: 'Purpose',
      title: 'Vision, mission and commitments',
      subtitle: 'A project that goes beyond sport to position Bulgaria as a football and social powerhouse.',
      items: [
        {
          title: 'Vision',
          description:
            'Position Bulgaria among the football elite through an academy that combines local physical power with the creativity of South American methodology.',
          icon: 'tabler:eye-star',
        },
        {
          title: 'Mission',
          description:
            'Design, manage and scale a professional ecosystem — scouting, development, infrastructure and international projection — accompanying each player from discovery to their professional debut.',
          icon: 'tabler:flag-3',
        },
        {
          title: 'Key commitments',
          description:
            'Generate sustainable resources, engage Bulgarian legends, drive social and educational impact and provide continuous support for every family.',
          icon: 'tabler:heart-handshake',
        },
      ],
      background: 'primary',
    },
    stats: {
      tagline: 'Comprehensive program',
      title: 'Results that guide our roadmap',
      stats: [
        { amount: '14', title: 'Strategic objectives', icon: 'tabler:target-arrow' },
        { amount: '16', title: 'Integrated management pillars', icon: 'tabler:chart-infographic' },
        { amount: '10', title: 'Specialised staff areas', icon: 'tabler:users-group' },
        { amount: '1', title: 'Annual Bulgaria Cup', icon: 'tabler:trophy' },
      ],
    },
    objectives: {
      id: 'objetivos',
      tagline: 'Strategic objectives',
      title: 'A 14-goal plan to transform Bulgarian football',
      subtitle:
        'Every initiative responds to a concrete need: professionalisation, infrastructure, marketing and social growth.',
      items: [
        {
          title: 'Professionalise the staff',
          description:
            'Planning, reorganisation and ongoing training for each key area: media, maintenance, technical secretariat and youth development.',
          icon: 'tabler:school',
        },
        {
          title: 'Flagship Sports City',
          description:
            'A complex with main and auxiliary pitches, gym, locker rooms, medical department and offices devoted to the youth project.',
          icon: 'tabler:building-stadium',
        },
        {
          title: 'Reconnect with Bulgarian legends',
          description:
            'Events and tribute matches to bring iconic figures such as Hristo Stoichkov on board and strengthen our sense of belonging.',
          icon: 'tabler:stars',
        },
        {
          title: 'Scouting hubs across the country',
          description:
            'A network of partner clubs in strategic cities to detect talent, share methodology and sustain the development pathway.',
          icon: 'tabler:world-search',
        },
        {
          title: 'Development leagues and Club House',
          description:
            'Youth divisions competing with a bespoke methodology and a residence that guarantees well-being and focus on high performance.',
          icon: 'tabler:home-heart',
        },
        {
          title: 'Brand, marketing and digital presence',
          description:
            'Official website, social media strategy, media library and corporate deck to showcase achievements and attract sponsors.',
          icon: 'tabler:brand-hipchat',
        },
      ],
    },
    talent: {
      id: 'talento',
      tagline: 'Player pathway & methodology',
      title: 'Integrated Football Project',
      contentTitle: 'Excellence is built from the foundation',
      contentBody:
        'We combine scouting, training and holistic support so every player grows within a winning culture.',
      items: [
        {
          title: 'Adapted South American methodology',
          description:
            'Ongoing education for coaching staff, strength and conditioning, and kit management with the guidance of the institutional manager.',
          icon: 'tabler:certificate',
        },
        {
          title: 'Youth development programme',
          description:
            'Physical-technical plans, incentives for talent discovery and integral monitoring to bring players closer to the professional stage.',
          icon: 'tabler:trophy',
        },
        {
          title: 'Competition aligned with ambition',
          description:
            'Organisation of tournaments and friendlies with top-tier clubs to measure progress and showcase emerging talent.',
          icon: 'tabler:whistle',
        },
      ],
      image: {
        ...TALENT_IMAGE,
        alt: 'Youth squad training with specialised coaching staff',
      },
      background: 'primary',
    },
    infrastructure: {
      id: 'infraestructura',
      tagline: 'Infrastructure & wellbeing',
      title: 'Sports City and Club House',
      contentTitle: 'Spaces designed for high performance',
      contentBody:
        'Every investment in infrastructure reinforces our promise of wellbeing, professionalism and international projection.',
      items: [
        {
          title: 'Multi-purpose Sports City',
          description:
            'Usage planning, launch events and commercial activation of advertising spaces to reinvest in facilities.',
          icon: 'tabler:building',
        },
        {
          title: 'Club House for youth players',
          description:
            'Equipped rooms, study areas and healthy living spaces that ensure quality of life and academic focus.',
          icon: 'tabler:home-heart',
        },
        {
          title: 'Stadium and HQ as showcase',
          description:
            'Offices overlooking the pitch, museum spaces and sponsor lounges aligned with European club standards.',
          icon: 'tabler:building-community',
        },
      ],
      image: {
        ...INFRASTRUCTURE_IMAGE,
        alt: 'Professional sports complex with main field and headquarters in Sofia',
      },
      isReversed: true,
      background: 'secondary',
    },
    projection: {
      id: 'proyeccion',
      tagline: 'Brand & projection',
      title: 'Commercial expansion and global visibility',
      contentTitle: 'Identity that resonates on and off the pitch',
      contentBody:
        'From digital communications to flagship events, every initiative is designed to create sustainable revenue and international recognition.',
      items: [
        {
          title: 'Digital platform and social media',
          description:
            'Official website, social strategy and exclusive content to inform, engage and attract investors.',
          icon: 'tabler:devices',
        },
        {
          title: 'Media library and corporate dossier',
          description:
            'Audiovisual production that highlights our developed talent and provides immediate sales material for interested clubs.',
          icon: 'tabler:movie',
        },
        {
          title: 'Flagship events and Bulgaria Cup',
          description:
            'Annual tournament and roadshow events that position the brand nationwide and strengthen belonging.',
          icon: 'tabler:calendar-event',
        },
      ],
      image: {
        ...PROJECTION_IMAGE,
        alt: 'Abstract map illustrating scouting and sponsorship alliances',
      },
      isAfterContent: true,
      background: 'accent',
    },
    roadmap: {
      tagline: 'Roadmap',
      title: 'Implementation stages',
      subtitle: 'A clear sequence to activate, consolidate and scale every area of the project.',
      items: [
        {
          title: 'Staff professionalisation',
          description:
            'Operational manuals, training programmes and commercial structure to generate genuine revenue.',
          icon: 'tabler:clipboard-check',
        },
        {
          title: 'Sports City kick-off',
          description:
            'Priority works, pitch conditioning and activations with youth players and local selections.',
          icon: 'tabler:crane',
        },
        {
          title: 'Legends and sponsor engagement',
          description:
            'Tribute matches and strategic partnerships to amplify visibility and strengthen the brand.',
          icon: 'tabler:hand-love-you',
        },
        {
          title: 'Talent network and competitions',
          description:
            'Launch of scouting hubs, agreements with partner clubs and tournament programming for each age group.',
          icon: 'tabler:sitemap',
        },
        {
          title: 'International scaling',
          description:
            'Agreements for experiences in Argentina, Brazil, Mexico and Europe, positioning graduates on global markets.',
          icon: 'tabler:world',
        },
      ],
    },
    impact: {
      id: 'impacto',
      tagline: 'Social & educational impact',
      title: 'An academy that transforms communities',
      subtitle:
        'The project goes beyond sport by integrating educational, social and family programmes.',
      items: [
        {
          title: 'Continuous social action',
          description:
            '“Football is just a game” programme with activities in community kitchens, NGOs and institutions to engage children and youth.',
          icon: 'tabler:heart-handshake',
        },
        {
          title: 'Education & neuro-sport',
          description:
            'Workshops, clinics and partnerships with universities and specialists to connect science, psychology and sport.',
          icon: 'tabler:brain',
        },
        {
          title: 'Governance & family support',
          description:
            'Social action committee and organisational structure that ensures legal, financial and human support for the project.',
          icon: 'tabler:users',
        },
      ],
      background: 'primary',
    },
    faqs: {
      tagline: 'Frequently asked questions',
      title: 'Everything you need to know',
      subtitle: 'We answer the most common questions from clubs, investors and strategic partners.',
      items: [
        {
          title: 'What makes this academy different?',
          description:
            'The blend of South American talent, Bulgarian discipline and professional management covering every step from scouting to international projection.',
        },
        {
          title: 'How is the project funded?',
          description:
            'Through genuine revenue from sponsors, merchandising, events, commercial spaces and future transfers of developed players.',
        },
        {
          title: 'What services do youth players receive?',
          description:
            'Full boarding, academic support, medical and nutritional care plus opportunities to compete nationally and internationally.',
        },
        {
          title: 'How can a club or investor join?',
          description:
            'By signing collaboration agreements, sponsorships or participating in the Bulgaria Cup and regional scouting centres.',
        },
      ],
    },
    callToAction: {
      title: 'Let’s build Bulgaria’s next football powerhouse together',
      subtitle: 'Co-create strategic alliances to boost infrastructure, talent and global visibility.',
      actions: [
        { text: 'Talk with the team', href: '#contacto', variant: 'primary' },
        { text: 'Download dossier', variant: 'secondary', icon: 'tabler:download', href: dossierPdf, download: true },
      ],
    },
    contact: {
      tagline: 'Contact',
      title: 'Let’s talk about the project',
      subtitle: 'Fill in the form and we will schedule an in-person or virtual meeting.',
      inputs: [
        { name: 'name', label: 'Full name', placeholder: 'Enter your full name' },
        { type: 'email', name: 'email', label: 'Email', placeholder: 'name@company.com' },
        { name: 'organization', label: 'Organisation', placeholder: 'Club, academy or company' },
      ],
      textarea: {
        name: 'message',
        label: 'How can we help you?',
        placeholder: 'Tell us what kind of collaboration or information you are looking for.',
        rows: 5,
      },
      disclaimer: {
        label: 'I agree to be contacted to learn more about the project.',
      },
      button: 'Send message',
    },
  },
  bg: {
    metadata: {
      title: 'Интегрална професионална футболна академия в България',
      description:
        'Sports Scouting South America представя цялостна спортна екосистема в България за подготовка на професионални футболисти по международни стандарти.',
      ignoreTitleTemplate: true,
    },
    hero: {
      tagline: 'Sports Scouting South America',
      titleHtml: 'Интегрална футболна академия в <span class="text-primary">България</span>',
      subtitleHtml:
        'Създаваме спортна екосистема, която обединява българската физическа мощ с южноамериканската креативност, за да подготвя играчи за световната сцена.',
      actions: [
        { variant: 'primary', text: 'Запази среща', href: '#contacto' },
        { text: 'Изтегли досие', variant: 'secondary', icon: 'tabler:download', href: dossierPdf, download: true },
      ],
      image: {
        ...HERO_IMAGE,
        alt: 'Професионална футболна тренировка',
      },
    },
    vision: {
      id: 'vision',
      tagline: 'Цел',
      title: 'Визия, мисия и ангажименти',
      subtitle: 'Проект, който надхвърля спорта и утвърждава България като футболна и социална сила.',
      items: [
        {
          title: 'Визия',
          description:
            'Да позиционираме България в световния футболен елит чрез академия, която комбинира местната физическа подготовка с креативността на южноамериканската методология.',
          icon: 'tabler:eye-star',
        },
        {
          title: 'Мисия',
          description:
            'Да проектираме, управляваме и развиваме професионална екосистема — скаутинг, обучение, инфраструктура и международна реализация — която съпътства играча от откриването му до дебюта му.',
          icon: 'tabler:flag-3',
        },
        {
          title: 'Ключови ангажименти',
          description:
            'Генериране на устойчиви ресурси, включване на българските легенди, социално и образователно въздействие и постоянно човешко съдействие за всяко семейство.',
          icon: 'tabler:heart-handshake',
        },
      ],
      background: 'primary',
    },
    stats: {
      tagline: 'Интегрална програма',
      title: 'Резултати, които определят нашата пътна карта',
      stats: [
        { amount: '14', title: 'Стратегически цели', icon: 'tabler:target-arrow' },
        { amount: '16', title: 'Посоки на цялостно управление', icon: 'tabler:chart-infographic' },
        { amount: '10', title: 'Специализирани екипни звена', icon: 'tabler:users-group' },
        { amount: '1', title: 'Годишна Купа България', icon: 'tabler:trophy' },
      ],
    },
    objectives: {
      id: 'objetivos',
      tagline: 'Стратегически цели',
      title: 'План от 14 стъпки за трансформация на българския футбол',
      subtitle:
        'Всяка инициатива отговаря на конкретна нужда: професионализация, инфраструктура, маркетинг и обществен растеж.',
      items: [
        {
          title: 'Професионализация на екипа',
          description:
            'Планиране, преструктуриране и постоянни обучения за ключови звена: медии, поддръжка, спортно-техническо ръководство и академия.',
          icon: 'tabler:school',
        },
        {
          title: 'Примерен Спортен град',
          description:
            'Комплекс с основни и помощни терени, фитнес, съблекални, медицински център и офиси, посветени на младежкия проект.',
          icon: 'tabler:building-stadium',
        },
        {
          title: 'Връзка с легендите на България',
          description:
            'Събития и мачове в чест на икони като Христо Стоичков, които засилват идентичността и приобщеността.',
          icon: 'tabler:stars',
        },
        {
          title: 'Регионални скаутинг центрове',
          description:
            'Мрежа от партньорски клубове в стратегически градове за откриване на таланти, споделяне на методика и устойчиво развитие.',
          icon: 'tabler:world-search',
        },
        {
          title: 'Развитие и Клубна къща',
          description:
            'Юношески отбори с авторска методика и общежитие, което гарантира благосъстояние и фокус върху високите спортни цели.',
          icon: 'tabler:home-heart',
        },
        {
          title: 'Марка, маркетинг и дигитално присъствие',
          description:
            'Официален сайт, стратегия в социалните мрежи, видеоархив и корпоративна презентация за привличане на партньори.',
          icon: 'tabler:brand-hipchat',
        },
      ],
    },
    talent: {
      id: 'talento',
      tagline: 'Развитие на играчите и методика',
      title: 'Цялостен футболен проект',
      contentTitle: 'Върхови постижения, изградени от основата',
      contentBody:
        'Комбинираме скаутинг, тренировки и човешка подкрепа, за да расте всеки футболист в среда на победители.',
      items: [
        {
          title: 'Адаптирана южноамериканска методика',
          description:
            'Непрекъснато обучение за треньори, кондиционни специалисти и екипировка под ръководството на институционален мениджър.',
          icon: 'tabler:certificate',
        },
        {
          title: 'Програма за младежко развитие',
          description:
            'Физико-технически планове, стимули за откриване на таланти и цялостно проследяване до професионалния дебют.',
          icon: 'tabler:trophy',
        },
        {
          title: 'Състезания, съобразени с амбицията',
          description:
            'Организация на турнири и контроли с водещи клубове за измерване на прогреса и показване на нови таланти.',
          icon: 'tabler:whistle',
        },
      ],
      image: {
        ...TALENT_IMAGE,
        alt: 'Младежки отбор, който тренира с професионален треньорски екип',
      },
      background: 'primary',
    },
    infrastructure: {
      id: 'infraestructura',
      tagline: 'Инфраструктура и благополучие',
      title: 'Спортен град и Клубна къща',
      contentTitle: 'Пространства за високи спортни постижения',
      contentBody:
        'Всяка инвестиция в базата потвърждава нашия ангажимент към благосъстоянието, професионализма и международната реализация.',
      items: [
        {
          title: 'Многофункционален Спортен град',
          description:
            'Планиране на използването, представяния и търговски инициативи за реинвестиране в инфраструктурата.',
          icon: 'tabler:building',
        },
        {
          title: 'Клубна къща за юношите',
          description:
            'Обзаведени стаи, учебни зони и здравословна среда, гарантираща качество на живот и академичен фокус.',
          icon: 'tabler:home-heart',
        },
        {
          title: 'Стадион и база като витрина',
          description:
            'Офиси с изглед към терена, музей и пространства за партньори по европейски стандарт.',
          icon: 'tabler:building-community',
        },
      ],
      image: {
        ...INFRASTRUCTURE_IMAGE,
        alt: 'Професионален спортен комплекс с терени и централен корпус в София',
      },
      isReversed: true,
      background: 'secondary',
    },
    projection: {
      id: 'proyeccion',
      tagline: 'Марка и позициониране',
      title: 'Търговско разширяване и глобална видимост',
      contentTitle: 'Идентичност, която се усеща на терена и извън него',
      contentBody:
        'От дигиталната комуникация до емблематичните събития — всяка инициатива е насочена към устойчиви приходи и международна разпознаваемост.',
      items: [
        {
          title: 'Дигитална платформа и социални мрежи',
          description:
            'Официален сайт, стратегия в социалните мрежи и ексклузивно съдържание за информиране, ангажиране и привличане на инвеститори.',
          icon: 'tabler:devices',
        },
        {
          title: 'Видеоархив и корпоративно досие',
          description:
            'Аудиовизуални материали, които показват изградените таланти и осигуряват готови презентации за клубове партньори.',
          icon: 'tabler:movie',
        },
        {
          title: 'Водещи събития и Купа България',
          description:
            'Годишен турнир и пътуващи презентации, които позиционират марката в цялата страна и укрепват принадлежността.',
          icon: 'tabler:calendar-event',
        },
      ],
      image: {
        ...PROJECTION_IMAGE,
        alt: 'Абстрактна карта, която свързва скаутинг и спонсорски партньорства',
      },
      isAfterContent: true,
      background: 'accent',
    },
    roadmap: {
      tagline: 'Пътна карта',
      title: 'Етапи на внедряване',
      subtitle: 'Ясна последователност за активиране, устойчивост и растеж на всяко направление.',
      items: [
        {
          title: 'Професионализация на екипа',
          description:
            'Оперативни наръчници, обучения и търговска структура за генериране на устойчиви приходи.',
          icon: 'tabler:clipboard-check',
        },
        {
          title: 'Старт на Спортния град',
          description:
            'Приоритетни строителни дейности, подготовка на терените и активации с юноши и местни селекции.',
          icon: 'tabler:crane',
        },
        {
          title: 'Привличане на легенди и партньори',
          description:
            'Мачове в тяхна чест и стратегически съюзи за повишаване на видимостта и укрепване на бранда.',
          icon: 'tabler:hand-love-you',
        },
        {
          title: 'Мрежа от таланти и турнири',
          description:
            'Създаване на скаутинг центрове, договори с клубове партньори и програмиране на състезания за всяка възраст.',
          icon: 'tabler:sitemap',
        },
        {
          title: 'Международно развитие',
          description:
            'Споразумения за обмени в Аржентина, Бразилия, Мексико и Европа за позициониране на завършилите на глобалния пазар.',
          icon: 'tabler:world',
        },
      ],
    },
    impact: {
      id: 'impacto',
      tagline: 'Социално и образователно въздействие',
      title: 'Академия, която преобразява общностите',
      subtitle:
        'Проектът надхвърля спортната надпревара и обединява образователни, социални и семейни програми.',
      items: [
        {
          title: 'Постоянна социална инициатива',
          description:
            'Програмата „Футболът е само игра“ с дейности в социални центрове, НПО и институции за деца и младежи.',
          icon: 'tabler:heart-handshake',
        },
        {
          title: 'Образование и невроспорт',
          description:
            'Семинари, клиники и партньорства с университети и специалисти, които обединяват науката, психологията и спорта.',
          icon: 'tabler:brain',
        },
        {
          title: 'Управление и подкрепа за семействата',
          description:
            'Комисия за социални дейности и организационна структура, която гарантира правна, финансова и човешка подкрепа.',
          icon: 'tabler:users',
        },
      ],
      background: 'primary',
    },
    faqs: {
      tagline: 'Често задавани въпроси',
      title: 'Всичко, което трябва да знаете',
      subtitle: 'Отговаряме на най-честите запитвания от клубове, инвеститори и стратегически партньори.',
      items: [
        {
          title: 'С какво се отличава тази академия?',
          description:
            'Комбинацията от южноамерикански талант, българска дисциплина и професионално управление във всеки етап — от скаутинга до международната реализация.',
        },
        {
          title: 'Как се финансира проектът?',
          description:
            'Чрез устойчиви приходи от спонсори, мърчандайзинг, събития, търговски пространства и бъдещи трансфери на наши играчи.',
        },
        {
          title: 'Какви услуги получават юношите?',
          description:
            'Пълен пансион, академична подкрепа, медицинска и хранителна грижа плюс възможности за участие в национални и международни лиги.',
        },
        {
          title: 'Как клуб или инвеститор може да се включи?',
          description:
            'Чрез партньорски споразумения, спонсорства или участие в Купа България и регионалните скаутинг центрове.',
        },
      ],
    },
    callToAction: {
      title: 'Да изградим заедно следващата футболна сила на България',
      subtitle: 'Създаваме стратегически партньорства за инфраструктура, таланти и международна видимост.',
      actions: [
        { text: 'Свържете се с екипа', href: '#contacto', variant: 'primary' },
        { text: 'Изтегли досие', variant: 'secondary', icon: 'tabler:download', href: dossierPdf, download: true },
      ],
    },
    contact: {
      tagline: 'Контакт',
      title: 'Нека поговорим за проекта',
      subtitle: 'Попълнете формуляра и ще организираме среща на живо или онлайн.',
      inputs: [
        { name: 'name', label: 'Име и фамилия', placeholder: 'Въведете пълното си име' },
        { type: 'email', name: 'email', label: 'Имейл', placeholder: 'name@company.com' },
        { name: 'organization', label: 'Организация', placeholder: 'Клуб, академия или компания' },
      ],
      textarea: {
        name: 'message',
        label: 'Как можем да ви помогнем?',
        placeholder: 'Споделете какъв тип съдействие или информация търсите.',
        rows: 5,
      },
      disclaimer: {
        label: 'Съгласен съм да се свържете с мен за повече информация относно проекта.',
      },
      button: 'Изпрати съобщение',
    },
  },
};

export const getLandingContent = (lang: SupportedLanguage = DEFAULT_LANGUAGE): LandingContent => {
  return LANDING_TRANSLATIONS[lang] ?? LANDING_TRANSLATIONS[DEFAULT_LANGUAGE];
};
