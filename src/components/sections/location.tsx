export function Location() {
  return (
    <section
      id="location"
      className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-10"
    >
      {/* Pulsating animation styles */}
      <style jsx>{`
        @keyframes pulsate {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.2);
          }
        }
        .pulsate {
          animation: pulsate 1.5s ease-in-out infinite;
        }
      `}</style>

      {/* Palm leaves background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'url("/tropical-leaves-palm-branch-realistic-frame-composition-with-transparent-background-clusters-leaves-with-text 1.png")',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      />

      {/* 50% dark overlay */}
      <div className="absolute inset-0 bg-white/5" />

      <div className="relative mx-auto flex h-full w-full max-w-6xl items-center justify-center">
        {/* Coming Soon Tapes - positioned in the middle */}
        <div className="absolute inset-0 flex items-center -top-100 -m-20">
          <img
            src="/coming-soon.png"
            alt="Coming soon tape"
            className="pointer-events-none absolute left-0 w-full select-none drop-shadow-2xl"
            style={{
              transform: 'rotate(-6deg)',
            }}
          />
          <img
            src="/coming-soon.png"
            alt="Coming soon tape"
            className="pointer-events-none absolute left-0 w-full select-none drop-shadow-2xl"
            style={{
              transform: 'rotate(6deg)',
            }}
          />
        </div>

        {/* Location Card */}
        <div className="relative z-10 w-full max-w-3xl rounded-2xl border border-white/20 bg-white/10 px-6 py-12 text-center backdrop-blur-sm sm:rounded-3xl sm:px-12 sm:py-20">
          {/* LOCATION label */}
          <h3 className="mb-6 text-lg font-black uppercase tracking-[0.4em] text-gray-400 sm:mb-8 sm:text-2xl sm:tracking-[0.5em]">
            Location
          </h3>

          {/* Twinkle Icon and Title */}
          <div className="mb-6 flex items-center justify-center gap-2 sm:mb-8">
            {/* Pulsating Twinkle Icon */}
            <div className="pulsate text-2xl sm:text-3xl">
              ✨
            </div>

            {/* To be announced */}
            <h2 className="text-2xl font-black text-white sm:text-4xl lg:text-5xl">
              To be announced
            </h2>
          </div>

          {/* Description */}
          <p className="px-2 text-sm leading-relaxed text-white/90 sm:text-base md:text-lg">
            We're building a new world inside Lagos unlike anything you've ever experienced, stay
            tuned!
          </p>
        </div>
      </div>
    </section>
  );
}
