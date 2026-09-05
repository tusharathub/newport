import { Article } from '@/types/thought';

export const articles: Article[] = [
  {
    slug: 'rag-retrieval-quality-over-llm-params',
    title: 'Why Retrieval Quality Matters More Than LLM Model Size in RAG',
    description:
      'An engineering perspective on vector indexing, chunk boundaries, and prompt context injection over raw model parameters.',
    date: '05 SEP 2026',
    category: 'AI Engineering',
    tags: ['AI', 'RAG', 'Vector Search', 'Python'],
    readingTime: '6 MIN READ',
    featured: true,
    published: true,
    sections: [
      {
        heading: 'The Context Injection Bottleneck',
        body: [
          'When building Retrieval-Augmented Generation (RAG) systems, developers often spend significant time experimenting with larger foundation models under the assumption that bigger parameters solve reasoning errors.',
          'In practice, an LLM can only generate accurate answers if the injected context contains crisp, non-contradictory information. If your vector retrieval returns noisy or truncated chunk boundaries, even a top-tier model will produce hallucinated or generic responses.',
        ],
      },
      {
        heading: 'Chunking Strategies & Distance Metrics',
        body: [
          'Optimal chunking requires respecting logical boundaries (paragraphs, code functions, markdown headers) rather than enforcing arbitrary token cutoffs. Combining semantic overlap with similarity threshold filtering dramatically reduces retrieval noise.',
        ],
        codeSnippet: {
          language: 'python',
          code: `def filter_retrieved_chunks(results: list, distance_threshold: float = 0.75) -> list:
    return [r for r in results if r.score >= distance_threshold]`,
        },
      },
      {
        heading: 'Key Takeaways',
        body: [
          'High-precision retrieval transforms complex queries into simple synthesis tasks for the LLM.',
          'Prioritize document pre-processing, hybrid search (dense + sparse), and distance filtering before upgrading model parameter sizes.',
        ],
        callout:
          'Garbage context in guarantees hallucinated outputs out. Fix the retriever first.',
      },
    ],
  },
  {
    slug: 'local-first-architecture-patterns',
    title: 'Building Friction-Free Mobile Apps with Local-First Persistence',
    description:
      'Lessons learned implementing offline SQLite delta logging and zero-latency UI updates.',
    date: '28 AUG 2026',
    category: 'Architecture',
    tags: ['Mobile', 'Local-First', 'SQLite'],
    readingTime: '4 MIN READ',
    featured: false,
    published: true,
    sections: [
      {
        heading: 'Zero Network Dependency',
        body: [
          'Users expect daily utility tools to open instantly and accept inputs without spinners or login barriers.',
          'By adopting a local-first SQLite architecture, state mutations occur synchronously on-device, yielding sub-16ms UI updates.',
        ],
      },
      {
        heading: 'Delta Log Synchronization',
        body: [
          'Instead of full state syncs over HTTP, log granular mutation events in a local append-only table. When network connectivity is established, push compressed delta queues to the cloud server.',
        ],
      },
    ],
  },
];

export function getPublishedArticles(): Article[] {
  return articles.filter((a) => a.published);
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug && a.published);
}

export function getFeaturedArticle(): Article | undefined {
  return articles.find((a) => a.featured && a.published);
}

export function getPreviousArticle(slug: string): Article | undefined {
  const published = getPublishedArticles();
  const index = published.findIndex((a) => a.slug === slug);
  if (index <= 0) return undefined;
  return published[index - 1];
}

export function getNextArticle(slug: string): Article | undefined {
  const published = getPublishedArticles();
  const index = published.findIndex((a) => a.slug === slug);
  if (index === -1 || index === published.length - 1) return undefined;
  return published[index + 1];
}
