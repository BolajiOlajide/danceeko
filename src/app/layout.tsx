import type { Metadata } from 'next';
import { Work_Sans } from 'next/font/google';
import { GoogleAnalytics } from '@/components/google-analytics';
import { EventStructuredData } from '@/components/structured-data';
import { ScrollTracker } from '@/components/scroll-tracker';
import { EngagementTracker } from '@/components/engagement-tracker';
import './globals.css';

const workSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-work-sans',
});

export const metadata: Metadata = {
  title: 'Dance Eko',
  description: 'A fesival showcaasing the best of African Dance music and culture featuring world class entertainers',
  keywords: ['Dance music', 'Dance Eko', 'Afrobeats', 'Amapiano', 'Afrohouse', 'Lagos', 'Festival', '2025', 'Nigeria', 'African music festival', 'DJ festival Lagos'],
  openGraph: {
    title: 'Dance Eko',
    description: 'A fesival showcaasing the best of African Dance music and culture featuring world class entertainers',
    type: 'website',
    locale: 'en_NG',
    siteName: 'Dance Eko',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dance Eko',
    description: 'A fesival showcaasing the best of African Dance music and culture featuring world class entertainers',
  },
  alternates: {
    canonical: 'https://danceeko.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <EventStructuredData />
      </head>
      <body className={`${workSans.variable} font-sans antialiased`}>
        <GoogleAnalytics />
        <ScrollTracker />
        <EngagementTracker />
        {children}
      </body>
    </html>
  );
}
