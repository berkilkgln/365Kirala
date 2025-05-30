// components/Footer.tsx

import React from 'react';
import Link from 'next/link';
import { FaInstagram } from 'react-icons/fa';
import Logo from '../../../public/images/logo.png';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#0D0D0D] text-gray-400 border-t border-gray-700 py-4 mt-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image
            src={Logo}
            alt="logo"
            width={160}
            height={80}
            className="object-contain w-24 md:w-32"
          />
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-row flex-wrap justify-center items-center gap-4 md:gap-6">
          <Link href="/" className="hover:text-white transition-colors duration-300 text-xs md:text-sm cursor-default">
            Ana Sayfa
          </Link>
          <Link href="/hakkimizda" className="hover:text-white transition-colors duration-300 text-xs md:text-sm cursor-default">
            Hakkımızda
          </Link>
          <Link href="/iletisim" className="hover:text-white transition-colors duration-300 text-xs md:text-sm cursor-default">
            İletişim
          </Link>
        </nav>

        {/* Social Media Icons */}
        <div className="flex gap-4 text-lg md:text-xl">
          <a
            href="https://www.instagram.com/365kirala/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-colors duration-300"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          {/* <a
            href="https://wa.me/905075717119"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 transition-colors duration-300"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a> */}
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-4 text-center text-[10px] md:text-xs text-gray-500">
        © {new Date().getFullYear()} Tüm hakları saklıdır.
      </div>
    </footer>
  );
};

export default Footer;
