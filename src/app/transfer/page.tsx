'use client';

import { SinglePageHeader } from '../../components/single-page-header';
import transferData from '../../data/transfer/services.json';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '../../features/home/navbar';
import { createUrlSlug } from '../../lib/utils';
import Script from 'next/script';
import Head from 'next/head';

type TransferItem = {
  id: number;
  image: string;
  images?: string[];
  title: string;
  departure?: string;
  destination?: string;
  location?: string;
  price: number;
  booked: number;
  discount?: number;
  description: string;
  features: string[];
};

function TransferCard({ item }: { item: TransferItem }) {
  const slug = createUrlSlug(item.title);

  return (
    <Link
      href={`/transfer/${item.id}-${slug}`}
      className="group rounded-xl shadow-lg overflow-hidden flex flex-col bg-white transition-transform duration-300 hover:scale-[1.02] cursor-default"
    >
      <div className="relative h-52 md:h-56">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover rounded-t-xl"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

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
          {item.departure && item.destination ? (
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>{item.departure}</span>
              <span>→</span>
              <span>{item.destination}</span>
            </div>
          ) : (
            <p className="text-sm text-gray-500">{item.location}</p>
          )}

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
                  <span className="text-sm text-gray-500">/ transfer</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center text-gray-600 text-xs md:text-sm">
              <span className="text-yellow-400 text-lg md:text-xl">★</span>
              <span className="mt-1">{item.booked}+ transfer</span>
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
}

export default function TransferPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Transfer hizmeti fiyatları neye göre değişir?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Transfer hizmeti fiyatları; mesafe, araç tipi, yolcu sayısı ve sezona göre değişiklik gösterir. Ekstra hizmetler (çocuk koltuğu, ek bagaj, özel şoför vb.) de fiyatı etkileyebilir."
        }
      },
      {
        "@type": "Question",
        "name": "Transfer hizmeti için ne gerekiyor?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Transfer hizmeti için kimlik belgesi ve rezervasyon ödemesi yeterlidir. Minimum kiralama süresi genellikle 1 transferdir."
        }
      },
      {
        "@type": "Question",
        "name": "Transfer hizmetlerinde hangi araçlar sunuluyor?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Transfer hizmetlerimizde sedan, van, minibüs, otobüs gibi farklı araç tipleri sunulur. Tüm araçlarımız klimalı, konforlu ve güvenli seyahat için tasarlanmıştır."
        }
      },
      {
        "@type": "Question",
        "name": "Transfer rezervasyonu nasıl iptal edilir?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Transfer rezervasyonları kalkış saatinden 24 saat öncesine kadar ücretsiz iptal edilebilir. Daha kısa sürede yapılan iptallerde, sezona göre değişen iptal koşulları uygulanır."
        }
      }
    ]
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "365Kirala Transfer Hizmetleri",
    "url": "https://365kirala.com/transfer",
    "logo": "https://365kirala.com/images/logo.png",
    "description": "Türkiye'nin tüm havalimanlarından ve şehirlerinden transfer hizmetleri.",
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
        <title>Transfer Hizmetleri | VIP Transfer | 365Kirala</title>
        <meta
          name="description"
          content="Türkiye'nin tüm havalimanlarından ve şehirlerinden transfer hizmetleri. VIP transfer, özel şoför ve konforlu araçlarla güvenli seyahat."
        />
        <meta
          name="keywords"
          content="transfer hizmetleri, vip transfer, havalimanı transfer, şehirlerarası transfer, özel transfer, lüks transfer, transfer fiyatları"
        />
        <meta property="og:title" content="Transfer Hizmetleri | VIP Transfer | 365Kirala" />
        <meta
          property="og:description"
          content="Türkiye'nin tüm havalimanlarından ve şehirlerinden transfer hizmetleri. VIP transfer, özel şoför ve konforlu araçlarla güvenli seyahat."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://365kirala.com/transfer" />
        <meta property="og:image" content="https://365kirala.com/images/transfer/transferbackground.jpg" />
        <link rel="canonical" href="https://365kirala.com/transfer" />
      </Head>
      <Navbar />
      <div className="container mx-auto px-4 py-8 font-semibold">
        <div className="mb-12">
          <SinglePageHeader
            images={["/images/transfer/transferbackground.jpg"]}
            title="Transfer Hizmetleri"
            descriptionDesktop="Türkiye'nin tüm havalimanlarından ve şehirlerinden transfer hizmetleri. VIP transfer, özel şoför ve konforlu araçlarla güvenli seyahat."
            descriptionMobile="Türkiye'nin tüm havalimanlarından ve şehirlerinden transfer hizmetleri."
          />
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {transferData.items.map((item) => (
            <TransferCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}
