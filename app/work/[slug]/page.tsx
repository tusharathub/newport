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

  if (slug === 'rag-application') {
    return {
      title: 'Talk to Your Data — RAG Application | Tushar Nailwal',
      description: project.description,
    };
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
    <main className="w-full px-[clamp(1.25rem,5vw,4rem)] max-w-[1280px] mx-auto min-h-screen py-8 flex flex-col gap-12">
      {/* 1. PROJECT HERO (TITLE, CATEGORY, DESCRIPTION, GITHUB/LIVE, IMAGE) */}
      <CaseStudyHero project={project} />

      {/* 2. HOW IT WORKS */}
      <section className="flex flex-col gap-4 py-6 border-b border-[#e2e1da]/10">
        <h2 className="font-mono text-xs font-semibold text-[#8a8a84] tracking-[0.15em] uppercase">
          HOW IT WORKS
        </h2>

        {cs?.howItWorks?.processSteps && (
          <CaseStudyDiagram steps={cs.howItWorks.processSteps} />
        )}

        {cs?.howItWorks?.explanation && (
          <p className="text-base md:text-lg text-[#e2e1da] leading-relaxed max-w-3xl mt-2">
            {cs.howItWorks.explanation}
          </p>
        )}
      </section>

      {/* 3. TECH STACK */}
      {project.technologies && project.technologies.length > 0 && (
        <section className="flex flex-col gap-3 py-6 border-b border-[#e2e1da]/10">
          <h2 className="font-mono text-xs font-semibold text-[#8a8a84] tracking-[0.15em] uppercase">
            TECH STACK
          </h2>
          <div className="font-mono text-base md:text-lg text-[#e2e1da] tracking-wide">
            {project.technologies.join('  ·  ')}
          </div>
        </section>
      )}

      {/* 4. WHAT I LEARNED */}
      {cs?.learnings && cs.learnings.length > 0 && (
        <section className="flex flex-col gap-4 py-6 border-b border-[#e2e1da]/10">
          <h2 className="font-mono text-xs font-semibold text-[#8a8a84] tracking-[0.15em] uppercase">
            WHAT I LEARNED
          </h2>
          <ul className="flex flex-col gap-3 max-w-3xl">
            {cs.learnings.map((point, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-base md:text-lg text-[#8a8a84] leading-relaxed"
              >
                <span className="text-[#e2e1da] select-none">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* 5. PROJECT NAVIGATION */}
      <CaseStudyNavigation
        previousProject={previousProject}
        nextProject={nextProject}
      />
    </main>
  );
}
