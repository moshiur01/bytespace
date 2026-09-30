import { SearchIcon } from '@/components/shared/icon';
import ButtonLime from '@/components/shared/ui/button/button-lime';
import { cn } from '@/utils/cn';

interface SearchBarProps {
  className?: string;
  inputClassName?: string;
}

const SearchBar = ({ className, inputClassName }: SearchBarProps) => {
  return (
    <form
      action="/courses"
      role="search"
      className={cn('flex w-full items-center gap-4', className)}
    >
      <label
        className={cn(
          'flex h-[52px] min-w-0 flex-1 items-center gap-2 rounded-3xl bg-white px-6',
          inputClassName
        )}
      >
        <SearchIcon className="text-shuttle-400 shrink-0" />
        <span className="sr-only">Search courses</span>
        <input
          type="search"
          name="q"
          required
          placeholder="Course, topic, creator"
          className="text-body-l text-shuttle-950 placeholder:text-shuttle-400 w-full bg-transparent outline-none"
        />
      </label>
      <ButtonLime type="submit" className="h-[52px] w-[104px]">
        Search
      </ButtonLime>
    </form>
  );
};

export default SearchBar;
