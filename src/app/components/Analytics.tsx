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

// Google Analytics olay gönderme fonksiyonu
const pageview = (url: string): void => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('config', GA_MEASUREMENT_ID, {
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
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
        onLoad={(): void => {
          console.log('Google Analytics script loaded successfully');
        }}
        onError={(e: Error): void => {
          console.error('Google Analytics script failed to load', e);
        }}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
            cookie_flags: 'SameSite=None;Secure',
            anonymize_ip: true,
            send_page_view: true,
            cookie_domain: '365kirala.com',
            cookie_expires: 365 * 24 * 60 * 60,
            custom_map: {
              dimension1: 'user_type',
              dimension2: 'client_id'
            },
            debug_mode: ${process.env.NODE_ENV === 'development'},
            transport_url: 'https://www.google-analytics.com',
            transport_type: 'beacon',
            allow_google_signals: true,
            allow_ad_personalization_signals: true
          });
        `}
      </Script>
    </>
  );
} 