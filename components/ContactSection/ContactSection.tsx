'use client';

import { useEffect, useRef, useState } from 'react';
import { personalData } from '@/data/personal';
import DitherVeil from '@/components/DitherVeil/DitherVeil';
import FolderFloat from '@/components/FolderFloat/FolderFloat';

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
      className="relative w-full overflow-hidden flex flex-col justify-center py-16 md:py-20"
      style={{ backgroundColor: '#ef3e1d' }}
      aria-label="Contact"
    >
      {/* Top / Center Main Content */}
      <div className="px-[clamp(1.5rem,6vw,5rem)] pt-8 pb-4 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-7xl w-full">
          {/* Left Column - Contact Text & Links + FolderFloat */}
          <div className="lg:col-span-7 flex flex-col gap-5 justify-between">
            <div className="flex flex-col gap-4">
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
                    fontSize: 'clamp(2.75rem, 5.5vw, 5.5rem)',
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
                className={`font-body text-sm md:text-base lg:text-lg max-w-xl leading-relaxed transition-all duration-700 delay-200 ease-out ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-6'
                }`}
                style={{ color: 'rgba(26,26,24,0.8)' }}
              >
                Open to considered collaborations and conversations concerning
                matters worth bringing into being.
              </p>
            </div>

            {/* Bottom Row - Folder Float & Secondary Links */}
            <div
              className={`flex flex-wrap items-end justify-between gap-6 pt-12 transition-all duration-700 delay-300 ease-out ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
              }`}
            >
              {/* FolderFloat component in bottom left */}
              <FolderFloat
                items={[
                  { label: 'GITHUB', value: personalData.github },
                  { label: 'LINKEDIN', value: personalData.linkedin },
                  { label: 'RESUME', value: personalData.resume },
                ]}
                label="LINKS & SOCIALS"
                sublabel="3 links"
                folderColor="#1a1a18"
                frontColor="#252623"
                paperColor="#e7e6df"
                itemColor="#e7e6df"
                itemTextColor="#1a1a18"
                labelColor="#e7e6df"
                width={180}
                height={130}
                lift={16}
                spread={140}
              />

              {/* Secondary Links */}
              <div
                className="flex items-center gap-6 font-mono text-sm font-bold tracking-[0.12em] uppercase pb-4"
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

          {/* Right Column - Interactive DitherVeil */}
          <div className="lg:col-span-5 h-[340px] sm:h-[420px] w-full rounded-sm overflow-hidden border border-[#1a1a18]/20 shadow-lg">
            <DitherVeil
              src="https://images.unsplash.com/photo-1737071371043-761e02b1ef95?q=80&w=1400&auto=format&fit=crop"
              pattern="floyd"
              pixelSize={1}
              inkColor="#ef3e1d"
              paperColor="#1a1a18"
              revealRadius={200}
              softness={0.6}
              linger={1}
              rim={0.42}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
