import type {
  HubContent,
  ServicePageContent,
  ContactContent,
  BlogContent,
  CommonStrings,
} from './types';

export const common: CommonStrings = {
  langSwitchLabel: 'Español',
  skipToContent: 'Skip to content',
  homeAriaLabel: 'Victor Avendaño — home',
  mainNavLabel: 'Main',
  footerNavLabel: 'Footer',
  ogImageAlt: 'Victor Avendaño: AI-augmented Project Manager and bilingual Virtual Assistant',
};

export const hub: HubContent = {
  meta: {
    title: 'Victor Avendaño | PM & Support Partner',
    description:
      'AI-augmented Project Manager and bilingual Virtual Assistant. 10+ years supporting fintech, public sector, and non-profits with systems, not just tasks.',
  },
  nav: {
    pm: 'Project Manager',
    va: 'Virtual Assistant',
    blog: 'Blog',
    contact: 'Contact',
  },
  hero: {
    descriptor: 'Victor Avendaño | PM & Support Partner',
    tagline: 'I build systems, not just execute tasks. Your bilingual operations partner, AI built in.',
    roleLine: 'AI-augmented Project Manager and bilingual Virtual Assistant',
    intro:
      "I have 10+ years of operational and executive experience across fintech, public sector, and social-impact organizations. I'm bilingual (native Spanish, C2 English) and AI-fluent: a daily user of ChatGPT, Claude, and Microsoft Copilot to accelerate research, drafting, and process automation.",
    ctaPM: 'See the Project Manager service',
    ctaVA: 'See the Virtual Assistant service',
    photoAlt: 'Portrait of Victor Avendaño',
  },
  about: {
    eyebrow: 'About me',
    heading: 'An operations partner who documents and scales what I build',
    body: [
      "I'm Victor Camilo Avendaño Forero, an AI-fluent operations and administrative professional with 10+ years supporting executives, account leaders, and multi-stakeholder programs across fintech, public sector, and social-impact environments.",
      "My approach starts from a simple principle: turn ad-hoc requests into documented, repeatable processes that a team can keep using after I hand off the work. That includes managing inboxes, calendars, and CRMs under strict SLAs, coordinating with stakeholders across time zones, and using AI tools daily (ChatGPT, Claude, Microsoft Copilot, and local LLMs like Ollama) for research, drafting, and reporting.",
      'I\'m a native Spanish speaker with certified C2 English (EF SET 88/100). I have operated in fully remote environments with global clients, as well as in projects with Bogotá district government entities and non-profits I founded and led myself. Both organizations are still active today, and I competed at the Jugger Club World Championship in Germany in 2018.',
    ],
  },
  achievements: {
    heading: 'Verifiable results, not generic promises',
    stats: [
      { value: '10+', label: 'years of experience in operations and executive support' },
      { value: '24h', label: 'SLA response standard in high-volume operations' },
      { value: '100%', label: 'adherence to specifications and financial limits (Ecoproyectos Aire)' },
      { value: '10', label: 'people led simultaneously (Ecoproyectos Aire)' },
      { value: '2M+', label: 'users on the fintech platform where I managed case queues (ARQ)' },
      { value: '90%+', label: 'less unnecessary manual review, through an AI first-pass filter I designed (ARQ)' },
      { value: 'US$10B+', label: 'scale of the fintech operation I have worked in' },
      { value: 'C2', label: 'certified English — EF SET 88/100' },
    ],
  },
  credentials: {
    eyebrow: 'Credentials',
    heading: 'Certifications and education',
    intro:
      'Continuous training in AI, project management, and stakeholder leadership, on top of the experience above.',
    groupTitles: {
      ai: 'AI & Automation',
      pm: 'Project & Stakeholder Management',
      admin: 'Administration & Communication',
      sustainability: 'Sustainability & Tech Strategy',
    },
    educationHeading: 'Education',
    education: [
      { title: 'BA in History', detail: 'Universidad Nacional de Colombia, 2014' },
      {
        title: 'International Diploma in Project Management (PMI guidelines)',
        detail: 'Instituto Europeo de Posgrado (IEP), Asturias, Aug 2016',
      },
    ],
  },
  compare: {
    eyebrow: 'Which service do you need?',
    heading: 'Two ways to work with me',
    intro:
      'Both services share the same foundation — operational discipline, real bilingual fluency, and practical AI use — but solve different needs. Choose based on what you need solved today.',
    pm: {
      title: 'Project Manager',
      descriptor: 'AI-Augmented PM',
      points: [
        'End-to-end operational project management: planning, budget, KPIs, and reporting',
        'AI implementation in administrative workflows',
        'Experience with public-sector entities and non-profits',
        'Remote, multi-stakeholder coordination across time zones',
      ],
      cta: 'See the PM service',
      href: '/project-manager',
    },
    va: {
      title: 'Virtual Assistant',
      descriptor: 'AI-Augmented Virtual Assistant',
      points: [
        'Inbox, calendar, and CRM management under SLA',
        'C2 English executive support for global clients',
        'AI-assisted research and drafting',
        'Documentation of reusable workflows',
      ],
      cta: 'See the Virtual Assistant service',
      href: '/virtual-assistant',
    },
  },
  contactCta: {
    heading: "Let's talk about your project",
    body: 'Tell me what you need to solve and I will get back to you with a tailored proposal — no fixed rates, no generic templates.',
    cta: 'Message me',
  },
  footer: {
    tagline: 'I build systems, not just execute tasks.',
    rights: 'All rights reserved.',
  },
};

export const pm: ServicePageContent = {
  meta: {
    title: 'Victor Avendaño | AI-Augmented PM',
    description:
      'Project Manager with 10+ years of operational experience, specialized in AI-driven automation, public-sector/non-profit projects, and remote multi-stakeholder coordination.',
  },
  hero: {
    descriptor: 'Victor Avendaño | AI-Augmented PM',
    heading: 'Project management that pairs operational discipline with applied AI',
    intro:
      "I have 10+ years leading operational and administrative projects across fintech, public sector, and non-profits. I integrate generative AI tools into every project phase — planning, reporting, stakeholder communication — without losing the control and traceability that remote, multi-stakeholder teams require.",
    cta: "Let's talk about your project",
  },
  focusHeading: 'Areas of specialization',
  focusAreas: [
    {
      title: 'End-to-end operational projects',
      body: 'Planning, budget tracking, KPI reporting, and vendor coordination, from kickoff through project close.',
    },
    {
      title: 'AI implementation in workflows',
      body: 'Automating report generation, communication drafts, and research synthesis with ChatGPT, Claude, Copilot, and local models (Ollama, Qwen, DeepSeek).',
    },
    {
      title: 'Public-sector and non-profit projects',
      body: 'Direct experience managing documentation and compliance for Bogotá district government, plus founding and running two non-profits with public-private partnerships.',
    },
    {
      title: 'Remote, multi-stakeholder coordination',
      body: 'Cross-functional work with risk, product, and compliance teams across time zones, with clear written deliverables and structured handoffs.',
    },
  ],
  experienceHeading: 'Relevant experience',
  experienceIntro: "Here's how my track record translates into concrete value for your project:",
  experience: [
    {
      org: 'Ecoproyectos Aire S.A.S',
      role: 'Operations & Project Manager',
      period: 'Sep 2016 – Jan 2018',
      benefit:
        'I led a team of 10 and managed full project lifecycles (calendars, budgets, KPI and compliance reporting), achieving 100% adherence to specifications and financial limits. That included a multi-city rollout for a national cinema chain and a formal change order when a technology partner altered its equipment specifications mid-project.',
    },
    {
      org: 'Ecoproyectos Aire S.A.S',
      role: 'Consultant (AI integration)',
      period: 'May 2023 – present (sporadic engagements)',
      benefit:
        'Integrates Claude and OpenAI models for tasks that need cloud processing, and Ollama with Qwen and DeepSeek for local processing.',
    },
    {
      org: 'ARQ (formerly DolarApp)',
      role: 'FinCrime Analyst — High-Volume Case Operations',
      period: 'Jul 2024 – Apr 2026',
      benefit:
        'I managed high-volume case queues on a 2M+ user platform under strict SLAs, building templates and escalation paths that became reusable team assets — the same systematization approach I bring to any project. I also designed an AI-based first-pass filter for source-of-funds verification that cut unnecessary manual review by over 90% and gave users faster feedback on missing documentation.',
    },
    {
      org: 'UAERMV — Bogotá District Government',
      role: 'Document Management & Compliance',
      period: 'Feb 2018 – Jan 2023',
      benefit:
        'I designed document retention frameworks (TRD/TVD) aligned to governmental standards, standardizing record-keeping across departments — direct experience in data governance for compliance-heavy projects.',
    },
  ],
  extraHeading: 'Relevant certifications',
  extraItems: [
    'International Diploma in Project Management, PMI guidelines (IEP / Asturias)',
    'Google Project Management Professional Certificate',
    'Generative AI for Project Managers Specialization (IBM)',
  ],
  extraLink: { label: 'See all certifications and courses', href: '/#credentials' },
  modalitiesHeading: 'Engagement models',
  modalitiesIntro:
    'Tailored quote based on scope — no published fixed rates. Based in Bogotá (UTC-5), with full availability across time zones, weekends included.',
  modalities: [
    { title: 'Full-time', body: 'Exclusive dedication to your team or organization.' },
    { title: 'Part-time', body: 'Partial support for projects with variable workload.' },
    { title: 'Per project', body: 'Defined scope and deliverables, with a clear end date.' },
    { title: 'Retainer', body: 'Recurring monthly availability for ongoing needs.' },
  ],
  audienceHeading: 'Who I work with',
  audienceAreas: [
    {
      title: 'Fintech and startup teams',
      body: 'You need speed, and you cannot afford to lose control while you get it. At ARQ I ran high-volume case queues on a platform with 2M+ users under strict SLAs, and the templates and escalation paths I built became team assets. For you, that means short cycles, written handoffs and an AI-assisted first pass wherever it is safe to use one.',
    },
    {
      title: 'Public-sector entities and non-profits',
      body: 'Your processes are formal, and the paperwork has to hold up when someone reviews it. At the Bogotá district government I designed document retention frameworks (TRD/TVD) aligned to governmental standards, and I have founded and run two non-profits with public-private partnerships. For you, that means clear records, defined approvals and nothing improvised.',
    },
  ],
  midCtaBody: 'If your project looks like one of these, send me the scope. I will reply within 24 hours with a concrete proposal.',
  audienceNote:
    "I work both with fintech/startup teams that need speed, and with public-sector entities and non-profits operating under more formal processes — without pretending a specialization that isn't backed by real experience.",
  ctaHeading: 'Have a project that needs structure?',
  ctaBody: "Tell me the scope and I'll get back to you with a concrete proposal.",
  ctaButton: 'Message me',
};

export const va: ServicePageContent = {
  meta: {
    title: 'Victor Avendaño | AI-Augmented Virtual Assistant',
    description:
      'Bilingual virtual assistant (C2 English) with experience in global support, inbox/calendar/CRM management, and AI-accelerated workflows.',
  },
  hero: {
    descriptor: 'Victor Avendaño | AI-Augmented Virtual Assistant',
    heading: 'Bilingual executive support, with AI built into every task',
    intro:
      'I manage inboxes, calendars, and CRMs under strict SLAs, provide C2 English support to global clients, and use AI to accelerate research and drafting. The same discipline that sustained global support operations at Stripe, applied to your day-to-day.',
    cta: "Let's talk about your operation",
  },
  focusHeading: "What's included",
  focusAreas: [
    {
      title: 'Inbox, calendar & CRM management',
      body: 'Handling high-volume inboxes, complex scheduling, and CRM (Salesforce) under strict SLAs, maintaining high CSAT across concurrent interactions.',
    },
    {
      title: 'C2 English executive support',
      body: 'Structured, professional written and verbal communication with global clients, business owners, and finance leads — certified C2 English (EF SET 88/100).',
    },
    {
      title: 'AI-assisted research & drafting',
      body: 'Daily use of ChatGPT, Claude, and Microsoft Copilot for research synthesis, first-pass drafting, and pattern detection across daily workload.',
    },
    {
      title: 'Workflow documentation',
      body: 'Every repetitive process gets documented as a reusable asset — not tacit knowledge that disappears if the person handling it changes.',
    },
  ],
  experienceHeading: 'Relevant experience',
  experienceIntro: "Here's how my track record translates into concrete value for your daily operation:",
  experience: [
    {
      org: 'Stripe',
      role: 'Customer Support Specialist — Global English Operations',
      period: 'May 2023 – Jul 2024',
      benefit:
        'I owned end-to-end support cases in Salesforce CRM under strict SLAs, maintaining top-tier CSAT with a global client base — communication exclusively in C2 English, including business owners and finance leads, and roughly 20–30 phone-based KYC verification calls a day.',
    },
    {
      org: 'ARQ (formerly DolarApp)',
      role: 'FinCrime Analyst — High-Volume Case Operations',
      period: 'Jul 2024 – Apr 2026',
      benefit:
        'I triaged and prioritized incoming work using risk-based frameworks — the same discipline I apply to prioritizing your inbox and competing requests.',
    },
    {
      org: 'Ecoproyectos Aire S.A.S',
      role: 'Direct support to executive leadership',
      period: 'Sep 2016 – Jan 2018',
      benefit:
        'I coordinated calendars, travel/event logistics, and follow-up tracking for senior leadership, with digital infrastructure in Google Workspace and SharePoint.',
    },
  ],
  extraHeading: 'Tools I work with',
  extraItems: [
    'Salesforce, Zoho CRM, and Intercom',
    'Jira, Confluence, and Slack',
    'Google Workspace (Gmail, Calendar, Drive, Docs, Sheets)',
    'Microsoft Outlook, Teams, Planner, and SharePoint',
    'Trello, Asana, Monday.com, and Microsoft Project',
    'ChatGPT, Claude, Gemini, and Microsoft Copilot',
  ],
  alsoHeading: 'Also available',
  alsoItems: [
    'English ↔ Spanish translation',
    'Travel and event logistics',
    'Document management and compliance filing',
    'Reporting and KPI tracking',
  ],
  modalitiesHeading: 'Engagement models',
  modalitiesIntro:
    'Tailored quote based on scope — no published fixed rates. Based in Bogotá (UTC-5), with full availability across time zones, weekends included.',
  modalities: [
    { title: 'Full-time', body: 'Exclusive dedication as your virtual assistant.' },
    { title: 'Part-time', body: 'Partial coverage for specific needs.' },
    { title: 'Per project', body: 'One-off support with a defined scope and close.' },
    { title: 'Retainer', body: 'Recurring monthly availability for ongoing support.' },
  ],
  audienceHeading: 'Who I work with',
  audienceAreas: [
    {
      title: 'Founders and fintech teams',
      body: 'Your inbox, calendar and client queue move faster than one person can follow. At Stripe I owned support cases end to end in Salesforce under strict SLAs, in C2 English with business owners and finance leads, and at ARQ I triaged incoming work by risk. For you, that means requests ordered by urgency and replies that are ready to send.',
    },
    {
      title: 'Directors and teams in formal settings',
      body: 'Some work cannot be improvised: filings, records, approvals, executive travel. I managed document retention for the Bogotá district government and coordinated calendars, travel and follow-up for senior leadership. For you, that means documents filed where a reviewer expects to find them and a calendar that does not collide.',
    },
  ],
  midCtaBody: 'If one of these looks like your week, tell me which one. I will propose how to systematize it.',
  ctaHeading: 'Need to reclaim hours in your week?',
  ctaBody: "Tell me which processes are eating your time and I'll propose how to systematize them.",
  ctaButton: 'Message me',
};

export const contact: ContactContent = {
  meta: {
    title: 'Contact | Victor Avendaño',
    description: 'Get in touch with me to talk about your project or executive support needs.',
  },
  heading: "Let's talk",
  intro: "Reach out through whichever channel works best for you and I'll get back to you with next steps. No endless forms, no hidden rates.",
  availability: 'Based in Bogotá (UTC-5), with full availability across time zones, weekends included.',
  emailLabel: 'Email',
  emailHint: "I respond within 24 hours.",
  whatsappLabel: 'WhatsApp',
  whatsappHint: 'For a faster response.',
  whatsappMessage:
    "Hi Victor, I saw your website and I'd like to talk about a project.\n\nWhat I need:\nScope:\nEngagement (full-time, part-time, per project or retainer):",
  emailSubject: 'Inquiry from vavendano.com',
  emailBody:
    "Hi Victor,\n\nI saw your website and I'd like to talk about a project.\n\nWhat I need:\nScope:\nEngagement (full-time, part-time, per project or retainer):",
  qualifyHint:
    'To reply faster, tell me what you need, the rough scope, and whether you are thinking of full-time, part-time, per project or a retainer.',
  calendlyLabel: 'Book a call',
  calendlyHint: 'Pick whatever time works for you.',
  calendlyPending: 'Coming soon — scheduling link on the way.',
};

export const blog: BlogContent = {
  meta: {
    title: 'Blog | Victor Avendaño',
    description: 'Practical notes on project management, executive support, and AI-driven automation, grounded in real fintech and public-sector experience.',
  },
  heading: 'Blog',
  intro: 'Practical notes from real operations — no generic theory.',
  readMore: 'Read more',
  backToBlog: 'Back to blog',
  backToServices: 'See services',
};
