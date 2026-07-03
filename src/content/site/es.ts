import type {
  HubContent,
  ServicePageContent,
  ContactContent,
  BlogContent,
  CommonStrings,
} from './types';

export const common: CommonStrings = {
  langSwitchLabel: 'English',
  skipToContent: 'Saltar al contenido',
  homeAriaLabel: 'Victor Avendaño — inicio',
};

export const hub: HubContent = {
  meta: {
    title: 'Victor Avendaño | PM & Support Partner',
    description:
      'Project Manager potenciado con IA y Asistente Ejecutivo bilingüe. 10+ años apoyando fintech, sector público y ONGs con sistemas, no solo tareas.',
  },
  nav: {
    pm: 'Project Manager',
    va: 'Asistente Virtual',
    blog: 'Blog',
    contact: 'Contacto',
  },
  hero: {
    descriptor: 'Victor Avendaño | PM & Support Partner',
    tagline: 'Construyo sistemas, no solo ejecuto tareas. Tu socio operativo bilingüe, con IA integrada.',
    intro:
      'Tengo más de 10 años de experiencia operativa y ejecutiva en fintech, sector público y organizaciones de impacto social. Soy bilingüe (español nativo, inglés C2) y AI-fluent: uso ChatGPT, Claude y Microsoft Copilot a diario para acelerar investigación, redacción y automatización de procesos.',
    ctaPM: 'Ver servicio de Project Manager',
    ctaVA: 'Ver servicio de Asistente Virtual',
  },
  about: {
    eyebrow: 'Sobre mí',
    heading: 'Un socio operativo que documenta y escala lo que hago',
    body: [
      'Soy Victor Camilo Avendaño Forero, profesional de operaciones y administración AI-fluent con más de 10 años apoyando a ejecutivos, líderes de cuenta y programas multi-stakeholder en fintech, sector público y organizaciones de impacto social.',
      'Mi enfoque parte de un principio simple: convertir solicitudes puntuales en procesos documentados y repetibles que cualquier equipo pueda seguir usando después de que entregue el trabajo. Eso incluye gestión de inbox, calendarios y CRM bajo SLAs estrictos, coordinación con stakeholders en distintas zonas horarias, y uso diario de herramientas de IA (ChatGPT, Claude, Microsoft Copilot y LLMs locales como Ollama) para research, borradores y reportes.',
      'Soy nativo en español, con inglés C2 certificado (EF SET 88/100). He operado en entornos completamente remotos con clientes globales, así como en proyectos con entidades del gobierno distrital de Bogotá y organizaciones sin ánimo de lucro que fundé y dirigí yo mismo.',
    ],
  },
  achievements: {
    heading: 'Resultados verificables, no promesas genéricas',
    stats: [
      { value: '10+', label: 'años de experiencia en operaciones y gestión ejecutiva' },
      { value: '24h', label: 'estándar de respuesta bajo SLA en operaciones de alto volumen' },
      { value: '100%', label: 'adherencia a especificaciones y límites financieros (Ecoproyectos Aire)' },
      { value: '2M+', label: 'usuarios en la plataforma fintech donde gestioné colas de casos (ARQ)' },
      { value: 'US$10B+', label: 'escala de la operación fintech donde he trabajado' },
      { value: 'C2', label: 'inglés certificado — EF SET 88/100' },
    ],
  },
  compare: {
    eyebrow: '¿Qué servicio necesitas?',
    heading: 'Dos formas de trabajar conmigo',
    intro:
      'Ambos servicios parten de la misma base — disciplina operativa, bilingüismo real y uso práctico de IA — pero resuelven necesidades distintas. Elige según lo que necesites resolver hoy.',
    pm: {
      title: 'Project Manager',
      descriptor: 'AI-Augmented PM',
      points: [
        'Gestión de proyectos operativos end-to-end: planeación, presupuesto, KPIs y reporting',
        'Implementación de IA en flujos de trabajo administrativos',
        'Experiencia con entidades públicas y ONGs',
        'Coordinación remota multi-stakeholder entre husos horarios',
      ],
      cta: 'Conocer el servicio de PM',
      href: '/es/project-manager',
    },
    va: {
      title: 'Asistente Virtual',
      descriptor: 'Executive AI Partner',
      points: [
        'Gestión de inbox, calendario y CRM bajo SLA',
        'Soporte ejecutivo en inglés C2 a clientes globales',
        'Investigación y redacción asistidas por IA',
        'Documentación de workflows reutilizables',
      ],
      cta: 'Conocer el servicio de Asistente Virtual',
      href: '/es/virtual-assistant',
    },
  },
  contactCta: {
    heading: '¿Hablamos de tu proyecto?',
    body: 'Cuéntame qué necesitas resolver y te respondo con una propuesta a la medida — sin tarifas fijas ni plantillas genéricas.',
    cta: 'Escríbeme',
  },
  footer: {
    tagline: 'Construyo sistemas, no solo ejecuto tareas.',
    rights: 'Todos los derechos reservados.',
  },
};

export const pm: ServicePageContent = {
  meta: {
    title: 'Victor Avendaño | AI-Augmented PM',
    description:
      'Project Manager con más de 10 años de experiencia operativa, especializado en automatización con IA, proyectos con entidades públicas/ONGs y coordinación remota multi-stakeholder.',
  },
  hero: {
    descriptor: 'Victor Avendaño | AI-Augmented PM',
    heading: 'Gestión de proyectos que combina disciplina operativa con IA aplicada',
    intro:
      'Tengo más de 10 años liderando proyectos operativos y administrativos en fintech, sector público y organizaciones sin ánimo de lucro. Integro herramientas de IA generativa en cada fase del proyecto — planeación, reporting, comunicación con stakeholders — sin perder el control ni la trazabilidad que exigen equipos remotos y multi-stakeholder.',
    cta: 'Hablemos de tu proyecto',
  },
  focusHeading: 'Áreas de especialización',
  focusAreas: [
    {
      title: 'Proyectos operativos end-to-end',
      body: 'Planeación, seguimiento presupuestal, reporting de KPIs y coordinación con proveedores, desde el arranque hasta el cierre del proyecto.',
    },
    {
      title: 'Implementación de IA en flujos de trabajo',
      body: 'Automatización de generación de reportes, borradores de comunicación y síntesis de investigación con ChatGPT, Claude, Copilot y modelos locales (Ollama, Qwen, DeepSeek).',
    },
    {
      title: 'Proyectos con entidades públicas y ONGs',
      body: 'Experiencia directa gestionando documentación y cumplimiento para el gobierno distrital de Bogotá, y fundando/dirigiendo dos asociaciones sin ánimo de lucro con alianzas público-privadas.',
    },
    {
      title: 'Coordinación remota multi-stakeholder',
      body: 'Trabajo cross-funcional con equipos de riesgo, producto y cumplimiento en distintas zonas horarias, con entregas escritas claras y handoffs estructurados.',
    },
  ],
  experienceHeading: 'Experiencia relevante',
  experienceIntro: 'Así se traduce mi trayectoria en valor concreto para un proyecto tuyo:',
  experience: [
    {
      org: 'Ecoproyectos Aire S.A.S',
      role: 'Operations & Project Manager / Junior Project Manager',
      period: '2015 – 2023',
      benefit:
        'Manejé ciclos completos de proyecto (calendarios, presupuestos, reporting de cumplimiento) logrando 100% de adherencia a especificaciones y límites financieros — la misma disciplina que aplicaría a tus entregables.',
    },
    {
      org: 'ARQ (antes DolarApp)',
      role: 'FinCrime Analyst — Operaciones de alto volumen',
      period: 'jul 2024 – abr 2026',
      benefit:
        'Gestioné colas de casos de alto volumen en una plataforma de 2M+ usuarios bajo SLA estrictos, construyendo plantillas y rutas de escalamiento que se volvieron activos reutilizables para el equipo — el mismo enfoque de sistematización que aplico a cualquier proyecto.',
    },
    {
      org: 'UAERMV — Gobierno Distrital de Bogotá',
      role: 'Gestión Documental y Cumplimiento',
      period: 'feb 2018 – ene 2023',
      benefit:
        'Diseñé marcos de retención documental (TRD/TVD) alineados a estándares gubernamentales, estandarizando el manejo de información entre dependencias — experiencia directa en gobernanza de datos para proyectos con requisitos de cumplimiento.',
    },
  ],
  extraHeading: 'Certificaciones relevantes',
  extraItems: [
    'Diploma Internacional en Gestión de Proyectos según lineamientos PMI (IEP / Asturias)',
    'Google Project Management Professional Certificate',
    'Generative AI for Project Managers Specialization (IBM)',
  ],
  modalitiesHeading: 'Modalidades de contratación',
  modalitiesIntro: 'Cotización a medida según alcance — sin tarifas fijas publicadas.',
  modalities: [
    { title: 'Tiempo completo', body: 'Dedicación exclusiva a tu equipo u organización.' },
    { title: 'Medio tiempo', body: 'Acompañamiento parcial para proyectos con carga variable.' },
    { title: 'Por proyecto', body: 'Alcance y entregables definidos, con fecha de cierre clara.' },
    { title: 'Retainer', body: 'Disponibilidad recurrente mensual para necesidades continuas.' },
  ],
  audienceNote:
    'Trabajo tanto con equipos fintech/startups que necesitan velocidad, como con entidades del sector público y ONGs que operan bajo procesos más formales — sin fingir una especialización que no esté respaldada por experiencia real.',
  ctaHeading: '¿Tienes un proyecto que necesita estructura?',
  ctaBody: 'Cuéntame el alcance y te respondo con una propuesta concreta.',
  ctaButton: 'Escríbeme',
};

export const va: ServicePageContent = {
  meta: {
    title: 'Victor Avendaño | Executive AI Partner',
    description:
      'Asistente ejecutivo bilingüe (inglés C2) con experiencia en soporte global, gestión de inbox/calendario/CRM y flujos de trabajo acelerados con IA.',
  },
  hero: {
    descriptor: 'Victor Avendaño | Executive AI Partner',
    heading: 'Soporte ejecutivo bilingüe, con IA integrada en cada tarea',
    intro:
      'Gestiono inbox, calendario y CRM bajo SLAs estrictos, doy soporte en inglés C2 a clientes globales, e investigo/redacto con ayuda de IA para acelerar el trabajo. La misma disciplina que sostuve en operaciones de soporte global en Stripe, aplicada a tu día a día.',
    cta: 'Hablemos de tu operación',
  },
  focusHeading: 'Qué incluye el servicio',
  focusAreas: [
    {
      title: 'Gestión de inbox, calendario y CRM',
      body: 'Manejo de bandejas de alto volumen, agendamiento complejo y CRM (Salesforce) bajo SLAs estrictos, manteniendo CSAT alto en interacciones concurrentes.',
    },
    {
      title: 'Soporte ejecutivo en inglés C2',
      body: 'Comunicación escrita y verbal estructurada y profesional con clientes globales, dueños de negocio y equipos financieros — inglés C2 certificado (EF SET 88/100).',
    },
    {
      title: 'Investigación y redacción con IA',
      body: 'Uso diario de ChatGPT, Claude y Microsoft Copilot para research synthesis, primeros borradores y detección de patrones en el volumen de trabajo diario.',
    },
    {
      title: 'Documentación de workflows',
      body: 'Cada proceso repetitivo se documenta como activo reutilizable — no como conocimiento tácito que se pierde si cambia de responsable.',
    },
  ],
  experienceHeading: 'Experiencia relevante',
  experienceIntro: 'Así se traduce mi trayectoria en valor concreto para tu operación diaria:',
  experience: [
    {
      org: 'Stripe',
      role: 'Customer Support Specialist — Operaciones Globales en Inglés',
      period: 'may 2023 – jul 2024',
      benefit:
        'Manejé casos de soporte de extremo a extremo en Salesforce CRM bajo SLA estrictos, manteniendo CSAT de primer nivel con clientes globales — comunicación exclusivamente en inglés C2, incluyendo dueños de negocio y líderes financieros.',
    },
    {
      org: 'ARQ (antes DolarApp)',
      role: 'FinCrime Analyst — Operaciones de alto volumen',
      period: 'jul 2024 – abr 2026',
      benefit:
        'Apliqué triage y priorización de trabajo entrante con marcos basados en riesgo — la misma disciplina que aplico a la priorización de tu inbox y solicitudes en competencia.',
    },
    {
      org: 'Ecoproyectos Aire S.A.S',
      role: 'Soporte directo a liderazgo ejecutivo',
      period: '2018 – 2023',
      benefit:
        'Coordiné calendarios, logística de viajes/eventos y seguimiento de pendientes para liderazgo senior, con infraestructura digital en Google Workspace y SharePoint.',
    },
  ],
  extraHeading: 'Herramientas dominadas',
  extraItems: [
    'Salesforce CRM',
    'Google Workspace (Gmail, Calendar, Drive, Docs, Sheets)',
    'Microsoft Planner y SharePoint',
    'ChatGPT, Claude y Microsoft Copilot',
  ],
  modalitiesHeading: 'Modalidades de contratación',
  modalitiesIntro: 'Cotización a medida según alcance — sin tarifas fijas publicadas.',
  modalities: [
    { title: 'Tiempo completo', body: 'Dedicación exclusiva como asistente ejecutivo.' },
    { title: 'Medio tiempo', body: 'Cobertura parcial para necesidades específicas.' },
    { title: 'Por proyecto', body: 'Apoyo puntual con alcance y cierre definidos.' },
    { title: 'Retainer', body: 'Disponibilidad recurrente mensual para soporte continuo.' },
  ],
  ctaHeading: '¿Necesitas recuperar horas de tu semana?',
  ctaBody: 'Cuéntame qué procesos te están consumiendo tiempo y te propongo cómo sistematizarlos.',
  ctaButton: 'Escríbeme',
};

export const contact: ContactContent = {
  meta: {
    title: 'Contacto | Victor Avendaño',
    description: 'Escríbeme para conversar sobre tu proyecto o necesidad de soporte ejecutivo.',
  },
  heading: 'Conversemos',
  intro: 'Escríbeme por el canal que prefieras y te respondo con los siguientes pasos. Sin formularios eternos ni tarifas ocultas.',
  emailLabel: 'Correo',
  emailHint: 'Respondo en menos de 24 horas.',
  whatsappLabel: 'WhatsApp',
  whatsappHint: 'Para una respuesta más inmediata.',
  whatsappMessage: 'Hola Victor, vi tu sitio web y me gustaría conversar sobre un proyecto.',
  calendlyLabel: 'Agendar una llamada',
  calendlyHint: 'Elige el horario que mejor te funcione.',
  calendlyPending: 'Próximamente — enlace de agendamiento en camino.',
};

export const blog: BlogContent = {
  meta: {
    title: 'Blog | Victor Avendaño',
    description: 'Ideas prácticas sobre gestión de proyectos, soporte ejecutivo y automatización con IA, basadas en experiencia real en fintech y sector público.',
  },
  heading: 'Blog',
  intro: 'Notas prácticas desde la operación real — sin teoría genérica.',
  readMore: 'Leer más',
  backToBlog: 'Volver al blog',
  backToServices: 'Ver servicios',
};
