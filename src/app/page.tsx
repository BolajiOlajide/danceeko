'use client';

import dynamicImport from 'next/dynamic';

export const dynamic = 'force-dynamic';

const TicketSection = dynamicImport(
  () => import('@/components/sections/ticket').then((mod) => ({ default: mod.Ticket })),
  { ssr: false }
);

const Footer = dynamicImport(() => import('@/components/layout/footer').then(mod => ({ default: mod.Footer })), { ssr: false });

export default function Home() {
  return (
    <main className="relative bg-black min-h-screen">
      <TicketSection />
      <Footer />
    </main>
  );
}
