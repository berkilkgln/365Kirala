import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight, FaStar } from 'react-icons/fa';

export type ListCardProps = {
  item: {
    id: string | number;
    image: string;
    title: string;
    location?: string;
    price: number;
    booked: number;
    discount?: number;
    description: string;
    features?: string[];
    category: string;
  };
};

export const ListCard = ({ item }: ListCardProps) => {
  const getCurrencySymbol = (category: string) => {
    if (category === 'yat' || category === 'ozel-jet') {
      return '€';
    }
    return '₺';
  };

  return (
    <Link
      href={`/${item.category}`}
      className="group flex flex-col h-full min-h-[28rem] rounded-3xl border border-gray-300 
                 bg-white overflow-hidden 
                 shadow-md hover:shadow-xl transition-shadow duration-300
                 cursor-default"
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
      <div className="flex flex-col flex-1 p-5">
        <div className="flex-1">
          <div className="h-full">
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-2 select-none">
              <FaStar className="text-yellow-400" />
              <span>{item.booked} Rezervasyon</span>
            </div>
            <h3 className="font-semibold text-xl mb-2 line-clamp-2 text-gray-800">{item.title}</h3>
            {item.location && (
              <p className="text-gray-500 text-sm line-clamp-1">{item.location}</p>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between mt-6">
          <div>
            <span className="text-xs text-gray-500">Başlangıç</span>
            <div className="flex items-baseline gap-1">
              <p className="font-extrabold text-2xl text-blue-600">
                {getCurrencySymbol(item.category)}{item.price}
              </p>
              <span className="text-sm text-gray-500">/ günlük</span>
            </div>
          </div>
          <div className="bg-blue-600 text-white p-3 rounded-full group-hover:bg-blue-700 transition-colors duration-300">
            <FaArrowRight size={18} />
          </div>
        </div>
      </div>
    </Link>
  );
};
