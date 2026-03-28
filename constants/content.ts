/**
 * Single source of truth for marketing copy and links.
 * Update this file to change site content.
 */

export type ServiceIconId = "Layers" | "Cloud" | "Gauge";

export const contentEn = {
  brand: {
    name: "Carlos Oberto",
    tagline: "Senior Full-Stack Engineer",
    subtitle: "Quito (UTC-5) · Remote for US companies",
  },

  nav: {
    primaryCta: "Book a Call",
  },

  hero: {
    headline: {
      lead: "Ship ",
      highlight1: "high-performance",
      middle: " web applications for ",
      highlight2: "US teams",
      tail: ".",
    },
    subhead:
      "9+ years building Laravel, Rails, React, and Vue systems for US companies. I own the delivery—integrations, cloud, and performance included.",
    primaryCta: "Book a Call",
    secondaryCta: "View My Work",
    socialProof: "Recent roles: Ingenious Agency · Jedari · MagnusMas",
    stats: [
      { value: "9+", label: "Years shipping" },
      { value: "50%+", label: "Onboarding uplift" },
      { value: "5+", label: "Remote teams" },
    ],
  },

  process: {
    heading: "How I work",
    subheading: "A straightforward engagement, from first call to production.",
    steps: [
      {
        number: "01",
        title: "Scope the problem",
        body: "We spend 30 minutes mapping your stack, bottlenecks, and goals. You leave with a clear picture of what needs building and in what order.",
      },
      {
        number: "02",
        title: "Build iteratively",
        body: "I work in tight cycles—weekly check-ins, working software over status updates, and early visibility on every decision that touches your product.",
      },
      {
        number: "03",
        title: "Ship and stay accountable",
        body: "Delivery includes documentation, handoff notes, and a post-launch window to iron out anything unexpected. No disappearing after merge.",
      },
    ],
  },

  about: {
    heading: "About",
    paragraphs: [
      "I build web applications and integrations for US founders and engineering teams: PHP/Laravel, Ruby on Rails, React / Next.js, and Vue 3 on the frontend and backend. My work covers onboarding flows, e-commerce systems, payment infrastructure, search, and cloud delivery.",
      "I have worked in distributed teams for 5+ years. English (advanced/professional) and Spanish (native). UTC-5 with US timezone overlap.",
    ],
    stack: [
      { label: "Backend", value: "PHP · Laravel · Ruby on Rails · REST/SOAP" },
      { label: "Frontend", value: "React · Next.js · Vue 3 · Inertia.js · TypeScript" },
      { label: "Cloud", value: "AWS (ECS, RDS, S3, CloudFront) · Docker · GitHub Actions" },
      { label: "Integrations", value: "Stripe · Twilio · OneSignal · Elasticsearch · Redis" },
    ],
    selectedProjects: {
      heading: "Selected work",
      items: [
        "E-commerce payment systems: Stripe Connect with multi-party payouts and subscription billing.",
        "Search infrastructure: Elasticsearch 7.17 → 8.x upgrades with staged production rehearsals.",
        "CI/CD modernization: E2E tests migrated from Jenkins to GitHub Actions; Node runtime upgrades.",
        "Cloud delivery: Docker to ECS/Fargate; AWS certificate and CloudFront troubleshooting.",
        "Large-scale refactors: React useEffect cleanup; Ruby/Laravel class splits for maintainability.",
      ],
    },
  },

  services: {
    heading: "What I do",
    subheading: "Three ways I engage—pick the one that fits your current problem.",
    items: [
      {
        id: "product",
        number: "01",
        icon: "Layers" as const,
        title: "Product & full-stack delivery",
        description:
          "From registration and onboarding flows to e-commerce and Stripe / Stripe Connect payouts—I build the full feature, not just the API. Laravel, Rails, React / Next.js, Vue 3, and Inertia.",
      },
      {
        id: "integrations",
        number: "02",
        icon: "Cloud" as const,
        title: "Integrations & platform ops",
        description:
          "Third-party APIs (Stripe, Twilio, OneSignal, OAuth), search operations, Docker, and AWS (ECS, RDS, S3, CloudFront). CI/CD pipelines that make releases uneventful.",
      },
      {
        id: "modernization",
        number: "03",
        icon: "Gauge" as const,
        title: "Performance & modernization",
        description:
          "Database tuning, Elasticsearch upgrades, and large-scale refactors. I leave codebases faster and easier to change than I found them.",
      },
    ],
  },

  portfolio: {
    heading: "Live work",
    subheading: "A sample of production systems I have contributed to.",
    items: [
      {
        id: "getset",
        label: "GetSet",
        description:
          "Student retention platform. Built and refactored onboarding flows and API integrations, achieving measurable uplift in user conversion.",
        url: "https://getset.com/",
        tags: ["Rails", "React", "Angular", "AWS", "PostgreSQL"],
      },
      {
        id: "jedari",
        label: "Jedari",
        description:
          "White-label fan community platform for musicians and coaches. Implemented push notification workflows, subscription features, and Stripe reliability improvements.",
        url: "https://www.jedari.com/",
        tags: ["Laravel", "Angular", "AWS", "MySQL"],
      },
      {
        id: "grainelevator",
        label: "Grain Elevator Manager",
        description:
          "Grain elevator management system. Built data-intensive processing modules and insurance policy management APIs with high-volume ingestion.",
        url: "https://indianoutlaw.ingsoft.co/",
        tags: ["Next.js", "PostgreSQL"],
      },
      {
        id: "agora",
        label: "Agora Exchange",
        description:
          "Financial exchange platform. Contributed to the core transaction and integration layer, focusing on reliability and performance under load.",
        url: "https://agoraexchange.com/",
        tags: ["Laravel", "Vue", "Inertia", "MySQL"],
      },
      {
        id: "epic",
        label: "EpiCompliance",
        description:
          "Regulatory compliance management platform. Built form workflows, document tracking, and audit trail features to help organizations meet compliance requirements.",
        url: "https://epicompliance.com/",
        tags: ["Laravel", "Vue", "MySQL"],
      },
    ],
  },

  testimonials: {
    heading: "What clients say",
    items: [
      {
        quote:
          "Carlos rebuilt our registration flow from the ground up. Conversion went up over 50% in the first month. He owns the outcome, not just the ticket.",
        author: "Alex T.",
        role: "CTO",
        company: "SaaS Startup, US",
      },
      {
        quote:
          "Our push notification system was unreliable and losing us users. Carlos re-architected the entire delivery pipeline. Engagement jumped 75% and has stayed there.",
        author: "Jordan M.",
        role: "Product Lead",
        company: "Consumer Platform, US",
      },
      {
        quote:
          "Stripe payouts were failing silently. Carlos dug into the API integration, fixed the root cause, and documented the whole thing. No drama, just results.",
        author: "Sam R.",
        role: "Founder",
        company: "E-commerce Platform, US",
      },
    ],
  },

  faq: {
    heading: "Common questions",
    items: [
      {
        question: "What timezone do you work in?",
        answer:
          "I'm based in Quito, Ecuador (UTC-5), which overlaps well with US East and Central hours. I work standard business hours and am available for morning syncs on the US East Coast.",
      },
      {
        question: "How do you prefer to engage?",
        answer:
          "Most of my work is async-first: daily written updates, PRs with thorough descriptions, and weekly video syncs. I adapt to your team's tools—Slack, Linear, Jira, Notion, whatever you use.",
      },
      {
        question: "Are you open to working with a specific tech stack?",
        answer:
          "My core stack is Laravel, Rails, React / Next.js, and Vue. I'm comfortable in TypeScript, Docker, and AWS. If your stack differs slightly, I'm happy to discuss fit on a call.",
      },
      {
        question: "How quickly can you start?",
        answer:
          "Usually within one to two weeks of signing. For smaller scoped engagements I can sometimes start sooner. Book a call to confirm availability for your timeline.",
      },
      {
        question: "Do you work hourly or on a project basis?",
        answer:
          "Both. Shorter, well-defined pieces of work fit a fixed-scope model. Longer product work fits a monthly retainer. We'll figure out what makes sense on the intro call.",
      },
      {
        question: "Can you work independently without heavy oversight?",
        answer:
          "Yes. Most of my clients are founders or small teams without dedicated engineering managers. I communicate proactively, flag blockers early, and don't need hand-holding to stay productive.",
      },
    ],
  },

  finalCta: {
    heading: "Ready to talk scope, stack, or timeline?",
    body: "Book a 30-minute call. No commitment required—just a clear conversation about your product and how I can help.",
    subline: "No commitment · 30 minutes · UTC-5 available",
    cta: "Book a Call",
  },

  footer: {
    rightsLabel: "All rights reserved.",
  },

  links: {
    calendly: "https://calendly.com/carlos-oberto88/30min",
    email: "mailto:carlos.oberto88@gmail.com",
    emailDisplay: "carlos.oberto88@gmail.com",
    whatsapp: "https://wa.me/593984992610",
    whatsappDisplay: "+593 98 499 2610",
    linkedin: "https://www.linkedin.com/in/carlos-oberto-dev/",
    x: "https://x.com/carlos_oberto",
    workAnchor: "#portfolio",
    portfolio: null as string | null,
  },
} as const;

export const contentEs = {
  brand: {
    name: "Carlos Oberto",
    tagline: "Ingeniero Full-Stack Senior",
    subtitle: "Quito (UTC-5) · Remoto para empresas de EEUU",
  },

  nav: {
    primaryCta: "Agendar llamada",
  },

  hero: {
    headline: {
      lead: "Entrega ",
      highlight1: "aplicaciones web de alto rendimiento",
      middle: " para ",
      highlight2: "equipos en EEUU",
      tail: ".",
    },
    subhead:
      "Más de 9 años construyendo sistemas con Laravel, Rails, React y Vue para empresas en EEUU. Me hago cargo de la entrega completa: integraciones, nube y rendimiento incluidos.",
    primaryCta: "Agendar llamada",
    secondaryCta: "Ver mi trabajo",
    socialProof: "Roles recientes: Ingenious Agency · Jedari · MagnusMas",
    stats: [
      { value: "9+", label: "Años entregando" },
      { value: "50%+", label: "Mejora en onboarding" },
      { value: "5+", label: "Equipos remotos" },
    ],
  },

  process: {
    heading: "Cómo trabajo",
    subheading: "Un proceso directo, desde la primera llamada hasta producción.",
    steps: [
      {
        number: "01",
        title: "Definir el problema",
        body: "Dedicamos 30 minutos a mapear tu stack, cuellos de botella y objetivos. Sales con una visión clara de qué construir y en qué orden.",
      },
      {
        number: "02",
        title: "Construir iterativamente",
        body: "Trabajo en ciclos cortos: check-ins semanales, software funcionando en lugar de reportes de estado, y visibilidad temprana en cada decisión que afecta tu producto.",
      },
      {
        number: "03",
        title: "Lanzar y rendir cuentas",
        body: "La entrega incluye documentación, notas de traspaso y un período post-lanzamiento para resolver imprevistos. Sin desaparecer después del merge.",
      },
    ],
  },

  about: {
    heading: "Sobre mí",
    paragraphs: [
      "Construyo aplicaciones web e integraciones para fundadores y equipos de ingeniería en EEUU: PHP/Laravel, Ruby on Rails, React / Next.js y Vue 3 en frontend y backend. Mi trabajo abarca flujos de onboarding, e-commerce, infraestructura de pagos, búsqueda y despliegue en nube.",
      "Llevo más de 5 años en equipos distribuidos. Inglés avanzado/profesional y español nativo. UTC-5 con superposición de horario con EEUU.",
    ],
    stack: [
      { label: "Backend", value: "PHP · Laravel · Ruby on Rails · REST/SOAP" },
      { label: "Frontend", value: "React · Next.js · Vue 3 · Inertia.js · TypeScript" },
      { label: "Nube", value: "AWS (ECS, RDS, S3, CloudFront) · Docker · GitHub Actions" },
      { label: "Integraciones", value: "Stripe · Twilio · OneSignal · Elasticsearch · Redis" },
    ],
    selectedProjects: {
      heading: "Trabajo destacado",
      items: [
        "Sistemas de pago en e-commerce: Stripe Connect con pagos multiparte y facturación por suscripción.",
        "Infraestructura de búsqueda: actualizaciones de Elasticsearch 7.17 → 8.x con ensayos en producción.",
        "Modernización de CI/CD: pruebas E2E migradas de Jenkins a GitHub Actions; actualizaciones de runtime Node.",
        "Despliegue en nube: migración de Docker a ECS/Fargate; certificados AWS y troubleshooting de CloudFront.",
        "Refactors a gran escala: limpieza de useEffect en React; separación de clases en Ruby/Laravel para mantenibilidad.",
      ],
    },
  },

  services: {
    heading: "Qué hago",
    subheading: "Tres formas de trabajar juntos—elige la que encaja con tu problema actual.",
    items: [
      {
        id: "product",
        number: "01",
        icon: "Layers" as const,
        title: "Producto y entrega full-stack",
        description:
          "Desde flujos de registro y onboarding hasta e-commerce y pagos con Stripe / Stripe Connect—construyo la funcionalidad completa, no solo la API. Laravel, Rails, React / Next.js, Vue 3 e Inertia.",
      },
      {
        id: "integrations",
        number: "02",
        icon: "Cloud" as const,
        title: "Integraciones y operaciones de plataforma",
        description:
          "APIs de terceros (Stripe, Twilio, OneSignal, OAuth), operaciones de búsqueda, Docker y AWS (ECS, RDS, S3, CloudFront). Pipelines de CI/CD que hacen que los releases sean tranquilos.",
      },
      {
        id: "modernization",
        number: "03",
        icon: "Gauge" as const,
        title: "Rendimiento y modernización",
        description:
          "Optimización de bases de datos, actualizaciones de Elasticsearch y refactors a gran escala. Dejo los codebases más rápidos y fáciles de cambiar de lo que los encontré.",
      },
    ],
  },

  portfolio: {
    heading: "Trabajo en producción",
    subheading: "Una muestra de sistemas en producción a los que he contribuido.",
    items: [
      {
        id: "getset",
        label: "GetSet",
        description:
          "Plataforma de retención estudiantil. Construí y refactoricé flujos de onboarding e integraciones de API, logrando una mejora medible en conversión de usuarios.",
        url: "https://getset.com/",
        tags: ["Rails", "React", "Angular", "AWS", "PostgreSQL"],
      },
      {
        id: "jedari",
        label: "Jedari",
        description:
          "Plataforma de comunidad de fans white-label para músicos y coaches. Implementé flujos de notificaciones push, funciones de suscripción y mejoras de confiabilidad en Stripe.",
        url: "https://www.jedari.com/",
        tags: ["Laravel", "Angular", "AWS", "MySQL"],
      },
      {
        id: "grainelevator",
        label: "Grain Elevator Manager",
        description:
          "Sistema de gestión de elevadores de grano. Construí módulos de procesamiento intensivo de datos y APIs de gestión de pólizas de seguro con ingesta de alto volumen.",
        url: "https://indianoutlaw.ingsoft.co/",
        tags: ["Next.js", "PostgreSQL"],
      },
      {
        id: "agora",
        label: "Agora Exchange",
        description:
          "Plataforma de intercambio financiero. Contribuí a la capa central de transacciones e integraciones, enfocándome en confiabilidad y rendimiento bajo carga.",
        url: "https://agoraexchange.com/",
        tags: ["Laravel", "Vue", "Inertia", "MySQL"],
      },
      {
        id: "epic",
        label: "EpiCompliance",
        description:
          "Plataforma de gestión de cumplimiento normativo. Construí flujos de formularios, seguimiento de documentos y funciones de auditoría para ayudar a organizaciones a cumplir con requisitos regulatorios.",
        url: "https://epicompliance.com/",
        tags: ["Laravel", "Vue", "MySQL"],
      },
    ],
  },

  testimonials: {
    heading: "Lo que dicen los clientes",
    items: [
      {
        quote:
          "Carlos reconstruyó nuestro flujo de registro desde cero. La conversión aumentó más del 50% en el primer mes. Se apropia del resultado, no solo del ticket.",
        author: "Alex T.",
        role: "CTO",
        company: "SaaS Startup, EEUU",
      },
      {
        quote:
          "Nuestro sistema de notificaciones push era poco confiable y perdíamos usuarios. Carlos rediseñó todo el pipeline de entrega. El engagement subió 75% y se ha mantenido así.",
        author: "Jordan M.",
        role: "Product Lead",
        company: "Plataforma de consumo, EEUU",
      },
      {
        quote:
          "Los pagos de Stripe fallaban silenciosamente. Carlos investigó la integración, encontró la causa raíz y documentó todo. Sin dramas, solo resultados.",
        author: "Sam R.",
        role: "Fundador",
        company: "Plataforma de e-commerce, EEUU",
      },
    ],
  },

  faq: {
    heading: "Preguntas frecuentes",
    items: [
      {
        question: "¿En qué zona horaria trabajas?",
        answer:
          "Estoy en Quito, Ecuador (UTC-5), que tiene buena superposición con los horarios del Este y Centro de EEUU. Trabajo en horario laboral estándar y estoy disponible para sincronías matutinas en la Costa Este.",
      },
      {
        question: "¿Cómo prefieres trabajar?",
        answer:
          "La mayor parte de mi trabajo es async: actualizaciones escritas diarias, PRs con descripciones detalladas y sincronías semanales por video. Me adapto a las herramientas de tu equipo—Slack, Linear, Jira, Notion, lo que uses.",
      },
      {
        question: "¿Trabajas con stacks tecnológicos específicos?",
        answer:
          "Mi stack principal es Laravel, Rails, React / Next.js y Vue. También manejo TypeScript, Docker y AWS. Si tu stack difiere un poco, con gusto hablamos en una llamada.",
      },
      {
        question: "¿Cuándo puedes empezar?",
        answer:
          "Generalmente en una o dos semanas desde la firma. Para proyectos más pequeños y bien definidos, a veces puedo empezar antes. Agenda una llamada para confirmar disponibilidad.",
      },
      {
        question: "¿Trabajas por horas o por proyecto?",
        answer:
          "Ambas formas. Los trabajos cortos y bien definidos encajan en un modelo de alcance fijo. El trabajo de producto a largo plazo encaja en un retainer mensual. Decidimos qué tiene más sentido en la llamada introductoria.",
      },
      {
        question: "¿Puedes trabajar de forma independiente sin supervisión constante?",
        answer:
          "Sí. La mayoría de mis clientes son fundadores o equipos pequeños sin gerentes de ingeniería dedicados. Me comunico de forma proactiva, señalo bloqueos temprano y no necesito microgestión para ser productivo.",
      },
    ],
  },

  finalCta: {
    heading: "¿Listo para hablar de alcance, stack o tiempos?",
    body: "Agenda una llamada de 30 minutos. Sin compromiso—solo una conversación clara sobre tu producto y cómo puedo ayudar.",
    subline: "Sin compromiso · 30 minutos · UTC-5 disponible",
    cta: "Agendar llamada",
  },

  footer: {
    rightsLabel: "Todos los derechos reservados.",
  },

  links: {
    calendly: "https://calendly.com/carlos-oberto88/30min",
    email: "mailto:carlos.oberto88@gmail.com",
    emailDisplay: "carlos.oberto88@gmail.com",
    whatsapp: "https://wa.me/593984992610",
    whatsappDisplay: "+593 98 499 2610",
    linkedin: "https://www.linkedin.com/in/carlos-oberto-dev/",
    x: "https://x.com/carlos_oberto",
    workAnchor: "#portfolio",
    portfolio: null as string | null,
  },
} as const;

/** Backward-compat alias — existing direct imports still work */
export const siteContent = contentEn;

export type SiteContent = typeof contentEn;
