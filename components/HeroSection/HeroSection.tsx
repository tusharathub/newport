'use client';

import { useEffect, useRef } from 'react';
import styles from './HeroSection.module.css';

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

      // Only apply parallax while hero is in view
      if (scrollY > vh * 1.2) {
        ticking = false;
        return;
      }

      const progress = scrollY / vh; // 0 at top, 1 at one viewport scrolled

      // Name shifts upward slightly
      if (nameRef.current) {
        const yShift = scrollY * -0.12;
        nameRef.current.style.transform = `translate3d(0, ${yShift}px, 0)`;
      }

      // Supporting text fades out
      if (bottomLeftRef.current) {
        const fadeProgress = Math.max(0, 1 - progress * 1.8);
        bottomLeftRef.current.style.opacity = String(fadeProgress);
      }

      // Abstract element moves at different rate
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
    <section ref={heroRef} className={styles.hero} aria-label="Introduction">
      {/* Top metadata */}
      <div className={styles.topMeta}>
        <span className={styles.topMetaLabel}>Tushar Nailwal</span>
        <span className={styles.topMetaLabel}>AI + Full-Stack Engineer</span>
      </div>

      {/* Name — the dominant visual object */}
      <div className={styles.nameBlock} ref={nameRef}>
        <span className={styles.nameLine}>
          <span className={styles.nameText}>TUSHAR</span>
        </span>
        <span className={styles.nameLine}>
          <span className={styles.nameText}>NAILWAL</span>
        </span>
      </div>

      {/* Bottom row — identity left, metadata right */}
      <div className={styles.bottomRow}>
        <div className={styles.bottomLeft} ref={bottomLeftRef}>
          <p className={styles.identity}>
            I build things — AI applications,
            <br />
            full-stack products, and software
            <br />
            that works.
          </p>
        </div>

        <div className={styles.bottomRight}>
          <div className={styles.metaBlock}>
            <span className={styles.metaIndex}>01</span>
            <span className={styles.metaValue}>Based in India</span>
          </div>
          <div className={styles.metaBlock}>
            <span className={styles.metaIndex}>02</span>
            <span className={styles.metaValue}>Building Software</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator} aria-hidden="true">
        <span className={styles.scrollText}>Scroll</span>
        <div className={styles.scrollLine} />
      </div>

      {/* Abstract geometric element — secondary, noticed on second look */}
      <div className={styles.abstractElement} ref={abstractRef} aria-hidden="true">
        <div className={styles.orbitalRing}>
          <div className={styles.orbitalDot} />
        </div>
        <div className={styles.crosshairH} />
        <div className={styles.crosshairV} />
        <div className={styles.centerDot} />
      </div>
    </section>
  );
}
