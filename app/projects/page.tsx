import type { Metadata } from 'next';
import { WorkSection } from '@/components/WorkSection/WorkSection';
import { projects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Projects — Tushar Nailwal',
  description: 'Selected projects by Tushar Nailwal — AI, full-stack, mobile, and automation.',
};

export default function ProjectsPage() {
  return (
    <main style={{ paddingTop: 'var(--space-4xl)' }}>
      <WorkSection
        projects={projects}
        title="ALL PROJECTS"
        subtitle="Complete collection of AI, full-stack, mobile, and automation projects."
        showViewAll={false}
      />
    </main>
  );
}
