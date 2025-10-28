'use client';

import { motion } from 'framer-motion';
import { Map, Music, Utensils, Store, Sparkles } from 'lucide-react';

export function FestivalGuide() {
  const features = [
    { icon: Map, label: 'Festival Zones', color: 'from-cyan-500 to-blue-600' },
    { icon: Music, label: 'Art Spaces', color: 'from-purple-500 to-pink-600' },
    { icon: Utensils, label: 'Food Courts', color: 'from-orange-500 to-red-600' },
    { icon: Store, label: 'Brand Areas', color: 'from-emerald-500 to-teal-600' },
    { icon: Sparkles, label: 'Installations', color: 'from-yellow-500 to-orange-600' },
    { icon: Sparkles, label: 'VIP Lounges', color: 'from-pink-500 to-purple-600' },
  ];

  return (
    <section className="relative min-h-screen py-20 px-4 overflow-hidden bg-gradient-to-b from-black via-purple-950 to-black">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black mb-6" style={{
            textShadow: '0 0 40px rgba(139, 92, 246, 0.7)',
          }}>
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
              FESTIVAL GUIDE
            </span>
          </h2>
          <p className="text-xl sm:text-2xl text-white font-medium" style={{
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
          }}>
            Your complete guide to navigating the experience
          </p>
        </motion.div>

        {/* 3D Map Placeholder */}
        <motion.div
          className="relative max-w-5xl mx-auto mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative aspect-video rounded-3xl overflow-hidden border-2 border-white/20 bg-gradient-to-br from-gray-800 to-gray-900">
            {/* Placeholder for 3D render */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                <Map className="w-32 h-32 text-white/20" />
              </motion.div>
            </div>

            {/* Coming Soon Overlay */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Sparkles className="w-16 h-16 text-white mx-auto mb-4" />
                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                  Festival Map
                </h3>
                <p className="text-xl text-gray-300">Coming Soon</p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.label}
              className="relative group"
              whileHover={{ scale: 1.05, y: -8 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
            >
              {/* Glow */}
              <div className={`absolute -inset-1 bg-gradient-to-br ${feature.color} rounded-2xl opacity-0 group-hover:opacity-60 blur-md transition-opacity`} />
              
              <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center">
                <div className={`w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-sm sm:text-base font-bold text-white uppercase tracking-wide">
                  {feature.label}
                </h4>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Explore zones, art spaces, food courts, brand areas, installations,
            tables and more. Your complete festival experience awaits.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
