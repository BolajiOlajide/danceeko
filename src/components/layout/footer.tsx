import type { SVGProps } from 'react';
import { Instagram, Youtube, Mail } from 'lucide-react';
import { LINKS } from '@/lib/constants';

const navigation = [
  { name: 'Lineup', href: '#lineup' },
  { name: 'Tickets', href: '#tickets' },
  { name: 'Location', href: '#location' },
  { name: 'Guide', href: '#guide' },
] as const;

const socials = [
  { icon: Instagram, href: LINKS.instagram, label: 'Instagram' },
  { icon: Youtube, href: LINKS.youtube, label: 'YouTube' },
  { icon: XIcon, href: LINKS.twitter, label: 'X (Twitter)' },
  { icon: Mail, href: LINKS.email, label: 'Email' },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#060606] text-white">
      <div className="mx-auto flex max-w-5xl flex-col gap-12 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <p className="text-4xl font-black uppercase tracking-tight text-white sm:text-5xl lg:text-6xl">
              STAY IN THE LOOP
            </p>
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#121212] shadow-[0_12px_30px_rgba(0,0,0,0.65)]">
              <LoopIcon className="h-8 w-8" />
            </span>
          </div>
          <p className="max-w-3xl text-base leading-relaxed text-white/70 sm:text-xl">
            Sign up for <span className="font-semibold text-white">exclusive updates</span>,{' '}
            <span className="font-semibold text-white">line up reveals</span>,{' '}
            <span className="font-semibold text-white">early access</span> and{' '}
            <span className="font-semibold text-white">secret</span> discount drops.
          </p>
        </div>

        <form className="flex w-full flex-col gap-4 text-left md:flex-row md:items-center">
          <label className="w-full flex-1">
            <span className="sr-only">Email address</span>
            <input
              type="email"
              placeholder="youremail@example.com"
              className="h-16 w-full rounded-[40px] border border-white/30 bg-transparent px-6 text-base text-white placeholder-white/40 focus:border-white focus:outline-none"
            />
          </label>
          <button
            type="button"
            className="h-16 w-full rounded-[40px] bg-gradient-to-b from-[#5f5f5f] via-[#393939] to-[#202020] text-lg font-black uppercase tracking-wide text-white shadow-[0_20px_45px_rgba(0,0,0,0.55)] transition hover:brightness-110 md:w-auto md:px-10"
          >
            SIGN UP NOW
          </button>
        </form>

        <div className="flex flex-col items-center gap-6 text-white/70">
          <nav className="flex flex-wrap justify-center gap-8 text-base font-medium">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="hover:text-white transition">
                {item.name}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-5 text-white">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="text-white/80 transition hover:text-white"
                target="_blank"
                rel="noreferrer"
              >
                <Icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 pt-8">
          <span className="text-center text-[clamp(3.5rem,12vw,10rem)] font-black uppercase leading-none tracking-tight text-white">
            DANCE EKO
          </span>
          <div className="flex justify-end text-sm font-semibold tracking-[0.4em] text-white/70">
            © 2025
          </div>
        </div>
      </div>
    </footer>
  );
}

function LoopIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 32" fill="none" {...props}>
      <path
        d="M6 4h8c7.2 0 13 6.2 13 12.4C27 22.6 21.2 28 14 28H6c-3.3 0-6-2.2-6-5s2.7-5 6-5h7c2 0 4-1.8 4-4s-2-4-4-4H6C2.7 10 0 7.8 0 5s2.7-5 6-5"
        fill="#3C6CFF"
      />
      <g transform="matrix(-1 0 0 1 64 0)">
        <path
          d="M6 4h8c7.2 0 13 6.2 13 12.4C27 22.6 21.2 28 14 28H6c-3.3 0-6-2.2-6-5s2.7-5 6-5h7c2 0 4-1.8 4-4s-2-4-4-4H6C2.7 10 0 7.8 0 5s2.7-5 6-5"
          fill="#FF3B30"
        />
      </g>
    </svg>
  );
}

function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path d="M5 19 19 5M5 5l14 14" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
