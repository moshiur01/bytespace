'use client';

import RevealAnimation from '@/components/animation/reveal-animation';
import CategoryTabs from '@/components/courses/category-tabs';
import CoursePagination from '@/components/courses/course-pagination';
import CourseToolbar, { type LevelValue } from '@/components/courses/course-toolbar';
import { ResetIcon } from '@/components/courses/icons';
import CourseCard from '@/components/shared/ui/cards/course-card';
import {
  ALL_CATEGORIES,
  COURSES_PER_PAGE,
  searchCourses,
  type PriceFilter,
  type SearchCourse,
  type SortOption,
} from '@/data/course-search';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useRef, useState } from 'react';

interface CourseBrowserProps {
  query?: string;
}

const matchesPrice = (course: SearchCourse, price: PriceFilter['value']) =>
  price === 'any' || (price === 'under-50' ? course.price < 50 : course.price >= 50);

const sorters: Record<SortOption['value'], ((a: SearchCourse, b: SearchCourse) => number) | null> =
  {
    relevant: null,
    rating: (a, b) => b.rating - a.rating,
    'title-asc': (a, b) => a.title.localeCompare(b.title),
    'title-desc': (a, b) => b.title.localeCompare(a.title),
  };

const CourseBrowser = ({ query = '' }: CourseBrowserProps) => {
  const [category, setCategory] = useState<string>(ALL_CATEGORIES);
  const [level, setLevel] = useState<LevelValue>('All levels');
  const [price, setPrice] = useState<PriceFilter['value']>('any');
  const [sort, setSort] = useState<SortOption['value']>('relevant');
  const [page, setPage] = useState(1);

  const [interacted, setInteracted] = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const results = useMemo(() => {
    const term = query.trim().toLowerCase();
    const filtered = searchCourses.filter(
      (course) =>
        (category === ALL_CATEGORIES || course.category === category) &&
        (level === 'All levels' || course.level === level) &&
        matchesPrice(course, price) &&
        (!term ||
          course.title.toLowerCase().includes(term) ||
          course.creator.toLowerCase().includes(term))
    );
    const sorter = sorters[sort];
    return sorter ? [...filtered].sort(sorter) : filtered;
  }, [query, category, level, price, sort]);

  const totalPages = Math.max(1, Math.ceil(results.length / COURSES_PER_PAGE));
  const currentPage = Math.min(page, totalPages);
  const visible = results.slice(
    (currentPage - 1) * COURSES_PER_PAGE,
    currentPage * COURSES_PER_PAGE
  );

  const listKey = [query, category, level, price, sort, currentPage].join('|');

  useEffect(() => {
    ScrollTrigger.refresh();
  }, [listKey]);

  const withReset =
    <T,>(setter: (value: T) => void) =>
    (value: T) => {
      setter(value);
      setPage(1);
      setInteracted(true);
    };

  const canReset =
    category !== ALL_CATEGORIES ||
    level !== 'All levels' ||
    price !== 'any' ||
    sort !== 'relevant' ||
    query.trim() !== '';

  const resetFilters = () => {
    setCategory(ALL_CATEGORIES);
    setLevel('All levels');
    setPrice('any');
    setSort('relevant');
    setPage(1);
    setInteracted(true);
    if (query) router.replace('/courses', { scroll: false });
  };

  const goToPage = (next: number) => {
    setPage(next);
    setInteracted(true);
    resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="pt-12 pb-[72px] lg:pt-[72px]">
      <div className="main-container">
        <div className="space-y-8">
          <CourseToolbar
            price={price}
            level={level}
            category={category}
            sort={sort}
            onPriceChange={withReset(setPrice)}
            onLevelChange={withReset(setLevel)}
            onCategoryChange={withReset(setCategory)}
            onSortChange={withReset(setSort)}
            canReset={canReset}
            onReset={resetFilters}
          />

          <CategoryTabs active={category} onChange={withReset(setCategory)} />
        </div>

        <div className="space-y-[72px]">
          <div ref={resultsRef} className="scroll-mt-8 pt-12 lg:pt-[77px]">
            {query && (
              <p className="text-body-m text-shuttle-500 mb-6" aria-live="polite">
                {results.length} {results.length === 1 ? 'result' : 'results'} for{' '}
                <span className="text-shuttle-950 font-medium">&ldquo;{query}&rdquo;</span>
              </p>
            )}

            {visible.length > 0 ? (
              <div key={listKey} className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                {visible.map((course, index) => (
                  <RevealAnimation
                    key={course.id}
                    instant={interacted && index < 6}
                    delay={interacted ? (index % 6) * 0.06 : (index % 3) * 0.1}
                  >
                    <div>
                      <CourseCard course={course} />
                    </div>
                  </RevealAnimation>
                ))}
              </div>
            ) : (
              <div className="bg-surface-1 ring-shuttle-100 flex flex-col items-center rounded-3xl px-6 py-20 text-center ring-1 ring-inset">
                <p className="font-poppins text-heading-xs text-shuttle-950 font-semibold">
                  No courses found
                </p>
                <p className="text-body-m text-shuttle-500 mt-2 max-w-[420px]">
                  Try another category, level or search term to discover more courses.
                </p>
                <button
                  type="button"
                  onClick={resetFilters}
                  className="bg-accent-400 text-label-m text-shuttle-950 can-hover:hover:bg-accent-500 mt-6 flex h-10 cursor-pointer items-center gap-2 rounded-3xl px-6 font-medium transition-colors"
                >
                  <ResetIcon className="shrink-0" />
                  Reset filters
                </button>
              </div>
            )}
          </div>

          {totalPages > 1 && (
            <CoursePagination page={currentPage} totalPages={totalPages} onChange={goToPage} />
          )}
        </div>
      </div>
    </section>
  );
};

export default CourseBrowser;
