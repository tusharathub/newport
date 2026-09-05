import Link from 'next/link';
import { Project } from '@/types/project';

interface CaseStudyNavigationProps {
  previousProject: Project;
  nextProject: Project;
}

export function CaseStudyNavigation({
  previousProject,
  nextProject,
}: CaseStudyNavigationProps) {
  return (
    <nav className="w-full pt-16 pb-24 border-t border-[#e2e1da]/10 flex flex-col md:flex-row justify-between items-stretch gap-8">
      {/* Previous */}
      <Link
        href={`/work/${previousProject.slug}`}
        className="flex-1 p-6 bg-[#101111] border border-[#e2e1da]/10 hover:border-[#e2e1da]/30 rounded-sm flex flex-col gap-2 transition-all group"
      >
        <span className="font-mono text-[10px] text-[#555754] tracking-widest uppercase">
          ← PREVIOUS PROJECT
        </span>
        <span className="text-xl font-bold text-[#e2e1da] group-hover:text-white transition-colors">
          {previousProject.title}
        </span>
        <span className="font-mono text-xs text-[#8a8a84]">
          {previousProject.category}
        </span>
      </Link>

      {/* Back to main work */}
      <div className="flex items-center justify-center py-4">
        <Link
          href="/#work"
          className="font-mono text-xs text-[#8a8a84] hover:text-[#e2e1da] tracking-widest uppercase transition-colors"
        >
          BACK TO WORK
        </Link>
      </div>

      {/* Next */}
      <Link
        href={`/work/${nextProject.slug}`}
        className="flex-1 p-6 bg-[#101111] border border-[#e2e1da]/10 hover:border-[#e2e1da]/30 rounded-sm flex flex-col gap-2 text-right transition-all group"
      >
        <span className="font-mono text-[10px] text-[#555754] tracking-widest uppercase">
          NEXT PROJECT →
        </span>
        <span className="text-xl font-bold text-[#e2e1da] group-hover:text-white transition-colors">
          {nextProject.title}
        </span>
        <span className="font-mono text-xs text-[#8a8a84]">
          {nextProject.category}
        </span>
      </Link>
    </nav>
  );
}
