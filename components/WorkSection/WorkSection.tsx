import Link from 'next/link';
import { Project } from '@/types/project';
import { ProjectCard } from '../ProjectShowcase/ProjectCard';

interface WorkSectionProps {
  projects: Project[];
}

export function WorkSection({ projects }: WorkSectionProps) {
  return (
    <section
      id="work"
      className="relative w-full py-[clamp(4rem,8vw,8rem)] px-[clamp(1.25rem,5vw,4rem)]"
      aria-label="Selected Work"
    >
      <div className="flex flex-col gap-2 mb-12">
        <span className="font-mono text-[0.625rem] font-medium text-[#555754] tracking-widest uppercase">
          SELECTED WORK
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-[#e2e1da] tracking-tight">
          SELECTED PROJECTS
        </h2>
      </div>

      <div className="flex flex-col gap-12">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            priority={index === 0}
          />
        ))}
      </div>

      <div className="mt-16 flex justify-end">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 font-mono text-xs font-medium text-[#8a8a84] hover:text-[#e2e1da] tracking-widest uppercase py-2 border-b border-[#e2e1da]/10 hover:border-[#e2e1da] transition-colors group"
        >
          <span>VIEW ALL WORK</span>
          <span className="transition-transform duration-150 group-hover:translate-x-1 group-hover:-translate-y-1">
            ↗
          </span>
        </Link>
      </div>
    </section>
  );
}
