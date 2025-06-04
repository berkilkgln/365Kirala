'use client';

import React, { useState, useRef, useEffect } from 'react';
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const messageRef = useRef<HTMLDivElement>(null);

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: ''
  });

  useEffect(() => {
    // Sayfa yüklendiğinde loading durumunu kaldır
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (status.type && messageRef.current) {
      messageRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [status]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Mesajınız başarıyla gönderildi!'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(data.message || 'Bir hata oluştu');
      }
    } catch {
      setStatus({
        type: 'error',
        message: 'Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 text-gray-900">
          İletişim
        </h1>

        {/* İletişim Kartları */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 mb-8 sm:mb-12 max-w-3xl mx-auto">
          <div className="bg-white shadow-lg p-6 rounded-xl text-center border border-gray-100 hover:border-indigo-600 transition-colors duration-300">
            <FaEnvelope className="text-3xl text-indigo-600 mx-auto mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900">E-posta</h3>
            <p className="text-gray-600">info@365kirala.com</p>
          </div>

          <div className="bg-white shadow-lg p-6 rounded-xl text-center border border-gray-100 hover:border-indigo-600 transition-colors duration-300">
            <FaMapMarkerAlt className="text-3xl text-indigo-600 mx-auto mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900">Adres</h3>
            <p className="text-gray-600">Ankara, Türkiye</p>
          </div>
        </div>

        {/* Form ve Harita Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-7xl mx-auto">
          {/* İletişim Formu */}
          <div className="bg-white shadow-lg p-6 sm:p-8 rounded-xl border border-gray-100 order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900">Bize Ulaşın</h2>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Ad Soyad
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 sm:py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 text-gray-900"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-posta
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 sm:py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 text-gray-900"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Konu
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 sm:py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 text-gray-900"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mesaj
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 sm:py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 text-gray-900"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 sm:py-3 px-6 rounded-lg transition duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
              >
                {loading ? 'Gönderiliyor...' : 'Gönder'}
              </button>

              {/* Başarı ve Hata Mesajları */}
              {status.type && (
                <div
                  ref={messageRef}
                  className={`mt-6 p-4 sm:p-6 bg-white rounded-xl shadow-lg flex flex-col items-center justify-center transition-all duration-500 ease-in-out transform ${
                    status.type === 'success'
                      ? 'border-2 border-green-500 bg-green-50'
                      : 'border-2 border-red-500 bg-red-50'
                  }`}
                >
                  {status.type === 'success' ? (
                    <>
                      <div className="w-12 sm:w-16 h-12 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                        <svg
                          className="w-8 h-8 sm:w-10 sm:h-10 text-green-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold text-green-700 mb-2">
                        Mesajınız Başarıyla Gönderildi!
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 text-center">
                        En kısa zamanda sizinle iletişime geçeceğiz.
                        <br />
                        İlginiz için teşekkür ederiz.
                      </p>
                    </>
                  ) : (
                    <>
                      <div className="w-12 sm:w-16 h-12 sm:h-16 bg-red-100 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                        <svg
                          className="w-8 h-8 sm:w-10 sm:h-10 text-red-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold text-red-700 mb-2">
                        Bir Hata Oluştu
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 text-center">
                        Mesajınız gönderilemedi.
                        <br />
                        Lütfen daha sonra tekrar deneyiniz.
                      </p>
                    </>
                  )}
                </div>
              )}
            </form>
          </div>

          {/* Harita */}
          <div className="h-[300px] sm:h-[400px] lg:h-[500px] bg-white shadow-lg rounded-xl overflow-hidden border border-gray-100 order-1 lg:order-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3065.2937103796883!2d32.76316141534041!3d39.97041277942495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34f86d58c9643%3A0x4210b8d7c3e98b59!2sKe%C3%A7i%C3%B6ren%2C%20Ankara!5e0!3m2!1str!2str!4v1685476123456!5m2!1str!2str"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
