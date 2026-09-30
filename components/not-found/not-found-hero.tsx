import RevealAnimation from '@/components/animation/reveal-animation';
import TextReveal from '@/components/animation/text-reveal';
import ButtonLime from '@/components/shared/ui/button/button-lime';

// Figma: lime -> transparent white, top to bottom, clipped to the glyphs
const digitsGradient =
  'linear-gradient(180deg, #d4fb20 0%, rgb(212 251 32 / 0.96) 25%, rgb(212 251 32 / 0.81) 50.5%, rgb(212 251 32 / 0.61) 68%, rgb(255 255 255 / 0) 100%)';

const NotFoundHero = () => {
  return (
    <section className="bg-primary-800 relative overflow-hidden lg:mb-[3px] lg:h-[957px]">
      <div className="flex flex-col items-center pt-36 pb-20 text-center lg:pt-40 lg:pb-0">
        <div className="main-container">
          <RevealAnimation offset={80}>
            <p
              aria-hidden="true"
              className="font-poppins bg-clip-text text-[160px] leading-none font-semibold tracking-[-0.01em] text-transparent select-none sm:text-[280px] lg:text-[480px]"
              style={{ backgroundImage: digitsGradient }}
            >
              404
            </p>
          </RevealAnimation>

          <div aria-hidden="true" className="bg-grid-lines pointer-events-none absolute inset-0" />

          <div className="relative mx-auto -mt-6 max-w-[935px] space-y-8 sm:-mt-[70px] lg:-mt-[119px]">
            <TextReveal delay={0.2}>
              <h1 className="font-poppins lg:text-heading-l mx-auto text-center text-[40px] leading-[1.2] font-semibold tracking-[-0.01em] text-white sm:text-6xl">
                The page you are looking for doesn’t exist
              </h1>
            </TextReveal>
            <RevealAnimation delay={0.35}>
              <p className="text-body-m text-shuttle-100 sm:text-body-l">
                Try to use a correct url or go back to homepage to start again
              </p>
            </RevealAnimation>
            <RevealAnimation delay={0.5}>
              <ButtonLime href="/">Back to Home</ButtonLime>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFoundHero;
