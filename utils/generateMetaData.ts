import type { Metadata } from 'next';

export const DEFAULT_URL = 'https://bytespace.example.com/';
export const DEFAULT_TITLE = 'ByteSpace - Online Courses';
export const DEFAULT_DESCRIPTION =
  'Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.';

const defaultMetadata: Metadata = {
  metadataBase: new URL(DEFAULT_URL),
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  icons: { icon: [{ url: '/favicon.svg', type: 'image/svg+xml', sizes: 'any' }] },
  openGraph: {
    type: 'website',
    siteName: 'ByteSpace',
    url: DEFAULT_URL,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
};

const generateMetadata = (title?: string, description?: string, canonicalUrl?: string): Metadata => {
  return {
    ...defaultMetadata,
    title: title ?? defaultMetadata.title,
    description: description ?? defaultMetadata.description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      ...defaultMetadata.openGraph,
      title: title ?? defaultMetadata.openGraph?.title,
      description: description ?? defaultMetadata.description ?? undefined,
      url: canonicalUrl ?? defaultMetadata.openGraph?.url,
    },
    twitter: {
      ...defaultMetadata.twitter,
      title: title ?? defaultMetadata.twitter?.title,
      description: description ?? defaultMetadata.description ?? undefined,
    },
  };
};

export { defaultMetadata, generateMetadata };
