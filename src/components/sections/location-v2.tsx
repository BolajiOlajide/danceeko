'use client';

import { motion } from 'framer-motion';
import { MapPin, Globe } from 'lucide-react';

export function LocationV2() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden py-24" id="location">
      {/* Dramatic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black z-10" />
        
        {/* Background image placeholder - Lagos cityscape */}
        <div className="w-full h-full bg-gradient-to-br from-orange-950 via-red-950 to-purple-950 opacity-60" />
        
        {/* Animated rays of light */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 w-2 h-full origin-top bg-gradient-to-b from-orange-500/20 to-transparent"
            style={{
              transformOrigin: 'top center',
              transform: `rotate(${i * 45}deg)`,
            }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scaleY: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.5,
            }}
          />
        ))}
        
        {/* Floating particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="relative z-20 text-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Icon with Pulse */}
          <motion.div
            className="flex justify-center mb-10"
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 rounded-full blur-2xl opacity-60"
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
              <div className="relative w-28 h-28 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl">
                <MapPin className="w-14 h-14 text-white" strokeWidth={2.5} />
              </div>
            </div>
          </motion.div>

          {/* Location Title */}
          <motion.h2
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              textShadow: '0 0 80px rgba(249, 115, 22, 0.9), 0 10px 50px rgba(0, 0, 0, 0.9)',
            }}
          >
            <span className="bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-500 bg-clip-text text-transparent">
              LOCATION
            </span>
          </motion.h2>

          {/* TBA Box - Massive Impact */}
          <motion.div
            className="relative mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Epic Glow */}
            <motion.div 
              className="absolute -inset-8 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 blur-3xl opacity-50"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 5, -5, 0],
                opacity: [0.5, 0.7, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            
            {/* Main Box */}
            <div className="relative bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 p-1 rounded-3xl">
              <div className="bg-black rounded-3xl px-8 sm:px-12 md:px-16 py-10 sm:py-12 md:py-16">
                <motion.div
                  animate={{
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <Globe className="w-12 h-12 text-white/40 mx-auto mb-4" />
                  <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-2" style={{
                    background: 'linear-gradient(to right, #FBBF24, #F97316, #EC4899, #8B5CF6)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>
                    TO BE
                  </h3>
                  <h3 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black" style={{
                    background: 'linear-gradient(to right, #EC4899, #8B5CF6, #06B6D4)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>
                    ANNOUNCED
                  </h3>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-2xl sm:text-3xl md:text-4xl text-white font-black leading-tight">
              We&apos;re building a new world inside{' '}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  Lagos
                </span>
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 blur-xl opacity-50"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </span>
            </p>
            
            <p className="text-lg sm:text-xl text-white/80 font-medium max-w-2xl mx-auto">
              A destination unlike anything you&apos;ve experienced.
              <span className="block mt-3 text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Stay tuned for the reveal. 🌍✨
              </span>
            </p>
          </motion.div>

          {/* Pulsing Dots */}
          <motion.div
            className="flex justify-center gap-4 mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="w-3 h-3 rounded-full bg-gradient-to-r from-orange-400 to-pink-500"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.4,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
