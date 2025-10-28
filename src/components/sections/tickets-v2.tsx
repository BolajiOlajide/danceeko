'use client';

import { motion } from 'framer-motion';
import { TICKET_TIERS, COLORS } from '@/lib/constants';
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

  const tierIcons = [Star, Zap, Star, Zap] as const;
  const tierThemes = [
    {
      boxShadow: '0 14px 45px rgba(61,127,255,0.35)',
      accentGradient: `linear-gradient(90deg, ${COLORS.primary.lightBlue}, ${COLORS.primary.blue})`,
      badgeGradient: `linear-gradient(135deg, ${COLORS.primary.lightBlue}, ${COLORS.primary.blue})`,
      iconTint: COLORS.primary.lightBlue,
    },
    {
      boxShadow: '0 14px 45px rgba(139,92,246,0.35)',
      accentGradient: `linear-gradient(90deg, ${COLORS.accent.purple}, ${COLORS.accent.pink})`,
      badgeGradient: `linear-gradient(135deg, ${COLORS.accent.purple}, ${COLORS.accent.pink})`,
      iconTint: COLORS.accent.purple,
    },
    {
      boxShadow: '0 14px 45px rgba(249,115,22,0.35)',
      accentGradient: `linear-gradient(90deg, ${COLORS.accent.orange}, ${COLORS.accent.pink})`,
      badgeGradient: `linear-gradient(135deg, ${COLORS.accent.orange}, ${COLORS.accent.pink})`,
      iconTint: COLORS.accent.orange,
    },
    {
      boxShadow: '0 14px 45px rgba(52,211,153,0.3)',
      accentGradient: 'linear-gradient(90deg, #34D399, #059669)',
      badgeGradient: 'linear-gradient(135deg, #34D399, #059669)',
      iconTint: '#34D399',
    },
  ] as const;

  return (
    <section className="relative min-h-screen py-24 px-4 overflow-hidden bg-black" id="tickets">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#07060f] to-black opacity-95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_15%,rgba(239,208,104,0.18),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_85%,rgba(139,92,246,0.16),transparent_62%)]" />
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
            const theme = tierThemes[index];
            
            return (
              <motion.div
                key={tier.name}
                variants={itemVariants}
                className="relative group"
              >
                {/* Animated Glow Border */}
                <motion.div
                  className="absolute -inset-px rounded-3xl opacity-60 group-hover:opacity-100 transition-opacity pointer-events-none"
                  animate={{ scale: [1, 1.03, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  style={{ boxShadow: theme.boxShadow }}
                />

                {/* Card */}
                <div className="relative rounded-3xl border border-white/8 bg-gradient-to-br from-[#08080b] via-[#0e0b14] to-[#08070d] overflow-hidden">
                  {/* Tier Icon/Badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                      style={{ backgroundImage: theme.badgeGradient, boxShadow: '0 10px 30px rgba(0,0,0,0.45)' }}
                    >
                      <Icon className="w-6 h-6" style={{ color: theme.iconTint }} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative p-8">
                    {/* Ticket Name */}
                    <div className="mb-6">
                      <Ticket className="w-16 h-16 mb-4" style={{ color: `${theme.iconTint}33` }} />
                      <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-2">
                        {tier.name}
                      </h3>
                      <div className="h-1 w-16 rounded-full" style={{ backgroundImage: theme.accentGradient }} />
                    </div>

                    {/* Features */}
                    <div className="space-y-3 mb-8 text-white/70">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundImage: theme.accentGradient }}
                        />
                        <span className="text-sm font-medium">Festival Access</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundImage: theme.accentGradient }}
                        />
                        <span className="text-sm font-medium">Premium Experience</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundImage: theme.accentGradient }}
                        />
                        <span className="text-sm font-medium">Exclusive Perks</span>
                      </div>
                    </div>

                    {/* Price - Locked */}
                    <div className="text-center py-6 border-t border-white/10">
                      <Lock className="w-6 h-6 text-white/40 mx-auto mb-2" />
                      <p className="text-2xl font-black text-white/50">LOCKED</p>
                    </div>
                  </div>

                  {/* Coming Soon Pill */}
                  <div className="absolute inset-x-8 bottom-6 z-10 flex items-center justify-center">
                    <span className="inline-flex items-center justify-center rounded-full border border-white/15 bg-black/70 px-6 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white/65 backdrop-blur">
                      Coming Soon
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
