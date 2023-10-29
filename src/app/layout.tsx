import './globals.css';
import type { Metadata } from 'next';
import { Providers } from './providers';
import { siteConfig } from '@/config/site';
import clsx from 'clsx';
import { fontSans } from '@/config/fonts';
import { Navbar } from '@/components/navbar';
import Footer from '@/components/Footer';
import Social from '@/components/social';

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={clsx(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.className
        )}
      >
        <Providers themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
          <div className='relative flex flex-col h-full bg-gradient-to-br from-blue-900/10 via-blue-900/20 to-blue-900/40'>
            <Navbar />
            <Social />
            <main className='container flex-grow px-6 pt-16 mx-auto max-w-7xl'>
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
