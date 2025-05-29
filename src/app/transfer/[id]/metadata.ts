import type { Metadata } from 'next';
import transferData from '../../../data/transfer/services.json';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const id = Number(params.id);
  const transfer = transferData.items.find((item) => item.id === id);

  if (!transfer) {
    return {
      title: 'Transfer Hizmeti Bulunamadı',
      description: 'Aradığınız transfer hizmeti bulunamadı.',
    };
  }

  return {
    title: `${transfer.title} | Konforlu Transfer Hizmeti`,
    description: transfer.description.slice(0, 160),
    openGraph: {
      title: `${transfer.title} | Konforlu Transfer Hizmeti`,
      description: transfer.description.slice(0, 160),
      images: [
        {
          url: transfer.image,
          width: 1200,
          height: 630,
          alt: transfer.title,
        },
      ],
    },
  };
}
