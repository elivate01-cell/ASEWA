import { type ReactNode } from 'react';

type Variant = 'solid' | 'outline' | 'ghost';

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  href?: string;
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
}

const variants: Record<Variant, string> = {
  solid: 'bg-ink text-paper hover:bg-clay',
  outline: 'border border-ink/30 text-ink hover:bg-ink hover:text-paper',
  ghost: 'text-ink hover:text-clay',
};

export function Button({ children, variant = 'solid', href, onClick, className = '', ariaLabel }: ButtonProps) {
  const cls = `group inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[11px] font-semibold uppercase tracking-widest transition-colors duration-300 ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={cls} aria-label={ariaLabel}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" onClick={onClick} className={cls} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
