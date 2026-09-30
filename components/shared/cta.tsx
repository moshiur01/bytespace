import RevealAnimation from '@/components/animation/reveal-animation';
import TextReveal from '@/components/animation/text-reveal';
import Ornament from '@/components/shared/ornament';
import ButtonLime from '@/components/shared/ui/button/button-lime';
import coneWhite from '@/public/images/3d/cone-white.png';
import cylinderWhite from '@/public/images/3d/cylinder-white.png';
import pyramidLime from '@/public/images/3d/pyramid-lime.png';
import springALime from '@/public/images/3d/spring-a-lime.png';
import springBLime from '@/public/images/3d/spring-b-lime.png';
import springBWhite from '@/public/images/3d/spring-b-white.png';
import torusLime from '@/public/images/3d/torus-lime.png';

const Cta = () => {
  return (
    <section className="bg-grid-lines bg-primary-800 relative overflow-hidden lg:h-[488px]">
      <div className="main-container relative space-y-10 py-20 text-center lg:pt-[85px] lg:pb-0">
        <TextReveal>
          <h2 className="text-shuttle-50 sm:text-heading-m mx-auto max-w-[710px] text-[32px] leading-[1.2] tracking-[-0.01em]">
            Unlock Your Potential as a Creator with ByteSpace
          </h2>
        </TextReveal>
        <RevealAnimation delay={0.2}>
          <p className="text-body-m text-shuttle-50 sm:text-body-l mx-auto max-w-[964px]">
            Experience the collaboration of numerous creators and an expanding selection of courses.
            Register now and become a part of a community comprising over 10,000 local and
            international creators. Utilize our Course Editor, and showcase your expertise by
            publishing your finest course on the ByteSpace Course Library.
          </p>
        </RevealAnimation>
        <RevealAnimation delay={0.35}>
          <ButtonLime href="/register" className="relative z-10 w-[172px]">
            Join as Creator
          </ButtonLime>
        </RevealAnimation>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 hidden h-full w-[1440px] -translate-x-1/2 lg:block"
      >
        <Ornament src={pyramidLime} x={1078} y={-0.4} size={188.9} />
        <Ornament src={springALime} x={1106.9} y={289} size={331.5} />
        <Ornament src={springBLime} x={-121.6} y={-162} size={386.8} />
        <Ornament src={springBWhite} x={178.8} y={5} size={175.8} flip />
        <Ornament src={coneWhite} x={-50} y={224.6} size={188.9} />
        <Ornament src={torusLime} x={16.4} y={298.3} size={343.7} />
        <Ornament src={cylinderWhite} x={1222.1} y={5.2} size={371.8} />
      </div>
    </section>
  );
};

export default Cta;
