import type { Metadata } from 'next';
import {
  Unbounded,
  Bricolage_Grotesque,
  Bodoni_Moda,
  IBM_Plex_Mono,
  Plus_Jakarta_Sans,
  Syne,
} from 'next/font/google';
import { Navigation } from '@/components/Navigation/Navigation';
import { GrainOverlay } from '@/components/GrainOverlay/GrainOverlay';
import { CustomCursorProvider } from '@/components/CustomCursor/CustomCursor';
import { Footer } from '@/components/Footer/Footer';
import { personalData } from '@/data/personal';
import './globals.css';

const unbounded = Unbounded({
  subsets: ['latin'],
  variable: '--font-unbounded',
  display: 'swap',
});

const bigShoulders = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-big-shoulders',
  display: 'swap',
});

const bodoniModa = Bodoni_Moda({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-bodoni',
  display: 'swap',
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
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
    <html
      lang="en"
      className={`${unbounded.variable} ${bigShoulders.variable} ${bodoniModa.variable} ${ibmPlexMono.variable} ${jakartaSans.variable} ${syne.variable}`}
    >
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
