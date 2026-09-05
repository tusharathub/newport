import type { Metadata } from 'next';
import { WorkSection } from '@/components/WorkSection/WorkSection';
import { projects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Work — Tushar Nailwal',
  description: 'Selected projects by Tushar Nailwal — AI, full-stack, mobile, and automation.',
};

export default function WorkPage() {
  return (
    <main style={{ paddingTop: 'var(--space-4xl)' }}>
      <WorkSection projects={projects} />
    </main>
  );
}
