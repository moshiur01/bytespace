'use client';

import RevealAnimation from '@/components/animation/reveal-animation';
import TopicPill from '@/components/shared/ui/badge/topic-pill';
import CourseCard from '@/components/shared/ui/cards/course-card';
import { topicRows } from '@/data/categories';
import { courses } from '@/data/courses';
import Link from 'next/link';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useState } from 'react';

const FEATURED = topicRows[0][0];

/** Topic pills that filter the course grid below them */
const CourseFilter = () => {
  const [active, setActive] = useState(FEATURED);
  // after the first pick, new cards animate in immediately instead of on scroll
  const [interacted, setInteracted] = useState(false);
  const visible =
    active === FEATURED ? courses : courses.filter((course) => course.topics.includes(active));

  // the grid height changed: recalculate the scroll-triggered animations below it
  useEffect(() => {
    ScrollTrigger.refresh();
  }, [active]);

  const select = (topic: string) => {
    setActive(topic);
    setInteracted(true);
  };

  return (
    <>
      <div className="mt-[42px] flex flex-wrap justify-center gap-x-4 gap-y-[21px] lg:flex-col lg:items-center">
        {topicRows.map((row, rowIndex) => (
          <div key={rowIndex} className="contents lg:flex lg:items-center lg:gap-4">
            {row.map((topic) => (
              <TopicPill key={topic} active={active === topic} onClick={() => select(topic)}>
                {topic}
              </TopicPill>
            ))}
            {rowIndex === topicRows.length - 1 && (
              <Link
                href="/courses"
                className="text-label-m text-primary-800 flex h-[43px] items-center font-medium hover:underline"
              >
                + More
              </Link>
            )}
          </div>
        ))}
      </div>

      <div key={active} className="mt-[77px] grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((course, index) => (
          <RevealAnimation
            key={course.slug}
            instant={interacted}
            delay={interacted ? index * 0.06 : (index % 3) * 0.1}
          >
            <div>
              <CourseCard course={course} />
            </div>
          </RevealAnimation>
        ))}
      </div>
    </>
  );
};

export default CourseFilter;
