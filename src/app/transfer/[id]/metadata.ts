import { Metadata } from 'next';
import transferData from '../../../data/transfer/services.json';
import { createUrlSlug } from '../../../lib/utils';

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = parseInt(params.id.split('-')[0], 10);
  const transfer = transferData.items.find(item => Number(item.id) === id);

  if (!transfer) {
    return {
      title: 'Transfer Bulunamadı | 365Kirala',
      description: 'Aradığınız transfer hizmeti bulunamadı.',
    };
  }

  return {
    title: `${transfer.title} | VIP Transfer Hizmeti | 365Kirala`,
    description: transfer.description,
    keywords: [
      'vip transfer', 'lüks transfer', 'havalimanı transfer', 'şehir içi transfer',
      'özel şoför', transfer.location, transfer.title
    ],
    openGraph: {
      title: `${transfer.title} | VIP Transfer Hizmeti | 365Kirala`,
      description: transfer.description,
      url: `https://365kirala.com/transfer/${id}-${createUrlSlug(transfer.title)}`,
      siteName: '365Kirala',
      type: 'website',
      images: [
        {
          url: transfer.image,
          width: 1200,
          height: 630,
          alt: transfer.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${transfer.title} | VIP Transfer Hizmeti | 365Kirala`,
      description: transfer.description,
      images: [transfer.image],
    },
  };
}
