import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { labItems, getLabItemBySlug } from '@/data/lab';
import { LabDetailView } from '@/components';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return labItems.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getLabItemBySlug(slug);

  if (!item) {
    return { title: 'Experiment Not Found — Tushar Nailwal' };
  }

  return {
    title: `${item.title} — Lab — Tushar Nailwal`,
    description: item.description,
  };
}

export default async function LabDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = getLabItemBySlug(slug);

  if (!item) {
    notFound();
  }

  return (
    <main className="w-full px-[clamp(1.25rem,5vw,4rem)] max-w-[1440px] mx-auto min-h-screen">
      <LabDetailView item={item} />
    </main>
  );
}
