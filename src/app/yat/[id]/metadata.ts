import type { Metadata } from 'next';
import yachtData from '../../../data/yat/services.json';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const id = Number(params.id);
  const yacht = yachtData.items.find((item) => item.id === id);

  if (!yacht) {
    return {
      title: 'Yat Bulunamadı',
      description: 'Aradığınız yat hizmeti bulunamadı.',
    };
  }

  return {
    title: `${yacht.title} | Lüks Yat Kiralama`,
    description: yacht.description.slice(0, 160), // SEO için kısa açıklama
    openGraph: {
      title: `${yacht.title} | Lüks Yat Kiralama`,
      description: yacht.description.slice(0, 160),
      images: [
        {
          url: yacht.image,
          width: 1200,
          height: 630,
          alt: yacht.title,
        },
      ],
    },
  };
}
