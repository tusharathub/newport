import { Project } from '@/types/project';

interface CaseStudyMetaProps {
  project: Project;
}

export function CaseStudyMeta({ project }: CaseStudyMetaProps) {
  return (
    <aside className="w-full lg:w-64 flex flex-col gap-6 p-6 bg-[#101111] border border-[#e2e1da]/10 rounded-sm lg:sticky lg:top-28 h-fit">
      <div className="flex flex-col gap-1">
        <span className="font-mono text-[10px] text-[#555754] tracking-widest uppercase">
          PROJECT
        </span>
        <span className="font-mono text-sm font-semibold text-[#e2e1da]">
          {project.title}
        </span>
      </div>

      <div className="flex flex-col gap-1">
        <span className="font-mono text-[10px] text-[#555754] tracking-widest uppercase">
          CATEGORY
        </span>
        <span className="font-mono text-xs text-[#8a8a84]">{project.category}</span>
      </div>

      {project.role && (
        <div className="flex flex-col gap-1">
          <span className="font-mono text-[10px] text-[#555754] tracking-widest uppercase">
            ROLE
          </span>
          <span className="font-mono text-xs text-[#8a8a84]">{project.role}</span>
        </div>
      )}

      <div className="flex flex-col gap-1">
        <span className="font-mono text-[10px] text-[#555754] tracking-widest uppercase">
          YEAR
        </span>
        <span className="font-mono text-xs text-[#8a8a84]">{project.year}</span>
      </div>

      {project.technologies && project.technologies.length > 0 && (
        <div className="flex flex-col gap-2">
          <span className="font-mono text-[10px] text-[#555754] tracking-widest uppercase">
            STACK
          </span>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="font-mono text-[10px] text-[#8a8a84] px-2 py-0.5 bg-[#171918] border border-[#e2e1da]/10 rounded-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {(project.githubUrl || project.liveUrl) && (
        <div className="pt-2 border-t border-[#e2e1da]/10 flex flex-col gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-[#e2e1da] hover:text-white flex items-center gap-1 transition-colors"
            >
              <span>GITHUB REPO</span> <span>↗</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-[#e2e1da] hover:text-white flex items-center gap-1 transition-colors"
            >
              <span>LIVE SYSTEM</span> <span>↗</span>
            </a>
          )}
        </div>
      )}
    </aside>
  );
}
