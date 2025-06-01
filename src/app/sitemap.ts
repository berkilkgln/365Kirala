import { MetadataRoute } from 'next';
import jetData from '../data/ozel-jet/services.json';
import villaData from '../data/villa/services.json';
import yachtData from '../data/yat/services.json';
import transferData from '../data/transfer/services.json';
import bungalovData from '../data/bungalov/services.json';
import { createUrlSlug } from '../lib/utils';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://365kirala.com';

  // Ana sayfalar
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/ozel-jet`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/villa`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/yat`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/transfer`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/bungalov`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/hakkimizda`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/iletisim`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ];

  // Dinamik sayfalar
  const jetPages = jetData.items.map((jet) => ({
    url: `${baseUrl}/ozel-jet/${jet.id}-${createUrlSlug(jet.title)}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const villaPages = villaData.items.map((villa) => ({
    url: `${baseUrl}/villa/${villa.id}-${createUrlSlug(villa.title)}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const yachtPages = yachtData.items.map((yacht) => ({
    url: `${baseUrl}/yat/${yacht.id}-${createUrlSlug(yacht.title)}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const transferPages = transferData.items.map((transfer) => ({
    url: `${baseUrl}/transfer/${transfer.id}-${createUrlSlug(transfer.title)}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const bungalovPages = bungalovData.items.map((bungalov) => ({
    url: `${baseUrl}/bungalov/${bungalov.id}-${createUrlSlug(bungalov.title)}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    ...staticPages,
    ...jetPages,
    ...villaPages,
    ...yachtPages,
    ...transferPages,
    ...bungalovPages,
  ];
} 