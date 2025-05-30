'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../../public/images/logo.png';
import { FaBars } from 'react-icons/fa';

import { HizmetModal } from '../../components/HizmetModal';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const navItems = [
    { href: '/yat', label: 'Yat' },
    { href: '/ozel-jet', label: 'Özel Jet' },
    { href: '/villa', label: 'Villa' },
    { href: '/bungalov', label: 'Bungalov' },
    { href: '/transfer', label: 'Transfer' },
    { href: '/tur', label: 'Günlük Tur' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-black/45 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between md:justify-between">
          {/* Mobile: Hamburger ve Logo */}
          <div className="flex items-center justify-between w-full md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white text-2xl focus:outline-none"
              aria-label="Mobil Menü Aç"
            >
              <FaBars />
            </button>

            <div className="relative w-100 h-40 mx-auto">
              <Link href="/" aria-label="Anasayfa" className="block w-full h-full relative cursor-default">
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
          <div className="hidden md:flex items-center gap-6 w-full">
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

            <nav className="flex gap-6 text-sm font-medium ml-auto items-center">
              {navItems.map((item) => (
                <Link
                  key={item.href + item.label}
                  href={item.href}
                  className="text-sm px-3 py-2 rounded-lg transition-transform duration-300 hover:scale-105 focus:outline-none text-white font-bold whitespace-nowrap"
                >
                  {item.label}
                </Link>
              ))}

              <button
                onClick={() => setModalOpen(true)}
                className="bg-indigo-600 text-white font-bold px-6 py-1.5 rounded-lg hover:bg-indigo-700 transition-colors duration-300 whitespace-nowrap"
                aria-label="Hizmet Ver"
              >
                Hizmet Ver
              </button>
            </nav>
          </div>
        </div>

        {/* Mobile Menü */}
        {menuOpen && (
          <div className="md:hidden fixed top-20 left-0 w-full bg-black/80 backdrop-blur-md p-6 space-y-4 z-40 transition-all duration-300">
            {navItems.map((item) => (
              <Link
                key={item.href + item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block text-white text-base font-semibold py-2 px-4 rounded-lg hover:bg-white/10 hover:scale-105 transition-all duration-300"
              >
                {item.label}
              </Link>
            ))}

            <button
              onClick={() => {
                setMenuOpen(false);
                setModalOpen(true);
              }}
              className="block w-full text-center bg-indigo-600 text-white font-bold py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-300"
              aria-label="Hizmet Ver"
            >
              Hizmet Ver
            </button>
          </div>
        )}
      </header>

      <HizmetModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};
