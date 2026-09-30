import RevealAnimation from '@/components/animation/reveal-animation';
import {
  PartnerLogo1,
  PartnerLogo2,
  PartnerLogo3,
  PartnerLogo4,
  PartnerLogo5,
} from '@/components/shared/icon';

const logos = [PartnerLogo1, PartnerLogo2, PartnerLogo3, PartnerLogo4, PartnerLogo5];

const Partners = () => {
  return (
    <section aria-label="Partners" className="bg-shuttle-50 py-12 lg:h-[202px] lg:pt-20 lg:pb-0">
      <ul className="main-container text-shuttle-400 flex flex-wrap items-end justify-center gap-x-[72px] gap-y-8 lg:flex-nowrap">
        {logos.map((Logo, index) => (
          <RevealAnimation key={index} delay={index * 0.08} offset={30}>
            <li>
              <Logo />
            </li>
          </RevealAnimation>
        ))}
      </ul>
    </section>
  );
};

export default Partners;
