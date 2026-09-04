import { products } from '@/data/images';
import { Reveal } from '@/components/Reveal';
import { SectionLabel } from '@/components/SectionLabel';
import { ProductCard } from '@/components/ProductCard';

export function Collection() {
  return (
    <section id="collection" className="relative bg-ink py-20 text-paper sm:py-28 lg:py-32">
      {/* subtle adire dot texture in background */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] adire-dots" aria-hidden />

      <div className="relative mx-auto max-w-edge px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Reveal>
              <SectionLabel index="02" title="The Collection" tone="light" />
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-5 font-display text-6xl leading-[0.9] tracking-tight sm:text-7xl lg:text-8xl">
                SIX PIECES.<br />
                <span className="text-clay-400">ONE LAGOS.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={150}>
            <p className="max-w-xs text-sm leading-relaxed text-paper/60">
              Every piece is designed in Lagos and made in small runs. When it's gone, it's gone.
            </p>
          </Reveal>
        </div>

        {/* Grid */}
        <div className="mt-14 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
          {products.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 80}>
              <ProductCard product={p} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
