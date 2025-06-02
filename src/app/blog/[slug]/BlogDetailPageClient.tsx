'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '../../../features/home/navbar';
import Footer from '../../../features/home/footer';
import { BlogPost } from '../../../types/blog';

interface Props {
  post: BlogPost;
}

export default function BlogDetailPageClient({ post }: Props) {
  // Markdown içeriğini HTML'e dönüştür
  const renderContent = (content: string) => {
    return content.split('\n').map((paragraph, index) => {
      // Başlıkları işle (## ile başlayanlar)
      if (paragraph.trim().startsWith('## ')) {
        return (
          <h2 key={index} className="text-2xl font-bold mt-8 mb-4 text-gray-900">
            {paragraph.replace('## ', '')}
          </h2>
        );
      }
      // Alt başlıkları işle (### ile başlayanlar)
      else if (paragraph.trim().startsWith('### ')) {
        return (
          <h3 key={index} className="text-xl font-semibold mt-6 mb-3 text-gray-800">
            {paragraph.replace('### ', '')}
          </h3>
        );
      }
      // Liste öğelerini işle (- ile başlayanlar)
      else if (paragraph.trim().startsWith('- ')) {
        return (
          <ul key={index} className="list-disc pl-6 my-4 text-gray-700">
            <li>{paragraph.replace('- ', '')}</li>
          </ul>
        );
      }
      // Numaralı liste öğelerini işle (1. ile başlayanlar)
      else if (/^\d+\./.test(paragraph.trim())) {
        return (
          <ol key={index} className="list-decimal pl-6 my-4 text-gray-700">
            <li>{paragraph.replace(/^\d+\.\s/, '')}</li>
          </ol>
        );
      }
      // Normal paragrafları işle
      else if (paragraph.trim()) {
        return (
          <p key={index} className="mb-4 text-gray-700 leading-relaxed">
            {paragraph}
          </p>
        );
      }
      return null;
    });
  };

  return (
    <>
      <Navbar />
      <article className="min-h-screen bg-white">
        {/* Hero Bölümü */}
        <div className="relative h-[60vh] w-full overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover' }}
            className="brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="max-w-4xl mx-auto px-4 text-center text-white">
              <span className="inline-block px-4 py-1 mb-6 text-sm font-semibold bg-blue-600/90 rounded-full">
                {post.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
              <div className="flex items-center justify-center gap-4 text-lg">
                <span>{post.author}</span>
                <span>•</span>
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>

        {/* İçerik Bölümü */}
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="prose prose-lg max-w-none">
            {/* Özet */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {post.excerpt}
            </p>
            
            {/* Ana İçerik */}
            {renderContent(post.content)}

            {/* Etiketler */}
            <div className="mt-12 pt-6 border-t border-gray-100">
              <div className="flex flex-wrap gap-2">
                {post.keywords.map((keyword, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full hover:bg-gray-200 transition-colors"
                  >
                    #{keyword}
                  </span>
                ))}
              </div>
            </div>

            {/* Blog'a Dön Butonu */}
            <div className="mt-12 flex justify-center">
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
        </div>
      </article>
      <Footer />
    </>
  );
} 