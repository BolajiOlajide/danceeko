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
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-end px-4 pb-16 text-center sm:px-6 lg:px-8">
        {/* Main Title */}
        <h1 className="mb-6 text-6xl font-black uppercase leading-tight text-white sm:text-7xl md:text-8xl lg:text-9xl">
          DANCE EKO 2025
        </h1>

        {/* Subtitle */}
        <p className="mb-12 max-w-4xl text-lg font-normal text-white sm:text-xl md:text-2xl">
          A fusion of Afrobeats, Amapiano, and Afrohouse culture that moves our generation. The
          city dances and you're invited to join the rhythm.
        </p>

        {/* Buttons */}
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:gap-6">
          <button className="cursor-pointer rounded-full border-2 border-white/30 bg-white/10 px-8 py-4 text-base font-bold uppercase text-white backdrop-blur-sm transition-all hover:bg-white/20 sm:px-10 sm:text-lg">
            Sign Up Now
          </button>
          <button className="cursor-pointer rounded-full border-2 border-white/30 bg-white/10 px-8 py-4 text-base font-bold uppercase text-white backdrop-blur-sm transition-all hover:bg-white/20 sm:px-10 sm:text-lg">
            Watch Dance Eko 2024
          </button>
        </div>

        {/* Scroll to Explore */}
        <div className="flex cursor-pointer flex-col items-center gap-2">
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
