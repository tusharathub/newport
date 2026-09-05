import { ReactNode } from 'react';

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
  let paddingClass = 'py-[clamp(4rem,8vw,8rem)]';

  if (variant === 'compact') {
    paddingClass = 'py-[clamp(2rem,4vw,4rem)]';
  } else if (variant === 'expanded') {
    paddingClass = 'py-[clamp(6rem,12vw,12rem)]';
  } else if (variant === 'hero') {
    paddingClass = 'pt-[clamp(6rem,12vw,10rem)] pb-[clamp(3rem,6vw,6rem)]';
  }

  const borderClass = bordered ? 'border-t border-[rgba(226,225,218,0.1)]' : '';

  return (
    <section
      id={id}
      className={`relative w-full px-[clamp(1.25rem,5vw,4rem)] ${paddingClass} ${borderClass} ${className}`}
    >
      {children}
    </section>
  );
}
