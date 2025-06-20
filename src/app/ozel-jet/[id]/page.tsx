'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '../../../features/home/navbar';
import { createUrlSlug } from '../../../lib/utils';
import jetData from '../../../data/ozel-jet/services.json';
import ReservationBox from '../../../components/ReservationBox';

type Jet = {
  id: number;
  image: string;
  title: string;
  departure: string;
  destination: string;
  price: number;
  booked: number;
  discount?: number;
  description: string;
  features: string[];
  slug: string;
};

export default function JetDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [jet, setJet] = useState<Jet | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadJet = async () => {
      try {
        if (!params?.id) {
          router.push('/ozel-jet');
          return;
        }

        const idWithSlug = params.id as string;
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
            router.replace(correctPath);
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
    };

    loadJet();
  }, [params?.id, router]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (!jet) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-xl text-gray-600">Özel jet bulunamadı.</p>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-br from-gray-50 to-white min-h-screen">
        {/* Enhanced Banner */}
        <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden">
          <Image
            src={jet.image}
            alt={jet.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={85}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          
          {/* Banner Content */}
          <div className="absolute inset-0 flex items-end">
            <div className="w-full bg-gradient-to-t from-black/80 to-transparent p-8">
              <div className="max-w-screen-xl mx-auto">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                  {jet.title}
                </h1>
                <div className="flex items-center gap-6 text-white">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm md:text-base">Aktif Uçuş</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    <span className="text-sm md:text-base">Premium Hizmet</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* İçerik */}
        <div className="max-w-screen-xl mx-auto px-4 md:px-6 py-8 md:py-16">
          {/* Enhanced Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8 flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 w-fit">
            <Link href="/" className="hover:text-indigo-600 transition-colors">Anasayfa</Link>
            <span className="text-gray-300">/</span>
            <Link href="/ozel-jet" className="hover:text-indigo-600 transition-colors">Özel Jet</Link>
            <span className="text-gray-300">/</span>
            <span className="font-semibold text-gray-800">{jet.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
            <div className="lg:col-span-2 space-y-8">
              {/* Jet Bilgileri - Enhanced */}
              <div className="bg-gradient-to-r from-sky-50 to-blue-50 p-8 rounded-2xl border border-sky-100 shadow-sm">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Jet Bilgileri</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-4 shadow-sm border">
                    <div className="text-sm text-gray-500 mb-1">Kalkış Noktası</div>
                    <div className="font-bold text-gray-900">{jet.departure}</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-sm border">
                    <div className="text-sm text-gray-500 mb-1">Varış Noktası</div>
                    <div className="font-bold text-gray-900">{jet.destination}</div>
                  </div>
                </div>
              </div>

              {/* Açıklama - Enhanced */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Hizmet Detayları</h2>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">{jet.description}</p>
              </div>

              {/* Jet Özellikleri - Enhanced */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Dahil Hizmetler</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {jet.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-100">
                      <div className="w-3 h-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full"></div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="sticky top-24 space-y-6">
              {/* Fiyat Kartı - Enhanced */}
              <div className="rounded-3xl bg-gradient-to-br from-white via-white/95 to-white/90 backdrop-blur-lg p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-100">
                {jet.discount && (
                  <div className="flex justify-center mb-4">
                    <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-sm font-bold px-6 py-2 rounded-full shadow-lg">
                      %{jet.discount} İNDİRİM
                    </span>
                  </div>
                )}

                {jet.discount && (
                  <div className="text-center text-gray-400 text-lg line-through mb-2">
                    {(jet.price * (1 + jet.discount / 100)).toLocaleString('en-US').replace(',', '.')}$
                  </div>
                )}

                <div className="flex justify-center items-end gap-2 mb-4">
                  <span className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent leading-none">
                    {jet.price.toLocaleString('en-US').replace(',', '.')}$
                  </span>
                  <span className="text-lg text-gray-500 mb-2">/ uçuş</span>
                </div>

                {/* Additional Info */}
                <div className="text-center space-y-2">
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span>Anında Onay</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span>Ücretsiz İptal</span>
                  </div>
                </div>
              </div>

              {/* Rezervasyon Kutusu - Enhanced */}
              <div className="rounded-3xl bg-gradient-to-br from-white via-white/95 to-white/90 backdrop-blur-lg p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-100">
                <ReservationBox selectedItem={{ title: jet.title }} />
                <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                  <p className="text-center text-sm text-gray-700 leading-relaxed">
                    <span className="font-bold text-blue-600">7/24</span> özel jet rezervasyonları <br />
                    <span className="font-bold text-green-600">Ücretsiz iptal</span> hakkı mevcuttur
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
