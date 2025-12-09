import type { Metadata } from 'next';
import { Work_Sans } from 'next/font/google';
import { GoogleAnalytics } from '@/components/google-analytics';
import './globals.css';

const workSans = Work_Sans({ 
  subsets: ['latin'],
  variable: '--font-work-sans',
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
      <body className={`${workSans.variable} font-sans antialiased`}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
