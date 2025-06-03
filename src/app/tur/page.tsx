'use client';

import { Navbar } from '../../features/home/navbar';
import tourData from '../../data/tur/services.json';
import Image from 'next/image';
import Link from 'next/link';
import { createUrlSlug } from '../../lib/utils';
import { FaArrowRight, FaStar } from 'react-icons/fa';
import Script from 'next/script';
import Head from 'next/head';

export default function TourPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Günlük turlar neleri kapsar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Günlük turlarımız; profesyonel rehber eşliğinde tarihi ve turistik yerlerin gezilmesi, öğle yemeği, ulaşım ve giriş ücretlerini kapsar. Bazı turlarda ekstra aktiviteler de dahil olabilir."
        }
      },
      {
        "@type": "Question",
        "name": "Gezi tur rezervasyonları nasıl yapılır?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tur rezervasyonları websitemiz üzerinden online olarak yapılabilir. İstediğiniz turu seçip, tarih ve kişi sayısını belirleyerek hemen rezervasyon yapabilirsiniz."
        }
      },
      {
        "@type": "Question",
        "name": "Gezi turlarında grup büyüklüğü ne kadardır?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Turlarımızda grup büyüklüğü, tur tipine göre değişmektedir. Özel turlar minimum 2 kişi ile yapılırken, düzenli turlarımızda maksimum 15-20 kişilik gruplar oluşturulmaktadır."
        }
      },
      {
        "@type": "Question",
        "name": "Gezi turları iptali durumunda ne olur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "48 saat öncesine kadar yapılan tur iptalleri ücretsizdir. Daha kısa sürede yapılan iptallerde veya hava koşulları nedeniyle iptal edilen turlarda, başka bir tarihe ücretsiz değişim yapılabilir."
        }
      }
    ]
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "365Kirala Tur Hizmetleri",
    "url": "https://365kirala.com/tur",
    "logo": "https://365kirala.com/images/logo.png",
    "description": "Türkiye'nin en güzel şehirlerinde günlük turlar ve özel tur hizmetleri.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "TR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "",
      "contactType": "customer service",
      "email": "info@365kirala.com"
    }
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
        <title>Günlük Turlar | Şehir Turları ve Özel Turlar | 365Kirala</title>
        <meta
          name="description"
          content="Türkiye'nin en güzel şehirlerinde profesyonel rehber eşliğinde günlük turlar ve özel tur seçenekleri. Unutulmaz bir gezi deneyimi için 365Kirala."
        />
        <meta
          name="keywords"
          content="günlük tur, şehir turu, özel tur, kültür turu, gezi turu, rehberli tur, turistik tur, grup turu, yurtiçi tur"
        />
        <meta property="og:title" content="Günlük Turlar | Şehir Turları ve Özel Turlar | 365Kirala" />
        <meta
          property="og:description"
          content="Türkiye'nin en güzel şehirlerinde profesyonel rehber eşliğinde günlük turlar ve özel tur seçenekleri. Unutulmaz bir gezi deneyimi için 365Kirala."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://365kirala.com/tur" />
        <meta property="og:image" content="https://365kirala.com/images/tur/turbackground.jpg" />
        <link rel="canonical" href="https://365kirala.com/tur" />
      </Head>

      <Navbar />

      <div className="bg-white min-h-screen">
        {/* Banner */}
        <div className="relative w-full h-72 overflow-hidden bg-gradient-to-r from-indigo-900 to-blue-800">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <Image
            src="/images/tur/turbackground.jpg"
            alt="Günlük Turlar"
            fill
            className="object-cover z-0"
            priority
          />
          <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 mt-8 drop-shadow-xl animate-fade-in-up">
              Günlük Turlar
            </h1>
            <p className="text-xl md:text-2xl drop-shadow-lg max-w-3xl">
              Profesyonel rehberler eşliğinde unutulmaz tur deneyimleri yaşayın
            </p>
          </div>
        </div>

        {/* İçerik */}
        <div className="max-w-screen-xl mx-auto px-4 py-12">
          {/* Tur Listesi */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {tourData.items.map((item) => {
              const slug = createUrlSlug(item.title);
              return (
                <Link
                  key={item.id}
                  href={`/tur/${item.id}-${slug}`}
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
                        <div className="flex items-baseline gap-1">
                          {item.discount && (
                            <div className="text-sm text-gray-400 line-through">
                              {(item.price * (1 + item.discount / 100)).toLocaleString('en-US').replace(',', '.')}₺
                            </div>
                          )}
                          <div className="flex items-baseline gap-1">
                            <span className="text-2xl font-bold text-indigo-600">{item.price.toLocaleString('en-US').replace(',', '.')}₺</span>
                            <span className="text-sm text-gray-500">/ kişi başı</span>
                          </div>
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

          {/* Sonuç Bulunamadı */}
          {tourData.items.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Aradığınız kriterlere uygun tur bulunamadı.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
