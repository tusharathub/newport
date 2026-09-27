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
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const projectHref = `/work/${project.slug}`;
  const displayNumber = (index !== undefined ? index + 1 : parseInt(project.id, 10) || 1)
    .toString()
    .padStart(2, '0');

  return (
    <article
      ref={cardRef}
      className={`w-full py-10 md:py-14 transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ borderBottom: '1px solid rgba(26,26,24,0.12)' }}
      aria-label={`Project: ${project.title}`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-14 items-start">
        {/* Left — Project Info */}
        <div className="flex flex-col gap-5">
          {/* Number & Category */}
          <div className="flex items-center gap-3">
            <span
              className="font-mono text-sm font-semibold tracking-widest"
              style={{ color: '#8a8a7e' }}
            >
              {displayNumber}
            </span>
            <span className="font-mono text-xs" style={{ color: '#c4c0b8' }}>
              •
            </span>
            <span
              className="font-mono text-xs font-semibold tracking-[0.15em] uppercase"
              style={{ color: '#8a8a7e' }}
            >
              {project.category}
            </span>
          </div>

          {/* Title */}
          <Link
            href={projectHref}
            className="font-big-shoulders text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[0.95] uppercase transition-colors duration-200"
            style={{ color: '#1a1a18' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#3a3a34';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#1a1a18';
            }}
          >
            {project.title}
          </Link>

          {/* Description */}
          <p
            className="font-body text-base leading-relaxed max-w-md"
            style={{ color: '#5a5a54' }}
          >
            {project.description}
          </p>

          {/* Technologies */}
          {project.technologies && project.technologies.length > 0 && (
            <div
              className="flex flex-wrap gap-x-2.5 gap-y-1.5 pt-1 font-mono text-xs"
              style={{ color: '#8a8a7e' }}
            >
              {project.technologies.map((tech, idx) => (
                <span key={tech} className="inline-flex items-center gap-2.5">
                  <span>{tech}</span>
                  {idx < project.technologies!.length - 1 && (
                    <span style={{ color: '#c4c0b8' }}>·</span>
                  )}
                </span>
              ))}
            </div>
          )}

          {/* CTA Links */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-3">
            <Link
              href={projectHref}
              className="inline-flex items-center gap-2.5 font-mono text-xs font-semibold tracking-[0.12em] uppercase px-6 py-3.5 border rounded-sm transition-all duration-300 group/cta w-fit"
              style={{
                color: '#1a1a18',
                borderColor: 'rgba(26,26,24,0.2)',
                backgroundColor: 'transparent',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#1a1a18';
                e.currentTarget.style.color = '#ece8e1';
                e.currentTarget.style.borderColor = '#1a1a18';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#1a1a18';
                e.currentTarget.style.borderColor = 'rgba(26,26,24,0.2)';
              }}
            >
              <span>VIEW PROJECT</span>
              <span className="transition-transform duration-200 group-hover/cta:translate-x-1">
                →
              </span>
            </Link>

            <div className="flex items-center gap-5">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs font-medium tracking-[0.12em] uppercase transition-colors duration-200 inline-flex items-center gap-1 group/gh"
                  style={{ color: '#8a8a7e' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#1a1a18';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#8a8a7e';
                  }}
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
                  className="font-mono text-xs font-medium tracking-[0.12em] uppercase transition-colors duration-200 inline-flex items-center gap-1 group/live"
                  style={{ color: '#8a8a7e' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#1a1a18';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#8a8a7e';
                  }}
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

        {/* Right — Project Media */}
        <div className="group relative w-full cursor-pointer">
          <Link href={projectHref} tabIndex={-1} aria-hidden="true">
            <ProjectMedia project={project} priority={priority} />
          </Link>
        </div>
      </div>
    </article>
  );
}
