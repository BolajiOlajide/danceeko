'use client';

import dynamicImport from 'next/dynamic';

export const dynamic = 'force-dynamic';

const LocationSection = dynamicImport(
  () => import('@/components/sections/location').then((mod) => ({ default: mod.Location })),
  { ssr: false }
);

const TicketSection = dynamicImport(
  () => import('@/components/sections/ticket').then((mod) => ({ default: mod.Ticket })),
  { ssr: false }
);

const Footer = dynamicImport(() => import('@/components/layout/footer').then(mod => ({ default: mod.Footer })), { ssr: false });

export default function Home() {
  return (
    <main className="relative bg-black min-h-screen">
      <TicketSection />
      <LocationSection />
      <Footer />
    </main>
  );
}
