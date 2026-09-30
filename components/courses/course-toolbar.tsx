import DropdownMenu from '@/components/courses/dropdown-menu';
import { ResetIcon } from '@/components/courses/icons';
import { CategoryIcon, FilterIcon, SignalIcon, SortIcon } from '@/components/shared/icon';
import {
  ALL_CATEGORIES,
  levelOptions,
  priceFilters,
  searchCategories,
  sortOptions,
  type PriceFilter,
  type SortOption,
} from '@/data/course-search';
import type { IconComponent } from '@/interface';
import { cn } from '@/utils/cn';

export type LevelValue = (typeof levelOptions)[number];

interface CourseToolbarProps {
  price: PriceFilter['value'];
  level: LevelValue;
  category: string;
  sort: SortOption['value'];
  onPriceChange: (value: PriceFilter['value']) => void;
  onLevelChange: (value: LevelValue) => void;
  onCategoryChange: (value: string) => void;
  onSortChange: (value: SortOption['value']) => void;
  /** shows the Reset pill when true */
  canReset: boolean;
  onReset: () => void;
}

const pill =
  'flex h-12 cursor-pointer items-center justify-center gap-1 rounded-3xl bg-white px-4 text-label-m font-medium whitespace-nowrap text-shuttle-700 ring-1 ring-shuttle-200 transition-colors ring-inset aria-expanded:bg-shuttle-50 can-hover:hover:bg-shuttle-50';

const PillContent = ({
  icon: Icon,
  label,
  active,
}: {
  icon: IconComponent;
  label: string;
  active?: boolean;
}) => (
  <>
    <Icon className="text-shuttle-950 shrink-0" />
    <span className={cn(active && 'text-primary-800')}>{label}</span>
  </>
);

const levelMenu = levelOptions.map((level) => ({ value: level, label: level }));
const categoryMenu = searchCategories.map((category) => ({
  value: category as string,
  label: category === ALL_CATEGORIES ? 'All categories' : category,
}));

const CourseToolbar = ({
  price,
  level,
  category,
  sort,
  onPriceChange,
  onLevelChange,
  onCategoryChange,
  onSortChange,
  canReset,
  onReset,
}: CourseToolbarProps) => {
  const priceLabel = priceFilters.find((option) => option.value === price)?.label;
  const sortLabel = sortOptions.find((option) => option.value === sort)?.label ?? '';

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 lg:-ml-px">
      <div className="flex flex-wrap items-center gap-3 sm:gap-4">
        <DropdownMenu
          label="Filter by price"
          options={priceFilters}
          value={price}
          onChange={onPriceChange}
          triggerClassName={pill}
          trigger={
            <PillContent
              icon={FilterIcon}
              label={price === 'any' ? 'Filter' : (priceLabel ?? 'Filter')}
              active={price !== 'any'}
            />
          }
        />
        <DropdownMenu
          label="Filter by level"
          options={levelMenu}
          value={level}
          onChange={onLevelChange}
          triggerClassName={pill}
          trigger={
            <PillContent
              icon={SignalIcon}
              label={level === 'All levels' ? 'Level' : level}
              active={level !== 'All levels'}
            />
          }
        />
        <DropdownMenu
          label="Filter by category"
          options={categoryMenu}
          value={category}
          onChange={onCategoryChange}
          triggerClassName={pill}
          trigger={
            <PillContent
              icon={CategoryIcon}
              label={category === ALL_CATEGORIES ? 'Category' : category}
              active={category !== ALL_CATEGORIES}
            />
          }
        />
        {canReset && (
          <button
            type="button"
            onClick={onReset}
            className={cn(pill, 'text-primary-800 ring-primary-800/30')}
          >
            <ResetIcon className="shrink-0" />
            Reset
          </button>
        )}
      </div>

      <DropdownMenu
        label="Sort courses"
        options={sortOptions}
        value={sort}
        onChange={onSortChange}
        align="right"
        triggerClassName={pill}
        trigger={<PillContent icon={SortIcon} label={sortLabel} />}
      />
    </div>
  );
};

export default CourseToolbar;
