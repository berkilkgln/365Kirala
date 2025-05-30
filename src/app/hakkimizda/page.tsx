'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AboutLogo from '../../../public/images/aboutus1.jpg';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[20vh] sm:h-[25vh] md:h-[30vh] overflow-hidden">
        <div className="absolute inset-0" />
        <div className="relative z-20 h-full flex items-center justify-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-5xl font-bold text-center text-black px-4"
          >
            Hakkımızda
          </motion.h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-black">
            365Kirala ile Lüks Yaşamı Keşfedin
            </h2>
            <p className="text-gray-600 mb-4">
            365Kirala, yat kiralama, özel jet kiralama, villa kiralama, bungalov konaklama, transfer hizmetleri ve günlük tur organizasyonlarıyla hayalinizdeki tatili gerçeğe dönüştürüyor. İstanbul, Bodrum, Antalya, Göcek ve Fethiye gibi Türkiye’nin en gözde tatil noktalarında, size özel çözümler ve üstün konfor sunuyoruz.
            </p>
            <p className="text-gray-600 mb-4">
            Alanında uzman ekibimiz ve geniş hizmet ağı sayesinde, her bütçeye ve ihtiyaca uygun kiralama ve tur seçenekleriyle unutulmaz bir deneyim yaşamanızı sağlıyoruz. 365Kirala ile yat, özel jet, villa, bungalov, transfer ve günlük tur hizmetlerinde ayrıcalıklı bir tatil fırsatını yakalayın.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src={AboutLogo}
              alt="About Us Content"
              fill
              className="object-cover rounded-xl"
            />
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-12 text-center"
        >
          <div className="p-6 bg-white shadow-lg rounded-xl border border-gray-100">
            <h3 className="text-2xl sm:text-3xl font-bold text-indigo-600">500+</h3>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">Mutlu Müşteri</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-xl border border-gray-100">
            <h3 className="text-2xl sm:text-3xl font-bold text-indigo-600">50+</h3>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">Lüks Yat</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-xl border border-gray-100">
            <h3 className="text-2xl sm:text-3xl font-bold text-indigo-600">100+</h3>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">Villa</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-xl border border-gray-100">
            <h3 className="text-2xl sm:text-3xl font-bold text-indigo-600">1000+</h3>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">Başarılı Kiralama</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
