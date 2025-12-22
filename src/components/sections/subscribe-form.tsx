'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { trackFormView, trackFormSubmit, trackFormError, trackAnotherRegistration } from '@/lib/analytics';

export function SubscribeForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        trackFormView('subscribe_waitlist');
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        // Split full name into first and last name
        const nameParts = formData.fullName.trim().split(' ');
        // Handle cases where user might only enter one name (treat as first name, empty last name)
        // or multiple names (first part is first name, rest is last name)
        const firstName = nameParts[0];
        const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : ' '; // API requires lastName, send space if missing to avoid validation error if strict, or handle better?
        // Looking at the API `if (!lastName)` check, it strictly requires it. Let's ask user to enter full name if they only put one.

        if (nameParts.length < 2) {
            setStatus('error');
            const error = 'Please enter your full name (First and Last).';
            setErrorMessage(error);
            trackFormError('subscribe_waitlist', error);
            return;
        }

        try {
            const response = await fetch('/api/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    email: formData.email,
                    phone: formData.phone,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Something went wrong');
            }

            setStatus('success');
            setFormData({ fullName: '', email: '', phone: '' });
            trackFormSubmit('subscribe_waitlist', true);
        } catch (error: any) {
            setStatus('error');
            setErrorMessage(error.message);
            trackFormSubmit('subscribe_waitlist', false);
            trackFormError('subscribe_waitlist', error.message);
        }
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-24 px-4 sm:px-6 lg:px-8">
            {/* Video Background */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
            >
                <source src="/videos/hero-background.mp4" type="video/mp4" />
            </video>

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Animated Gradient Orbs - Warm tones */}
            <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-[#d26127]/20 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />


            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative w-full max-w-xl"
            >
                {/* Card Container */}
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
                    <div className="p-8 sm:p-12">

                        {/* Header */}
                        <div className="text-center mb-10">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="mb-4 inline-block rounded-full bg-[#d26127] px-4 py-1.5 backdrop-blur-md"
                            >
                                <span className="text-sm font-bold uppercase tracking-wider text-white">
                                    Join the Waitlist
                                </span>
                            </motion.div>
                            <motion.h2
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-4xl font-black text-white sm:text-5xl"
                            >
                                Dance Eko '26
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="mt-4 text-white/60 text-lg"
                            >
                                Secure your spot for the ultimate dance experience.
                            </motion.p>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <AnimatePresence mode="wait">
                                {status === 'success' ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        className="flex flex-col items-center justify-center py-10 text-center"
                                    >
                                        <div className="mb-4 text-5xl">✨</div>
                                        <h3 className="text-2xl font-bold text-white mb-2">You're on the list!</h3>
                                        <p className="text-white/60">Watch your inbox for exclusive updates.</p>
                                        <button
                                            onClick={() => {
                                                setStatus('idle');
                                                trackAnotherRegistration('subscribe_waitlist');
                                            }}
                                            className="mt-8 text-sm text-[#d26127] hover:text-[#ff7f4d] underline"
                                        >
                                            Register another person
                                        </button>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                    >
                                        <div className="space-y-5">
                                            {/* Full Name Input */}
                                            <div className="group relative">
                                                <label htmlFor="fullName" className="sr-only">Full Name</label>
                                                <input
                                                    type="text"
                                                    id="fullName"
                                                    name="fullName"
                                                    required
                                                    placeholder="Full Name (First & Last)"
                                                    className="w-full rounded-xl bg-white/5 border border-white/10 px-5 py-4 text-white placeholder-white/40 outline-none transition-all focus:border-[#d26127]/50 focus:bg-white/10 focus:ring-4 focus:ring-[#d26127]/10"
                                                    value={formData.fullName}
                                                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                                    disabled={status === 'loading'}
                                                />
                                                <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-white/20 group-focus-within:text-[#d26127] transition-colors">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                                </div>
                                            </div>

                                            {/* Phone Input */}
                                            <div className="group relative">
                                                <label htmlFor="phone" className="sr-only">Phone Number</label>
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    name="phone" // Required by backend if configured? The api/subscribe reads it.
                                                    placeholder="Phone Number"
                                                    className="w-full rounded-xl bg-white/5 border border-white/10 px-5 py-4 text-white placeholder-white/40 outline-none transition-all focus:border-[#d26127]/50 focus:bg-white/10 focus:ring-4 focus:ring-[#d26127]/10"
                                                    value={formData.phone}
                                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                    disabled={status === 'loading'}
                                                />
                                                <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-white/20 group-focus-within:text-[#d26127] transition-colors">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                                </div>
                                            </div>

                                            {/* Email Input */}
                                            <div className="group relative">
                                                <label htmlFor="email" className="sr-only">Email Address</label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    required
                                                    placeholder="Email Address"
                                                    className="w-full rounded-xl bg-white/5 border border-white/10 px-5 py-4 text-white placeholder-white/40 outline-none transition-all focus:border-[#d26127]/50 focus:bg-white/10 focus:ring-4 focus:ring-[#d26127]/10"
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    disabled={status === 'loading'}
                                                />
                                                <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-white/20 group-focus-within:text-[#d26127] transition-colors">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Error Message */}
                                        {errorMessage && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="mt-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-200 text-sm text-center"
                                            >
                                                {errorMessage}
                                            </motion.div>
                                        )}

                                        {/* Submit Button */}
                                        <button
                                            type="submit"
                                            disabled={status === 'loading'}
                                            className="mt-8 w-full rounded-xl bg-[#d26127] px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:scale-[1.02] hover:bg-[#b04d1b] hover:shadow-[#d26127]/25 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                                        >
                                            {status === 'loading' ? (
                                                <span className="flex items-center justify-center gap-2">
                                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                    Processing...
                                                </span>
                                            ) : (
                                                'Join Waitlist'
                                            )}
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </form>
                    </div>
                </div>

                {/* Footer info */}
                <p className="mt-8 text-center text-sm text-white/40">
                    By joining, you agree to receive updates about Danceeko.
                </p>
            </motion.div>
        </section>
    );
}
