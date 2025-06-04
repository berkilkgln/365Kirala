import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    // E-posta göndermek için transporter oluştur
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: '365kirala@gmail.com', // Gönderen e-posta adresi
        pass: process.env.EMAIL_PASSWORD // Gmail uygulama şifresi
      }
    });

    // E-posta içeriği
    const mailOptions = {
      from: '365kirala@gmail.com',
      to: '365kirala@gmail.com',
      subject: `İletişim Formu: ${subject}`,
      html: `
        <h3>Yeni İletişim Formu Mesajı</h3>
        <p><strong>İsim:</strong> ${name}</p>
        <p><strong>E-posta:</strong> ${email}</p>
        <p><strong>Konu:</strong> ${subject}</p>
        <p><strong>Mesaj:</strong></p>
        <p>${message}</p>
      `
    };

    // E-postayı gönder
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