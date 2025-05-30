'use client';

import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">İletişim</h1>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white shadow-lg p-6 rounded-xl text-center border border-gray-100 hover:border-indigo-600 transition-colors duration-300">
            <FaPhone className="text-3xl text-indigo-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Telefon</h3>
            <p className="text-gray-600">+90 (555) 555-5555</p>
          </div>
          
          <div className="bg-white shadow-lg p-6 rounded-xl text-center border border-gray-100 hover:border-indigo-600 transition-colors duration-300">
            <FaEnvelope className="text-3xl text-indigo-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900">E-posta</h3>
            <p className="text-gray-600">info@365kirala.com</p>
          </div>
          
          <div className="bg-white shadow-lg p-6 rounded-xl text-center border border-gray-100 hover:border-indigo-600 transition-colors duration-300">
            <FaMapMarkerAlt className="text-3xl text-indigo-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Adres</h3>
            <p className="text-gray-600">Ankara, Türkiye</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white shadow-lg p-8 rounded-xl border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Bize Ulaşın</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
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
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 text-gray-900"
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
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 text-gray-900"
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
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 text-gray-900"
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
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 text-gray-900"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 shadow-md hover:shadow-lg"
              >
                Gönder
              </button>
            </form>
          </div>

          {/* Map */}
          <div className="h-[500px] bg-white shadow-lg rounded-xl overflow-hidden border border-gray-100">
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