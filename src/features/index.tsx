'use client';

import { useState, useEffect, useRef } from 'react';
import yachtData from '../data/yat/services.json';
import villaData from '../data/villa/services.json';
import transferData from '../data/transfer/services.json';
import toursData from '../data/tur/services.json';
import jetData from '../data/ozel-jet/services.json';
import bungalovData from '../data/bungalov/services.json';

import { Navbar } from './home/navbar';
import { HomePage } from './home/page';
import tekneBg from '../app/images/teknem.jpg';
import { useRouter } from 'next/navigation';

type ServiceItem = {
  id: number | string;
  image: string;
  location: string;
  title: string;
  price: number;
  booked: number;
  discount?: number;
  description: string;
  features: string[];
  category: string;
  categoryKey: string;
};

export const Index = () => {
  const [query, setQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const inputRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const allItems: ServiceItem[] = [
    ...(yachtData?.items || []).map((item) => ({
      ...item,
      category: 'yat',
      categoryKey: 'yat',
      location: item.location || '',
    })),
    ...(villaData?.items || []).map((item) => ({
      ...item,
      category: 'villa kiralama',
      categoryKey: 'villa',
      location: item.location || '',
    })),
    ...(transferData?.items || []).map((item) => ({
      ...item,
      category: 'transfer',
      categoryKey: 'transfer',
      location: item.location || '',
    })),
    ...(toursData?.items || []).map((item) => ({
      ...item,
      category: 'tur',
      categoryKey: 'tur',
      location: item.location || '',
    })),
    ...(jetData?.items || []).map((item) => ({
      ...item,
      category: 'özel-jet',
      categoryKey: 'ozel-jet',
      location: `${item.departure} - ${item.destination}`,
    })),
    ...(bungalovData?.items || []).map((item) => ({
      ...item,
      category: 'bungalov',
      categoryKey: 'bungalov',
      location: item.location || '',
    })),
  ];

  const filtered =
    query.length > 0
      ? allItems.filter(
          (item) =>
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.location.toLowerCase().includes(query.toLowerCase())
        )
      : [];

  const handleSelect = (item: ServiceItem) => {
    setQuery('');
    setShowDropdown(false);
    router.push(`/${item.categoryKey}`);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    }

    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <>
      <Navbar />

      <section className="pt-24 pb-16 text-center lg:pt-32 relative">
        <div
          className="absolute inset-0 w-full h-full z-[-2]"
          style={{
            backgroundImage: `url(${tekneBg.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            filter: 'brightness(80%)',
          }}
        />

        <h1 className="mx-auto max-w-4xl font-display text-[1.5rem] md:text-[2rem] lg:text-6xl font-bold text-white drop-shadow-md leading-snug md:leading-snug lg:leading-tight">
          Lüks Tatil ve Hizmetler
        </h1>

        <p className="mx-auto mt-4 md:mt-6 max-w-2xl text-yellow-200 font-semibold text-xs md:text-sm lg:text-lg">
          Yat kiralama, villa kiralama, transfer hizmetleri ve özel turlarla unutulmaz bir tatil deneyimi yaşayın.
        </p>

        <div className="mt-10 flex justify-center">
          <div className="relative w-full max-w-xl" ref={inputRef}>
            <div className="bg-white/80 backdrop-blur-lg shadow-md border border-gray-300 rounded-full p-2 md:p-3 hover:scale-[1.02] transition-transform duration-300">
              <input
                type="text"
                className="w-full text-sm md:text-base lg:text-lg px-4 py-2 md:py-3 lg:py-4 rounded-full bg-transparent border-none focus:ring-0 focus:outline-none placeholder-gray-500 text-gray-900"
                placeholder="Yat, villa, transfer, özel jet, bungalov veya tur ara..."
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setShowDropdown(true);
                }}
                onFocus={() => setShowDropdown(true)}
              />
            </div>
            {showDropdown && filtered.length > 0 && (
              <ul className="absolute left-0 right-0 mt-2 bg-white rounded-lg shadow-md max-h-60 overflow-auto z-10 border border-gray-300 text-left">
                {filtered.map((item) => (
                  <li
                    key={item.id}
                    className="px-4 py-3 cursor-pointer hover:bg-indigo-100 transition duration-200 border-b last:border-none text-sm"
                    onMouseDown={() => handleSelect(item)}
                  >
                    <span className="font-semibold text-gray-800">{item.title}</span>
                    <span className="ml-2 text-gray-500">
                      ({item.location} - {item.category})
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>

      <HomePage />
    </>
  );
};
