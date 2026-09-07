'use client';

import Image from 'next/image';
import { Project } from '@/types/project';

interface ProjectMediaProps {
  project: Project;
  priority?: boolean;
}

export function ProjectMedia({ project, priority = false }: ProjectMediaProps) {
  const ratioClass = getRatioClass(project.aspectRatio);

  const frameClasses = `relative w-full bg-[#101111] border border-[#e2e1da]/10 rounded-sm overflow-hidden flex items-center justify-center transition-all duration-500 ease-out group-hover:border-[#e2e1da]/30 group-hover:scale-[1.015] ${ratioClass}`;

  if (project.thumbnail) {
    return (
      <div className={frameClasses}>
        <Image
          src={project.thumbnail}
          alt={`${project.title} preview visual`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 60vw"
          priority={priority}
          className="w-full h-full object-cover transition-transform duration-500 ease-out"
        />
      </div>
    );
  }

  return (
    <div className={frameClasses}>
      <div
        className="relative w-full h-full flex flex-col justify-between p-6 md:p-8 bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.03)_0%,rgba(10,10,10,0.95)_80%)] select-none"
        aria-hidden="true"
      >
        {/* Placeholder Header */}
        <div className="flex justify-between items-center font-mono text-[0.625rem] text-[#555754] tracking-wider uppercase">
          <span>{project.id} — SYSTEM VISUAL</span>
          <span className="px-1.5 py-0.5 border border-white/10 rounded-sm">
            {project.category}
          </span>
        </div>

        {/* RAG Application Abstract Visual */}
        {project.slug === 'rag-application' && (
          <div className="flex flex-col md:flex-row items-center justify-around gap-4 my-auto">
            <div className="flex flex-col items-center gap-1 p-3 md:p-4 bg-white/[0.02] border border-white/10 rounded-sm">
              <span className="font-mono text-xs text-[#e2e1da] tracking-wider">
                QUERY
              </span>
              <span className="text-[10px] text-[#555754]">Vector Embedding</span>
            </div>
            <span className="text-xs text-[#252725] rotate-90 md:rotate-0">
              →
            </span>
            <div className="flex flex-col items-center gap-1 p-3 md:p-4 bg-white/[0.02] border border-white/10 rounded-sm">
              <span className="font-mono text-xs text-[#e2e1da] tracking-wider">
                RETRIEVE
              </span>
              <span className="text-[10px] text-[#555754]">Semantic Search</span>
            </div>
            <span className="text-xs text-[#252725] rotate-90 md:rotate-0">
              →
            </span>
            <div className="flex flex-col items-center gap-1 p-3 md:p-4 bg-white/[0.02] border border-white/10 rounded-sm">
              <span className="font-mono text-xs text-[#e2e1da] tracking-wider">
                SYNTHESIZE
              </span>
              <span className="text-[10px] text-[#555754]">LLM Response</span>
            </div>
          </div>
        )}

        {/* Water Tracking App Abstract Visual */}
        {project.slug === 'water-tracking-app' && (
          <div className="flex flex-col items-center justify-center gap-4 my-auto">
            <div className="w-28 h-28 md:w-36 md:h-36 rounded-full border border-white/15 flex flex-col items-center justify-center bg-[radial-gradient(circle,rgba(255,255,255,0.04)_0%,transparent_70%)]">
              <span className="text-xl md:text-2xl font-bold text-[#e2e1da]">
                2,500 ml
              </span>
              <span className="text-[10px] text-[#555754] tracking-widest">
                DAILY HYDRATION
              </span>
            </div>
          </div>
        )}

        {/* NotableCV Abstract Visual */}
        {project.slug === 'notablecv' && (
          <div className="flex items-center gap-6 my-auto w-full">
            <div className="flex-1 p-4 bg-white/[0.015] border border-white/10 rounded-sm flex flex-col gap-2">
              <div className="h-1 bg-white/10 rounded-sm w-full" />
              <div className="h-1 bg-white/10 rounded-sm w-full" />
              <div className="h-1 bg-white/10 rounded-sm w-3/5" />
            </div>
            <div className="flex flex-col items-center gap-1 p-3 bg-white/[0.02] border border-white/10 rounded-sm">
              <span className="font-mono text-xs text-[#e2e1da]">ANALYSIS</span>
              <span className="text-[10px] text-[#555754]">
                Resume Match 94%
              </span>
            </div>
          </div>
        )}

        {/* Python Web Scraper Abstract Visual */}
        {project.slug === 'python-web-scraper' && (
          <div className="flex flex-col gap-2 my-auto font-mono text-xs text-[#a1a29b]">
            <div className="flex gap-3">
              <span className="text-[#777871]">PIPELINE</span>
              <span className="text-[#e7e6df]">INPUT → PARSE → STRUCTURE → EXPORT</span>
            </div>
            <div className="flex gap-3">
              <span className="text-[#777871]">PARSE</span>
              <span className="text-[#e7e6df]">
                DOM.querySelectorAll(&quot;.item&quot;)
              </span>
            </div>
            <div className="flex gap-3">
              <span className="text-[#777871]">EXPORT</span>
              <span className="text-[#e7e6df]">
                Structured JSON — 1,420 records
              </span>
            </div>
          </div>
        )}

        {/* Fallback */}
        {!['rag-application', 'water-tracking-app', 'notablecv', 'python-web-scraper'].includes(
          project.slug
        ) && (
          <div className="flex justify-center my-auto">
            <span className="font-mono text-xs text-[#e2e1da]">
              {project.title.toUpperCase()}
            </span>
          </div>
        )}

        {/* Placeholder Footer */}
        <div className="flex justify-between items-end font-mono text-[10px] text-[#252725] tracking-wider">
          <span>PROJECT REPOSITORY — DATA DRIVEN</span>
          <span>{project.year || '2024'}</span>
        </div>
      </div>
    </div>
  );
}

function getRatioClass(aspectRatio?: string) {
  switch (aspectRatio) {
    case '4/5':
      return 'aspect-[4/5] md:max-h-[580px]';
    case '21/9':
      return 'aspect-[21/9]';
    case '16/10':
      return 'aspect-[16/10]';
    case '16/9':
    default:
      return 'aspect-[16/9]';
  }
}
