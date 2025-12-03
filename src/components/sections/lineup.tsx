const artists: Array<{ locked: boolean; name?: string; image?: string }> = [
  {
    name: 'Mörda',
    image: '/artists/morda.webp',
    locked: false,
  },
  {
    name: 'Skyla Tylaa',
    image: '/artists/skyla-tyla.webp',
    locked: false,
  },
  {
    name: 'Distruction Boyz',
    image: '/artists/distruction.jpg',
    locked: false,
  },
  {
    name: 'Shakes & Les',
    image: '/artists/shakesles.jpg',
    locked: false,
  },
  {
    name: 'Jnr SA',
    image: '/artists/jnr-sa.jpg',
    locked: false,
  },
  {
    name: '2wo Bunnies',
    image: '/artists/2wo-bunnies.PNG',
    locked: false,
  },
  {
    name: 'Kwamzy',
    image: '/artists/kwamzy.jpeg',
    locked: false,
  },
  {
    name: 'Six7even',
    image: '/artists/Six7even.JPG',
    locked: false,
  },
  {
    name: 'Aniko',
    image: '/artists/aniko.jpg',
    locked: false,
  },
  {
    name: 'Naija House Mafia',
    image: '/artists/nhm.jpg',
    locked: false,
  },
  {
    name: 'Proton',
    image: '/artists/proton.jpg',
    locked: false,
  },
  {
    name: 'Blak Dave',
    image: '/artists/blak-dave.webp',
    locked: false,
  },
  {
    name: 'Farati',
    image: '/artists/farati.jpg',
    locked: false,
  },
  {
    name: 'SoundsOfAce',
    image: '/artists/soa4.jpg',
    locked: false,
  },
  {
    name: 'Abiodun',
    image: '/artists/abiodun.jpg',
    locked: false,
  },
  {
    name: 'Tobi Peter',
    image: '/artists/tobi-peter.jpg',
    locked: false,
  },
  {
    name: 'EarthSurfing',
    image: '/artists/earth-surfing.jpg',
    locked: false,
  },
  {
    name: 'Wizzy Drumz',
    image: '/artists/wizzydrumz.jpg',
    locked: false,
  },
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

      <div className="relative mx-auto max-w-6xl">
        {/* Heading */}
        <h2 className="mb-8 text-center text-5xl font-black uppercase text-white sm:mb-12 sm:text-7xl lg:text-8xl">
          Lineup
        </h2>

        {/* Announcement Banner */}
        <div className="relative mx-auto mb-12 max-w-3xl px-2 sm:mb-16">
          {/* Left stars - bottom left */}
          <div className="pointer-events-none absolute -left-8 bottom-0 flex items-end gap-1 sm:-left-16 md:-left-20">
            <div className="twinkle text-4xl sm:text-6xl md:text-7xl">✨</div>
            <div className="twinkle-delayed text-2xl sm:text-3xl md:text-4xl">✨</div>
          </div>

          {/* Right stars - top right */}
          <div className="pointer-events-none absolute -right-6 -top-6 flex items-start gap-1 sm:-right-12 sm:-top-8 md:-right-16">
            <div className="twinkle-delayed text-4xl sm:text-6xl md:text-7xl">✨</div>
            <div className="twinkle text-2xl sm:text-3xl md:text-4xl">✨</div>
          </div>

          <div className="rounded-2xl border-2 border-purple-400/50 bg-linear-to-r from-purple-700 to-purple-600 px-4 py-4 text-center shadow-2xl sm:rounded-3xl sm:px-8 sm:py-6">
            <p className="text-base font-bold leading-snug text-white sm:text-xl md:text-2xl lg:text-3xl">
              Wave 2 to be announced
            </p>
          </div>
        </div>

        {/* Artist Cards Grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:grid-cols-4">
          {artists.map((artist, idx) => (
            <div
              key={idx}
              className="relative aspect-square overflow-hidden rounded-2xl border-2 border-white/80 bg-black/90 shadow-xl sm:rounded-3xl sm:border-4"
            >
              {artist.locked ? (
                // Locked Card
                <div className="flex h-full w-full flex-col items-center justify-center gap-3 p-3 sm:gap-4 sm:p-4">
                  <svg
                    className="h-8 w-8 text-white/80 sm:h-12 sm:w-12"
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
                  <span className="rounded-full bg-gray-600/80 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white sm:px-4 sm:py-1.5">
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
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent px-3 py-3 sm:px-4 sm:py-4">
                    <h3 className="text-base font-black text-white sm:text-xl md:text-2xl">
                      {artist.name}
                    </h3>
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
