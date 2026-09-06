export interface Capability {
  id: string;
  category: string;
  skills: string[];
  description: string;
}

export interface PersonalConfig {
  name: string;
  title: string;
  location: string;
  shortBio: string;
  fullBio: string[];
  email: string;
  github: string;
  linkedin: string;
  resume?: string;
  siteUrl: string;
  availability: {
    enabled: boolean;
    label: string;
  };
  currentFocus: string[];
  capabilities: Capability[];
}

export const personalData: PersonalConfig = {
  name: 'Tushar Nailwal',
  title: 'AI + Full-Stack Engineer',
  location: 'India',
  shortBio:
    'I build software across AI applications, full-stack web products, mobile apps, and automation pipelines.',
  fullBio: [
    'I like taking an idea, figuring out how it should work, and then actually building it.',
    'My work sits at the intersection of modern AI systems and solid full-stack engineering. I value clean architecture, rapid execution, and software that solves real problems.',
    'Whether engineering RAG retrieval flows, building offline-first mobile apps, or creating full-stack web platforms with streaming AI interfaces, I approach software with technical curiosity and disciplined execution.',
  ],
  email: 'YOUR_EMAIL_HERE',
  github: 'https://github.com/tusharathub',
  linkedin: 'https://linkedin.com/in/tusharnailwal',
  resume: '/resume.pdf',
  siteUrl: 'https://tusharnailwal.dev',
  availability: {
    enabled: true,
    label: 'AVAILABLE FOR SELECT PROJECTS & OPPORTUNITIES',
  },
  currentFocus: [
    'AI Application Architecture & RAG Retrieval Quality',
    'Local-First Data Persistence & Offline Mobile Systems',
    'Full-Stack TypeScript & Streaming LLM Interfaces',
  ],
  capabilities: [
    {
      id: '01',
      category: 'AI ENGINEERING',
      skills: ['Python', 'RAG', 'Vector Search', 'Embeddings', 'LLM APIs', 'Prompt Design'],
      description:
        'Building context-grounded retrieval pipelines, vector similarity indexers, and structured AI response synthesis.',
    },
    {
      id: '02',
      category: 'FULL-STACK DEVELOPMENT',
      skills: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'REST APIs'],
      description:
        'Developing performant web applications with modern server-side rendering, type-safe APIs, and responsive UIs.',
    },
    {
      id: '03',
      category: 'MOBILE DEVELOPMENT',
      skills: ['React Native', 'Local-First Architecture', 'SQLite', 'Mobile UX'],
      description:
        'Engineering fast mobile applications prioritized around offline persistence and zero-latency local storage.',
    },
    {
      id: '04',
      category: 'AUTOMATION & DATA',
      skills: ['Python', 'Web Scraping', 'Data Extraction', 'Schema Validation', 'Asyncio'],
      description:
        'Creating resilient extraction pipelines, automated DOM parsing scripts, and structured dataset exporters.',
    },
  ],
};
