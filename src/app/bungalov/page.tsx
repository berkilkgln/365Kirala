'use client';

import { SinglePageHeader } from '../../components/single-page-header';
import bungalovData from '../../data/bungalov/services.json';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '../../features/home/navbar';
import { FaStar } from 'react-icons/fa';
import { createUrlSlug } from '../../lib/utils';
import Script from 'next/script';
import Head from 'next/head';

export default function BungalovPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Bungalov kiralama fiyatları neye göre değişir?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bungalov kiralama fiyatları; bungalovun konumu, büyüklüğü, özellikleri, sezonu ve kiralama süresine göre değişiklik gösterir. Doğa manzarası, özel teras, jakuzi gibi ekstra özellikler de fiyatı etkileyebilir."
        }
      },
      {
        "@type": "Question",
        "name": "Bungalov kiralamak için ne gerekiyor?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bungalov kiralamak için kimlik belgesi ve rezervasyon ödemesi yeterlidir. Bazı bungalovlarda depozito talep edilebilir. Minimum kiralama süresi genellikle 1 gündür."
        }
      },
      {
        "@type": "Question",
        "name": "Bungalovlarda hangi hizmetler sunuluyor?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bungalovlarımızda temizlik hizmeti, 24 saat resepsiyon, güvenlik ve otopark hizmetleri standart olarak sunulur. Kahvaltı servisi, restoran, aktivite organizasyonu gibi ek hizmetler talep edilebilir."
        }
      },
      {
        "@type": "Question",
        "name": "Bungalov rezervasyonu nasıl iptal edilir?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bungalov rezervasyonları giriş tarihinden 7 gün öncesine kadar ücretsiz iptal edilebilir. Daha kısa sürede yapılan iptallerde, sezona göre değişen iptal koşulları uygulanır."
        }
      }
    ]
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "365Kirala Bungalov Kiralama",
    "url": "https://365kirala.com/bungalov",
    "logo": "https://365kirala.com/images/logo.png",
    "description": "Türkiye'nin en güzel doğa lokasyonlarında bungalov kiralama hizmetleri.",
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
        <title>Bungalov Kiralama | Doğa İçinde Konforlu Konaklama | 365Kirala</title>
        <meta
          name="description"
          content="Türkiye'nin en güzel doğa lokasyonlarında bungalov kiralama hizmetleri. Konforlu konaklama ve doğayla iç içe bir tatil deneyimi için 365Kirala."
        />
        <meta
          name="keywords"
          content="bungalov kiralama, doğa tatili, bungalov ev, dağ evi, orman evi, günlük bungalov, haftalık bungalov, doğada konaklama, bungalov konaklama"
        />
        <meta property="og:title" content="Bungalov Kiralama | Doğa İçinde Konforlu Konaklama | 365Kirala" />
        <meta
          property="og:description"
          content="Türkiye'nin en güzel doğa lokasyonlarında bungalov kiralama hizmetleri. Konforlu konaklama ve doğayla iç içe bir tatil deneyimi için 365Kirala."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://365kirala.com/bungalov" />
        <meta property="og:image" content="https://365kirala.com/images/bungalov/bungalovbackground.jpg" />
        <link rel="canonical" href="https://365kirala.com/bungalov" />
      </Head>
      <Navbar />
      <div className="container mx-auto px-4 py-8 font-semibold">
        <SinglePageHeader
          image="/images/bungalov/bungalovbackground.jpg"
          title="Bungalov Kiralama"
          descriptionDesktop="Türkiye'nin eşsiz doğa lokasyonlarında; Sapanca, Abant, Bolu, Kapadokya gibi destinasyonlarda bungalov kiralayın. Günlük ve haftalık seçeneklerle, doğayla iç içe, konforlu bir tatil deneyimi yaşayın."
          descriptionMobile="Türkiye'nin en güzel doğa lokasyonlarında bungalov kiralayarak huzurlu bir tatil yapın."
        />

        <h1 className="text-3xl font-bold mb-6 mt-5 text-center md:text-left">Bungalov Kiralama</h1>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {bungalovData.items.map((item) => {
            const slug = createUrlSlug(item.title);
              
            return (
              <Link
                key={item.id}
                href={`/bungalov/${item.id}-${slug}`}
                className="group rounded-xl shadow-lg overflow-hidden flex flex-col bg-white transition-transform duration-300 hover:scale-[1.02] cursor-default"
              >
                <div className="relative h-52 md:h-56">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover rounded-t-xl"
                  />

                  {item.discount && (
                    <div className="absolute top-2 right-2">
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
                              {(item.price * (1 + item.discount / 100)).toLocaleString('en-US').replace(',', '.')}₺
                            </div>
                          )}
                          <div className="flex items-baseline gap-1">
                            <span className="text-2xl font-bold text-indigo-600">{item.price.toLocaleString('en-US').replace(',', '.')}₺</span>
                            <span className="text-sm text-gray-500">/ günlük</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col items-center text-gray-600 text-xs md:text-sm">
                        <FaStar className="text-yellow-400 text-lg md:text-xl" />
                        <span className="mt-1">{item.booked}+ rezervasyon</span>
                      </div>
                    </div>

                    <ul className="grid grid-cols-1 gap-2 text-sm text-gray-600 list-none mt-3">
                      {item.features.slice(0, 3).map((f, i) => (
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
          })}
        </div>
      </div>
    </>
  );
}
