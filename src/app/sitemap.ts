import { MetadataRoute } from 'next';
import jetData from '../data/ozel-jet/services.json';
import villaData from '../data/villa/services.json';
import yachtData from '../data/yat/services.json';
import transferData from '../data/transfer/services.json';
import bungalovData from '../data/bungalov/services.json';
import turData from '../data/tur/services.json';
import { createUrlSlug } from '../lib/utils';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://365kirala.com';
  const currentDate = new Date();

  // Ana sayfalar
  const staticPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/ozel-jet`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/villa`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/yat`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/transfer`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/bungalov`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tur`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/gunluk-tur`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/hakkimizda`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/iletisim`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ];

  // Dinamik sayfalar
  const jetPages = jetData.items.map((jet) => ({
    url: `${baseUrl}/ozel-jet/${jet.id}-${createUrlSlug(jet.title)}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const villaPages = villaData.items.map((villa) => ({
    url: `${baseUrl}/villa/${villa.id}-${createUrlSlug(villa.title)}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const yachtPages = yachtData.items.map((yacht) => ({
    url: `${baseUrl}/yat/${yacht.id}-${createUrlSlug(yacht.title)}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const transferPages = transferData.items.map((transfer) => ({
    url: `${baseUrl}/transfer/${transfer.id}-${createUrlSlug(transfer.title)}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const bungalovPages = bungalovData.items.map((bungalov) => ({
    url: `${baseUrl}/bungalov/${bungalov.id}-${createUrlSlug(bungalov.title)}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const turPages = turData.items.map((tur) => ({
    url: `${baseUrl}/tur/${tur.id}-${createUrlSlug(tur.title)}`,
    lastModified: currentDate,
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
    ...turPages,
  ];
} 