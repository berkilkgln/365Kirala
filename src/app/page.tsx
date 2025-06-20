import { Index } from "@/features/index";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '365Kirala - Lüks Kiralama Platformu | Yat, Villa, Özel Jet, Transfer',
  description: "Türkiye'nin en kapsamlı lüks kiralama platformu. Yat kiralama, villa kiralama, özel jet kiralama, transfer hizmetleri ve özel turlar. En iyi fiyat garantisi ve 7/24 müşteri desteği.",
  keywords: [
    '365kirala', 'lüks kiralama', 'yat kiralama', 'villa kiralama', 'özel jet kiralama',
    'transfer hizmetleri', 'tatil', 'lüks tatil', 'bungalov', 'günlük tur',
    'Bodrum', 'Antalya', 'İstanbul', 'Fethiye', 'Göcek', 'Türkiye tatil',
    'yacht rental', 'villa rental', 'private jet', 'luxury rental'
  ],
  openGraph: {
    title: '365Kirala - Lüks Kiralama Platformu',
    description: "Türkiye'nin en kapsamlı lüks kiralama platformu. Yat, villa, özel jet, transfer ve tur hizmetleri.",
    url: 'https://365kirala.com',
    siteName: '365Kirala',
    type: 'website',
    locale: 'tr_TR',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: '365Kirala - Lüks Kiralama Platformu',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '365Kirala - Lüks Kiralama Platformu',
    description: "Türkiye'nin en kapsamlı lüks kiralama platformu.",
    site: '@365kirala',
    creator: '@365kirala',
    images: ['https://365kirala.com/images/logo.png'],
  },
  alternates: {
    canonical: 'https://365kirala.com',
  },
};

export default function Home() {
  return <Index />;
}
