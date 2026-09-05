import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  getPublishedArticles,
  getArticleBySlug,
  getPreviousArticle,
  getNextArticle,
} from '@/data/thoughts';
import { ArticleReader } from '@/components';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  const published = getPublishedArticles();
  return published.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return { title: 'Article Not Found — Tushar Nailwal' };
  }

  return {
    title: `${article.title} — Tushar Nailwal`,
    description: article.description,
  };
}

export default async function ThoughtSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const previousArticle = getPreviousArticle(article.slug);
  const nextArticle = getNextArticle(article.slug);

  return (
    <main className="w-full px-[clamp(1.25rem,5vw,4rem)] max-w-[1440px] mx-auto min-h-screen">
      <ArticleReader
        article={article}
        previousArticle={previousArticle}
        nextArticle={nextArticle}
      />
    </main>
  );
}
