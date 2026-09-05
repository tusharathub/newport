import { ReactNode } from 'react';
import styles from './PageContainer.module.css';

interface PageContainerProps {
  children: ReactNode;
  variant?: 'default' | 'fullBleed' | 'narrow';
  className?: string;
  as?: keyof HTMLElementTagNameMap;
}

export function PageContainer({
  children,
  variant = 'default',
  className = '',
  as: Tag = 'div',
}: PageContainerProps) {
  const classes = [
    styles.container,
    variant === 'fullBleed' ? styles.fullBleed : '',
    variant === 'narrow' ? styles.narrow : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <Tag className={classes}>{children}</Tag>;
}
