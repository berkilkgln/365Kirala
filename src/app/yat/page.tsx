'use client';

import { SinglePageHeader } from '../../components/single-page-header';
import yatData from '../../data/yat/services.json';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '../../features/home/navbar';
import { FaStar } from 'react-icons/fa';
import { createUrlSlug } from '../../lib/utils';
import Script from 'next/script';
import Head from 'next/head';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback } from 'react';

type YatItem = {
  id: number;
  image: string;
  images?: string[];
  title: string;
  location: string;
  price: number;
  booked: number;
  discount?: number;
  description: string;
  features?: string[];
};

function YatCard({ item }: { item: YatItem }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'center',
    containScroll: 'trimSnaps'
  });

  const scrollPrev = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const slug = createUrlSlug(item.title);
  const sliderImages = item.images || [item.image];

  return (
    <Link
      href={`/yat/${item.id}-${slug}`}
      className="group rounded-xl shadow-lg overflow-hidden flex flex-col bg-white transition-transform duration-300 hover:scale-[1.02] cursor-default"
    >
      <div className="relative h-52 md:h-56">
        <div className="absolute inset-0">
          <div ref={emblaRef} className="h-full w-full overflow-hidden">
            <div className="flex h-full">
              {sliderImages.map((img, idx) => (
                <div key={idx} className="flex-[0_0_100%] min-w-0 h-full relative">
                  <Image
                    src={img}
                    alt={`${item.title} - Görsel ${idx + 1}`}
                    fill
                    className="object-cover rounded-t-xl"
                    loading={idx === 0 ? undefined : "lazy"}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={85}
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

        {item.discount && (
          <div className="absolute top-2 right-2 z-20">
            <span className="bg-red-500 text-white text-[10px] md:text-xs font-semibold px-2 py-1 rounded shadow">
              %{item.discount} İndirim
            </span>
          </div>
        )}
      </div>

      <div className="p-4 flex-1 flex flex-col justify-between">
        <div className="space-y-3">
          <h3 className="text-lg md:text-xl font-semibold text-gray-900">{item.title}</h3>
          <p className="text-sm text-gray-500">{item.location}</p>

          <div className="flex justify-between items-center border-t pt-4">
            <div>
              <div className="mt-4">
                {item.discount && (
                  <div className="text-sm text-gray-400 line-through">
                    {(item.price * (1 + item.discount / 100)).toLocaleString('en-US').replace(',', '.')}$
                  </div>
                )}
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-indigo-600">{item.price.toLocaleString('en-US').replace(',', '.')}$</span>
                  <span className="text-sm text-gray-500">/ gün</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center text-gray-600 text-xs md:text-sm">
              <FaStar className="text-yellow-400 text-lg md:text-xl" />
              <span className="mt-1">{item.booked}+ kiralama</span>
            </div>
          </div>

          <ul className="grid grid-cols-1 gap-2 text-sm text-gray-600 list-none mt-3">
            {item.features?.slice(0, 3).map((f, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="w-2 h-2 bg-indigo-500 rounded-full" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4 bg-indigo-600 group-hover:bg-indigo-700 text-white text-sm md:text-base font-semibold py-2.5 rounded-xl text-center transition">
          İncele
        </div>
      </div>
    </Link>
  );
}

export default function YatPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Yat kiralama fiyatları neye göre değişir?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yat kiralama fiyatları; yat tipi, boyutu, sezon, kiralama süresi ve ekstra hizmetlere göre değişiklik gösterir. Özel şef, mürettebat, yakıt gibi ekstra hizmetler de fiyatı etkileyebilir."
        }
      },
      {
        "@type": "Question",
        "name": "Yat kiralamak için ne gerekiyor?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yat kiralamak için kimlik belgesi ve rezervasyon ödemesi yeterlidir. Bazı yatlarda depozito talep edilebilir. Minimum kiralama süresi genellikle 1 gündür."
        }
      },
      {
        "@type": "Question",
        "name": "Yatlarda hangi hizmetler sunuluyor?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yatlarımızda profesyonel mürettebat, özel şef, temizlik hizmetleri standart olarak sunulur. Ek olarak su sporları ekipmanları, özel menü, transfer gibi hizmetler talep edilebilir."
        }
      },
      {
        "@type": "Question",
        "name": "Yat rezervasyonu nasıl iptal edilir?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yat rezervasyonları kalkış tarihinden 7 gün öncesine kadar ücretsiz iptal edilebilir. Daha kısa sürede yapılan iptallerde, sezona göre değişen iptal koşulları uygulanır."
        }
      }
    ]
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "365Kirala Yat Kiralama",
    "url": "https://365kirala.com/yat",
    "logo": "https://365kirala.com/images/logo.png",
    "description": "Türkiye'nin en güzel koylarında lüks yat kiralama hizmetleri.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "TR"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+90-123-456-7890",
        "contactType": "customer service",
        "email": "info@365kirala.com",
        "areaServed": "TR",
        "availableLanguage": ["Turkish", "English"]
      }
    ]
  };

  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Head>
        <title>Yat Kiralama | Lüks Yatlar | 365Kirala</title>
        <meta
          name="description"
          content="Türkiye'nin en güzel koylarında lüks yat kiralama hizmetleri. Profesyonel mürettebat, özel şef ve unutulmaz deneyimler için 365Kirala."
        />
        <meta
          name="keywords"
          content="yat kiralama, lüks yat, özel yat, mavi tur, yat turu, yat fiyatları, yat rezervasyonu, yat mürettebatı"
        />
        <meta property="og:title" content="Yat Kiralama | Lüks Yatlar | 365Kirala" />
        <meta
          property="og:description"
          content="Türkiye'nin en güzel koylarında lüks yat kiralama hizmetleri. Profesyonel mürettebat, özel şef ve unutulmaz deneyimler için 365Kirala."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://365kirala.com/yat" />
        <meta property="og:image" content="https://365kirala.com/images/yat/yatbackground.jpg" />
        <link rel="canonical" href="https://365kirala.com/yat" />
      </Head>
      <Navbar />
      <div className="container mx-auto px-4 py-8 font-semibold">
        <div className="mb-12">
          <SinglePageHeader
            images={["/images/yat/yatbackground.jpg"]}
            title="Yat Kiralama"
            descriptionDesktop="Türkiye'nin en güzel koylarında lüks yat kiralama hizmetleri. Profesyonel mürettebat, özel şef ve unutulmaz deneyimler için 365Kirala."
            descriptionMobile="Türkiye'nin en güzel koylarında lüks yat kiralama hizmetleri."
            customBadges={[
              { icon: "anchor", text: "Profesyonel Mürettebat", color: "bg-blue-400" },
              { icon: "star", text: "Lüks Hizmet", color: "bg-yellow-400" },
              { icon: "check", text: "Anında Onay", color: "bg-green-400" }
            ]}
          />
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {yatData.items.map((item) => (
            <YatCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}
