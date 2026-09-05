import { ReactNode } from 'react';
import styles from './Section.module.css';

interface SectionProps {
  children: ReactNode;
  variant?: 'default' | 'compact' | 'expanded' | 'hero';
  bordered?: boolean;
  id?: string;
  className?: string;
}

export function Section({
  children,
  variant = 'default',
  bordered = false,
  id,
  className = '',
}: SectionProps) {
  const classes = [
    styles.section,
    variant !== 'default' ? styles[variant] : '',
    bordered ? styles.bordered : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <section id={id} className={classes}>
      {children}
    </section>
  );
}
