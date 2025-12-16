'use client';

import { motion } from "framer-motion";

export function Location() {
  return (
    <section
      id="location"
      className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-10"
    >
      {/* Palm leaves background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'url("/tropical-leaves-palm-branch-realistic-frame-composition-with-transparent-background-clusters-leaves-with-text 1.png")',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      />

      {/* 50% dark overlay */}
      <div className="absolute inset-0 bg-white/5" />

      <div className="relative mx-auto flex h-full w-full max-w-6xl items-center justify-center">
        {/* Location Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 w-full max-w-3xl rounded-2xl border border-white/20 bg-white/10 px-6 py-12 text-center backdrop-blur-sm sm:rounded-3xl sm:px-12 sm:py-20"
        >
          {/* LOCATION label */}
          <motion.h3
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.4em" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-6 text-lg font-black uppercase tracking-[0.4em] text-gray-400 sm:mb-8 sm:text-2xl sm:tracking-[0.5em]"
          >
            Location
          </motion.h3>

          {/* Twinkle Icon and Title */}
          <div className="mb-6 flex flex-col items-center justify-center gap-4 sm:mb-8 sm:flex-row sm:gap-2">
            {/* Pulsating Twinkle Icon */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [1, 0.8, 1],
                rotate: [0, 15, -15, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-3xl sm:text-4xl"
            >
              ✨
            </motion.div>

            {/* Lekki Coliseum */}
            <motion.h2
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 10,
                delay: 0.4
              }}
              className="flex flex-col items-center justify-center leading-none"
            >
              <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-3xl font-black text-transparent sm:text-5xl lg:text-6xl">
                Groove Park
              </span>
              <span className="mt-1 text-xl font-bold text-white/80 sm:mt-2 sm:text-3xl">
                [The Lekki Coliseum]
              </span>
            </motion.h2>

            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [1, 0.8, 1],
                rotate: [0, -15, 15, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="text-3xl sm:text-4xl"
            >
              ✨
            </motion.div>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="px-2 text-sm leading-relaxed text-white/90 sm:text-base md:text-lg"
          >
            We're building a new world inside Lagos unlike anything you've ever experienced!
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
