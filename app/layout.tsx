import type { Metadata, Viewport } from 'next'
import { Inter, Newsreader, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { CosmicBackgroundNoSSR } from '@/components/cosmic-background-no-ssr'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--font-newsreader',
  display: 'swap',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Aubrey Intelligence | Longevity Research & Strategy Platform',
  description: 'Research analysis, ecosystem mapping, and strategic support for repair-based rejuvenation. Deep analytical intelligence on Ending Aging, RMR2, and the Aubrey de Grey framework.',
  keywords: ['longevity', 'Aubrey de Grey', 'Ending Aging', 'RMR2', 'rejuvenation', 'SENS', 'biogerontology', 'research'],
  authors: [{ name: 'Aubrey Intelligence' }],
  openGraph: {
    title: 'Aubrey Intelligence | Longevity Research & Strategy Platform',
    description: 'Research analysis, ecosystem mapping, and strategic support for repair-based rejuvenation.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#030b1a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const crispWebsiteId = process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID

  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable} ${geistMono.variable}`} style={{ background: '#030b1a' }}>
      <body className="font-sans antialiased" style={{ background: '#030b1a' }}>
        <main className="min-h-screen text-white relative">
          <CosmicBackgroundNoSSR />
          <Navigation />
          {children}
          <Footer />
        </main>
        {crispWebsiteId ? (
          <Script id="crisp-widget" strategy="afterInteractive">
            {`
window.$crisp = window.$crisp || [];
window.CRISP_WEBSITE_ID = ${JSON.stringify(crispWebsiteId)};
(function () {
  var d = document;
  var s = d.createElement("script");
  s.src = "https://client.crisp.chat/l.js";
  s.async = 1;
  d.getElementsByTagName("head")[0].appendChild(s);
})();
            `}
          </Script>
        ) : null}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
