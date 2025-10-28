'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { TICKET_TIERS, LINKS } from '@/lib/constants';
import { Ticket } from 'lucide-react';

export function Tickets() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, 0.05, 0.01, 0.9] as const,
      },
    },
  };

  return (
    <section className="relative min-h-screen py-20 px-4 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600" />
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zm20.97 0l9.315 9.314-1.414 1.414L34.828 0h2.83zM22.344 0L13.03 9.314l1.414 1.414L25.172 0h-2.83zM32 0l12.142 12.142-1.414 1.414L30 .828 17.272 13.556 15.858 12.14 28 0zm5.657 0l14.85 14.85-1.414 1.414L33.828 0h3.83zm-11.314 0L11.515 14.85 10.1 13.436 23.515 0h2.83zm-7.072 0L.686 18.686l1.414 1.414L19.343 0h-.072zm32.284 60l-.83-.828 1.415-1.415L54.627 60h-2.827zm-48.97 0l.83-.828-1.414-1.415L5.373 60H8.2zm44.314 0L49.8 53.515l1.414-1.414L58.686 60h-2.83zm-39.657 0L10.2 53.515 8.787 52.1l-7.9 7.9h2.83zm32.284 0L46.143 60h-2.828l-7.072-7.071-1.414 1.414L49.8 60h-2.83zM22.344 60L13.03 50.686l1.414-1.414L25.172 60h-2.83zm14.142 0L24.344 47.858l1.414-1.414L42.172 60h-5.686zm-4.244 0L19.515 47.172l1.414-1.414L35.757 60H32.242zM60 37.757l-16.828 16.828-1.414-1.414L60 35.515v2.242zm0-4.243l-19.071 19.07-1.414-1.414L60 30.757v2.757zm0-4.243L36.515 53.757l-1.414-1.414L60 26.515v2.828zm0-4.242L32.758 49.586l-1.414-1.414L60 22.272v2.757zm0-4.242L28.515 45.343l-1.414-1.414L60 18.03v2.757zm0-4.243L24.343 40.828l-1.414-1.414L60 13.787v2.828zm0-4.242L20.1 36.586l-1.414-1.414L60 9.545v2.757zM0 22.243L22.243 0H19.515L0 19.515v2.728zM0 26.486L26.486 0h-2.829L0 23.657v2.829zM0 30.728L30.728 0h-2.828L0 27.9v2.828zM0 34.97L34.97 0h-2.827L0 32.143v2.828zM0 39.213L39.213 0h-2.828L0 36.385V39.213zM0 43.456L43.456 0h-2.829L0 40.627v2.83z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-white mb-6" style={{
            textShadow: '0 0 30px rgba(255, 255, 255, 0.3)',
          }}>
            BUY TICKETS
          </h2>
          <p className="text-xl sm:text-2xl text-white font-medium max-w-2xl mx-auto" style={{
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
          }}>
            Tickets currently unavailable. Be the first to know when the first
            wave drops.
          </p>
        </motion.div>

        {/* Ticket Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {TICKET_TIERS.map((tier, index) => {
            const gradients = [
              'from-blue-500 to-cyan-500',
              'from-purple-500 to-pink-500',
              'from-orange-500 to-red-500',
              'from-green-500 to-emerald-500',
            ];
            
            return (
            <motion.div
              key={tier.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              className="relative group"
            >
              {/* Colorful glow effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${gradients[index]} rounded-2xl opacity-75 blur-lg group-hover:opacity-100 transition-opacity`} />
              
              <div className="relative bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-lg rounded-2xl p-6 border-2 border-white/30 overflow-hidden">
                {/* Animated background gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${gradients[index]} opacity-20`}
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                
                {/* Blur Effect for "Coming Soon" */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-gray-900/80 backdrop-blur-md z-10 flex items-center justify-center">
                  <motion.span 
                    className={`text-xl sm:text-2xl font-black text-white bg-gradient-to-r ${gradients[index]} px-6 py-3 rounded-full shadow-xl uppercase tracking-wide`}
                    animate={{
                      boxShadow: [
                        '0 0 20px rgba(139, 92, 246, 0.5)',
                        '0 0 40px rgba(236, 72, 153, 0.8)',
                        '0 0 20px rgba(139, 92, 246, 0.5)',
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    COMING SOON
                  </motion.span>
                </div>

                {/* Ticket Content (Blurred) */}
                <div className="relative filter blur-sm">
                  <div className="flex justify-center mb-4">
                    <Ticket className="w-16 h-16 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 text-center uppercase">
                    {tier.name}
                  </h3>
                  <div className="h-px bg-white/30 my-4" />
                  <div className="space-y-2 text-white/80 text-center">
                    <p className="text-sm">⭐ Festival Access</p>
                    <p className="text-sm">🎵 Premium Experience</p>
                    <p className="text-sm">✨ Exclusive Perks</p>
                  </div>
                  <div className="mt-6 text-center">
                    <p className="text-3xl font-bold text-white">TBA</p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
          })}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button
            variant="primary"
            size="lg"
            onClick={() => (window.location.href = LINKS.waitlist)}
          >
            JOIN THE WAITLIST
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
