import { Project } from '@/types/project';
import { ProjectMedia } from '../ProjectShowcase/ProjectMedia';

interface CaseStudyHeroProps {
  project: Project;
}

export function CaseStudyHero({ project }: CaseStudyHeroProps) {
  return (
    <header className="relative w-full pt-[clamp(5rem,8vw,7rem)] pb-8 flex flex-col gap-6">
      {/* Category metadata */}
      <div className="font-mono text-xs text-[#8a8a84] tracking-[0.15em] uppercase">
        {project.category}
      </div>

      {/* Visually dominant title */}
      <h1 className="text-[clamp(2.75rem,7vw,6rem)] font-bold text-[#e2e1da] tracking-[-0.04em] leading-[0.95] uppercase">
        {project.title}
      </h1>

      {/* Short description */}
      <p className="text-lg md:text-xl text-[#8a8a84] leading-relaxed max-w-2xl">
        {project.description}
      </p>

      {/* Project links: GITHUB ↗ / LIVE ↗ */}
      {(project.githubUrl || project.liveUrl) && (
        <div className="flex items-center gap-6 pt-2 font-mono text-xs font-semibold tracking-wider uppercase">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#e2e1da] hover:text-white transition-colors flex items-center gap-1"
            >
              <span>GITHUB</span> <span>↗</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#e2e1da] hover:text-white transition-colors flex items-center gap-1"
            >
              <span>LIVE</span> <span>↗</span>
            </a>
          )}
        </div>
      )}

      {/* Large Project Visual Image Frame */}
      <div className="w-full mt-6">
        <ProjectMedia project={project} priority />
      </div>
    </header>
  );
}
