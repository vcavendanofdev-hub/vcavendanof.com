export interface Stat {
  value: string;
  label: string;
}

export interface ServiceSummary {
  title: string;
  descriptor: string;
  points: string[];
  cta: string;
  href: string;
}

export interface ExperienceItem {
  org: string;
  role: string;
  period: string;
  benefit: string;
}

export interface FocusArea {
  title: string;
  body: string;
}

export interface Modality {
  title: string;
  body: string;
}

export interface HubContent {
  meta: { title: string; description: string };
  nav: { pm: string; va: string; blog: string; contact: string };
  hero: {
    descriptor: string;
    tagline: string;
    intro: string;
    ctaPM: string;
    ctaVA: string;
  };
  about: {
    eyebrow: string;
    heading: string;
    body: string[];
  };
  achievements: {
    heading: string;
    stats: Stat[];
  };
  compare: {
    eyebrow: string;
    heading: string;
    intro: string;
    pm: ServiceSummary;
    va: ServiceSummary;
  };
  contactCta: {
    heading: string;
    body: string;
    cta: string;
  };
  footer: {
    tagline: string;
    rights: string;
  };
}

export interface ServicePageContent {
  meta: { title: string; description: string };
  hero: {
    descriptor: string;
    heading: string;
    intro: string;
    cta: string;
  };
  focusHeading: string;
  focusAreas: FocusArea[];
  experienceHeading: string;
  experienceIntro: string;
  experience: ExperienceItem[];
  extraHeading?: string;
  extraItems?: string[];
  modalitiesHeading: string;
  modalitiesIntro: string;
  modalities: Modality[];
  audienceNote?: string;
  ctaHeading: string;
  ctaBody: string;
  ctaButton: string;
}

export interface ContactContent {
  meta: { title: string; description: string };
  heading: string;
  intro: string;
  emailLabel: string;
  emailHint: string;
  whatsappLabel: string;
  whatsappHint: string;
  whatsappMessage: string;
  calendlyLabel: string;
  calendlyHint: string;
  calendlyPending: string;
}

export interface BlogContent {
  meta: { title: string; description: string };
  heading: string;
  intro: string;
  readMore: string;
  backToBlog: string;
  backToServices: string;
}

export interface CommonStrings {
  langSwitchLabel: string;
  skipToContent: string;
  homeAriaLabel: string;
}
