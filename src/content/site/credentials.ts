import type { CertGroupKey } from './types';

/**
 * Lista completa de certificaciones y cursos (37), compartida por EN y ES: son nombres oficiales
 * de los programas. Solo cambian los títulos de grupo, que viven en en.ts / es.ts.
 */
export const certificationGroups: { key: CertGroupKey; items: string[] }[] = [
  {
    key: 'ai',
    items: [
      'Google AI Professional Certificate (Google / Coursera)',
      'AI Fundamentals (Google)',
      'AI for Brainstorming and Planning (Google)',
      'AI for Content Creation (Google)',
      'AI for Data Analysis (Google)',
      'AI for Research and Insights (Google)',
      'AI for Writing and Communicating (Google)',
      'Google AI for App Building (Google)',
      'Generative AI for Project Managers Specialization (IBM / Coursera)',
      'Generative AI: Introduction and Applications (IBM)',
      'Generative AI: Prompt Engineering Basics (IBM)',
      'Generative AI: Unleash Your Project Management Potential (IBM)',
      'Generative AI Essentials (IBM)',
      'Generative AI Prompt Engineering (IBM)',
      'ChatGPT for Project Management (Coursera)',
      'Microsoft Copilot for Project Management (Coursera)',
      'Project Management with AI (Coursera)',
    ],
  },
  {
    key: 'pm',
    items: [
      'Google Project Management Professional Certificate (Google / Coursera)',
      'Foundations of Project Management (Google)',
      'Project Initiation: Starting a Successful Project (Google)',
      'Project Planning: Putting It All Together (Google)',
      'Project Execution: Running the Project (Google)',
      'Agile Project Management (Google)',
      'Capstone: Applying Project Management in the Real World (Google)',
      'Google Stakeholder Management Specialization (Google / Coursera)',
      'Working Effectively with Stakeholders (Google)',
      'Leadership and Influencing Skills (Google)',
      'Organizing Communication and Documentation (Google)',
      'Experto en Gestión de Proyectos Según PMI (IEP / Asturias)',
      'Diplomado Internacional en Gestión de Proyectos (IEP / Asturias)',
      'Project Management Basics for Beginners (Coursera)',
    ],
  },
  {
    key: 'admin',
    items: [
      'Administrative Professional Foundations & Tips (LinkedIn)',
      'Communication Foundations (LinkedIn)',
      'EF SET English Certificate: 88/100, C2 Proficient (EF)',
    ],
  },
  {
    key: 'sustainability',
    items: [
      'Career Essentials in Sustainable Tech (Microsoft & LinkedIn)',
      'Microsoft Cloud for Sustainability: ESG (Microsoft)',
      'Sustainability Foundations & Cloud Strategy Integration (Microsoft)',
    ],
  },
];
