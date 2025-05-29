'use client';

import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { ListCard } from '../../components/card';
import toursData from '../../data/tur/services.json';
import transferData from '../../data/transfer/services.json';
import villaData from '../../data/villa/services.json';
import yachtData from '../../data/yat/services.json';
import jetData from '../../data/ozel-jet/services.json';
import bungalovData from '../../data/bungalov/services.json';

const categories = [
  {
    items: yachtData.items,
    category: 'yat',
    title: 'Yat Kiralama',
    description: 'Denizlerin keyfini çıkarabileceğiniz özel yatlar.',
  },
  {
    items: villaData.items,
    category: 'villa',
    title: 'Villa Kiralama',
    description: 'Doğa içinde konforlu ve özel villalar sizleri bekliyor.',
  },
  {
    items: transferData.items,
    category: 'transfer',
    title: 'Transfer Hizmetleri',
    description: 'Konforlu ve güvenli şehir içi ve şehirlerarası transferler.',
  },
  {
    items: toursData.items,
    category: 'tur',
    title: 'Turlar',
    description: 'Sizin için özel hazırlanmış en güzel turlar.',
  },
  {
    items: jetData.items,
    category: 'ozel-jet',
    title: 'Özel Jet Kiralama',
    description: 'Dünyanın her noktasına özel jet konforuyla ulaşın.',
  },
  {
    items: bungalovData.items,
    category: 'bungalov',
    title: 'Bungalov Kiralama',
    description: 'Doğayla iç içe bungalov tatil deneyimi.',
  },
];


export const HomePage = () => {
  return (
    <main className="min-h-screen ">
      <div className="container mx-auto px-4 py-12 space-y-16">
        {categories.map((category) => (
          <section key={category.title} className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-gray-900">{category.title}</h2>
              <p className="text-gray-600">{category.description}</p>
            </div>
            <Swiper
              modules={[Navigation]}
              spaceBetween={24}
              slidesPerView={1}
              navigation
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 4 },
              }}
              className="w-full"
            >
              {category.items.map((item) => (
                <SwiperSlide key={item.id}>
                  <ListCard item={{ ...item, category: category.category }} />
                </SwiperSlide>
              ))}
            </Swiper>
          </section>
        ))}
      </div>
    </main>
  );
};
