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
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-end px-4 pb-12 text-center sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
        {/* Main Logo */}
        <div className="mb-4 sm:mb-6">
          <img
            src="/Dance-EKO-2025-Logo-trans.png"
            alt="Dance EKO 2025"
            className="w-full max-w-xl px-4 sm:max-w-2xl md:max-w-3xl lg:max-w-4xl"
          />
        </div>

        {/* Subtitle */}
        <p className="mb-8 max-w-4xl px-2 text-base font-normal leading-relaxed text-white sm:mb-12 sm:text-xl md:text-2xl">
          A fusion of Afrobeats, Amapiano, and Afrohouse culture that moves our generation. The
          city dances and you're invited to join the rhythm.
        </p>

        {/* Buttons */}
        <div className="mb-8 flex w-full max-w-md flex-col gap-3 px-2 sm:mb-12 sm:max-w-2xl sm:flex-row sm:gap-6">
          <a
            href="https://www.jetronticket.com/dance-eko-25#tickets"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer rounded-full border-2 border-white/30 bg-white/10 px-6 py-3 text-sm font-bold uppercase text-white backdrop-blur-sm transition-all hover:bg-white/20 sm:px-10 sm:py-4 sm:text-lg"
          >
            Get Tickets
          </a>
          <a
            href="https://www.youtube.com/@evenintheday/search?query=dance%20eko"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer rounded-full border-2 border-white/30 bg-white/10 px-6 py-3 text-sm font-bold uppercase text-white backdrop-blur-sm transition-all hover:bg-white/20 sm:px-10 sm:py-4 sm:text-lg"
          >
            Watch Dance Eko 2024
          </a>
        </div>

        {/* Scroll to Explore */}
        <div
          className="flex cursor-pointer flex-col items-center gap-2"
          onClick={() => {
            document.getElementById('lineup')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <p className="text-sm font-medium uppercase tracking-widest text-white/80 sm:text-base">
            Scroll to Explore
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
