'use client';

import { useState } from 'react';

type HizmetModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

type FormErrors = {
  [key: string]: string;
};

export const HizmetModal = ({ isOpen, onClose }: HizmetModalProps) => {
  const [formData, setFormData] = useState({
    isim: '',
    soyisim: '',
    hizmet: '',
    fiyat: '',
    fiyatTipi: 'günlük',
    paraBirimi: 'TRY',
    kimlikNo: '',
    telefon: '',
    email: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors((prev) => ({ ...prev, [e.target.name]: '' }));
  };

  const validate = () => {
    const newErrors: FormErrors = {};

    if (!formData.isim.trim()) newErrors.isim = 'İsim zorunludur.';
    if (!formData.soyisim.trim()) newErrors.soyisim = 'Soyisim zorunludur.';
    if (!formData.hizmet.trim()) newErrors.hizmet = 'Hizmet türü zorunludur.';
    if (!formData.fiyat.trim()) newErrors.fiyat = 'Fiyat zorunludur.';
    else if (isNaN(Number(formData.fiyat))) newErrors.fiyat = 'Fiyat sayısal olmalıdır.';

    if (!formData.kimlikNo.trim()) newErrors.kimlikNo = 'TC Kimlik / Vergi No zorunludur.';
    else if (formData.kimlikNo.length !== 11)
      newErrors.kimlikNo = 'TC Kimlik numarası 11 haneli olmalıdır.';

    if (!formData.telefon.trim()) newErrors.telefon = 'Telefon zorunludur.';
    else if (formData.telefon.length < 10 || formData.telefon.length > 11)
      newErrors.telefon = 'Telefon numarası 10 veya 11 haneli olmalıdır.';

    if (!formData.email.trim()) newErrors.email = 'E-posta zorunludur.';
    else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Geçerli bir e-posta giriniz.';
      }
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    const paraBirimiSimge: Record<string, string> = {
      TRY: '₺',
      EUR: '€',
      USD: '$',
    };

    const subject = encodeURIComponent('Yeni Hizmet Kayıt Formu');
    const body = encodeURIComponent(
      `İsim: ${formData.isim}\n` +
      `Soyisim: ${formData.soyisim}\n` +
      `Hizmet Türü: ${formData.hizmet}\n` +
      `Fiyat: ${formData.fiyat} ${paraBirimiSimge[formData.paraBirimi] || ''} (${formData.fiyatTipi})\n` +
      `TC Kimlik / Vergi No: ${formData.kimlikNo}\n` +
      `Telefon: ${formData.telefon}\n` +
      `E-posta: ${formData.email}`
    );

    window.location.href = `mailto:berkilkgln9@gmail.com?subject=${subject}&body=${body}`;

    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-center justify-center p-6">
      <div className="bg-white text-gray-900 p-8 rounded-2xl shadow-2xl w-full max-w-xl relative">
        <button
          onClick={onClose}
          aria-label="Kapat"
          className="absolute top-5 right-5 text-gray-600 hover:text-indigo-600 transition-colors text-3xl font-light"
        >
          &#10005;
        </button>

        <h2 className="text-3xl font-extrabold mb-6 text-center tracking-wide text-gray-900">
          Kayıt Formu
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          <div className="flex gap-4">
            <div className="w-1/2">
              <input
                type="text"
                name="isim"
                placeholder="İsim"
                value={formData.isim}
                onChange={handleChange}
                className={`w-full p-3 rounded-lg bg-gray-100 border ${
                  errors.isim ? 'border-red-500' : 'border-gray-300'
                } placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition`}
              />
              {errors.isim && <p className="text-red-600 mt-1 text-sm">{errors.isim}</p>}
            </div>
            <div className="w-1/2">
              <input
                type="text"
                name="soyisim"
                placeholder="Soyisim"
                value={formData.soyisim}
                onChange={handleChange}
                className={`w-full p-3 rounded-lg bg-gray-100 border ${
                  errors.soyisim ? 'border-red-500' : 'border-gray-300'
                } placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition`}
              />
              {errors.soyisim && <p className="text-red-600 mt-1 text-sm">{errors.soyisim}</p>}
            </div>
          </div>

          <div>
            <input
              type="text"
              name="hizmet"
              placeholder="Hizmet Türü (Örn: Yat Kiralama)"
              value={formData.hizmet}
              onChange={handleChange}
              className={`w-full p-3 rounded-lg bg-gray-100 border ${
                errors.hizmet ? 'border-red-500' : 'border-gray-300'
              } placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition`}
            />
            {errors.hizmet && <p className="text-red-600 mt-1 text-sm">{errors.hizmet}</p>}
          </div>

          <div className="flex gap-4">
            <div className="w-1/3">
              <input
                type="text"
                name="fiyat"
                placeholder="Fiyat"
                value={formData.fiyat}
                onChange={handleChange}
                className={`w-full p-3 rounded-lg bg-gray-100 border ${
                  errors.fiyat ? 'border-red-500' : 'border-gray-300'
                } placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition`}
                inputMode="numeric"
              />
              {errors.fiyat && <p className="text-red-600 mt-1 text-sm">{errors.fiyat}</p>}
            </div>

            <div className="relative w-1/3">
              <select
                name="paraBirimi"
                value={formData.paraBirimi}
                onChange={handleChange}
                className="
                  appearance-none w-full p-3 rounded-xl bg-gray-100 border border-gray-300
                  text-gray-900 cursor-pointer focus:outline-none focus:border-indigo-500
                  transition shadow-md hover:border-indigo-400
                "
              >
                <option value="TRY">₺ TL</option>
                <option value="EUR">€ Euro</option>
                <option value="USD">$ Dolar</option>
              </select>
              <div
                className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-700"
                style={{ userSelect: 'none' }}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>

            <div className="relative w-1/3">
              <select
                name="fiyatTipi"
                value={formData.fiyatTipi}
                onChange={handleChange}
                className="
                  appearance-none w-full p-3 rounded-xl bg-gray-100 border border-gray-300
                  text-gray-900 cursor-pointer focus:outline-none focus:border-indigo-500
                  transition shadow-md hover:border-indigo-400
                "
              >
                <option value="günlük">Günlük</option>
                <option value="haftalık">Haftalık</option>
              </select>
              <div
                className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-700"
                style={{ userSelect: 'none' }}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
          </div>

          <div>
            <input
              type="text"
              name="kimlikNo"
              placeholder="TC Kimlik / Vergi No (11 hane)"
              maxLength={11}
              value={formData.kimlikNo}
              onChange={handleChange}
              className={`w-full p-3 rounded-lg bg-gray-100 border ${
                errors.kimlikNo ? 'border-red-500' : 'border-gray-300'
              } placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition`}
              inputMode="numeric"
            />
            {errors.kimlikNo && <p className="text-red-600 mt-1 text-sm">{errors.kimlikNo}</p>}
          </div>

          <div>
            <input
              type="tel"
              name="telefon"
              placeholder="Telefon (10-11 hane)"
              maxLength={11}
              value={formData.telefon}
              onChange={handleChange}
              className={`w-full p-3 rounded-lg bg-gray-100 border ${
                errors.telefon ? 'border-red-500' : 'border-gray-300'
              } placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition`}
              inputMode="tel"
            />
            {errors.telefon && <p className="text-red-600 mt-1 text-sm">{errors.telefon}</p>}
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="E-posta"
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-3 rounded-lg bg-gray-100 border ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              } placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition`}
            />
            {errors.email && <p className="text-red-600 mt-1 text-sm">{errors.email}</p>}
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-2 bg-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:bg-indigo-700 transition"
          >
            Gönder
          </button>
        </form>
      </div>
    </div>
  );
};
