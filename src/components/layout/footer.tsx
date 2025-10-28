'use client';

import { motion } from 'framer-motion';
import { Instagram, Youtube, Twitter, Mail } from 'lucide-react';
import { LINKS } from '@/lib/constants';
import Image from 'next/image';

export function Footer() {
  const navigation = [
    { name: 'Tickets', href: '#tickets' },
    { name: 'Line-up', href: '#lineup' },
    { name: 'Festival Guide', href: '#festival-guide' },
  ];

  const socials = [
    { icon: Instagram, href: LINKS.instagram, label: 'Instagram' },
    { icon: Youtube, href: LINKS.youtube, label: 'YouTube' },
    { icon: Twitter, href: LINKS.twitter, label: 'Twitter' },
    { icon: Mail, href: LINKS.email, label: 'Email' },
  ];

  return (
    <footer className="relative bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <motion.div
            className="flex justify-center md:justify-start"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-black text-white">
                DANCE EKO
              </h3>
              <p className="text-sm text-gray-400 mt-1">2025</p>
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.nav
            className="flex justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {navigation.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.a>
            ))}
          </motion.nav>

          {/* Social Icons */}
          <motion.div
            className="flex justify-center md:justify-end gap-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {socials.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon className="w-5 h-5 text-white" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          className="mt-8 pt-8 border-t border-white/10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Dance Eko. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
