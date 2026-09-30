import RevealAnimation from '@/components/animation/reveal-animation';
import TextReveal from '@/components/animation/text-reveal';
import Ornament from '@/components/shared/ornament';
import SearchBar from '@/components/shared/search-bar';
import CategoryStatCard from '@/components/shared/ui/cards/category-stat-card';
import HappyStudentsCard from '@/components/shared/ui/cards/happy-students-card';
import LearningProgressCard from '@/components/shared/ui/cards/learning-progress-card';
import cylinderLime from '@/public/images/3d/cylinder-lime.png';
import pyramidWhite from '@/public/images/3d/pyramid-white.png';
import springAWhite from '@/public/images/3d/spring-a-white.png';
import springBLime from '@/public/images/3d/spring-b-lime.png';
import springBWhite from '@/public/images/3d/spring-b-white.png';
import torusWhite from '@/public/images/3d/torus-white.png';
import studentBoy from '@/public/images/hero/student-boy.png';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="bg-grid-lines bg-primary-800 relative overflow-hidden lg:h-[1024px]">
      {/* 1440 artboard: decorative layer below the copy */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 hidden h-full w-[1440px] -translate-x-1/2 lg:block"
      >
        {/* 1149px circle with a 320px inside stroke */}
        <div className="border-accent-500 absolute top-[582px] left-[145px] size-[1149px] rounded-full border-[320px]" />
      </div>

      <div className="main-container relative flex flex-col items-center pt-40 pb-16 text-center lg:pt-[169px] lg:pb-0">
        <TextReveal>
          <h1 className="lg:text-heading-l max-w-[935px] text-[40px] leading-[1.2] tracking-[-0.01em] text-white sm:text-6xl">
            Get Access to Hundreds Courses Available
          </h1>
        </TextReveal>
        <RevealAnimation delay={0.3}>
          <p className="text-body-m text-shuttle-100 sm:text-body-l mt-8 max-w-[819px]">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide
            range of courses.
          </p>
        </RevealAnimation>
        <RevealAnimation asChild={false} delay={0.45} className="mt-[60px] w-full max-w-[581px]">
          <SearchBar />
        </RevealAnimation>

        {/* below lg: photo with the three cards floating over it */}
        <div className="relative mt-12 w-full max-w-[578px] text-left lg:hidden">
          <Image
            src={studentBoy}
            alt="Smiling student with headphones holding a laptop"
            priority
            sizes="(min-width: 640px) 578px, 100vw"
            className="drop-shadow-photo w-full"
          />
          <CategoryStatCard
            title="UI/UX Design"
            courses={200}
            students={1000}
            className="absolute top-[22%] left-0 origin-top-left scale-[0.65] sm:scale-90"
          />
          <LearningProgressCard className="absolute top-[26%] right-0 origin-top-right scale-[0.65] sm:scale-90" />
          <HappyStudentsCard className="absolute bottom-[6%] left-0 origin-bottom-left scale-[0.65] sm:scale-90" />
        </div>
      </div>

      {/* 1440 artboard: photo, floating cards and 3D shapes */}
      <div className="pointer-events-none absolute top-0 left-1/2 hidden h-full w-[1440px] -translate-x-1/2 lg:block">
        <RevealAnimation delay={0.5} offset={80} blur={0}>
          <Image
            src={studentBoy}
            alt="Smiling student with headphones holding a laptop"
            priority
            sizes="578px"
            className="drop-shadow-photo absolute top-[512px] left-[431px] h-[541px] w-[578px] max-w-none"
          />
        </RevealAnimation>
        <RevealAnimation
          asChild={false}
          delay={0.8}
          direction="left"
          offset={40}
          className="absolute top-[651px] left-[842px]"
        >
          <LearningProgressCard className="h-[131px]" />
        </RevealAnimation>
        <RevealAnimation
          asChild={false}
          delay={0.9}
          direction="right"
          offset={40}
          className="absolute top-[837px] left-[328px]"
        >
          <HappyStudentsCard className="h-[121px]" />
        </RevealAnimation>

        <RevealAnimation delay={0.6} offset={40} blur={0}>
          <Ornament src={springBLime} x={-121.6} y={221} size={386.8} />
        </RevealAnimation>
        <RevealAnimation delay={0.6} offset={40} blur={0}>
          <Ornament src={springBWhite} x={183.8} y={477} size={175.8} flip />
        </RevealAnimation>
        <RevealAnimation delay={0.6} offset={40} blur={0}>
          <Ornament src={torusWhite} x={14.4} y={681.3} size={343.7} />
        </RevealAnimation>
        <RevealAnimation delay={0.6} offset={40} blur={0}>
          <Ornament src={cylinderLime} x={1227.1} y={220.2} size={371.8} />
        </RevealAnimation>
        <RevealAnimation delay={0.6} offset={40} blur={0}>
          <Ornament src={pyramidWhite} x={1104} y={463.6} size={188.9} />
        </RevealAnimation>
        <RevealAnimation delay={0.6} offset={40} blur={0}>
          <Ornament src={springAWhite} x={1123.9} y={672} size={331.5} />
        </RevealAnimation>

        <RevealAnimation
          asChild={false}
          delay={1}
          direction="right"
          offset={40}
          className="absolute top-[639px] left-[404px]"
        >
          <CategoryStatCard title="UI/UX Design" courses={200} students={1000} />
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Hero;
