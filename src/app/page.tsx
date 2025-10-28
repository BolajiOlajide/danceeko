'use client';

import dynamicImport from 'next/dynamic';

export const dynamic = 'force-dynamic';

const Hero = dynamicImport(() => import('@/components/sections/hero').then(mod => ({ default: mod.Hero })), { ssr: false });
const Tickets = dynamicImport(() => import('@/components/sections/tickets').then(mod => ({ default: mod.Tickets })), { ssr: false });
const Lineup = dynamicImport(() => import('@/components/sections/lineup').then(mod => ({ default: mod.Lineup })), { ssr: false });
const Location = dynamicImport(() => import('@/components/sections/location').then(mod => ({ default: mod.Location })), { ssr: false });
const FestivalGuide = dynamicImport(() => import('@/components/sections/festival-guide').then(mod => ({ default: mod.FestivalGuide })), { ssr: false });
const Newsletter = dynamicImport(() => import('@/components/sections/newsletter').then(mod => ({ default: mod.Newsletter })), { ssr: false });
const Footer = dynamicImport(() => import('@/components/layout/footer').then(mod => ({ default: mod.Footer })), { ssr: false });

export default function Home() {
  return (
    <main className="relative bg-black min-h-screen">
      <Hero />
      <Tickets />
      <Lineup />
      <Location />
      <FestivalGuide />
      <Newsletter />
      <Footer />
    </main>
  );
}
