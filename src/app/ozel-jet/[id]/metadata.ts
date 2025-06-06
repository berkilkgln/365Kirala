import type { Metadata } from 'next';
import jetData from '../../../data/ozel-jet/services.json';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const id = parseInt(params.id.split('-')[0], 10);
  const jet = jetData.items.find((item) => item.id === id);

  if (!jet) {
    return {
      title: 'Jet Bulunamadı',
      description: 'Aradığınız özel jet hizmeti bulunamadı.',
    };
  }

  return {
    title: `${jet.title} | Özel Jet Kiralama Hizmeti`,
    description: jet.description.slice(0, 160),
    openGraph: {
      title: `${jet.title} | Özel Jet Kiralama Hizmeti`,
      description: jet.description.slice(0, 160),
      images: [
        {
          url: jet.image,
          width: 1200,
          height: 630,
          alt: jet.title,
        },
      ],
    },
  };
}
