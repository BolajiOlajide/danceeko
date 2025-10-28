'use client';

import { motion } from 'framer-motion';
import { LINEUP_ARTISTS } from '@/lib/constants';
import { Music } from 'lucide-react';
import Image from 'next/image';

export function Lineup() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, 0.05, 0.01, 0.9] as const,
      },
    },
  };

  return (
    <section className="relative min-h-screen py-20 px-4 overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/70 z-10" />
        {/* Placeholder for stage background - More vibrant */}
        <div className="w-full h-full bg-gradient-to-b from-purple-900 via-pink-900 to-black" />
        
        {/* Animated lights effect */}
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 200, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-0 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -200, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto">
        {/* Headliners Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-4">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black mb-2" style={{
              textShadow: '0 0 40px rgba(139, 92, 246, 0.8)',
            }}>
              <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent animate-gradient">
                HEADLINERS
              </span>
            </h2>
            <p className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              COMING SOON
            </p>
          </div>

          {/* Artist Cards Grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {LINEUP_ARTISTS.map((artist, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className="relative aspect-square group"
              >
                {/* Colorful glow for each card */}
                <div className={`absolute -inset-1 bg-gradient-to-br ${
                  artist.revealed 
                    ? 'from-yellow-500 via-pink-500 to-purple-500' 
                    : 'from-gray-500 to-gray-700'
                } rounded-2xl opacity-60 blur-md group-hover:opacity-100 transition-opacity duration-300`} />
                
                {artist.revealed ? (
                  // Revealed Artist
                  <div className="relative h-full rounded-2xl overflow-hidden border-2 border-purple-400">
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                    <div className="w-full h-full bg-purple-900 flex items-center justify-center">
                      <Music className="w-16 h-16 text-purple-300" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                      <h3 className="text-lg font-bold text-white text-center">
                        {artist.name}
                      </h3>
                    </div>
                  </div>
                ) : (
                  // Coming Soon Cards
                  <div className="relative h-full rounded-2xl overflow-hidden border-2 border-white/20">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 backdrop-blur-xl" />
                    <div className="relative h-full flex flex-col items-center justify-center p-4">
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                          rotate: [0, 5, -5, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      >
                        <div className="w-16 h-16 rounded-full border-4 border-dashed border-white/30 flex items-center justify-center">
                          <span className="text-3xl text-white/50">?</span>
                        </div>
                      </motion.div>
                      <p className="text-sm text-white/60 mt-3 text-center font-semibold">
                        COMING SOON
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Full Lineup Section */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h3 className="text-4xl sm:text-5xl font-black text-white mb-8" style={{
            textShadow: '0 0 30px rgba(236, 72, 153, 0.6)',
          }}>
            FULL LINE-UP
          </h3>
          <motion.div
            className="relative inline-block"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {/* Glow effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 rounded-2xl blur-xl opacity-75" />
            <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 px-12 py-6 rounded-2xl border-2 border-white/20">
              <p className="text-2xl sm:text-3xl text-white font-black uppercase tracking-wider">
                🎵 DROPS SOON 🎵
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
