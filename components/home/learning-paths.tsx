import RevealAnimation from '@/components/animation/reveal-animation';
import SectionHeading from '@/components/shared/section-heading';
import { learningPaths } from '@/data/categories';
import Link from 'next/link';

const LearningPaths = () => {
  return (
    <section className="pt-18 pb-30">
      <div className="main-container">
        <div className="space-y-17">
          <SectionHeading
            size="s"
            title="Explore Diverse Learning Paths at Bytespace"
            description="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
          />

          <ul className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-6">
            {learningPaths.map(({ label, icon: Icon }, index) => (
              <RevealAnimation key={label} delay={index * 0.08}>
                <li>
                  <Link
                    href="/courses"
                    className="ring-shuttle-200 can-hover:hover:bg-shuttle-50 flex aspect-square flex-col items-center justify-center gap-3 rounded-3xl ring-1 transition-colors ring-inset lg:h-41.75"
                  >
                    <span className="bg-accent-400 text-shuttle-950 flex size-15 items-center justify-center rounded-[40px]">
                      <Icon size={36} />
                    </span>
                    <span className="text-label-xl text-shuttle-950 font-medium">{label}</span>
                  </Link>
                </li>
              </RevealAnimation>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default LearningPaths;
