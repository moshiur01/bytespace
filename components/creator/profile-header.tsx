import RevealAnimation from '@/components/animation/reveal-animation';
import TextReveal from '@/components/animation/text-reveal';
import FollowButton from '@/components/creator/follow-button';
import type { Creator } from '@/data/creators';
import Image from 'next/image';

interface ProfileHeaderProps {
  creator: Creator;
}

const ProfileHeader = ({ creator }: ProfileHeaderProps) => {
  return (
    <section className="bg-grid-lines bg-primary-800 relative overflow-hidden">
      <div className="pt-36 pb-16 lg:h-[592px] lg:pt-[172px] lg:pb-0 lg:pl-[22px]">
        <div className="main-container">
          <div className="space-y-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <RevealAnimation direction="left" offset={40}>
                <Image
                  src={creator.avatar}
                  alt={creator.name}
                  priority
                  sizes="96px"
                  className="size-24 shrink-0 rounded-3xl object-cover"
                />
              </RevealAnimation>
              <div className="space-y-2">
                <div className="flex flex-wrap items-start gap-2">
                  <TextReveal>
                    <h1 className="font-poppins text-shuttle-50 sm:text-heading-s text-[30px] leading-[1.2] font-semibold tracking-[-0.01em]">
                      {creator.name}
                    </h1>
                  </TextReveal>
                  <RevealAnimation delay={0.2}>
                    <span className="bg-accent-400 text-label-m text-shuttle-950 flex h-[35px] items-center rounded-3xl px-6 font-medium backdrop-blur-[20px]">
                      {creator.badge}
                    </span>
                  </RevealAnimation>
                </div>
                <TextReveal delay={0.3}>
                  <p className="text-body-l text-shuttle-50">{creator.role}</p>
                </TextReveal>
              </div>
            </div>

            <RevealAnimation delay={0.2}>
              <div className="text-body-m text-shuttle-50 sm:text-body-l max-w-[1197px]">
                {creator.bio.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </RevealAnimation>
          </div>
          <RevealAnimation delay={0.3}>
            <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
              <ul className="flex flex-wrap gap-4">
                {creator.stats.map((stat) => (
                  <li
                    key={stat.label}
                    className="text-label-l flex h-[46px] items-center gap-2 rounded-3xl bg-white px-6 font-medium backdrop-blur-[20px]"
                  >
                    <span className="text-primary-800">{stat.value}</span>
                    <span className="text-shuttle-950">{stat.label}</span>
                  </li>
                ))}
              </ul>
              <FollowButton />
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default ProfileHeader;
