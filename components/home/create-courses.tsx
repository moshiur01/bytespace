import RevealAnimation from '@/components/animation/reveal-animation';
import TextReveal from '@/components/animation/text-reveal';
import { CheckCircleIcon } from '@/components/shared/icon';
import Ornament from '@/components/shared/ornament';
import HappyStudentsCard from '@/components/shared/ui/cards/happy-students-card';
import springBLime from '@/public/images/3d/spring-b-lime.png';
import studentGirl from '@/public/images/hero/student-girl.png';
import Image from 'next/image';

const perks = [
  'Share Your Expertise',
  'Monetize Your Passion',
  'Flexibility and Autonomy',
  'Build a Community',
];

const RevenuePill = () => (
  <span className="bg-accent-500 text-shuttle-950 flex h-6 items-center rounded-3xl px-2 text-[10px] leading-5 font-medium">
    +12$
  </span>
);

/** Growth section, row 2: creator revenue collage beside the create & manage copy + perks */
const CreateCourses = () => {
  return (
    <div className="flex flex-col-reverse items-center gap-16 lg:flex-row lg:gap-[79px]">
      <RevealAnimation delay={0.2} offset={80}>
        <div className="relative hidden h-[596px] w-[541px] shrink-0 lg:block">
          <div className="bg-primary-800 text-shuttle-50 absolute top-11 left-0 flex w-[232px] flex-col gap-2 rounded-2xl p-4 backdrop-blur-[10px]">
            <div>
              <p className="text-label-m font-medium">Total Revenue</p>
              <p className="text-[10px] leading-[1.2]">July 1-28</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="font-poppins text-heading-2xs font-semibold">$120.29</p>
              <RevenuePill />
            </div>
            <div className="h-2 w-full overflow-hidden rounded-3xl bg-white">
              <div className="bg-accent-400 h-full w-[56%] rounded-3xl" />
            </div>
          </div>
          <div className="bg-primary-800 text-shuttle-50 absolute top-[194px] left-0 flex w-[134px] flex-col items-start gap-2 rounded-2xl p-4 backdrop-blur-[10px]">
            <div>
              <p className="text-label-m font-medium">Year to Date</p>
              <p className="text-[10px] leading-[1.2]">2023</p>
            </div>
            <p className="font-poppins text-heading-2xs font-semibold">$1,200.38</p>
            <RevenuePill />
          </div>
          <Image
            src={studentGirl}
            alt="Creator smiling with headphones"
            sizes="435px"
            className="drop-shadow-photo absolute top-0 left-7 h-[596px] w-[435px] max-w-none"
          />
          <HappyStudentsCard compact className="absolute top-[413px] left-[283px] h-[123px]" />
          <Ornament src={springBLime} x={303} y={114} size={216} />
        </div>
      </RevealAnimation>

      <div className="w-full space-y-10 lg:w-[580px]">
        <TextReveal>
          <h2 className="text-shuttle-950 sm:text-heading-m text-[32px] leading-[1.2] tracking-[-0.01em] lg:w-[391px]">
            Create &amp; Manage Courses Easily.
          </h2>
        </TextReveal>
        <RevealAnimation delay={0.2}>
          <p className="text-body-m text-shuttle-700 sm:text-body-l sm:leading-7 lg:w-[574px]">
            <strong className="text-shuttle-950 font-bold">ByteSpace</strong> supports individuals
            or entities in the creation, publication, and administration of educational courses.
          </p>
        </RevealAnimation>
        <RevealAnimation delay={0.3}>
          <ul className="space-y-4">
            {perks.map((perk) => (
              <li key={perk} className="flex items-end gap-2">
                <CheckCircleIcon className="text-primary-800 shrink-0" />
                <span className="text-label-l text-shuttle-950 font-medium">{perk}</span>
              </li>
            ))}
          </ul>
        </RevealAnimation>
      </div>
    </div>
  );
};

export default CreateCourses;
