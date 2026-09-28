'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Project } from '@/types/project';

interface WorkSectionProps {
  projects: Project[];
  title?: string;
  subtitle?: string;
  showViewAll?: boolean;
}

// Curated rich color palette for project row hovers (Fedrigoni style)
const ROW_COLORS = [
  { bg: '#4a154b', text: '#ffffff', subtext: 'rgba(255,255,255,0.7)' }, // Deep Purple
  { bg: '#c41230', text: '#ffffff', subtext: 'rgba(255,255,255,0.7)' }, // Crimson Red
  { bg: '#1d5238', text: '#ffffff', subtext: 'rgba(255,255,255,0.7)' }, // Forest Green
  { bg: '#0f3c5c', text: '#ffffff', subtext: 'rgba(255,255,255,0.7)' }, // Deep Cobalt Blue
];

export function WorkSection({
  projects,
  title = 'SELECTED WORK',
  showViewAll = true,
}: WorkSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  // Active & Previous project state for cross-fade overlap effect
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);
  const [prevProjectId, setPrevProjectId] = useState<string | null>(null);
  const [activeColor, setActiveColor] = useState<typeof ROW_COLORS[0] | null>(null);

  // Section-relative mouse position
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);
  const stillTimer = useRef<NodeJS.Timeout | null>(null);
  const prevTimer = useRef<NodeJS.Timeout | null>(null);

  // Scroll offset for scroll-driven text translation
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollOffset(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSectionMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePos({ x, y });

    // Stillness detection: card hides when mouse stops moving for 180ms
    setIsMoving(true);
    if (stillTimer.current) clearTimeout(stillTimer.current);
    stillTimer.current = setTimeout(() => {
      setIsMoving(false);
    }, 180);
  };

  const handleMouseEnterRow = (project: Project, index: number) => {
    if (activeProjectId && activeProjectId !== project.id) {
      setPrevProjectId(activeProjectId);
      if (prevTimer.current) clearTimeout(prevTimer.current);
      prevTimer.current = setTimeout(() => {
        setPrevProjectId(null);
      }, 500); // 500ms slow fade out for previous image
    }
    setActiveProjectId(project.id);
    setActiveColor(ROW_COLORS[index % ROW_COLORS.length]);
  };

  const handleMouseLeaveSection = () => {
    setPrevProjectId(activeProjectId);
    setActiveProjectId(null);
    setActiveColor(null);
    setIsMoving(false);
    if (prevTimer.current) clearTimeout(prevTimer.current);
    prevTimer.current = setTimeout(() => {
      setPrevProjectId(null);
    }, 500);
  };

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative w-full overflow-hidden select-none"
      style={{ backgroundColor: '#ffffff' }}
      onMouseMove={handleSectionMouseMove}
      onMouseLeave={handleMouseLeaveSection}
      aria-label={title}
    >
      {/* ── Section Header ── */}
      <div className="px-[clamp(1.25rem,5vw,4rem)] pt-16 pb-8 border-b border-[#1a1a18]/15 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="font-mono text-xs font-semibold tracking-[0.2em] uppercase text-[#1a1a18]">
            {title}
          </span>
          <div className="w-12 h-px bg-[#1a1a18]/25" />
        </div>
        <span className="font-mono text-xs text-[#5a5a54]">
          (HOVER TO EXPLORE)
        </span>
      </div>

      {/* ── Interactive Fedrigoni-Style Project Table ── */}
      <div className="w-full flex flex-col divide-y divide-[#1a1a18]/15 border-b border-[#1a1a18]/15">
        {projects.map((project, index) => {
          const isCurrentHovered = activeProjectId === project.id;
          const rowColor = ROW_COLORS[index % ROW_COLORS.length];
          const projectHref = `/work/${project.slug}`;

          // Calculate alternating scroll translation for text rows
          const directionMultiplier = index % 2 === 0 ? 1 : -1;
          const textX = (scrollOffset * 0.15 * directionMultiplier) % 200;

          return (
            <div
              key={project.id}
              className="relative w-full h-[180px] md:h-[220px] overflow-hidden cursor-pointer transition-colors duration-500 ease-out group"
              style={{
                color: isCurrentHovered ? rowColor.text : '#1a1a18',
              }}
              onMouseEnter={() => handleMouseEnterRow(project, index)}
            >
              {/* ── Visibly Expanding Fill Color Layer ── */}
              <div
                className="absolute inset-0 pointer-events-none transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] origin-bottom"
                style={{
                  backgroundColor: rowColor.bg,
                  transform: isCurrentHovered ? 'scaleY(1)' : 'scaleY(0)',
                }}
              />

              <Link
                href={projectHref}
                className="relative z-10 block w-full h-full py-8 md:py-10 px-[clamp(1.25rem,5vw,4rem)] flex flex-col justify-between"
              >
                {/* Category label top left of row */}
                <div
                  className="font-mono text-xs uppercase tracking-[0.15em] transition-colors duration-300"
                  style={{
                    color: isCurrentHovered ? rowColor.subtext : '#777871',
                  }}
                >
                  {project.category}
                </div>

                {/* Scroll-driven moving text row */}
                <div
                  className="flex items-baseline gap-12 whitespace-nowrap transition-transform duration-100 ease-linear"
                  style={{
                    transform: `translate3d(${textX}px, 0, 0)`,
                  }}
                >
                  <h3 className="font-body text-3xl md:text-5xl lg:text-6xl font-normal tracking-tight">
                    {project.title}
                  </h3>
                  <span className="text-2xl opacity-40">/</span>
                  <p className="font-body text-xl md:text-3xl font-light italic opacity-85">
                    {project.description}
                  </p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>

      {/* ── Floating Preview Images (Clipped into target row with vertical split slide) ── */}
      <div
        className="pointer-events-none absolute top-0 left-0 z-30 transition-opacity duration-300 ease-out"
        style={{
          transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0) translate(-50%, -50%)`,
          opacity: isMoving && (activeProjectId || prevProjectId) ? 1 : 0,
        }}
      >
        <div className="relative w-[300px] md:w-[400px] h-[180px] md:h-[220px] rounded-sm overflow-hidden shadow-2xl border border-white/10 bg-[#1a1a18]">
          {projects.map((project, index) => {
            const isCurrent = activeProjectId === project.id;
            const isPrev = prevProjectId === project.id;

            if (!isCurrent && !isPrev) return null;

            const rowColor = ROW_COLORS[index % ROW_COLORS.length];

            return (
              <div
                key={project.id}
                className="absolute inset-0 p-2 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
                style={{
                  opacity: isCurrent ? 1 : 0.4,
                  transform: isCurrent
                    ? 'translateY(0%) scale(1)'
                    : 'translateY(15%) scale(0.95)',
                  zIndex: isCurrent ? 2 : 1,
                }}
              >
                <div className="w-full h-full bg-[#252623] rounded-xs flex flex-col items-center justify-center p-4 text-center relative overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-40 transition-colors duration-500"
                    style={{ backgroundColor: rowColor.bg }}
                  />
                  <div className="relative z-10 flex flex-col items-center gap-2">
                    <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-[#a1a29b] px-3 py-1 bg-black/60 rounded-full border border-white/10">
                      {project.category}
                    </span>
                    <span className="font-big-shoulders text-3xl md:text-4xl font-black uppercase text-[#e7e6df] tracking-tight leading-none">
                      {project.title}
                    </span>
                    <span className="font-mono text-[10px] text-[#a1a29b] font-medium pt-1">
                      CLICK TO OPEN ↗
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Optional View All Button ── */}
      {showViewAll && (
        <div className="py-16 flex justify-center border-t border-[#1a1a18]/15">
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
    </section>
  );
}
