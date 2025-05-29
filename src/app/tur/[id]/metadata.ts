import type { Metadata } from 'next';
import turData from '../../../data/tur/services.json';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const id = Number(params.id);
  const tur = turData.items.find((item) => item.id === id);

  if (!tur) {
    return {
      title: 'Tur Bulunamadı',
      description: 'Aradığınız tur hizmeti bulunamadı.',
    };
  }

  return {
    title: `${tur.title} | Lüks Tur Hizmeti`,
    description: tur.description.slice(0, 160),
    openGraph: {
      title: `${tur.title} | Lüks Tur Hizmeti`,
      description: tur.description.slice(0, 160),
      images: [
        {
          url: tur.image,
          width: 1200,
          height: 630,
          alt: tur.title,
        },
      ],
    },
  };
}
