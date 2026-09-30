import { cn } from '@/utils/cn';
import type { ComponentProps, ReactNode } from 'react';

interface FormFieldProps extends Omit<ComponentProps<'input'>, 'className' | 'id'> {
  id: string;
  label: string;
  /** Control shown inside the input on the right, e.g. a show-password toggle */
  trailing?: ReactNode;
}

const FormField = ({ id, label, trailing, ...props }: FormFieldProps) => {
  return (
    <div className="flex w-full flex-col gap-2">
      <label htmlFor={id} className="text-label-s text-shuttle-950 font-medium">
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          className={cn(
            'text-body-l text-shuttle-950 ring-shuttle-100 placeholder:text-shuttle-400 focus:ring-primary-800 h-[52px] w-full rounded-xl bg-white px-6 ring-1 transition-shadow outline-none ring-inset',
            trailing && 'pr-14'
          )}
          {...props}
        />
        {trailing && (
          <div className="absolute inset-y-0 right-3 flex items-center">{trailing}</div>
        )}
      </div>
    </div>
  );
};

export default FormField;
