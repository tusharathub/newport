import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: '01',
    slug: 'rag-application',
    title: 'RAG Application',
    description:
      'A Python-based Retrieval-Augmented Generation application for intelligent information retrieval and synthesis.',
    year: '2024',
    category: 'AI Engineering',
    role: 'AI Engineer',
    technologies: ['Python', 'RAG', 'Vector Search', 'Embeddings'],
    featured: true,
    caseStudy: true,
    layoutVariant: 'default',
    aspectRatio: '16/9',
    caseStudyData: {
      overview:
        'A dedicated Python system built to solve precise contextual query retrieval over structured and unstructured document sets without hallucination.',
      problem:
        'Standard LLMs frequently struggle with domain-specific document queries, returning vague or factually inaccurate answers when external context is absent.',
      approach:
        'Implemented a Retrieval-Augmented Generation workflow splitting documents into semantic chunks, indexing high-dimensional embeddings, and executing similarity retrieval to inject precise context into prompt contexts.',
      architectureNodes: [
        { label: 'QUERY', sublabel: 'User Prompt' },
        { label: 'EMBED', sublabel: 'Vector Conversion' },
        { label: 'RETRIEVE', sublabel: 'Top-K Similarity' },
        { label: 'CONTEXT', sublabel: 'Prompt Injection' },
        { label: 'SYNTHESIZE', sublabel: 'LLM Response' },
      ],
      build:
        'Engineered in Python with focus on ingestion robustness, chunk boundary preservation, vector indexing efficiency, and prompt template construction.',
      codeSnippet: {
        language: 'python',
        title: 'retriever.py — Semantic Search & Context Assembly',
        code: `def retrieve_relevant_context(query: str, top_k: int = 5) -> str:
    query_vector = embed_model.encode(query)
    results = vector_db.search(query_vector, top_k=top_k)
    context_blocks = [res.payload["text"] for res in results]
    return "\\n---\\n".join(context_blocks)`,
      },
      challenges: [
        'Finding optimal chunk size tradeoffs between semantic context completeness and vector retrieval accuracy.',
        'Eliminating retrieval noise when queries contained ambiguous technical terms.',
      ],
      solution:
        'Designed an automated chunking strategy paired with distance-threshold filtering to guarantee only highly relevant document segments enter the synthesis prompt.',
      result:
        'A functional Python RAG pipeline providing verifiable, context-grounded responses across target documents.',
      learnings: [
        'Retrieval quality dictates RAG accuracy far more than the raw parameters of the generation LLM.',
        'Clean document pre-processing and chunking boundaries prevent cross-domain context bleeding.',
      ],
      nextSteps:
        'Implement hybrid keyword-dense + vector similarity retrieval (BM25 + Dense) and re-ranking models.',
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
      problem:
        'Most hydration tracking tools require cloud connectivity, user sign-in, and intrusive tracking flows that add friction to simple daily logging.',
      approach:
        'Prioritized offline-first persistence using a lightweight local database, making logging instant with zero network latencies or login steps.',
      architectureNodes: [
        { label: 'LOG INPUT', sublabel: 'One-Tap Action' },
        { label: 'LOCAL DB', sublabel: 'Instant SQLite Write' },
        { label: 'STATE UI', sublabel: 'Reactive Gauge Update' },
      ],
      build:
        'Designed with a clean component tree, rapid logging gestures, and persistent daily telemetry metrics.',
      challenges: [
        'Ensuring sub-16ms UI update responsiveness upon rapid user intake entries.',
        'Managing local state rollover cleanly across timezones at midnight boundaries.',
      ],
      solution:
        'Used lightweight reactive local storage hooks with automated background date-boundary evaluation.',
      result:
        'A fast, responsive mobile app that functions reliably anywhere without cloud dependencies.',
      learnings: [
        'Local-first architectures eliminate network latencies and user friction for daily utility tools.',
        'Minimalist visual feedback encourages consistent daily user logging behavior.',
      ],
      nextSteps:
        'Add optional encrypted cloud sync backup and localized reminder notifications.',
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
      problem:
        'Job seekers spend hours manually customizing cover letters and analyzing skill alignment for every position they target.',
      approach:
        'Built a full-stack platform combining structured document parsing, AI evaluation prompts, reactive UI previews, and payment integration.',
      architectureNodes: [
        { label: 'RESUME & JD', sublabel: 'Document Parsing' },
        { label: 'EVAL ENGINE', sublabel: 'Match & Gap Analysis' },
        { label: 'GENERATOR', sublabel: 'Tailored Cover Letter' },
        { label: 'STRIPE API', sublabel: 'Credits & Checkout' },
      ],
      build:
        'Developed with Next.js App Router, Server Actions, AI completion APIs, and Stripe payment processing.',
      challenges: [
        'Extracting clean structured text from diverse user resume PDF/Word uploads.',
        'Maintaining high-speed streaming AI responses for immediate visual feedback.',
      ],
      solution:
        'Implemented strict server-side document parsing pipelines coupled with streaming UI generators.',
      result:
        'A functional full-stack web product bridging practical AI utility with automated payment workflows.',
      learnings: [
        'Integrating payment flows early forces clarity around core product value delivery.',
        'Streaming AI outputs drastically improve perceived latency on long generation tasks.',
      ],
      nextSteps:
        'Expand analysis capabilities to include interactive interview practice modules.',
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
      problem:
        'Target web pages frequently vary in layout, missing fields, or changing selector hierarchies, breaking basic scraping scripts.',
      approach:
        'Constructed a resilient modular pipeline separating request handling, DOM selector parsing, schema validation, and file output.',
      architectureNodes: [
        { label: 'FETCH', sublabel: 'HTTP Request Pipeline' },
        { label: 'PARSE', sublabel: 'DOM Selector Extraction' },
        { label: 'CLEAN', sublabel: 'Data Validation' },
        { label: 'EXPORT', sublabel: 'Structured JSON Output' },
      ],
      build:
        'Built with Python libraries emphasizing modular extractor strategies, custom exception logging, and batch export formatting.',
      codeSnippet: {
        language: 'python',
        title: 'scraper.py — Extraction & Validation Pipeline',
        code: `def extract_item_data(element) -> dict:
    try:
        title = element.select_one(".title").get_text(strip=True)
        link = element.select_one("a["href"])["href"]
        return {"title": title, "link": link, "status": "valid"}
    except (AttributeError, KeyError) as e:
        logger.warning(f"Field extraction error: {e}")
        return None`,
      },
      challenges: [
        'Gracefully handling unexpected missing fields without terminating ongoing automated batches.',
        'Formatting non-standard raw strings into clean JSON/CSV records.',
      ],
      solution:
        'Created a schema validation wrapper that logs individual extraction warnings while allowing batch jobs to continue reliably.',
      result:
        'A dependable Python automation tool that produces clean, structured data outputs for downstream consumption.',
      learnings: [
        'Defensive data parsing and fallback values are essential when dealing with external web targets.',
        'Decoupling parsing logic from request pipelines simplifies testing and script maintenance.',
      ],
      nextSteps:
        'Incorporate automated schema change detection and headless browser rendering support.',
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
