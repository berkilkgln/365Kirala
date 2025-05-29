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
    <div className="group relative rounded-2xl border-2  border-blue-200  transition  ">
      <div className="relative h-72 overflow-hidden    rounded-t-xl ">
        <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-105 transition" />
        {item.discount && (
          <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            %{item.discount} İndirim
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
          <FaStar className="text-yellow-400" />
          <span>{item.booked} Rezervasyon</span>
        </div>
        <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
        {item.location && <p className="text-gray-600 mb-3">{item.location}</p>}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-sm text-gray-500">Başlangıç</span>
            <p className="font-bold text-lg">€{item.price}</p>
          </div>
          <Link
            href={`/${item.category}`}
            className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition"
          >
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};
