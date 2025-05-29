// app/layout.tsx (Next 13+)
import './globals.css';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'], // ihtiyacın olanlar
  variable: '--font-montserrat',
});

export const metadata = {
  title: '360Kirala',
  description: 'Lüks kiralama platformu',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${montserrat.variable}`}>
      <body className="font-sans overflow-y-auto bg-background text-foreground">
  {children}
</body>
    </html>
  );
}
