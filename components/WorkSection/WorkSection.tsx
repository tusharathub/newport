import Link from 'next/link';
import { Project } from '@/types/project';
import { ProjectCard } from '../ProjectShowcase/ProjectCard';

interface WorkSectionProps {
  projects: Project[];
  title?: string;
  subtitle?: string;
  showViewAll?: boolean;
}

export function WorkSection({
  projects,
  title = 'SELECTED WORK',
  subtitle = "A few things I've built, broken, rebuilt, and learned from.",
  showViewAll = true,
}: WorkSectionProps) {
  return (
    <section
      id="work"
      className="relative w-full py-[clamp(4rem,8vw,8rem)] px-[clamp(1.25rem,5vw,4rem)]"
      aria-label={title}
    >
      <div className="flex flex-col gap-3 mb-16">
        <span className="font-mono text-[0.625rem] font-medium text-[#777871] tracking-widest uppercase">
          01 / SELECTED WORK
        </span>
        <h2 className="font-big-shoulders text-4xl md:text-7xl font-black text-[#e7e6df] tracking-tight uppercase leading-[0.95]">
          {title}
        </h2>
        {subtitle && (
          <p className="font-body text-base md:text-lg text-[#8a8a84] max-w-xl leading-relaxed mt-1">
            {subtitle}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-16 md:gap-24">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            priority={index === 0}
          />
        ))}
      </div>

      {showViewAll && (
        <div className="mt-20 md:mt-28 flex justify-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-3 font-mono text-xs font-semibold text-[#e7e6df] hover:text-white tracking-widest uppercase px-8 py-4 bg-[#181917] border border-[#e2e1da]/20 hover:border-[#e2e1da]/60 hover:bg-[#20211f] rounded-sm transition-all duration-200 group shadow-md"
          >
            <span>VIEW ALL PROJECTS</span>
            <span className="transition-transform duration-200 group-hover:translate-x-1.5">
              →
            </span>
          </Link>
        </div>
      )}
    </section>
  );
}
