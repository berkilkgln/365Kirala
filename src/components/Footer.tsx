import Link from 'next/link';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export const HomeFooter = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10 mt-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Logo veya Site Adı */}
        <div className="text-2xl font-bold tracking-tight">RentalTour</div>

        {/* Menü */}
        <nav className="flex flex-col md:flex-row gap-4 md:gap-8 text-sm">
          <Link href="/" className="hover:text-white transition">
            Ana Sayfa
          </Link>
          <Link href="/about" className="hover:text-white transition">
            Hakkımızda
          </Link>
          <a href="/services" className="hover:text-white transition">
            Hizmetler
          </a>
          <a href="/contact" className="hover:text-white transition">
            İletişim
          </a>
        </nav>

        {/* Sosyal Medya */}
        <div className="flex gap-4 text-xl">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaFacebook />
          </a>
          <a
            href="https://wa.me/905555555555"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 mt-8">
        © {new Date().getFullYear()} RentalTour. Tüm hakları saklıdır.
      </div>
    </footer>
  );
};
