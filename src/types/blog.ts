export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  keywords: string[];
  metaDescription: string;
}

export const categories = [
  'Tümü',
  'Lüks Villa',
  'Yat Kiralama',
  'Özel Jet',
  'VIP Transfer',
  'Bungalov',
  'Gurme'
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Akdeniz\'in En Lüks Yat Kiralama Deneyimi',
    slug: 'akdenizin-en-luks-yat-kiralama-deneyimi',
    category: 'Yat Kiralama',
    excerpt: 'Akdeniz\'in masmavi sularında unutulmaz bir yat tatili deneyimi yaşayın. En lüks yatlar, profesyonel ekip ve özel hizmetlerle mükemmel bir deniz tatili sizi bekliyor.',
    content: `
      Akdeniz'in eşsiz koylarında, lüks bir yat ile unutulmaz bir tatil deneyimi yaşamak isteyenler için özel bir rehber hazırladık. 365Kirala olarak sunduğumuz yat kiralama hizmetleri ile hayalinizdeki deniz tatiline ulaşmanız artık çok kolay.

      ## Neden Yat Kiralama?

      Özel bir yat kiralamak, size ve sevdiklerinize özel bir tatil deneyimi sunar. Kalabalık plajlardan uzak, kendi programınızı yapabileceğiniz, mahremiyetinizin korunduğu bir tatil için en ideal seçenektir.

      ### Sunduğumuz Hizmetler

      - Profesyonel kaptan ve mürettebat
      - Özel şef ve gurme yemekler
      - Su sporları ekipmanları
      - Lüks iç mekan tasarımı
      - 24/7 concierge hizmeti

      ## En Popüler Rotalar

      1- Göcek - Fethiye Koyları
      2- Bodrum - Yunan Adaları
      3- Antalya - Kaş - Kekova
      4 Marmaris - Datça

      ### Yat Seçenekleri

      * Motor Yatlar
      * Yelkenli Yatlar
      * Guletler
      * Mega Yatlar

      ## Rezervasyon ve Fiyatlandırma

      Yat kiralama fiyatları, seçtiğiniz yatın boyutu, sezonu ve kiralama süresine göre değişiklik gösterir. Size özel fiyat teklifi için müşteri temsilcilerimizle iletişime geçebilirsiniz.
    `,
    image: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a',
    author: 'Ahmet Yılmaz',
    date: '2024-03-15',
    readTime: '8 dk okuma',
    keywords: ['yat kiralama', 'lüks yat', 'akdeniz', 'deniz tatili', 'özel yat', 'tekne kiralama', 'mavi yolculuk'],
    metaDescription: 'Akdeniz\'in en lüks yat kiralama hizmetleri, özel kaptanlı yatlar, mavi yolculuk rotaları ve yat kiralama fiyatları hakkında detaylı bilgi.'
  },
  {
    id: 2,
    title: 'Kapadokya\'nın En Güzel Bungalov Otelleri',
    slug: 'kapadokyanin-en-guzel-bungalov-otelleri',
    category: 'Bungalov',
    excerpt: 'Kapadokya\'nın eşsiz doğal güzellikleri arasında, lüks bungalov otellerde unutulmaz bir konaklama deneyimi yaşayın. En iyi bungalov otel önerileri ve rezervasyon bilgileri.',
    content: `
      Kapadokya'nın masalsı atmosferinde, doğayla iç içe ama lüksten ödün vermeden tatil yapmak isteyenler için en özel bungalov otellerini derledik. Peribacaları manzaralı, özel havuzlu ve her detayı düşünülmüş bungalovlarda unutulmaz bir konaklama deneyimi sizi bekliyor.

      ## Neden Bungalov Otel?

      Bungalov oteller, size otel konforuyla birlikte özel bir villa rahatlığı sunar. Mahremiyetinizi korurken, otel hizmetlerinden de faydalanabilirsiniz.

      ### Sunulan Hizmetler

      - Özel havuz seçenekleri
      - Peribacası manzarası
      - Şömineli odalar
      - Jakuzili süitler
      - 24 saat oda servisi
      - Özel şef hizmeti

      ## En İyi Bungalov Oteller

         1-Taş Konak Bungalov Suites
         2-Peribacası View Resort
         3-Kapadokya Luxury Bungalows
         4-Valley Cave Hotel & Bungalows

      ### Aktiviteler 

      * Balon turu
      * ATV safari
      * Şarap tadımı
      * At binme
      * Vadi yürüyüşleri

      ## Rezervasyon Bilgileri

      Bungalov otel fiyatları sezona ve oda tipine göre değişiklik gösterir. Erken rezervasyon avantajlarından yararlanmak için hemen bizimle iletişime geçin.
    `,
    image: 'https://images.unsplash.com/photo-1585543805890-6051f7829f98',
    author: 'Zeynep Kaya',
    date: '2024-03-14',
    readTime: '10 dk okuma',
    keywords: ['bungalov otel', 'kapadokya', 'lüks konaklama', 'peribacaları', 'özel havuzlu otel', 'taş otel', 'mağara otel'],
    metaDescription: 'Kapadokya\'nın en lüks bungalov otelleri, özel havuzlu odalar, peribacası manzaralı süitler ve eşsiz konaklama deneyimi için detaylı rehber.'
  },
  {
    id: 3,
    title: 'Özel Jet Kiralama Rehberi: A\'dan Z\'ye Bilmeniz Gerekenler',
    slug: 'ozel-jet-kiralama-rehberi',
    category: 'Özel Jet',
    excerpt: 'Özel jet kiralama hakkında merak ettiğiniz her şey: fiyatlar, jet modelleri, rezervasyon süreci ve VIP hizmetler. Lüks ve konforlu seyahat deneyimi için kapsamlı rehber.',
    content: `
      Özel jet kiralama, iş veya tatil seyahatlerinizde maksimum konfor ve zaman tasarrufu sağlar. Bu rehberde, özel jet kiralama sürecinden fiyatlara, jet modellerinden VIP hizmetlere kadar tüm detayları bulabilirsiniz.

      ## Neden Özel Jet?

      Özel jet ile seyahat, size esnek uçuş programı, özel terminal kullanımı ve kişiselleştirilmiş hizmet avantajları sunar.

      ### Sunduğumuz Hizmetler

      - 7/24 uçuş planlama
      - Özel terminal ve VIP salon kullanımı
      - Kişiselleştirilmiş ikram menüsü
      - Lüks araç transfer hizmeti
      - Özel kabin ekibi

      ## Jet Modelleri

      1- Light Jets (4-6 yolcu)
      2- Midsize Jets (6-8 yolcu)
      3- Super Midsize Jets (8-10 yolcu)
      4- Heavy Jets (10-16 yolcu)

      ### Popüler Rotalar

      * İstanbul - Londra
      * İstanbul - Dubai
      * İstanbul - Paris
      * Ankara - İstanbul
      * İzmir - Antalya

      ## Rezervasyon Süreci

      Özel jet kiralama fiyatları, uçuş mesafesi, jet modeli ve yolcu sayısına göre belirlenir. Size özel fiyat teklifi için hemen bizimle iletişime geçin.
    `,
    image: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b',
    author: 'Mehmet Demir',
    date: '2024-03-13',
    readTime: '12 dk okuma',
    keywords: ['özel jet', 'jet kiralama', 'vip uçuş', 'business jet', 'lüks seyahat', 'özel uçak', 'jet charter'],
    metaDescription: 'Özel jet kiralama hizmetleri, jet modelleri, fiyatlar ve VIP hizmetler hakkında kapsamlı bilgi. Lüks ve konforlu seyahat için özel jet rehberi.'
  }
]; 