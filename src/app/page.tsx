'use client';

import dynamicImport from 'next/dynamic';

export const dynamic = 'force-dynamic';

const Navigation = dynamicImport(() => import('@/components/layout/navigation').then(mod => ({ default: mod.Navigation })), { ssr: false });
const HeroV2 = dynamicImport(() => import('@/components/sections/hero-v2').then(mod => ({ default: mod.HeroV2 })), { ssr: false });
const TicketsV2 = dynamicImport(() => import('@/components/sections/tickets-v2').then(mod => ({ default: mod.TicketsV2 })), { ssr: false });
const LineupV2 = dynamicImport(() => import('@/components/sections/lineup-v2').then(mod => ({ default: mod.LineupV2 })), { ssr: false });
const LocationV2 = dynamicImport(() => import('@/components/sections/location-v2').then(mod => ({ default: mod.LocationV2 })), { ssr: false });
const FestivalGuide = dynamicImport(() => import('@/components/sections/festival-guide').then(mod => ({ default: mod.FestivalGuide })), { ssr: false });
const Newsletter = dynamicImport(() => import('@/components/sections/newsletter').then(mod => ({ default: mod.Newsletter })), { ssr: false });
const Footer = dynamicImport(() => import('@/components/layout/footer').then(mod => ({ default: mod.Footer })), { ssr: false });

export default function Home() {
  return (
    <main className="relative bg-black min-h-screen">
      <Navigation />
      <HeroV2 />
      <TicketsV2 />
      <LineupV2 />
      <LocationV2 />
      <FestivalGuide />
      <Newsletter />
      <Footer />
    </main>
  );
}
