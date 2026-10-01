import RevealAnimation from '@/components/animation/reveal-animation';
import TextReveal from '@/components/animation/text-reveal';
import AuthShowcase from '@/components/auth/auth-showcase';
import LoginForm from '@/components/auth/login-form';
import { generateMetadata } from '@/utils/generateMetaData';
import type { Metadata } from 'next';

export const metadata: Metadata = generateMetadata(
  'Sign In || ByteSpace',
  'Sign in to ByteSpace and pick up your courses right where you left off.',
  '/login'
);

const Page = () => {
  return (
    <div className="flex flex-col items-center gap-10 xl:flex-row xl:items-start xl:justify-between xl:gap-6">
      <div className="relative w-full max-w-[579px] xl:h-[784px] xl:max-w-none xl:flex-1">
        <div className="text-shuttle-50 max-w-[475px] space-y-4">
          <TextReveal>
            <h2 className="font-poppins text-heading-xs font-semibold">Sign in with ease</h2>
          </TextReveal>
          <RevealAnimation delay={0.15}>
            <p className="text-body-m sm:text-body-l">
              Experience a seamless and efficient sign-in process that grants you instant access to
              a world of knowledge.
            </p>
          </RevealAnimation>
        </div>
        <RevealAnimation
          asChild={false}
          delay={0.3}
          className="absolute top-[185px] -left-[25px] hidden xl:block"
        >
          <AuthShowcase className="origin-top-left xl:max-[1343px]:scale-[0.85]" />
        </RevealAnimation>
      </div>

      <RevealAnimation delay={0.2} direction="right" offset={60}>
        <div className="w-full max-w-[579px] rounded-3xl bg-white px-5 py-8 sm:px-10 sm:py-12 xl:h-[784px] xl:w-[579px] xl:shrink-0 xl:px-[63px] xl:pt-[61px] xl:pb-0">
          <LoginForm />
        </div>
      </RevealAnimation>
    </div>
  );
};

export default Page;
