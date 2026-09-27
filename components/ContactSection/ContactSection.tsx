'use client';

import { useEffect, useRef, useState } from 'react';
import { personalData } from '@/data/personal';

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
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
      id="contact"
      className="relative w-full min-h-[calc(100vh-56px)] overflow-hidden flex flex-col justify-between"
      style={{ backgroundColor: '#ef3e1d' }}
      aria-label="Contact"
    >
      {/* Top / Center Main Content */}
      <div className="px-[clamp(1.5rem,6vw,5rem)] pt-8 pb-4 flex-1 flex flex-col justify-center">
        <div className="flex flex-col gap-6 max-w-6xl">
          {/* Availability Badge */}
          {personalData.availability.enabled && (
            <div
              className={`inline-flex items-center gap-2.5 font-mono text-[11px] font-bold px-4 py-1.5 rounded-sm tracking-[0.15em] uppercase w-fit transition-all duration-700 ease-out ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
              style={{
                color: '#1a1a18',
                border: '1px solid rgba(26,26,24,0.3)',
              }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: '#1a1a18' }}
              />
              <span>{personalData.availability.label}</span>
            </div>
          )}

          {/* Dramatic Heading */}
          <div className="overflow-hidden">
            <h2
              className={`font-big-shoulders font-black uppercase leading-[0.85] tracking-[-0.03em] transition-all duration-1000 ease-out ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-[100%]'
              }`}
              style={{
                fontSize: 'clamp(3.5rem, 11vh, 8.5rem)',
                color: '#1a1a18',
              }}
            >
              LET&apos;S BUILD
              <br />
              SOMETHING WORTH
              <br />
              SHIPPING.
            </h2>
          </div>

          {/* Description */}
          <p
            className={`font-body text-lg md:text-xl lg:text-2xl max-w-2xl leading-relaxed transition-all duration-700 delay-200 ease-out ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-6'
            }`}
            style={{ color: 'rgba(26,26,24,0.8)' }}
          >
            Open to considered collaborations and conversations concerning
            matters worth bringing into being.
          </p>

          {/* CTA + Links */}
          <div
            className={`flex flex-wrap items-center gap-6 pt-2 transition-all duration-700 delay-300 ease-out ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-6'
            }`}
          >
            {/* Primary Email CTA */}
            <a
              href={`mailto:${personalData.email}`}
              className="inline-flex items-center gap-3 px-8 py-4 font-mono text-sm font-bold tracking-[0.12em] uppercase rounded-sm transition-all duration-300 group"
              style={{
                backgroundColor: '#1a1a18',
                color: '#ef3e1d',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#000';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#1a1a18';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span>SAY HELLO</span>
              <span className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </a>

            {/* Secondary Links */}
            <div
              className="flex items-center gap-6 font-mono text-sm font-bold tracking-[0.12em] uppercase"
              style={{ color: 'rgba(26,26,24,0.75)' }}
            >
              {personalData.github && (
                <a
                  href={personalData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-200 hover:text-[#1a1a18]"
                >
                  GITHUB
                </a>
              )}
              {personalData.linkedin && (
                <a
                  href={personalData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-200 hover:text-[#1a1a18]"
                >
                  LINKEDIN
                </a>
              )}
              {personalData.resume && (
                <a
                  href={personalData.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-200 hover:text-[#1a1a18]"
                >
                  RESUME
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
