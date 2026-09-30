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
    <section aria-label="Partners" className="bg-shuttle-50 py-12 lg:h-50.5 lg:pt-20 lg:pb-0">
      <div className="main-container">
        <ul className="text-shuttle-400 flex flex-wrap items-end justify-center gap-x-18 gap-y-8 lg:flex-nowrap">
          {logos.map((Logo, index) => (
            <RevealAnimation key={index + 1} delay={index * 0.08} offset={30}>
              <li>
                <Logo />
              </li>
            </RevealAnimation>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Partners;
