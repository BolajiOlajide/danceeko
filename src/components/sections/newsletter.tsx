'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Mail, Sparkles } from 'lucide-react';
import { useState } from 'react';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail('');
    }, 3000);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden" id="signup">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-purple-950 to-black">
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Icon */}
          <motion.div
            className="flex justify-center mb-8"
            animate={{
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-xl opacity-50" />
              <div className="relative w-20 h-20 bg-white rounded-full flex items-center justify-center">
                <Mail className="w-10 h-10 text-black" />
              </div>
            </div>
          </motion.div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6" style={{
            textShadow: '0 0 40px rgba(139, 92, 246, 0.8)',
          }}>
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
              STAY IN THE LOOP
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-white font-medium mb-12 max-w-2xl mx-auto" style={{
            textShadow: '0 2px 15px rgba(0, 0, 0, 0.7)',
          }}>
            Sign up for exclusive updates, <span className="text-cyan-400 font-bold">lineup reveals</span>, <span className="text-purple-400 font-bold">early access</span> and
            <span className="text-pink-400 font-bold"> secret discount drops</span>.
          </p>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {!isSubmitted ? (
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  required
                  className="flex-1 px-6 py-5 text-lg rounded-full bg-white/10 backdrop-blur-lg border-2 border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                />
                <Button type="submit" variant="primary" size="lg" className="text-lg px-10">
                  🚀 SIGN UP
                </Button>
              </div>
            ) : (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-8 py-4 flex items-center justify-center gap-3"
              >
                <Sparkles className="w-6 h-6 text-green-400" />
                <span className="text-xl font-semibold text-white">
                  Thank you! You&apos;re on the list! 🎉
                </span>
              </motion.div>
            )}
          </motion.form>

          {/* Privacy Note */}
          <motion.p
            className="text-sm text-gray-400 mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            We respect your privacy. Unsubscribe at any time.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
