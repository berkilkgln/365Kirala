// pages/yat/index.tsx

import { SinglePageHeader } from '../../components/single-page-header';
import yachtData from '../../data/yat/services.json';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '../../features/home/navbar';
import { FaStar } from 'react-icons/fa';

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
  return (
    <>
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
