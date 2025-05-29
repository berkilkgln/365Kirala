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
  return (
    <Link
      href={`/${item.category}`}
      className="group flex flex-col rounded-2xl border-2 border-blue-200 transition hover:shadow-lg bg-white overflow-hidden cursor-default h-[380px] sm:h-[400px] md:h-[420px]"
    >
      {/* Görsel Alanı */}
      <div className="relative w-full aspect-[4/3] flex-shrink-0">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover group-hover:scale-105 transition"
        />
        {item.discount && (
          <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            %{item.discount} İndirim
          </div>
        )}
      </div>

      {/* İçerik Alanı */}
      <div className="flex flex-col flex-1 p-4 justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
            <FaStar className="text-yellow-400" />
            <span>{item.booked} Rezervasyon</span>
          </div>
          <h3 className="font-semibold text-lg mb-1 line-clamp-2">{item.title}</h3>
          {item.location && <p className="text-gray-600 text-sm line-clamp-1">{item.location}</p>}
        </div>

        <div className="flex items-center justify-between mt-4">
          <div>
            <span className="text-xs text-gray-500">Başlangıç</span>
            <p className="font-bold text-lg">€{item.price}</p>
          </div>
          <div className="bg-blue-600 text-white p-2 rounded-full group-hover:bg-blue-700 transition">
            <FaArrowRight />
          </div>
        </div>
      </div>
    </Link>
  );
};
