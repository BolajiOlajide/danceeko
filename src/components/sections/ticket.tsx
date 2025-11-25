import type { CSSProperties } from 'react';

const noiseTexture =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 160 160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)' opacity='0.25'/%3E%3C/svg%3E";

const STAR_PATH =
  "<path d='M7.5 0 9.4 4.6l5.2.4-3.9 3.4 1.3 5.2-4.5-2.8-4.5 2.8 1.3-5.2-3.9-3.4 5.2-.4z' fill='#ffda1a'/>";

const createStarPattern = (points: Array<{ x: number; y: number; scale?: number }>) => {
  const stars = points
    .map(
      ({ x, y, scale = 1 }) =>
        `<g transform="translate(${x} ${y}) scale(${scale})">${STAR_PATH}</g>`
    )
    .join('');
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 160 120'>${stars}</svg>`;
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
};

const tiers = [
  {
    title: 'Pre-sale',
    pattern: 'coralDots',
    perks: ['Festival Access', 'Main festival ground', 'Immersive experience zones'],
    locked: true,
    lockColor: '#a8a8ad',
    link: 'https://www.jetronticket.com/dance-eko-25',
    buttonColor: 'from-[#ff6a4f] to-[#e85537]',
    soldOut: true,
  },
  {
    title: 'General Sale',
    pattern: 'amberDots',
    perks: ['Festival Access', 'Main festival ground', 'Immersive experience zones'],
    locked: false,
    // lockColor: '#a8a8ad',
    link: 'https://www.jetronticket.com/dance-eko-25',
    // buttonColor: 'from-[#bbbbbb] to-[#7d7d7f]',
    buttonColor: 'from-[#ff6a4f] to-[#e85537]',
  },
  {
    title: 'STAGE ACCESS',
    pattern: 'greenStars',
    perks: ['Festival Access', 'Stage Pass', 'Immersive experience zones'],
    locked: false,
    link: 'https://www.jetronticket.com/dance-eko-25',
    buttonColor: 'from-[#ff6a4f] to-[#e85537]',
  },
  {
    title: 'VIP CABANA',
    pattern: 'blueStars',
    perks: ['Festival Access', 'Allocated VIP lounge', 'Immersive experience zones'],
    locked: true,
    lockColor: '#a8a8ad',
    buttonColor: 'from-[#bbbbbb] to-[#7d7d7f]',
    soldOut: false,
  },
] as const;

const patternStyles: Record<string, CSSProperties> = {
  coralDots: {
    backgroundColor: '#ff6a4f',
    backgroundImage:
      'radial-gradient(circle at 0 0, rgba(255,255,255,.35) 12%, transparent 13%)',
    backgroundSize: '32px 32px',
  },
  amberDots: {
    backgroundColor: '#ffb044',
    backgroundImage:
      'radial-gradient(circle at 0 0, rgba(255,255,255,.45) 12%, transparent 13%)',
    backgroundSize: '32px 32px',
  },
  blueStars: {
    backgroundColor: '#0072c7',
    backgroundImage: createStarPattern([
      { x: 15, y: 18, scale: 0.8 },
      { x: 70, y: 10, scale: 0.9 },
      { x: 125, y: 24, scale: 0.75 },
      { x: 40, y: 70, scale: 0.85 },
      { x: 105, y: 70, scale: 0.7 },
      { x: 20, y: 100, scale: 0.9 },
    ]),
    backgroundSize: '160px 120px',
    backgroundRepeat: 'repeat',
  },
  greenStars: {
    backgroundColor: '#0a892e',
    backgroundImage: createStarPattern([
      { x: 25, y: 14, scale: 0.8 },
      { x: 100, y: 8, scale: 0.85 },
      { x: 60, y: 40, scale: 0.75 },
      { x: 135, y: 42, scale: 0.8 },
      { x: 30, y: 85, scale: 0.9 },
      { x: 110, y: 95, scale: 0.7 },
    ]),
    backgroundSize: '160px 120px',
    backgroundRepeat: 'repeat',
  },
};

const cardBackground = '#fff8f2';
const stageBaseColor = '#c23f33';
const stageGradient =
  'radial-gradient(circle at top, #f98b5e 0%, #d34f37 50%, #a32f30 100%)';
const notchSize = 44;

export function Ticket() {
  return (
    <section
      id="tickets"
      className="relative isolate px-4 py-20 text-center text-black sm:px-6 lg:px-10"
      style={{ backgroundImage: stageGradient, backgroundColor: stageBaseColor }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-45"
        style={{
          backgroundImage: `url("${noiseTexture}")`,
          backgroundSize: '180px 180px',
          mixBlendMode: 'multiply',
        }}
      />

      <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 px-2 sm:gap-4">
        <p className="text-3xl font-black uppercase tracking-wide text-[#2f120b] sm:text-4xl md:text-5xl">
          Tickets
        </p>
      </div>

      <div className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-4 px-2 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
        {tiers.map((tier) => (
          <article
            key={tier.title}
            className="relative flex h-full flex-col overflow-hidden rounded-4xl shadow-[0_25px_40px_rgba(71,28,11,0.25)]"
            style={{ backgroundColor: cardBackground }}
          >
            <span
              className="pointer-events-none absolute left-0 block -translate-x-1/2"
              style={{
                width: notchSize,
                height: notchSize,
                borderRadius: notchSize,
                backgroundColor: stageBaseColor,
                backgroundImage: stageGradient,
                clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)',
                boxShadow: 'inset 5px 0 8px rgba(0,0,0,0.08)',
                top: '64%',
                transform: 'translate(-50%, -50%)',
              }}
            />
            <span
              className="pointer-events-none absolute right-0 block translate-x-1/2"
              style={{
                width: notchSize,
                height: notchSize,
                borderRadius: notchSize,
                backgroundColor: stageBaseColor,
                backgroundImage: stageGradient,
                clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)',
                boxShadow: 'inset -5px 0 8px rgba(0,0,0,0.08)',
                top: '64%',
                transform: 'translate(50%, -50%)',
              }}
            />
            <div className="relative flex h-32 items-center justify-center" style={patternStyles[tier.pattern]}>
              <p className="text-2xl font-black uppercase tracking-wide text-[#2f120b] drop-shadow-[0_2px_0_rgba(0,0,0,0.2)]">
                {tier.title}
              </p>
            </div>

            <div className="relative flex flex-1 flex-col px-8 pb-10 pt-8 text-[#2f120b]">
              <div className="flex flex-col gap-3 text-base sm:min-h-[108px]">
                {tier.perks.map((perk) => (
                  <p key={perk} className="font-medium">
                    {perk}
                  </p>
                ))}
              </div>
              <div className="relative mt-6 pt-6">
                <div className="flex flex-col items-center gap-4">
                  {tier.locked ? (
                    <>
                      {!tier.soldOut ? (
                        <LockIcon className="h-8 w-8" stroke={tier.lockColor} />
                      ) : (
                        <div className="h-8 w-8" />
                      )}
                      <span
                        className={`inline-flex min-w-[140px] items-center justify-center rounded-full bg-linear-to-b px-6 py-1.5 text-sm font-semibold uppercase tracking-wide text-white shadow-inner ${
                          tier.soldOut
                            ? 'from-[#2f120b] to-[#1a0a06]'
                            : 'from-[#bbbbbb] to-[#7d7d7f]'
                        }`}
                      >
                        {tier.soldOut ? 'Sold Out' : 'Coming Soon'}
                      </span>
                    </>
                  ) : (
                    <>
                      <div className="h-8 w-8" />
                      <a
                        href={tier.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex min-w-[140px] cursor-pointer items-center justify-center rounded-full bg-linear-to-b from-[#bbbbbb] to-[#7d7d7f] px-6 py-1.5 text-sm font-semibold uppercase tracking-wide text-white shadow-inner transition hover:brightness-110 ${tier.buttonColor}`}
                      >
                        Get Tickets
                      </a>
                    </>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function LockIcon({
  className,
  stroke = '#9ea0a6',
}: {
  className?: string;
  stroke?: string;
}) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      role="img"
      aria-label="Locked"
    >
      <rect
        x="6"
        y="14"
        width="20"
        height="14"
        rx="4"
        stroke={stroke}
        strokeWidth="2"
        fill="white"
      />
      <path
        d="M10 14V11.5C10 7.9 12.9 5 16.5 5S23 7.9 23 11.5V14"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M16 18v4"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="16" cy="23" r="2" fill={stroke} />
    </svg>
  );
}

function UnlockIcon({
  className,
  stroke = '#0a892e',
}: {
  className?: string;
  stroke?: string;
}) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      role="img"
      aria-label="Unlocked"
    >
      <rect
        x="6"
        y="14"
        width="20"
        height="14"
        rx="4"
        stroke={stroke}
        strokeWidth="2"
        fill="white"
      />
      <path
        d="M10 14V11.5C10 7.9 12.9 5 16.5 5S23 7.9 23 11.5V9"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M16 18v4"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="16" cy="23" r="2" fill={stroke} />
    </svg>
  );
}
