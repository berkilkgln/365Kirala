export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  content: string;
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
  'Gurme',
  'Yurt İçi Turlar',
  'Yurt Dışı Turlar'
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Kapadokya Balon Turu 2025: Fiyatlar, Rezervasyon ve Sık Sorulan Sorular',
    slug: 'kapadokya-balon-turu-2025-fiyatlar-rezervasyon',
    category: 'Yurt İçi Turlar',
    excerpt: '2025 Kapadokya balon turu fiyatları, rezervasyon bilgileri ve sık sorulan sorular. Güneşin doğuşunda peribacaları üzerinde süzülerek unutulmaz bir deneyim yaşayın.',
    content: `
      # Kapadokya Balon Turu Rehberi 2025

      Kapadokya'nın eşsiz doğal güzelliklerini kuşbakışı izlemek için en etkileyici yöntemlerden biri balon turudur. Güneşin doğuşuyla birlikte başlayan bu büyüleyici deneyim, size hayatınızın en unutulmaz anlarını yaşatacak.

      ## 2025 Kapadokya Balon Turu Fiyatları

      | Tur Kategorisi | Fiyat | Özellikler | Dahil Hizmetler |
      | Standart Tur | 4.999 TL | 16-20 kişilik sepet | Transfer, kahvaltı, sertifika |
      | VIP Tur | 6.999 TL | 12-16 kişilik sepet | Özel pilot, şampanya, fotoğraf |
      | Özel Tur | 8.999 TL | 8-12 kişilik sepet | Özel pilot, şampanya, video |

      ## Sık Sorulan Sorular

      ### Balon Turu Ne Kadar Sürer?
      - Toplam süre: 3-4 saat
      - Uçuş süresi: 45-90 dakika
      - Hazırlık ve transfer: 2-3 saat

      ### Kapadokya'da En İyi Balon Turu Zamanı Nedir?
      - İlkbahar (Mart - Mayıs): İdeal hava koşulları
      - Sonbahar (Eylül - Kasım): Renkli manzaralar
      - Yaz ayları (Haziran - Ağustos): Erken kalkış gerektirir

      ### Hava Durumu Nasıl Olmalı?
      - Rüzgar hızı: 10 knot altı
      - Yağış olmamalı
      - Görüş mesafesi iyi olmalı
      - Hava sıcaklığı: 5-25°C arası

      ## Rezervasyon Bilgileri

      ### Ödeme Seçenekleri
      | Ödeme Tipi | Avantajlar | Minimum Tutar | Taksit Seçenekleri |
      | Peşin | %10 İndirim | 4.999 TL | - |
      | Taksitli | 3-6 Taksit | 6.999 TL | 3, 6, 9, 12 ay |
      | Kredi Kartı | %5 İndirim | 5.999 TL | 3, 6, 9 ay |

      ### İptal Politikası
      | İptal Zamanı | İade Oranı | Koşullar | Ek Ücret |
      | 30 gün önce | %100 | Tam iade | - |
      | 15-29 gün önce | %50 | Kısmi iade | - |
      | 14 gün ve altı | %0 | İade yok | - |

      ## Güvenlik Önlemleri

      - Uluslararası standartlarda eğitimli pilotlar
      - Modern ve bakımlı ekipmanlar
      - Detaylı hava durumu kontrolü
      - Kapsamlı sigorta poliçesi
      - Acil durum prosedürleri ve ekipmanları

      ## Balon Turu Sonrası Yapılacaklar

      - Sertifika törenine katılın
      - Profesyonel fotoğraflarınızı alın
      - Göreme'de geleneksel kahvaltı yapın
      - ATV turu veya at turu planlayın
      - Yerel restoranlarda yöresel lezzetleri deneyin

      ---
      *Son güncelleme: Mart 2024*
    `,
    keywords: [
      'kapadokya balon turu 2025',
      'balon turu fiyatları',
      'kapadokya gezilecek yerler',
      'peribacaları',
      'nevşehir',
      'güneş doğumu',
      'hava balonu',
      'turizm',
      'kapadokya turları',
      'balon turu rezervasyon'
    ],
    metaDescription: '2025 Kapadokya balon turu fiyatları, gezilecek yerler, en iyi sezon ve rezervasyon bilgileri. Güneş doğumunda peribacaları üzerinde süzülerek unutulmaz bir deneyim yaşayın.'
  },
  {
    id: 2,
    title: 'Dubai Lüks Tatil Rehberi 2025: Burj Khalifa, Çöl Safarisi ve Alışveriş',
    slug: 'dubai-luks-tatil-rehberi-2025-fiyatlar-vize',
    category: 'Yurt Dışı Turlar',
    excerpt: '2025 Dubai tatil rehberi: Burj Khalifa, çöl safarisi, Dubai Mall ve şehrin en önemli turistik yerleri. Lüks oteller, alışveriş merkezleri ve eğlence mekanları hakkında detaylı bilgiler. Vize, fiyatlar ve sık sorulan sorular.',
    content: `
      Dubai, modern mimarisi, lüks alışveriş merkezleri ve eşsiz çöl deneyimiyle dünyanın en popüler turistik destinasyonlarından biridir. Bu rehberde, Dubai'de yapılacaklar, gezilecek yerler, konaklama seçenekleri ve pratik bilgiler hakkında detaylı bilgiler bulabilirsiniz.

      ## Dubai'de Mutlaka Görülmesi Gereken Yerler

      ### Modern Dubai
      - Burj Khalifa (Dünyanın en yüksek binası)
      - Dubai Mall (Dünyanın en büyük alışveriş merkezi)
      - Dubai Fountain (Dünyanın en büyük müzikli fıskiyesi)
      - Palm Jumeirah (Yapay ada)
      - Dubai Marina (Modern yaşam bölgesi)

      ### Tarihi ve Kültürel Mekanlar
      - Dubai Çarşısı (Geleneksel pazar)
      - Dubai Müzesi
      - Jumeirah Camii
      - Bastakiya Bölgesi
      - Abra ile Dubai Koyu turu

      ### Eğlence ve Aktivite
      - Dubai Parks and Resorts
      - IMG Worlds of Adventure
      - Aquaventure Waterpark
      - Ski Dubai
      - Dubai Aquarium

      ## Çöl Safarisi ve Özel Deneyimler

      ### Çöl Safarisi Programı
      - 4x4 araçlarla çöl turu
      - Deve binme
      - Geleneksel dans gösterileri
      - Açık büfe akşam yemeği
      - Nargile keyfi
      - Çöl gün batımı

      ### Özel Deneyimler
      - Helikopter turu
      - Yat turu
      - Balon turu
      - Skydive Dubai
      - Burj Khalifa'da yemek

      ## Konaklama Seçenekleri

      ### Lüks Oteller
       Burj Al Arab
         - 7 yıldızlı lüks otel
         - Özel plaj
         - Helikopter pisti
         - Dünya standartlarında restoranlar

       Atlantis The Palm
         - Su altı odalar
         - Aquaventure Waterpark
         - Dolphin Bay
         - Özel plaj

       Armani Hotel Dubai
         - Burj Khalifa'da konum
         - Armani tasarımı
         - Özel spa
         - Lüks restoranlar

      ### Ekonomik Seçenekler
      - Citymax Hotel
      - Rove Hotels
      - Premier Inn
      - Holiday Inn Express

      ## Alışveriş Rehberi

      ### Alışveriş Merkezleri
      - Dubai Mall
      - Mall of the Emirates
      - City Walk
      - Dubai Festival City
      - Ibn Battuta Mall

      ### Geleneksel Çarşılar
      - Gold Souk
      - Spice Souk
      - Textile Souk
      - Perfume Souk

      ## Pratik Bilgiler

      ### En İyi Sezon
      - Ekim - Nisan: İdeal hava koşulları
      - Mayıs - Eylül: Sıcak ve nemli
      - Aralık - Ocak: Yılbaşı ve alışveriş festivali

      ### Vize Bilgileri
      - Türk vatandaşları için vize gerekli
      - Online vize başvurusu
      - 30 günlük turist vizesi
      - Pasaport geçerlilik süresi en az 6 ay

      ### Ulaşım
      - Dubai Metro
      - Taksi
      - Otobüs
      - Tramvay
      - Özel transfer

      ## Sıkça Sorulan Sorular

     - Dubai'de en iyi sezon ne zaman?
      Ekim-Nisan arası ideal sezondur, hava sıcaklığı 25-30 derece arasındadır.

      - Vize ne kadar sürede çıkıyor?
      Online başvurularda genellikle 3-5 iş günü içinde sonuçlanır.

      - Kıyafet konusunda dikkat edilmesi gerekenler neler?
      Plaj ve havuz dışında omuz ve dizlerin kapalı olması önerilir.

      - Dubai'de para birimi nedir?
      Birleşik Arap Emirlikleri Dirhemi (AED) kullanılmaktadır.

      ### Bütçe Planlaması

      - Orta segment otel: 400-800 AED/gece
      - Lüks otel: 1000+ AED/gece
      - Yemek: 100-300 AED/kişi
      - Ulaşım: 50-100 AED/gün
      - Aktivite: 200-500 AED/kişi
    `,
    keywords: [
      'dubai tatil 2025',
      'dubai fiyatları',
      'dubai gezilecek yerler',
      'çöl safarisi',
      'burj khalifa',
      'dubai mall',
      'lüks tatil',
      'yurt dışı tur',
      'uae',
      'dubai vize',
      'dubai alışveriş',
      'dubai otel',
      'dubai konaklama',
      'dubai aktiviteler',
      'dubai çöl turu'
    ],
    metaDescription: '2025 Dubai tatil rehberi, Burj Khalifa, çöl safarisi, Dubai Mall ve şehrin en önemli turistik yerleri. Lüks oteller, alışveriş merkezleri, vize bilgileri ve fiyatlar hakkında detaylı bilgi. Unutulmaz bir Dubai deneyimi için kapsamlı rehber.'
  },
  {
    id: 3,
    title: 'Akdeniz\'in En Lüks Yat Kiralama Deneyimi: Özel Kaptanlı Yatlar ve Mavi Yolculuk',
    slug: 'akdenizin-en-luks-yat-kiralama-deneyimi',
    category: 'Yat Kiralama',
    excerpt: 'Akdeniz\'in masmavi sularında unutulmaz bir yat tatili deneyimi yaşayın. En lüks yatlar, profesyonel ekip ve özel hizmetlerle mükemmel bir deniz tatili sizi bekliyor. Özel kaptanlı yatlar, mavi yolculuk rotaları ve yat kiralama fiyatları hakkında detaylı bilgi.',
    content: `
      Akdeniz'in eşsiz koylarında, lüks bir yat ile unutulmaz bir tatil deneyimi yaşamak isteyenler için özel bir rehber hazırladık. 365Kirala olarak sunduğumuz yat kiralama hizmetleri ile hayalinizdeki deniz tatiline ulaşmanız artık çok kolay.

      ## Neden Özel Yat Kiralama?

      Özel bir yat kiralamak, size ve sevdiklerinize özel bir tatil deneyimi sunar. Kalabalık plajlardan uzak, kendi programınızı yapabileceğiniz, mahremiyetinizin korunduğu bir tatil için en ideal seçenektir.

      ### Yat Kiralama Avantajları

      - Tamamen özel ve mahrem bir tatil
      - Esnek seyahat programı
      - Profesyonel ekip hizmeti
      - Lüks ve konforlu konaklama
      - Özel koy ve plajlara erişim
      - Kişiselleştirilmiş hizmet

      ### Sunduğumuz Hizmetler

      - Profesyonel kaptan ve mürettebat
      - Özel şef ve gurme yemekler
      - Su sporları ekipmanları
      - Lüks iç mekan tasarımı
      - 24/7 concierge hizmeti
      - Özel etkinlik organizasyonu
      - Spa ve masaj hizmetleri
      - Karada VIP transfer hizmeti

      ## En Popüler Rotalar

       Göcek - Fethiye Koyları
         - 12 Adalar
         - Bedri Rahmi Koyu
         - Yassıca Adalar
         - Tersane Adası
         - Kızılada

       Bodrum - Yunan Adaları
         - Kos Adası
         - İstanköy
         - Karaada
         - Çatalada
         - Orak Adası

       Antalya - Kaş - Kekova
         - Kekova Adası
         - Batık Şehir
         - Üçağız Koyu
         - Simena Kalesi
         - Kaputaş Plajı

       Marmaris - Datça
         - Knidos Antik Kenti
         - Palamutbükü
         - Hayıtbükü
         - Kargı Koyu
         - Bencik Koyu

      ### Yat Seçenekleri

       Motor Yatlar
        - 20-30 metre arası
        - 6-12 kişilik kapasite
        - Lüks kabinler
        - Geniş güverteler

       Yelkenli Yatlar
        - 15-25 metre arası
        - 4-8 kişilik kapasite
        - Klasik tasarım
        - Rüzgar deneyimi

       Guletler
        - 25-35 metre arası
        - 8-16 kişilik kapasite
        - Geleneksel tasarım
        - Geniş güverte alanı

       Mega Yatlar
        - 35 metre üzeri
        - 12+ kişilik kapasite
        - Ultra lüks donanım
        - Özel ekipmanlar

      ## Rezervasyon ve Fiyatlandırma

      Yat kiralama fiyatları, seçtiğiniz yatın boyutu, sezonu ve kiralama süresine göre değişiklik gösterir. Size özel fiyat teklifi için müşteri temsilcilerimizle iletişime geçebilirsiniz.

      ### Yat Kiralama İçin En İyi Sezonlar

      - Yüksek Sezon (Temmuz-Ağustos): En yüksek fiyatlar
      - Orta Sezon (Haziran-Eylül): İdeal hava ve fiyat dengesi
      - Düşük Sezon (Mayıs-Ekim): Ekonomik fiyatlar
      - Kış Sezonu (Kasım-Nisan): Özel fırsatlar

      ### Dahil Olan Hizmetler

      - Profesyonel kaptan ve mürettebat
      - Yakıt (günlük belirli mesafe için)
      - KDV
      - Liman ücretleri
      - Temizlik hizmeti
      - Havlu ve nevresim takımları

      ## Sıkça Sorulan Sorular

      - Yat kiralama için ehliyet gerekli mi?
      Hayır, profesyonel kaptan ve mürettebat hizmetimiz mevcuttur.

      - Maksimum kaç kişi konaklayabilir?
      Yatın büyüklüğüne göre 4-16 kişi arası değişmektedir.

      - Yemek hizmeti nasıl?
      Özel şef hizmeti mevcuttur, menü tercihlerinize göre düzenlenir.

      - Su sporları ekipmanları dahil mi?
      Evet, temel su sporları ekipmanları yatta mevcuttur.

      - Hava durumu uygun değilse ne olur?
      Alternatif tarih veya iade seçenekleri sunulmaktadır.
    `,
    keywords: [
      'yat kiralama',
      'lüks yat',
      'akdeniz',
      'deniz tatili',
      'özel yat',
      'tekne kiralama',
      'mavi yolculuk',
      'göcek yat kiralama',
      'bodrum yat kiralama',
      'antalya yat kiralama',
      'marmaris yat kiralama',
      'özel kaptanlı yat',
      'yat turu',
      'yat fiyatları',
      'yat rezervasyon'
    ],
    metaDescription: 'Akdeniz\'in en lüks yat kiralama hizmetleri, özel kaptanlı yatlar, mavi yolculuk rotaları ve yat kiralama fiyatları hakkında detaylı bilgi. Göcek, Bodrum, Antalya ve Marmaris\'te unutulmaz bir deniz tatili için profesyonel yat kiralama hizmeti.'
  },
  {
    id: 4,
    title: 'Kapadokya\'nın En Güzel Bungalov Otelleri: Doğayla İç İçe Lüks Konaklama',
    slug: 'kapadokyanin-en-guzel-bungalov-otelleri',
    category: 'Bungalov',
    excerpt: 'Kapadokya\'nın eşsiz doğal güzellikleri arasında, lüks bungalov otellerde unutulmaz bir konaklama deneyimi yaşayın. Peribacaları manzaralı, özel havuzlu ve her detayı düşünülmüş bungalovlarda eşsiz bir tatil sizi bekliyor.',
    content: `
      Kapadokya'nın masalsı atmosferinde, doğayla iç içe ama lüksten ödün vermeden tatil yapmak isteyenler için en özel bungalov otellerini derledik. Peribacaları manzaralı, özel havuzlu ve her detayı düşünülmüş bungalovlarda unutulmaz bir konaklama deneyimi sizi bekliyor.

      ## Neden Kapadokya'da Bungalov Otel?

      Kapadokya'nın eşsiz doğal güzellikleri arasında, bungalov oteller size hem mahremiyet hem de lüks bir konaklama deneyimi sunar. Geleneksel otel konforuyla özel villa rahatlığını bir arada yaşayabilirsiniz.

      ### Bungalov Otellerin Avantajları

      - Özel ve mahrem bir konaklama deneyimi
      - Doğayla iç içe ama lüks bir tatil
      - Peribacaları manzarası
      - Kişiselleştirilmiş hizmet
      - Otel hizmetlerinden faydalanma imkanı

      ### Sunulan Hizmetler

      - Özel havuz seçenekleri
      - Peribacası manzarası
      - Şömineli odalar
      - Jakuzili süitler
      - 24 saat oda servisi
      - Özel şef hizmeti
      - Spa ve masaj hizmetleri
      - Tur ve aktivite organizasyonu

      ## En İyi Bungalov Oteller

       Taş Konak Bungalov Suites
         - Peribacaları manzaralı özel havuz
         - Şömineli lüks süitler
         - A la carte restoran
         - Spa merkezi

       Peribacası View Resort
         - Panoramik vadi manzarası
         - Özel teraslı bungalovlar
         - Açık büfe kahvaltı
         - Kapadokya manzaralı restoran

       Kapadokya Luxury Bungalows
         - Jakuzili süitler
         - Özel bahçeli bungalovlar
         - Türk hamamı
         - Şarap mahzeni

       Valley Cave Hotel & Bungalows
         - Mağara konseptli bungalovlar
         - Doğal havuz
         - Organik restoran
         - Yoga platformu

      ### Aktiviteler ve Deneyimler

      - Balon turu (gün doğumu)
      - ATV safari
      - Şarap tadımı
      - At binme
      - Vadi yürüyüşleri
      - Türk hamamı deneyimi
      - Çömlek yapım atölyesi
      - Yerel lezzetler workshop'u

      ## Rezervasyon ve Fiyatlandırma

      Bungalov otel fiyatları sezona ve oda tipine göre değişiklik gösterir. Erken rezervasyon avantajlarından yararlanmak için hemen bizimle iletişime geçin.

      ### Kapadokya Bungalov İçin En İyi Sezon

      - İlkbahar (Nisan-Mayıs): Ilıman hava ve çiçek açan doğa
      - Sonbahar (Eylül-Ekim): Renkli manzaralar ve ideal sıcaklık
      - Yaz (Haziran-Ağustos): Sıcak hava ve canlı atmosfer
      - Kış (Aralık-Şubat): Kar manzaralı romantik atmosfer

      ### Ulaşım Bilgileri

      - Nevşehir Havalimanı'na 40 dakika
      - Kayseri Havalimanı'na 1 saat
      - Ücretsiz havalimanı transferi
      - Özel araç kiralama hizmeti

      ## Sıkça Sorulan Sorular

      - Bungalov oteller çocuklar için uygun mu?
      Evet, çoğu bungalov otel aile dostu hizmetler sunmaktadır.

      - En iyi manzaralı bungalov hangisi?
      Peribacası View Resort ve Taş Konak Bungalov Suites en iyi manzaraya sahiptir.

      - Balon turu için otelden transfer var mı?
      Evet, tüm oteller balon turu için transfer hizmeti sunmaktadır.

      - Bungalovlarda internet erişimi var mı?
      Evet, tüm bungalovlarda ücretsiz Wi-Fi hizmeti mevcuttur.
    `,
    keywords: [
      'bungalov otel',
      'kapadokya',
      'lüks konaklama',
      'peribacaları',
      'özel havuzlu otel',
      'taş otel',
      'mağara otel',
      'kapadokya bungalov',
      'kapadokya konaklama',
      'kapadokya otel',
      'kapadokya tatil',
      'kapadokya balon turu',
      'kapadokya aktiviteler',
      'kapadokya rezervasyon'
    ],
    metaDescription: 'Kapadokya\'nın en lüks bungalov otelleri, peribacaları manzaralı özel havuzlu odalar, şömineli süitler ve eşsiz konaklama deneyimi. Balon turu, ATV safari ve şarap tadımı aktiviteleriyle unutulmaz bir tatil için detaylı rehber.'
  },
  {
    id: 5,
    title: 'Özel Jet Kiralama Rehberi: VIP Uçuş Deneyimi ve Lüks Seyahat',
    slug: 'ozel-jet-kiralama-rehberi',
    category: 'Özel Jet',
    excerpt: 'Özel jet kiralama hakkında merak ettiğiniz her şey: fiyatlar, jet modelleri, rezervasyon süreci ve VIP hizmetler. Lüks ve konforlu seyahat deneyimi için kapsamlı rehber. İş ve tatil seyahatlerinizde maksimum konfor ve zaman tasarrufu.',
    content: `
      Özel jet kiralama, iş veya tatil seyahatlerinizde maksimum konfor ve zaman tasarrufu sağlar. Bu rehberde, özel jet kiralama sürecinden fiyatlara, jet modellerinden VIP hizmetlere kadar tüm detayları bulabilirsiniz.

      ## Neden Özel Jet ile Seyahat?

      Özel jet ile seyahat, size esnek uçuş programı, özel terminal kullanımı ve kişiselleştirilmiş hizmet avantajları sunar. Zaman tasarrufu, mahremiyet ve lüks bir seyahat deneyimi için ideal bir seçenektir.

      ### Özel Jet Avantajları

      - Esnek uçuş programı
      - Özel terminal kullanımı
      - Hızlı check-in ve check-out
      - Mahremiyet ve konfor
      - Kişiselleştirilmiş hizmet
      - Zaman tasarrufu
      - VIP transfer hizmeti

      ### Sunduğumuz Hizmetler

      - 7/24 uçuş planlama
      - Özel terminal ve VIP salon kullanımı
      - Kişiselleştirilmiş ikram menüsü
      - Lüks araç transfer hizmeti
      - Özel kabin ekibi
      - Bagaj önceliği
      - Özel catering hizmeti
      - Uçuş sonrası concierge hizmeti

      ## Jet Modelleri ve Özellikleri

       Light Jets (4-6 yolcu)
         - Bombardier Learjet 45
         - Cessna Citation CJ3
         - Embraer Phenom 300
         - 2-3 saat uçuş menzili
         - Ekonomik seçenek

       Midsize Jets (6-8 yolcu)
         - Cessna Citation XLS
         - Hawker 800XP
         - 4-5 saat uçuş menzili
         - Orta mesafe uçuşlar

       Super Midsize Jets (8-10 yolcu)
         - Gulfstream G280
         - Bombardier Challenger 300
         - 5-6 saat uçuş menzili
         - Uzun mesafe konforu

       Heavy Jets (10-16 yolcu)
         - Gulfstream G650
         - Bombardier Global 6000
         - 7+ saat uçuş menzili
         - Ultra lüks seçenek

      ### Popüler Rotalar ve Uçuş Süreleri

      - İstanbul - Londra (4 saat)
      - İstanbul - Dubai (3.5 saat)
      - İstanbul - Paris (3.5 saat)
      - Ankara - İstanbul (1 saat)
      - İzmir - Antalya (1 saat)
      - İstanbul - New York (10 saat)
      - İstanbul - Moskova (2.5 saat)

      ## Rezervasyon Süreci ve Fiyatlandırma

      Özel jet kiralama fiyatları, uçuş mesafesi, jet modeli ve yolcu sayısına göre belirlenir. Size özel fiyat teklifi için hemen bizimle iletişime geçin.

      ### Fiyatlandırma Kriterleri

      - Uçuş mesafesi
      - Jet modeli
      - Yolcu sayısı
      - Uçuş süresi
      - Bekleme süresi
      - Yakıt maliyeti
      - Havaalanı ücretleri

      ### Dahil Olan Hizmetler

      - Profesyonel pilot ekibi
      - Özel terminal kullanımı
      - Temel ikramlar
      - Bagaj hizmeti
      - Uçuş planlaması
      - 7/24 destek

      ## Sıkça Sorulan Sorular

      - Özel jet kiralama için ne kadar süre önceden rezervasyon yapmalıyım?
      En az 24-48 saat önceden rezervasyon yapmanızı öneririz.

      - Kaç kişiye kadar yolcu alabilir?
      Jet modeline göre 4-16 kişi arası değişmektedir.

      - Pets ile seyahat edebilir miyim?
      Evet, özel jetlerde pets ile seyahat mümkündür.

      - Özel yemek servisi
      Evet, tercihlerinize göre özel menü hazırlanabilir.

      - Uçuş iptali durumunda ne olur?
      İptal politikaları jet modeline ve rezervasyon zamanına göre değişir.

      ### Güvenlik ve Sertifikasyonlar

      - EASA onaylı operasyonlar
      - IS-BAO sertifikası
      - ARGUS Gold rating
      - Wyvern rating
      - Düzenli bakım kontrolleri
      - Deneyimli pilot kadrosu
    `,
    keywords: [
      'özel jet',
      'jet kiralama',
      'vip uçuş',
      'business jet',
      'lüks seyahat',
      'özel uçak',
      'jet charter',
      'istanbul özel jet',
      'ankara özel jet',
      'izmir özel jet',
      'özel jet fiyatları',
      'özel jet rezervasyon',
      'özel jet modelleri',
      'vip transfer',
      'özel terminal'
    ],
    metaDescription: 'Özel jet kiralama hizmetleri, jet modelleri, fiyatlar ve VIP hizmetler hakkında kapsamlı bilgi. İş ve tatil seyahatlerinizde maksimum konfor ve zaman tasarrufu için özel jet rehberi. İstanbul, Ankara ve İzmir\'den tüm dünyaya özel jet hizmeti.'
  },
  
  {
    id: 7,
    title: 'Kapadokya Balon Turu: Güneşin Doğuşunu Gökyüzünden İzleyin',
    slug: 'kapadokya-balon-turu',
    category: 'Yurt İçi Turlar',
    excerpt: 'Kapadokya\'nın büyüleyici manzarasını sıcak hava balonu ile gökyüzünden seyredin. Peribacalarının arasından süzülen balonlarla, gökyüzünde huzur dolu bir yolculuğa çıkın.',
    content: `
      Kapadokya'nın büyüleyici manzarasını sıcak hava balonu ile gökyüzünden seyretmeye hazır mısınız? Peribacalarının arasından süzülen balonlarla, gökyüzünde huzur dolu bir yolculuğa çıkın. Bu rehberimizde, Kapadokya balon turu deneyimini en iyi şekilde yaşamanız için ihtiyacınız olan her bilgiyi bulabilirsiniz.

      ## Balon Turu Nedir?

      Kapadokya balon turu, sıcak hava balonlarıyla sabahın ilk ışıklarında gökyüzüne yükselerek bölgenin eşsiz jeolojik oluşumlarını ve gün doğumunu havadan izleme fırsatı sunar. Balonların gölgeleri vadi boyunca süzülürken, altınızda uzanan peribacaları ve volkanik kayaların büyüsüne kapılırsınız.

      ## Tur Süresi ve Programı

      ### Sabah Programı
      - Otelden alınış: 04:30 - 05:30
      - Kısa bilgilendirme ve hazırlık
      - Uçuş süresi: 60 dakika
      - İniş sonrası şampanya ikramı
      - Katılım sertifikası
      - Otellere dönüş: 07:30 - 08:30

      ### Özel Deneyimler
      - Gün doğumunda uçuş
      - Panoramik manzara
      - Fotoğraf fırsatları
      - Profesyonel pilot eşliğinde
      - Güvenli iniş

      ## Güvenlik Önlemleri

      ### Profesyonel Ekip
      - Lisanslı pilotlar
      - Deneyimli ekip
      - Modern ekipmanlar
      - Düzenli bakım
      - Acil durum prosedürleri

      ### Hava Koşulları
      - Meteorolojik kontrol
      - Güvenli uçuş şartları
      - Alternatif planlar
      - İptal politikası
      - Sigorta kapsamı

      ## Rezervasyon İpuçları

      ### Zamanlama
      - Yüksek sezon: 2-3 hafta önceden
      - Düşük sezon: 1 hafta önceden
      - Erken rezervasyon indirimi
      - Grup indirimleri
      - Özel tur seçenekleri

      ### Fiyatlandırma
      | Sezon | Kişi Sayısı | Fiyat Aralığı |
      | Düşük (Kasım-Mart) | Tek Kişi | 3.000 - 3.800₺ |
      | Yüksek (Nisan-Ekim) | Tek Kişi | 4.500 - 6.500₺ |
      | Tüm Sezon | Grup (6+) | %10-20 İndirimli |
      | Özel Tur | 2-4 Kişi | 25.000 - 40.000₺ |

      ## Fotoğraf Fırsatları

      ### En İyi Kareler
      - Göreme Vadisi üzerinde gün doğumu
      - Balon kalkış hazırlıkları
      - Panoramik manzara
      - Peribacaları silüetleri
      - Grup fotoğrafları

      ### Öneriler
      - Erken saatte hazır olun
      - Fotoğraf makinesi getirin
      - Batarya kontrolü yapın
      - Hafıza kartı alın
      - Tripod kullanın

      ## Sık Sorulan Sorular

      - Çocuklar için uygun mu?
      5 yaşından büyük çocuklar için uygundur. Daha küçük yaş gruplarının katılımına izin verilmez.

      - Ne giymeliyim?
      Sabah erken saatlerde serin olabileceği için mevsime uygun kalınlıkta, rahat ayakkabılar ve sıcak tutan giysiler önerilir.

      - Uçuş yüksekliği nedir?
      Balonlar 500 ila 1.500 metreye kadar çıkabilir. Güvenlik ve hava koşullarına göre değişir.

      - İptal durumunda ne olur?
      Hava koşullarına bağlı iptallerde ücret iadesi yapılır veya başka bir güne ertelenir.

      - Transfer dahil mi?
      Evet, otel transferi fiyata dahildir.

      ## Balon Turu Sonrası Aktiviteler

      ### Kültürel Geziler
      - Göreme Açık Hava Müzesi
      - Ürgüp şarap tadımı
      - Avanos çömlek atölyeleri
      - Ihlara Vadisi yürüyüşü
      - Yeraltı şehirleri

      ### Doğa Aktiviteleri
      - ATV safari
      - At turu
      - Yürüyüş parkurları
      - Bisiklet turu
      - Fotoğraf turu

      ### Öneriler ve İpuçları

      - Erken rezervasyon yapın
      - Hava durumunu kontrol edin
      - Uygun kıyafet seçin
      - Fotoğraf ekipmanı hazırlayın
      - Rehber eşliğinde gezin
      - Yerel lezzetleri deneyin
      - Aktiviteleri planlayın
      - Seyahat sigortası yaptırın
    `,
    keywords: [
      'kapadokya balon turu',
      'gün doğumu balon',
      'kapadokya gezilecek yerler',
      'balonla uçmak',
      'balon turu fiyatları',
      'sıcak hava balonu',
      'kapadokya sabah turu',
      'unforgettable experience',
      'peribacaları',
      'göreme vadisi'
    ],
    metaDescription: 'Kapadokya\'nın büyüleyici manzarasını sıcak hava balonu ile gökyüzünden seyredin. Peribacalarının arasından süzülen balonlarla, gökyüzünde huzur dolu bir yolculuğa çıkın. Balon turu fiyatları, rezervasyon ve güvenlik bilgileri.'
  },
    {
      id: 8,
      title: "Efes Antik Kenti Turu: UNESCO Dünya Mirası Listesi'nde Tarihi Bir Yolculuk",
      slug: 'efes-antik-kenti-turu-rehberi',
      category: 'Yurt İçi Turlar',
      excerpt: 'Antik dünyanın en görkemli şehirlerinden biri olan Efes\'i keşfetmek için kapsamlı bir rehber. Celsus Kütüphanesi, Artemis Tapınağı ve daha fazlası sizi bekliyor. UNESCO Dünya Mirası Listesi\'nde yer alan bu eşsiz antik kentte unutulmaz bir tarih turu.',
      content: `
    Efes Antik Kenti, yalnızca Türkiye'nin değil, dünyanın en önemli arkeolojik alanlarından biridir. İzmir'in Selçuk ilçesinde yer alan bu antik şehir, zengin tarihi dokusu, kusursuz mimarisi ve dini önemiyle her yıl binlerce yerli ve yabancı turisti ağırlıyor. Efes; Roma, Bizans ve Helenistik dönemlere ait izler taşıyan, tarih meraklıları için adeta bir açık hava müzesi niteliğindedir.
    
    ## Efes Antik Kenti'nde Mutlaka Görülmesi Gereken Yerler
    
    ### Celsus Kütüphanesi
    - MS 135 yılında inşa edilen kütüphane, Roma döneminin en ihtişamlı yapılarındandır.
    - Yaklaşık 12.000 tomar kitabı barındırdığı düşünülür.
    - Göz alıcı iki katlı cephesi ve kadın erdemlerini simgeleyen heykellerle dikkat çeker.
    - Fotoğraf çekimi için en popüler noktadır.
    
    ### Büyük Tiyatro
    - 24.000 kişi kapasiteli devasa tiyatro, antik çağlarda gladyatör dövüşleri ve konserlere ev sahipliği yapmıştır.
    - Hâlâ günümüzde etkinlikler için kullanılmaktadır.
    - Akustiğiyle ün kazanmıştır.
    
    ### Artemis Tapınağı
    - Antik dünyanın yedi harikasından biri olarak kabul edilen bu yapı, ne yazık ki günümüzde sadece kalıntılarıyla görülebilir.
    - Bir zamanlar 127 mermer sütunla çevrili olan tapınak, tanrıça Artemis'e adanmıştır.
    - Efes'in dini ve kültürel merkezidir.
    
    ### Diğer Önemli Yapılar
    - Hadrian Tapınağı: Roma imparatoru Hadrian'a ithafen yapılmıştır.
    - Mermer Cadde: Antik Efes'in ana yürüyüş yolu.
    - Trajan Çeşmesi, Odeon, Domitian Tapınağı, St. Jean Bazilikası gibi yapılar da detaylı incelenmeye değerdir.
    
    ## Efes Turu Programı
    
    ### Sabah
    - Selçuk'tan otobüs veya özel araçla transfer.
    - Profesyonel rehber eşliğinde Magnesia Kapısı'ndan başlayarak antik kent gezisi.
    - Celsus Kütüphanesi ve çevresindeki yapılar.
    
    ### Öğle
    - Serbest zaman: Yerel lezzetlerin tadımı, hediyelik alışveriş ve fotoğraf molası.
    - Yakın restoranlarda opsiyonel öğle yemeği.
    
    ### Öğleden Sonra
    - Büyük Tiyatro, Artemis Tapınağı ve diğer yapılar gezilir.
    - Dönüş transferi.
    
    ## Efes Antik Kenti Turu Dahil Olanlar
    
    ### Temel Hizmetler
    - Rehberlik hizmeti
    - Müze giriş bileti
    - Gidiş-dönüş transfer
    - Seyahat sigortası
    - Rehberli Efes haritası
    
    ### Opsiyonel Hizmetler
    - Öğle yemeği
    - Sesli anlatım cihazı
    - Profesyonel fotoğraf çekimi
    - Kişiye özel rehber
    - Anı eşyaları ve hediyelikler
    
    ## Efes Antik Kenti'ni Ziyaret Etmek İçin En Uygun Zaman
    
    ### İlkbahar (Mart-Mayıs)
    - Serin hava ve doğanın canlandığı dönemdir.
    - Kalabalıklar henüz başlamadığı için rahat bir gezinti sağlar.
    
    ### Sonbahar (Eylül-Kasım)
    - Sıcaklık idealdir, fotoğrafçılar için mükemmel ışık sunar.
    - Yaz yoğunluğu sona ermiştir.
    
    ### Yaz (Haziran-Ağustos)
    - Sıcaklık oldukça yüksektir, erken saatlerde ziyaret önerilir.
    - Gölgelik ve su getirmek önemlidir.
    
    ### Kış (Aralık-Şubat)
    - Az turist bulunur, sakinlik isteyenler için uygundur.
    - Ziyaret süresince yağmura karşı önlem almak gerekir.
    
    ## Pratik Bilgiler
    
    ### Ulaşım
    - İzmir'den otobüs veya trenle 1-1.5 saatte Selçuk'a ulaşabilirsiniz.
    - Selçuk merkezinden minibüs veya taksi ile 10 dakikada antik kente varabilirsiniz.
    - Otopark alanı özel araçla gelenler için mevcuttur.
    
    ### Giriş Ücretleri
    - Yetişkin: 200 TL
    - Öğrenci: 100 TL
    - Müze Kart: Ücretsiz
    - Rehberli tur ücreti: 300-500 TL
    
    ### Ziyaret Saatleri
    - Yaz dönemi: 08:00 – 19:00
    - Kış dönemi: 08:00 – 17:00
    - Her gün açık, resmi tatillerde de ziyaret edilebilir.
    
    ## Sıkça Sorulan Sorular
    
    - Efes ziyareti için ne kadar süre ayırmalıyım?
    Ortalama 3-4 saat yeterli olsa da, fotoğraf çekmek ve detaylı gezmek isterseniz 6-7 saati gözden çıkarmalısınız.
    
    - Rehberli tur almak zorunlu mu?  
    Değil ancak Efes'in tarihi katmanlarını ve hikâyelerini öğrenmek için şiddetle önerilir.
    
    - Çocuklarla gezilebilir mi?  
    Evet. Ancak puset kullanımında zemin yapısı nedeniyle zorluk yaşanabilir.
    
    -Engelli erişimi var mı?
    Kısıtlı erişim mevcuttur, bazı bölümler rampa veya düz zemin sunmaz.
    
    - Fotoğraf çekimi serbest mi?
    Evet, amatör çekimler serbesttir. Profesyonel ekipmanla çekim için izin gerekebilir.
    
    ## Gezi İçin İpuçları ve Öneriler
    
    - Güne erken başlayın, öğlen sıcağından kaçının.
    - Güneş kremi, şapka ve bol su getirin.
    - Rahat yürüyüş ayakkabıları giyin.
    - Müze Kart sahibi olun, avantaj sağlar.
    - Rehberle gezerek tarihi yapıları derinlemesine öğrenin.
    - Celsus Kütüphanesi'nde gün batımı fotoğrafı çekin.
    - Çıkışta yerel ürünlerden oluşan bir hatıra alışverişi yapın.
    `,
      keywords: [
        'efes antik kenti',
        'celsus kütüphanesi',
        'efes turu',
        'antik kentler',
        'arkeoloji turu',
        'izmir tarihi yerler',
        'efes giriş ücretleri',
        'efes rehberli tur',
        'efes gezilecek yerler',
        'efes antik tiyatro',
        'efes artemis tapınağı',
        'efes mermer cadde',
        'efes hadrian tapınağı',
        'efes ziyaret saatleri',
        'efes ulaşım'
      ],
      metaDescription: 'Efes Antik Kenti turu hakkında detaylı bilgiler: Celsus Kütüphanesi, Artemis Tapınağı, Büyük Tiyatro ve diğer yapılar. Giriş ücretleri, ziyaret saatleri, ulaşım ve rehberli tur seçenekleriyle unutulmaz bir arkeoloji deneyimi sizi bekliyor.'
    },
      {
        id: 9,
        title: "Perge Aspendos Side Turu: Antik Kalıntılar Arasında Bir Gün",
        slug: "perge-aspendos-side-turu",
        category: "Yurt İçi Turlar",
        excerpt: "Antalya'nın üç önemli antik kentini tek bir turda keşfedin. Perge'nin tarihi sokaklarında yürüyün, Aspendos Tiyatrosu'nda tarihe tanıklık edin, Side'de gün batımını izleyin.",
        content: `
      Antalya'nın tarih dolu topraklarında eşsiz bir kültürel yolculuğa çıkmaya hazır mısınız? Perge, Aspendos ve Side, Roma ve Hellenistik dönemlerin mimari ve sosyal hayatını bugüne taşıyan üç benzersiz antik kenttir. Bu özel günlük tur, tarih meraklıları ve fotoğraf tutkunları için kaçırılmayacak bir fırsat sunar.
      
      ## Perge Antik Kenti
      
      Antalya'nın Aksu ilçesinde bulunan Perge, Roma döneminin en iyi planlanmış şehirlerinden biridir. MÖ 2. yüzyıldan kalma yapılar, geniş sütunlu caddeler, agora, hamamlar ve stadyum ile tarihî bir atmosfer sunar.
      
      - Roma Hamamları: Dönemin sosyal yaşamını yansıtan yapılar.
      - Agora (Pazar Yeri): Şehrin ticari merkezi.
      - Tiyatro ve Stadyum: Yaklaşık 12.000 kişi kapasiteli etkileyici yapılar.
      - Sütunlu Cadde: Şehrin ana yürüyüş yolu.
      
      ## Aspendos Antik Tiyatrosu
      
      Serik ilçesinde yer alan Aspendos Tiyatrosu, Roma mimarisinin başyapıtlarından biridir. MS 2. yüzyılda inşa edilen yapı, 15.000 kişi kapasitesi ve olağanüstü akustiğiyle dikkat çeker.
      
      - Mükemmel Akustik: Sahnedeki fısıltı, en üst sıradan duyulabilir.
      - Günümüzde de aktif: Konserler, gösteriler ve festivaller düzenlenmektedir.
      - Korunmuşluk Derecesi: Türkiye'deki en sağlam antik tiyatro örneğidir.
      
      ## Side Antik Kenti
      
      Manavgat sınırlarında bulunan Side, denizle tarihin iç içe geçtiği bir kenttir. Apollon ve Athena Tapınakları, antik liman ve agora ile Side, hem kültürel hem görsel bir şölen sunar.
      
      - Apollon Tapınağı: Gün batımında fotoğraf için en popüler nokta.
      - Antik Liman: Zamanın ticaret merkezi.
      - Müze: Roma dönemine ait heykeller ve eserler sergilenir.
      - Sahildeki Kalıntılar: Denizle iç içe tarihi bir atmosfer sunar.
      
      ## Tur Programı
      
      ### Sabah
      - Antalya şehir merkezinden otobüs ile hareket
      - Perge Antik Kenti gezisi (yaklaşık 1.5 saat)
      
      ### Öğle
      - Aspendos Tiyatrosu ziyareti
      - Yakın restoranda öğle yemeği
      
      ### Öğleden Sonra
      - Side Antik Kenti gezisi
      - Serbest zaman ve fotoğraf molası
      - Antalya'ya dönüş
      
      ## Tura Dahil Olanlar
      
      - Profesyonel rehberlik hizmeti
      - Tüm ulaşım ve transferler
      - Öğle yemeği (menü dahil)
      - Antik kentlere giriş biletleri
      - Seyahat sigortası
      - Tur bilgilendirme broşürü
      
      ## En Uygun Ziyaret Dönemi
      
      - İlkbahar (Mart - Mayıs): Ilıman hava, doğa ile iç içe bir ortam.
      - Sonbahar (Eylül - Kasım): Sıcaklığın düştüğü ve kalabalıkların azaldığı ideal zaman.
      - Yaz (Haziran - Ağustos): Sıcak havaya dikkat edilmeli, şapka ve su olmazsa olmaz.
      - Kış (Aralık - Şubat): Daha az ziyaretçi, daha sessiz bir deneyim.
      
      ## Sıkça Sorulan Sorular
      
      Giriş ücretleri nedir? 
      Tura dahil olarak sunulur ancak bireysel ziyaretlerde her alan için ayrı ücret alınır. Müze Kart geçerlidir.
      
      Bu tur hangi yaş grubu için uygundur? 
      Her yaştan katılımcı için uygundur. Yürüyüş ağırlıklı olduğu için çocuklar ve yaşlılar için hafif tempoda ilerlenir.
      
      Fotoğraf için en iyi nokta neresi? 
      - Aspendos sahne arkası ve en üst sıradan çekilen kareler.
      - Side'de Apollon Tapınağı gün batımı sırasında en etkileyici fotoğrafları verir.
      - Perge'de sütunlu cadde ve stadyum alanı.
      
      Yanıma ne almalıyım? 
      - Rahat yürüyüş ayakkabısı
      - Su matarası
      - Güneş gözlüğü, krem ve şapka
      - Fotoğraf makinesi
      
      Tur kaç saat sürer? 
      Yaklaşık 8-9 saat süren tam günlük bir programdır.
      
      ## Öneriler ve İpuçları
      
      - Tura sabah erken saatte katılın, böylece kalabalıklar başlamadan gezebilirsiniz.
      - Rehberin anlattığı tarihi bilgiler için sesli not alabilirsiniz.
      - Tüm alanlar açık hava müzesi olduğu için rahat kıyafetler tercih edin.
      - Öğle yemeği sonrası dinlenmek için serbest zaman iyi değerlendirilmelidir.
      - Müze Kart'ınız varsa getirin, diğer gezilerde de avantaj sağlar.
        `,
        keywords: [
          'perge turu',
          'aspendos tiyatrosu',
          'side antik kenti',
          'antalya tarihi yerler',
          'antik tiyatro',
          'antalya kültür turları',
          'perge aspendos side turu',
          'antalya günübirlik turlar',
          'roma tiyatrosu',
          'apollon tapınağı side',
          'aspendos konserleri'
        ],
        metaDescription: 'Antalya çıkışlı Perge Aspendos Side turu: Antik tiyatrolar, Apollon Tapınağı ve Roma dönemi kalıntılarını keşfedin. Rehberli tur programı, ulaşım, giriş ücretleri ve ziyaret önerileriyle kültür dolu bir gün sizi bekliyor.'
      },
      {
        id: 11,
        title: "Dalyan & İztuzu Plajı Turu: Doğayla Tarihin Buluştuğu Eşsiz Rota",
        slug: "dalyan-iztuzu-plaji-turu",
        category: "Yurt İçi Turlar",
        excerpt: "Caretta carettalarla tanınan İztuzu Plajı ve tarihi Kaya Mezarları ile Dalyan turu, hem doğa hem kültür tutkunlarını cezbediyor.",
        content: `
      Muğla'nın Ortaca ilçesine bağlı Dalyan, doğanın ve tarihin iç içe geçtiği eşsiz bir rotadır. Labirent gibi uzanan su kanalları, Kaunos Antik Kenti'nin kaya mezarları, sağlık vadeden çamur banyoları ve caretta carettaların yuvası olan İztuzu Plajı ile Dalyan turu, hem dinlendirici hem öğretici bir deneyim sunar.
      
      ## Turda Neler Var?
      
      - Dalyan Kanalı'nda Tekne Turu: Sazlıklar arasında, kartpostallık manzaralar eşliğinde yapılan tekne turu.
      - Kaunos Antik Kenti & Kaya Mezarları: Yamaçlara oyulmuş kral mezarları ve antik şehir kalıntıları.
      - Çamur Banyosu ve Termal Kaplıca: Cildi arındıran ve yenileyen çamur banyosu, ardından sıcak su keyfi.
      - İztuzu Plajı'nda Yüzme: Tatlı suyla tuzlu suyun birleştiği özel ekosistem, caretta caretta yuvaları ve ince kumlu sahil.
      
      ## İztuzu Plajı Neden Bu Kadar Özel?
      
      İztuzu Plajı, dünyanın en önemli deniz kaplumbağası üreme alanlarından biridir. 4,5 km uzunluğundaki bu plajda, her yıl yaz aylarında caretta carettalar yumurtalarını bırakır. Aynı zamanda plajın bir tarafı tatlı su (Dalyan Kanalı), diğer tarafı tuzlu su (Akdeniz) ile çevrilidir — bu özellik onu benzersiz kılar.
      
      ## Dalyan Hakkında Kısa Bilgiler
      
      - Bölge: Muğla - Ortaca
      - Kaunos Antik Kenti: MÖ 10. yüzyıla kadar uzanan tarihi ile önemli bir liman kenti.
      - Kaya Mezarları: Antik dönemde kraliyet üyeleri için yapılmış mezar yapıları.
      - Delta Alanı: Kuş gözlemciliği ve doğa fotoğrafçılığı için mükemmeldir.
      - Kaplıca Çamuru: Kükürtlü yapısı ile cilt rahatsızlıklarına iyi
      
      ## Tur Programı (Günübirlik)
      
      ### Sabah
      - Otobüs ile otelden/şehir merkezinden hareket
      - Dalyan Tekne İskelesine varış
      - Tekne ile kaya mezarları turu
      
      ### Öğle
      - Çamur banyosu ve kaplıca molası
      - Öğle yemeği (genellikle teknede veya nehir kenarında)
      
      ### Öğleden Sonra
      - Tekneyle İztuzu Plajı'na geçiş
      - Serbest zaman, yüzme ve fotoğraf molası
      - Dalyan'a dönüş ve otobüsle şehir merkezine varış
      
      ## Tura Dahil Olanlar
      
      - Gidiş-dönüş ulaşım
      - Profesyonel rehberlik hizmeti
      - Dalyan tekne turu
      - Kaya mezarları ve Kaunos bölgesi gezisi
      - Çamur banyosu giriş ücreti
      - Öğle yemeği
      - Seyahat sigortası
      
      ## Sıkça Sorulan Sorular
      
      Dalyan turu kaç saat sürer?  
      Sabah 09:00'da başlayan tur genellikle 17:30-18:00 gibi tamamlanır. Günübirlik bir turdur.
      
      İztuzu Plajı'na teknelerle mi gidiliyor?  
      Evet, Dalyan kanalından yapılan yaklaşık 30-40 dakikalık bir tekne yolculuğu ile plaja ulaşılıyor.
      
      Caretta carettaları görmek mümkün mü?  
      Yumurtlama dönemi olan Mayıs - Ağustos aylarında şanslıysanız deniz kaplumbağalarını görebilirsiniz.
      
      Çocuklar için uygun mu?  
      Evet, doğa ve deniz ile iç içe olan bu tur çocuklu aileler için oldukça uygundur. Ancak küçük çocuklar için can yeleği temin edilmelidir.
      
      Çamur banyosu ücretli mi?  
      Tur fiyatına dahildir, ayrıca ödeme yapmanız gerekmez.
      
      Yanıma ne almalıyım?  
      - Mayo ve havlu  
      - Terlik/sandalet  
      - Güneş kremi, şapka ve gözlük  
      - Yedek kıyafet  
      - Telefon/kamera için su geçirmez koruma
      
      ## Ziyaret İçin En Uygun Mevsim
      
      - İlkbahar (Nisan - Haziran): Havanın en ılıman ve doğanın en canlı olduğu dönem.
      - Yaz (Temmuz - Eylül): Deniz keyfi için ideal fakat sıcaklık yüksektir, önlem alınmalıdır.
      - Sonbahar (Eylül - Ekim): Sakin ve daha az kalabalık, huzurlu zamanlar.
      
      Dalyan & İztuzu Plajı turu, doğayla baş başa kalmak, eşsiz fotoğraflar çekmek, tarihi yerleri gezmek ve deniz keyfi yaşamak isteyen herkes için mükemmel bir seçenektir.
        `,
        keywords: [
          'dalyan turu',
          'iztuzu plajı',
          'caretta caretta',
          'kaya mezarları',
          'çamur banyosu',
          'muğla günübirlik tur',
          'kaunos antik kenti',
          'dalyan tekne turu',
          'kaplumbağa plajı',
          'muğla doğa turları'
        ],
        metaDescription: 'Dalyan & İztuzu Plajı turu ile caretta carettaların yuvası İztuzu sahilinde yüzün, Dalyan Kanalı\'nda tekneyle gezinin, çamur banyosuyla yenilenin. Günübirlik tur programı, tarihi ve doğal güzellikleri keşfetmek isteyenlere özel hazırlandı.'
      },  
      {
        id: 12,
        title: "Saklıkent Kanyonu & Tlos Antik Kenti Turu: Doğa ve Tarihin Buluştuğu Eşsiz Deneyim",
        slug: "saklikent-tlos-kanyonu-turu",
        category: "Yurt İçi Turlar",
        excerpt: "Saklıkent Kanyonu'nda serin sularla doğa yürüyüşü, ardından Tlos Antik Kenti'nde tarihi keşif. Muğla'nın eşsiz doğal güzellikleri ve antik kalıntılarıyla unutulmaz bir günlük tur deneyimi.",
        content: `
      Muğla'nın Fethiye ilçesinde yer alan **Saklıkent Kanyonu ve Tlos Antik Kenti turu**, doğa ile tarihin harmanlandığı nadir deneyimlerden biridir. Hem fiziksel aktivite hem de kültürel bir keşif sunan bu günübirlik tur, yaz sıcaklarından kaçmak ve aynı zamanda tarih dolu bir yolculuğa çıkmak isteyenler için birebirdir.
      
      ## Saklıkent Kanyonu: Türkiye'nin En Uzun Kanyonu
      
      ### Kanyon Özellikleri
      - Uzunluk: 18 kilometre
      - Derinlik: 300 metre
      - Genişlik: 2-3 metre
      - Su sıcaklığı: 5-10°C (serinletici)
      - Kalkerli yapısı ile doğal oluşumlu duvarlar ve mağaralar
      
      ### Neler Yapabilirsiniz?
      - Rehber eşliğinde güvenli doğa yürüyüşü
      - Kanyonda su içinde yürüyüş (özel su geçirmez ayakkabılar önerilir)
      - Doğal havuzlarda serinleme
      - Fotoğraf çekim molaları
      - Ahşap platformlarda yürüyüş ve manzara keyfi
      
      ## Tlos Antik Kenti: Likya'nın En Eski Yerleşimlerinden
      
      Tlos, hem Likya hem de Roma dönemine ait izler taşıyan nadide bir antik kenttir. Akropol tepesine kurulmuş olan kent, tarihi zenginliği ve doğa ile uyumu ile ziyaretçileri büyüler.
      
      ### Görülmesi Gereken Yapılar
      - Kaya mezarları ve anıtsal lahitler
      - Roma dönemi tiyatro ve stadyum
      - Agora ve hamam kalıntıları
      - Akropol'den Fethiye ovasına manzara
      
      ## Tur Programı
      
      ### Sabah
      - Fethiye'den hareket
      - Saklıkent'e varış ve kanyon girişinde bilgilendirme
      - Rehber eşliğinde doğa yürüyüşü
      - Serin sularda mola ve doğal havuzlarda serbest zaman
      
      ### Öğle
      - Nehir kenarındaki restoranlarda yöresel öğle yemeği
      - Alışveriş ve dinlenme molası
      - Doğa fotoğrafçılığı için zaman
      
      ### Öğleden Sonra
      - Tlos Antik Kenti'ne geçiş
      - Rehberli kültürel yürüyüş
      - Akropol, tiyatro, kaya mezarları gezisi
      - Fethiye'ye dönüş
      
      ## Tura Dahil Olanlar
      
      ### Temel Hizmetler
      - Otelden çift yön transfer
      - Profesyonel rehberlik hizmeti
      - Saklıkent ve Tlos giriş ücretleri
      - Seyahat sigortası
      - Bilgilendirme kitapçığı / tur haritası
      
      ### Ekstra Hizmetler (opsiyonel)
      - Öğle yemeği
      - Su geçirmez ayakkabı kiralama
      - Fotoğraf ve video çekimi
      - Hatıra alışverişleri
      
      ## En Uygun Ziyaret Dönemi
      
      ### İlkbahar (Nisan - Mayıs)
      - Ilıman hava
      - Daha sakin ortam
      - Yürüyüş için ideal
      
      ### Yaz (Haziran - Eylül)
      - Serin sularla ferahlatıcı deneyim
      - Yoğun ziyaretçi potansiyeli
      - Su aktiviteleri için en iyi dönem
      
      ### Sonbahar (Eylül - Ekim)
      - Kalabalık azalmış
      - Doğanın renk değişimi
      - Havanın halen sıcak olması avantaj
      
      ## Pratik Bilgiler
      
      ### Ulaşım
      - Fethiye'den araçla 1 saat
      - Özel araç için ücretsiz otopark
      - Otel önünden transfer imkanı mevcut
      
      ### Giriş Ücretleri (2025)
      - Saklıkent: 50 TL
      - Tlos: 30 TL
      - Müze Kart: Geçerlidir
      
      ### Açılış Saatleri
      - Yaz: 08:00 – 19:00
      - Kış: 08:00 – 17:00
      - Her gün açık
      
      ## Sıkça Sorulan Sorular
      
      Kanyon yürüyüşü zor mu? 
      Su içinden geçişler var ama genellikle ahşap platformlar ve rehber eşliğinde güvenli şekilde yürünüyor.
      
      Çocuklar için uygun mu?  
      Evet, ancak 6 yaş altı çocuklar için dikkatli olunmalı. Çocuklara özel ayakkabılar tavsiye edilir.
      
      Ne giymeliyim?  
      Suya dayanıklı kıyafetler, şort, yedek tişört ve su geçirmez ayakkabılar önerilir. Güneş kremi ve şapka da unutulmamalı.
      
      Su sporları yapabilir miyim?  
      Evet, rafting ve dere geçişleri gibi aktiviteler bazı turlarda ekstra hizmet olarak sunuluyor.
      
      Fotoğraf çekimi serbest mi?  
      Evet. Profesyonel çekimler için tesislerden izin almak gerekebilir.
      
      ## İpuçları ve Tavsiyeler
      
      - Yanınızda mutlaka su bulundurun
      - Güne erken başlayın, kalabalıktan kaçının
      - Su geçirmez telefon kılıfı alın
      - Yerel gözlemeler veya alabalık gibi yemekleri deneyin
      - Tlos'taki kaya mezarlarında fotoğraf molası verin
      
      Saklıkent & Tlos turu, adrenalin ve kültür dolu bir gün yaşamak isteyenler için ideal bir kaçış rotasıdır.
        `,
        keywords: [
          'saklıkent kanyonu',
          'tlos antik kenti',
          'fethiye turları',
          'doğa turu',
          'kanyon yürüyüşü',
          'muğla gezilecek yerler',
          'saklıkent turu',
          'tlos turu',
          'fethiye doğa turu',
          'saklıkent aktiviteler',
          'tlos antik kent',
          'saklıkent giriş ücreti',
          'saklıkent ulaşım',
          'saklıkent ziyaret saatleri',
          'fethiye günübirlik tur'
        ],
        metaDescription: 'Saklıkent Kanyonu ve Tlos Antik Kenti turu ile hem doğanın gücünü hem de tarihin izlerini keşfedin. Günübirlik bu Fethiye turunda kanyon yürüyüşü, serin sular, Likya kalıntıları ve rehberli gezi sizi bekliyor. Ulaşım, saatler, ücretler ve ipuçları burada!'
      },    
  {
    id: 13,
    title: 'Ölüdeniz & Kelebekler Vadisi Turu: Muğla\'nın Eşsiz Doğal Güzellikleri',
    slug: 'oludeniz-kelebekler-vadisi-turu',
    category: 'Yurt İçi Turlar',
    excerpt: 'Ölüdeniz\'in turkuaz suları ve Kelebekler Vadisi\'nin büyüleyici doğası. Muğla\'nın en popüler turistik noktalarında unutulmaz bir günlük tur deneyimi.',
    content: `
      Ölüdeniz ve Kelebekler Vadisi turu, Muğla'nın en değerli doğal güzelliklerini keşfetmenizi sağlayan eşsiz bir deneyim sunuyor. Turkuaz sularıyla ünlü Ölüdeniz ve endemik kelebek türleriyle dolu Kelebekler Vadisi, doğa severler için unutulmaz anılar biriktirmenizi sağlayacak.

      ## Ölüdeniz: Turkuaz Cennet

      ### Plaj Özellikleri
      - 4 kilometre uzunluğunda
      - Turkuaz renkli sular
      - Beyaz kumsal
      - Mavi Bayrak ödüllü
      - Doğal koy

      ### Aktivite Seçenekleri
      - Yüzme ve güneşlenme
      - Su sporları
      - Paraşüt
      - Tekne turu
      - Dalış

      ### Plaj Hizmetleri
      - Şezlong ve şemsiye
      - Duş ve tuvalet
      - Restoran ve kafe
      - Su sporları merkezi
      - Otopark

      ## Kelebekler Vadisi: Doğal Cennet

      ### Vadi Özellikleri
      - 350 metre yükseklik
      - 86 kelebek türü
      - Endemik bitkiler
      - Doğal şelaleler
      - Mağaralar

      ### Doğal Güzellikler
      - Kelebek kolonileri
      - Şelaleler
      - Doğal havuzlar
      - Bitki örtüsü
      - Kaya oluşumları

      ## Tur Programı

      ### Sabah Programı
      - Fethiye'den transfer
      - Ölüdeniz'e varış
      - Plaj aktiviteleri
      - Serbest zaman
      - Öğle yemeği

      ### Öğleden Sonra
      - Kelebekler Vadisi'ne geçiş
      - Vadi yürüyüşü
      - Kelebek gözlemi
      - Fotoğraf çekimi
      - Dönüş transferi

      ## Tura Dahil Olanlar

      ### Temel Hizmetler
      - Profesyonel rehberlik
      - Ulaşım ve transfer
      - Giriş ücretleri
      - Seyahat sigortası
      - Tur haritası

      ### Ek Hizmetler
      - Öğle yemeği (opsiyonel)
      - Su sporları ekipmanları
      - Fotoğraf çekimi
      - Hatıra eşyaları
      - Özel tur seçenekleri

      ## En İyi Ziyaret Zamanı

      ### Mevsimsel Öneriler
      - İlkbahar (Nisan-Mayıs)
        * Ilıman hava
        * Az turist
        * Kelebek gözlemi için ideal
        * Doğal güzellikler

      - Yaz (Haziran-Ağustos)
        * Sıcak hava
        * Turkuaz sular
        * Yoğun turist
        * Su sporları için ideal

      - Sonbahar (Eylül-Ekim)
        * Rahat sıcaklık
        * Renkli manzaralar
        * Sakin atmosfer
        * Fotoğraf için ideal

      ## Pratik Bilgiler

      ### Ulaşım
      - Fethiye'den otobüs: 45 dakika
      - Özel araç: Otopark mevcut
      - Taksi: 24 saat hizmet
      - Tur transferi: Otelden alım

      ### Giriş Ücretleri
      - Ölüdeniz: Ücretsiz
      - Kelebekler Vadisi: 40 TL
      - Müze Kart: Geçerli
      - Rehberli tur: 200-300 TL

      ### Ziyaret Saatleri
      - Yaz: 08:00-19:00
      - Kış: 08:00-17:00
      - Haftanın her günü açık
      - Resmi tatillerde de açık

      ## Sıkça Sorulan Sorular

      Kelebekler Vadisi yürüyüşü zor mu?
      Orta zorlukta, rahat ayakkabı ve su önerilir.

      Çocuklar için uygun mu?
      Evet, ancak Kelebekler Vadisi'nde dikkatli olunmalı.

      Yanımda ne getirmeliyim?
      Mayo, havlu, şapka, güneş kremi ve su önerilir.

      Fotoğraf çekimi serbest mi?
      Evet, profesyonel çekimler için izin gerekebilir.

      Engelli erişimi var mı?
      Ölüdeniz'de var, Kelebekler Vadisi'nde sınırlı.

      Su sporları için ekipman gerekli mi?
      Hayır, kiralama imkanı mevcut.

      ### Öneriler ve İpuçları

      - Erken saatte ziyaret edin
      - Güneş kremi kullanın
      - Su ve atıştırmalık alın
      - Rehber eşliğinde gezin
      - Fotoğraf çekimleri için zaman ayırın
      - Yerel lezzetleri deneyin
      - Su sporları için rezervasyon yapın
      - Kelebek gözlemi için sabah saatlerini tercih edin
    `,
    keywords: [
      'ölüdeniz',
      'kelebekler vadisi',
      'fethiye turları',
      'muğla gezilecek yerler',
      'ölüdeniz plajı',
      'kelebekler vadisi turu',
      'fethiye doğa turu',
      'ölüdeniz aktiviteler',
      'kelebekler vadisi yürüyüşü',
      'ölüdeniz giriş ücreti',
      'ölüdeniz ulaşım',
      'ölüdeniz ziyaret saatleri',
      'fethiye günübirlik tur',
      'ölüdeniz su sporları',
      'kelebekler vadisi kelebek türleri'
    ],
    metaDescription: 'Ölüdeniz ve Kelebekler Vadisi turu ile Muğla\'nın eşsiz doğal güzelliklerini keşfedin. Turkuaz sular, beyaz kumsal, 86 kelebek türü ve unutulmaz bir günlük tur deneyimi. Fethiye\'den ulaşım, giriş ücretleri ve aktivite seçenekleri hakkında detaylı bilgi.'
  },
  {
    id: 14,
    title: 'Sedir Adası & Kleopatra Plajı Turu: Mısır Esintisiyle Ege\'nin Eşsiz Kumları',
    slug: 'sedir-adasi-kleopatra-plaji-turu',
    category: 'Günlük Turlar',
    excerpt: 'Sedir Adası ve Kleopatra Plajı\'nın eşsiz kumlarını keşfedin. Antik kalıntılar, turkuaz sular ve dünyada sadece burada bulunan özel kum yapısıyla unutulmaz bir günlük tur deneyimi.',
    content: `
      Sedir Adası ve Kleopatra Plajı turu, Muğla'nın Marmaris ilçesinde yer alan eşsiz bir deneyim sunuyor. Antik dönemden günümüze ulaşan tarihi kalıntılar ve dünyada sadece burada bulunan özel kum yapısıyla ünlü Kleopatra Plajı, ziyaretçilerine unutulmaz anılar biriktirmenizi sağlayacak.

      ## Sedir Adası: Tarihi Cennet

      ### Ada Özellikleri
      - 800 metre uzunluğunda
      - 400 metre genişliğinde
      - Antik kent kalıntıları
      - Kleopatra Plajı
      - Doğal koylar

      ### Tarihi Yapılar
      - Apollon Tapınağı
      - Antik tiyatro
      - Agora
      - Nekropol
      - Su kemerleri

      ## Kleopatra Plajı: Eşsiz Kumlar

      ### Plaj Özellikleri
      - 100 metre uzunluğunda
      - Özel kum yapısı
      - Turkuaz sular
      - Mavi Bayrak ödüllü
      - Doğal koy

      ### Kum Özellikleri
      - Mercan kaynaklı
      - Yuvarlak taneli
      - Özel mineral yapısı
      - Antik Mısır'dan getirilmiş
      - Dünyada tek örnek

      ## Tur Programı

      ### Sabah Programı
      - Marmaris'ten transfer
      - Tekne ile ada yolculuğu
      - Ada turu
      - Tarihi kalıntılar
      - Rehberli gezi

      ### Öğle Programı
      - Kleopatra Plajı'nda yüzme
      - Serbest zaman
      - Öğle yemeği
      - Güneşlenme
      - Fotoğraf çekimi

      ### Öğleden Sonra
      - Ada keşfi
      - Tarihi yapılar
      - Doğal güzellikler
      - Dönüş yolculuğu
      - Marmaris'e varış

      ## Tura Dahil Olanlar

      ### Temel Hizmetler
      - Profesyonel rehberlik
      - Tekne transferi
      - Giriş ücretleri
      - Seyahat sigortası
      - Tur haritası

      ### Ek Hizmetler
      - Öğle yemeği (opsiyonel)
      - Şezlong ve şemsiye
      - Fotoğraf çekimi
      - Hatıra eşyaları
      - Özel tur seçenekleri

      ## En İyi Ziyaret Zamanı

      ### Mevsimsel Öneriler
      - İlkbahar (Nisan-Mayıs)
        * Ilıman hava
        * Az turist
        * Tarihi keşif için ideal
        * Doğal güzellikler

      - Yaz (Haziran-Ağustos)
        * Sıcak hava
        * Turkuaz sular
        * Yoğun turist
        * Yüzme için ideal

      - Sonbahar (Eylül-Ekim)
        * Rahat sıcaklık
        * Renkli manzaralar
        * Sakin atmosfer
        * Fotoğraf için ideal

      ## Pratik Bilgiler

      ### Ulaşım
      - Marmaris'ten tekne: 45 dakika
      - Özel tekne: İzin gerekli
      - Tur teknesi: Günlük seferler
      - Transfer: Otelden alım

      ### Giriş Ücretleri
      - Ada girişi: 30 TL
      - Müze Kart: Geçerli
      - Tekne turu: 150-200 TL
      - Rehberli tur: 250-300 TL

      ### Ziyaret Saatleri
      - Yaz: 08:00-19:00
      - Kış: 08:00-17:00
      - Haftanın her günü açık
      - Resmi tatillerde de açık

      ## Sıkça Sorulan Sorular

      Kleopatra kumlarının özelliği nedir?
      Mercan kaynaklı, yuvarlak taneli ve özel mineral yapısına sahip, dünyada sadece burada bulunan bir kum türü.

      Tekneyle mi gidiliyor?
      Evet, Marmaris'ten tekne ile 45 dakikalık bir yolculukla ulaşılıyor.

      Çocuklar için uygun mu?
      Evet, aile dostu bir rota, çocuklar da güvenle katılabilir.

      Yanımda ne getirmeliyim?
      Mayo, havlu, şapka, güneş kremi ve su önerilir.

      Fotoğraf çekimi serbest mi?
      Evet, profesyonel çekimler için izin gerekebilir.

      Engelli erişimi var mı?
      Sınırlı erişim mevcut, tekerlekli sandalye için uygun değil.

      ### Öneriler ve İpuçları

      - Erken saatte ziyaret edin
      - Güneş kremi kullanın
      - Su ve atıştırmalık alın
      - Rehber eşliğinde gezin
      - Fotoğraf çekimleri için zaman ayırın
      - Yerel lezzetleri deneyin
      - Tarihi kalıntıları keşfedin
      - Plajda yüzme için zaman ayırın
    `,
    keywords: [
      'sedir adası',
      'kleopatra plajı',
      'marmaris turları',
      'günlük tur',
      'antik kalıntılar',
      'özel kum',
      'marmaris tekne turu',
      'sedir adası ulaşım',
      'kleopatra plajı giriş',
      'sedir adası tarihi'
    ],
    metaDescription: 'Sedir Adası ve Kleopatra Plajı turu ile Muğla\'nın eşsiz doğal güzelliklerini keşfedin. Dünyada sadece burada bulunan özel kum yapısı, antik kalıntılar ve unutulmaz bir günlük tur deneyimi. Marmaris\'ten ulaşım, giriş ücretleri ve aktivite seçenekleri hakkında detaylı bilgi.'
  },
  {
    id: 15,
    title: 'Gelibolu Yarımadası Tarih Turu: Çanakkale Savaşı\'nın İzlerinde Kahramanlık Destanı',
    slug: 'gelibolu-yarimadasi-tarih-turu',
    category: 'Yurt İçi Turlar',
    excerpt: 'Gelibolu Yarımadası\'nda Çanakkale Savaşı\'nın izlerini takip edin. Şehitlikler, anıtlar ve tarihi mekanlarda duygusal bir yolculuğa çıkın.',
    content: `
      Gelibolu Yarımadası Tarih Turu, Türk tarihinin en önemli savunma savaşlarından biri olan Çanakkale Savaşı'nın izlerini takip etmenizi sağlayan eşsiz bir deneyim sunuyor. Şehitlikler, anıtlar ve tarihi mekanlarda duygusal bir yolculuğa çıkacak, kahramanlık destanının her detayını rehber eşliğinde öğreneceksiniz.

      ## Tarihi Önem

      ### Çanakkale Savaşı
      - 1915-1916 yılları
      - 250.000 şehit
      - 500.000 yaralı
      - 8 ay süren mücadele
      - Dünya tarihini değiştiren zafer

      ### Stratejik Önem
      - Boğazların kontrolü
      - İstanbul'un güvenliği
      - Rusya'ya yardım engeli
      - Osmanlı'nın direnişi
      - Mustafa Kemal'in yükselişi

      ## Tur Programı

      ### Sabah Programı
      - İstanbul'dan hareket
      - Feribot geçişi
      - Eceabat'a varış
      - Rehber bilgilendirmesi
      - İlk durak: Kilitbahir Kalesi

      ### Öğle Programı
      - 57. Alay Şehitliği
      - Conkbayırı
      - Anzak Koyu
      - Öğle molası
      - Tarihi anlatımlar

      ### Öğleden Sonra
      - Çanakkale Şehitler Abidesi
      - Seyit Onbaşı Anıtı
      - Yahya Çavuş Şehitliği
      - Dönüş yolculuğu
      - İstanbul'a varış

      ## Ziyaret Edilecek Yerler

      ### Şehitlikler
      - 57. Alay Şehitliği
        * Mustafa Kemal'in emri
        * Destansı direniş
        * Anıt ve müze
        * Tarihi belgeler
        * Fotoğraf sergisi

      - Yahya Çavuş Şehitliği
        * Ertuğrul Koyu
        * 63 asker
        * Anıt ve müze
        * Tarihi silahlar
        * Belgesel gösterimi

      ### Anıtlar
      - Çanakkale Şehitler Abidesi
        * 41.7 metre yükseklik
        * Tüm şehitlere adanmış
        * Müze ve sergi alanı
        * Anı defteri
        * Fotoğraf noktaları

      - Seyit Onbaşı Anıtı
        * 276 kg'lık mermi
        * Tek başına zafer
        * Heykel ve müze
        * Tarihi belgeler
        * Belgesel gösterimi

      ## Tura Dahil Olanlar

      ### Temel Hizmetler
      - Profesyonel rehberlik
      - Ulaşım ve transfer
      - Feribot geçişleri
      - Seyahat sigortası
      - Tur haritası

      ### Ek Hizmetler
      - Öğle yemeği (opsiyonel)
      - Müze girişleri
      - Fotoğraf çekimi
      - Hatıra eşyaları
      - Özel tur seçenekleri

      ## Pratik Bilgiler

      ### Ulaşım
      - İstanbul'dan otobüs: 5 saat
      - Feribot: 30 dakika
      - Özel araç: Otopark mevcut
      - Tur transferi: Otelden alım

      ### Giriş Ücretleri
      - Müze Kart: Geçerli
      - Feribot: 50 TL
      - Rehberli tur: 300-400 TL
      - Öğle yemeği: 100-150 TL

      ### Ziyaret Saatleri
      - Yaz: 08:00-19:00
      - Kış: 08:00-17:00
      - Haftanın her günü açık
      - Resmi tatillerde de açık

      ## Sıkça Sorulan Sorular

      Tur ne kadar sürüyor?
      Sabah erken saatte başlayıp akşam geç saatte biten tam günlük bir tur.

      Rehber eşliğinde mi?
      Evet, profesyonel tarih rehberleri eşliğinde gerçekleştirilir.

      Çocuklar için uygun mu?
      12 yaş ve üzeri için önerilir, küçük yaştaki çocuklar için duygusal etkilenme göz önünde bulundurulmalı.

      Yemek dahil mi?
      Tur paketine dahil değildir, ancak yemek molası verilir.

      Yanıma ne almalıyım?
      Rahat kıyafetler, güneş koruyucu, şapka ve su önerilir.

      Fotoğraf çekimi serbest mi?
      Evet, ancak şehitliklerde saygılı olunmalı.

      ### Öneriler ve İpuçları

      - Erken saatte ziyaret edin
      - Rahat ayakkabı giyin
      - Su ve atıştırmalık alın
      - Rehber anlatımlarını dinleyin
      - Saygılı davranın
      - Fotoğraf çekimlerinde dikkatli olun
      - Tarihi belgeleri inceleyin
      - Anı defterine not bırakın
    `,
    keywords: [
      'gelibolu turu',
      'çanakkale şehitlik turu',
      'tarihi turlar',
      'anıt ziyareti',
      'gelibolu yarımadası',
      'çanakkale savaşı',
      'şehitlikler',
      'istanbul çıkışlı tur',
      'gelibolu gezilecek yerler',
      'çanakkale anıtları',
      'gelibolu tarihi',
      'çanakkale şehitler abidesi',
      '57. alay şehitliği',
      'seyit onbaşı anıtı',
      'yahya çavuş şehitliği'
    ],
    metaDescription: 'Gelibolu Yarımadası Tarih Turu ile Çanakkale Savaşı\'nın izlerini keşfedin. Şehitlikler, anıtlar ve tarihi mekanlarda duygusal bir yolculuğa çıkın. İstanbul çıkışlı rehberli turlar, ziyaret edilecek yerler ve program detayları hakkında bilgi.'
  },
  {
    id: 16,
    title: "Maldivler Lüks Tatil Rehberi 2025: Fiyatlar, Aktiviteler ve Sık Sorulan Sorular",
    slug: "maldivler-luks-tatil-rehberi-2025",
    category: "Yurt Dışı Turlar",
    excerpt: "2025 Maldivler tatil rehberi: Fiyatlar, su üstü evleri, su sporları ve sık sorulan sorular. Maldivler'in en lüks resort otelleri ve özel deneyimler.",
    content: `
      # Maldivler Lüks Tatil Rehberi 2025

      Maldivler, turkuaz suları, beyaz kum plajları ve lüks su üstü evleriyle dünyanın en popüler tatil destinasyonlarından biridir. Bu rehberde Maldivler'de yapılacaklar, görülecek yerler ve özel deneyimler hakkında detaylı bilgiler bulabilirsiniz.

      ## 2025 Maldivler Tatil Fiyatları

      ### Konaklama Fiyatları (Gecelik)
      | Otel Kategorisi | Fiyat Aralığı | Özellikler | Dahil Hizmetler |
      | Lüks Su Üstü Evler | 2.500$ - 5.000$ | Özel Havuz, Şef | Tam Pansiyon, Spa |
      | Premium Resort | 1.500$ - 3.000$ | Plaj Erişimi | Yarım Pansiyon |
      | Butik Resort | 800$ - 1.500$ | Ada Merkezi | Kahvaltı Dahil |
      | Su Üstü Villa | 1.200$ - 2.500$ | Cam Zemin | Özel Şef |

      ## Sık Sorulan Sorular

      ### Maldivler'e Ne Zaman Gidilmeli?
      - En İyi Sezon: Aralık - Nisan (30-32°C)
      - Yağışlı Sezon: Mayıs - Kasım
      - Festival Dönemleri: Aralık - Ocak

      ### Vize Gerekli mi?
      - Türk vatandaşları için vize gerekli değil
      - 30 güne kadar kalış süresi
      - Pasaport geçerlilik süresi: 6 ay
      - Dönüş bileti gerekli

      ### Uçak Bileti Dahil mi?
      - Evet, tur fiyatına dahil
      - Business sınıf opsiyonel
      - Bagaj hakkı: 30 kg
      - İade ve değişiklik ücreti: 500$

      ## Su Sporları ve Aktiviteler

      ### Popüler Aktiviteler
      - Tüplü dalış
      - Şnorkel
      - Su kayağı
      - Jet ski
      - Balık tutma
      - Ada turu
      - Spa ve masaj

      ### Dalış Noktaları
      | Dalış Noktası | Derinlik | Özellikler | En İyi Sezon |
      | Banana Reef | 5-30m | Mercanlar, Balıklar | Aralık-Nisan |
      | Manta Point | 5-20m | Vatozlar | Mayıs-Kasım |
      | HP Reef | 10-25m | Tünel, Mağaralar | Tüm Yıl |

      ## Maldivler Restoranlar

      ### En İyi Restoranlar
      - Ithaa Undersea Restaurant
        - Dünyanın ilk su altı restoranı
        - Deniz ürünleri menüsü
        - Özel şef deneyimi
      - 5.8 Undersea Restaurant
        - Modern deniz ürünleri
        - Şarap eşleştirmeleri
        - Özel masalar
      - Subsix
        - Su altı parti deneyimi
        - Canlı müzik
        - Özel etkinlikler

      ## Maldivler'de Seyahat İpuçları

      ### Para Birimi
      - Resmi para birimi: MVR (Rufiyaa)
      - 1$ ≈ 15.45 MVR
      - Kredi kartı yaygın kullanım
      - USD kabul edilir

      ### İletişim
      - Uluslararası arama kodu: +960
      - Wi-Fi ücretsiz
      - SIM kart: 20-30$
      - WhatsApp ve sosyal medya erişimi

      ### Sağlık
      - Seyahat sigortası önerilir
      - İlaçlarınızı yanınızda getirin
      - Güneş koruması önemli
      - Su tüketimine dikkat edin

      ### Güvenlik
      - Güvenli bir ülke
      - Değerli eşyalarınıza dikkat edin
      - Acil numara: 119
      - Polis merkezleri 24 saat açık

      ---
      *Son güncelleme: Mart 2024*
    `,
    keywords: [
      'maldivler tatil 2025',
      'maldivler fiyatları',
      'su üstü ev',
      'maldivler resort',
      'lüks tatil',
      'yurt dışı tur',
      'maldivler vize',
      'maldivler dalış',
      'maldivler restoranlar',
      'maldivler su sporları'
    ],
    metaDescription: '2025 Maldivler tatil rehberi, fiyatlar, su üstü evler, dalış noktaları ve yapılacak aktiviteler. Lüks resort oteller ve özel deneyimler için detaylı bilgi.'
  },
  {
    id: 17,
    title: "Barselona Turu 2025: Gaudi'nin Şehrinde Sanat ve Kültür",
    slug: "barselona-turu-2025-gaudi-sanat-kultur",
    category: "Yurt Dışı Turlar",
    excerpt: "2025 Barselona turu rehberi: Sagrada Familia, Park Güell ve şehrin en önemli turistik yerleri. Katalan mutfağı, alışveriş ve gece hayatı hakkında detaylı bilgiler.",
    content: `
      # Barselona Turu Rehberi 2025

      Barselona, Antoni Gaudi'nin eserleri, Katalan kültürü ve Akdeniz'in eşsiz atmosferiyle dünyanın en çekici şehirlerinden biridir. Bu rehberde Barselona'da yapılacaklar, görülecek yerler ve özel deneyimler hakkında detaylı bilgiler bulabilirsiniz.

      ## 2025 Barselona Tur Fiyatları

      ### Tur Paketleri
      | Paket Tipi | Fiyat | Süre | Dahil Hizmetler |
      | Standart Tur | 1.499€ | 3 Gün | Uçak, Otel, Kahvaltı |
      | Premium Tur | 2.499€ | 5 Gün | Business Uçak, 5* Otel |
      | Özel Tur | 3.999€ | 7 Gün | VIP Hizmet, Özel Rehber |

      ## Sık Sorulan Sorular

      ### Barselona'ya Ne Zaman Gidilmeli?
      - En İyi Sezon: Nisan - Haziran, Eylül - Ekim
      - Yaz Ayları: Sıcak ve kalabalık
      - Festival Dönemleri: Haziran - Eylül

      ### Vize Gerekli mi?
      - Schengen vizesi gerekli
      - Başvuru süresi: 15 gün
      - Vize ücreti: 80€
      - Sigorta zorunlu

      ### Uçak Bileti Dahil mi?
      - Evet, tur fiyatına dahil
      - Ekonomi sınıfı
      - Bagaj hakkı: 23 kg
      - İade ve değişiklik ücreti: 200€

      ## Gezilecek Yerler

      ### Gaudi Eserleri
      - Sagrada Familia
        - Dünyanın en ünlü katedrallerinden
        - 1882'den beri inşaat halinde
        - Özel rehberli tur
      - Park Güell
        - UNESCO Dünya Mirası
        - Mozaik eserler
        - Panoramik şehir manzarası
      - Casa Batlló
        - Modernist mimari
        - Özel sesli rehber
        - Gece turu seçeneği

      ### Müzeler ve Kültür
      - Picasso Müzesi
      - MNAC (Ulusal Sanat Müzesi)
      - MACBA (Modern Sanat Müzesi)
      - Camp Nou (FC Barcelona Stadyumu)

      ## Katalan Mutfağı

      ### Mutlaka Denenmesi Gerekenler
      - Paella
      - Tapas
      - Crema Catalana
      - Jamón Ibérico
      - Sangria

      ### En İyi Restoranlar
      | Restoran | Mutfak | Özellikler | Fiyat Aralığı |
      | El Xampanyet | Katalan | Tapas, Şampanya | 20-30€ |
      | Tickets | Modern | Ferran Adria | 100-150€ |
      | La Boqueria | Çeşitli | Taze Deniz Ürünleri | 30-50€ |

      ## Alışveriş Rehberi

      ### Popüler Alışveriş Bölgeleri
      - La Rambla
      - Passeig de Gràcia
      - El Born
      - El Raval

      ### Vergi İadesi
      - Minimum alışveriş: 90.15€
      - İade oranı: %21
      - İşlem süresi: 3-6 ay
      - Havaalanında iade noktaları

      ## Ulaşım

      ### Toplu Taşıma
      - Metro: En ekonomik seçenek
      - Otobüs: 24 saat hizmet
      - Taksi: 24 saat hizmet
      - Bisiklet: Şehir içi ulaşım

      ### Havaalanı Transferi
      - Aerobús: 5.90€
      - Taksi: 30-40€
      - Özel transfer: 50-60€
      - Metro: 4.50€

      ## Gece Hayatı

      ### Popüler Bölgeler
      - El Raval
      - El Born
      - Barceloneta
      - Gracia

      ### En İyi Barlar
      - Paradiso
      - Dry Martini
      - Boadas
      - El Xampanyet

      ---
      *Son güncelleme: Mart 2024*
    `,
    keywords: [
      'barselona turu 2025',
      'gaudi eserleri',
      'sagrada familia',
      'park güell',
      'katalan mutfağı',
      'yurt dışı tur',
      'schengen vizesi',
      'barselona gezilecek yerler',
      'barselona alışveriş',
      'barselona gece hayatı'
    ],
    metaDescription: '2025 Barselona turu rehberi, Gaudi eserleri, Katalan mutfağı, alışveriş ve gece hayatı. Sagrada Familia, Park Güell ve şehrin en önemli turistik yerleri hakkında detaylı bilgi.'
  },
  {
    id: 18,
    title: "Paris Turu 2025: Aşkın ve Sanatın Başkenti",
    slug: "paris-turu-2025-ask-sanat-baskenti",
    category: "Yurt Dışı Turlar",
    excerpt: "2025 Paris turu rehberi: Eyfel Kulesi, Louvre Müzesi ve şehrin en önemli turistik yerleri. Fransız mutfağı, alışveriş ve romantik deneyimler hakkında detaylı bilgiler.",
    content: `
      # Paris Turu Rehberi 2025

      Paris, sanatın, modanın ve aşkın başkenti olarak dünyanın en çekici şehirlerinden biridir. Bu rehberde Paris'te yapılacaklar, görülecek yerler ve özel deneyimler hakkında detaylı bilgiler bulabilirsiniz.

      ## 2025 Paris Tur Fiyatları

      ### Tur Paketleri
      | Paket Tipi | Fiyat | Süre | Dahil Hizmetler |
      | Standart Tur | 1.299€ | 3 Gün | Uçak, Otel, Kahvaltı |
      | Premium Tur | 2.299€ | 5 Gün | Business Uçak, 4* Otel |
      | Özel Tur | 3.499€ | 7 Gün | VIP Hizmet, Özel Rehber |

      ## Sık Sorulan Sorular

      ### Paris'e Ne Zaman Gidilmeli?
      - En İyi Sezon: Nisan - Haziran, Eylül - Ekim
      - Yaz Ayları: Kalabalık ve sıcak
      - Festival Dönemleri: Haziran - Temmuz

      ### Vize Gerekli mi?
      - Schengen vizesi gerekli
      - Başvuru süresi: 15 gün
      - Vize ücreti: 80€
      - Sigorta zorunlu

      ### Uçak Bileti Dahil mi?
      - Evet, tur fiyatına dahil
      - Ekonomi sınıfı
      - Bagaj hakkı: 23 kg
      - İade ve değişiklik ücreti: 200€

      ## Gezilecek Yerler

      ### Müzeler ve Sanat
      - Louvre Müzesi
        - Mona Lisa
        - Venüs Heykeli
        - Özel rehberli tur
      - Orsay Müzesi
        - İzlenimci sanat
        - Van Gogh eserleri
        - Özel sergiler
      - Pompidou Merkezi
        - Modern sanat
        - Çağdaş eserler
        - Mimari tasarım

      ### Tarihi Yapılar
      - Eyfel Kulesi
      - Notre Dame Katedrali
      - Arc de Triomphe
      - Sacré-Cœur Bazilikası

      ## Fransız Mutfağı

      ### Mutlaka Denenmesi Gerekenler
      - Croissant
      - Macaron
      - Escargot
      - Foie Gras
      - Şarap

      ### En İyi Restoranlar
      | Restoran | Mutfak | Özellikler | Fiyat Aralığı |
      | Le Jules Verne | Fransız | Eyfel Kulesi'nde | 200-300€ |
      | L'Ami Louis | Geleneksel | Tarihi mekan | 100-150€ |
      | Le Comptoir | Modern | Michelin yıldızlı | 150-200€ |

      ## Alışveriş Rehberi

      ### Popüler Alışveriş Bölgeleri
      - Champs-Élysées
      - Galeries Lafayette
      - Le Marais
      - Saint-Germain-des-Prés

      ### Vergi İadesi
      - Minimum alışveriş: 175€
      - İade oranı: %12
      - İşlem süresi: 3-6 ay
      - Havaalanında iade noktaları

      ## Ulaşım

      ### Toplu Taşıma
      - Metro: En ekonomik seçenek
      - Otobüs: 24 saat hizmet
      - Taksi: 24 saat hizmet
      - Bisiklet: Vélib sistemi

      ### Havaalanı Transferi
      - RER: 10.30€
      - Taksi: 50-60€
      - Özel transfer: 70-80€
      - Metro: 10.30€

      ## Romantik Deneyimler

      ### Özel Aktiviteler
      - Seine Nehri tekne turu
      - Eyfel Kulesi'nde akşam yemeği
      - Montmartre'da sanat turu
      - Şarap tadımı
      - Pastane workshop'ları

      ---
      *Son güncelleme: Mart 2024*
    `,
    keywords: [
      'paris turu 2025',
      'eyfel kulesi',
      'louvre müzesi',
      'fransız mutfağı',
      'yurt dışı tur',
      'schengen vizesi',
      'paris gezilecek yerler',
      'paris alışveriş',
      'paris romantik',
      'paris müzeler'
    ],
    metaDescription: '2025 Paris turu rehberi, Eyfel Kulesi, Louvre Müzesi ve şehrin en önemli turistik yerleri. Fransız mutfağı, alışveriş ve romantik deneyimler için detaylı bilgi.'
  },
  {
    id: 19,
    title: "Roma Turu 2025: Antik İmparatorluğun Başkenti",
    slug: "roma-turu-2025-antik-imparatorluk-baskenti",
    category: "Yurt Dışı Turlar",
    excerpt: "2025 Roma turu rehberi: Kolezyum, Vatikan ve şehrin en önemli tarihi yerleri. İtalyan mutfağı, alışveriş ve kültür turu hakkında detaylı bilgiler.",
    content: `
      # Roma Turu Rehberi 2025

      Roma, antik dünyanın en güçlü imparatorluğunun başkenti olarak tarihi ve kültürel zenginliğiyle dünyanın en etkileyici şehirlerinden biridir. Bu rehberde Roma'da yapılacaklar, görülecek yerler ve özel deneyimler hakkında detaylı bilgiler bulabilirsiniz.

      ## 2025 Roma Tur Fiyatları

      ### Tur Paketleri
      | Paket Tipi | Fiyat | Süre | Dahil Hizmetler |
      | Standart Tur | 1.199€ | 3 Gün | Uçak, Otel, Kahvaltı |
      | Premium Tur | 2.199€ | 5 Gün | Business Uçak, 4* Otel |
      | Özel Tur | 3.299€ | 7 Gün | VIP Hizmet, Özel Rehber |

      ## Sık Sorulan Sorular

      ### Roma'ya Ne Zaman Gidilmeli?
      - En İyi Sezon: Nisan - Haziran, Eylül - Ekim
      - Yaz Ayları: Sıcak ve kalabalık
      - Festival Dönemleri: Haziran - Eylül

      ### Vize Gerekli mi?
      - Schengen vizesi gerekli
      - Başvuru süresi: 15 gün
      - Vize ücreti: 80€
      - Sigorta zorunlu

      ### Uçak Bileti Dahil mi?
      - Evet, tur fiyatına dahil
      - Ekonomi sınıfı
      - Bagaj hakkı: 23 kg
      - İade ve değişiklik ücreti: 200€

      ## Gezilecek Yerler

      ### Antik Roma
      - Kolezyum
        - Gladyatör arenası
        - Özel rehberli tur
        - Gece turu seçeneği
      - Forum Romanum
        - Antik meydan
        - Tarihi kalıntılar
        - Arkeolojik alan
      - Pantheon
        - Antik tapınak
        - Mimari harika
        - Ücretsiz giriş

      ### Vatikan
      - Aziz Petrus Bazilikası
      - Vatikan Müzeleri
      - Sistine Şapeli
      - Vatikan Bahçeleri

      ## İtalyan Mutfağı

      ### Mutlaka Denenmesi Gerekenler
      - Pizza Romana
      - Pasta Carbonara
      - Tiramisu
      - Gelato
      - İtalyan şarapları

      ### En İyi Restoranlar
      | Restoran | Mutfak | Özellikler | Fiyat Aralığı |
      | La Pergola | İtalyan | 3 Michelin yıldızı | 200-300€ |
      | Roscioli | Geleneksel | Tarihi mekan | 50-80€ |
      | Armando al Pantheon | Roma | Aile işletmesi | 30-50€ |

      ## Alışveriş Rehberi

      ### Popüler Alışveriş Bölgeleri
      - Via del Corso
      - Via Condotti
      - Campo de' Fiori
      - Trastevere

      ### Vergi İadesi
      - Minimum alışveriş: 154.94€
      - İade oranı: %22
      - İşlem süresi: 3-6 ay
      - Havaalanında iade noktaları

      ## Ulaşım

      ### Toplu Taşıma
      - Metro: En ekonomik seçenek
      - Otobüs: 24 saat hizmet
      - Taksi: 24 saat hizmet
      - Tramvay: Şehir merkezi

      ### Havaalanı Transferi
      - Leonardo Express: 14€
      - Taksi: 48€
      - Özel transfer: 60-70€
      - Metro: 8€

      ## Kültür ve Sanat

      ### Müzeler
      - Borghese Galerisi
      - Ulusal Roma Müzesi
      - MAXXI Modern Sanat Müzesi
      - Ara Pacis Müzesi

      ### Özel Deneyimler
      - Gladyatör okulu
      - Pasta yapım workshop'u
      - Şarap tadımı
      - Vatikan özel turu
      - Roma gece turu

      ---
      *Son güncelleme: Mart 2024*
    `,
    keywords: [
      'roma turu 2025',
      'kolezyum',
      'vatikan',
      'italyan mutfağı',
      'yurt dışı tur',
      'schengen vizesi',
      'roma gezilecek yerler',
      'roma alışveriş',
      'roma müzeler',
      'roma tarihi'
    ],
    metaDescription: '2025 Roma turu rehberi, Kolezyum, Vatikan ve şehrin en önemli tarihi yerleri. İtalyan mutfağı, alışveriş ve kültür turu için detaylı bilgi.'
  },
  {
    id: 20,
    title: "Amsterdam Turu 2025: Kanalların ve Sanatın Şehri",
    slug: "amsterdam-turu-2025-kanallar-sanat-sehri",
    category: "Yurt Dışı Turlar",
    excerpt: "2025 Amsterdam turu rehberi: Van Gogh Müzesi, kanal turları ve şehrin en önemli turistik yerleri. Hollanda mutfağı, bisiklet kültürü ve müzeler hakkında detaylı bilgiler.",
    content: `
      # Amsterdam Turu Rehberi 2025

      Amsterdam, kanalları, müzeleri ve özgür ruhuyla dünyanın en çekici şehirlerinden biridir. Bu rehberde Amsterdam'da yapılacaklar, görülecek yerler ve özel deneyimler hakkında detaylı bilgiler bulabilirsiniz.

      ## 2025 Amsterdam Tur Fiyatları

      ### Tur Paketleri
      | Paket Tipi | Fiyat | Süre | Dahil Hizmetler |
      | Standart Tur | 1.099€ | 3 Gün | Uçak, Otel, Kahvaltı |
      | Premium Tur | 1.999€ | 5 Gün | Business Uçak, 4* Otel |
      | Özel Tur | 2.999€ | 7 Gün | VIP Hizmet, Özel Rehber |

      ## Sık Sorulan Sorular

      ### Amsterdam'a Ne Zaman Gidilmeli?
      - En İyi Sezon: Nisan - Mayıs (Lale Zamanı)
      - Yaz Ayları: Popüler ve kalabalık
      - Festival Dönemleri: Nisan - Eylül

      ### Vize Gerekli mi?
      - Schengen vizesi gerekli
      - Başvuru süresi: 15 gün
      - Vize ücreti: 80€
      - Sigorta zorunlu

      ### Uçak Bileti Dahil mi?
      - Evet, tur fiyatına dahil
      - Ekonomi sınıfı
      - Bagaj hakkı: 23 kg
      - İade ve değişiklik ücreti: 200€

      ## Gezilecek Yerler

      ### Müzeler
      - Van Gogh Müzesi
        - Dünyanın en büyük Van Gogh koleksiyonu
        - Özel sergiler
        - Sesli rehber
      - Rijksmuseum
        - Hollanda Altın Çağı
        - Rembrandt eserleri
        - Mimari tasarım
      - Anne Frank Evi
        - Tarihi müze
        - Rehberli tur
        - Online rezervasyon gerekli

      ### Kanal Turu
      - Klasik tekne turu
      - Özel tekne kiralama
      - Akşam yemeği teknesi
      - Hop-on hop-off tekne

      ## Hollanda Mutfağı

      ### Mutlaka Denenmesi Gerekenler
      - Stroopwafel
      - Poffertjes
      - Kibbeling
      - Hollanda peyniri
      - Bitterballen

      ### En İyi Restoranlar
      | Restoran | Mutfak | Özellikler | Fiyat Aralığı |
      | Restaurant de Kas | Modern | Çiftlikten sofraya | 80-120€ |
      | Moeders | Geleneksel | Aile tarzı | 40-60€ |
      | The Seafood Bar | Deniz ürünleri | Taze balık | 50-80€ |

      ## Bisiklet Kültürü

      ### Bisiklet Turları
      - Şehir merkezi turu
      - Kırsal alan turu
      - Müze turu
      - Yemek turu

      ### Bisiklet Kiralama
      - Günlük: 10-15€
      - Haftalık: 50-70€
      - Elektrikli: 25-30€
      - Rehberli tur: 30-40€

      ## Alışveriş Rehberi

      ### Popüler Alışveriş Bölgeleri
      - Kalverstraat
      - Nine Streets
      - Albert Cuyp Market
      - Jordaan

      ### Vergi İadesi
      - Minimum alışveriş: 50€
      - İade oranı: %21
      - İşlem süresi: 3-6 ay
      - Havaalanında iade noktaları

      ## Ulaşım

      ### Toplu Taşıma
      - Tram: En yaygın seçenek
      - Metro: Şehir dışı bağlantılar
      - Otobüs: 24 saat hizmet
      - Feribot: Ücretsiz

      ### Havaalanı Transferi
      - Tren: 4.50€
      - Taksi: 45-55€
      - Özel transfer: 60-70€
      - Otobüs: 6.50€

      ## Özel Deneyimler

      ### Aktiviteler
      - Lale bahçesi ziyareti
      - Peynir tadımı
      - Şarap tadımı
      - Kanal evi turu
      - Bisiklet workshop'u

      ---
      *Son güncelleme: Mart 2024*
    `,
    keywords: [
      'amsterdam turu 2025',
      'van gogh müzesi',
      'kanal turu',
      'hollanda mutfağı',
      'yurt dışı tur',
      'schengen vizesi',
      'amsterdam gezilecek yerler',
      'amsterdam bisiklet',
      'amsterdam müzeler',
      'amsterdam kanallar'
    ],
    metaDescription: '2025 Amsterdam turu rehberi, Van Gogh Müzesi, kanal turları ve şehrin en önemli turistik yerleri. Hollanda mutfağı, bisiklet kültürü ve müzeler için detaylı bilgi.'
  },
  {
    id: 21,
    title: "Londra Turu 2025: Kraliyet ve Modernliğin Buluştuğu Şehir",
    slug: "londra-turu-2025-kraliyet-modernlik",
    category: "Yurt Dışı Turlar",
    excerpt: "2025 Londra turu rehberi: Buckingham Sarayı, British Museum ve şehrin en önemli turistik yerleri. İngiliz mutfağı, alışveriş ve kültür turu hakkında detaylı bilgiler.",
    content: `
      # Londra Turu Rehberi 2025

      Londra, kraliyet ailesi, dünya çapında müzeleri ve modern yaşam tarzıyla dünyanın en çekici şehirlerinden biridir. Bu rehberde Londra'da yapılacaklar, görülecek yerler ve özel deneyimler hakkında detaylı bilgiler bulabilirsiniz.

      ## 2025 Londra Tur Fiyatları

      ### Tur Paketleri
      | Paket Tipi | Fiyat | Süre | Dahil Hizmetler |
      | Standart Tur | 1.399€ | 3 Gün | Uçak, Otel, Kahvaltı |
      | Premium Tur | 2.399€ | 5 Gün | Business Uçak, 4* Otel |
      | Özel Tur | 3.499€ | 7 Gün | VIP Hizmet, Özel Rehber |

      ## Sık Sorulan Sorular

      ### Londra'ya Ne Zaman Gidilmeli?
      - En İyi Sezon: Mayıs - Eylül
      - Yaz Ayları: Festival ve etkinlikler
      - Noel Dönemi: Özel atmosfer

      ### Vize Gerekli mi?
      - İngiltere vizesi gerekli
      - Başvuru süresi: 15 gün
      - Vize ücreti: 100€
      - Sigorta zorunlu

      ### Uçak Bileti Dahil mi?
      - Evet, tur fiyatına dahil
      - Ekonomi sınıfı
      - Bagaj hakkı: 23 kg
      - İade ve değişiklik ücreti: 200€

      ## Gezilecek Yerler

      ### Kraliyet Yerleri
      - Buckingham Sarayı
        - Nöbet değişimi töreni
        - Devlet odaları turu
        - Kraliyet bahçeleri
      - Westminster Abbey
        - Kraliyet düğünleri
        - Tarihi mezar taşları
        - Gotik mimari
      - Tower of London
        - Kraliyet mücevherleri
        - Beyaz Kule
        - Ravens

      ### Müzeler
      - British Museum
      - National Gallery
      - Natural History Museum
      - Victoria & Albert Museum

      ## İngiliz Mutfağı

      ### Mutlaka Denenmesi Gerekenler
      - Fish & Chips
      - Sunday Roast
      - Afternoon Tea
      - Full English Breakfast
      - Puding

      ### En İyi Restoranlar
      | Restoran | Mutfak | Özellikler | Fiyat Aralığı |
      | The Ritz | İngiliz | Afternoon Tea | 100-150£ |
      | Dishoom | Hint | Modern | 30-50£ |
      | Sketch | Fransız | Sanat galerisi | 80-120£ |

      ## Alışveriş Rehberi

      ### Popüler Alışveriş Bölgeleri
      - Oxford Street
      - Regent Street
      - Covent Garden
      - Harrods
      - Selfridges

      ### Vergi İadesi
      - Minimum alışveriş: 30£
      - İade oranı: %20
      - İşlem süresi: 3-6 ay
      - Havaalanında iade noktaları

      ## Ulaşım

      ### Toplu Taşıma
      - Metro (Tube): En yaygın seçenek
      - Otobüs: 24 saat hizmet
      - Taksi: Siyah taksiler
      - Bisiklet: Santander Cycles

      ### Havaalanı Transferi
      - Heathrow Express: 25£
      - Taksi: 45-65£
      - Özel transfer: 70-90£
      - Metro: 6£

      ## Özel Deneyimler

      ### Aktiviteler
      - West End müzikali
      - Thames nehir turu
      - Harry Potter stüdyo turu
      - Şarap tadımı
      - Yemek turu

      ---
      *Son güncelleme: Mart 2024*
    `,
    keywords: [
      'londra turu 2025',
      'buckingham sarayı',
      'british museum',
      'ingiliz mutfağı',
      'yurt dışı tur',
      'ingiltere vizesi',
      'londra gezilecek yerler',
      'londra alışveriş',
      'londra müzeler',
      'londra kraliyet'
    ],
    metaDescription: '2025 Londra turu rehberi, Buckingham Sarayı, British Museum ve şehrin en önemli turistik yerleri. İngiliz mutfağı, alışveriş ve kültür turu için detaylı bilgi.'
  },
  {
    id: 22,
    title: "Prag Turu 2025: Orta Çağın Büyülü Şehri",
    slug: "prag-turu-2025-orta-cag-buyulu-sehir",
    category: "Yurt Dışı Turlar",
    excerpt: "2025 Prag turu rehberi: Prag Kalesi, Charles Köprüsü ve şehrin en önemli turistik yerleri. Çek mutfağı, bira kültürü ve tarihi mekanlar hakkında detaylı bilgiler.",
    content: `
      # Prag Turu Rehberi 2025

      Prag, Orta Çağ'dan kalma mimarisi, büyülü atmosferi ve zengin kültürüyle Avrupa'nın en etkileyici şehirlerinden biridir. Bu rehberde Prag'da yapılacaklar, görülecek yerler ve özel deneyimler hakkında detaylı bilgiler bulabilirsiniz.

      ## 2025 Prag Tur Fiyatları

      ### Tur Paketleri
      | Paket Tipi | Fiyat | Süre | Dahil Hizmetler |
      | Standart Tur | 999€ | 3 Gün | Uçak, Otel, Kahvaltı |
      | Premium Tur | 1.799€ | 5 Gün | Business Uçak, 4* Otel |
      | Özel Tur | 2.499€ | 7 Gün | VIP Hizmet, Özel Rehber |

      ## Sık Sorulan Sorular

      ### Prag'a Ne Zaman Gidilmeli?
      - En İyi Sezon: Nisan - Ekim
      - Yaz Ayları: Festival dönemi
      - Noel Dönemi: Özel pazarlar

      ### Vize Gerekli mi?
      - Schengen vizesi gerekli
      - Başvuru süresi: 15 gün
      - Vize ücreti: 80€
      - Sigorta zorunlu

      ### Uçak Bileti Dahil mi?
      - Evet, tur fiyatına dahil
      - Ekonomi sınıfı
      - Bagaj hakkı: 23 kg
      - İade ve değişiklik ücreti: 200€

      ## Gezilecek Yerler

      ### Tarihi Yapılar
      - Prag Kalesi
        - St. Vitus Katedrali
        - Altın Yol
        - Kraliyet sarayı
      - Charles Köprüsü
        - Barok heykeller
        - Güneş doğuşu manzarası
        - Sokak sanatçıları
      - Eski Şehir Meydanı
        - Astronomik Saat
        - Tyn Kilisesi
        - Belediye Binası

      ### Müzeler
      - Kafka Müzesi
      - Ulusal Müze
      - Mucha Müzesi
      - Yahudi Müzesi

      ## Çek Mutfağı

      ### Mutlaka Denenmesi Gerekenler
      - Gulaş
      - Svíčková
      - Trdelník
      - Çek birası
      - Knedlíky

      ### En İyi Restoranlar
      | Restoran | Mutfak | Özellikler | Fiyat Aralığı |
      | La Degustation | Çek | Michelin yıldızlı | 100-150€ |
      | U Modré Kachničky | Geleneksel | Tarihi mekan | 40-60€ |
      | Lokál | Modern | Yerel lezzetler | 20-30€ |

      ## Bira Kültürü

      ### Bira Turları
      - Pilsner Urquell fabrika turu
      - Bira tadımı
      - Bira müzesi
      - Bira bahçeleri

      ### Popüler Bira Evleri
      - U Fleků
      - U Zlatého Tygra
      - U Medvídků
      - Pivovarský Dům

      ## Alışveriş Rehberi

      ### Popüler Alışveriş Bölgeleri
      - Na Příkopě
      - Pařížská
      - Wenceslas Meydanı
      - Havelská Pazarı

      ### Vergi İadesi
      - Minimum alışveriş: 2000 CZK
      - İade oranı: %21
      - İşlem süresi: 3-6 ay
      - Havaalanında iade noktaları

      ## Ulaşım

      ### Toplu Taşıma
      - Metro: En ekonomik seçenek
      - Tramvay: Şehir merkezi
      - Otobüs: 24 saat hizmet
      - Taksi: 24 saat hizmet

      ### Havaalanı Transferi
      - AE Bus: 100 CZK
      - Taksi: 500-700 CZK
      - Özel transfer: 800-1000 CZK
      - Metro: 32 CZK

      ## Özel Deneyimler

      ### Aktiviteler
      - Vltava nehir turu
      - Klasik müzik konseri
      - Kukla tiyatrosu
      - Şarap tadımı
      - Çek mutfağı workshop'u

      ---
      *Son güncelleme: Mart 2024*
    `,
    keywords: [
      'prag turu 2025',
      'prag kalesi',
      'charles köprüsü',
      'çek mutfağı',
      'yurt dışı tur',
      'schengen vizesi',
      'prag gezilecek yerler',
      'prag bira',
      'prag müzeler',
      'prag tarihi'
    ],
    metaDescription: '2025 Prag turu rehberi, Prag Kalesi, Charles Köprüsü ve şehrin en önemli turistik yerleri. Çek mutfağı, bira kültürü ve tarihi mekanlar için detaylı bilgi.'
  },
  {
    id: 23,
    title: "Viyana Turu 2025: Müziğin ve Sanatın Başkenti",
    slug: "viyana-turu-2025-muzik-sanat-baskenti",
    category: "Yurt Dışı Turlar",
    excerpt: "2025 Viyana turu rehberi: Schönbrunn Sarayı, Viyana Opera Binası ve şehrin en önemli turistik yerleri. Avusturya mutfağı, klasik müzik ve kültür turu hakkında detaylı bilgiler.",
    content: `
      # Viyana Turu Rehberi 2025

      Viyana, klasik müziğin, imparatorluk saraylarının ve sanatın başkenti olarak Avrupa'nın en zarif şehirlerinden biridir. Bu rehberde Viyana'da yapılacaklar, görülecek yerler ve özel deneyimler hakkında detaylı bilgiler bulabilirsiniz.

      ## 2025 Viyana Tur Fiyatları

      ### Tur Paketleri
      | Paket Tipi | Fiyat | Süre | Dahil Hizmetler |
      | Standart Tur | 1.099€ | 3 Gün | Uçak, Otel, Kahvaltı |
      | Premium Tur | 1.999€ | 5 Gün | Business Uçak, 4* Otel |
      | Özel Tur | 2.999€ | 7 Gün | VIP Hizmet, Özel Rehber |

      ## Sık Sorulan Sorular

      ### Viyana'ya Ne Zaman Gidilmeli?
      - En İyi Sezon: Nisan - Ekim
      - Yaz Ayları: Festival dönemi
      - Noel Dönemi: Özel pazarlar

      ### Vize Gerekli mi?
      - Schengen vizesi gerekli
      - Başvuru süresi: 15 gün
      - Vize ücreti: 80€
      - Sigorta zorunlu

      ### Uçak Bileti Dahil mi?
      - Evet, tur fiyatına dahil
      - Ekonomi sınıfı
      - Bagaj hakkı: 23 kg
      - İade ve değişiklik ücreti: 200€

      ## Gezilecek Yerler

      ### Saraylar
      - Schönbrunn Sarayı
        - İmparatorluk odaları
        - Bahçeler ve labirent
        - Palm House
      - Hofburg Sarayı
        - İmparatorluk hazineleri
        - Sisi Müzesi
        - Gümüş Koleksiyonu
      - Belvedere Sarayı
        - Klimt eserleri
        - Barok mimari
        - Bahçeler

      ### Müzeler
      - Kunsthistorisches Museum
      - Albertina
      - Leopold Museum
      - MUMOK

      ## Avusturya Mutfağı

      ### Mutlaka Denenmesi Gerekenler
      - Wiener Schnitzel
      - Sacher Torte
      - Apfelstrudel
      - Tafelspitz
      - Viyana Kahvesi

      ### En İyi Restoranlar
      | Restoran | Mutfak | Özellikler | Fiyat Aralığı |
      | Steirereck | Avusturya | 2 Michelin yıldızı | 150-200€ |
      | Figlmüller | Geleneksel | Schnitzel | 30-50€ |
      | Café Central | Viyana | Tarihi kafe | 20-30€ |

      ## Klasik Müzik

      ### Konser Mekanları
      - Viyana Opera Binası
      - Musikverein
      - Konzerthaus
      - Staatsoper

      ### Özel Deneyimler
      - Opera turu
      - Klasik müzik konseri
      - Mozart konseri
      - Strauss konseri

      ## Alışveriş Rehberi

      ### Popüler Alışveriş Bölgeleri
      - Kärntner Straße
      - Graben
      - Mariahilfer Straße
      - Naschmarkt

      ### Vergi İadesi
      - Minimum alışveriş: 75€
      - İade oranı: %20
      - İşlem süresi: 3-6 ay
      - Havaalanında iade noktaları

      ## Ulaşım

      ### Toplu Taşıma
      - Metro: En ekonomik seçenek
      - Tramvay: Şehir merkezi
      - Otobüs: 24 saat hizmet
      - Taksi: 24 saat hizmet

      ### Havaalanı Transferi
      - CAT: 12€
      - Taksi: 35-45€
      - Özel transfer: 50-60€
      - Metro: 4.20€

      ## Özel Deneyimler

      ### Aktiviteler
      - Fiaker turu
      - Şarap tadımı
      - Çikolata workshop'u
      - Viyana vals dersi
      - Kafe kültürü turu

      ---
      *Son güncelleme: Mart 2024*
    `,
    keywords: [
      'viyana turu 2025',
      'schönbrunn sarayı',
      'viyana opera',
      'avusturya mutfağı',
      'yurt dışı tur',
      'schengen vizesi',
      'viyana gezilecek yerler',
      'viyana müzik',
      'viyana müzeler',
      'viyana kültür'
    ],
    metaDescription: '2025 Viyana turu rehberi, Schönbrunn Sarayı, Viyana Opera Binası ve şehrin en önemli turistik yerleri. Avusturya mutfağı, klasik müzik ve kültür turu için detaylı bilgi.'
  },
  {
    id: 24,
    title: "Bangkok Turu 2025: Uzakdoğu'nun Büyülü Başkenti",
    slug: "2025-bangkok-turu",
    category: "Yurt Dışı Turlar",
    excerpt: "2025 Bangkok turu rehberi: Tapınaklar, yüzen pazarlar ve Tay mutfağı. Tropikal atmosferde unutulmaz bir Uzakdoğu deneyimi için detaylı bilgiler.",
    content: `
      # Bangkok Turu Rehberi 2025

      Bangkok, Uzakdoğu'nun kalbinde yer alan, tapınakları, yüzen pazarları ve zengin kültürüyle büyüleyici bir şehirdir. Bu rehberde Bangkok'ta yapılacaklar, görülecek yerler ve özel deneyimler hakkında detaylı bilgiler bulabilirsiniz.

      ## 2025 Bangkok Tur Fiyatları

      ### Tur Paketleri
      | Paket Tipi | Fiyat | Süre | Dahil Hizmetler |
      | Standart Tur | 22.499₺ | 5 Gün | Uçak, Otel, Kahvaltı |
      | Premium Tur | 29.999₺ | 7 Gün | Business Uçak, 4* Otel |
      | Özel Tur | 39.999₺ | 10 Gün | VIP Hizmet, Özel Rehber |

      ## Sık Sorulan Sorular

      ### Bangkok'a Ne Zaman Gidilmeli?
      - En İyi Sezon: Kasım - Şubat
      - Yağışlı Sezon: Mayıs - Ekim
      - Festival Dönemi: Nisan (Songkran)

      ### Vize Gerekli mi?
      - 30 güne kadar vize gerekmez
      - Pasaport geçerlilik süresi: 6 ay
      - Sigorta önerilir
      - Giriş ücreti: Yok

      ### Uçak Bileti Dahil mi?
      - Evet, tur fiyatına dahil
      - Ekonomi sınıfı
      - Bagaj hakkı: 23 kg
      - İade ve değişiklik ücreti: 200€

      ## Gezilecek Yerler

      ### Tapınaklar
      - Wat Phra Kaew
        - Zümrüt Buda
        - Kraliyet sarayı
        - Tarihi duvar resimleri
      - Wat Arun
        - Şafak tapınağı
        - Çin porseleni süslemeler
        - Tepeden manzara
      - Wat Pho
        - Yatan Buda
        - Geleneksel masaj okulu
        - Tarihi bahçeler

      ### Pazarlar ve Alışveriş
      - Chatuchak Pazarı
      - Yüzen Pazar
      - MBK Center
      - Siam Paragon

      ## Tay Mutfağı

      ### Mutlaka Denenmesi Gerekenler
      - Pad Thai
      - Tom Yum
      - Som Tam
      - Mango Sticky Rice
      - Tay Kahvesi

      ### En İyi Restoranlar
      | Restoran | Mutfak | Özellikler | Fiyat Aralığı |
      | Nahm | Tay | Michelin yıldızlı | 100-150€ |
      | Jay Fai | Sokak | Yumurta omleti | 20-30€ |
      | Sühring | Alman | 2 Michelin yıldızı | 150-200€ |

      ## Kültürel Deneyimler

      ### Geleneksel Aktiviteler
      - Thai masajı
      - Meditasyon dersi
      - Yemek kursu
      - Budist ayinleri
      - Muay Thai dersi

      ## Ulaşım

      ### Şehir İçi Ulaşım
      - BTS (Hafif Raylı Sistem)
      - MRT (Metro)
      - Tuk-tuk
      - Taksi
      - Motosiklet taksi

      ### Havaalanı Transferi
      - Airport Rail Link: 45 THB
      - Taksi: 400-600 THB
      - Özel transfer: 800-1000 THB
      - Otobüs: 60 THB

      ## Özel Deneyimler

      ### Aktiviteler
      - Mekong nehir turu
      - Ayutthaya turu
      - Çin mahallesi turu
      - Gece pazarı turu
      - Spa ve masaj deneyimi

      ---
      *Son güncelleme: Mart 2024*
    `,
    keywords: [
      'bangkok turu 2025',
      'tayland tapınakları',
      'tay mutfağı',
      'yurt dışı tur',
      'bangkok gezilecek yerler',
      'bangkok alışveriş',
      'bangkok tapınaklar',
      'bangkok yüzen pazar',
      'bangkok ulaşım',
      'bangkok kültür'
    ],
    metaDescription: '2025 Bangkok turu rehberi, tapınaklar, yüzen pazarlar ve Tay mutfağı. Tropikal atmosferde unutulmaz bir Uzakdoğu deneyimi için detaylı bilgi.'
  },
  {
    id: 39,
    title: '2025 Budapeşte Turu: Tuna\'nın İki Yakasında Kültür',
    slug: '2025-budapest-turu',
    category: 'Yurt Dışı Turlar',
    excerpt: 'Budapeşte\'nin tarihi sokaklarında kültür turu. Termal banyolar, tarihi binalar ve şehrin eşsiz atmosferi.',
    content: `
      Budapeşte, Tuna Nehri'nin iki yakasında kurulu, termal banyoları, tarihi binaları ve zengin kültürüyle Avrupa'nın en etkileyici şehirlerinden biridir. Bu rehberde Budapeşte'de yapılacaklar, görülecek yerler ve özel deneyimler hakkında detaylı bilgiler bulabilirsiniz.

      ## 2025 Budapeşte Tur Fiyatları

      ### Tur Paketleri
      | Paket Tipi | Fiyat | Süre | Dahil Hizmetler |
      | Standart Tur | 12.999₺ | 3 Gün | Uçak, Otel, Kahvaltı |
      | Premium Tur | 18.999₺ | 5 Gün | Business Uçak, 4* Otel |
      | Özel Tur | 24.999₺ | 7 Gün | VIP Hizmet, Özel Rehber |

      ## Sık Sorulan Sorular

      ### Budapeşte'ye Ne Zaman Gidilmeli?
      - En İyi Sezon: Mayıs - Ekim
      - Yağışlı Sezon: Mart - Nisan
      - Festival Dönemi: Haziran (Budapest Spring Festival)

      ### Vize Gerekli mi?
      - 90 güne kadar vize gerekmez
      - Pasaport geçerlilik süresi: 6 ay  
      - Sigorta önerilir
      - Giriş ücreti: Yok

      ### Uçak Bileti Dahil mi?
      - Evet, tur fiyatına dahil
      - Ekonomi sınıfı
      - Bagaj hakkı: 23 kg
      - İade ve değişiklik ücreti: 200€ 

      ## Gezilecek Yerler

      ### Termal Banyolar
      - Gellért Fürdő
        - Termal su kaynakları
        - Tepeden manzara 
      ---
      *Son güncelleme: Mart 2024*
    `,
    keywords: [
      'budapeşte turu 2025',
      'macaristan',
      'tuna nehri',
      'termal banyolar',
      'budapeşte kültür',
      'budapeşte tarihi',
      'budapeşte ulaşım',
      'budapeşte konaklama',
      'budapeşte yemek',
      'budapeşte alışveriş'
    ],
    metaDescription: '2025 Budapeşte turu rehberi, termal banyolar, tarihi binalar ve şehrin en önemli turistik yerleri. Macar mutfağı, kültür turu ve termal deneyimler için detaylı bilgi.'
  }
];