'use client';

import React from 'react';
import Link from 'next/link';
import { Navbar } from '../../../features/home/navbar';
import Footer from '../../../features/home/footer';
import { BlogPost } from '../../../types/blog';
import Head from 'next/head';

interface Props {
  post: BlogPost;
}

export default function BlogDetailPageClient({ post }: Props) {
  // Markdown içeriğini HTML'e dönüştür
  const renderContent = (content: string) => {
    const lines = content.split('\n');
    const elements: React.ReactNode[] = [];
    let listBuffer: string[] = [];
    let listType: 'ul' | 'ol' | null = null;

    const flushList = () => {
      if (listBuffer.length === 0) return;
      if (listType === 'ul') {
        elements.push(
          <ul key={`ul-${elements.length}`} className="list-disc list-inside my-6 text-gray-700 space-y-2">
            {listBuffer.map((item, i) => (
              <li key={i} className="hover:text-gray-900 transition-colors">
                {item.replace(/^- /, '')}
              </li>
            ))}
          </ul>
        );
      } else if (listType === 'ol') {
        elements.push(
          <ol key={`ol-${elements.length}`} className="list-decimal list-inside my-6 text-gray-700 space-y-2">
            {listBuffer.map((item, i) => (
              <li key={i} className="hover:text-gray-900 transition-colors">
                {item.replace(/^\d+\.\s/, '')}
              </li>
            ))}
          </ol>
        );
      }
      listBuffer = [];
      listType = null;
    };

    for (let i = 0; i < lines.length; i++) {
      const paragraph = lines[i].trim();

      if (!paragraph) {
        flushList();
        continue;
      }

      if (paragraph.startsWith('## ')) {
        flushList();
        elements.push(
          <h2 key={i} className="text-3xl font-bold mt-12 mb-6 text-gray-900 border-b border-gray-200 pb-2">
            {paragraph.slice(3)}
          </h2>
        );
      } else if (paragraph.startsWith('### ')) {
        flushList();
        elements.push(
          <h3 key={i} className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
            {paragraph.slice(4)}
          </h3>
        );
      } else if (paragraph.startsWith('|')) {
        flushList();
        // Tablo satırlarını toplayalım
        const tableLines = [paragraph];
        let j = i + 1;
        while (j < lines.length && lines[j].trim().startsWith('|')) {
          tableLines.push(lines[j].trim());
          j++;
        }
        i = j - 1;

        // Tablo oluştur
        elements.push(
          <div key={i} className="overflow-x-auto my-8 rounded-lg shadow-md">
            <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-md">
              <tbody className="bg-white divide-y divide-gray-200">
                {tableLines.map((row, rowIndex) => {
                  const cells = row.split('|').filter(cell => cell.trim());
                  return (
                    <tr key={rowIndex} className={rowIndex === 0 ? 'bg-gray-50' : 'hover:bg-gray-50'}>
                      {cells.map((cell, cellIndex) => (
                        <td
                          key={cellIndex}
                          className={`px-6 py-4 whitespace-nowrap text-sm ${
                            rowIndex === 0 ? 'font-semibold text-gray-900' : 'text-gray-700'
                          }`}
                        >
                          {cell.trim()}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        );
      } else if (paragraph.startsWith('- ')) {
        if (listType !== 'ul') {
          flushList();
          listType = 'ul';
        }
        listBuffer.push(paragraph);
      } else if (/^\d+\./.test(paragraph)) {
        if (listType !== 'ol') {
          flushList();
          listType = 'ol';
        }
        listBuffer.push(paragraph);
      } else {
        flushList();
        elements.push(
          <p key={i} className="mb-6 text-gray-700 leading-relaxed text-lg">
            {paragraph}
          </p>
        );
      }
    }
    flushList();
    return elements;
  };

  return (
    <>
      <Head>
        <title>{post.title} | 365Kirala Blog</title>
        <meta name="description" content={post.metaDescription} />
        <meta name="keywords" content={post.keywords.join(', ')} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
      </Head>

      <Navbar />
      <article className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Başlık Bölümü */}
        <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 py-20">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <span className="inline-block px-6 py-2 mb-8 text-sm font-semibold bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/30 transition-all duration-300 shadow-sm">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg">
              {post.title}
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto tracking-wide">
              {post.excerpt}
            </p>
          </div>
        </div>

        {/* İçerik Bölümü */}
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="prose prose-lg max-w-none bg-white rounded-2xl shadow-xl p-8 md:p-12">
            {/* Ana İçerik */}
            <div className="space-y-8">{renderContent(post.content)}</div>

            {/* Etiketler */}
            <div className="mt-16 pt-8 border-t border-gray-100">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">İlgili Etiketler</h4>
              <div className="flex flex-wrap gap-3">
                {post.keywords.map((keyword, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-blue-50 text-blue-600 text-sm rounded-full hover:bg-blue-100 transition-all duration-300 cursor-pointer"
                  >
                    #{keyword}
                  </span>
                ))}
              </div>
            </div>

            {/* Blog'a Dön Butonu */}
            <div className="mt-16 flex justify-center">
              <Link
                href="/blog"
                className="group inline-flex items-center gap-3 px-8 py-4 text-lg font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 transform group-hover:-translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
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
