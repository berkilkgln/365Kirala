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
  images: string[];
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
  specifications?: Record<string, string | number | undefined>;
  comfort?: string[];
  navigation?: string[];
  entertainment?: string[];
  safety?: string[];
  includedInPrice?: string[];
  checkInOut?: {
    overnight?: {
      checkIn: string;
      checkOut: string;
    };
    daily?: {
      checkIn: string;
      checkOut: string;
    };
  };
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
        features: [],
        slug,
        specifications: foundYacht.specifications,
        comfort: foundYacht.comfort,
        navigation: foundYacht.navigation,
        entertainment: foundYacht.entertainment,
        safety: foundYacht.safety,
        includedInPrice: foundYacht.includedInPrice,
        checkInOut: foundYacht.checkInOut
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
      <div className="bg-white min-h-screen">
        {/* Görsel Slider */}
        <div className="relative w-full h-[400px] md:h-[600px] z-0">
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
                      sizes="100vw"
                      quality={100}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

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
        </div>

        {/* İçerik */}
        <div className="max-w-screen-xl mx-auto px-4 md:px-6 py-8 md:py-16">
          <nav className="text-sm text-gray-500 mb-4 md:mb-6 flex items-center space-x-2">
            <Link href="/" className="hover:text-indigo-600">Anasayfa</Link>
            <span>/</span>
            <Link href="/yat" className="hover:text-indigo-600">Yatlar</Link>
            <span>/</span>
            <span className="font-semibold text-gray-800">{yacht.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{yacht.title}</h2>
              {/* <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-10 leading-relaxed">{yacht.description}</p> */}

              {/* Teknik Özellikler */}
              {yacht.specifications && (
                <div className="mb-10">
                  <div className="flex items-center mb-3">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 mr-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 17v-2a4 4 0 0 1 8 0v2M5 21v-2a4 4 0 0 1 8 0v2M17 21v-2a4 4 0 0 0-8 0v2"/></svg>
                    </span>
                    <h3 className="text-xl font-semibold text-indigo-700 border-l-4 border-indigo-400 pl-3">Teknik Özellikler</h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-50 rounded-2xl p-4 border">
                    {Object.entries(yacht.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between text-gray-700 text-sm py-1 border-b last:border-b-0">
                        <span className="font-medium capitalize">{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</span>
                        <span>{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Konfor Özellikleri */}
              {yacht.comfort && (
                <div className="mb-10">
                  <div className="flex items-center mb-4">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-green-100 to-green-200 text-green-600 mr-3 shadow-sm">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8v4l3 3"/></svg>
                    </span>
                    <h3 className="text-xl font-bold text-green-700 border-l-4 border-green-400 pl-3">Konfor Özellikleri</h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-50 rounded-2xl p-4 border">
                    {yacht.comfort?.map((item: string, i: number) => (
                      <div key={i} className="flex justify-between text-gray-700 text-sm py-1 border-b last:border-b-0">
                        <span className="font-medium">{item}</span>
                        <span className="text-green-600">✓</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Navigasyon Özellikleri */}
              {yacht.navigation && (
                <div className="mb-10">
                  <div className="flex items-center mb-4">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 text-blue-600 mr-3 shadow-sm">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2v20M2 12h20"/></svg>
                    </span>
                    <h3 className="text-xl font-bold text-blue-700 border-l-4 border-blue-400 pl-3">Navigasyon Ekipmanları</h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-50 rounded-2xl p-4 border">
                    {yacht.navigation?.map((item: string, i: number) => (
                      <div key={i} className="flex justify-between text-gray-700 text-sm py-1 border-b last:border-b-0">
                        <span className="font-medium">{item}</span>
                        <span className="text-blue-600">✓</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Eğlence Özellikleri */}
              {yacht.entertainment && (
                <div className="mb-10">
                  <div className="flex items-center mb-4">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-pink-100 to-pink-200 text-pink-600 mr-3 shadow-sm">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12l2 2 4-4"/></svg>
                    </span>
                    <h3 className="text-xl font-bold text-pink-700 border-l-4 border-pink-400 pl-3">Eğlence & Eğlence</h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-50 rounded-2xl p-4 border">
                    {yacht.entertainment?.map((item: string, i: number) => (
                      <div key={i} className="flex justify-between text-gray-700 text-sm py-1 border-b last:border-b-0">
                        <span className="font-medium">{item}</span>
                        <span className="text-pink-600">✓</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Güvenlik Özellikleri */}
              {yacht.safety && (
                <div className="mb-10">
                  <div className="flex items-center mb-4">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-100 to-yellow-200 text-yellow-600 mr-3 shadow-sm">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2l9 21H3L12 2z"/></svg>
                    </span>
                    <h3 className="text-xl font-bold text-yellow-700 border-l-4 border-yellow-400 pl-3">Güvenlik Ekipmanları</h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-50 rounded-2xl p-4 border">
                    {yacht.safety?.map((item: string, i: number) => (
                      <div key={i} className="flex justify-between text-gray-700 text-sm py-1 border-b last:border-b-0">
                        <span className="font-medium">{item}</span>
                        <span className="text-yellow-600">✓</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Fiyata Dahil */}
              {yacht.includedInPrice && (
                <div className="mb-10">
                  <div className="flex items-center mb-4">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-purple-100 to-purple-200 text-purple-600 mr-3 shadow-sm">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>
                    </span>
                    <h3 className="text-xl font-bold text-purple-700 border-l-4 border-purple-400 pl-3">Fiyata Dahil Hizmetler</h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-50 rounded-2xl p-4 border">
                    {yacht.includedInPrice?.map((item: string, i: number) => (
                      <div key={i} className="flex justify-between text-gray-700 text-sm py-1 border-b last:border-b-0">
                        <span className="font-medium">{item}</span>
                        <span className="text-purple-600">✓</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Check-in/Check-out */}
              {yacht.checkInOut && (
                <div className="mb-10">
                  <div className="flex items-center mb-3">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-600 mr-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
                    </span>
                    <h3 className="text-xl font-semibold text-gray-700 border-l-4 border-gray-400 pl-3">Check-in / Check-out</h3>
                  </div>
                  <div className="flex flex-col gap-2 text-gray-700 text-sm bg-gray-50 rounded-2xl p-4 border">
                    <div><strong>Gece konaklamalı:</strong> Giriş: {yacht.checkInOut.overnight?.checkIn} - Çıkış: {yacht.checkInOut.overnight?.checkOut}</div>
                    <div><strong>Günlük:</strong> Giriş: {yacht.checkInOut.daily?.checkIn} - Çıkış: {yacht.checkInOut.daily?.checkOut}</div>
                  </div>
                </div>
              )}
            </div>

            <div className="sticky top-24 space-y-6">
              <div className="rounded-3xl bg-gradient-to-b from-white via-white/90 to-white/80 backdrop-blur-lg p-6 shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-gray-100">
                {yacht.discount && (
                  <div className="flex justify-center mb-3">
                    <span className="bg-red-500 text-white text-xs font-bold px-5 py-2 rounded-full shadow-sm">
                      %{yacht.discount} İNDİRİM
                    </span>
                  </div>
                )}

                {yacht.discount && (
                  <div className="text-center text-gray-400 text-base line-through mb-1">
                    {(yacht.price * (1 + yacht.discount / 100)).toLocaleString('en-US').replace(',', '.')}$
                  </div>
                )}

                <div className="flex justify-center items-end gap-1">
                  <span className="text-4xl font-bold text-indigo-700 leading-none">
                    {yacht.price.toLocaleString('en-US').replace(',', '.')}$
                  </span>
                  <span className="text-sm text-gray-500 mb-1">/ günlük</span>
                </div>
              </div>

              <div className="rounded-3xl bg-gradient-to-b from-white via-white/90 to-white/80 backdrop-blur-lg p-6 shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-gray-100">
                <ReservationBox selectedItem={{ title: yacht.title }} />
                <p className="text-center text-xs text-gray-500 mt-4 leading-snug">
                  Yat kiralama rezervasyonları <strong>7/24</strong> alınmaktadır. <br />
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
