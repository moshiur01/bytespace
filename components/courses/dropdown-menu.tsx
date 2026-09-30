'use client';

import useDismiss from '@/components/courses/use-dismiss';
import { CheckCircleIcon } from '@/components/shared/icon';
import { cn } from '@/utils/cn';
import { type ReactNode, useCallback, useId, useRef, useState } from 'react';

interface DropdownOption<T extends string> {
  value: T;
  label: string;
}

interface DropdownMenuProps<T extends string> {
  label: string;
  options: DropdownOption<T>[];
  value: T;
  onChange: (value: T) => void;
  trigger: ReactNode;
  triggerClassName?: string;
  align?: 'left' | 'right';
  className?: string;
}

const DropdownMenu = <T extends string>({
  label,
  options,
  value,
  onChange,
  trigger,
  triggerClassName,
  align = 'left',
  className,
}: DropdownMenuProps<T>) => {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();
  const close = useCallback(() => setOpen(false), []);
  useDismiss(rootRef, open, close);

  return (
    <div ref={rootRef} className={cn('relative', className)}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((prev) => !prev)}
        className={triggerClassName}
      >
        {trigger}
      </button>

      {open && (
        <ul
          id={listId}
          role="listbox"
          aria-label={label}
          className={cn(
            'ring-shuttle-100 absolute top-[calc(100%+8px)] z-30 min-w-[200px] rounded-2xl bg-white p-2 shadow-[0_12px_32px_rgb(36_37_40/0.12)] ring-1',
            align === 'right' ? 'right-0' : 'left-0'
          )}
        >
          {options.map((option) => {
            const selected = option.value === value;
            return (
              <li key={option.value} role="option" aria-selected={selected}>
                <button
                  type="button"
                  onClick={() => {
                    onChange(option.value);
                    close();
                  }}
                  className={cn(
                    'text-label-m flex w-full cursor-pointer items-center justify-between gap-4 rounded-xl px-3 py-2.5 text-left font-medium whitespace-nowrap transition-colors',
                    selected
                      ? 'bg-primary-50 text-primary-800'
                      : 'text-shuttle-700 can-hover:hover:bg-shuttle-50'
                  )}
                >
                  {option.label}
                  {selected && <CheckCircleIcon size={18} className="shrink-0" />}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
