'use client';

import { SinglePageHeader } from '../../components/single-page-header';
import yachtData from '../../data/yat/services.json';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '../../features/home/navbar';
import { FaStar } from 'react-icons/fa';
import Script from 'next/script';
import Head from 'next/head';

const turkishToLatinMap: { [key: string]: string } = {
  'ğ': 'g',
  'Ğ': 'G',
  'ü': 'u',
  'Ü': 'U',
  'ş': 's',
  'Ş': 'S',
  'ı': 'i',
  'İ': 'I',
  'ö': 'o',
  'Ö': 'O',
  'ç': 'c',
  'Ç': 'C',
};

export default function YachtPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Yat kiralama fiyatları neye göre değişir?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yat kiralama fiyatları; yatın boyutu, modeli, kapasitesi, sezonu ve kiralama süresine göre değişiklik gösterir. Ayrıca mürettebat, yemek servisi gibi ek hizmetler de fiyatı etkileyebilir."
        }
      },
      {
        "@type": "Question",
        "name": "Yat kiralamak için ne gerekiyor?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yat kiralamak için geçerli bir kimlik belgesi ve rezervasyon ödemesi yeterlidir. Kaptan gerektiren yatlarda ek bir belge gerekmez, kaptanlı hizmet sağlanır."
        }
      },
      {
        "@type": "Question",
        "name": "Yat kiralama süreleri nasıl belirlenir?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yatlar genellikle günlük, haftalık veya sezonluk olarak kiralanabilir. Minimum kiralama süresi genellikle 1 gündür ve özel talepler için esnek süre seçenekleri sunulabilir."
        }
      },
      {
        "@type": "Question",
        "name": "Yat kiralarken sigorta gerekli mi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tüm yatlarımız tam kapsamlı sigortalıdır ve kiralama ücretine dahildir. Ekstra bir sigorta ücreti ödemenize gerek yoktur."
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
    "description": "İstanbul, Bodrum, Göcek, Fethiye, Marmaris ve Antalya'da özel yat kiralama hizmetleri.",
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
        <title>Yat Kiralama | Lüks Yatlar ve Mavi Yolculuk | 365Kirala</title>
        <meta
          name="description"
          content="İstanbul, Bodrum, Göcek, Fethiye, Marmaris ve Antalya'da özel yat kiralama hizmetleri. Günlük ve haftalık seçeneklerle lüks yat kiralama fırsatları."
        />
        <meta
          name="keywords"
          content="yat kiralama, tekne kiralama, mavi yolculuk, yat turu, lüks yat, günlük yat kiralama, haftalık yat kiralama, bodrum yat, göcek yat, fethiye yat"
        />
        <meta property="og:title" content="Yat Kiralama | Lüks Yatlar ve Mavi Yolculuk | 365Kirala" />
        <meta
          property="og:description"
          content="İstanbul, Bodrum, Göcek, Fethiye, Marmaris ve Antalya'da özel yat kiralama hizmetleri. Günlük ve haftalık seçeneklerle lüks yat kiralama fırsatları."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://365kirala.com/yat" />
        <meta property="og:image" content="https://365kirala.com/images/yat/yatbackground.jpg" />
        <link rel="canonical" href="https://365kirala.com/yat" />
      </Head>
      <Navbar />
      <div className="container mx-auto px-4 py-8 font-semibold">
        <SinglePageHeader
          image="/images/yat/yatbackground.jpg"
          title="Yat Kiralama"
          descriptionDesktop="İstanbul, Bodrum, Göcek, Fethiye, Marmaris ve Antalya'da özel yat kiralama ile lüks bir mavi yolculuk yaşayın. Günlük ve haftalık seçeneklerle, mürettebatlı yatlar ve özel hizmetlerle deniz tatilinin keyfini çıkarın."
          descriptionMobile="İstanbul, Bodrum, Göcek, Fethiye, Marmaris ve Antalya'da özel yat kiralama ile lüks bir mavi yolculuk yapın."
        />

        <h1 className="text-3xl font-bold mb-6 mt-5 text-center md:text-left">Yat Kiralama</h1>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {yachtData.items.map((item) => {
            const slug = item.title
              .toLowerCase()
              .split('')
              .map(char => turkishToLatinMap[char] || char)
              .join('')
              .replace(/[^a-z0-9\s-]/g, '')
              .replace(/\s+/g, '-')
              .replace(/-+/g, '-');
              
            return (
              <Link
                key={item.id}
                href={`/yat/${item.id}-${slug}`}
                className="group rounded-xl shadow-lg overflow-hidden flex flex-col bg-white transition-transform duration-300 hover:scale-[1.02] cursor-default"
              >
                <div className="relative h-52 md:h-56">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover rounded-t-xl"
                    sizes="(max-width: 768px) 100vw, 33vw"
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
                              {(item.price * (1 + item.discount / 100)).toLocaleString('en-US').replace(',', '.')}€
                            </div>
                          )}
                          <div className="flex items-baseline gap-1">
                            <span className="text-2xl font-bold text-indigo-600">{item.price.toLocaleString('en-US').replace(',', '.')}€</span>
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
                          <span className="w-2 h-2 bg-indigo-500 rounded-full" /> {f}
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
