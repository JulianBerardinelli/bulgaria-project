import type { SupportedLanguage } from './languages';
import { getPermalink } from '~/utils/permalinks';
import type { CallToAction, Disclaimer, Input, Textarea } from '~/types';

interface StatItem {
  amount: string;
  title: string;
  icon: string;
}

interface FeatureItem {
  title: string;
  description: string;
  icon?: string;
}

interface ContentSection {
  tagline: string;
  title: string;
  subtitle?: string;
  items: FeatureItem[];
}

interface RoadmapSection {
  tagline: string;
  title: string;
  subtitle: string;
  items: FeatureItem[];
}

interface FAQItem {
  title: string;
  description: string;
}

interface NavigationLink {
  text: string;
  href: string;
}

interface NavigationColumn {
  title: string;
  links: NavigationLink[];
}

interface NavigationData {
  header: {
    links: NavigationLink[];
    actions: CallToAction[];
  };
  footer: {
    links: NavigationColumn[];
    secondaryLinks: NavigationLink[];
    socialLinks: { ariaLabel: string; icon: string; href: string }[];
    footNote: string;
  };
}

interface ContactFormData {
  inputs: Input[];
  textarea: Textarea;
  disclaimer: Disclaimer;
  button: string;
}

export interface LandingContent {
  lang: SupportedLanguage;
  metadata: {
    title: string;
    description: string;
    ignoreTitleTemplate?: boolean;
  };
  navigation: NavigationData;
  hero: {
    tagline: string;
    title: {
      main: string;
      highlight: string;
    };
    subtitle: string;
    actions: CallToAction[];
    disabledAction: CallToAction;
    imageAlt: string;
  };
  vision: ContentSection & { items: FeatureItem[] };
  stats: {
    tagline: string;
    title: string;
    items: StatItem[];
  };
  objectives: ContentSection;
  training: {
    tagline: string;
    title: string;
    introTitle: string;
    introText: string;
    items: FeatureItem[];
    imageAlt: string;
  };
  infrastructure: {
    tagline: string;
    title: string;
    introTitle: string;
    introText: string;
    items: FeatureItem[];
    imageAlt: string;
  };
  projection: {
    tagline: string;
    title: string;
    introTitle: string;
    introText: string;
    items: FeatureItem[];
    imageAlt: string;
  };
  roadmap: RoadmapSection;
  impact: ContentSection;
  faqs: {
    tagline: string;
    title: string;
    subtitle: string;
    items: FAQItem[];
  };
  callToAction: {
    title: string;
    subtitle: string;
    primaryAction: CallToAction;
    disabledAction: CallToAction;
  };
  contact: {
    tagline: string;
    title: string;
    subtitle: string;
    form: ContactFormData;
  };
}

const downloadAction: CallToAction = {
  text: 'Descargar dossier',
  variant: 'secondary',
  type: 'button',
  icon: 'tabler:download',
  title: 'Disponible próximamente',
  'aria-disabled': 'true',
  disabled: true,
  class: 'cursor-not-allowed opacity-70 hover:opacity-70 focus:outline-none focus:ring-0',
};

const navigationSocial = [
  { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/' },
  { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/' },
  { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/' },
];

const landingContentMap: Record<SupportedLanguage, LandingContent> = {
  es: {
    lang: 'es',
    metadata: {
      title: 'Escuela Integral de Fútbol Profesional en Bulgaria',
      description:
        'Sports Scouting Sudamérica presenta un ecosistema deportivo integral para formar futbolistas profesionales en Bulgaria con estándares internacionales.',
      ignoreTitleTemplate: true,
    },
    navigation: {
      header: {
        links: [
          { text: 'Programa Integral', href: getPermalink('#programa') },
          { text: 'Infraestructura', href: getPermalink('#infraestructura') },
          { text: 'Talento y Formación', href: getPermalink('#talento') },
          { text: 'Impacto Social', href: getPermalink('#impacto') },
          { text: 'Contacto', href: getPermalink('#contacto') },
        ],
        actions: [downloadAction],
      },
      footer: {
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
        socialLinks: navigationSocial,
        footNote: `© ${new Date().getFullYear()} Sports Scouting Sudamérica · Bulgaria. Proyecto deportivo integral para el desarrollo del fútbol profesional.`,
      },
    },
    hero: {
      tagline: 'Sports Scouting Sudamérica',
      title: {
        main: 'Escuela Integral de Fútbol Profesional en',
        highlight: 'Bulgaria',
      },
      subtitle:
        'Fundamos un ecosistema deportivo que une la fortaleza atlética búlgara con la creatividad sudamericana para formar profesionales capaces de conquistar el escenario internacional.',
      actions: [
        { variant: 'primary', text: 'Agendar reunión', href: '#contacto' },
      ],
      disabledAction: downloadAction,
      imageAlt: 'Entrenamiento de fútbol profesional',
    },
    vision: {
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
    },
    stats: {
      tagline: 'Programa integral',
      title: 'Resultados que guían nuestra hoja de ruta',
      items: [
        { amount: '14', title: 'Objetivos estratégicos', icon: 'tabler:target-arrow' },
        { amount: '16', title: 'Ejes de gestión integral', icon: 'tabler:chart-infographic' },
        { amount: '10', title: 'Áreas especializadas del staff', icon: 'tabler:users-group' },
        { amount: '1', title: 'Copa Bulgaria anual', icon: 'tabler:trophy' },
      ],
    },
    objectives: {
      tagline: 'Objetivos estratégicos',
      title: 'Un plan en 14 metas que transforman el fútbol búlgaro',
      subtitle: 'Cada iniciativa responde a una necesidad concreta: profesionalización, infraestructura, marketing y crecimiento social.',
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
    training: {
      tagline: 'Formación y metodología',
      title: 'Proyecto Deportivo Integral',
      introTitle: 'La excelencia deportiva nace desde la base',
      introText:
        'Combinamos procesos de scouting, entrenamiento y acompañamiento humano para que cada futbolista crezca dentro de una cultura ganadora.',
      items: [
        {
          title: 'Metodología sudamericana adaptada',
          description:
            'Capacitación continua para cuerpo técnico, preparación física y utilería con el acompañamiento del manager institucional.',
        },
        {
          title: 'Proyecto de formación juvenil',
          description:
            'Plan de trabajo físico-técnico, premios por detección de futbolistas y seguimiento integral para acercarlos a la élite profesional.',
        },
        {
          title: 'Competencia alineada al objetivo',
          description:
            'Organización de torneos y amistosos con clubes de primera categoría para medir el progreso y exponer a los talentos descubiertos.',
        },
      ],
      imageAlt: 'Entrenamiento táctico con juveniles en campo profesional',
    },
    infrastructure: {
      tagline: 'Infraestructura y bienestar',
      title: 'Ciudad Deportiva y Casa Club',
      introTitle: 'Espacios pensados para el alto rendimiento',
      introText:
        'Cada inversión en infraestructura refuerza nuestra promesa de bienestar, profesionalismo y proyección internacional.',
      items: [
        {
          title: 'Ciudad Deportiva multifunción',
          description:
            'Planificación de usos, jornadas de presentación y comercialización de espacios publicitarios para reinvertir en infraestructura.',
        },
        {
          title: 'Casa Club para juveniles',
          description:
            'Habitaciones equipadas, áreas de estudio y convivencia saludable que aseguren calidad de vida y foco académico-deportivo.',
        },
        {
          title: 'Estadio y sede como vidriera',
          description:
            'Oficinas con vista al campo, museo y espacios para recibir sponsors siguiendo estándares de clubes europeos.',
        },
      ],
      imageAlt: 'Complejo deportivo profesional con canchas y edificio principal en Sofía',
    },
    projection: {
      tagline: 'Proyección y marca',
      title: 'Expansión comercial y visibilidad global',
      introTitle: 'Identidad que se siente dentro y fuera de la cancha',
      introText:
        'Desde la comunicación digital hasta los eventos insignia, todo el proyecto está orientado a generar recursos sostenibles y notoriedad internacional.',
      items: [
        {
          title: 'Plataforma digital y redes',
          description:
            'Sitio oficial, estrategia en redes sociales y contenidos exclusivos para informar, fidelizar y atraer inversores.',
        },
        {
          title: 'Videoteca y carpeta institucional',
          description:
            'Producción audiovisual para mostrar el talento formado y disponer de material de venta inmediata para clubes interesados.',
        },
        {
          title: 'Eventos insignia y Copa Bulgaria',
          description:
            'Torneo anual y presentaciones itinerantes que posicionan la marca en toda la región y fortalecen el sentido de pertenencia.',
        },
      ],
      imageAlt: 'Mapa abstracto que conecta alianzas de scouting y patrocinio',
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
      tagline: 'Impacto social y educativo',
      title: 'Una escuela que transforma comunidades',
      subtitle: 'El proyecto trasciende la competencia deportiva y se integra con programas educativos, sociales y familiares.',
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
      primaryAction: { text: 'Hablar con el equipo', href: '#contacto', variant: 'primary' },
      disabledAction: downloadAction,
    },
    contact: {
      tagline: 'Contacto',
      title: 'Conversemos sobre el proyecto',
      subtitle: 'Completa el formulario y coordinemos una reunión presencial o virtual.',
      form: {
        inputs: [
          { type: 'text', name: 'name', label: 'Nombre y apellido', placeholder: 'Ingresa tu nombre completo' },
          { type: 'email', name: 'email', label: 'Correo electrónico', placeholder: 'nombre@empresa.com' },
          { type: 'text', name: 'organization', label: 'Organización', placeholder: 'Club, academia o empresa' },
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
  },
  bg: {
    lang: 'bg',
    metadata: {
      title: 'Интегрирана професионална футболна академия в България',
      description:
        'Sports Scouting Sudamérica представя цялостна спортна екосистема за подготовка на професионални футболисти в България по международни стандарти.',
      ignoreTitleTemplate: true,
    },
    navigation: {
      header: {
        links: [
          { text: 'Цялостна програма', href: getPermalink('#programa') },
          { text: 'Инфраструктура', href: getPermalink('#infraestructura') },
          { text: 'Талант и подготовка', href: getPermalink('#talento') },
          { text: 'Социално въздействие', href: getPermalink('#impacto') },
          { text: 'Контакт', href: getPermalink('#contacto') },
        ],
        actions: [
          {
            ...downloadAction,
            text: 'Скоро досие',
            title: 'Налично скоро',
          },
        ],
      },
      footer: {
        links: [
          {
            title: 'Основни направления',
            links: [
              { text: 'Стратегически цели', href: getPermalink('#programa') },
              { text: 'Спортен град', href: getPermalink('#infraestructura') },
              { text: 'Центрове за таланти', href: getPermalink('#talento') },
            ],
          },
          {
            title: 'Общество и въздействие',
            links: [
              { text: 'Социални инициативи', href: getPermalink('#impacto') },
              { text: 'Образователни програми', href: getPermalink('#impacto') },
              { text: 'Събития и Купа България', href: getPermalink('#programa') },
            ],
          },
          {
            title: 'Контакт',
            links: [
              { text: 'hola@sportsscouting.bg', href: 'mailto:hola@sportsscouting.bg' },
              { text: '+359 000 000 000', href: 'tel:+359000000000' },
              { text: 'Форма за запитване', href: getPermalink('#contacto') },
            ],
          },
        ],
        secondaryLinks: [],
        socialLinks: navigationSocial,
        footNote: `© ${new Date().getFullYear()} Sports Scouting Sudamérica · България. Цялостен спортен проект за развитие на професионалния футбол.`,
      },
    },
    hero: {
      tagline: 'Sports Scouting Sudamérica',
      title: {
        main: 'Интегрирана професионална футболна академия в',
        highlight: 'България',
      },
      subtitle:
        'Създаваме спортна екосистема, която съчетава българската атлетична сила и южноамериканската креативност, за да подготвим професионалисти за световната сцена.',
      actions: [
        { variant: 'primary', text: 'Запази среща', href: '#contacto' },
      ],
      disabledAction: {
        ...downloadAction,
        text: 'Скоро досие',
        title: 'Налично скоро',
      },
      imageAlt: 'Професионална футболна тренировка с отбор в България',
    },
    vision: {
      tagline: 'Мисия',
      title: 'Визия, мисия и ангажименти',
      subtitle: 'Проект, който надхвърля спорта и превръща България в социална и футболна сила.',
      items: [
        {
          title: 'Визия',
          description:
            'Да позиционираме България сред елита на световния футбол чрез академия, която съчетава местната физическа мощ и южноамериканските тренировъчни методики.',
          icon: 'tabler:eye-star',
        },
        {
          title: 'Мисия',
          description:
            'Да проектираме, управляваме и развиваме професионална екосистема — скаутинг, обучение, инфраструктура и международна реализация — която съпровожда футболиста от откриването му до професионалния дебют.',
          icon: 'tabler:flag-3',
        },
        {
          title: 'Ключови ангажименти',
          description:
            'Да осигурим устойчиви ресурси, да включим легендите на българския футбол, да разширим социалния и образователния ефект и да гарантираме постоянно човешко присъствие за всяко семейство.',
          icon: 'tabler:heart-handshake',
        },
      ],
    },
    stats: {
      tagline: 'Цялостна програма',
      title: 'Показатели, които определят нашата пътна карта',
      items: [
        { amount: '14', title: 'Стратегически цели', icon: 'tabler:target-arrow' },
        { amount: '16', title: 'Основни направления в управлението', icon: 'tabler:chart-infographic' },
        { amount: '10', title: 'Специализирани екипни звена', icon: 'tabler:users-group' },
        { amount: '1', title: 'Годишна Купа България', icon: 'tabler:trophy' },
      ],
    },
    objectives: {
      tagline: 'Стратегически приоритети',
      title: 'План от 14 стъпки за трансформация на българския футбол',
      subtitle:
        'Всяка инициатива отговаря на конкретна нужда: професионализация, инфраструктура, маркетинг и социален растеж.',
      items: [
        {
          title: 'Професионализация на екипа',
          description:
            'Планиране, преструктуриране и постоянни обучения за ключовите отдели: медии, поддръжка, спортно-технически и юношески сектор.',
          icon: 'tabler:school',
        },
        {
          title: 'Модерен спортен комплекс',
          description:
            'Комплекс с основни и помощни игрища, фитнес, съблекални, медицински център и офиси, посветени на младежкия проект.',
          icon: 'tabler:building-stadium',
        },
        {
          title: 'Връзка с легендите',
          description:
            'Събития и мачове в чест на икони като Христо Стоичков, които укрепват принадлежността и вдъхновяват новите поколения.',
          icon: 'tabler:stars',
        },
        {
          title: 'Регионални скаутинг центрове',
          description:
            'Мрежа от партньорски клубове в стратегически градове за идентифициране на таланти, споделяне на методика и устойчиво обучение.',
          icon: 'tabler:world-search',
        },
        {
          title: 'Състезания и младежки клуб',
          description:
            'Юношески отбори с авторска методология и общежитие, което гарантира благосъстояние и фокус върху високите постижения.',
          icon: 'tabler:home-heart',
        },
        {
          title: 'Марка и дигитално присъствие',
          description:
            'Официален сайт, социални мрежи, видеотека и корпоративно досие за комуникация на успехи, привличане на спонсори и позициониране на клуба.',
          icon: 'tabler:brand-hipchat',
        },
      ],
    },
    training: {
      tagline: 'Подготовка и методология',
      title: 'Цялостен спортен проект',
      introTitle: 'Високото майсторство започва от основата',
      introText:
        'Обединяваме скаутинг процеси, тренировки и човешка подкрепа, за да израсне всеки футболист в печеливша култура.',
      items: [
        {
          title: 'Адаптирана южноамериканска методика',
          description:
            'Непрекъснати обучения за треньорския щаб, кондиционни специалисти и екипа по оборудването с подкрепата на институционален мениджър.',
        },
        {
          title: 'Младежка развойна програма',
          description:
            'Физико-технически план, стимули за откриване на таланти и цялостно проследяване, което ги приближава до професионалния елит.',
        },
        {
          title: 'Състезания в синхрон с целите',
          description:
            'Организация на турнири и контроли с водещи клубове за измерване на напредъка и представяне на откритите таланти.',
        },
      ],
      imageAlt: 'Млади български футболисти по време на тактическо занимание',
    },
    infrastructure: {
      tagline: 'Инфраструктура и благосъстояние',
      title: 'Спортен град и клубен дом',
      introTitle: 'Пространства за върхови резултати',
      introText:
        'Всяка инвестиция в инфраструктура укрепва нашето обещание за благополучие, професионализъм и международна реализация.',
      items: [
        {
          title: 'Многофункционален спортен град',
          description:
            'Планиране на използването, представителни дни и търговия с рекламни площи за реинвестиране в инфраструктура.',
        },
        {
          title: 'Клубен дом за юноши',
          description:
            'Оборудвани стаи, учебни зони и здравословна среда, която гарантира качество на живот и академичен фокус.',
        },
        {
          title: 'Стадион и база като витрина',
          description:
            'Офиси с изглед към терена, музей и пространства за партньори по стандартите на водещите европейски клубове.',
        },
      ],
      imageAlt: 'Съвременен спортен комплекс в София с терени и основна сграда',
    },
    projection: {
      tagline: 'Марка и разширяване',
      title: 'Търговско развитие и глобална видимост',
      introTitle: 'Идентичност, която се усеща навсякъде',
      introText:
        'От дигиталната комуникация до знаковите събития – всичко е насочено към устойчиви приходи и международна разпознаваемост.',
      items: [
        {
          title: 'Дигитална платформа и мрежи',
          description:
            'Официален сайт, стратегия в социалните мрежи и ексклузивно съдържание за информиране, лоялност и привличане на инвеститори.',
        },
        {
          title: 'Видеотека и корпоративно досие',
          description:
            'Аудиовизуални продукции, които показват подготвените таланти и осигуряват материал за незабавни трансфери.',
        },
        {
          title: 'Емблематични събития и Купа България',
          description:
            'Годишен турнир и пътуващи презентации, които позиционират марката в региона и укрепват общността.',
        },
      ],
      imageAlt: 'Стратегическа карта с партньорства и бранд активации',
    },
    roadmap: {
      tagline: 'Пътна карта',
      title: 'Етапи на реализация',
      subtitle: 'Ясна последователност за активиране, консолидиране и развитие на всяка област.',
      items: [
        {
          title: 'Професионализиране на екипа',
          description:
            'Работни наръчници, обучения и структуриране на търговския отдел за генериране на устойчиви приходи.',
          icon: 'tabler:clipboard-check',
        },
        {
          title: 'Старт на спортния град',
          description:
            'Приоритетни строителни дейности, подготовка на игрища и активности с юноши и национални гарнитури.',
          icon: 'tabler:crane',
        },
        {
          title: 'Включване на легенди и спонсори',
          description:
            'Мачове в чест и стратегически партньорства за по-голяма видимост и силна марка.',
          icon: 'tabler:hand-love-you',
        },
        {
          title: 'Мрежа от таланти и турнири',
          description:
            'Центрове за откриване, партньорства с клубове и календар с турнири за всяка възрастова група.',
          icon: 'tabler:sitemap',
        },
        {
          title: 'Международно разширяване',
          description:
            'Споразумения за опит в Аржентина, Бразилия, Мексико и Европа, които позиционират нашите възпитаници на глобалния пазар.',
          icon: 'tabler:world',
        },
      ],
    },
    impact: {
      tagline: 'Социално и образователно въздействие',
      title: 'Академия, която променя общности',
      subtitle:
        'Проектът надхвърля спорта и се свързва с образователни, социални и семейни инициативи.',
      items: [
        {
          title: 'Постоянна социална активност',
          description:
            'Програма „Футболът е само игра“ с дейности в социални кухни, НПО и институции за включване на деца и младежи.',
          icon: 'tabler:heart-handshake',
        },
        {
          title: 'Образование и невроспорт',
          description:
            'Семинари, клиники и партньорства с университети и специалисти, които свързват науката, психологията и спорта.',
          icon: 'tabler:brain',
        },
        {
          title: 'Управление и подкрепа на семействата',
          description:
            'Социална комисия и организационна структура, която гарантира човешко, правно и финансово съдействие.',
          icon: 'tabler:users',
        },
      ],
    },
    faqs: {
      tagline: 'Често задавани въпроси',
      title: 'Всичко, което трябва да знаете',
      subtitle: 'Отговаряме на най-честите въпроси на клубове, инвеститори и стратегически партньори.',
      items: [
        {
          title: 'С какво се отличава академията?',
          description:
            'С комбинацията от южноамерикански талант, българска дисциплина и професионално управление – от скаутинга до международната реализация.',
        },
        {
          title: 'Как се финансира проектът?',
          description:
            'Чрез спонсори, търговски продукти, събития, реклама и бъдещи трансфери на подготвени футболисти.',
        },
        {
          title: 'Какви услуги получават юношите?',
          description:
            'Пълен пансион, академична подкрепа, медицинско и нутриционистично обслужване, както и възможности за участие в национални и международни първенства.',
        },
        {
          title: 'Как да се включат клубове или инвеститори?',
          description:
            'Чрез партньорски споразумения, спонсорство или участие в Купа България и регионалните скаутинг центрове.',
        },
      ],
    },
    callToAction: {
      title: 'Да изградим следващата футболна сила на България',
      subtitle: 'Да създадем партньорства, които ускоряват инфраструктурата, таланта и международната видимост.',
      primaryAction: { text: 'Свържете се с екипа', href: '#contacto', variant: 'primary' },
      disabledAction: {
        ...downloadAction,
        text: 'Скоро досие',
        title: 'Налично скоро',
      },
    },
    contact: {
      tagline: 'Контакт',
      title: 'Нека обсъдим проекта',
      subtitle: 'Попълнете формата и ще организираме среща на живо или онлайн.',
      form: {
        inputs: [
          { type: 'text', name: 'name', label: 'Име и фамилия', placeholder: 'Въведете пълното си име' },
          { type: 'email', name: 'email', label: 'Имейл', placeholder: 'name@company.com' },
          { type: 'text', name: 'organization', label: 'Организация', placeholder: 'Клуб, академия или компания' },
        ],
        textarea: {
          name: 'message',
          label: 'Как можем да помогнем?',
          placeholder: 'Споделете какво партньорство или информация търсите.',
          rows: 5,
        },
        disclaimer: {
          label: 'Съгласен съм да се свържат с мен за повече информация за проекта.',
        },
        button: 'Изпрати съобщение',
      },
    },
  },
  en: {
    lang: 'en',
    metadata: {
      title: 'Comprehensive Professional Football Academy in Bulgaria',
      description:
        'Sports Scouting Sudamérica presents an end-to-end sports ecosystem designed to develop professional footballers in Bulgaria following international standards.',
      ignoreTitleTemplate: true,
    },
    navigation: {
      header: {
        links: [
          { text: 'Comprehensive Program', href: getPermalink('#programa') },
          { text: 'Infrastructure', href: getPermalink('#infraestructura') },
          { text: 'Talent & Development', href: getPermalink('#talento') },
          { text: 'Social Impact', href: getPermalink('#impacto') },
          { text: 'Contact', href: getPermalink('#contacto') },
        ],
        actions: [
          {
            ...downloadAction,
            text: 'Brochure coming soon',
            title: 'Available soon',
          },
        ],
      },
      footer: {
        links: [
          {
            title: 'Project pillars',
            links: [
              { text: 'Strategic objectives', href: getPermalink('#programa') },
              { text: 'Sports City', href: getPermalink('#infraestructura') },
              { text: 'Talent hubs', href: getPermalink('#talento') },
            ],
          },
          {
            title: 'Community impact',
            links: [
              { text: 'Social action', href: getPermalink('#impacto') },
              { text: 'Education initiatives', href: getPermalink('#impacto') },
              { text: 'Events & Bulgaria Cup', href: getPermalink('#programa') },
            ],
          },
          {
            title: 'Contact',
            links: [
              { text: 'hola@sportsscouting.bg', href: 'mailto:hola@sportsscouting.bg' },
              { text: '+359 000 000 000', href: 'tel:+359000000000' },
              { text: 'Contact form', href: getPermalink('#contacto') },
            ],
          },
        ],
        secondaryLinks: [],
        socialLinks: navigationSocial,
        footNote: `© ${new Date().getFullYear()} Sports Scouting Sudamérica · Bulgaria. A comprehensive sports project for professional football development.`,
      },
    },
    hero: {
      tagline: 'Sports Scouting Sudamérica',
      title: {
        main: 'Comprehensive Professional Football Academy in',
        highlight: 'Bulgaria',
      },
      subtitle:
        'We build a sports ecosystem that blends Bulgarian athletic power with South American creativity to develop professionals ready to excel on the global stage.',
      actions: [
        { variant: 'primary', text: 'Book a meeting', href: '#contacto' },
      ],
      disabledAction: {
        ...downloadAction,
        text: 'Brochure coming soon',
        title: 'Available soon',
      },
      imageAlt: 'Professional football players training at a high-performance facility',
    },
    vision: {
      tagline: 'Purpose',
      title: 'Vision, mission and commitments',
      subtitle: 'A project that transcends sport and positions Bulgaria as a football and social powerhouse.',
      items: [
        {
          title: 'Vision',
          description:
            'Position Bulgaria among the elite of world football through an integrated academy that combines local physical strength with the creativity of South American methodology.',
          icon: 'tabler:eye-star',
        },
        {
          title: 'Mission',
          description:
            'Design, manage and scale a professional ecosystem—scouting, development, infrastructure and international projection—that supports each player from detection to professional debut.',
          icon: 'tabler:flag-3',
        },
        {
          title: 'Key commitments',
          description:
            'Generate sustainable revenue, engage Bulgarian legends, expand social and educational impact and provide continuous human support for every family.',
          icon: 'tabler:heart-handshake',
        },
      ],
    },
    stats: {
      tagline: 'Comprehensive program',
      title: 'Metrics that guide our roadmap',
      items: [
        { amount: '14', title: 'Strategic objectives', icon: 'tabler:target-arrow' },
        { amount: '16', title: 'Integrated management pillars', icon: 'tabler:chart-infographic' },
        { amount: '10', title: 'Specialised staff areas', icon: 'tabler:users-group' },
        { amount: '1', title: 'Annual Bulgaria Cup', icon: 'tabler:trophy' },
      ],
    },
    objectives: {
      tagline: 'Strategic objectives',
      title: 'A 14-goal plan to transform Bulgarian football',
      subtitle:
        'Every initiative addresses a concrete need: professionalisation, infrastructure, marketing and social growth.',
      items: [
        {
          title: 'Professionalise the staff',
          description:
            'Planning, restructuring and ongoing training for media, maintenance, technical secretariat and youth development.',
          icon: 'tabler:school',
        },
        {
          title: 'Flagship Sports City',
          description:
            'A complex featuring main and auxiliary pitches, gym, locker rooms, medical unit and offices dedicated to the youth project.',
          icon: 'tabler:building-stadium',
        },
        {
          title: 'Connect with Bulgarian legends',
          description:
            'Tribute matches and strategic events that include icons like Hristo Stoichkov to strengthen identity and pride.',
          icon: 'tabler:stars',
        },
        {
          title: 'Regional scouting hubs',
          description:
            'A network of partner clubs in strategic cities to identify talent, share methodology and sustain the development project.',
          icon: 'tabler:world-search',
        },
        {
          title: 'Development leagues and Club House',
          description:
            'Academy teams competing with proprietary methodology and a residence that guarantees wellbeing and elite performance.',
          icon: 'tabler:home-heart',
        },
        {
          title: 'Brand, marketing and digital reach',
          description:
            'Official website, social media, video library and institutional deck to showcase achievements, attract sponsors and position the club.',
          icon: 'tabler:brand-hipchat',
        },
      ],
    },
    training: {
      tagline: 'Development & methodology',
      title: 'Integrated sports project',
      introTitle: 'Excellence starts at the foundation',
      introText:
        'We blend scouting, training and human support so that every player grows within a winning culture.',
      items: [
        {
          title: 'Adapted South American methodology',
          description:
            'Continuous training for coaching, performance and equipment teams with the support of the institutional manager.',
        },
        {
          title: 'Youth development pathway',
          description:
            'Technical-physical planning, incentives for talent discovery and holistic monitoring to reach the professional elite.',
        },
        {
          title: 'Competition aligned with ambition',
          description:
            'Tournaments and friendlies with top-flight clubs to measure progress and showcase emerging talent.',
        },
      ],
      imageAlt: 'Youth academy players working on tactical drills',
    },
    infrastructure: {
      tagline: 'Infrastructure & wellbeing',
      title: 'Sports City and Club House',
      introTitle: 'Spaces designed for high performance',
      introText:
        'Every infrastructure investment reinforces our promise of wellbeing, professionalism and international projection.',
      items: [
        {
          title: 'Multi-purpose Sports City',
          description:
            'Usage planning, launch events and commercial activation of advertising assets to reinvest in facilities.',
        },
        {
          title: 'Club House for youth',
          description:
            'Fully equipped rooms, study areas and a healthy environment that ensures quality of life and academic focus.',
        },
        {
          title: 'Stadium and headquarters as showcase',
          description:
            'Pitch-view offices, museum and partner spaces inspired by the standards of leading European clubs.',
        },
      ],
      imageAlt: 'Modern sports complex in Sofia featuring pitches and a central building',
    },
    projection: {
      tagline: 'Brand & projection',
      title: 'Commercial growth and global visibility',
      introTitle: 'An identity felt on and off the pitch',
      introText:
        'From digital communications to signature events, everything is geared towards sustainable revenue and international awareness.',
      items: [
        {
          title: 'Digital platform and media',
          description:
            'Official website, social media strategy and exclusive content to inform, engage and attract investors.',
        },
        {
          title: 'Media library and institutional deck',
          description:
            'Audiovisual production to showcase talent and provide on-demand materials for interested clubs.',
        },
        {
          title: 'Flagship events and Bulgaria Cup',
          description:
            'Annual tournament and travelling presentations that elevate the brand across the region and strengthen belonging.',
        },
      ],
      imageAlt: 'Strategic map illustrating scouting and sponsorship alliances',
    },
    roadmap: {
      tagline: 'Roadmap',
      title: 'Implementation stages',
      subtitle: 'A clear sequence to activate, consolidate and project every area of the initiative.',
      items: [
        {
          title: 'Staff professionalisation',
          description:
            'Operational manuals, training sessions and a structured commercial unit to generate genuine revenue.',
          icon: 'tabler:clipboard-check',
        },
        {
          title: 'Launch of the Sports City',
          description:
            'Priority works, pitch preparation and activations with academy players and local selections.',
          icon: 'tabler:crane',
        },
        {
          title: 'Legends and sponsors engagement',
          description:
            'Tribute matches and strategic alliances to amplify visibility and reinforce the brand.',
          icon: 'tabler:hand-love-you',
        },
        {
          title: 'Talent network and competitions',
          description:
            'Scouting centres, partner agreements and a tournament calendar for every category.',
          icon: 'tabler:sitemap',
        },
        {
          title: 'International expansion',
          description:
            'Agreements for immersion experiences in Argentina, Brazil, Mexico and Europe to position graduates in global markets.',
          icon: 'tabler:world',
        },
      ],
    },
    impact: {
      tagline: 'Social & educational impact',
      title: 'An academy that transforms communities',
      subtitle:
        'The project goes beyond competition and connects with educational, social and family programmes.',
      items: [
        {
          title: 'Ongoing social action',
          description:
            '“Football is only a game” programme with activities in community centres, NGOs and institutions to include children and youth.',
          icon: 'tabler:heart-handshake',
        },
        {
          title: 'Education and neuro-sport',
          description:
            'Seminars, clinics and partnerships with universities and specialists linking science, psychology and sport.',
          icon: 'tabler:brain',
        },
        {
          title: 'Governance and family support',
          description:
            'Social action board and organisational framework that ensures human, legal and financial guidance for the project.',
          icon: 'tabler:users',
        },
      ],
    },
    faqs: {
      tagline: 'Frequently asked questions',
      title: 'Everything you need to know',
      subtitle: 'We address the most common questions from clubs, investors and strategic partners.',
      items: [
        {
          title: 'What makes this Academy different?',
          description:
            'The blend of South American talent, Bulgarian discipline and professional management from scouting to international exposure.',
        },
        {
          title: 'How is the project funded?',
          description:
            'Through sponsorships, merchandising, events, advertising assets and future transfers of home-grown players.',
        },
        {
          title: 'What services do academy players receive?',
          description:
            'Full board, academic support, medical and nutritional care, plus opportunities to compete in national and international leagues.',
        },
        {
          title: 'How can a club or investor get involved?',
          description:
            'Via collaboration agreements, sponsorships or participation in the Bulgaria Cup and regional scouting centres.',
        },
      ],
    },
    callToAction: {
      title: 'Let’s build Bulgaria’s next football powerhouse',
      subtitle: 'Co-create strategic alliances that accelerate infrastructure, talent and global visibility.',
      primaryAction: { text: 'Talk with our team', href: '#contacto', variant: 'primary' },
      disabledAction: {
        ...downloadAction,
        text: 'Brochure coming soon',
        title: 'Available soon',
      },
    },
    contact: {
      tagline: 'Contact',
      title: 'Let’s talk about the project',
      subtitle: 'Complete the form and we will coordinate an in-person or virtual meeting.',
      form: {
        inputs: [
          { type: 'text', name: 'name', label: 'Full name', placeholder: 'Enter your full name' },
          { type: 'email', name: 'email', label: 'Email', placeholder: 'name@company.com' },
          { type: 'text', name: 'organization', label: 'Organisation', placeholder: 'Club, academy or company' },
        ],
        textarea: {
          name: 'message',
          label: 'How can we help you?',
          placeholder: 'Tell us what kind of partnership or information you are looking for.',
          rows: 5,
        },
        disclaimer: {
          label: 'I agree to be contacted to learn more about the project.',
        },
        button: 'Send message',
      },
    },
  },
};

export function getLandingContent(lang: SupportedLanguage): LandingContent {
  return landingContentMap[lang];
}
