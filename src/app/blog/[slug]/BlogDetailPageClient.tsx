'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Navbar } from '../../../features/home/navbar';
import Footer from '../../../features/home/footer';
import { BlogPost, blogPosts } from '../../../types/blog';
import Head from 'next/head';

interface Props {
  post: BlogPost;
}

export default function BlogDetailPageClient({ post }: Props) {
  const [tableOfContents, setTableOfContents] = useState<{ id: string; title: string; level: number }[]>([]);
  const [activeSection, setActiveSection] = useState<string>('');
  const readingTime = Math.ceil(post.content.split(' ').length / 200); // Ortalama okuma hızı: 200 kelime/dakika

  // İçindekiler tablosunu oluştur
  useEffect(() => {
    const headings = post.content.match(/^#{2,3}\s.+$/gm) || [];
    const toc = headings.map(heading => {
      const level = heading.startsWith('###') ? 3 : 2;
      const title = heading.replace(/^#{2,3}\s/, '');
      const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      return { id, title, level };
    });
    setTableOfContents(toc);
  }, [post.content]);

  // Aktif bölümü takip et
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -80% 0px' }
    );

    tableOfContents.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [tableOfContents]);

  // Benzer yazıları bul
  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

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
          <ul key={`ul-${elements.length}`} className="my-6 text-gray-700 space-y-2">
            {listBuffer.map((item, i) => (
              <li key={i} className="hover:text-gray-900 transition-colors">
                {item.replace(/^- /, '')}
              </li>
            ))}
          </ul>
        );
      } else if (listType === 'ol') {
        elements.push(
          <ol key={`ol-${elements.length}`} className="my-6 text-gray-700 space-y-2">
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
        const title = paragraph.slice(3);
        const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        elements.push(
          <h2 key={i} id={id} className="text-3xl font-bold mt-12 mb-6 text-gray-900 border-b border-gray-200 pb-2 scroll-mt-20">
            {title}
          </h2>
        );
      } else if (paragraph.startsWith('### ')) {
        flushList();
        const title = paragraph.slice(4);
        const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        elements.push(
          <h3 key={i} id={id} className="text-2xl font-semibold mt-8 mb-4 text-gray-800 scroll-mt-20">
            {title}
          </h3>
        );
      } else if (paragraph.startsWith('#### ')) {
        flushList();
        const title = paragraph.slice(5);
        const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        elements.push(
          <h4 key={i} id={id} className="text-xl font-semibold mt-6 mb-3 text-gray-800 scroll-mt-20">
            {title}
          </h4>
        );
      } else if (paragraph.startsWith('|')) {
        flushList();
        const tableLines = [paragraph];
        let j = i + 1;
        while (j < lines.length && lines[j].trim().startsWith('|')) {
          tableLines.push(lines[j].trim());
          j++;
        }
        i = j - 1;

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
        // Sıkça sorulan sorular bölümü için özel stil
        if (paragraph.includes('?') && !paragraph.startsWith('|') && !paragraph.startsWith('-') && !/^\d+\./.test(paragraph)) {
          elements.push(
            <div key={i} className="mb-6">
              <p className="text-xl font-extrabold text-gray-900 tracking-tight">
                {paragraph}
              </p>
            </div>
          );
        } else {
          elements.push(
            <p key={i} className="mb-6 text-base text-gray-700 leading-relaxed">
              {paragraph}
            </p>
          );
        }
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
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
      </Head>

      <Navbar />
      <article className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Başlık Bölümü */}
        <div className="flex justify-center pt-14 pb-10">
          <div className="relative w-full max-w-2xl mx-auto rounded-2xl shadow-xl px-6 md:px-10 py-10 text-center text-white bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-800">
            {/* Category Chip */}
            <span className="inline-block px-5 py-1.5 mb-5 text-xs font-semibold bg-white/20 text-white rounded-full border border-white/20">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-3 leading-tight tracking-tight">
              {post.title}
            </h1>
            {/* Decorative Line */}
            <div className="flex justify-center mb-4">
              <div className="w-16 h-0.5 bg-white/40 rounded-full"></div>
            </div>
            <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed mb-4 font-light">
              {post.excerpt}
            </p>
            {/* Reading Time Chip */}
            <div className="mt-2 flex items-center justify-center gap-2 text-xs">
              <span className="inline-flex items-center gap-1 px-4 py-1 bg-white/10 text-white rounded-full border border-white/10 font-medium">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {readingTime} dakika okuma
              </span>
            </div>
          </div>
        </div>

        {/* Ana İçerik Bölümü */}
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* İçindekiler Tablosu */}
            {tableOfContents.length > 0 && (
              <div className="lg:w-64 flex-shrink-0">
                <div className="sticky top-24 bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    İçindekiler
                  </h4>
                  <nav className="space-y-2">
                    {tableOfContents.map(({ id, title, level }) => (
                      <a
                        key={id}
                        href={`#${id}`}
                        className={`block text-sm hover:text-blue-600 transition-colors ${
                          level === 3 ? 'pl-4' : ''
                        } ${activeSection === id ? 'text-blue-600 font-medium' : 'text-gray-600'}`}
                      >
                        {title}
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
            )}

            {/* İçerik */}
            <div className="flex-grow">
              <div className="prose prose-lg max-w-none bg-white rounded-2xl shadow-xl p-8 md:p-12 transition-all duration-300 hover:shadow-2xl border border-gray-100">
                <div className="space-y-8">
                  {renderContent(post.content)}
                </div>

                {/* Etiketler */}
                <div className="mt-16 pt-8 border-t border-gray-100">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                    İlgili Etiketler
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {post.keywords.map((keyword, index) => (
                      <Link
                        key={index}
                        href={`/blog?tag=${encodeURIComponent(keyword)}`}
                        className="px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-600 text-sm rounded-full hover:from-blue-100 hover:to-indigo-100 transition-all duration-300 cursor-pointer hover:scale-105 border border-blue-100"
                      >
                        #{keyword}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Sosyal Medya Paylaşım */}
                <div className="mt-12 pt-8 border-t border-gray-100">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                    Bu Yazıyı Paylaş
                  </h4>
                  <div className="flex gap-4">
                    <button
                      onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`, '_blank')}
                      className="p-3 bg-gradient-to-r from-[#1DA1F2] to-[#1a8cd8] text-white rounded-full hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </button>
                    <button
                      onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')}
                      className="p-3 bg-gradient-to-r from-[#1877F2] to-[#166fe5] text-white rounded-full hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </button>
                    <button
                      onClick={() => window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(post.title)}`, '_blank')}
                      className="p-3 bg-gradient-to-r from-[#0A66C2] to-[#0956a8] text-white rounded-full hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Blog'a Dön Butonu */}
                <div className="mt-16 flex justify-center">
                  <Link
                    href="/blog"
                    className="group inline-flex items-center gap-3 px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 rounded-full hover:from-blue-700 hover:via-indigo-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
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
          </div>

          {/* Benzer Yazılar */}
          {relatedPosts.length > 0 && (
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
                Benzer Yazılar
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    href={`/blog/${relatedPost.slug}`}
                    className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-100"
                  >
                    <div className="p-6">
                      <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full mb-4 border border-blue-100">
                        {relatedPost.category}
                      </span>
                      <h4 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {relatedPost.title}
                      </h4>
                      <p className="text-gray-600 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
      <Footer />
    </>
  );
}
