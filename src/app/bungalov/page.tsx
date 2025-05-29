import { SinglePageHeader } from '../../components/single-page-header';
import bungalovData from '../../data/bungalov/services.json';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '../../features/home/navbar';
import { FaStar } from 'react-icons/fa';

export default function BungalovPage() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8 font-semibold">
        <SinglePageHeader
          image="/images/bungalov/bungalovbackground.jpg"
          title="Bungalov Kiralama"
          descriptionDesktop="Şehirden uzak, doğa ile iç içe bungalov kiralama fırsatları! Sapanca, Bolu, Abant ve daha birçok lokasyonda jakuzili, şömineli ve havuzlu bungalovlarla huzurlu tatilin keyfini çıkarın. Günlük ve haftalık uygun fiyat seçenekleriyle hemen rezervasyon yapın."
        />

        <h1 className="text-3xl font-bold mb-6">Bungalov Kiralama</h1>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {bungalovData.items.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Görsel */}
              <div className="relative h-56">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover rounded-t-xl"
                />
                {item.discount && (
                  <div className="absolute top-2 right-2">
                    <span className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded shadow">
                      %{item.discount} İndirim
                    </span>
                  </div>
                )}
              </div>

              {/* İçerik */}
              <div className="p-4 space-y-3">
                <div className="bg-white rounded-3xl shadow-xl p-6 transition-transform hover:scale-[1.02] duration-300 space-y-5 border border-gray-100">
                  {/* Başlık */}
                  <h3 className="text-xl font-semibold text-gray-900 tracking-tight">{item.title}</h3>

                  {/* Lokasyon */}
                  <p className="text-sm text-gray-400">{item.location}</p>

                  {/* Fiyat + Rezervasyon */}
                  <div className="flex justify-between items-center border-t pt-4">
                  <div className="text-indigo-600 font-bold text-2xl">{item.price}€</div>
                  <div className="flex items-center text-sm text-gray-500">
                  <FaStar className="text-yellow-400 mr-1" />
                  <span>{item.booked}+ rezervasyon</span>
                   </div>
                   </div>

                  {/* Özellikler */}
                  <div className="mt-3">
                    <ul className="grid grid-cols-1 gap-2 text-sm text-gray-600 list-none">
                      {item.features.slice(0, 3).map((f, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-indigo-500 rounded-full" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Buton */}
                  <button className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold py-3 rounded-xl transition">
                    <Link
                      href={`/bungalov/${item.id}`}
                      className="block hover:bg-indigo-700 text-white text-sm font-semibold rounded-xl text-center transition"
                    >
                      İncele
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
