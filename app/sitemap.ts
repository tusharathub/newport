import type { MetadataRoute } from 'next';
import { projects } from '@/data/projects';
import { labItems } from '@/data/lab';
import { getPublishedArticles } from '@/data/thoughts';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://tusharnailwal.dev';

  const staticPages = ['', '/work', '/lab', '/thoughts', '/about'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const projectPages = projects.map((p) => ({
    url: `${baseUrl}/work/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  const labPages = labItems.map((l) => ({
    url: `${baseUrl}/lab/${l.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const thoughtPages = getPublishedArticles().map((a) => ({
    url: `${baseUrl}/thoughts/${a.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...projectPages, ...labPages, ...thoughtPages];
}
