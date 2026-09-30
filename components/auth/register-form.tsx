'use client';

import TextReveal from '@/components/animation/text-reveal';

import FormField from '@/components/auth/form-field';
import ButtonLime from '@/components/shared/ui/button/button-lime';
import Link from 'next/link';
import { useState, type ChangeEvent, type FormEvent } from 'react';

const RegisterForm = () => {
  const [values, setValues] = useState({ name: '', email: '', password: '' });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="flex flex-col">
      <form onSubmit={handleSubmit} className="flex flex-col gap-10">
        <div>
          <p className="text-body-l text-primary-800">Create an Account</p>
          <TextReveal delay={0.3}>
            <h1 className="font-poppins text-shuttle-950 sm:text-heading-m text-[32px] leading-[1.2] font-semibold tracking-[-0.01em]">
              Welcome to ByteSpace
            </h1>
          </TextReveal>
        </div>
        <div className="flex flex-col items-end gap-6">
          <FormField
            id="register-name"
            label="Full Name"
            type="text"
            name="name"
            autoComplete="name"
            placeholder="Jamie Davis"
            value={values.name}
            onChange={handleChange}
            required
          />
          <FormField
            id="register-email"
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            placeholder="designer@example.com"
            value={values.email}
            onChange={handleChange}
            required
          />
          <FormField
            id="register-password"
            label="Password"
            type="password"
            name="password"
            autoComplete="new-password"
            placeholder="********"
            value={values.password}
            onChange={handleChange}
            required
          />
          <ButtonLime type="submit">Continue</ButtonLime>
        </div>
      </form>

      <p className="text-body-m text-shuttle-700 mt-12 flex flex-wrap justify-center gap-1 xl:mt-[122px]">
        Already have an account?
        <Link href="/login" className="text-primary-800 hover:underline">
          Login
        </Link>
      </p>
    </div>
  );
};

export default RegisterForm;
