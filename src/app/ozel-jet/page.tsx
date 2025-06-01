'use client';

import { SinglePageHeader } from '../../components/single-page-header';
import jetData from '../../data/ozel-jet/services.json';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '../../features/home/navbar';
import { FaStar } from 'react-icons/fa';
import { createUrlSlug } from '../../lib/utils';
import Script from 'next/script';
import Head from 'next/head';

export default function PrivateJetPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Özel jet kiralama fiyatları neye göre belirlenir?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Özel jet kiralama fiyatları; uçuş mesafesi, jet modeli, yolcu kapasitesi ve sezona göre değişiklik gösterir. Ayrıca VIP hizmetler, catering ve özel transfer gibi ek hizmetler de fiyatı etkileyebilir."
        }
      },
      {
        "@type": "Question",
        "name": "Özel jet kiralamak için ne gerekiyor?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Özel jet kiralamak için geçerli pasaport ve rezervasyon ödemesi yeterlidir. Uluslararası uçuşlar için vize gerekebilir. Tüm yolcuların pasaport bilgileri uçuştan önce paylaşılmalıdır."
        }
      },
      {
        "@type": "Question",
        "name": "Özel jet ile hangi destinasyonlara uçulabilir?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Özel jetlerimizle Türkiye içi tüm havalimanlarına ve Avrupa'nın başlıca şehirlerine uçuş gerçekleştirebilirsiniz. Talep üzerine özel destinasyonlar için de hizmet sağlanabilir."
        }
      },
      {
        "@type": "Question",
        "name": "Özel jet rezervasyonu nasıl iptal edilir?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Özel jet rezervasyonları uçuş tarihinden 48 saat öncesine kadar ücretsiz iptal edilebilir. Daha kısa sürede yapılan iptallerde, sezona göre değişen iptal koşulları uygulanır."
        }
      }
    ]
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "365Kirala Özel Jet",
    "url": "https://365kirala.com/ozel-jet",
    "logo": "https://365kirala.com/images/logo.png",
    "description": "Türkiye ve Avrupa'da lüks özel jet kiralama hizmetleri.",
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
        "areaServed": ["TR", "EU"],
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
        <title>Özel Jet Kiralama | VIP Uçuş ve Lüks Seyahat | 365Kirala</title>
        <meta
          name="description"
          content="Türkiye ve Avrupa'da özel jet kiralama hizmetleri. VIP uçuş deneyimi, lüks seyahat ve konforlu yolculuk için özel jet kiralayın."
        />
        <meta
          name="keywords"
          content="özel jet kiralama, vip uçuş, lüks seyahat, özel uçak, jet charter, business jet, özel havacılık, executive jet"
        />
        <meta property="og:title" content="Özel Jet Kiralama | VIP Uçuş ve Lüks Seyahat | 365Kirala" />
        <meta
          property="og:description"
          content="Türkiye ve Avrupa'da özel jet kiralama hizmetleri. VIP uçuş deneyimi, lüks seyahat ve konforlu yolculuk için özel jet kiralayın."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://365kirala.com/ozel-jet" />
        <meta property="og:image" content="https://365kirala.com/images/ozel-jet/jetbackground.jpg" />
        <link rel="canonical" href="https://365kirala.com/ozel-jet" />
      </Head>
      <Navbar />
      <div className="container mx-auto px-4 py-8 font-semibold">
        <SinglePageHeader
          image="/images/ozel-jet/jetbackground.jpg"
          title="Özel Jet Kiralama"
          descriptionDesktop="İstanbul, Bodrum, Antalya ve Avrupa'ya özel jet kiralama hizmeti. Konforlu, hızlı ve prestijli seyahat deneyimi için hemen rezervasyon yapın."
          descriptionMobile="İstanbul, Bodrum, Antalya ve Avrupa'ya özel jet kiralama hizmeti. Konforlu ve prestijli seyahat için hemen rezervasyon yapın."
        />

        <h1 className="text-3xl font-bold mb-6 mt-5 text-center md:text-left">Özel Jet Kiralama</h1>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {jetData.items.map((item) => {
            const slug = createUrlSlug(item.title);
            return (
              <Link
                key={item.id}
                href={`/ozel-jet/${item.id}-${slug}`}
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
                    <p className="text-sm text-gray-500">{item.departure} ➝ {item.destination}</p>

                    <div className="flex justify-between items-center border-t pt-4">
                      <div>
                        {/* Fiyat */}
                        <div className="mt-4">
                          {item.discount && (
                            <div className="text-sm text-gray-400 line-through">
                              €{(item.price * (1 + item.discount / 100)).toFixed(2)}
                            </div>
                          )}
                          <div className="flex items-baseline gap-1">
                            <span className="text-2xl font-bold text-indigo-600">€{item.price}</span>
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

                  <div className="text-center text-indigo-700 border border-indigo-700 rounded-lg py-2 mt-5 group-hover:bg-indigo-700 group-hover:text-white transition-colors">
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
