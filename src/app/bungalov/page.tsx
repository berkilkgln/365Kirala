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
          descriptionMobile="Sapanca, Bolu, Abant ve daha birçok lokasyonda doğa ile iç içe bungalovlar."
        />

        <h1 className="text-3xl font-bold mb-6 mt-5 text-center md:text-left">Bungalov Kiralama</h1>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {bungalovData.items.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
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
                      <div className="text-indigo-600 font-bold text-lg md:text-2xl">{item.price}€</div>
                      <p className="text-[10px] md:text-xs text-gray-500 mt-1 italic">’dan başlayan fiyatlarla</p>
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

                <Link
                  href={`/bungalov/${item.id}`}
                  className="block w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white text-sm md:text-base font-semibold py-2.5 rounded-xl text-center transition"
                >
                  İncele
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
