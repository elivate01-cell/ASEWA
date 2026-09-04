import { useState } from 'react';
import { ArrowUpRight, Instagram, Mail, MapPin, MessageCircle } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const nav = [
  { label: 'Collection', href: '#collection' },
  { label: 'Lookbook', href: '#lookbook' },
  { label: 'Story', href: '#lagos' },
  { label: 'Contact', href: '#contact' },
];

function TikTokIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M16.5 3c.3 2.1 1.5 3.6 3.5 3.9v2.6c-1.3.1-2.5-.3-3.6-.9v6.4c0 3.3-2.7 5.5-5.6 5.5-3 0-5.3-2.4-5.3-5.3 0-2.9 2.4-5.2 5.3-5.2.3 0 .6 0 .9.1v2.7c-.3-.1-.6-.1-.9-.1-1.4 0-2.6 1.1-2.6 2.5s1.2 2.6 2.6 2.6 2.7-1.1 2.7-2.6V3h3z" />
    </svg>
  );
}

export function Footer() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSent(true);
    setEmail('');
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <footer id="contact" className="relative bg-ink text-paper">
      {/* Marquee strip */}
      <div className="overflow-hidden border-y border-paper/10 py-4">
        <div className="flex w-max animate-marquee whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, dup) => (
            <div key={dup} className="flex items-center" aria-hidden={dup === 1}>
              {['WEAR YOUR ROOTS', 'MADE IN LAGOS', 'ÌDÀÁRÒ · FW26', 'ÀṢẸ́WÀ', 'SMALL RUNS', 'NO RESTOCKS'].map((t) => (
                <span key={t} className="flex items-center">
                  <span className="font-display text-2xl tracking-tight text-paper/80">{t}</span>
                  <span className="mx-6 h-1.5 w-1.5 rounded-full bg-clay" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-edge px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Brand + newsletter */}
          <div className="lg:col-span-5">
            <Reveal>
              <h2 className="font-display text-6xl leading-[0.85] tracking-tight sm:text-7xl lg:text-8xl">
                ÀṢẸ́WÀ
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-paper/60">
                Contemporary Nigerian fashion from Lagos. New drops, lookbooks, and stories — straight to your inbox. No spam, ever.
              </p>
            </Reveal>

            <Reveal delay={150}>
              <form onSubmit={submit} className="mt-7 max-w-sm" aria-label="Newsletter signup">
                <label htmlFor="nl" className="sr-only">Email address</label>
                <div className="flex items-center border-b border-paper/30 focus-within:border-clay">
                  <input
                    id="nl"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full bg-transparent py-3 text-sm text-paper placeholder:text-paper/40 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="shrink-0 px-3 py-3 text-[11px] font-semibold uppercase tracking-widest text-paper transition-colors hover:text-clay-400"
                    aria-label="Subscribe"
                  >
                    <ArrowUpRight className="h-5 w-5" strokeWidth={2} />
                  </button>
                </div>
                <p
                  className="mt-3 text-xs text-clay-400 transition-opacity"
                  style={{ opacity: sent ? 1 : 0 }}
                  role="status"
                >
                  Thanks — you're on the list.
                </p>
              </form>
            </Reveal>
          </div>

          {/* Nav */}
          <div className="lg:col-span-3 lg:col-start-7">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-paper/40">Explore</p>
            <ul className="mt-4 space-y-3">
              {nav.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="group inline-flex items-center gap-1.5 text-sm text-paper/80 hover:text-paper">
                    {l.label}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" strokeWidth={2.5} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div className="lg:col-span-2">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-paper/40">Follow</p>
            <ul className="mt-4 space-y-3">
              <li>
                <a href="#" className="group inline-flex items-center gap-2 text-sm text-paper/80 hover:text-paper" aria-label="Instagram">
                  <Instagram className="h-4 w-4" strokeWidth={2} /> Instagram
                </a>
              </li>
              <li>
                <a href="#" className="group inline-flex items-center gap-2 text-sm text-paper/80 hover:text-paper" aria-label="TikTok">
                  <TikTokIcon className="h-4 w-4" /> TikTok
                </a>
              </li>
              <li>
                <a href="#" className="group inline-flex items-center gap-2 text-sm text-paper/80 hover:text-paper" aria-label="WhatsApp">
                  <MessageCircle className="h-4 w-4" strokeWidth={2} /> WhatsApp
                </a>
              </li>
              <li>
                <a href="mailto:hello@asewa.ng" className="group inline-flex items-center gap-2 text-sm text-paper/80 hover:text-paper" aria-label="Email">
                  <Mail className="h-4 w-4" strokeWidth={2} /> hello@asewa.ng
                </a>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div className="lg:col-span-2">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-paper/40">Studio</p>
            <p className="mt-4 flex items-start gap-2 text-sm text-paper/80">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={2} />
              <span>Yaba, Lagos<br />Nigeria</span>
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col gap-3 border-t border-paper/10 pt-6 text-[11px] uppercase tracking-widest text-paper/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 ÀṢẸ́WÀ. All rights reserved.</p>
          <p>Designed in Lagos. Built for the culture.</p>
        </div>
      </div>
    </footer>
  );
}
