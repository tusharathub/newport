import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: '01',
    slug: 'rag-application',
    title: 'TALK TO YOUR DATA',
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
    slug: 'notablecv',
    title: 'NotableCV',
    description:
      'An AI-powered career platform featuring resume and job-description analysis, personalized cover-letter generation, and integrated payments.',
    year: '2024',
    category: 'Full-Stack',
    role: 'Full-Stack Builder',
    technologies: ['Next.js', 'TypeScript', 'AI', 'Stripe', 'Tailwind'],
    featured: true,
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
    id: '04',
    slug: 'python-web-scraper',
    title: 'Python Web Scraper',
    description:
      'A Python-based web scraping tool for automated data extraction.',
    year: '2024',
    category: 'Automation',
    role: 'Automation Developer',
    technologies: ['Python', 'Automation', 'Parsing', 'JSON/CSV'],
    featured: true,
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
