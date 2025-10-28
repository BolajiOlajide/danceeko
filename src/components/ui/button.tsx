'use client';

import { forwardRef } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'ref'> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles = 'font-semibold transition-all duration-300 rounded-full inline-flex items-center justify-center';
    
    const variants = {
      primary: 'bg-gradient-to-r from-[#efd068] to-[#f7e8aa] text-black hover:from-[#f7e8aa] hover:to-[#efd068] shadow-[0_0_30px_rgba(239,208,104,0.6)] hover:shadow-[0_0_50px_rgba(247,232,170,0.8)] font-bold uppercase tracking-wider',
      secondary: 'bg-transparent border-2 border-[#efd068] text-[#efd068] hover:bg-gradient-to-r hover:from-[#efd068] hover:to-[#f7e8aa] hover:text-black hover:border-transparent shadow-[0_0_20px_rgba(239,208,104,0.3)] hover:shadow-[0_0_40px_rgba(247,232,170,0.6)] font-bold uppercase tracking-wider',
      ghost: 'bg-transparent text-white hover:bg-white/10',
    };
    
    const sizes = {
      sm: 'px-6 py-2 text-sm',
      md: 'px-8 py-3 text-base',
      lg: 'px-10 py-4 text-lg',
    };

    return (
      <motion.button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
