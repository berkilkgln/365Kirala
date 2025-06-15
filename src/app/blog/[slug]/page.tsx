import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { blogPosts } from '../../../types/blog';
import BlogDetailPageClient from './BlogDetailPageClient';

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find(post => post.slug === slug);

  if (!post) {
    return {
      title: 'Yazı Bulunamadı - 365Kirala Blog',
      description: 'Aradığınız lüks yaşam ve seyahat blog yazısı bulunamadı.',
      robots: 'noindex, follow',
    };
  }

  const canonicalUrl = `https://365kirala.com/blog/${post.slug}`;

  return {
    title: `${post.title} - 365Kirala Blog`,
    description: post.metaDescription,
    keywords: post.keywords.join(', '),
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      type: 'article',
      url: canonicalUrl,
      siteName: '365Kirala Blog',
    },
    twitter: {
      card: 'summary',
      title: post.title,
      description: post.metaDescription,
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

async function getPost(slug: string) {
  return blogPosts.find(post => post.slug === slug) || null;
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div>
      <BlogDetailPageClient post={post} />
    </div>
  );
} 