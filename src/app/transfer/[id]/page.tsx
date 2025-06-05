'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '../../../features/home/navbar';
import ReservationBox from '../../../components/ReservationBox';
import transferData from '../../../data/transfer/services.json';
import Script from 'next/script';

type Transfer = {
  id: number;
  image: string;
  title: string;
  location: string;
  price: number;
  booked: number;
  discount?: number;
  description: string;
  features: string[];
};

export default function TransferDetailPage() {
  const params = useParams();
  const idWithSlug = params?.id as string;
  const id = parseInt(idWithSlug?.split('-')[0], 10);
  const [transfer, setTransfer] = useState<Transfer | null>(null);

  useEffect(() => {
    if (isNaN(id)) return;
    const found = transferData.items.find(item => Number(item.id) === id);
    if (found) setTransfer(found);
    else setTransfer(null);
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
        {/* Banner */}
        <div className="relative w-full h-60 md:h-72 overflow-hidden bg-gradient-to-r from-indigo-900 to-blue-800">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <Image src={transfer.image} alt={transfer.title} fill className="object-cover z-0" priority />
          <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">
            <h1 className="text-3xl md:text-5xl font-extrabold mt-12 md:mt-20 drop-shadow-xl animate-fade-in-up">
              VIP Transfer Hizmeti
            </h1>
            <p className="text-lg md:text-2xl mt-2 md:mt-4 drop-shadow-lg">{transfer.location}</p>
          </div>
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
                    <div className="w-5 h-5 text-indigo-600">
                      <svg className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
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

                {/* Eski Fiyat */}
                {transfer.discount && (
                  <div className="text-center text-gray-400 text-base line-through mb-1">
                    {(transfer.price * (1 + transfer.discount / 100)).toLocaleString('tr-TR')}₺
                  </div>
                )}

                {/* Yeni Fiyat + Açıklama */}
                <div className="flex justify-center items-end gap-1">
                  <span className="text-4xl font-bold text-indigo-700 leading-none">
                    {transfer.price.toLocaleString('tr-TR')}₺
                  </span>
                  <span className="text-sm text-gray-500 mb-1">&apos;dan başlayan fiyatlarla</span>
                  <span className="text-sm text-gray-500 mb-1">/ günlük</span>
                </div>
              </div>

              <div className="rounded-3xl bg-gradient-to-b from-white via-white/90 to-white/80 backdrop-blur-lg p-6 shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-gray-100">
                <ReservationBox selectedItem={{ title: transfer.title }} />
                <p className="text-center text-xs text-gray-500 mt-4 leading-snug">
                  Transfer rezervasyonları <strong>7/24</strong> alınmaktadır. <br />
                  <strong>Ücretsiz iptal</strong> hakkı mevcuttur.
                </p>
              </div>

              <div className="text-sm text-gray-600 text-center">
                {transfer.booked} kişi bu transferi daha önce tercih etti
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
