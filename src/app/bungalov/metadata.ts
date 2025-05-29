import type { Metadata } from 'next';
import bungalovData from '../../data/bungalov/services.json';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const id = Number(params.id);
  const bungalov = bungalovData.items.find((item) => item.id === id);

  if (!bungalov) {
    return {
      title: 'Bungalov Bulunamadı',
      description: 'Aradığınız bungalov hizmeti bulunamadı.',
    };
  }

  return {
    title: `${bungalov.title} | Lüks Bungalov Konaklama`,
    description: bungalov.description.slice(0, 160),
    openGraph: {
      title: `${bungalov.title} | Lüks Bungalov Konaklama`,
      description: bungalov.description.slice(0, 160),
      images: [
        {
          url: bungalov.image,
          width: 1200,
          height: 630,
          alt: bungalov.title,
        },
      ],
    },
  };
}
