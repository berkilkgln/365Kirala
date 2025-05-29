'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../../public/images/logo.png';
import { FaBars } from 'react-icons/fa';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { href: '/yat', label: 'Yat' },
    { href: '/ozel-jet', label: 'Özel Jet' },
    { href: '/villa', label: 'Villa' },
    { href: '/bungalov', label: 'Bungalov' },
    { href: '/transfer', label: 'Transfer' },
    { href: '/tur', label: 'Günlük Tur' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-black/45 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between md:justify-between">
        {/* Mobile: Hamburger ve Logo */}
        <div className="flex items-center justify-between w-full md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-2xl focus:outline-none"
          >
            <FaBars />
          </button>

          <div className="relative w-70 h-35 mx-auto">
            <Link href="/" aria-label="Anasayfa" className="block w-full h-full relative">
              <Image
                src={Logo}
                alt="Rental Logo"
                fill
                className="object-contain"
                priority
              />
            </Link>
          </div>
        </div>

        {/* Desktop: Logo ve Menü */}
        <div className="hidden md:flex items-center gap-8 w-full">
          <div className="relative w-[400px] h-[180px]">
            <Link href="/" aria-label="Anasayfa" className="block w-full h-full relative">
              <Image
                src={Logo}
                alt="Rental Logo"
                fill
                className="object-contain"
                priority
              />
            </Link>
          </div>

          <nav className="flex gap-8 text-sm font-medium ml-auto">
            {navItems.map((item) => (
              <Link
                key={item.href + item.label}
                href={item.href}
                className="text-base px-4 py-2 rounded-lg transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-0 text-white font-bold"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Menü Açıldığında */}
      {menuOpen && (
        <div className="md:hidden bg-gray/90 backdrop-blur-md w-full p-4 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.href + item.label}
              href={item.href}
              className="block text-white text-base py-2 border-b border-white/20"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};
