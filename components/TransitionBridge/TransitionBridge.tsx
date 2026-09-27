'use client';

import { useEffect, useRef, useState } from 'react';

export function TransitionBridge() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -80px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="relative overflow-hidden"
      style={{ backgroundColor: '#ece8e1' }}
      aria-hidden="true"
    >

      <div
        className={`relative pt-40 pb-[clamp(2rem,4vw,4rem)] px-[clamp(1.25rem,5vw,4rem)] transition-all duration-700 ease-out ${
          visible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
        }`}
      >
        <p
          className="font-big-shoulders font-black text-[clamp(2.5rem,8vw,6rem)] leading-tight tracking-[-0.04em] select-none uppercase"
          style={{ color: 'rgba(26,26,24,0.08)' }}
        >
          THINGS I&rsquo;VE BUILT
        </p>
      </div>
    </div>
  );
}
