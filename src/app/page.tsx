'use client';

import dynamicImport from 'next/dynamic';

export const dynamic = 'force-dynamic';

const Footer = dynamicImport(() => import('@/components/layout/footer').then(mod => ({ default: mod.Footer })), { ssr: false });

export default function Home() {
  return (
    <main className="relative bg-black min-h-screen">
      <Footer />
    </main>
  );
}
