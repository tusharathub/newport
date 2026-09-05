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
    technologies: ['Python', 'RAG', 'Vector Search'],
    featured: true,
    layoutVariant: 'default',
    aspectRatio: '16/9',
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
    technologies: ['React Native', 'Local-First', 'SQLite'],
    featured: true,
    layoutVariant: 'reversed',
    aspectRatio: '4/5',
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
    technologies: ['Next.js', 'AI', 'Stripe', 'TypeScript'],
    featured: true,
    layoutVariant: 'full',
    aspectRatio: '21/9',
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
    technologies: ['Python', 'Automation', 'Parsing'],
    featured: true,
    layoutVariant: 'offset',
    aspectRatio: '16/10',
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
