import { MetadataRoute } from 'next';
import yachtData from '../data/yat/services.json';
import villaData from '../data/villa/services.json';
import jetData from '../data/ozel-jet/services.json';
import transferData from '../data/transfer/services.json';
import turData from '../data/tur/services.json';
import bungalovData from '../data/bungalov/services.json';
import { createUrlSlug } from '../lib/utils';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://365kirala.com';

  // Ana sayfalar
  const staticPages = [
    '',
    '/hakkimizda',
    '/iletisim',
    '/yat',
    '/villa',
    '/ozel-jet',
    '/transfer',
    '/tur',
    '/bungalov',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Dinamik sayfalar
  const yachtPages = yachtData.items.map((yacht) => {
    const slug = createUrlSlug(yacht.title);
    return {
      url: `${baseUrl}/yat/${yacht.id}-${slug}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    };
  });

  const villaPages = villaData.items.map((villa) => {
    const slug = createUrlSlug(villa.title);
    return {
      url: `${baseUrl}/villa/${villa.id}-${slug}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    };
  });

  const jetPages = jetData.items.map((jet) => {
    const slug = createUrlSlug(jet.title);
    return {
      url: `${baseUrl}/ozel-jet/${jet.id}-${slug}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    };
  });

  const transferPages = transferData.items.map((transfer) => {
    const slug = createUrlSlug(transfer.title);
    return {
      url: `${baseUrl}/transfer/${transfer.id}-${slug}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    };
  });

  const turPages = turData.items.map((tur) => {
    const slug = createUrlSlug(tur.title);
    return {
      url: `${baseUrl}/tur/${tur.id}-${slug}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    };
  });

  const bungalovPages = bungalovData.items.map((bungalov) => {
    const slug = createUrlSlug(bungalov.title);
    return {
      url: `${baseUrl}/bungalov/${bungalov.id}-${slug}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    };
  });

  return [
    ...staticPages,
    ...yachtPages,
    ...villaPages,
    ...jetPages,
    ...transferPages,
    ...turPages,
    ...bungalovPages,
  ];
} 