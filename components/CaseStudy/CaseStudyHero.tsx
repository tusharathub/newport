import { Project } from '@/types/project';
import { ProjectMedia } from '../ProjectShowcase/ProjectMedia';

interface CaseStudyHeroProps {
  project: Project;
}

export function CaseStudyHero({ project }: CaseStudyHeroProps) {
  return (
    <header className="relative w-full pt-[clamp(6rem,10vw,8rem)] pb-12 flex flex-col gap-8">
      {/* Top Tag & ID */}
      <div className="flex justify-between items-center font-mono text-xs text-[#555754] tracking-widest uppercase">
        <span>{project.id} — CASE STUDY</span>
        <span className="px-2 py-0.5 border border-[#e2e1da]/10 rounded-sm text-[#8a8a84]">
          {project.category}
        </span>
      </div>

      {/* Main Title */}
      <h1 className="text-[clamp(3rem,8vw,7rem)] font-bold text-[#e2e1da] tracking-[-0.05em] leading-none">
        {project.title.toUpperCase()}
      </h1>

      {/* Short Tagline Description */}
      <p className="text-xl md:text-2xl text-[#8a8a84] leading-relaxed max-w-3xl">
        {project.description}
      </p>

      {/* Large Project Visual Frame */}
      <div className="w-full mt-4">
        <ProjectMedia project={project} priority />
      </div>
    </header>
  );
}
