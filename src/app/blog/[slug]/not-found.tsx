'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Sayfa Bulunamadı</h2>
        <p className="text-gray-600 mb-8">
          Aradığınız blog yazısı bulunamadı. Lütfen blog ana sayfasına dönüp diğer yazılarımıza göz atın.
        </p>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Blog&apos;a Dön
        </Link>
      </div>
    </div>
  );
} 