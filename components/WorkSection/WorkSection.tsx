'use client';

import { useEffect, useRef, useState } from 'react';
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
  subtitle = "A selection of projects, experiments, and things I've built and shipped.",
  showViewAll = true,
}: WorkSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = headingRef.current;
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

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative w-full"
      aria-label={title}
      style={{ backgroundColor: '#ece8e1' }}
    >
      {/* ── Header Block ── */}
      <div
        ref={headingRef}
        className="relative w-full px-[clamp(1.25rem,5vw,4rem)] pt-[clamp(4rem,8vw,8rem)] pb-[clamp(3rem,6vw,5rem)]"
      >
        {/* Top label with line */}
        <div
          className={`flex items-center gap-4 mb-10 transition-all duration-700 ease-out ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
          }`}
        >
          <span
            className="font-mono text-[0.625rem] font-semibold tracking-[0.2em] uppercase"
            style={{ color: '#1a1a18' }}
          >
            SELECTED WORK
          </span>
          <div
            className="flex-1 h-px"
            style={{ backgroundColor: 'rgba(26,26,24,0.15)' }}
          />
        </div>

        {/* Massive heading */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-16">
          <div className="overflow-hidden">
            <h2
              className={`font-big-shoulders font-black uppercase leading-[0.85] tracking-[-0.03em] transition-all duration-1000 ease-out ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-[100%]'
              }`}
              style={{
                fontSize: 'clamp(4rem, 14vw, 12rem)',
                color: '#1a1a18',
              }}
            >
              {title}
            </h2>
          </div>

          {/* Description text aligned to bottom-right */}
          {subtitle && (
            <div
              className={`max-w-sm pb-2 transition-all duration-700 delay-300 ease-out ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
              }`}
            >
              <p
                className="font-mono text-[0.8125rem] leading-relaxed"
                style={{ color: '#5a5a54' }}
              >
                {subtitle}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* ── Projects ── */}
      <div className="px-[clamp(1.25rem,5vw,4rem)] pb-[clamp(4rem,8vw,8rem)]">
        <div className="flex flex-col gap-0">
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
          <div className="mt-16 md:mt-24 flex justify-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-3 font-mono text-xs font-semibold tracking-[0.15em] uppercase px-10 py-5 border rounded-sm transition-all duration-300 group"
              style={{
                color: '#1a1a18',
                borderColor: 'rgba(26,26,24,0.25)',
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
                e.currentTarget.style.borderColor = 'rgba(26,26,24,0.25)';
              }}
            >
              <span>VIEW ALL PROJECTS</span>
              <span className="transition-transform duration-200 group-hover:translate-x-1.5">
                →
              </span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
