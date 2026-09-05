'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Project } from '@/types/project';
import { ProjectMedia } from './ProjectMedia';

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

export function ProjectCard({ project, priority = false }: ProjectCardProps) {
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

  return (
    <article
      ref={cardRef}
      className={`w-full py-12 md:py-16 border-b border-[#e2e1da]/10 transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      aria-label={`Project: ${project.title}`}
    >
      <div className={`grid gap-8 items-center ${gridClass}`}>
        {/* Visual Media Showcase */}
        <div className={`group relative w-full cursor-pointer ${project.layoutVariant === 'reversed' ? 'lg:order-2' : ''}`}>
          <Link href={projectHref} tabIndex={-1} aria-hidden="true">
            <ProjectMedia project={project} priority={priority} />
          </Link>
        </div>

        {/* Project Metadata & Description */}
        <div className="flex flex-col gap-4 max-w-[540px]">
          <div className="flex items-center gap-4">
            <span className="font-mono text-sm font-medium text-[#555754] tracking-wider">
              {project.id}
            </span>
            <span className="font-mono text-[0.625rem] font-medium text-[#8a8a84] tracking-widest uppercase">
              {project.category}
            </span>
          </div>

          <Link
            href={projectHref}
            className="text-2xl md:text-4xl font-bold text-[#e2e1da] hover:text-white tracking-tight leading-tight transition-colors"
          >
            {project.title}
          </Link>

          <p className="text-base text-[#8a8a84] leading-relaxed">
            {project.description}
          </p>

          {project.technologies && project.technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-1">
              {project.technologies.map((tech, idx) => (
                <span
                  key={tech}
                  className="font-mono text-[0.625rem] text-[#555754] tracking-wider uppercase flex items-center gap-2"
                >
                  {tech}
                  {idx < project.technologies!.length - 1 && (
                    <span className="text-[#252725]">/</span>
                  )}
                </span>
              ))}
            </div>
          )}

          <div className="pt-2">
            <Link
              href={projectHref}
              className="inline-flex items-center gap-2 font-mono text-xs font-medium text-[#e2e1da] hover:text-white tracking-widest uppercase group/link"
            >
              <span>EXPLORE PROJECT</span>
              <span className="transition-transform duration-150 group-hover/link:translate-x-1 group-hover/link:-translate-y-1">
                ↗
              </span>
            </Link>
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
