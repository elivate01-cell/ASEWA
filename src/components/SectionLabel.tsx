interface SectionLabelProps {
  index: string;
  title: string;
  className?: string;
  tone?: 'dark' | 'light';
}

export function SectionLabel({ index, title, className = '', tone = 'dark' }: SectionLabelProps) {
  const color = tone === 'light' ? 'text-paper/60' : 'text-ink/50';
  return (
    <div className={`flex items-center gap-3 text-[11px] font-semibold uppercase tracking-widest ${color} ${className}`}>
      <span className="font-display text-base tracking-normal">{index}</span>
      <span className="h-px w-8 bg-current opacity-40" />
      <span>{title}</span>
    </div>
  );
}
