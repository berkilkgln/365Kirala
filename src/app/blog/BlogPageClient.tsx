'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '../../features/home/navbar';
import Footer from '../../features/home/footer';
import { blogPosts } from '../../types/blog';

export default function BlogPageClient() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const postsByCategory = blogPosts.reduce((acc, post) => {
    if (!acc[post.category]) {
      acc[post.category] = [];
    }
    acc[post.category].push(post);
    return acc;
  }, {} as Record<string, typeof blogPosts>);

  const filteredPosts = selectedCategory
    ? postsByCategory[selectedCategory] || []
    : blogPosts;

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        {/* HERO */}
        <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 pt-32 pb-20">
          <div className="absolute inset-0 bg-black/20" />
          
          <div className="relative container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight drop-shadow-lg">
              Blog
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Tur önerileri, seyahat rehberleri ve ilham verici içerikler
            </p>
          </div>
        </section>

        {/* KATEGORİLER */}
        <section className="container mx-auto px-4 py-16">
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-5 py-2.5 rounded-full font-medium border shadow-sm transition-all ${
                selectedCategory === null
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-gray-800 hover:bg-blue-50 border-gray-200'
              }`}
            >
              Tümü
            </button>
            {Object.keys(postsByCategory).map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-full font-medium border shadow-sm transition-all ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-gray-800 hover:bg-blue-50 border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* BLOG KARTLARI */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredPosts.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.id}>
                <article className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all group overflow-hidden hover:-translate-y-1">
                  <div className="p-6">
                    <span className="inline-block text-sm font-semibold text-blue-600 bg-blue-50 rounded-full px-4 py-1 mb-3">
                      {post.category}
                    </span>
                    <h2 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-700 line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.keywords.slice(0, 3).map((keyword, index) => (
                        <span
                          key={index}
                          className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full"
                        >
                          #{keyword}
                        </span>
                      ))}
                    </div>
                    <div className="text-sm text-gray-400">
                      {new Date().toLocaleDateString('tr-TR', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* BOŞ KATEGORİ */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Bu kategoride içerik bulunamadı
              </h3>
              <p className="text-gray-500">Farklı bir kategori deneyebilirsiniz.</p>
            </div>
          )}

          {/* Newsletter Section */}
          <div className="mt-20 bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
            
            <div className="relative">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Seyahat İpuçları
              </h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Blog yazılarımız ve fırsatlardan haberdar olmak için e-posta bültenimize abone olun.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="E-posta adresiniz"
                  className="flex-1 px-6 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white bg-white placeholder-gray-500"
                />
                <button className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-full hover:bg-blue-50 transition">
                  Abone Ol
                </button>
              </div>
            </div>
          </div>

          {/* ÖNE ÇIKAN YAZILAR */}
          <div className="mt-24">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Öne Çıkan Yazılar</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.slice(0, 2).map((post) => (
                <Link href={`/blog/${post.slug}`} key={post.id}>
                  <article className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all group overflow-hidden hover:-translate-y-1">
                    <div className="p-6">
                      <span className="inline-block text-sm font-semibold text-blue-600 bg-blue-50 rounded-full px-4 py-1 mb-3">
                        {post.category}
                      </span>
                      <h2 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-blue-700 line-clamp-2">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 text-base line-clamp-3 mb-4">{post.excerpt}</p>
                      <div className="flex flex-wrap gap-2">
                        {post.keywords.slice(0, 3).map((keyword, index) => (
                          <span
                            key={index}
                            className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full"
                          >
                            #{keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
