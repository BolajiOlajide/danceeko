'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { LINKS } from '@/lib/constants';
import { useEffect } from 'react';

export function Hero() {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [cursorX, cursorY]);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9] as const,
      },
    },
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-40"
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>
        {/* Vibrant Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/40 via-black/60 to-black" />
      </div>

      {/* Cursor-Following Gradient Orbs */}
      <motion.div
        className="pointer-events-none absolute w-[700px] h-[700px] bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-30 rounded-full blur-3xl z-5"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
      <motion.div
        className="pointer-events-none absolute w-[400px] h-[400px] bg-gradient-to-br from-cyan-400 via-blue-400 to-purple-400 opacity-40 rounded-full blur-2xl z-5"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Animated Gradient Orbs - More Vibrant */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-cyan-500 to-blue-600 opacity-25 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-purple-500 to-pink-500 opacity-25 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.4, 1],
          x: [0, -80, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-gradient-to-br from-orange-500 to-yellow-500 opacity-20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -60, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <motion.h1 
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-6"
            style={{
              textShadow: '0 0 40px rgba(139, 92, 246, 0.5), 0 0 80px rgba(0, 71, 255, 0.3)',
            }}
          >
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
              DANCE EKO
            </span>
            <span className="block mt-4 text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 bg-clip-text text-transparent animate-gradient font-black">
              2025
            </span>
          </motion.h1>
          
          {/* Festival Energy Bars */}
          <motion.div 
            className="flex justify-center gap-2 mt-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 bg-gradient-to-t from-blue-500 to-purple-500 rounded-full"
                style={{ height: `${(i + 1) * 8}px` }}
                animate={{
                  scaleY: [1, 1.5, 1],
                }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              />
            ))}
          </motion.div>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="max-w-3xl text-xl sm:text-2xl md:text-3xl text-white font-semibold mb-12 leading-relaxed px-4"
          style={{
            textShadow: '0 2px 20px rgba(0, 0, 0, 0.8)',
          }}
        >
          A fusion of <span className="text-cyan-400">Afrobeats</span>, <span className="text-purple-400">Amapiano</span>, and <span className="text-pink-400">Afrohouse</span> culture that moves our
          generation. From day to night, the city dances and you&apos;re invited to
          join the rhythm.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6"
        >
          <Button
            variant="primary"
            size="lg"
            onClick={() => (window.location.href = LINKS.signup)}
          >
            SIGN UP NOW
          </Button>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => (window.location.href = LINKS.watchVideo)}
          >
            WATCH DANCE EKO 2024
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-white/50 rounded-full p-1"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1.5 h-3 bg-white rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
