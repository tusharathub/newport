import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: '01',
    slug: 'rag-application',
    title: 'DocsOrbit',
    description:
      'A full-stack RAG application that lets users upload their data and have grounded conversations with it.',
    year: '2024',
    category: 'AI ENGINEERING / RAG',
    role: 'AI Engineer',
    technologies: [
      'Python',
      'FastAPI',
      'Next.js',
      'React',
      'PostgreSQL',
      'pgvector',
      'OpenAI',
      'OpenRouter',
    ],
    liveUrl: 'https://rag-psi-lyart.vercel.app/',
    githubUrl: 'https://github.com/tusharathub/rag',
    thumbnail: '/rag.png',
    heroImage: '/rag.png',
    featured: true,
    caseStudy: true,
    layoutVariant: 'default',
    aspectRatio: '16/9',
    caseStudyData: {
      overview:
        'A full-stack Retrieval-Augmented Generation application that allows users to upload documents and interact with them through AI-powered conversations. Built to understand document ingestion, embeddings, vector databases, and prompt grounding.',
      howItWorks: {
        processSteps: [
          'DOCUMENT',
          'PARSE + CLEAN',
          'CHUNK',
          'EMBED',
          'HYBRID RETRIEVE',
          'CONTEXT',
          'LLM GENERATE',
          'ANSWER + CITATIONS',
        ],
        explanation:
          'Uploaded documents (PDF, DOCX, TXT, etc.) are validated and parsed into structural sections. Text chunks are embedded into 1536-dim vectors via OpenAI and indexed in PostgreSQL pgvector. Query handling combines dense vector cosine search with sparse full-text search via Reciprocal Rank Fusion (RRF) and reranking before streaming grounded responses with token-by-token citations over SSE.',
      },
      learnings: [
        'This was my first Python & FastAPI project, built from scratch to understand AI retrieval pipeline mechanics beyond basic LLM API wrappers.',
        'Document transformation dictates answer quality: chunk boundaries, structural section path hierarchy, and embedding strategies matter immensely.',
        'Combining dense vector search with sparse full-text search (websearch_to_tsquery + RRF) drastically improves keyword query precision over vector-only similarity.',
        'Engineering proper prompt context grounding and token budgeting (70% context / 30% chat history) is crucial for accurate citations and zero hallucination.',
      ],
    },
  },
  {
    id: '02',
    slug: 'water-tracking-app',
    title: 'Water Tracking App',
    description:
      'A mobile application for tracking water consumption, built with a local-first architecture.',
    year: '2024',
    category: 'Mobile',
    role: 'Mobile Engineer',
    technologies: ['React Native', 'Local-First', 'SQLite', 'Mobile UX'],
    liveUrl: 'https://www.siphabit.fun/',
    githubUrl: 'https://github.com/tusharathub/sip-habit',
    thumbnail: '/water.png',
    heroImage: '/water.png',
    featured: true,
    caseStudy: true,
    layoutVariant: 'reversed',
    aspectRatio: '4/5',
    caseStudyData: {
      overview:
        'A friction-free mobile application focused on tracking daily hydration habits using an instant local-first database architecture.',
      howItWorks: {
        processSteps: [
          'LOG INPUT',
          'LOCAL DB (SQLITE)',
          'STATE & UI UPDATE',
        ],
        explanation:
          'Logs daily hydration entries directly to an instant local SQLite database without requiring user sign-in or active network requests, ensuring zero-latency reactive updates.',
      },
      learnings: [
        'Local-first architectures eliminate network latencies and authentication friction for daily utility applications.',
        'Minimalist visual feedback and responsive UI state encourage consistent daily user logging habits.',
        'Automated background time-boundary evaluation is key for clean daily metric reset across timezones.',
      ],
    },
  },
  {
    id: '03',
    slug: 'routine-melt',
    title: 'RoutineMelt',
    description:
      'A brutalist daily habit and routine tracker designed with a sand & red editorial aesthetic.',
    year: '2024',
    category: 'Full-Stack',
    role: 'Full-Stack Developer',
    technologies: ['Next.js', 'React', 'MongoDB', 'Mongoose', 'Clerk', 'Framer Motion', 'Tailwind CSS'],
    liveUrl: 'https://routine-melt.vercel.app/',
    githubUrl: 'https://github.com/tusharathub/RoutineMelt',
    thumbnail: '/routinemelt.png',
    heroImage: '/routinemelt.png',
    featured: true,
    caseStudy: true,
    layoutVariant: 'full',
    aspectRatio: '16/9',
    caseStudyData: {
      overview:
        'A high-impact brutalist habit & routine tracker that helps creators, developers, and writers log daily accomplishments and visualize consistency through an annual streak calendar.',
      howItWorks: {
        processSteps: [
          'CLERK AUTH',
          'HABIT DEFINE',
          'DAILY LOG',
          'MONGO DB WRITE',
          'STREAK GRID ENGINE',
        ],
        explanation:
          'Users log in via Clerk authentication, create routines, and record daily completions. Data is stored in MongoDB via Mongoose, dynamically rendering responsive annual streak grids and statistics.',
      },
      learnings: [
        'Brutalist editorial design systems require strict typographic constraints and high-contrast color tokens.',
        'Building persistent annual streak grids requires efficient MongoDB aggregation pipelines and date-range queries.',
        'Clerk authentication simplifies full-stack user session state across Next.js App Router client and server boundaries.',
      ],
    },
  },
  {
    id: '04',
    slug: 'notablecv',
    title: 'NotableCV',
    description:
      'An AI-powered career platform featuring resume and job-description analysis, personalized cover-letter generation, and integrated payments.',
    year: '2024',
    category: 'Full-Stack',
    role: 'Full-Stack Builder',
    technologies: ['Next.js', 'TypeScript', 'AI', 'Stripe', 'Tailwind'],
    liveUrl: 'https://notable-cv.vercel.app/',
    githubUrl: 'https://github.com/tusharathub/Notable-CV',
    featured: false,
    caseStudy: true,
    layoutVariant: 'full',
    aspectRatio: '21/9',
    caseStudyData: {
      overview:
        'An end-to-end web platform designed to analyze resumes against specific job listings and generate tailored application artifacts.',
      howItWorks: {
        processSteps: [
          'RESUME & JD PARSE',
          'MATCH & GAP ANALYSIS',
          'TAILORED GENERATION',
          'STRIPE CHECKOUT',
        ],
        explanation:
          'Extracts clean text from uploaded resumes and job descriptions, evaluates match gaps via structured LLM prompt prompts, streams customized cover letter outputs, and manages credit balances through integrated Stripe checkout.',
      },
      learnings: [
        'Integrating payment flows early forces clarity around core product value and user feature tiers.',
        'Streaming AI outputs drastically improves perceived user latency on multi-paragraph generation tasks.',
        'Strict server-side document parsing pipelines are necessary to handle varied formatting in user PDF and Word uploads.',
      ],
    },
  },
  {
    id: '05',
    slug: 'python-web-scraper',
    title: 'Python Web Scraper',
    description:
      'A Python-based web scraping tool for automated data extraction.',
    year: '2024',
    category: 'Automation',
    role: 'Automation Developer',
    technologies: ['Python', 'Automation', 'Parsing', 'JSON/CSV'],
    githubUrl: 'https://github.com/tusharathub/web-scraper',
    thumbnail: '/webscraper.png',
    heroImage: '/webscraper.png',
    featured: false,
    caseStudy: true,
    layoutVariant: 'offset',
    aspectRatio: '16/10',
    caseStudyData: {
      overview:
        'A flexible Python automation tool built to systematically parse, extract, clean, and structure raw web data into clean datasets.',
      howItWorks: {
        processSteps: [
          'HTTP FETCH',
          'DOM PARSE',
          'CLEAN & VALIDATE',
          'STRUCTURED EXPORT',
        ],
        explanation:
          'Fetches target pages, applies DOM selector extraction strategies, cleans non-standard raw strings, validates schema constraints, and exports formatted JSON/CSV records.',
      },
      learnings: [
        'Defensive data parsing and fallback values are essential when handling inconsistent external web target DOM layouts.',
        'Decoupling parsing logic from request pipelines simplifies automated testing and long-term script maintenance.',
        'Custom schema validation wrappers keep batch execution jobs running smoothly even when individual elements trigger extraction warnings.',
      ],
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getPreviousProject(slug: string): Project {
  const index = projects.findIndex((p) => p.slug === slug);
  if (index <= 0) return projects[projects.length - 1];
  return projects[index - 1];
}

export function getNextProject(slug: string): Project {
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1 || index === projects.length - 1) return projects[0];
  return projects[index + 1];
}
