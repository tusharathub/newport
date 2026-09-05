'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './TransitionBridge.module.css';

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
      className={`${styles.bridge} ${visible ? styles.visible : ''}`}
      aria-hidden="true"
    >
      <p className={styles.text}>
        THINGS I&rsquo;VE BUILT
      </p>
    </div>
  );
}
