import { Metadata } from 'next';
import BlogPageClient from './BlogPageClient';

export const metadata: Metadata = {
  title: '365Kirala Blog - Lüks Yaşam ve Seyahat Rehberi',
  description: 'Lüks villa kiralama, yat kiralama, özel jet ve VIP transfer hizmetleri hakkında uzman içerikler ve seyahat rehberi. En iyi tatil deneyimleri için öneriler.',
  keywords: 'lüks villa kiralama, yat kiralama, özel jet kiralama, VIP transfer, lüks tatil, bungalov oteller',
  openGraph: {
    title: '365Kirala Blog - Lüks Yaşam ve Seyahat Rehberi',
    description: 'Lüks villa kiralama, yat kiralama, özel jet ve VIP transfer hizmetleri hakkında uzman içerikler ve seyahat rehberi.',
    type: 'website',
    url: 'https://365kirala.com/blog',
    images: [
      {
        url: '/images/blog/blogbanner.jpg',
        width: 1200,
        height: 630,
        alt: '365Kirala Blog',
      },
    ],
  },
};

export default function BlogPage() {
  return <BlogPageClient />;
} 