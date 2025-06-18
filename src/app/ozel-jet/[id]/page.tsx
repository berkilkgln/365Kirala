'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import jetData from '../../../data/ozel-jet/services.json';
import { Navbar } from '../../../features/home/navbar';
import ReservationBox from '../../../components/ReservationBox';
import { createUrlSlug } from '../../../lib/utils';

type Jet = {
  id: number;
  image: string;
  images?: string[];
  title: string;
  departure: string;
  destination: string;
  price: number;
  booked: number;
  discount?: number;
  description: string;
  features: string[];
  slug?: string;
};

export default function JetDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [jet, setJet] = useState<Jet | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      if (!params) {
        router.push('/ozel-jet');
        return;
      }

      const idWithSlug = params.id as string;
      if (!idWithSlug) {
        router.push('/ozel-jet');
        return;
      }

      const id = parseInt(idWithSlug.split('-')[0], 10);
      if (isNaN(id)) {
        router.push('/ozel-jet');
        return;
      }

      const foundJet = jetData.items.find(item => Number(item.id) === id);
      if (foundJet) {
        const slug = createUrlSlug(foundJet.title);
        const correctPath = `/ozel-jet/${id}-${slug}`;

        if (params.id !== `${id}-${slug}`) {
          router.push(correctPath);
          return;
        }

        setJet({ ...foundJet, id: Number(foundJet.id), slug });
      } else {
        router.push('/ozel-jet');
      }
    } catch (error) {
      console.error('Error loading jet:', error);
      router.push('/ozel-jet');
    } finally {
      setIsLoading(false);
    }
  }, [params, router]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (!jet) return <p className="p-6 text-center text-gray-600">Özel jet bulunamadı.</p>;

  return (
    <>
      <Navbar />
      <div className="bg-white min-h-screen">
        {/* Banner */}
        <div className="relative w-full h-[500px] overflow-hidden">
          <Image
            src={jet.image}
            alt={jet.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* İçerik */}
        <div className="max-w-screen-xl mx-auto px-6 py-16">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-6 flex items-center space-x-2">
            <Link href="/" className="hover:text-indigo-600">Anasayfa</Link>
            <span>/</span>
            <Link href="/ozel-jet" className="hover:text-indigo-600">Özel Jet</Link>
            <span>/</span>
            <span className="font-semibold text-gray-800">{jet.title}</span>
          </nav>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Sol Alan: Açıklama */}
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{jet.title}</h2>
              <p className="text-lg text-gray-700 mb-10 leading-relaxed">{jet.description}</p>

              {/* Özellikler */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Jet Özellikleri</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {jet.features.map((feature: string, index: number) => (
                    <li
                      key={index}
                      className="flex items-start space-x-3 bg-gradient-to-br from-gray-50 to-white p-4 rounded-xl border shadow-sm"
                    >
                      <span className="text-indigo-600 font-bold">✓</span>
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
                {/* İndirim Rozeti */}
                {jet.discount && (
                  <div className="flex justify-center mb-3">
                    <span className="bg-red-500 text-white text-xs font-bold px-5 py-2 rounded-full shadow-sm">
                      %{jet.discount} İNDİRİM
                    </span>
                  </div>
                )}

                {jet.discount && (
                  <div className="text-center text-gray-400 text-base line-through mb-1">
                    {(jet.price * (1 + jet.discount / 100)).toLocaleString('en-US').replace(',', '.')}$
                  </div>
                )}

                <div className="flex justify-center items-end gap-1">
                  <span className="text-4xl font-bold text-indigo-700 leading-none">
                    {jet.price.toLocaleString('en-US').replace(',', '.')}$
                  </span>
                  <span className="text-sm text-gray-500 mb-1">/ uçuş</span>
                </div>
              </div>

              <div className="rounded-3xl bg-gradient-to-b from-white via-white/90 to-white/80 backdrop-blur-lg p-6 shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-gray-100">
                <ReservationBox selectedItem={{ title: jet.title }} />
                <p className="text-center text-xs text-gray-500 mt-4 leading-snug">
                  Özel jet rezervasyonları <strong>7/24</strong> alınmaktadır. <br />
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
