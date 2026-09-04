import { useEffect, useRef, useState } from 'react';
import { lookbook, type LookbookShot } from '@/data/images';
import { SectionLabel } from '@/components/SectionLabel';
import { Reveal } from '@/components/Reveal';

const spanClass: Record<LookbookShot['span'], string> = {
  tall: 'h-[520px] sm:h-[640px] lg:h-[680px]',
  wide: 'h-[340px] sm:h-[440px] lg:h-[480px]',
  standard: 'h-[420px] sm:h-[520px] lg:h-[560px]',
  full: 'h-[300px] sm:h-[400px] lg:h-[440px]',
};

export function Lookbook() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [translate, setTranslate] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;
    const wrap = wrapRef.current;
    const track = trackRef.current;
    if (!wrap || !track) return;
    let raf = 0;

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const rect = wrap.getBoundingClientRect();
        const vh = window.innerHeight;
        // progress through the sticky section
        const total = wrap.offsetHeight - vh;
        const scrolled = Math.min(Math.max(-rect.top, 0), total);
        const p = total > 0 ? scrolled / total : 0;
        const maxX = track.scrollWidth - window.innerWidth + 48;
        setTranslate(-p * maxX);
      });
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [isDesktop]);

  return (
    <section id="lookbook" className="relative bg-ink text-paper">
      {/* Desktop: sticky horizontal */}
      {isDesktop ? (
        <div ref={wrapRef} className="relative" style={{ height: '320vh' }}>
          <div className="sticky top-0 flex h-screen flex-col overflow-hidden">
            <div className="mx-auto flex w-full max-w-edge items-end justify-between px-12 pt-28 pb-6">
              <SectionLabel index="04" title="Lookbook" tone="light" />
              <p className="text-[11px] font-semibold uppercase tracking-widest text-paper/40">
                Ìdàárò · FW26
              </p>
            </div>

            <div className="relative flex-1 overflow-hidden">
              <div
                ref={trackRef}
                className="flex h-full items-end gap-6 px-12"
                style={{ transform: `translateX(${translate}px)` }}
              >
                {lookbook.map((shot) => (
                  <figure
                    key={shot.id}
                    className={`relative shrink-0 ${spanClass[shot.span]} w-[320px] lg:w-[380px]`}
                  >
                    <img
                      src={shot.image}
                      alt={shot.caption}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                    <figcaption className="absolute bottom-3 left-3 text-[10px] font-semibold uppercase tracking-widest text-paper/90">
                      {shot.caption}
                    </figcaption>
                  </figure>
                ))}
                {/* end card */}
                <div className="flex h-[480px] w-[280px] shrink-0 flex-col justify-end">
                  <p className="font-display text-5xl leading-none tracking-tight text-paper">
                    End<br />of reel.
                  </p>
                  <a
                    href="#collection"
                    className="mt-6 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-clay-400 hover:text-paper"
                  >
                    Shop the looks →
                  </a>
                </div>
              </div>
            </div>

            {/* progress bar */}
            <div className="mx-auto h-px w-full max-w-edge bg-paper/10">
              <div
                className="h-px bg-clay transition-all duration-100"
                style={{ width: `${Math.min(100, (Math.abs(translate) / Math.max(1, (trackRef.current?.scrollWidth ?? 1) - window.innerWidth + 48)) * 100)}%` }}
              />
            </div>
          </div>
        </div>
      ) : (
        /* Mobile: vertical stacked gallery */
        <div className="py-20">
          <div className="px-5">
            <SectionLabel index="04" title="Lookbook" tone="light" />
            <h2 className="mt-5 font-display text-6xl leading-[0.9] tracking-tight">
              THE REEL.
            </h2>
          </div>

          <div className="mt-10 flex flex-col gap-4 px-5">
            {lookbook.map((shot) => (
              <Reveal key={shot.id} variant="clip">
                <figure className={`relative ${spanClass[shot.span]} w-full`}>
                  <img
                    src={shot.image}
                    alt={shot.caption}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <figcaption className="absolute bottom-3 left-3 text-[10px] font-semibold uppercase tracking-widest text-paper">
                    {shot.caption}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 px-5">
            <a
              href="#collection"
              className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-clay-400"
            >
              Shop the looks →
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
