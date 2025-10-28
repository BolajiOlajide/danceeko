'use client';

import { motion } from 'framer-motion';
import { LINEUP_ARTISTS } from '@/lib/constants';
import { Music, Lock } from 'lucide-react';

export function LineupV2() {
  return (
    <section className="relative min-h-screen py-24 px-4 overflow-hidden bg-black" id="lineup">
      {/* Stage Lights Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-pink-950 via-purple-950 to-black" />
        
        {/* Moving Spotlights */}
        {[
          { color: 'from-purple-500/20', delay: 0, x: ['-100%', '100%'], duration: 20 },
          { color: 'from-pink-500/20', delay: 5, x: ['100%', '-100%'], duration: 25 },
          { color: 'from-cyan-500/20', delay: 10, x: ['-100%', '100%'], duration: 18 },
        ].map((light, i) => (
          <motion.div
            key={i}
            className={`absolute top-0 w-[300px] h-full bg-gradient-to-b ${light.color} to-transparent blur-3xl`}
            animate={{
              x: light.x,
            }}
            transition={{
              duration: light.duration,
              repeat: Infinity,
              ease: 'linear',
              delay: light.delay,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-6"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Music className="w-20 h-20 text-white/30" />
          </motion.div>

          <h2 
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-6"
            style={{
              textShadow: '0 0 80px rgba(236, 72, 153, 0.8), 0 10px 50px rgba(0, 0, 0, 0.8)',
            }}
          >
            <span className="bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-500 bg-clip-text text-transparent">
              LINEUP
            </span>
          </h2>

          <motion.div
            className="inline-flex items-center gap-4 bg-white/5 backdrop-blur-xl border border-white/20 rounded-full px-8 py-4"
            animate={{
              boxShadow: [
                '0 0 30px rgba(139, 92, 246, 0.3)',
                '0 0 50px rgba(236, 72, 153, 0.5)',
                '0 0 30px rgba(139, 92, 246, 0.3)',
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Lock className="w-5 h-5 text-cyan-400" />
            <span className="text-xl sm:text-2xl font-black text-white uppercase tracking-wider">
              Revealing Soon
            </span>
          </motion.div>
        </motion.div>

        {/* Artist Cards - Staggered Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6 mb-20">
          {LINEUP_ARTISTS.map((artist, index) => (
            <motion.div
              key={index}
              className="relative aspect-[3/4] group"
              initial={{ opacity: 0, y: 60, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: [0.6, 0.05, 0.01, 0.9] as const,
              }}
              whileHover={{ scale: 1.05, y: -10, zIndex: 10 }}
            >
              {artist.revealed ? (
                // Revealed Artist Card
                <>
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-br from-yellow-500 via-pink-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity"
                  />
                  
                  <div className="relative h-full rounded-2xl overflow-hidden border-2 border-purple-400/50 group-hover:border-pink-400 transition-colors">
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-purple-950/50 to-transparent z-10" />
                    
                    {/* Placeholder for artist image */}
                    <div className="w-full h-full bg-gradient-to-br from-purple-900 via-pink-900 to-purple-950 flex items-center justify-center">
                      <Music className="w-20 h-20 text-purple-300/30" />
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                      <h3 className="text-lg sm:text-xl font-black text-white text-center uppercase tracking-tight">
                        {artist.name}
                      </h3>
                      <div className="h-0.5 w-12 bg-gradient-to-r from-yellow-400 to-pink-400 mx-auto mt-2" />
                    </div>
                  </div>
                </>
              ) : (
                // Mystery Card
                <>
                  <div className="absolute -inset-1 bg-gradient-to-br from-gray-600 to-gray-800 rounded-2xl opacity-40 blur-md" />
                  
                  <div className="relative h-full rounded-2xl overflow-hidden border-2 border-white/10 bg-gradient-to-br from-gray-900 via-gray-950 to-black">
                    <div className="h-full flex flex-col items-center justify-center p-6">
                      <motion.div
                        className="relative"
                        animate={{
                          rotate: [0, 360],
                        }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                      >
                        <div className="w-16 h-16 rounded-full border-4 border-dashed border-white/20 flex items-center justify-center">
                          <motion.span 
                            className="text-4xl"
                            animate={{
                              scale: [1, 1.2, 1],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: 'easeInOut',
                            }}
                          >
                            ?
                          </motion.span>
                        </div>
                      </motion.div>
                      
                      <p className="text-xs text-white/40 mt-4 uppercase tracking-widest font-bold">
                        Coming Soon
                      </p>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>

        {/* Full Lineup Announcement */}
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.div className="relative inline-block">
            {/* Massive Glow */}
            <motion.div
              className="absolute -inset-8 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 rounded-3xl blur-3xl opacity-40"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            
            <div className="relative bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 p-1 rounded-3xl">
              <div className="bg-black rounded-3xl px-12 sm:px-16 py-8 sm:py-12">
                <div className="flex flex-col items-center gap-4">
                  <span className="text-lg sm:text-xl text-white/60 uppercase tracking-widest font-bold">
                    Full Lineup
                  </span>
                  <h3 className="text-4xl sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent uppercase">
                    Announcement
                  </h3>
                  <div className="flex items-center gap-3">
                    <motion.div
                      className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [1, 0.5, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                    <span className="text-2xl sm:text-3xl md:text-4xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                      JANUARY 2025
                    </span>
                    <motion.div
                      className="w-3 h-3 rounded-full bg-gradient-to-r from-pink-400 to-purple-500"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [1, 0.5, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 1,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
