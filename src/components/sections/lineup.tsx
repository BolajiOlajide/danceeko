const artists = [
  {
    name: 'Skyla Tyla',
    image: '/artists/skyla-tyla.jpg',
    locked: false,
  },
  { locked: true },
  { locked: true },
  { locked: true },
  { locked: true },
  { locked: true },
  { locked: true },
  { locked: true },
];

export function Lineup() {
  return (
    <section
      id="lineup"
      className="relative overflow-hidden bg-[#1a0f1f] px-4 py-24 sm:px-6 lg:px-10"
    >
      {/* Twinkle animation styles */}
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.15);
          }
        }
        .twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }
        .twinkle-delayed {
          animation: twinkle 2s ease-in-out infinite;
          animation-delay: 1s;
        }
      `}</style>

      {/* Decorative music notes */}
      <div className="pointer-events-none absolute left-20 top-1/3 text-6xl text-gray-700/40">
        🎵
      </div>
      <div className="pointer-events-none absolute right-32 top-1/2 text-8xl text-gray-700/30">
        🎵
      </div>

      {/* Decorative dollar signs */}
      <div className="pointer-events-none absolute left-10 top-1/4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-b from-[#f5d548] to-[#d49216] text-xl font-black text-black">
        $
      </div>
      <div className="pointer-events-none absolute right-20 top-1/3 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-b from-[#f5d548] to-[#d49216] text-lg font-black text-black">
        $
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Heading */}
        <h2 className="mb-12 text-center text-6xl font-black uppercase text-white sm:text-7xl lg:text-8xl">
          Lineup
        </h2>

        {/* Announcement Banner */}
        <div className="relative mx-auto mb-16 max-w-3xl">
          {/* Left stars - bottom left */}
          <div className="pointer-events-none absolute -left-16 bottom-0 flex items-end gap-1 sm:-left-20">
            <div className="twinkle text-6xl sm:text-7xl">✨</div>
            <div className="twinkle-delayed text-3xl sm:text-4xl">✨</div>
          </div>

          {/* Right stars - top right */}
          <div className="pointer-events-none absolute -right-12 -top-8 flex items-start gap-1 sm:-right-16">
            <div className="twinkle-delayed text-6xl sm:text-7xl">✨</div>
            <div className="twinkle text-3xl sm:text-4xl">✨</div>
          </div>

          <div className="rounded-3xl border-2 border-purple-400/50 bg-gradient-to-r from-purple-700 to-purple-600 px-8 py-6 text-center shadow-2xl">
            <p className="text-xl font-bold text-white sm:text-2xl lg:text-3xl">
              Full lineup to be announced in January 2025
            </p>
          </div>
        </div>

        {/* Artist Cards Grid */}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {artists.map((artist, idx) => (
            <div
              key={idx}
              className="relative aspect-square overflow-hidden rounded-3xl border-4 border-white/80 bg-black/90 shadow-xl"
            >
              {artist.locked ? (
                // Locked Card
                <div className="flex h-full w-full flex-col items-center justify-center gap-4 p-4">
                  <svg
                    className="h-12 w-12 text-white/80"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <rect
                      x="5"
                      y="11"
                      width="14"
                      height="10"
                      rx="2"
                      strokeWidth="2"
                    />
                    <path
                      d="M7 11V7a5 5 0 0 1 10 0v4"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="rounded-full bg-gray-600/80 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white">
                    Coming Soon
                  </span>
                </div>
              ) : (
                // Artist Card
                <div className="relative h-full w-full">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent px-4 py-4">
                    <h3 className="text-xl font-black text-white sm:text-2xl">
                      {artist.name}
                    </h3>
                  </div>
                  {/* Dollar badge on artist card */}
                  <div className="absolute -left-3 -top-3 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-b from-[#f5d548] to-[#d49216] text-lg font-black text-black shadow-lg">
                    $
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
