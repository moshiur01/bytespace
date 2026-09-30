import RevealAnimation from '@/components/animation/reveal-animation';
import TextReveal from '@/components/animation/text-reveal';
import Glow from '@/components/shared/glow';
import { testimonials } from '@/data/testimonials';
import Image from 'next/image';

const Testimonials = () => {
  return (
    <section className="bg-surface-1 relative overflow-hidden py-20 lg:h-[784px] lg:pt-[74px] lg:pb-0">
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 h-full w-[1440px] -translate-x-1/2"
      >
        <Glow x={842} y={-241} size={1137} color="lime" strength={0.4} />
        <Glow x={395} y={-138} size={672} color="lime" strength={0.6} />
        <Glow x={-442} y={149} size={1137} color="blue" strength={0.24} />
      </div>

      <div className="relative mx-auto w-full max-w-[1244px] px-5">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:gap-[43px]">
          <TextReveal>
            <h2 className="sm:text-heading-m text-[32px] leading-[1.2] tracking-[-0.01em] text-black lg:w-[577px] lg:shrink-0">
              Discover What Our Community Is Saying
            </h2>
          </TextReveal>
          <RevealAnimation delay={0.2}>
            <p className="text-body-m sm:text-body-l text-neutral-700 lg:w-[580px]">
              At ByteSpace, our vibrant community of learners and creators is at the heart of what
              we do. Hear directly from those who have experienced the transformative journey of
              learning and creating on our platform. Explore testimonials that reflect the diverse
              perspectives of enthusiastic learners and accomplished creators.
            </p>
          </RevealAnimation>
        </div>

        <ul className="mt-[72px] grid grid-cols-1 items-start gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-[41px]">
          {testimonials.map((item, index) => (
            <RevealAnimation key={item.name} delay={index * 0.12}>
              <li className="flex flex-col gap-6 rounded-3xl bg-white p-6">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="size-20 rounded-full object-cover"
                />
                <div>
                  <p className="font-poppins text-heading-xs font-semibold text-black">
                    {item.name}
                  </p>
                  <p className="text-body-l text-primary-800">{item.role}</p>
                </div>
                <blockquote className="text-body-l text-neutral-700">{item.quote}</blockquote>
              </li>
            </RevealAnimation>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Testimonials;
