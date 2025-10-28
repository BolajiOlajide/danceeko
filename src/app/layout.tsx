import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { CursorGlow } from '@/components/ui/cursor-glow';
import { CustomCursor } from '@/components/ui/custom-cursor';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Dance Eko 2025 - Festival',
  description: 'A fusion of Afrobeats, Amapiano, and Afrohouse culture that moves our generation.',
  keywords: ['Dance Eko', 'Afrobeats', 'Amapiano', 'Afrohouse', 'Lagos', 'Festival', '2025'],
  openGraph: {
    title: 'Dance Eko 2025',
    description: 'A fusion of Afrobeats, Amapiano, and Afrohouse culture that moves our generation.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <CustomCursor />
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
