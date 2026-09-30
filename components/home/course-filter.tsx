'use client';

import RevealAnimation from '@/components/animation/reveal-animation';
import RollLink from '@/components/shared/roll-link';
import TopicPill from '@/components/shared/ui/badge/topic-pill';
import CourseCard from '@/components/shared/ui/cards/course-card';
import { topics } from '@/data/categories';
import { courses } from '@/data/courses';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useState } from 'react';

const FEATURED = topics[0];

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
    <div className="space-y-19.25">
      <RevealAnimation delay={0.3}>
        <div className="mx-auto flex max-w-271.5 flex-wrap justify-center gap-x-4 gap-y-5.25">
          {topics.map((topic) => (
            <TopicPill key={topic} active={active === topic} onClick={() => select(topic)}>
              {topic}
            </TopicPill>
          ))}
          <RollLink href="/courses" className="text-label-m text-primary-800 h-10.75 font-medium">
            + More
          </RollLink>
        </div>
      </RevealAnimation>

      <div key={active} className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
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
    </div>
  );
};

export default CourseFilter;
