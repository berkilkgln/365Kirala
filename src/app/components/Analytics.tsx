'use client';

import React from 'react';
import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

// Google Analytics için tip tanımlaması
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js',
      targetId: string,
      config?: {
        page_path?: string;
        page_title?: string;
        page_location?: string;
        cookie_flags?: string;
        anonymize_ip?: boolean;
        send_page_view?: boolean;
        cookie_domain?: string;
        cookie_expires?: number;
        custom_map?: Record<string, string>;
        debug_mode?: boolean;
        transport_url?: string;
        transport_type?: string;
        allow_google_signals?: boolean;
        allow_ad_personalization_signals?: boolean;
      }
    ) => void;
    dataLayer: Array<{
      event?: string;
      [key: string]: unknown;
    }>;
  }
}

const GA_MEASUREMENT_ID = 'G-0XBT5869ZT';
const GA_ADS_ID = 'AW-692798014';

// Google Analytics olay gönderme fonksiyonu
const pageview = (url: string): void => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
      page_title: document.title,
      page_location: window.location.href,
    });
    window.gtag('config', GA_ADS_ID, {
      page_path: url,
      page_title: document.title,
      page_location: window.location.href,
    });
  }
};

export function Analytics(): React.ReactElement {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathname + (searchParams?.toString() || '');
    pageview(url);
  }, [pathname, searchParams]);

  return (
    <>
      {/* Google Analytics 4 */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX', {
            page_title: document.title,
            page_location: window.location.href,
          });
        `}
      </Script>

      {/* Google Tag Manager */}
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-XXXXXXX');
        `}
      </Script>

      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
    </>
  );
} 