import CourseFilter from '@/components/home/course-filter';
import SectionHeading from '@/components/shared/section-heading';

const DiscoverCourses = () => {
  return (
    <section className="main-container pt-[72px]">
      <SectionHeading
        title="Discover Your Passion, Build Your Skills"
        titleClassName="max-w-[588px]"
        description="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
      />
      <CourseFilter />
    </section>
  );
};

export default DiscoverCourses;
