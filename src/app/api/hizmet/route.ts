import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: '365kirala@gmail.com',
        pass: process.env.EMAIL_PASSWORD
      }
    });

    const paraBirimiSimge: Record<string, string> = {
      TRY: '₺',
      EUR: '€',
      USD: '$',
    };

    const mailOptions = {
      from: '365kirala@gmail.com',
      to: '365kirala@gmail.com',
      subject: 'Yeni Hizmet Kayıt Formu',
      html: `
        <h2>Yeni Hizmet Kaydı</h2>
        <p><strong>İsim:</strong> ${data.isim}</p>
        <p><strong>Soyisim:</strong> ${data.soyisim}</p>
        <p><strong>Hizmet Türü:</strong> ${data.hizmet}</p>
        <p><strong>Fiyat:</strong> ${data.fiyat} ${paraBirimiSimge[data.paraBirimi] || ''} (${data.fiyatTipi})</p>
        <p><strong>TC Kimlik / Vergi No:</strong> ${data.kimlikNo}</p>
        <p><strong>Telefon:</strong> ${data.telefon}</p>
        <p><strong>E-posta:</strong> ${data.email}</p>
      `
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'E-posta başarıyla gönderildi' },
      { status: 200 }
    );
  } catch (error) {
    console.error('E-posta gönderme hatası:', error);
    return NextResponse.json(
      { message: 'E-posta gönderilirken bir hata oluştu' },
      { status: 500 }
    );
  }
} 