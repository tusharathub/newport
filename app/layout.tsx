import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navigation } from '@/components/Navigation/Navigation';
import { GrainOverlay } from '@/components/GrainOverlay/GrainOverlay';
import { CustomCursorProvider } from '@/components/CustomCursor/CustomCursor';
import { Footer } from '@/components/Footer/Footer';
import { personalData } from '@/data/personal';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${personalData.name} — ${personalData.title}`,
  description: personalData.shortBio,
  openGraph: {
    title: `${personalData.name} — ${personalData.title}`,
    description: personalData.shortBio,
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <CustomCursorProvider>
          {/* Film grain texture */}
          <GrainOverlay />

          {/* Top Navigation */}
          <Navigation />

          {/* Main content */}
          <div className="relative z-10">{children}</div>

          {/* Footer */}
          <Footer />
        </CustomCursorProvider>
      </body>
    </html>
  );
}
