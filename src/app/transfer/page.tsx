'use client';

import { Navbar } from '../../features/home/navbar';
import transferData from '../../data/transfer/services.json';
import Image from 'next/image';
import Link from 'next/link';
import { createUrlSlug } from '../../lib/utils';
import { FaArrowRight, FaStar } from 'react-icons/fa';
import Script from 'next/script';
import Head from 'next/head';

export default function TransferPage() {
  // SEO için detaylandırılmış FAQ ve Organization schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "VIP transfer hizmeti neleri kapsar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "VIP transfer hizmeti; lüks araçlarla havalimanı transferi, otel transferi, şehirler arası transfer ve özel etkinlik transferlerini kapsar. Profesyonel şoför, bagaj taşıma ve konforlu yolculuk hizmeti dahildir."
        }
      },
      {
        "@type": "Question",
        "name": "VIP transfer rezervasyonu nasıl yapılır?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Transfer rezervasyonu online olarak websitemizden veya müşteri hizmetlerimizi arayarak yapılabilir. Rezervasyon sırasında tarih, saat, kişi sayısı ve transfer noktaları belirtilmelidir."
        }
      },
      {
        "@type": "Question",
        "name": "Araç kiralama ücretleri neye göre belirlenir?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Transfer ücretleri; mesafe, araç tipi, yolcu sayısı ve transfer saatine göre belirlenir. Gece transferleri ve şehirler arası transferlerde farklı fiyatlandırma uygulanabilir."
        }
      },
      {
        "@type": "Question",
        "name": "Araç kiralama iptal ve değişiklik politikası nedir?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Transfer hizmetlerimizde 24 saat öncesine kadar ücretsiz iptal ve değişiklik yapılabilir. Daha kısa sürede yapılan iptallerde kısmi ücret iadesi uygulanır."
        }
      }
    ]
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "365Kirala VIP Transfer",
    "url": "https://365kirala.com/transfer",
    "logo": "https://365kirala.com/images/logo.png",
    "description": "Türkiye genelinde lüks ve konforlu VIP transfer hizmetleri.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "TR"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+90-123-456-7890", // Telefon ekleyin
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
        <title>VIP Transfer | Lüks Araç Kiralama ve Transfer Hizmetleri | 365Kirala</title>
        <meta
          name="description"
          content="Havalimanı transferi, şehirler arası transfer ve özel etkinlik transferleri için lüks VIP transfer hizmetleri. Konforlu ve güvenli yolculuk için 365Kirala."
        />    
        <meta
          name="keywords"
          content="vip transfer, lüks transfer, havalimanı transfer, şehirler arası transfer, özel şoför, araç kiralama, vip araç, lüks araç"
        />
        <meta property="og:title" content="VIP Transfer | Lüks Araç Kiralama ve Transfer Hizmetleri | 365Kirala" />
        <meta
          property="og:description"
          content="Havalimanı transferi, şehirler arası transfer ve özel etkinlik transferleri için lüks VIP transfer hizmetleri. Konforlu ve güvenli yolculuk için 365Kirala."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://365kirala.com/transfer" />
        <meta property="og:image" content="https://365kirala.com/images/transfer/transferbackground.jpg" />
        <link rel="canonical" href="https://365kirala.com/transfer" />
      </Head>
      <Navbar />
      <main className="bg-white min-h-screen" role="main">
        {/* Banner */}
        <section
          aria-label="Transfer Hizmetleri Banner"
          className="relative w-full h-72 overflow-hidden bg-gradient-to-r from-indigo-900 to-blue-800"
        >
          <div className="absolute inset-0 bg-black/60 z-10" />
          <Image
            src="/images/transfer/transferbackground.jpg"
            alt="Transfer Hizmetleri"
            fill
            className="object-cover z-0"
            priority
          />
          <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 mt-8 drop-shadow-xl animate-fade-in-up">
              Transfer Hizmetleri
            </h1>
            <p className="text-xl md:text-2xl drop-shadow-lg max-w-3xl">
              Güvenli ve konforlu transfer hizmetlerimizle seyahatlerinizi keyifli hale getirin
            </p>
          </div>
        </section>

        {/* İçerik */}
        <section aria-label="Transfer hizmeti listeleme" className="max-w-screen-xl mx-auto px-4 py-12">
          {/* Transfer Listesi */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {transferData.items.map((item) => {
              const slug = createUrlSlug(item.title);
              return (
                <Link
                  key={item.id}
                  href={`/transfer/${item.id}-${slug}`}
                  className="group flex flex-col rounded-3xl border border-gray-300 bg-white overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-default"
                  aria-label={`${item.title} transfer hizmeti detay sayfasına git`}
                  tabIndex={0}
                >
                  {/* Görsel Alanı */}
                  <div className="relative w-full aspect-[4/3] overflow-hidden rounded-t-3xl">
                    <Image
                      src={item.image}
                      alt={`${item.title} - ${item.location}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      draggable={false}
                      priority={false}
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
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-2 select-none" aria-label="Rezervasyon sayısı">
                        <FaStar className="text-yellow-400" aria-hidden="true" />
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
                          <span className="text-sm text-gray-500">/ günlük </span>
                        </div>
                      </div>
                      <div className="bg-blue-600 text-white p-3 rounded-full group-hover:bg-blue-700 transition-colors duration-300">
                        <FaArrowRight size={18} aria-hidden="true" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Sonuç Bulunamadı */}
          {transferData.items.length === 0 && (
            <div className="text-center py-12" role="alert" aria-live="polite">
              <p className="text-gray-500 text-lg">Aradığınız kriterlere uygun transfer hizmeti bulunamadı.</p>
            </div>
          )}
        </section>
      </main>
    </>
  );
}
