import './globals.css';
import { Providers } from './providers';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CursorSpotlight from '@/components/CursorSpotlight';
import ScrollProgress from '@/components/ScrollProgress';
import CommandPalette from '@/components/CommandPalette';
import LoadingScreen from '@/components/LoadingScreen';
import PageTransition from '@/components/PageTransition';
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import ClarityProvider from "@/components/Clarity";
import { SpeedInsights } from "@vercel/speed-insights/next";

const SITE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.codedbysumit.com';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Sumitkumar Pandit - Full Stack Developer · AI Engineer · Web3 Developer',
    template: '%s - Sumitkumar Pandit',
  },

  verification: {
  google: "vdoAlAmLkNQVlXMrQ4_t7eF_Ln2GJqX3P-vS94caodQ",
},

  description: 'Sumitkumar Pandit - M.Sc. IT student building intelligent software, AI solutions, and Web3 experiences. Full Stack Developer, AI Engineer & Blockchain Developer.',
  keywords: ['Sumitkumar Pandit', 'Full Stack Developer', 'AI Engineer', 'Web3 Developer', 'Next.js Developer', 'Blockchain', 'Portfolio', 'Solidity', 'React Developer'],
  authors: [{ name: 'Sumitkumar Pandit' }],
  creator: 'Sumitkumar Pandit',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Sumitkumar Pandit',
    title: 'Sumitkumar Pandit - Full Stack · AI · Web3 Developer',
    description: 'Building intelligent software, AI solutions, and Web3 experiences.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sumitkumar Pandit - Full Stack · AI · Web3 Developer',
    description: 'Building intelligent software, AI solutions, and Web3 experiences.',
    creator: '@sumit4859',
  },
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.ico' },
};

export const viewport = { themeColor: '#0B996E' };

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Sumitkumar Pandit',
    url: SITE_URL,
    sameAs: ['https://github.com/sumit4859'],
    jobTitle: 'Full Stack Developer, AI Engineer, Web3 Developer',
    description: 'M.Sc. Information Technology student passionate about Full Stack Development, AI and Blockchain.',
  };
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script dangerouslySetInnerHTML={{__html:'window.addEventListener("error",function(e){if(e.error instanceof DOMException&&e.error.name==="DataCloneError"){e.stopImmediatePropagation();e.preventDefault()}},true);'}} />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased overflow-x-hidden">
        <Providers>
          <LoadingScreen />
          <CursorSpotlight />
          <ScrollProgress />
          <CommandPalette />
          <Navbar />
          <main className="relative"><PageTransition>{children}</PageTransition></main>
          <Footer />
        <Analytics />
         <ClarityProvider />
         <SpeedInsights />
        </Providers>
      </body>
      <GoogleAnalytics gaId="G-5SCXKLR3V9" />
    </html>
  );
}
