'use client';

import { Navbar } from '../../features/home/navbar';
import bungalovData from '../../data/bungalov/services.json';
import Image from 'next/image';
import Link from 'next/link';
import { createUrlSlug } from '../../lib/utils';
import { FaArrowRight, FaStar } from 'react-icons/fa';
import Script from 'next/script';
import Head from 'next/head';

export default function BungalovPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Bungalov konaklama fiyatları neye göre değişir?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bungalov konaklama fiyatları; bungalovun konumu, büyüklüğü, özellikleri, sezonu ve konaklama süresine göre değişiklik gösterir. Doğa manzarası, özel teras, jakuzi gibi ekstra özellikler de fiyatı etkileyebilir."
        }
      },
      {
        "@type": "Question",
        "name": "Bungalov konaklaması için ne gerekiyor?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bungalov konaklaması için kimlik belgesi ve rezervasyon ödemesi yeterlidir. Bazı tesislerde depozito talep edilebilir. Minimum konaklama süresi genellikle 1 gündür."
        }
      },
      {
        "@type": "Question",
        "name": "Bungalovlarda hangi hizmetler sunuluyor?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bungalovlarımızda temizlik hizmeti, 24 saat resepsiyon, ücretsiz otopark standart olarak sunulur. Kahvaltı, restoran, havuz, aktivite organizasyonu gibi ek hizmetler tesis özelinde değişiklik gösterebilir."
        }
      },
      {
        "@type": "Question",
        "name": "Bungalov rezervasyonu nasıl iptal edilir?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bungalov rezervasyonları giriş tarihinden 3 gün öncesine kadar ücretsiz iptal edilebilir. Daha kısa sürede yapılan iptallerde, sezona göre değişen iptal koşulları uygulanır."
        }
      }
    ]
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "365Kirala Bungalov",
    "url": "https://365kirala.com/bungalov",
    "logo": "https://365kirala.com/images/logo.png",
    "description": "Türkiye'nin en güzel doğa lokasyonlarında bungalov konaklama hizmetleri.",
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
        <title>Bungalov Konaklama | Doğa İçinde Tatil | 365Kirala</title>
        <meta
          name="description"
          content="Türkiye'nin en güzel doğa lokasyonlarında bungalov konaklama hizmetleri. Huzurlu ve konforlu bir tatil için bungalov kiralayın."
        />
        <meta
          name="keywords"
          content="bungalov, bungalov konaklama, doğa tatili, dağ evi, orman evi, tiny house, doğada konaklama, bungalov kiralama"
        />
        <meta property="og:title" content="Bungalov Konaklama | Doğa İçinde Tatil | 365Kirala" />
        <meta
          property="og:description"
          content="Türkiye'nin en güzel doğa lokasyonlarında bungalov konaklama hizmetleri. Huzurlu ve konforlu bir tatil için bungalov kiralayın."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://365kirala.com/bungalov" />
        <meta property="og:image" content="https://365kirala.com/images/bungalov/bungalovbackground.jpg" />
        <link rel="canonical" href="https://365kirala.com/bungalov" />
      </Head>
      <Navbar />
      <div className="bg-white min-h-screen">
        {/* Banner */}
        <div className="relative w-full h-72 overflow-hidden bg-gradient-to-r from-indigo-900 to-blue-800">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <Image
            src="/images/bungalov/bungalovbackground.jpg"
            alt="Bungalov Konaklama"
            fill
            className="object-cover z-0"
            priority
          />
          <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 mt-8 drop-shadow-xl animate-fade-in-up">
              Bungalov Konaklama
            </h1>
            <p className="text-xl md:text-2xl drop-shadow-lg max-w-3xl">
              Doğayla iç içe, huzurlu ve konforlu bungalov tatil seçeneklerini keşfedin
            </p>
          </div>
        </div>

        {/* İçerik */}
        <div className="max-w-screen-xl mx-auto px-4 py-12">
          {/* Bungalov Listesi */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {bungalovData.items.map((item) => {
              const slug = createUrlSlug(item.title);
              return (
                <Link
                  key={item.id}
                  href={`/bungalov/${item.id}-${slug}`}
                  className="group flex flex-col rounded-3xl border border-gray-300 bg-white overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-default"
                >
                  {/* Görsel Alanı */}
                  <div className="relative w-full aspect-[4/3] overflow-hidden rounded-t-3xl">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      draggable={false}
                    />
                    {item.discount && (
                      <div className="absolute top-3 left-3 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold drop-shadow-lg select-none">
                        %{item.discount} İndirim
                      </div>
                    )}
                  </div>

                  {/* İçerik Alanı */}
                  <div className="flex flex-col flex-1 p-5 justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-2 select-none">
                        <FaStar className="text-yellow-400" />
                        <span>{item.booked} Rezervasyon</span>
                      </div>
                      <h3 className="font-semibold text-xl mb-2 line-clamp-2 text-gray-800">{item.title}</h3>
                      {item.location && (
                        <p className="text-gray-500 text-sm line-clamp-1">{item.location}</p>
                      )}
                    </div>

                    <div className="flex items-center justify-between mt-6">
                      <div>
                        <span className="text-xs text-gray-500">Başlangıç</span>
                        {item.discount && (
                          <div className="text-sm text-gray-400 line-through">
                            {(item.price * (1 + item.discount / 100)).toLocaleString('en-US').replace(',', '.')}₺
                          </div>
                        )}
                        <div className="flex items-baseline gap-1">
                          <span className="text-2xl font-bold text-indigo-600">{item.price.toLocaleString('en-US').replace(',', '.')}₺</span>
                          <span className="text-sm text-gray-500">/ günlük</span>
                        </div>
                      </div>
                      <div className="bg-blue-600 text-white p-3 rounded-full group-hover:bg-blue-700 transition-colors duration-300">
                        <FaArrowRight size={18} />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
