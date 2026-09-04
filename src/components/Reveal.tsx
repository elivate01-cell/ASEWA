import { type ReactNode } from 'react';
import { useReveal } from '@/hooks/useReveal';

interface RevealProps {
  children: ReactNode;
  className?: string;
  variant?: 'up' | 'clip';
  delay?: number;
  as?: 'div' | 'section' | 'span' | 'li' | 'figure' | 'figcaption';
}

/**
 * Wraps children with a scroll-triggered reveal animation.
 * Uses the `.reveal` / `.reveal-clip` utilities defined in index.css.
 */
export function Reveal({ children, className = '', variant = 'up', delay = 0, as = 'div' }: RevealProps) {
  const { ref, visible } = useReveal();
  const base = variant === 'clip' ? 'reveal-clip' : 'reveal';
  const Tag = as as 'div';

  return (
    <Tag
      ref={ref as never}
      className={`${base} ${visible ? 'is-visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
