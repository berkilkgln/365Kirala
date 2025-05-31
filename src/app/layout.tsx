import './globals.css';
import { Montserrat } from 'next/font/google';
import Logo from '../../public/images/logo.png';
import Script from 'next/script';
import { Analytics } from './components/Analytics';
import { Suspense } from 'react';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  metadataBase: new URL('https://365kirala.com'),
  title: {
    default: '365Kirala - Lüks Kiralama Platformu',
    template: '%s | 365Kirala',
  },
  description: "Yat, villa, özel jet, transfer ve tur hizmetlerinde Türkiye'nin lider lüks kiralama platformu. En iyi fiyat garantisi ve 7/24 müşteri desteği.",
  keywords: [
    'lüks kiralama', 'yat kiralama', 'villa kiralama', 'özel jet kiralama',
    'transfer hizmetleri', 'tatil', 'lüks tatil', 'bungalov', 'günlük tur',
    'Bodrum', 'Antalya', 'İstanbul', 'Fethiye', 'Göcek',
  ],
  authors: [{ name: '365Kirala', url: 'https://365kirala.com' }],
  creator: '365Kirala',
  publisher: '365Kirala',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://365kirala.com',
  },
  openGraph: {
    title: '365Kirala - Lüks Kiralama Platformu',
    description: "Yat, villa, özel jet, transfer ve tur hizmetlerinde Türkiye'nin lider lüks kiralama platformu. En iyi fiyat garantisi ve 7/24 müşteri desteği.",
    url: 'https://365kirala.com',
    siteName: '365Kirala',
    type: 'website',
    locale: 'tr_TR',
    images: [
      {
        url: Logo.src,
        width: 1200,
        height: 630,
        alt: '365Kirala Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '365Kirala - Lüks Kiralama Platformu',
    description: "Yat, villa, özel jet, transfer ve tur hizmetlerinde Türkiye'nin lider lüks kiralama platformu.",
    site: '@365kirala',
    creator: '@365kirala',
    images: ['https://365kirala.com/twitter-card.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={montserrat.variable}>
      <head>
        {/* Schema.org JSON-LD */}
        <Script
          id="schema-org"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: '365Kirala',
              url: 'https://365kirala.com',
              logo: 'https://365kirala.com/logo.png',
              description: "Yat, villa, özel jet, transfer ve tur hizmetlerinde Türkiye'nin lider lüks kiralama platformu.",
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'TR',
                addressLocality: 'İstanbul',
                addressRegion: 'İstanbul',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+90-xxx-xxx-xxxx',
                contactType: 'customer service',
                areaServed: 'TR',
                availableLanguage: ['Turkish', 'English'],
              },
              sameAs: [
                'https://instagram.com/365kirala',
                'https://facebook.com/365kirala',
                'https://twitter.com/365kirala',
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans overflow-y-auto bg-background text-foreground">
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
