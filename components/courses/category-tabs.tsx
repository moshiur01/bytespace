import TopicPill from '@/components/shared/ui/badge/topic-pill';
import { searchCategories } from '@/data/course-search';

interface CategoryTabsProps {
  active: string;
  onChange: (category: string) => void;
}

const CategoryTabs = ({ active, onChange }: CategoryTabsProps) => {
  return (
    <div
      aria-label="Categories"
      className="-mx-5 flex [scrollbar-width:none] gap-4 overflow-x-auto px-5 lg:mx-0 lg:justify-between lg:overflow-visible lg:px-0"
    >
      {searchCategories.map((category) => (
        <TopicPill
          key={category}
          active={active === category}
          onClick={() => onChange(category)}
          className="shrink-0"
        >
          {category}
        </TopicPill>
      ))}
    </div>
  );
};

export default CategoryTabs;
