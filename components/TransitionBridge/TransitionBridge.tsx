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
      className={`relative py-[clamp(4rem,8vw,8rem)] px-[clamp(1.25rem,5vw,4rem)] border-t border-[#e2e1da]/10 overflow-hidden transition-all duration-700 cubic-bezier(0.16,1,0.3,1) ${
        visible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      }`}
      aria-hidden="true"
    >
      <p className="font-bold text-[clamp(2.5rem,8vw,6rem)] leading-tight tracking-[-0.04em] text-[#555754]/40 select-none">
        THINGS I&rsquo;VE BUILT
      </p>
    </div>
  );
}
