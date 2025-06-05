'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';

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
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Only allow numbers for specific fields
    if (name === 'telefon') {
      const numbersOnly = value.replace(/\D/g, '').slice(0, 10);
      setFormData({ ...formData, [name]: numbersOnly });
    } 
    else if (name === 'kimlikNo') {
      const numbersOnly = value.replace(/\D/g, '').slice(0, 11);
      setFormData({ ...formData, [name]: numbersOnly });
    }
    else if (name === 'fiyat') {
      const numbersOnly = value.replace(/\D/g, '');
      setFormData({ ...formData, [name]: numbersOnly });
    }
    else {
      setFormData({ ...formData, [name]: value });
    }
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const newErrors: FormErrors = {};

    if (!formData.isim.trim()) newErrors.isim = 'İsim zorunludur.';
    if (!formData.soyisim.trim()) newErrors.soyisim = 'Soyisim zorunludur.';
    if (!formData.hizmet.trim()) newErrors.hizmet = 'Hizmet türü zorunludur.';
    if (!formData.fiyat.trim()) newErrors.fiyat = 'Fiyat zorunludur.';

    if (!formData.kimlikNo.trim()) newErrors.kimlikNo = 'TC Kimlik No zorunludur.';
    else if (formData.kimlikNo.length !== 11) newErrors.kimlikNo = 'TC Kimlik numarası 11 rakam olmalıdır.';

    if (!formData.telefon.trim()) newErrors.telefon = 'Telefon zorunludur.';
    else if (formData.telefon.length !== 10) newErrors.telefon = 'Telefon numarası 10 rakam olmalıdır.';

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      // Send email through EmailJS
      await emailjs.send(
        'service_veu98za',
        'template_axq4ebx',
        {
          name: `${formData.isim} ${formData.soyisim}`,
          email: formData.email,
          subject: `Yeni Hizmet Kaydı: ${formData.hizmet}`,
          message: `
Hizmet Detayları:
----------------
İsim: ${formData.isim}
Soyisim: ${formData.soyisim}
Hizmet: ${formData.hizmet}
Fiyat: ${formData.fiyat} ${formData.paraBirimi} (${formData.fiyatTipi})
TC Kimlik / Vergi No: ${formData.kimlikNo}
Telefon: ${formData.telefon}
E-posta: ${formData.email}`,
        },
        'URXfFpOPFM5lW6j0d'
      );

      // Send to API endpoint as before
      const response = await fetch('/api/hizmet', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('API gönderimi başarısız');
      }

      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
        setFormData({
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
      }, 3000);
    } catch (error) {
      console.error('Form gönderimi hatası:', error);
      setErrors({ submit: 'Form gönderilirken bir hata oluştu. Lütfen tekrar deneyin.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  if (isSuccess) {
    return (
      <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-center justify-center p-6">
        <div className="bg-white text-gray-900 p-8 rounded-2xl shadow-2xl w-full max-w-xl relative animate-fade-in">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <svg
                className="w-10 h-10 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-green-700 mb-2">
              Kayıt Formunuz Başarıyla Gönderildi!
            </h2>
            <p className="text-gray-600">
              En kısa sürede size geri dönüş yapacağız.
              <br />
              İlginiz için teşekkür ederiz.
            </p>
          </div>
        </div>
      </div>
    );
  }

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
                }`}
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
                }`}
              />
              {errors.soyisim && <p className="text-red-600 mt-1 text-sm">{errors.soyisim}</p>}
            </div>
          </div>

          <input
            type="text"
            name="hizmet"
            placeholder="Hizmet Türü (Örn: Yat Kiralama)"
            value={formData.hizmet}
            onChange={handleChange}
            className={`w-full p-3 rounded-lg bg-gray-100 border ${
              errors.hizmet ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.hizmet && <p className="text-red-600 mt-1 text-sm">{errors.hizmet}</p>}

          <div className="flex gap-4">
            <input
              type="text"
              name="fiyat"
              placeholder="Fiyat"
              value={formData.fiyat}
              onChange={handleChange}
              inputMode="numeric"
              className={`w-1/3 p-3 rounded-lg bg-gray-100 border ${
                errors.fiyat ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            <select
              name="paraBirimi"
              value={formData.paraBirimi}
              onChange={handleChange}
              className="w-1/3 p-3 rounded-lg bg-gray-100 border border-gray-300"
            >
              <option value="TRY">₺ TL</option>
              <option value="EUR">€ Euro</option>
              <option value="USD">$ Dolar</option>
            </select>
            <select
              name="fiyatTipi"
              value={formData.fiyatTipi}
              onChange={handleChange}
              className="w-1/3 p-3 rounded-lg bg-gray-100 border border-gray-300"
            >
              <option value="günlük">Günlük</option>
              <option value="haftalık">Haftalık</option>
            </select>
          </div>
          {errors.fiyat && <p className="text-red-600 mt-1 text-sm">{errors.fiyat}</p>}

          <input
            type="text"
            name="kimlikNo"
            placeholder="TC Kimlik / Vergi No"
            value={formData.kimlikNo}
            onChange={handleChange}
            className={`w-full p-3 rounded-lg bg-gray-100 border ${
              errors.kimlikNo ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.kimlikNo && <p className="text-red-600 mt-1 text-sm">{errors.kimlikNo}</p>}

          <input
            type="text"
            name="telefon"
            placeholder="Telefon (5XXXXXXXXX)"
            value={formData.telefon}
            onChange={handleChange}
            className={`w-full p-3 rounded-lg bg-gray-100 border ${
              errors.telefon ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.telefon && <p className="text-red-600 mt-1 text-sm">{errors.telefon}</p>}

          <input
            type="email"
            name="email"
            placeholder="E-posta"
            value={formData.email}
            onChange={handleChange}
            className={`w-full p-3 rounded-lg bg-gray-100 border ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.email && <p className="text-red-600 mt-1 text-sm">{errors.email}</p>}

          {errors.submit && <p className="text-red-600 text-center mt-2">{errors.submit}</p>}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 px-6 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
          >
            {isSubmitting ? 'Gönderiliyor...' : 'Formu Gönder'}
          </button>
        </form>
      </div>
    </div>
  );
};
