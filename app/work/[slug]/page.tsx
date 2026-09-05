import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  projects,
  getProjectBySlug,
  getPreviousProject,
  getNextProject,
} from '@/data/projects';
import {
  CaseStudyHero,
  CaseStudyMeta,
  CaseStudyDiagram,
  CaseStudySection,
  CaseStudyNavigation,
} from '@/components';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: 'Project Not Found — Tushar Nailwal' };
  }

  return {
    title: `${project.title} — Case Study — Tushar Nailwal`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const previousProject = getPreviousProject(project.slug);
  const nextProject = getNextProject(project.slug);
  const cs = project.caseStudyData;

  return (
    <main className="w-full px-[clamp(1.25rem,5vw,4rem)] max-w-[1440px] mx-auto min-h-screen">
      {/* Hero Header */}
      <CaseStudyHero project={project} />

      {/* Main Grid: Sticky Sidebar + Case Study Content */}
      <div className="flex flex-col lg:flex-row gap-12 py-8">
        {/* Sidebar Metadata */}
        <CaseStudyMeta project={project} />

        {/* Content Column */}
        <div className="flex-1 flex flex-col gap-4">
          {cs?.overview && (
            <CaseStudySection number="00" title="OVERVIEW" text={cs.overview} />
          )}

          {cs?.problem && (
            <CaseStudySection number="01" title="THE PROBLEM" text={cs.problem} />
          )}

          {cs?.approach && (
            <CaseStudySection
              number="02"
              title="THE APPROACH"
              text={cs.approach}
            />
          )}

          {cs?.architectureNodes && cs.architectureNodes.length > 0 && (
            <CaseStudyDiagram nodes={cs.architectureNodes} />
          )}

          {cs?.build && (
            <CaseStudySection
              number="03"
              title="THE BUILD"
              text={cs.build}
              codeSnippet={cs.codeSnippet}
            />
          )}

          {cs?.challenges && cs.challenges.length > 0 && (
            <CaseStudySection
              number="04"
              title="CHALLENGES"
              bullets={cs.challenges}
            />
          )}

          {cs?.solution && (
            <CaseStudySection
              number="05"
              title="THE SOLUTION"
              text={cs.solution}
            />
          )}

          {cs?.result && (
            <CaseStudySection number="06" title="THE RESULT" text={cs.result} />
          )}

          {cs?.learnings && cs.learnings.length > 0 && (
            <CaseStudySection
              number="07"
              title="WHAT I LEARNED"
              bullets={cs.learnings}
            />
          )}

          {cs?.nextSteps && (
            <CaseStudySection
              number="08"
              title="NEXT STEPS"
              text={cs.nextSteps}
            />
          )}
        </div>
      </div>

      {/* Footer Prev/Next Navigation */}
      <CaseStudyNavigation
        previousProject={previousProject}
        nextProject={nextProject}
      />
    </main>
  );
}
