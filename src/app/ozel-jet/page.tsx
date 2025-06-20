'use client';

import { SinglePageHeader } from '../../components/single-page-header';
import ozelJetData from '../../data/ozel-jet/services.json';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '../../features/home/navbar';
import { FaStar } from 'react-icons/fa';
import { createUrlSlug } from '../../lib/utils';
import Script from 'next/script';
import Head from 'next/head';

type OzelJetItem = {
  id: number;
  image: string;
  images?: string[];
  title: string;
  departure: string;
  destination: string;
  price: number;
  booked: number;
  discount?: number;
  description: string;
  features: string[];
};

function OzelJetCard({ item }: { item: OzelJetItem }) {
  const slug = createUrlSlug(item.title);

  return (
    <Link
      href={`/ozel-jet/${item.id}-${slug}`}
      className="group rounded-xl shadow-lg overflow-hidden flex flex-col bg-white transition-transform duration-300 hover:scale-[1.02] cursor-default"
    >
      <div className="relative h-52 md:h-56">
        <div className="absolute inset-0">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover rounded-t-xl"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
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
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>{item.departure}</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            <span>{item.destination}</span>
          </div>

          <div className="flex justify-between items-center border-t pt-4">
            <div>
              <div className="mt-4">
                {item.discount && (
                  <div className="text-sm text-gray-400 line-through">
                    {(item.price * (1 + item.discount / 100)).toLocaleString('en-US').replace(',', '.')}$
                  </div>
                )}
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-indigo-600">{item.price.toLocaleString('en-US').replace(',', '.')} $</span>
                  <span className="text-sm text-gray-500">/ uçuş</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center text-gray-600 text-xs md:text-sm">
              <FaStar className="text-yellow-400 text-lg md:text-xl" />
              <span className="mt-1">{item.booked}+ uçuş</span>
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

export default function OzelJetPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Özel jet kiralama fiyatları neye göre değişir?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Özel jet kiralama fiyatları; uçak tipi, mesafe, yolcu sayısı, uçuş süresi ve sezona göre değişiklik gösterir. Ayrıca ekstra hizmetler (VIP transfer, özel catering, gümrük işlemleri vb.) de fiyatı etkileyebilir."
        }
      },
      {
        "@type": "Question",
        "name": "Özel jet kiralamak için ne gerekiyor?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Özel jet kiralamak için kimlik belgesi ve rezervasyon ödemesi yeterlidir. Bazı durumlarda vize gerekliliği olabilir. Minimum kiralama süresi genellikle 1 uçuştur."
        }
      },
      {
        "@type": "Question",
        "name": "Özel jetlerde hangi hizmetler sunuluyor?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Özel jetlerimizde VIP transfer, özel catering, gümrük işlemleri, check-in hizmeti standart olarak sunulur. Ekstra bagaj, özel menü, çocuk koltuğu gibi ek hizmetler talep edilebilir."
        }
      },
      {
        "@type": "Question",
        "name": "Özel jet rezervasyonu nasıl iptal edilir?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Özel jet rezervasyonları kalkış tarihinden 24 saat öncesine kadar ücretsiz iptal edilebilir. Daha kısa sürede yapılan iptallerde, sezona göre değişen iptal koşulları uygulanır."
        }
      }
    ]
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "365Kirala Özel Jet Kiralama",
    "url": "https://365kirala.com/ozel-jet",
    "logo": "https://365kirala.com/images/logo.png",
    "description": "Türkiye'nin tüm havalimanlarından dünyanın her noktasına özel jet kiralama hizmetleri.",
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
        <title>Özel Jet Kiralama | VIP Uçuş Deneyimi | 365Kirala</title>
        <meta
          name="description"
          content="Türkiye'nin tüm havalimanlarından dünyanın her noktasına özel jet kiralama hizmetleri. VIP transfer, özel catering ve gümrük işlemleri ile konforlu uçuş deneyimi."
        />
        <meta
          name="keywords"
          content="özel jet kiralama, private jet, vip uçuş, özel uçak kiralama, charter uçuş, özel jet fiyatları, özel jet hizmetleri, özel jet transfer"
        />
        <meta property="og:title" content="Özel Jet Kiralama | VIP Uçuş Deneyimi | 365Kirala" />
        <meta
          property="og:description"
          content="Türkiye'nin tüm havalimanlarından dünyanın her noktasına özel jet kiralama hizmetleri. VIP transfer, özel catering ve gümrük işlemleri ile konforlu uçuş deneyimi."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://365kirala.com/ozel-jet" />
        <meta property="og:image" content="https://365kirala.com/images/ozel-jet/jetbackground.jpg" />
        <link rel="canonical" href="https://365kirala.com/ozel-jet" />
      </Head>
      <Navbar />
      <div className="container mx-auto px-4 py-8 font-semibold">
        <div className="mb-12">
          <SinglePageHeader
            images={["/images/ozel-jet/jetbackground.jpg"]}
            title="Özel Jet Kiralama"
            descriptionDesktop="Türkiye'nin tüm havalimanlarından dünyanın her noktasına özel jet kiralama hizmetleri. VIP transfer, özel catering ve gümrük işlemleri ile konforlu uçuş deneyimi."
            descriptionMobile="Türkiye'nin tüm havalimanlarından dünyanın her noktasına özel jet kiralama hizmetleri."
            customBadges={[
              { icon: "jet", text: "VIP Transfer", color: "bg-yellow-400" },
              { icon: "star", text: "Lüks Hizmet", color: "bg-purple-400" },
              { icon: "check", text: "Anında Onay", color: "bg-blue-400" }
            ]}
          />
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {ozelJetData.items.map((item) => (
            <OzelJetCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}
