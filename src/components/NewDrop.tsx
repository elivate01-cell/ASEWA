import { ArrowUpRight } from 'lucide-react';
import { img } from '@/data/images';
import { Reveal } from '@/components/Reveal';
import { SectionLabel } from '@/components/SectionLabel';

export function NewDrop() {
  return (
    <section className="relative bg-paper py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-edge px-5 sm:px-8 lg:px-12">
        <Reveal>
          <SectionLabel index="01" title="New Drop" />
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Image */}
          <Reveal variant="clip" className="lg:col-span-7">
            <div className="relative aspect-[4/5] overflow-hidden bg-ink/5 sm:aspect-[5/4] lg:aspect-[4/5]">
              <img
                src={img.newDrop}
                alt="Model wearing the Ìdàárò collection — red dress on urban steps"
                className="h-full w-full object-cover transition-transform duration-[1.4s] hover:scale-105"
                loading="lazy"
              />
              <span className="absolute left-5 top-5 bg-ink px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-paper">
                Just Dropped
              </span>
            </div>
          </Reveal>

          {/* Text */}
          <div className="flex flex-col justify-center lg:col-span-5">
            <Reveal delay={100}>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-clay">
                Collection · 03
              </p>
            </Reveal>
            <Reveal delay={150}>
              <h2 className="mt-4 font-display text-6xl leading-[0.9] tracking-tight sm:text-7xl lg:text-8xl">
                ÌDÀÁRÒ
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 max-w-md text-base leading-relaxed text-ink/75">
                Means "the gathering." Pieces built for how Lagos actually moves —
                from morning meetings on the Island to midnight hangs on the Mainland.
                Heavyweight cotton, hand-dyed indigo panels, cuts that breathe.
              </p>
            </Reveal>

            <Reveal delay={250}>
              <dl className="mt-8 grid grid-cols-2 gap-4 border-y border-ink/10 py-6 text-sm">
                <div>
                  <dt className="text-[10px] font-semibold uppercase tracking-widest text-ink/40">Released</dt>
                  <dd className="mt-1 font-medium">Aug 2026</dd>
                </div>
                <div>
                  <dt className="text-[10px] font-semibold uppercase tracking-widest text-ink/40">Pieces</dt>
                  <dd className="mt-1 font-medium">14 styles</dd>
                </div>
                <div>
                  <dt className="text-[10px] font-semibold uppercase tracking-widest text-ink/40">From</dt>
                  <dd className="mt-1 font-medium">₦26,000</dd>
                </div>
                <div>
                  <dt className="text-[10px] font-semibold uppercase tracking-widest text-ink/40">Made in</dt>
                  <dd className="mt-1 font-medium">Lagos</dd>
                </div>
              </dl>
            </Reveal>

            <Reveal delay={300}>
              <a
                href="#collection"
                className="group mt-8 inline-flex items-center gap-2 bg-ink px-7 py-3.5 text-[11px] font-semibold uppercase tracking-widest text-paper transition-colors hover:bg-clay"
              >
                View the Collection
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.5} />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
