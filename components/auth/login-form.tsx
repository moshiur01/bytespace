'use client';

import TextReveal from '@/components/animation/text-reveal';

import FormField from '@/components/auth/form-field';
import PasswordField from '@/components/auth/password-field';
import SocialButtons from '@/components/auth/social-buttons';
import ButtonLime from '@/components/shared/ui/button/button-lime';
import Link from 'next/link';
import { useState, type ChangeEvent, type SubmitEvent } from 'react';

const LoginForm = () => {
  const [values, setValues] = useState({ email: '', password: '' });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="space-y-12">
      <div className="space-y-12 xl:space-y-[73px]">
        <form onSubmit={handleSubmit} className="space-y-10">
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
            <PasswordField
              id="login-password"
              label="Password"
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

        <SocialButtons />
      </div>

      <p className="text-body-m flex flex-wrap justify-center gap-1 text-neutral-400 xl:mt-[73px]">
        New user?
        <Link href="/register" className="text-primary-800 hover-underline">
          Create an account
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
