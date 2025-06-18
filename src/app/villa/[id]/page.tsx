'use client';

import { useEffect, useState, useCallback } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import villaData from '../../../data/villa/services.json';  // Villa verisi burada
import { Navbar } from '../../../features/home/navbar';
import ReservationBox from '../../../components/ReservationBox';
import { createUrlSlug } from '../../../lib/utils';
import useEmblaCarousel from 'embla-carousel-react';
import Script from 'next/script';

type Villa = {
  id: number;
  image: string;
  images?: string[];
  location: string;
  title: string;
  price: number;
  booked: number;
  discount?: number;
  description: string;
  features: string[];
  slug?: string;
};

export default function VillaDetailPage() {
  const params = useParams();
  const idWithSlug = params?.id as string;
  const id = Number(idWithSlug.split('-')[0]);
  const [villa, setVilla] = useState<Villa | null>(null);
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
    const foundVilla = villaData.items.find((item) => item.id === id);
    if (foundVilla && foundVilla.image) {
      const slug = createUrlSlug(foundVilla.title);
      const villaData: Villa = {
        id: foundVilla.id,
        image: foundVilla.image,
        title: foundVilla.title,
        location: foundVilla.location,
        price: foundVilla.price,
        booked: foundVilla.booked,
        discount: foundVilla.discount,
        description: foundVilla.description,
        features: foundVilla.features,
        slug
      };
      setVilla(villaData);
    } else {
      setVilla(null);
    }
  }, [id]);

  if (!villa) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center pt-20">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Villa bulunamadı</h1>
            <p className="text-gray-600">Aradığınız villa mevcut değil.</p>
          </div>
        </div>
      </>
    );
  }

  const sliderImages = [villa.image];

  return (
    <>
      <Script
        id="villa-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: villa.title,
            description: villa.description,
            image: villa.image,
            offers: {
              '@type': 'Offer',
              price: villa.price,
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
                value: villa.location,
              },
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
                      alt={`${villa.title} - Görsel ${idx + 1}`}
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
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-4 md:mb-6 flex items-center space-x-2">
            <Link href="/" className="hover:text-indigo-600">Anasayfa</Link>
            <span>/</span>
            <Link href="/villa" className="hover:text-indigo-600">Villalar</Link>
            <span>/</span>
            <span className="font-semibold text-gray-800">{villa.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
            {/* Sol Alan */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{villa.title}</h2>
              <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-10 leading-relaxed">{villa.description}</p>

              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">Villa Özellikleri</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {villa.features.map((feature, index) => (
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

            {/* Sağ Alan: Fiyat ve Rezervasyon */}
            <div className="sticky top-24 space-y-6">
              {/* Fiyat Kartı */}
              <div className="rounded-3xl bg-gradient-to-b from-white via-white/90 to-white/80 backdrop-blur-lg p-6 shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-gray-100">
                {villa.discount && (
                  <div className="flex justify-center mb-3">
                    <span className="bg-red-500 text-white text-xs font-bold px-5 py-2 rounded-full shadow-sm">
                      %{villa.discount} İNDİRİM
                    </span>
                  </div>
                )}

                {/* Eski Fiyat */}
                {villa.discount && (
                  <div className="text-center text-gray-400 text-base line-through mb-1">
                    {(villa.price * (1 + villa.discount / 100)).toLocaleString('en-US').replace(',', '.')}₺
                  </div>
                )}

                {/* Yeni Fiyat + Açıklama */}
                <div className="flex justify-center items-end gap-1">
                  <span className="text-4xl font-bold text-indigo-700 leading-none">
                    {villa.price.toLocaleString('en-US').replace(',', '.')}₺
                  </span>
                  <span className="text-sm text-gray-500 mb-1">&apos;den başlayan fiyatlarla</span>
                  <span className="text-sm text-gray-500 mb-1">/ günlük</span>   
                </div>
              </div>

              {/* Rezervasyon Kutusu */}
              <div className="rounded-3xl bg-gradient-to-b from-white via-white/90 to-white/80 backdrop-blur-lg p-6 shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-gray-100">
                <ReservationBox selectedItem={{ title: villa.title }} />
                <p className="text-center text-xs text-gray-500 mt-4 leading-snug">
                  Villa kiralama rezervasyonları <strong>7/24</strong> alınmaktadır. <br />
                  <strong>Ücretsiz iptal</strong> hakkı mevcuttur.
                </p>
              </div>

              <div className="text-sm text-gray-600 text-center">
                {villa.booked} kişi bu villayı daha önce tercih etti
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
