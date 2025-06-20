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
  themeColor: '#0D0D0D',
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
    images: ['https://365kirala.com/images/logo.png'],
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
  manifest: '/site.webmanifest',
  verification: {
    google: 'LjeEhPbGMZOMys0Ri_ucJrqmFZ5zK4tFndZueNAta5E',
  },
  category: 'travel',
  classification: 'Business',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={inter.className}>
      <head>
        <meta name="google-site-verification" content="LjeEhPbGMZOMys0Ri_ucJrqmFZ5zK4tFndZueNAta5E" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="365Kirala" />
        <meta name="apple-mobile-web-app-title" content="365Kirala" />
        <meta name="msapplication-TileColor" content="#0D0D0D" />
        <meta name="theme-color" content="#0D0D0D" />
        
        {/* Favicon Links */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icon.png" />
        <link rel="shortcut icon" href="/favicon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Essential SEO Meta Tags */}
        <meta name="author" content="365Kirala" />
        <meta name="language" content="tr" />
        <meta name="geo.region" content="TR" />
        <meta name="geo.placename" content="İstanbul" />
        <meta name="geo.position" content="41.0082;28.9784" />
        <meta name="ICBM" content="41.0082, 28.9784" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="1 days" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        
        {/* Social Media Meta Tags */}
        <meta property="og:site_name" content="365Kirala" />
        <meta property="og:locale" content="tr_TR" />
        <meta property="og:type" content="website" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@365kirala" />
        <meta name="twitter:creator" content="@365kirala" />
        <meta name="twitter:image:alt" content="365Kirala - Lüks Kiralama Platformu" />
        
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://static.elfsight.com" />
        
        {/* Google Ads Tracking Code - Lazy loaded */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-692798014"
          strategy="lazyOnload"
        />
        <Script id="google-ads" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-692798014');
          `}
        </Script>
        
        {/* Schema.org JSON-LD - Lazy loaded */}
        <Script
          id="schema-org"
          type="application/ld+json"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: '365Kirala',
              url: 'https://365kirala.com',
              logo: 'https://365kirala.com/images/logo.png',
              description: "Türkiye'nin en kapsamlı lüks kiralama platformu. Yat, villa, özel jet, transfer ve tur hizmetleri.",
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
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Lüks Kiralama Hizmetleri',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Yat Kiralama',
                      description: 'Lüks yat kiralama hizmetleri'
                    }
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Villa Kiralama',
                      description: 'Lüks villa kiralama hizmetleri'
                    }
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Özel Jet Kiralama',
                      description: 'Özel jet kiralama hizmetleri'
                    }
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Transfer Hizmetleri',
                      description: 'Lüks transfer hizmetleri'
                    }
                  }
                ]
              }
            }),
          }}
        />
        
        {/* Elfsight AI Chatbot Script - Lazy loaded */}
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
