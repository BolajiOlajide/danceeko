'use client';

import { CountdownTimer } from '@/components/countdown-timer';
import { trackGetTicketsClick, trackWatchVideoClick } from '@/lib/analytics';

export function Hero() {
  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/hero-background.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-end px-4 pb-8 text-center sm:px-6 sm:pb-12 lg:px-8 lg:pb-16">
        {/* Main Logo */}
        <div className="mb-2 sm:mb-4">
          <img
            src="/Dance-EKO-2025-Logo-trans.png"
            alt="Dance EKO 2025"
            className="w-full max-w-md px-4 sm:max-w-xl md:max-w-2xl lg:max-w-3xl"
          />
        </div>

        {/* Countdown Timer */}
        <div className="mb-4 sm:mb-6">
          <CountdownTimer />
        </div>

        {/* Social Proof Badge */}
        <div className="mb-4 flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm sm:mb-6">
          <span className="text-lg sm:text-xl">🎉</span>
          <span className="text-sm font-medium text-white sm:text-base">
            5,000+ attended in 2024
          </span>
        </div>

        {/* Subtitle */}
        <p className="mb-8 max-w-4xl px-2 text-base font-normal leading-relaxed text-white sm:mb-12 sm:text-xl md:text-2xl">
          A two-day cultural experience blending music, dance, and African heritage.  Headlined by Africa’s finest DJs leading a celebration of the rhythm that connects us all.
        </p>

        {/* Buttons */}
        <div className="mb-8 flex justify-center items-center w-full max-w-md flex-col gap-3 px-2 sm:mb-12 sm:max-w-2xl sm:flex-row sm:gap-6">
          <a
            href="https://www.jetronticket.com/dance-eko-25#tickets"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackGetTicketsClick('hero')}
            className="cursor-pointer rounded-full bg-gradient-to-b from-[#ff6a4f] to-[#e85537] px-6 py-3 text-sm font-bold uppercase text-white shadow-lg transition-all hover:brightness-110 hover:shadow-xl sm:px-10 sm:py-4 sm:text-lg"
          >
            Get Tickets
          </a>
          <a
            href="https://www.youtube.com/@evenintheday/search?query=dance%20eko"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWatchVideoClick()}
            className="cursor-pointer rounded-full border-2 border-white/30 bg-white/10 px-6 py-3 text-sm font-bold uppercase text-white backdrop-blur-sm transition-all hover:bg-white/20 sm:px-10 sm:py-4 sm:text-lg"
          >
            Watch Dance Eko 2024
          </a>
        </div>

        {/* Scroll to Explore */}
        <div
          className="flex cursor-pointer flex-col items-center gap-2"
          onClick={() => {
            document.getElementById('tickets')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <p className="text-sm font-medium uppercase tracking-widest text-white/80 sm:text-base">
            Explore
          </p>
          <svg
            className="h-6 w-6 animate-bounce text-white/80"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
