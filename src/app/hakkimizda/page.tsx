'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AboutLogo from '../../../public/images/aboutus1.jpg';
import { Navbar } from '../../features/home/navbar';
import Footer from '../../features/home/footer';

const AboutPage = () => {
  return (
    <>
      <Navbar />
      
      <div className="min-h-screen bg-white pt-24">
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
              365Kirala, yat kiralama, özel jet kiralama, villa kiralama, bungalov konaklama, transfer hizmetleri ve günlük tur organizasyonlarıyla hayalinizdeki tatili gerçeğe dönüştürüyor. İstanbul, Bodrum, Antalya, Göcek ve Fethiye gibi Türkiye&apos;nin en gözde tatil noktalarında, size özel çözümler ve üstün konfor sunuyoruz.
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
                alt="365Kirala Hakkında - Lüks Kiralama Platformu"
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

          {/* SEO Content Section */}
          <div className="mt-16 prose prose-lg max-w-none">
            <h2>365Kirala - Türkiye&apos;nin Önde Gelen Lüks Kiralama Platformu</h2>
            <p>
              365Kirala olarak, 2020 yılından bu yana Türkiye&apos;nin en kapsamlı lüks kiralama platformu olarak hizmet vermekteyiz. 
              Müşterilerimize yat kiralama, villa kiralama, özel jet kiralama, transfer hizmetleri ve özel turlar konusunda 
              profesyonel çözümler sunuyoruz.
            </p>

            <h3>Misyonumuz</h3>
            <p>
              Müşterilerimize en yüksek kalitede lüks kiralama hizmetleri sunarak, unutulmaz tatil deneyimleri yaşatmak. 
              Güvenilir, şeffaf ve müşteri odaklı yaklaşımımızla sektörde öncü olmak.
            </p>

            <h3>Vizyonumuz</h3>
            <p>
              Türkiye&apos;nin ve bölgenin en güvenilir lüks kiralama platformu olmak. Teknoloji ve kaliteyi bir araya getirerek 
              müşteri memnuniyetini en üst seviyede tutmak.
            </p>

            <h3>Değerlerimiz</h3>
            <ul>
              <li><strong>Güvenilirlik:</strong> Müşterilerimizle güvene dayalı ilişkiler kurmak</li>
              <li><strong>Kalite:</strong> En yüksek standartlarda hizmet sunmak</li>
              <li><strong>Şeffaflık:</strong> Açık ve dürüst iletişim kurmak</li>
              <li><strong>Müşteri Odaklılık:</strong> Müşteri ihtiyaçlarını ön planda tutmak</li>
              <li><strong>İnovasyon:</strong> Sürekli gelişim ve yenilikçilik</li>
            </ul>

            <h3>Hizmet Alanlarımız</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4>Yat Kiralama</h4>
                <p>Bodrum, Antalya, Fethiye ve Göcek&apos;te lüks yat kiralama hizmetleri. Farklı boyutlarda ve özelliklerde yatlar.</p>
              </div>
              <div>
                <h4>Villa Kiralama</h4>
                <p>Türkiye&apos;nin en güzel lokasyonlarında özel villa kiralama. Deniz manzaralı ve lüks villalar.</p>
              </div>
              <div>
                <h4>Özel Jet Kiralama</h4>
                <p>Dünya çapında özel jet kiralama hizmetleri. Hızlı ve konforlu seyahat deneyimi.</p>
              </div>
              <div>
                <h4>Transfer Hizmetleri</h4>
                <p>Konforlu ve güvenli transfer çözümleri. Şehir içi ve şehirlerarası transferler.</p>
              </div>
            </div>

            <h3>Neden 365Kirala?</h3>
            <ul>
              <li>7/24 müşteri desteği</li>
              <li>En iyi fiyat garantisi</li>
              <li>Güvenli ödeme sistemi</li>
              <li>Profesyonel hizmet kalitesi</li>
              <li>Geniş araç ve lokasyon seçenekleri</li>
              <li>Deneyimli ekibimiz</li>
              <li>Kaliteli araç filosu</li>
              <li>Esnek rezervasyon sistemi</li>
            </ul>

            <h3>İletişim</h3>
            <p>
              Daha fazla bilgi için bizimle iletişime geçebilirsiniz:<br/>
              <strong>Telefon:</strong> +90 xxx xxx xx xx<br/>
              <strong>E-posta:</strong> info@365kirala.com<br/>
              <strong>Adres:</strong> İstanbul, Türkiye
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default AboutPage;
