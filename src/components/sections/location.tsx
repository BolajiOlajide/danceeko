'use client';

import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

export function Location() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/50 z-10" />
        {/* Placeholder for Lekki Link Bridge / Eyo image - More vibrant */}
        <div className="w-full h-full bg-gradient-to-br from-orange-600 via-pink-600 to-purple-700" />
        
        {/* Animated particles effect */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-20 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Icon */}
          <motion.div
            className="flex justify-center mb-8"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-lg border-2 border-white/30 flex items-center justify-center">
              <MapPin className="w-12 h-12 text-white" />
            </div>
          </motion.div>

          {/* Main Text */}
          <motion.h2
            className="text-5xl sm:text-6xl md:text-8xl font-black mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              textShadow: '0 0 60px rgba(249, 115, 22, 0.8)',
            }}
          >
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
              LOCATION
            </span>
          </motion.h2>

          <motion.div
            className="relative inline-block"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Glowing effect - More intense */}
            <motion.div 
              className="absolute -inset-4 bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 blur-3xl opacity-60"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.6, 0.8, 0.6],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            
            <div className="relative bg-gradient-to-br from-black via-gray-900 to-black backdrop-blur-sm border-4 border-white/40 px-12 py-8 rounded-2xl">
              <p className="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-r from-white via-orange-200 to-pink-200 bg-clip-text text-transparent">
                TO BE ANNOUNCED
              </p>
            </div>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            className="text-xl sm:text-2xl text-white font-semibold mt-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{
              textShadow: '0 2px 20px rgba(0, 0, 0, 0.8)',
            }}
          >
            We&apos;re building a new world inside <span className="text-yellow-400 font-black">Lagos</span>. 
            <span className="block mt-3 text-2xl sm:text-3xl bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent font-black">
              Stay tuned for the reveal. 🌍
            </span>
          </motion.p>

          {/* Decorative elements */}
          <div className="mt-16 flex justify-center gap-4">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-3 h-3 rounded-full bg-white"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
