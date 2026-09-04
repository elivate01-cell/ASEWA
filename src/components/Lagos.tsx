import { img } from '@/data/images';
import { Reveal } from '@/components/Reveal';
import { SectionLabel } from '@/components/SectionLabel';
import { useScrollProgress } from '@/hooks/useScrollProgress';

const pillars = [
  { k: 'Streets', v: 'Danfo routes, market noise, the Mainland-Island commute.' },
  { k: 'Sound', v: 'Afrobeats, Fuji, Alté — the soundtrack we cut to.' },
  { k: 'Art', v: 'Yaba creatives, Onikan galleries, wall murals.' },
  { k: 'Everyday', v: 'The way Lagos dresses without trying.' },
];

export function Lagos() {
  const { ref, progress } = useScrollProgress<HTMLDivElement>();
  const shift = (progress - 0.5) * 60; // -30 → 30

  return (
    <section id="lagos" className="relative overflow-hidden bg-paper py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-edge px-5 sm:px-8 lg:px-12">
        <Reveal>
          <SectionLabel index="03" title="From Lagos" />
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: big image with parallax */}
          <div ref={ref} className="lg:col-span-7">
            <Reveal variant="clip">
              <div className="relative aspect-[4/5] overflow-hidden bg-ink/5 sm:aspect-[3/4]">
                <div
                  className="absolute inset-x-0 -top-[15%] h-[130%] bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${img.lagosDanfo})`,
                    transform: `translateY(${shift}px)`,
                  }}
                  aria-hidden
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
                <span className="absolute bottom-5 left-5 font-display text-2xl text-paper">
                  Danfo · CMS
                </span>
              </div>
            </Reveal>

            {/* secondary smaller image */}
            <Reveal variant="clip" delay={150} className="mt-4">
              <div className="relative aspect-[16/9] overflow-hidden bg-ink/5">
                <img
                  src={img.lagosNight}
                  alt="Lagos nightlife — city lights and traffic"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <span className="absolute bottom-4 left-4 font-display text-xl text-paper">
                  Night · VI
                </span>
              </div>
            </Reveal>
          </div>

          {/* Right: copy + pillars */}
          <div className="flex flex-col lg:col-span-5">
            <Reveal>
              <h2 className="font-display text-6xl leading-[0.88] tracking-tight sm:text-7xl lg:text-8xl">
                FROM<br />
                <span className="text-clay">LAGOS.</span>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/80">
                We're not inspired by Lagos. We're <em className="not-italic font-semibold">made</em> by it.
                The traffic, the noise, the hustle, the style — it's all in the cut.
              </p>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-4 max-w-md text-base leading-relaxed text-ink/65">
                Every collection starts on a street, in a studio, or at a show in this city.
                This is where the brand breathes.
              </p>
            </Reveal>

            <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden border border-ink/10 sm:grid-cols-2">
              {pillars.map((p, i) => (
                <Reveal key={p.k} delay={i * 70}>
                  <div className="bg-paper p-5">
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-clay">
                      {p.k}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-ink/70">{p.v}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
