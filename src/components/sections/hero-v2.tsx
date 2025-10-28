'use client';

import { motion, useTransform, useScroll } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { LINKS } from '@/lib/constants';
import { ChevronDown, Calendar, MapPin } from 'lucide-react';

export function HeroV2() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Layered Background */}
      <div className="absolute inset-0">
        {/* Video Layer */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover opacity-80"
          >
            <source src="/videos/hero-background.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-black via-transparent to-black z-1" />

        {/* Radial gradient for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_50%,black_100%)] z-2" />
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 flex h-full flex-col items-center justify-center px-4"
        style={{ opacity, scale }}
      >
        {/* Dates Badge */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="flex items-center gap-4 bg-white/5 backdrop-blur-xl border border-white/20 rounded-full">
            <Calendar className="w-5 h-5 text-[#efd068]" />
            <span className="text-white font-bold text-sm sm:text-base tracking-wider">
              TBA 2025
            </span>
            <div className="w-px h-5 bg-white/30" />
            <MapPin className="w-5 h-5 text-[#f7e8aa]" />
            <span className="text-white font-bold text-sm sm:text-base tracking-wider">
              LAGOS, NIGERIA
            </span>
          </div>
        </motion.div>

        {/* Main Heading - Massive Impact */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.h1
            className="text-7xl sm:text-8xl md:text-9xl lg:text-[14rem] xl:text-[16rem] font-black tracking-tighter leading-none mb-4"
            style={{
              textShadow: '0 0 80px rgba(239, 208, 104, 0.8), 0 0 120px rgba(247, 232, 170, 0.5)',
            }}
          >
            <motion.span
              className="block bg-gradient-to-r from-[#efd068] via-[#f7e8aa] to-[#efd068] bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{
                backgroundSize: '200% 200%',
              }}
            >
              DANCE
            </motion.span>
            <motion.span
              className="block bg-gradient-to-r from-[#f7e8aa] via-[#efd068] to-[#f7e8aa] bg-clip-text text-transparent -mt-4 sm:-mt-6 md:-mt-8 lg:-mt-16"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'linear',
                delay: 0.5,
              }}
              style={{
                backgroundSize: '200% 200%',
              }}
            >
              EKO
            </motion.span>
          </motion.h1>

          {/* Year Badge - Coachella style */}
          <motion.div
            className="inline-flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-[#efd068] via-[#f7e8aa] to-[#efd068] rounded-2xl blur-xl opacity-75"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <div className="relative px-8 py-3 rounded-2xl">
                <span className="text-4xl sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-[#efd068] to-[#f7e8aa] bg-clip-text text-transparent">
                  2025
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-white font-semibold mb-12 max-w-4xl mx-auto leading-relaxed px-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          style={{
            textShadow: '0 4px 30px rgba(0, 0, 0, 0.9)',
          }}
        >
          WHERE <span className="text-[#efd068] font-black">AFROBEATS</span>,{' '}
          <span className="text-[#f7e8aa] font-black">AMAPIANO</span> & {' '}
          <span className="text-[#efd068] font-black">AFROHOUSE</span> UNITE
          <span className="block mt-2 text-sm sm:text-base md:text-lg text-white/80">
            From day to night, Lagos dances. Join the rhythm. 🎵
          </span>
        </motion.p>

        {/* CTA Buttons - Bold & Clear */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <Button
            variant="primary"
            size="lg"
            onClick={() => (window.location.href = LINKS.signup)}
          >
            Sign Up
          </Button>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => (window.location.href = LINKS.watchVideo)}
          >
            ▶ WATCH 2024 RECAP
          </Button>
        </motion.div>

        {/* Scroll Indicator - Enhanced */}
        <motion.button
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 1 }}
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <span className="text-white/60 text-xs uppercase tracking-widest font-semibold">
            Scroll to Explore
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-8 h-8 text-white/60" strokeWidth={2.5} />
          </motion.div>
        </motion.button>
      </motion.div>
    </section>
  );
}
