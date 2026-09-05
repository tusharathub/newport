import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navigation } from '@/components/Navigation/Navigation';
import { GrainOverlay } from '@/components/GrainOverlay/GrainOverlay';
import { CustomCursorProvider } from '@/components/CustomCursor/CustomCursor';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Tushar Nailwal — AI + Full-Stack Engineer',
    template: '%s — Tushar Nailwal',
  },
  description:
    'Portfolio of Tushar Nailwal. AI applications, full-stack engineering, mobile development, and automation.',
  openGraph: {
    title: 'Tushar Nailwal — AI + Full-Stack Engineer',
    description:
      'Portfolio of Tushar Nailwal. AI applications, full-stack engineering, mobile development, and automation.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Tushar Nailwal',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <CustomCursorProvider>
          <Navigation />
          <main id="main-content">{children}</main>
          <GrainOverlay />
        </CustomCursorProvider>
      </body>
    </html>
  );
}
