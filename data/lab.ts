import { LabItem } from '@/types/lab';

export const labItems: LabItem[] = [
  {
    id: '01',
    slug: 'vector-embedding-playground',
    title: 'Vector Embedding Playground',
    description:
      'A lightweight interactive visualizer testing similarity metrics across dimensional text embeddings.',
    category: 'AI Playground',
    year: '2024',
    status: 'EXPERIMENT',
    technologies: ['Python', 'Embeddings', 'Math'],
    featured: true,
    content: {
      why: 'I wanted to visually inspect how distance thresholds shift across cosine vs euclidean similarity metrics in vector space.',
      explored: 'Evaluated cosine, dot product, and euclidean distance calculations on high-dimensional text vectors.',
      learned: 'Dimensionality reduction transforms visual cluster intuition without distorting underlying similarity queries.',
      next: 'Add interactive 3D cluster projection using WebGL.',
    },
  },
  {
    id: '02',
    slug: 'sqlite-sync-engine',
    title: 'Local-First SQLite Sync Engine',
    description:
      'A prototype delta-log sync engine for offline-first local SQLite databases.',
    category: 'Database Systems',
    year: '2024',
    status: 'PROTOTYPE',
    technologies: ['SQLite', 'Local-First', 'TypeScript'],
    featured: false,
    content: {
      why: 'To explore how simple delta queues can resolve local database mutations without heavy CRDT frameworks.',
      explored: 'Built an append-only mutation change log with conflict timestamps.',
      learned: 'Deterministic timestamp logging handles 90% of user data sync scenarios cleanly.',
      next: 'Implement binary change compression.',
    },
  },
  {
    id: '03',
    slug: 'async-scraper-pipeline',
    title: 'Async Scraper Parser Pipeline',
    description:
      'An asynchronous DOM parser benchmark extracting structured schemas at 500 requests/sec.',
    category: 'Automation Utility',
    year: '2024',
    status: 'PLAYGROUND',
    technologies: ['Python', 'Asyncio', 'Parsing'],
    featured: false,
    content: {
      why: 'To measure async throughput bottlenecks when processing high-volume DOM parsing jobs.',
      explored: 'Tested asyncio event loop concurrency against multi-process CPU workers for DOM cleaning.',
      learned: 'CPU-bound regex string cleaning should be offloaded to worker processes while HTTP fetches remain async.',
      next: 'Package as a lightweight CLI utility.',
    },
  },
];

export function getLabItemBySlug(slug: string): LabItem | undefined {
  return labItems.find((item) => item.slug === slug);
}

export function getFeaturedLabItems(): LabItem[] {
  return labItems.filter((item) => item.featured);
}
