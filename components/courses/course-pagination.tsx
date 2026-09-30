import { ArrowBackIcon, ArrowForwardIcon } from '@/components/shared/icon';
import { cn } from '@/utils/cn';

interface CoursePaginationProps {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
}

const arrow =
  'flex h-12 w-14 cursor-pointer items-center justify-center rounded-3xl bg-white ring-1 ring-shuttle-200 transition-colors ring-inset disabled:cursor-not-allowed can-hover:enabled:hover:bg-shuttle-50';

const CoursePagination = ({ page, totalPages, onChange }: CoursePaginationProps) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav aria-label="Pagination" className="flex items-center justify-center gap-6">
      <button
        type="button"
        aria-label="Previous page"
        disabled={page === 1}
        onClick={() => onChange(page - 1)}
        className={cn(arrow, 'text-shuttle-700')}
      >
        <ArrowBackIcon />
      </button>

      {pages.map((number) => {
        const current = number === page;
        return (
          <button
            key={number}
            type="button"
            aria-label={`Page ${number}`}
            aria-current={current ? 'page' : undefined}
            onClick={() => onChange(number)}
            className={cn(
              'font-poppins h-12 cursor-pointer text-xl leading-7 font-semibold tracking-[-0.01em] transition-colors',
              current ? 'text-shuttle-200' : 'text-shuttle-950 can-hover:hover:text-primary-800'
            )}
          >
            {number}
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
