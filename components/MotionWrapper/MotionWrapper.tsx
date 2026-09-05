'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';
import styles from './MotionWrapper.module.css';

interface MotionWrapperProps {
  children: ReactNode;
  variant?: 'fadeUp' | 'fadeIn' | 'clipReveal';
  delay?: 0 | 1 | 2 | 3 | 4 | 5;
  threshold?: number;
  className?: string;
  as?: keyof HTMLElementTagNameMap;
}

export function MotionWrapper({
  children,
  variant = 'fadeUp',
  delay = 0,
  threshold = 0.15,
  className = '',
  as: Tag = 'div',
}: MotionWrapperProps) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [threshold]);

  const classes = [
    styles.wrapper,
    styles[variant],
    isVisible ? styles.visible : '',
    delay > 0 ? styles[`delay${delay}`] : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    // @ts-expect-error — dynamic tag element
    <Tag ref={ref} className={classes}>
      {children}
    </Tag>
  );
}
