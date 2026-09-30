import type { ComponentProps } from 'react';

interface FormFieldProps extends Omit<ComponentProps<'input'>, 'className' | 'id'> {
  id: string;
  label: string;
}

const FormField = ({ id, label, ...props }: FormFieldProps) => {
  return (
    <div className="flex w-full flex-col gap-2">
      <label htmlFor={id} className="text-label-s text-shuttle-950 font-medium">
        {label}
      </label>
      <input
        id={id}
        className="text-body-l text-shuttle-950 ring-shuttle-100 placeholder:text-shuttle-400 focus:ring-primary-800 h-[52px] w-full rounded-xl bg-white px-6 ring-1 transition-shadow outline-none ring-inset"
        {...props}
      />
    </div>
  );
};

export default FormField;
