import { CategoryIcon, FilterIcon, SignalIcon, SortIcon } from '@/components/shared/icon';
import type { IconComponent } from '@/interface';

const filters: { label: string; icon: IconComponent }[] = [
  { label: 'Filter', icon: FilterIcon },
  { label: 'Level', icon: SignalIcon },
  { label: 'Category', icon: CategoryIcon },
];

const pill =
  'flex h-12 cursor-pointer items-center justify-center gap-1 rounded-3xl bg-white px-4 text-label-m font-medium whitespace-nowrap text-shuttle-700 ring-1 ring-shuttle-200 transition-colors duration-300 ring-inset can-hover:hover:bg-shuttle-50';

const CourseToolbar = () => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3">
      <div className="flex flex-wrap gap-4">
        {filters.map(({ label, icon: Icon }) => (
          <button key={label} type="button" className={pill}>
            <Icon className="text-shuttle-950" />
            {label}
          </button>
        ))}
      </div>
      <button type="button" className={pill}>
        <SortIcon className="text-shuttle-950" />
        Most relevant
      </button>
    </div>
  );
};

export default CourseToolbar;
