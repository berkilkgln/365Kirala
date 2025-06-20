'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import yachtData from '../../../data/yat/services.json';
import { Navbar } from '../../../features/home/navbar';
import ReservationBox from '../../../components/ReservationBox';
import Script from 'next/script';
import { createUrlSlug } from '../../../lib/utils';
import useEmblaCarousel from 'embla-carousel-react';

type Yacht = {
  id: number;
  image: string;
  images?: string[];
  location: string;
  title: string;
  price: number;
  booked: number;
  discount?: number;
  description: string;
  features?: string[];
  length?: string;
  capacity?: string;
  slug?: string;
};

export default function YachtDetailPage() {
  const params = useParams();
  const idWithSlug = params?.id as string;
  const id = Number(idWithSlug.split('-')[0]);
  const [yacht, setYacht] = useState<Yacht | null>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'center',
    containScroll: 'trimSnaps'
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!id) return;
    const foundYacht = yachtData.items.find((item) => item.id === id);
    if (foundYacht) {
      const slug = createUrlSlug(foundYacht.title);
      const yacht: Yacht = {
        id: foundYacht.id,
        image: foundYacht.image,
        images: foundYacht.images,
        location: foundYacht.location,
        title: foundYacht.title,
        price: foundYacht.price,
        booked: foundYacht.booked,
        discount: foundYacht.discount,
        description: foundYacht.description,
        features: foundYacht.comfort || [],
        length: foundYacht.specifications?.boatLength,
        capacity: foundYacht.specifications?.cruiseCapacity?.toString(),
        slug
      };
      setYacht(yacht);
    } else {
      setYacht(null);
    }
  }, [id]);

  if (!yacht) return <p className="p-6 text-center text-gray-600">Yat bulunamadı.</p>;

  // services.json'daki tüm görselleri kullan
  const sliderImages = yacht.images || [yacht.image];

  return (
    <>
      <Script
        id="yacht-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: yacht.title,
            description: yacht.description,
            image: yacht.image,
            offers: {
              '@type': 'Offer',
              price: yacht.price,
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
              { '@type': 'PropertyValue', name: 'Uzunluk', value: yacht.length },
              { '@type': 'PropertyValue', name: 'Kapasite', value: yacht.capacity },
              { '@type': 'PropertyValue', name: 'Lokasyon', value: yacht.location },
            ],
          }),
        }}
      />
      <Navbar />
      <div className="bg-gradient-to-br from-gray-50 to-white min-h-screen">
        {/* Enhanced Banner */}
        <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden">
          <div className="absolute inset-0">
            <div ref={emblaRef} className="h-full w-full overflow-hidden">
              <div className="flex h-full">
                {sliderImages.map((img, idx) => (
                  <div key={idx} className="flex-[0_0_100%] min-w-0 h-full relative">
                    <Image
                      src={img}
                      alt={`${yacht.title} - Görsel ${idx + 1}`}
                      fill
                      className="object-cover"
                      priority={idx === 0}
                      loading={idx === 0 ? undefined : "lazy"}
                      sizes="100vw"
                      quality={85}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

          {/* Slider Butonları */}
          <div className="absolute inset-0 z-10 flex items-center justify-between px-4">
            <button
              onClick={scrollPrev}
              className="bg-black/40 hover:bg-black/60 text-white rounded-full p-3 transition-all duration-300 hover:scale-110"
              aria-label="Previous slide"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
            </button>
            <button
              onClick={scrollNext}
              className="bg-black/40 hover:bg-black/60 text-white rounded-full p-3 transition-all duration-300 hover:scale-110"
              aria-label="Next slide"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
            </button>
          </div>

          {/* Banner Content */}
          <div className="absolute inset-0 flex items-end">
            <div className="w-full bg-gradient-to-t from-black/80 to-transparent p-8">
              <div className="max-w-screen-xl mx-auto">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                  {yacht.title}
                </h1>
                <div className="flex items-center gap-6 text-white">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm md:text-base">Aktif Kiralama</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    <span className="text-sm md:text-base">Premium Yat</span>
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
            <Link href="/yat" className="hover:text-indigo-600 transition-colors">Yatlar</Link>
            <span className="text-gray-300">/</span>
            <span className="font-semibold text-gray-800">{yacht.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
            <div className="lg:col-span-2 space-y-8">
              {/* Yat Bilgileri - Enhanced */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100 shadow-sm">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Yat Bilgileri</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-4 shadow-sm border">
                    <div className="text-sm text-gray-500 mb-1">Lokasyon</div>
                    <div className="font-bold text-gray-900">{yacht.location}</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-sm border">
                    <div className="text-sm text-gray-500 mb-1">Rezervasyon</div>
                    <div className="font-bold text-blue-600">{yacht.booked}+ kişi tercih etti</div>
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
                  <h2 className="text-2xl font-bold text-gray-900">Yat Detayları</h2>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">{yacht.description}</p>
              </div>

              {/* Yat Özellikleri - Enhanced */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Yat Özellikleri</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {yacht.features?.map((feature, index) => (
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
                {yacht.discount && (
                  <div className="flex justify-center mb-4">
                    <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-sm font-bold px-6 py-2 rounded-full shadow-lg">
                      %{yacht.discount} İNDİRİM
                    </span>
                  </div>
                )}

                {yacht.discount && (
                  <div className="text-center text-gray-400 text-lg line-through mb-2">
                    {(yacht.price * (1 + yacht.discount / 100)).toLocaleString('en-US').replace(',', '.')}$
                  </div>
                )}

                <div className="flex justify-center items-end gap-2 mb-4">
                  <span className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent leading-none">
                    {yacht.price.toLocaleString('en-US').replace(',', '.')}$
                  </span>
                  <span className="text-lg text-gray-500 mb-2">/ günlük</span>
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
                <ReservationBox selectedItem={{ title: yacht.title }} />
                <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                  <p className="text-center text-sm text-gray-700 leading-relaxed">
                    <span className="font-bold text-blue-600">7/24</span> yat kiralama rezervasyonları <br />
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
