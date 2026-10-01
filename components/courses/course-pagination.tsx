import { ArrowBackIcon, ArrowForwardIcon } from '@/components/shared/icon';
import { cn } from '@/utils/cn';

interface CoursePaginationProps {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
}

const arrow =
  'flex h-12 w-14 cursor-pointer items-center justify-center rounded-3xl bg-white ring-1 ring-shuttle-200 transition-colors ring-inset disabled:cursor-not-allowed can-hover:enabled:hover:bg-shuttle-50';

const numberText = 'font-poppins h-12 text-xl leading-7 font-semibold tracking-[-0.01em]';

const getPageItems = (page: number, totalPages: number): (number | 'gap')[] => {
  if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i + 1);

  const start = Math.max(2, page - 1);
  const end = Math.min(totalPages - 1, page + 1);
  const middle = Array.from({ length: end - start + 1 }, (_, i) => start + i);

  return [
    1,
    ...(start > 2 ? (['gap'] as const) : []),
    ...middle,
    ...(end < totalPages - 1 ? (['gap'] as const) : []),
    totalPages,
  ];
};

const CoursePagination = ({ page, totalPages, onChange }: CoursePaginationProps) => {
  const items = getPageItems(page, totalPages);

  return (
    <nav aria-label="Pagination" className="flex items-center justify-center gap-4 sm:gap-6">
      <button
        type="button"
        aria-label="Previous page"
        disabled={page === 1}
        onClick={() => onChange(page - 1)}
        className={cn(arrow, 'text-shuttle-700')}
      >
        <ArrowBackIcon />
      </button>

      {items.map((item, index) => {
        if (item === 'gap') {
          return (
            <span
              key={`gap-${index}`}
              aria-hidden="true"
              className={cn(numberText, 'text-shuttle-400 flex items-center')}
            >
              …
            </span>
          );
        }
        const current = item === page;
        return (
          <button
            key={item}
            type="button"
            aria-label={`Page ${item}`}
            aria-current={current ? 'page' : undefined}
            onClick={() => onChange(item)}
            className={cn(
              numberText,
              'cursor-pointer transition-colors',
              current ? 'text-shuttle-200' : 'text-shuttle-950 can-hover:hover:text-primary-800'
            )}
          >
            {item}
          </button>
        );
      })}

      <button
        type="button"
        aria-label="Next page"
        disabled={page === totalPages}
        onClick={() => onChange(page + 1)}
        className={cn(arrow, 'text-shuttle-950')}
      >
        <ArrowForwardIcon />
      </button>
    </nav>
  );
};

export default CoursePagination;
