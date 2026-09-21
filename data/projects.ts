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
        'A full-stack Retrieval-Augmented Generation application that allows users to upload documents and interact with them through AI-powered conversations. Built as a hands-on project to understand RAG mechanics, document ingestion, embeddings, vector databases, and prompt grounding.',
      problem:
        "There wasn't really a problem I was trying to solve. I wanted to learn AI. RAG felt like one of the best ways to get my hands dirty — not just calling an LLM API, but understanding what happens between a document and the answer. So I built one. This was also my first project in Python, which meant I was learning the language while learning how retrieval-augmented generation actually works.",
      approach:
        "The interface looks simple: upload a document, ask a question, get an answer. The interesting part happens in between. The system processes uploaded documents through a multi-stage pipeline: UPLOAD → VALIDATE → PARSE → CLEAN → CHUNK → EMBED → STORE → RETRIEVE → RERANK → CONSTRUCT CONTEXT → GENERATE → STREAM.",
      architectureNodes: [
        { label: 'INGEST', sublabel: 'Upload & Parse' },
        { label: 'CHUNK', sublabel: 'Token / Semantic' },
        { label: 'EMBED', sublabel: '1536-dim Vectors' },
        { label: 'RETRIEVE', sublabel: 'Hybrid Dense + Sparse' },
        { label: 'RERANK', sublabel: 'RRF & Cohere / MMR' },
        { label: 'GENERATE', sublabel: 'Grounded Stream' },
      ],
      build:
        'Built with Python and FastAPI on the backend and Next.js/React on the frontend. The ingestion pipeline accepts 11 formats (PDF, DOCX, XLSX, XLS, PPTX, PPT, TXT, Markdown, HTML, CSV, JSON) and uses a parser strategy/factory to normalize text. Files up to 20MB are validated for extension, MIME type, and magic bytes, with SHA-256 duplicate detection. Sentence segmentation occurs before chunking (Token-aware with 500 token limit and 50 token overlap, or Semantic shift detection), attached with section path hierarchy and page numbers. Vectors are generated via OpenAI text-embedding-3-small (1536 dimensions) in batches up to 2048 using asyncio.Semaphore(10) concurrency, with dual-layer Redis and in-memory caching. Chunks and embeddings are stored in PostgreSQL with pgvector using an HNSW index (m=16, ef_construction=64) and GIN index for metadata. Documents can also be processed for intelligence capabilities like summaries, flashcards, quizzes, key takeaways, timelines, tables, named entities, keywords, and side-by-side document comparisons.',
      codeSnippet: {
        language: 'python',
        title: 'app/infrastructure/db/repositories.py — DocumentRepository.hybrid_search()',
        code: `async def _execute_hybrid_query(
    self, collection_filter, query_embedding: List[float], query_text: str, limit: int, rrf_k: int = 60
) -> List[tuple[DocumentChunkDomain, float]]:
    candidate_limit = limit * 3
    distance_expr = DocumentChunk.embedding.cosine_distance(query_embedding).label("distance")

    dense_stmt = (
        select(DocumentChunk, distance_expr)
        .options(joinedload(DocumentChunk.document))
        .join(Document, Document.id == DocumentChunk.document_id)
        .where(and_(collection_filter, Document.deleted_at.is_(None)))
        .order_by(distance_expr).limit(candidate_limit)
    )
    dense_rows = await self.db.execute(dense_stmt)

    ts_query = func.websearch_to_tsquery('english', query_text.strip())
    ts_vector = func.to_tsvector('english', DocumentChunk.content)
    rank_expr = func.ts_rank_cd(ts_vector, ts_query)

    sparse_stmt = (
        select(DocumentChunk, rank_expr.label("rank"))
        .options(joinedload(DocumentChunk.document))
        .join(Document, Document.id == DocumentChunk.document_id)
        .where(and_(collection_filter, Document.deleted_at.is_(None), ts_vector.op("@@")(ts_query)))
        .order_by(rank_expr.desc()).limit(candidate_limit)
    )
    sparse_rows = await self.db.execute(sparse_stmt)

    rrf_scores: Dict[UUID, float] = {}
    for rank, (db_chunk, _) in enumerate(dense_rows.all(), start=1):
        rrf_scores[db_chunk.id] = rrf_scores.get(db_chunk.id, 0.0) + (1.0 / (rrf_k + rank))
    for rank, (db_chunk, _) in enumerate(sparse_rows.all(), start=1):
        rrf_scores[db_chunk.id] = rrf_scores.get(db_chunk.id, 0.0) + (1.0 / (rrf_k + rank))

    sorted_ids = sorted(rrf_scores.keys(), key=lambda cid: rrf_scores[cid], reverse=True)[:limit]
    return [(chunk_map[cid], rrf_scores[cid]) for cid in sorted_ids]`,
      },
      challenges: [
        'Understanding how documents should be chunked without breaking sentence context or losing document structural hierarchy.',
        'Understanding what high-dimensional embeddings actually represent and how vectors interact inside a similarity search.',
        'Getting vectors into PostgreSQL pgvector and retrieving them meaningfully for both semantic questions and exact keyword-heavy queries.',
        'Understanding why vector similarity alone isn\'t always enough, leading to combining dense vector search with sparse full-text search (websearch_to_tsquery) fused via Reciprocal Rank Fusion (RRF), followed by Maximal Marginal Relevance (MMR) or Cohere reranking.',
        'Designing the document ingestion pipeline around 11 different document formats using a strategy pattern parser factory.',
        'Getting the AI response grounded in retrieved context by structuring XML document context blocks with strict prompt instructions.',
        'Making the backend stream responses token-by-token over Server-Sent Events (POST /api/v1/chat/stream) while persisting message history, sources citation metadata, token counts, and estimated API cost.',
      ],
      solution:
        'The system addresses these challenges through a layered architecture (API → Services → Domain/Interfaces → Infrastructure). Ingestion validates files (magic bytes, MIME, SHA-256) and parses content into page boundaries. Chunking preserves sentence integrity and section paths. Vector storage relies on pgvector HNSW indexing (m=16, ef_construction=64). Retrieval combines dense vector search and sparse full-text search via RRF score fusion, then diversifies via MMR or cross-encoder reranking (Cohere rerank-english-v3.0). Context construction reserves a 2048 token response budget and allocates 70% to retrieved XML context and 30% to chat history. Answers are generated using OpenRouter / OpenAI models (meta-llama/llama-3.1-8b-instruct:free, gpt-4o-mini) and streamed progressively over SSE with enforced grounding rules and citations.',
      result:
        'The project gave me hands-on experience building an end-to-end RAG system and significantly expanded my understanding of Python, FastAPI, document processing, embeddings, vector search, retrieval, and LLM integration.',
      learnings: [
        'This was my first Python project. I came into it wanting to learn AI and ended up learning much more than how to call an LLM.',
        'I learned how documents have to be transformed before they can become useful to a retrieval system — how chunk boundaries matter, how embeddings represent text, how vector search works, and why retrieval quality matters just as much as generation.',
        'I became much more comfortable with Python and FastAPI while building the backend.',
        'Most importantly, I stopped thinking about RAG as simply "put documents into a vector database and ask an LLM." There is a lot of engineering between the document and the answer.',
      ],
      nextSteps:
        'Add OCR support for scanned/image-only documents. Give users explicit controls for creating, naming, and organizing collections.',
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
