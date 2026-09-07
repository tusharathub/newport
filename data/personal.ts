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
  resume: string;
  siteUrl: string;
  availability: {
    enabled: boolean;
    label: string;
  };
  currentFocus: string[];
  capabilities: Capability[];
  workingPhilosophy: {
    title: string;
    statement: string;
    body: string;
  };
}

export const personalData: PersonalConfig = {
  name: 'Tushar Nailwal',
  title: 'AI + Full-Stack Engineer',
  location: 'Chd, In',
  shortBio:
    'I build things that interest me from AI applications to mobile apps.',
  fullBio: [
    "I'm a full-stack software engineer who enjoys building things across the stack, AI applications, web products, and Android apps. Over time, I've found myself increasingly drawn toward AI, and I'm working my way deeper into AI engineering.",
    "I don't always start with a problem that needs solving. Sometimes I just come across something interesting and want to know how it works. So I build it.",
    "My approach is simple: make something work first, then make it better. I like getting ideas out of my head and into something real. Once it's working, I can obsess over the details, architecture, UX, and everything that makes it better.",
    "I'm ambitious, curious, and probably more attached to a project than I should be once I've started it. If I decide I'm going to build something, I tend to stick with it until it's finished.",
    "Right now, I'm focused on becoming a stronger AI engineer while continuing to build across the full stack.",
  ],
  email: 'tushar.chd17@gmail.com',
  github: 'https://github.com/tusharathub',
  linkedin: 'https://www.linkedin.com/in/tushar-nailwal/',
  resume: 'https://plum-ethyl-86.tiiny.site/',
  siteUrl: 'https://tusharnailwal.dev',
  availability: {
    enabled: true,
    label: 'AVAILABLE FOR SELECT PROJECTS & OPPORTUNITIES',
  },
  currentFocus: [
    'AI Engineering & AI Application Development',
    'RAG & Retrieval Systems',
    'LLM-Powered Applications & Python for AI',
    'Full-Stack AI Applications',
    'Experimenting & Building New Ideas',
  ],
  capabilities: [
    {
      id: '01',
      category: 'AI ENGINEERING',
      skills: ['Python', 'RAG', 'Vector Search', 'Embeddings', 'LLM APIs', 'Prompt Engineering'],
      description:
        'Building AI-powered applications and experimenting with LLMs, RAG, retrieval, embeddings, and AI-driven product experiences.',
    },
    {
      id: '02',
      category: 'FULL-STACK DEVELOPMENT',
      skills: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'REST APIs'],
      description:
        'Building complete web applications from frontend interfaces to backend systems, APIs, databases, authentication, and deployment.',
    },
    {
      id: '03',
      category: 'MOBILE DEVELOPMENT',
      skills: ['Android', 'React Native', 'SQLite', 'Mobile UX', 'Local-First'],
      description:
        'Building Android/mobile applications with a focus on practical functionality and clean user experiences.',
    },
    {
      id: '04',
      category: 'AUTOMATION & DATA',
      skills: ['Python', 'Web Scraping', 'Data Extraction', 'Schema Validation', 'Data Pipelines'],
      description:
        'Building scrapers, automation tools, data pipelines, and systems that turn messy information into something useful.',
    },
  ],
  workingPhilosophy: {
    title: 'BUILD FIRST. POLISH LATER.',
    statement: "I don't believe everything needs to be figured out before you start.",
    body: 'I prefer to build the first version, make it work, understand what I learn from it, and then improve it. Working software gives you something to think about.',
  },
};
