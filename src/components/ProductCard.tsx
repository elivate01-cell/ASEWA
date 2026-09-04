import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { type Product, formatNaira } from '@/data/images';

interface ProductCardProps {
  product: Product;
  index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  const [hovered, setHovered] = useState(false);
  const [activeColor, setActiveColor] = useState(0);

  return (
    <article
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[4/5] overflow-hidden bg-ink/5">
        <img
          src={product.image}
          alt={product.name}
          className="absolute inset-0 h-full w-full object-cover transition-all duration-700"
          style={{
            opacity: hovered ? 0 : 1,
            transform: hovered ? 'scale(1.04)' : 'scale(1)',
          }}
          loading="lazy"
        />
        <img
          src={product.hoverImage}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover transition-all duration-700"
          style={{
            opacity: hovered ? 1 : 0,
            transform: hovered ? 'scale(1)' : 'scale(1.04)',
          }}
          loading="lazy"
        />

        {/* Label */}
        {product.label && (
          <span
            className={`absolute left-3 top-3 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-widest transition-colors ${
              product.label === 'New' ? 'bg-clay text-paper' : 'bg-ink text-paper'
            }`}
          >
            {product.label}
          </span>
        )}

        {/* Index */}
        <span className="absolute right-3 top-3 font-display text-sm text-paper mix-blend-difference">
          0{index + 1}
        </span>

        {/* Quick view */}
        <div
          className="absolute inset-x-0 bottom-0 translate-y-full bg-ink/90 px-4 py-3 transition-transform duration-500 group-hover:translate-y-0"
        >
          <span className="flex items-center justify-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest text-paper">
            View Piece <ArrowUpRight className="h-3 w-3" strokeWidth={2.5} />
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-base font-semibold leading-tight">{product.name}</h3>
          <p className="mt-0.5 text-xs text-ink/55">{product.descriptor}</p>
        </div>
        <p className="shrink-0 text-sm font-semibold tabular-nums">{formatNaira(product.price)}</p>
      </div>

      {/* Color dots */}
      <div className="mt-3 flex items-center gap-2">
        {product.colors.map((c, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActiveColor(i)}
            aria-label={`Color ${i + 1}`}
            className="h-4 w-4 rounded-full border transition-all"
            style={{
              backgroundColor: c,
              borderColor: activeColor === i ? '#0B0B0B' : 'rgba(11,11,11,0.2)',
              transform: activeColor === i ? 'scale(1.15)' : 'scale(1)',
            }}
          />
        ))}
      </div>
    </article>
  );
}
