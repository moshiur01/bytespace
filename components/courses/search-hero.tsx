import RevealAnimation from '@/components/animation/reveal-animation';
import TextReveal from '@/components/animation/text-reveal';
import ScopeSelect from '@/components/courses/scope-select';
import { SearchIcon } from '@/components/shared/icon';

interface SearchHeroProps {
  query?: string;
}

const SearchHero = ({ query = '' }: SearchHeroProps) => {
  return (
    <section className="bg-grid-lines bg-primary-800 relative lg:h-[360px]">
      <div className="main-container">
        <div className="space-y-8 pt-[150px] pb-16 text-center lg:pt-[164px] lg:pb-0">
          <TextReveal>
            <h1 className="font-poppins text-shuttle-50 sm:text-heading-s text-[30px] leading-[1.2] font-semibold tracking-[-0.01em]">
              Find Your Next Course
            </h1>
          </TextReveal>
          <RevealAnimation delay={0.2}>
            <form
              action="/courses"
              role="search"
              className="mx-auto flex w-full max-w-[624px] flex-col items-stretch gap-4 sm:flex-row sm:items-center"
            >
              <label className="flex h-[52px] min-w-0 shrink-0 items-center gap-2 rounded-3xl bg-white px-6 sm:flex-1 sm:shrink">
                <SearchIcon className="text-shuttle-400 shrink-0" />
                <span className="sr-only">Search courses</span>
                <input
                  type="search"
                  name="q"
                  key={query}
                  defaultValue={query}
                  placeholder="Search"
                  className="text-body-l text-shuttle-950 placeholder:text-shuttle-400 w-full bg-transparent outline-none"
                />
              </label>
              <ScopeSelect />
            </form>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default SearchHero;
