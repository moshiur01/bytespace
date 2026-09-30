import AuthSplit from '@/components/auth/auth-split';
import LoginForm from '@/components/auth/login-form';
import { generateMetadata } from '@/utils/generateMetaData';
import type { Metadata } from 'next';

export const metadata: Metadata = generateMetadata(
  'Sign In || ByteSpace',
  'Sign in to ByteSpace and pick up your courses right where you left off.'
);

const Page = () => {
  return (
    <AuthSplit
      title="Sign in with ease"
      description="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
    >
      <LoginForm />
    </AuthSplit>
  );
};

export default Page;
