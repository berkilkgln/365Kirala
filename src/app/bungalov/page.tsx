'use client';

import { useState } from 'react';
import { Navbar } from '../../features/home/navbar';
import bungalovData from '../../data/bungalov/services.json';
import Image from 'next/image';
import Link from 'next/link';
import { createUrlSlug } from '../../lib/utils';
import { FaArrowRight, FaStar } from 'react-icons/fa';

export default function BungalovPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = bungalovData.items.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div className="bg-white min-h-screen">
        {/* Banner */}
        <div className="relative w-full h-72 overflow-hidden bg-gradient-to-r from-indigo-900 to-blue-800">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <Image
            src="/images/bungalov/bungalovbackground.jpg"
            alt="Bungalov Konaklama"
            fill
            className="object-cover z-0"
            priority
          />
          <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 mt-8 drop-shadow-xl animate-fade-in-up">
              Bungalov Konaklama
            </h1>
            <p className="text-xl md:text-2xl drop-shadow-lg max-w-3xl">
              Doğayla iç içe, huzurlu ve konforlu bungalov tatil seçeneklerini keşfedin
            </p>
          </div>
        </div>

        {/* İçerik */}
        <div className="max-w-screen-xl mx-auto px-4 py-12">
          {/* Arama */}
          <div className="mb-8">
            <input
              type="text"
              placeholder="Bungalov veya lokasyon ara..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full max-w-2xl mx-auto block px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Bungalov Listesi */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => {
              const slug = createUrlSlug(item.title);
              return (
                <Link
                  key={item.id}
                  href={`/bungalov/${item.id}-${slug}`}
                  className="group flex flex-col rounded-3xl border border-gray-300 bg-white overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-default"
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
                  <div className="flex flex-col flex-1 p-5 justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-2 select-none">
                        <FaStar className="text-yellow-400" />
                        <span>{item.booked} Rezervasyon</span>
                      </div>
                      <h3 className="font-semibold text-xl mb-2 line-clamp-2 text-gray-800">{item.title}</h3>
                      {item.location && (
                        <p className="text-gray-500 text-sm line-clamp-1">{item.location}</p>
                      )}
                    </div>

                    <div className="flex items-center justify-between mt-6">
                      <div>
                        <span className="text-xs text-gray-500">Başlangıç</span>
                        <div className="flex items-baseline gap-1">
                          <p className="font-extrabold text-2xl text-blue-600">
                            ₺{item.price}
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
            })}
          </div>

          {/* Sonuç Bulunamadı */}
          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Aradığınız kriterlere uygun bungalov bulunamadı.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
