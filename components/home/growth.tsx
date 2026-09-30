import CreateCourses from '@/components/home/create-courses';
import ProfessionalGrowth from '@/components/home/professional-growth';
import Glow from '@/components/shared/glow';

const Growth = () => {
  return (
    <section className="bg-surface-1 relative overflow-hidden py-20 lg:h-[1460px] lg:pt-[120px]">
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 h-full w-[1440px] -translate-x-1/2"
      >
        <Glow x={722} y={788} size={1137} color="blue" strength={0.24} />
        <Glow x={-152} y={-466} size={1137} color="lime" strength={0.4} />
        <Glow x={-508} y={183} size={1137} color="blue" strength={0.16} />
        <Glow x={811} y={-458} size={1137} color="blue" strength={0.08} />
        <Glow x={-287} y={946} size={672} color="lime" strength={0.6} />
      </div>

      <div className="main-container">
        <div className="relative space-y-20">
          <ProfessionalGrowth />
          <CreateCourses />
        </div>
      </div>
    </section>
  );
};

export default Growth;
