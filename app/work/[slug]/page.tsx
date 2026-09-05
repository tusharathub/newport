import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  PageContainer,
  Section,
  SectionLabel,
  DisplayHeading,
  MotionWrapper,
} from '@/components';
import { projects, getProjectBySlug } from '@/data/projects';

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata(
  props: PageProps<'/work/[slug]'>
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: 'Project Not Found' };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage(props: PageProps<'/work/[slug]'>) {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <Section variant="hero">
      <PageContainer>
        <MotionWrapper variant="fadeIn">
          <SectionLabel index={project.id}>{project.category}</SectionLabel>
        </MotionWrapper>
        <MotionWrapper variant="fadeUp" delay={1}>
          <DisplayHeading as="h1" size="lg">
            {project.title.toUpperCase()}
          </DisplayHeading>
        </MotionWrapper>
        <MotionWrapper variant="fadeUp" delay={2}>
          <p style={{ color: 'var(--color-warm-gray)', fontSize: 'var(--text-lg)', marginTop: 'var(--space-xl)', maxWidth: '640px', lineHeight: 'var(--leading-relaxed)' }}>
            {project.description}
          </p>
        </MotionWrapper>
      </PageContainer>
    </Section>
  );
}
