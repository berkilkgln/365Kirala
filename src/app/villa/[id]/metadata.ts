import type { Metadata } from 'next';
import villaData from '../../../data/villa/services.json';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const id = Number(params.id);
  const villa = villaData.items.find((item) => item.id === id);

  if (!villa) {
    return {
      title: 'Villa Bulunamadı',
      description: 'Aradığınız villa hizmeti bulunamadı.',
    };
  }

  return {
    title: `${villa.title} | Lüks Villa Kiralama`,
    description: villa.description.slice(0, 160),
    openGraph: {
      title: `${villa.title} | Lüks Villa Kiralama`,
      description: villa.description.slice(0, 160),
      images: [
        {
          url: villa.image,
          width: 1200,
          height: 630,
          alt: villa.title,
        },
      ],
    },
  };
}
