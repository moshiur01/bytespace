import AboutTab from '@/components/course-details/about-tab';
import CourseTabPanel from '@/components/course-details/course-tab-panel';
import { getCourseHeadline } from '@/data/course-details';
import { getCourse } from '@/data/courses';
import { generateMetadata as buildMetadata } from '@/utils/generateMetaData';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
  const course = getCourse((await params).slug);
  if (!course) return buildMetadata();
  return buildMetadata(
    `${getCourseHeadline(course)} || ByteSpace`,
    'Build digital assets with expert guidance: course description, sneak peek and key points.',
    `/courses/${course.slug}`
  );
};

const Page = async ({ params }: PageProps) => {
  const { slug } = await params;

  return (
    <CourseTabPanel slug={slug} className="xl:pt-[62.5px] xl:pb-[64.5px]">
      <AboutTab />
    </CourseTabPanel>
  );
};

export default Page;
