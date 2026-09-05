import { ReactNode } from 'react';
import styles from './DisplayHeading.module.css';

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p';

interface DisplayHeadingProps {
  children: ReactNode;
  as?: HeadingTag;
  size?: 'sm' | 'md' | 'lg' | 'hero';
  edgeBleed?: boolean;
  className?: string;
}

export function DisplayHeading({
  children,
  as: Tag = 'h2',
  size = 'md',
  edgeBleed = false,
  className = '',
}: DisplayHeadingProps) {
  const classes = [
    styles.heading,
    styles[size],
    edgeBleed ? styles.edgeBleed : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <Tag className={classes}>{children}</Tag>;
}
