import { ReactNode } from 'react';

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
  as: Component = 'div',
}: PageContainerProps) {
  const baseClasses = 'w-full mx-auto px-[clamp(1.25rem,5vw,4rem)]';
  const variantClasses =
    variant === 'fullBleed'
      ? 'max-w-none px-0'
      : variant === 'narrow'
      ? 'max-w-[840px]'
      : 'max-w-[1440px]';

  const Element = Component as any;

  return (
    <Element className={`${baseClasses} ${variantClasses} ${className}`}>
      {children}
    </Element>
  );
}
