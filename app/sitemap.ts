import type { MetadataRoute } from 'next';
import { projects } from '@/data/projects';
import { personalData } from '@/data/personal';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = personalData.siteUrl;

  const staticPages = ['', '/projects', '/work', '/about'].map((route) => ({
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

  return [...staticPages, ...projectPages];
}

