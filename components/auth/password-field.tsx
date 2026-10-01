'use client';

import FormField from '@/components/auth/form-field';
import { VisibilityIcon, VisibilityOffIcon } from '@/components/shared/icon';
import { useState, type ComponentProps } from 'react';

type PasswordFieldProps = Omit<ComponentProps<typeof FormField>, 'type' | 'trailing'>;

const PasswordField = (props: PasswordFieldProps) => {
  const [visible, setVisible] = useState(false);
  const Icon = visible ? VisibilityOffIcon : VisibilityIcon;

  return (
    <FormField
      {...props}
      type={visible ? 'text' : 'password'}
      trailing={
        <button
          type="button"
          aria-label="Show password"
          aria-pressed={visible}
          aria-controls={props.id}
          onClick={() => setVisible((value) => !value)}
          className="text-shuttle-400 hover:text-shuttle-950 focus-visible:ring-primary-800 flex size-9 cursor-pointer items-center justify-center rounded-lg transition-colors outline-none focus-visible:ring-1"
        >
          <Icon size={20} />
        </button>
      }
    />
  );
};

export default PasswordField;
