import DiscoverCourses from '@/components/home/discover-courses';
import Growth from '@/components/home/growth';
import Hero from '@/components/home/hero';
import LearningPaths from '@/components/home/learning-paths';
import Partners from '@/components/home/partners';
import Testimonials from '@/components/home/testimonials';
import Cta from '@/components/shared/cta';
import { generateMetadata } from '@/utils/generateMetaData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  ...generateMetadata(),
  title: 'ByteSpace || Online Courses',
};

const Page = () => {
  return (
    <>
      <Hero />
      <Partners />
      <DiscoverCourses />
      <LearningPaths />
      <Growth />
      <Cta />
      <Testimonials />
    </>
  );
};

export default Page;
