'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { TICKET_TIERS, LINKS } from '@/lib/constants';
import { Ticket, Lock, Star, Zap } from 'lucide-react';

export function TicketsV2() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.6, 0.05, 0.01, 0.9] as const,
      },
    },
  };

  const tierIcons = [Star, Zap, Star, Zap];
  const tierGradients = [
    { bg: 'from-cyan-500 to-blue-600', glow: 'shadow-cyan-500/50' },
    { bg: 'from-purple-500 to-pink-600', glow: 'shadow-purple-500/50' },
    { bg: 'from-orange-500 to-red-600', glow: 'shadow-orange-500/50' },
    { bg: 'from-emerald-500 to-teal-600', glow: 'shadow-emerald-500/50' },
  ];

  return (
    <section className="relative min-h-screen py-24 px-4 overflow-hidden" id="tickets">
      {/* Dynamic Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.15),transparent_50%)]" />
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 2px, transparent 2px),
                             linear-gradient(90deg, rgba(255,255,255,0.03) 2px, transparent 2px)`,
            backgroundSize: '100px 100px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '100px 100px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
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
            className="inline-block mb-4"
            animate={{
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Lock className="w-16 h-16 text-white/40 mx-auto" />
          </motion.div>
          
          <h2 
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-8"
            style={{
              textShadow: '0 0 60px rgba(139, 92, 246, 0.8), 0 10px 40px rgba(0, 0, 0, 0.8)',
            }}
          >
            <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              TICKETS
            </span>
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-2xl sm:text-3xl md:text-4xl text-white font-black uppercase tracking-wide">
              First Wave Drops Soon
            </p>
            <p className="text-lg sm:text-xl text-white/90 font-medium">
              Be the first to know when tickets go live
            </p>
          </div>
        </motion.div>

        {/* Ticket Tiers Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {TICKET_TIERS.map((tier, index) => {
            const Icon = tierIcons[index];
            const gradient = tierGradients[index];
            
            return (
              <motion.div
                key={tier.name}
                variants={itemVariants}
                className="relative group"
              >
                {/* Animated Glow Border */}
                <motion.div
                  className={`absolute -inset-[2px] bg-gradient-to-r ${gradient.bg} rounded-3xl opacity-60 blur-md group-hover:opacity-100 group-hover:blur-lg`}
                  animate={{
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />

                {/* Card */}
                <div className="relative bg-gradient-to-br from-black via-gray-950 to-black rounded-3xl border-2 border-white/10 overflow-hidden">
                  {/* Tier Icon/Badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${gradient.bg} flex items-center justify-center ${gradient.glow} shadow-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative p-8">
                    {/* Ticket Name */}
                    <div className="mb-6">
                      <Ticket className="w-16 h-16 text-white/20 mb-4" />
                      <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-2">
                        {tier.name}
                      </h3>
                      <div className={`h-1 w-16 bg-gradient-to-r ${gradient.bg} rounded-full`} />
                    </div>

                    {/* Features */}
                    <div className="space-y-3 mb-8 text-white/70">
                      <div className="flex items-center gap-3">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${gradient.bg}`} />
                        <span className="text-sm font-medium">Festival Access</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${gradient.bg}`} />
                        <span className="text-sm font-medium">Premium Experience</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${gradient.bg}`} />
                        <span className="text-sm font-medium">Exclusive Perks</span>
                      </div>
                    </div>

                    {/* Price - Locked */}
                    <div className="text-center py-6 border-t border-white/10">
                      <Lock className="w-6 h-6 text-white/40 mx-auto mb-2" />
                      <p className="text-2xl font-black text-white/50">LOCKED</p>
                    </div>
                  </div>

                  {/* Coming Soon Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/60 to-black/80 backdrop-blur-[2px] flex items-center justify-center z-10">
                    <motion.div
                      className={`bg-gradient-to-r ${gradient.bg} px-8 py-4 rounded-full shadow-2xl ${gradient.glow}`}
                      animate={{
                        scale: [1, 1.05, 1],
                        boxShadow: [
                          '0 10px 40px rgba(139, 92, 246, 0.4)',
                          '0 10px 60px rgba(236, 72, 153, 0.6)',
                          '0 10px 40px rgba(139, 92, 246, 0.4)',
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    >
                      <span className="text-xl sm:text-2xl font-black text-white uppercase tracking-widest">
                        COMING SOON
                      </span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Waitlist CTA - Prominent */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="max-w-2xl mx-auto mb-8">
            <p className="text-xl sm:text-2xl text-white font-bold mb-6">
              Don&apos;t miss out on the biggest Afrobeats festival of 2025
            </p>
          </div>
          
          <div className="relative inline-block">
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 rounded-full blur-2xl opacity-50"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <Button
              variant="primary"
              size="lg"
              className="relative text-xl sm:text-2xl px-12 py-6"
              onClick={() => (window.location.href = LINKS.waitlist)}
            >
              🔔 JOIN THE WAITLIST NOW
            </Button>
          </div>
          
          <p className="text-sm text-white/50 mt-6">
            ⚡ Get early access • 🎁 Exclusive discounts • 📧 Lineup announcements
          </p>
        </motion.div>
      </div>
    </section>
  );
}
