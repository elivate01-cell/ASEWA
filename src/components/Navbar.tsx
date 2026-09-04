import { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const links = [
  { label: 'Collection', href: '#collection' },
  { label: 'Lookbook', href: '#lookbook' },
  { label: 'Story', href: '#lagos' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          scrolled ? 'bg-paper/90 backdrop-blur-md border-b border-ink/10' : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto flex max-w-edge items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
          {/* Wordmark */}
          <a href="#top" className="group flex items-baseline" aria-label="ÀṢẸ́WÀ home">
            <span className="font-display text-2xl leading-none tracking-tight sm:text-[26px]">
              ÀṢẸ́WÀ
            </span>
            <span className="ml-1 hidden text-[9px] font-semibold uppercase tracking-widest text-clay sm:inline">
              · LG
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-9 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="group relative text-[12px] font-semibold uppercase tracking-widest text-ink/80 transition-colors hover:text-ink"
                >
                  {l.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-clay transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a
            href="#collection"
            className="hidden items-center gap-1.5 bg-ink px-5 py-2.5 text-[11px] font-semibold uppercase tracking-widest text-paper transition-colors hover:bg-clay md:inline-flex"
          >
            Shop
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
          </a>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="flex h-10 w-10 items-center justify-center text-ink md:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" strokeWidth={2} />
          </button>
        </nav>
      </header>

      {/* Mobile full-screen menu */}
      <div
        className={`fixed inset-0 z-[60] bg-ink text-paper transition-opacity duration-400 md:hidden ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between px-5 py-4">
          <span className="font-display text-2xl tracking-tight">ÀṢẸ́WÀ</span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="flex h-10 w-10 items-center justify-center"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" strokeWidth={2} />
          </button>
        </div>

        <div className="flex flex-col px-5 pt-6">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="group flex items-baseline justify-between border-b border-paper/15 py-5"
              style={{
                opacity: open ? 1 : 0,
                transform: open ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.5s ease ${0.1 + i * 0.07}s, transform 0.5s cubic-bezier(0.16,1,0.3,1) ${0.1 + i * 0.07}s`,
              }}
            >
              <span className="font-display text-4xl tracking-tight">{l.label}</span>
              <span className="text-[11px] font-semibold uppercase tracking-widest text-paper/40">
                0{i + 1}
              </span>
            </a>
          ))}
        </div>

        <div className="absolute inset-x-0 bottom-0 px-5 pb-8">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-paper/40">
            Lagos, Nigeria
          </p>
          <a
            href="#collection"
            onClick={() => setOpen(false)}
            className="flex w-full items-center justify-center gap-2 bg-clay py-4 text-[12px] font-semibold uppercase tracking-widest text-paper"
          >
            Shop the Collection
            <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
          </a>
        </div>
      </div>
    </>
  );
}
