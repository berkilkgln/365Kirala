'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '../../../features/home/navbar';
import ReservationBox from '../../../components/ReservationBox';
import transferData from '../../../data/transfer/services.json';
import Script from 'next/script';
import { createUrlSlug } from '../../../lib/utils';

type Transfer = {
  id: number;
  image: string;
  images?: string[];
  title: string;
  location: string;
  price: number;
  booked: number;
  discount?: number;
  description: string;
  features: string[];
  slug?: string;
};

export default function TransferDetailPage() {
  const params = useParams();
  const idWithSlug = params?.id as string;
  const id = Number(idWithSlug.split('-')[0]);
  const [transfer, setTransfer] = useState<Transfer | null>(null);

  useEffect(() => {
    if (!id) return;
    const foundTransfer = transferData.items.find((item) => item.id === id);
    if (foundTransfer) {
      const slug = createUrlSlug(foundTransfer.title);
      const transferData = {
        ...foundTransfer,
        slug
      };
      setTransfer(transferData);
    } else {
      setTransfer(null);
    }
  }, [id]);

  if (!transfer) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center pt-20">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Transfer bulunamadı</h1>
            <p className="text-gray-600">Aradığınız transfer hizmeti mevcut değil.</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Script
        id="transfer-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: transfer.title,
            description: transfer.description,
            image: transfer.image,
            offers: {
              '@type': 'Offer',
              price: transfer.price,
              priceCurrency: 'TRY',
              availability: 'https://schema.org/InStock',
              priceValidUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.8',
              reviewCount: '150',
            },
            brand: {
              '@type': 'Brand',
              name: '365Kirala',
            },
            additionalProperty: [
              {
                '@type': 'PropertyValue',
                name: 'Lokasyon',
                value: transfer.location,
              },
            ],
          }),
        }}
      />
      <Navbar />
      <div className="bg-white min-h-screen">
        {/* Görsel */}
        <div className="relative w-full h-[400px] md:h-[600px] z-0">
          <Image
            src={transfer.image}
            alt={transfer.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={100}
          />
        </div>

        {/* İçerik */}
        <div className="max-w-screen-xl mx-auto px-4 md:px-6 py-8 md:py-16">
          <nav className="text-sm text-gray-500 mb-4 md:mb-6 flex items-center space-x-2">
            <Link href="/" className="hover:text-indigo-600">Anasayfa</Link>
            <span>/</span>
            <Link href="/transfer" className="hover:text-indigo-600">Transfer</Link>
            <span>/</span>
            <span className="font-semibold text-gray-800">{transfer.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{transfer.title}</h2>
              <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-10 leading-relaxed">{transfer.description}</p>

              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">Transfer Özellikleri</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {transfer.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3 bg-gray-50 p-4 rounded-xl border">
                    <span className="text-indigo-600 font-bold">✓</span>
                    <span className="text-sm md:text-base text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sticky top-24 space-y-6">
              <div className="rounded-3xl bg-gradient-to-b from-white via-white/90 to-white/80 backdrop-blur-lg p-6 shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-gray-100">
                {transfer.discount && (
                  <div className="flex justify-center mb-3">
                    <span className="bg-red-500 text-white text-xs font-bold px-5 py-2 rounded-full shadow-sm">
                      %{transfer.discount} İNDİRİM
                    </span>
                  </div>
                )}

                {transfer.discount && (
                  <div className="text-center text-gray-400 text-base line-through mb-1">
                    {(transfer.price * (1 + transfer.discount / 100)).toLocaleString('en-US').replace(',', '.')}₺
                  </div>
                )}

                <div className="flex justify-center items-end gap-1">
                  <span className="text-4xl font-bold text-indigo-700 leading-none">
                    {transfer.price.toLocaleString('en-US').replace(',', '.')}₺
                  </span>
                  <span className="text-sm text-gray-500 mb-1">/ transfer</span>
                </div>
              </div>

              <div className="rounded-3xl bg-gradient-to-b from-white via-white/90 to-white/80 backdrop-blur-lg p-6 shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-gray-100">
                <ReservationBox selectedItem={{ title: transfer.title }} />
                <p className="text-center text-xs text-gray-500 mt-4 leading-snug">
                  Transfer rezervasyonları <strong>7/24</strong> alınmaktadır. <br />
                  <strong>Ücretsiz iptal</strong> hakkı mevcuttur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
