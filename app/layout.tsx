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
  metadataBase: new URL(
    process.env.SITE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000')
  ),
  title: 'BRG Integrated Services | Service Disabled Veteran Owned Logistics',
  description:
    'Service Disabled Veteran Owned regional logistics for commercial, government, and prime-contractor requirements across South Carolina, North Carolina, and Georgia.',
  openGraph: {
    title: 'BRG Integrated Services | Service Disabled Veteran Owned Logistics',
    description:
      'Disciplined regional transportation, dedicated delivery, scheduled routes, and logistics support.',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'BRG Integrated Services regional logistics' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BRG Integrated Services | Service Disabled Veteran Owned Logistics',
    description: 'Military discipline. Logistics that deliver.',
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
