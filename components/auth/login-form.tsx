'use client';

import TextReveal from '@/components/animation/text-reveal';

import FormField from '@/components/auth/form-field';
import SocialButtons from '@/components/auth/social-buttons';
import ButtonLime from '@/components/shared/ui/button/button-lime';
import Link from 'next/link';
import { useState, type ChangeEvent, type FormEvent } from 'react';

const LoginForm = () => {
  const [values, setValues] = useState({ email: '', password: '' });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  // UI only: no backend wired up yet
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="flex flex-col">
      <form onSubmit={handleSubmit} className="flex flex-col gap-10">
        <div>
          <p className="text-body-l text-primary-800">Sign In</p>
          <TextReveal delay={0.3}>
            <h1 className="font-poppins text-shuttle-950 sm:text-heading-m text-[32px] leading-[1.2] font-semibold tracking-[-0.01em]">
              Welcome Back
            </h1>
          </TextReveal>
        </div>
        <div className="flex flex-col items-end gap-6">
          <FormField
            id="login-email"
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
            id="login-password"
            label="Password"
            type="password"
            name="password"
            autoComplete="current-password"
            placeholder="********"
            value={values.password}
            onChange={handleChange}
            required
          />
          <ButtonLime type="submit">Sign In</ButtonLime>
        </div>
      </form>

      <div className="mt-12 xl:mt-[73px]">
        <SocialButtons />
      </div>

      <p className="text-body-m mt-12 flex flex-wrap justify-center gap-1 text-neutral-400 xl:mt-[73px]">
        New user?
        <Link href="/register" className="text-primary-800 hover:underline">
          Create an account
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
