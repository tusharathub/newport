'use client';

import { useEffect, useRef } from 'react';

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const bottomLeftRef = useRef<HTMLDivElement>(null);
  const abstractRef = useRef<HTMLDivElement>(null);

  /* ── Scroll parallax — direct DOM updates, no React state ── */
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) return;

    let rafId = 0;
    let lastScrollY = 0;
    let ticking = false;

    const updateParallax = () => {
      const scrollY = lastScrollY;
      const vh = window.innerHeight;

      if (scrollY > vh * 1.2) {
        ticking = false;
        return;
      }

      const progress = scrollY / vh;

      if (nameRef.current) {
        const yShift = scrollY * -0.12;
        nameRef.current.style.transform = `translate3d(0, ${yShift}px, 0)`;
      }

      if (bottomLeftRef.current) {
        const fadeProgress = Math.max(0, 1 - progress * 1.8);
        bottomLeftRef.current.style.opacity = String(fadeProgress);
      }

      if (abstractRef.current) {
        const yShift = scrollY * -0.06;
        abstractRef.current.style.transform = `translate3d(0, ${yShift}px, 0)`;
      }

      ticking = false;
    };

    const onScroll = () => {
      lastScrollY = window.scrollY;
      if (!ticking) {
        rafId = requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen min-h-[100dvh] flex flex-col justify-between px-[clamp(1.25rem,5vw,4rem)] pt-[clamp(6rem,10vw,8rem)] pb-[clamp(2rem,4vw,4rem)] overflow-hidden bg-[#080909]"
      aria-label="Introduction"
    >
      {/* Top metadata */}
      <div className="flex justify-between items-start w-full opacity-0 animate-hero-fade">
        <span className="font-mono text-[0.6875rem] text-[#777871] tracking-[0.15em] uppercase font-medium">
          Tushar Nailwal
        </span>
        <span className="font-mono text-[0.6875rem] text-[#777871] tracking-[0.15em] uppercase font-medium">
          AI + Full-Stack Engineer
        </span>
      </div>

      {/* Name — Unbounded display graphic sequence */}
      <div
        className="my-auto py-8 w-full flex flex-col items-start select-none z-10"
        ref={nameRef}
      >
        <span className="block overflow-hidden w-full leading-none">
          <span className="block font-unbounded font-black text-[clamp(3.5rem,14vw,11.5rem)] leading-[0.85] text-[#e7e6df] tracking-[-0.06em] uppercase animate-hero-reveal">
            TUSHAR
          </span>
        </span>
        <span className="block overflow-hidden w-full leading-none -mt-[0.05em]">
          <span
            className="block font-unbounded font-black text-[clamp(3.5rem,14vw,11.5rem)] leading-[0.85] text-[#e7e6df] tracking-[-0.06em] uppercase animate-hero-reveal"
            style={{ animationDelay: '150ms' }}
          >
            NAILWAL
          </span>
        </span>
      </div>

      {/* Bottom row — identity left, metadata right */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end w-full z-10">
        <div className="opacity-0 animate-hero-fade flex flex-col gap-2 max-w-lg" style={{ animationDelay: '300ms' }} ref={bottomLeftRef}>
          <p className="font-body text-lg md:text-xl text-[#e7e6df] font-medium leading-snug">
            I build things that interest me — from AI applications and full-stack products to mobile apps.
          </p>
          <p className="font-body text-xs md:text-sm text-[#a1a29b] leading-relaxed">
            Full-stack software engineer moving deeper into AI. I learn by building, experimenting, and finishing what I start.
          </p>
        </div>

        <div className="flex flex-col md:items-end gap-2 opacity-0 animate-hero-fade" style={{ animationDelay: '400ms' }}>
          <div className="flex items-center gap-3 font-mono text-xs">
            <span className="text-[#777871]">01</span>
            <span className="text-[#a1a29b] uppercase tracking-wider">Based in India</span>
          </div>
          <div className="flex items-center gap-3 font-mono text-xs">
            <span className="text-[#777871]">02</span>
            <span className="text-[#a1a29b] uppercase tracking-wider">Building Software</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hidden md:flex flex-col items-center gap-2 absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-hero-fade" style={{ animationDelay: '500ms' }} aria-hidden="true">
        <span className="font-mono text-[0.625rem] text-[#555754] tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-[#e2e1da]/20" />
      </div>

      {/* Abstract orbital geometric element */}
      <div
        className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[320px] h-[320px] pointer-events-none opacity-20 hidden md:block"
        ref={abstractRef}
        aria-hidden="true"
      >
        <div className="relative w-full h-full border border-white/10 rounded-full animate-orbit">
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white/40 rounded-full" />
        </div>
        <div className="absolute top-1/2 left-0 right-0 h-px bg-white/5" />
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-white/30 rounded-full" />
      </div>
    </section>
  );
}
