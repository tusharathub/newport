import type { Metadata } from 'next';
import { ThoughtsSection } from '@/components/Thoughts/ThoughtsSection';
import { getPublishedArticles } from '@/data/thoughts';

export const metadata: Metadata = {
  title: 'Thoughts — Tushar Nailwal',
  description: 'Writing on AI engineering, software architecture, and product development by Tushar Nailwal.',
};

export default function ThoughtsPage() {
  const publishedArticles = getPublishedArticles();

  return (
    <main className="pt-16 min-h-screen">
      <ThoughtsSection articles={publishedArticles} />
    </main>
  );
}
