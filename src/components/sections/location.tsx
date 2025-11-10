export function Location() {
  return (
    <section
      id="location"
      className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-10"
    >
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
      <div className="absolute inset-0 bg-black/10" />

      <div className="relative mx-auto flex h-full w-full max-w-6xl items-center justify-center">
        {/* Coming Soon Tapes - positioned in the middle */}
        <div className="absolute inset-0 flex items-center">
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
        <div className="relative z-10 w-full max-w-3xl rounded-3xl border border-white/20 bg-black/40 px-8 py-16 text-center backdrop-blur-md sm:px-12 sm:py-20">
          {/* LOCATION label */}
          <h3 className="mb-8 text-sm font-black uppercase tracking-[0.6em] text-gray-400 sm:text-base">
            Location
          </h3>

          {/* Icons and Title */}
          <div className="mb-8 flex flex-col items-center gap-6">
            <div className="flex items-center gap-4">
              {/* Plane Icon */}
              <svg
                className="h-12 w-12 text-yellow-500 sm:h-14 sm:w-14"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
              </svg>

              {/* Dollar Sign Badge */}
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-b from-[#f5d548] to-[#d49216] text-2xl font-black text-black shadow-lg sm:h-14 sm:w-14">
                $
              </div>
            </div>

            {/* To be announced */}
            <h2 className="text-4xl font-black text-white sm:text-5xl lg:text-6xl">
              To be announced
            </h2>
          </div>

          {/* Description */}
          <p className="text-base leading-relaxed text-white/90 sm:text-lg">
            We're building a new world inside Lagos unlike anything you've ever experienced, stay
            tuned!
          </p>
        </div>
      </div>
    </section>
  );
}
