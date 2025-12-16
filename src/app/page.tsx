import { Hero } from '@/components/sections/hero';
import { Lineup } from '@/components/sections/lineup';
import { Location } from '@/components/sections/location';
import { Ticket } from '@/components/sections/ticket';
import { Footer } from '@/components/layout/footer';

export default function Home() {
  return (
    <main className="relative bg-black min-h-screen">
      <Hero />
      <Ticket />
      <Lineup />
      <Location />
      <Footer />
    </main>
  );
}
