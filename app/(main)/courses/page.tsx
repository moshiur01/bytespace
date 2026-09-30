import CourseBrowser from '@/components/courses/course-browser';
import SearchHero from '@/components/courses/search-hero';
import { generateMetadata } from '@/utils/generateMetaData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  ...generateMetadata(),
  title: 'ByteSpace || Find Your Next Course',
};

interface PageProps {
  searchParams: Promise<{ q?: string | string[] }>;
}

const Page = async ({ searchParams }: PageProps) => {
  const { q } = await searchParams;
  const query = (Array.isArray(q) ? q[0] : q)?.trim() ?? '';

  return (
    <>
      <SearchHero query={query} />
      <CourseBrowser key={query} query={query} />
    </>
  );
};

export default Page;
