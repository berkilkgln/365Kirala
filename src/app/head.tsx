export default function Head() {
    return (
      <>
        <title>365Kirala - Lüks kiralama platformu</title>
        <meta name="description" content="365Kirala ile lüks araç, yat, villa ve özel jet kiralayın. Güvenli ve hızlı rezervasyon." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
  
        <link rel="canonical" href="https://365kirala.com" />
        <link rel="icon" href="/images/logo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/logo.png" />
        <link rel="manifest" href="/site.webmanifest" />
  
        <meta name="theme-color" content="#0D0D0D" />
  
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://365kirala.com" />
        <meta property="og:title" content="365Kirala - Lüks kiralama platformu" />
        <meta property="og:description" content="365Kirala ile lüks araç, yat, villa ve özel jet kiralayın. Güvenli ve hızlı rezervasyon." />
        <meta property="og:image" content="https://365kirala.com/images/logo.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
  
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: '365Kirala',
              url: 'https://365kirala.com',
              logo: 'https://365kirala.com/logo.png',
              sameAs: [
                'https://instagram.com/365kirala',
              ],
            }),
          }}
        />
      </>
    );
  }
  