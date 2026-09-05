import type { Metadata } from 'next';
import { AboutSection } from '@/components/AboutSection/AboutSection';
import { personalData } from '@/data/personal';

export const metadata: Metadata = {
  title: `About — ${personalData.name}`,
  description: personalData.shortBio,
};

export default function AboutPage() {
  return (
    <main className="pt-16 min-h-screen">
      <AboutSection />
    </main>
  );
}
