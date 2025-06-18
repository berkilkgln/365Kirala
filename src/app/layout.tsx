import './globals.css';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { Analytics } from './components/Analytics';
import { Suspense } from 'react';
import type { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  fallback: ['system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif']
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
  colorScheme: 'light',
  minimumScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
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
    languages: {
      'tr-TR': 'https://365kirala.com',
      'en-US': 'https://365kirala.com/en',
    },
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
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: '365Kirala Logo',
        type: 'image/png',
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
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      noimageindex: false,
    },
  },


  verification: {
    google: 'LjeEhPbGMZOMys0Ri_ucJrqmFZ5zK4tFndZueNAta5E',
    yandex: 'yandex-verification-code',
    yahoo: 'yahoo-verification-code',
  },
  category: 'travel',
  classification: 'Business',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={inter.className}>
      <head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="365Kirala" />
        <meta name="apple-mobile-web-app-title" content="365Kirala" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
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
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.8',
                reviewCount: '1250'
              },
              priceRange: '₺₺₺',
            }),
          }}
        />
        
        {/* Elfsight AI Chatbot Script */}
        <Script 
          src="https://static.elfsight.com/platform/platform.js" 
          strategy="lazyOnload"
        />
      </head>
      <body className="font-sans overflow-y-auto bg-background text-foreground">
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
        {children}
        
        {/* Elfsight AI Chatbot Widget */}
        <div 
          className="elfsight-app-48a575b6-ead7-41b5-b8cd-82e694c275b5" 
          data-elfsight-app-lazy
        />
      </body>
    </html>
  );
}
