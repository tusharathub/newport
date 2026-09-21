'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Project } from '@/types/project';
import { ProjectMedia } from './ProjectMedia';

interface ProjectCardProps {
  project: Project;
  index?: number;
  priority?: boolean;
}

export function ProjectCard({
  project,
  index,
  priority = false,
}: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const gridClass = getGridClass(project.layoutVariant);
  const projectHref = `/work/${project.slug}`;
  const displayNumber = (index !== undefined ? index + 1 : parseInt(project.id, 10) || 1)
    .toString()
    .padStart(2, '0');

  return (
    <article
      ref={cardRef}
      className={`w-full pb-16 md:pb-24 border-b border-[#e2e1da]/10 transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      aria-label={`Project: ${project.title}`}
    >
      <div className={`grid gap-10 lg:gap-14 items-center ${gridClass}`}>
        {/* Visual Media Showcase */}
        <div
          className={`group relative w-full cursor-pointer ${
            project.layoutVariant === 'reversed' ? 'lg:order-2' : ''
          }`}
        >
          <Link href={projectHref} tabIndex={-1} aria-hidden="true">
            <ProjectMedia project={project} priority={priority} />
          </Link>
        </div>

        {/* Project Metadata & Description */}
        <div className="flex flex-col gap-5 max-w-[580px]">
          {/* Project Number & Category */}
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm font-semibold text-[#8a8a84] tracking-widest">
              {displayNumber}
            </span>
            <span className="text-[#343531] font-mono text-xs">•</span>
            <span className="font-mono text-xs font-semibold text-[#8a8a84] tracking-widest uppercase">
              {project.category}
            </span>
          </div>

          {/* Project Title */}
          <Link
            href={projectHref}
            className="font-big-shoulders text-4xl sm:text-5xl lg:text-7xl font-black text-[#e7e6df] hover:text-white tracking-tight leading-[0.95] uppercase transition-colors"
          >
            {project.title}
          </Link>

          {/* Description */}
          <p className="font-body text-base md:text-lg text-[#a1a29b] leading-relaxed">
            {project.description}
          </p>

          {/* Technologies */}
          {project.technologies && project.technologies.length > 0 && (
            <div className="flex flex-wrap gap-x-2.5 gap-y-1.5 pt-1 font-mono text-xs text-[#777871]">
              {project.technologies.map((tech, idx) => (
                <span key={tech} className="inline-flex items-center gap-2.5">
                  <span>{tech}</span>
                  {idx < project.technologies!.length - 1 && (
                    <span className="text-[#343531]">·</span>
                  )}
                </span>
              ))}
            </div>
          )}

          {/* CTAs & External Links */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-5 pt-3 mt-1">
            {/* Main Primary CTA */}
            <Link
              href={projectHref}
              className="inline-flex items-center gap-2.5 font-mono text-xs font-semibold text-[#e7e6df] hover:text-white tracking-widest uppercase px-6 py-3.5 bg-[#181917] border border-[#e2e1da]/15 hover:border-[#e2e1da]/40 hover:bg-[#20211f] rounded-sm transition-all duration-200 group/cta w-fit shadow-sm"
            >
              <span>VIEW PROJECT</span>
              <span className="transition-transform duration-200 group-hover/cta:translate-x-1">
                →
              </span>
            </Link>

            {/* Secondary Links */}
            <div className="flex items-center gap-5">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs font-medium text-[#8a8a84] hover:text-[#e7e6df] tracking-widest uppercase transition-colors inline-flex items-center gap-1 group/gh"
                >
                  <span>GITHUB</span>
                  <span className="inline-block transition-transform duration-150 group-hover/gh:translate-x-0.5 group-hover/gh:-translate-y-0.5">
                    ↗
                  </span>
                </a>
              )}

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs font-medium text-[#8a8a84] hover:text-[#e7e6df] tracking-widest uppercase transition-colors inline-flex items-center gap-1 group/live"
                >
                  <span>LIVE</span>
                  <span className="inline-block transition-transform duration-150 group-hover/live:translate-x-0.5 group-hover/live:-translate-y-0.5">
                    ↗
                  </span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function getGridClass(variant?: string) {
  switch (variant) {
    case 'reversed':
      return 'grid-cols-1 lg:grid-cols-[1fr_1.2fr]';
    case 'full':
      return 'grid-cols-1';
    case 'offset':
      return 'grid-cols-1 lg:grid-cols-[1.2fr_1fr]';
    case 'default':
    default:
      return 'grid-cols-1 lg:grid-cols-[1.3fr_1fr]';
  }
}
