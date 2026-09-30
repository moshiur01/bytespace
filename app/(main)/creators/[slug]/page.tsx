import CreatorCourses from '@/components/creator/creator-courses';
import ProfileHeader from '@/components/creator/profile-header';
import { creators, getCreator, getCreatorCourses } from '@/data/creators';
import { generateMetadata as buildMetadata } from '@/utils/generateMetaData';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export const generateStaticParams = () => creators.map((creator) => ({ slug: creator.slug }));

export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
  const creator = getCreator((await params).slug);
  if (!creator) return buildMetadata();
  return buildMetadata(`${creator.name} || ByteSpace Creator`, creator.bio[0]);
};

const Page = async ({ params }: PageProps) => {
  const creator = getCreator((await params).slug);
  if (!creator) notFound();

  return (
    <>
      <ProfileHeader creator={creator} />
      <CreatorCourses courses={getCreatorCourses(creator)} />
    </>
  );
};

export default Page;
