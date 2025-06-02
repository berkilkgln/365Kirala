import React from 'react';
import Link from 'next/link';
import { FaInstagram } from 'react-icons/fa';
import Logo from '../../../public/images/logo.png';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#0D0D0D] text-gray-400 border-t border-gray-700 py-6 mt-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-6">
        
        {/* Üst Kısım: Logo - Menü - Instagram */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <Image
              src={Logo}
              alt="logo"
              width={160}
              height={80}
              className="object-contain w-24 md:w-32"
            />
          </div>

          {/* Menü */}
          <nav className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
            <Link href="/" className="hover:text-white transition-colors duration-300 text-sm md:text-base cursor-pointer">
              Ana Sayfa
            </Link>
            <Link href="/hakkimizda" className="hover:text-white transition-colors duration-300 text-sm md:text-base cursor-pointer">
              Hakkımızda
            </Link>
            <Link href="/blog" className="hover:text-white transition-colors duration-300 text-sm md:text-base cursor-pointer">
              Blog
            </Link>
            <Link href="/iletisim" className="hover:text-white transition-colors duration-300 text-sm md:text-base cursor-pointer">
              İletişim
            </Link>
          </nav>

          {/* Sosyal Medya */}
          <div className="flex justify-center md:justify-end gap-4 text-lg md:text-xl">
            <a
              href="https://www.instagram.com/365kirala/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition-colors duration-300"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Alt Kısım: Copyright */}
        <div className="w-full text-center">
          <div className="text-[10px] md:text-xs text-gray-500">
            © {new Date().getFullYear()} Tüm hakları saklıdır.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
