import RevealAnimation from '@/components/animation/reveal-animation';
import TextReveal from '@/components/animation/text-reveal';
import AuthShowcase from '@/components/auth/auth-showcase';
import type { ReactNode } from 'react';

interface AuthSplitProps {
  title: string;
  description: string;

  mutedRating?: boolean;
  children: ReactNode;
}

const AuthSplit = ({ title, description, mutedRating, children }: AuthSplitProps) => {
  return (
    <div className="flex flex-col items-center gap-10 xl:flex-row xl:items-start xl:justify-between xl:gap-6">
      <div className="relative w-full max-w-[579px] xl:h-[784px] xl:max-w-none xl:flex-1">
        <div className="text-shuttle-50 max-w-[475px] space-y-4">
          <TextReveal>
            <h2 className="font-poppins text-heading-xs font-semibold">{title}</h2>
          </TextReveal>
          <RevealAnimation delay={0.15}>
            <p className="text-body-m sm:text-body-l">{description}</p>
          </RevealAnimation>
        </div>
        <RevealAnimation
          asChild={false}
          delay={0.3}
          className="absolute top-[185px] -left-[25px] hidden xl:block"
        >
          <AuthShowcase
            mutedRating={mutedRating}
            className="origin-top-left xl:max-[1343px]:scale-[0.85]"
          />
        </RevealAnimation>
      </div>

      <RevealAnimation delay={0.2} direction="right" offset={60}>
        <div className="w-full max-w-[579px] rounded-3xl bg-white px-5 py-8 sm:px-10 sm:py-12 xl:h-[784px] xl:w-[579px] xl:shrink-0 xl:px-[63px] xl:pt-[61px] xl:pb-0">
          {children}
        </div>
      </RevealAnimation>
    </div>
  );
};

export default AuthSplit;
