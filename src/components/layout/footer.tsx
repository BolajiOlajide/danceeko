'use client';

import type { SVGProps } from 'react';
import { useState } from 'react';
import { Instagram, Youtube } from 'lucide-react';
import { LINKS } from '@/lib/constants';
import { trackSocialClick, trackFormSubmit, trackFormError } from '@/lib/analytics';

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
  { icon: TiktokIcon, href: LINKS.tiktok, label: 'Tiktok' },
] as const;

const inputStyles =
  'h-12 w-full rounded-[40px] border border-white/30 bg-transparent px-4 text-base text-white placeholder-white/50 focus:border-white focus:outline-none focus:ring-1 focus:ring-white/40 transition sm:h-14 sm:px-6 lg:h-16';

export function Footer() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage('Thank you for subscribing!');
        setFormData({ firstName: '', lastName: '', email: '', phone: '' });
        trackFormSubmit('newsletter', true);
      } else {
        setStatus('error');
        setMessage(data.error || 'Failed to subscribe. Please try again.');
        trackFormSubmit('newsletter', false);
        trackFormError('newsletter', data.error || 'Unknown error');
      }
    } catch (error) {
      setStatus('error');
      setMessage('An error occurred. Please try again.');
      trackFormSubmit('newsletter', false);
      trackFormError('newsletter', 'Network error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <footer className="border-t border-white/10 bg-[#060606] text-white">
      <div className="mx-auto flex max-w-5xl flex-col gap-12 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="flex flex-col items-center gap-4 text-center sm:gap-6">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <p className="text-3xl font-black uppercase tracking-tight text-white sm:text-5xl lg:text-6xl">
              STAY IN THE LOOP
            </p>
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#121212] shadow-[0_12px_30px_rgba(0,0,0,0.65)] sm:h-12 sm:w-12">
              <LoopIcon className="h-6 w-6 sm:h-8 sm:w-8" />
            </span>
          </div>
          <p className="max-w-3xl px-4 text-sm leading-relaxed text-white/70 sm:text-base md:text-xl">
            Sign up for <span className="font-semibold text-white">exclusive updates</span>,{' '}
            <span className="font-semibold text-white">line up reveals</span>,{' '}
            <span className="font-semibold text-white">early access</span> and{' '}
            <span className="font-semibold text-white">secret</span> discount drops.
          </p>
        </div>

        <form className="w-full" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label>
              <span className="sr-only">First name</span>
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
                disabled={status === 'loading'}
                required
                className={inputStyles}
              />
            </label>
            <label>
              <span className="sr-only">Last name</span>
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
                disabled={status === 'loading'}
                required
                className={inputStyles}
              />
            </label>
            <label>
              <span className="sr-only">Email address</span>
              <input
                type="email"
                name="email"
                placeholder="you@email.com"
                value={formData.email}
                onChange={handleChange}
                disabled={status === 'loading'}
                required
                className={inputStyles}
              />
            </label>
            <label>
              <span className="sr-only">Phone number</span>
              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                value={formData.phone}
                onChange={handleChange}
                disabled={status === 'loading'}
                className={inputStyles}
              />
            </label>
            <div className="col-span-1 sm:col-span-2 flex justify-center">
              <button
                type="submit"
                disabled={status === 'loading'}
                className="h-12 w-full max-w-md cursor-pointer rounded-[40px] bg-gradient-to-b from-[#5f5f5f] via-[#393939] to-[#202020] text-base font-black uppercase tracking-wide text-white shadow-[0_20px_45px_rgba(0,0,0,0.55)] transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50 sm:h-14 sm:text-lg lg:h-16"
              >
                {status === 'loading' ? 'SUBMITTING...' : 'SIGN UP NOW'}
              </button>
            </div>
          </div>
          {message && (
            <div className={`mt-4 text-center text-sm ${status === 'success' ? 'text-green-400' : 'text-red-400'}`}>
              {message}
            </div>
          )}
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
                onClick={() => trackSocialClick(label.toLowerCase())}
              >
                <Icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 pt-6 sm:gap-4 sm:pt-8">
          <div className="flex justify-center">
            <img
              src="/Dance-EKO-2025-Logo-trans.png"
              alt="Dance Eko"
              className="h-auto w-full max-w-md"
            />
          </div>
          <div className="flex justify-center text-xs font-semibold tracking-[0.3em] text-white/70 sm:justify-end sm:text-sm sm:tracking-[0.4em]">
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

function TiktokIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
    </svg>
  );
}
