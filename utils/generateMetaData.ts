import type { Metadata } from 'next';

export const DEFAULT_URL = 'https://bytespace-next.vercel.app/';
export const DEFAULT_TITLE = 'ByteSpace || Online Courses';
export const DEFAULT_DESCRIPTION =
  'Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.';
/** 1200x630 social preview, served from /public */
export const DEFAULT_IMAGE = {
  url: '/og-image.png',
  width: 1200,
  height: 630,
  alt: 'ByteSpace — Get Access to Hundreds Courses Available',
};

const defaultMetadata: Metadata = {
  metadataBase: new URL(DEFAULT_URL),
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  applicationName: 'ByteSpace',
  icons: { icon: [{ url: '/favicon.svg', type: 'image/svg+xml', sizes: 'any' }] },
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: 'ByteSpace',
    locale: 'en_US',
    url: '/',
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [DEFAULT_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [DEFAULT_IMAGE.url],
  },
};

/**
 * Page metadata on top of the site defaults.
 * @param path route path (e.g. '/courses'), resolved against the site URL for canonical + og:url
 */
const generateMetadata = (title?: string, description?: string, path = '/'): Metadata => {
  const pageTitle = title ?? DEFAULT_TITLE;
  const pageDescription = description ?? DEFAULT_DESCRIPTION;

  return {
    ...defaultMetadata,
    title: pageTitle,
    description: pageDescription,
    alternates: { canonical: path },
    openGraph: {
      ...defaultMetadata.openGraph,
      title: pageTitle,
      description: pageDescription,
      url: path,
    },
    twitter: {
      ...defaultMetadata.twitter,
      title: pageTitle,
      description: pageDescription,
    },
  };
};

export { defaultMetadata, generateMetadata };
