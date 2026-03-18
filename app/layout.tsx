import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Flawless Answer | Premium Communication Operations',
  description:
    'Flawless Answer delivers white-glove communication operations for executives and entrepreneurs. Professional inbox management, client correspondence, and communication systems by Shanna Brathwaite.',
  keywords: [
    'communication operations',
    'inbox management',
    'executive assistant',
    'client correspondence',
    'email management',
    'virtual assistant',
    'Shanna Brathwaite',
    'Flawless Answer',
  ],
  authors: [{ name: 'Shanna Brathwaite' }],
  creator: 'Flawless Answer',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.flawlessanswer.com',
    siteName: 'Flawless Answer',
    title: 'Flawless Answer | Premium Communication Operations',
    description:
      'White-glove communication operations for executives and entrepreneurs. Professional inbox management & client correspondence.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flawless Answer | Premium Communication Operations',
    description:
      'White-glove communication operations for executives and entrepreneurs.',
    creator: '@flawlessanswer',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <body className="bg-brand-black text-brand-white font-sans antialiased">
        {children}
      </body>
    </html>
  );
      }
