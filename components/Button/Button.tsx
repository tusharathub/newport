import { ReactNode, ElementType } from 'react';
import styles from './Button.module.css';

interface ButtonBaseProps {
  children: ReactNode;
  variant?: 'primary' | 'ghost';
  arrow?: boolean;
  className?: string;
}

interface ButtonAsButton extends ButtonBaseProps {
  as?: 'button';
  href?: never;
  target?: never;
  rel?: never;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

interface ButtonAsLink extends ButtonBaseProps {
  as: 'a';
  href: string;
  target?: string;
  rel?: string;
  onClick?: never;
  type?: never;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  children,
  variant = 'primary',
  arrow = false,
  className = '',
  as = 'button',
  ...rest
}: ButtonProps) {
  const Tag = as as ElementType;

  const classes = [
    styles.button,
    variant === 'ghost' ? styles.ghost : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag className={classes} {...rest}>
      {children}
      {arrow && <span className={styles.arrow}>↗</span>}
    </Tag>
  );
}
