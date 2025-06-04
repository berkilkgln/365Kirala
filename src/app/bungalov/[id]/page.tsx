'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import bungalovData from '../../../data/bungalov/services.json';
import { Navbar } from '../../../features/home/navbar';
import ReservationBox from '../../../components/ReservationBox';
import { createUrlSlug } from '../../../lib/utils';

type Bungalov = {
  id: number;
  image: string;
  location: string;
  title: string;
  price: number;
  booked: number;
  discount?: number;
  description: string;
  features: string[];
  slug?: string;
};

export default function BungalovDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [bungalov, setBungalov] = useState<Bungalov | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadBungalov = async () => {
      try {
        if (!params?.id) {
          router.push('/bungalov');
          return;
        }

        const idWithSlug = params.id as string;
        const id = parseInt(idWithSlug.split('-')[0], 10);

        if (isNaN(id)) {
          router.push('/bungalov');
          return;
        }

        const foundBungalov = bungalovData.items.find(item => Number(item.id) === id);
        
        if (foundBungalov) {
          const slug = createUrlSlug(foundBungalov.title);
          const correctPath = `/bungalov/${id}-${slug}`;

          if (params.id !== `${id}-${slug}`) {
            router.replace(correctPath);
            return;
          }

          setBungalov({ ...foundBungalov, id: Number(foundBungalov.id), slug });
        } else {
          router.push('/bungalov');
        }
      } catch (error) {
        console.error('Error loading bungalov:', error);
        router.push('/bungalov');
      } finally {
        setIsLoading(false);
      }
    };

    loadBungalov();
  }, [params?.id, router]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (!bungalov) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-xl text-gray-600">Bungalov bulunamadı.</p>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="bg-white min-h-screen">
        {/* Banner */}
        <div className="relative w-full h-72 overflow-hidden bg-gradient-to-r from-indigo-900 to-blue-800">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <Image src={bungalov.image} alt={bungalov.title} fill className="object-cover z-0" priority />
          <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 mt-8 drop-shadow-xl animate-fade-in-up">
              Bungalov Konaklama
            </h1>
            <p className="text-2xl md:text-3xl drop-shadow-lg">{bungalov.location}</p>
          </div>
        </div>

        {/* İçerik */}
        <div className="max-w-screen-xl mx-auto px-6 py-16">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-6 flex items-center space-x-2">
            <Link href="/" className="hover:text-indigo-600">Anasayfa</Link>
            <span>/</span>
            <Link href="/bungalov" className="hover:text-indigo-600">Bungalov</Link>
            <span>/</span>
            <span className="font-semibold text-gray-800">{bungalov.title}</span>
          </nav>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Sol Alan: Açıklama */}
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{bungalov.title}</h2>
              <p className="text-lg text-gray-700 mb-10 leading-relaxed">{bungalov.description}</p>

              {/* Özellikler */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Bungalov Özellikleri</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {bungalov.features.map((feature: string, index: number) => (
                    <li
                      key={index}
                      className="flex items-start space-x-3 bg-gradient-to-br from-gray-50 to-white p-4 rounded-xl border shadow-sm"
                    >
                      <div className="w-6 h-6 text-indigo-600">
                        <svg
                          className="w-full h-full"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sağ Alan: Fiyat ve Rezervasyon */}
            <div className="sticky top-24 space-y-6">
              {/* Fiyat Kartı */}
              <div className="rounded-3xl bg-gradient-to-b from-white via-white/90 to-white/80 backdrop-blur-lg p-6 shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-gray-100">
                {bungalov.discount && (
                  <div className="flex justify-center mb-3">
                    <span className="bg-red-500 text-white text-xs font-bold px-5 py-2 rounded-full shadow-sm">
                      %{bungalov.discount} İNDİRİM
                    </span>
                  </div>
                )}

                {bungalov.discount && (
                  <div className="text-center text-gray-400 text-base line-through mb-1">
                    {(bungalov.price * (1 + bungalov.discount / 100)).toLocaleString('en-US').replace(',', '.')}₺
                  </div>
                )}

                <div className="flex justify-center items-end gap-1">
                  <span className="text-4xl font-bold text-indigo-700 leading-none">
                    {bungalov.price.toLocaleString('en-US').replace(',', '.')}₺
                  </span>
                  <span className="text-sm text-gray-500 mb-1">&apos;den başlayan fiyatlarla</span>
                  <span className="text-sm text-gray-500 mb-1">/ günlük</span>
                </div>
              </div>

              {/* Rezervasyon Kutusu */}
              <div className="rounded-3xl bg-gradient-to-b from-white via-white/90 to-white/80 backdrop-blur-lg p-6 shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-gray-100">
                <ReservationBox selectedItem={{ title: bungalov.title }} />
                <p className="text-center text-xs text-gray-500 mt-4 leading-snug">
                  Bungalov rezervasyonları <strong>7/24</strong> alınmaktadır. <br />
                  <strong>Ücretsiz iptal</strong> hakkı mevcuttur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
