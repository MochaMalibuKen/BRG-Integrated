import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.brgsonstruckingllc.com'),
  title: 'BRG Integrated Services | Regional Logistics',
  description:
    'Veteran-owned regional logistics for commercial, government, and prime-contractor requirements across South Carolina, North Carolina, and Georgia.',
  openGraph: {
    title: 'BRG Integrated Services | Regional Logistics',
    description:
      'Disciplined regional transportation, dedicated delivery, scheduled routes, and logistics support.',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'BRG Integrated Services regional logistics' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BRG Integrated Services | Regional Logistics',
    description: 'Regional logistics. Clear ownership.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
