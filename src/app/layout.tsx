// app/layout.tsx
import './globals.css';
import { Montserrat } from 'next/font/google';
import Logo from '../../public/images/logo.png';
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-montserrat',
});

export const metadata = {
  title: '365Kirala - Lüks Kiralama Platformu',
  description: 'Yat, villa, özel jet, transfer ve tur hizmetlerinde Türkiye’nin lider lüks kiralama platformu.',
  viewport: 'width=device-width, initial-scale=1',
  keywords: ['lüks kiralama', 'yat kiralama', 'villa kiralama', 'özel jet kiralama', 'transfer hizmetleri', 'tatil'],
  authors: [{ name: '365Kirala', url: 'https://365kirala.com' }],
  openGraph: {
    title: '365Kirala - Lüks Kiralama Platformu',
    description: 'Yat, villa, özel jet, transfer ve tur hizmetlerinde Türkiye’nin lider lüks kiralama platformu.',
    url: 'https://365kirala.com',
    siteName: '365Kirala',
    type: 'website',
    locale: 'tr_TR',
    images: [
      {
        image: Logo,
        width: 1200,
        height: 630,
        alt: '365Kirala Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '365Kirala - Lüks Kiralama Platformu',
    description: 'Yat, villa, özel jet, transfer ve tur hizmetlerinde Türkiye’nin lider lüks kiralama platformu.',
    site: '@365kirala',
    creator: '@365kirala',
    images: ['https://365kirala.com/twitter-card.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={montserrat.variable}>
      <body className="font-sans overflow-y-auto bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
