import { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { img } from '@/data/images';

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const raf = useRef(0);

  useEffect(() => {
    const t = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(t);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (raf.current) return;
      raf.current = requestAnimationFrame(() => {
        setScrollY(window.scrollY);
        raf.current = 0;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const parallax = Math.min(scrollY * 0.35, 280);
  const fade = Math.max(0, 1 - scrollY / 600);

  return (
    <section id="top" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-ink">
      {/* Background image with masked reveal + parallax */}
      <div
        className="absolute inset-0"
        style={{
          transform: `translateY(${parallax}px) scale(1.08)`,
          transition: 'transform 0.05s linear',
        }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${img.hero})`,
            clipPath: mounted ? 'inset(0 0 0 0)' : 'inset(0 0 100% 0)',
            transition: 'clip-path 1.2s cubic-bezier(0.77, 0, 0.18, 1) 0.1s',
          }}
          aria-hidden
        />
        {/* Tonalal grade for legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-ink/40" />
        <div className="absolute inset-0 bg-ink/15" />
      </div>

      {/* Top metadata bar */}
      <div
        className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-5 pt-24 sm:px-8 sm:pt-28 lg:px-12"
        style={{ opacity: fade }}
      >
        <span
          className="text-[10px] font-semibold uppercase tracking-widest text-paper/70"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(-12px)',
            transition: 'all 0.8s ease 0.6s',
          }}
        >
          FW26 · Campaign
        </span>
        <span
          className="hidden text-[10px] font-semibold uppercase tracking-widest text-paper/70 sm:block"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(-12px)',
            transition: 'all 0.8s ease 0.7s',
          }}
        >
          Lagos · 6.5°N 3.4°E
        </span>
      </div>

      {/* Main headline — asymmetric, crossing the image */}
      <div className="absolute inset-0 z-10 flex flex-col justify-end px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24">
        <div className="max-w-edge">
          <p
            className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-clay-400"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateX(0)' : 'translateX(-30px)',
              transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1) 0.4s',
            }}
          >
            Contemporary Nigerian Fashion
          </p>

          <h1 className="font-display text-paper">
            <span className="block overflow-hidden">
              <span
                className="block text-[19vw] leading-[0.85] tracking-tightest sm:text-[16vw] lg:text-[13vw] xl:text-[180px]"
                style={{
                  transform: mounted ? 'translateY(0)' : 'translateY(105%)',
                  transition: 'transform 1s cubic-bezier(0.77, 0, 0.18, 1) 0.3s',
                }}
              >
                WEAR YOUR
              </span>
            </span>
            <span className="block overflow-hidden">
              <span
                className="block text-[19vw] leading-[0.85] tracking-tightest text-clay-400 sm:text-[16vw] lg:text-[13vw] xl:text-[180px]"
                style={{
                  transform: mounted ? 'translateY(0)' : 'translateY(105%)',
                  transition: 'transform 1s cubic-bezier(0.77, 0, 0.18, 1) 0.45s',
                }}
              >
                ROOTS.
              </span>
            </span>
          </h1>

          {/* Bottom row: descriptor + CTA */}
          <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <p
              className="max-w-xs text-sm leading-relaxed text-paper/80 sm:max-w-sm"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1) 0.8s',
              }}
            >
              Modern clothing from Lagos. Cut from culture, street, and sound — not tradition for tradition's sake.
            </p>

            <div
              className="flex items-center gap-4"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1) 0.95s',
              }}
            >
              <a
                href="#collection"
                className="group inline-flex items-center gap-2 bg-paper px-6 py-3.5 text-[11px] font-semibold uppercase tracking-widest text-ink transition-colors hover:bg-clay hover:text-paper"
              >
                Shop the Drop
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.5} />
              </a>
              <a
                href="#lookbook"
                className="group inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-paper/80 hover:text-paper"
              >
                Lookbook
                <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 items-center gap-2 text-paper/50 sm:flex"
        style={{ opacity: fade }}
      >
        <ArrowDown className="h-3.5 w-3.5 animate-bounce" strokeWidth={2} />
        <span className="text-[10px] font-semibold uppercase tracking-widest">Scroll</span>
      </div>
    </section>
  );
}
