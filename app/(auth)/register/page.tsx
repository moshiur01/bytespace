import AuthSplit from '@/components/auth/auth-split';
import RegisterForm from '@/components/auth/register-form';
import { generateMetadata } from '@/utils/generateMetaData';
import type { Metadata } from 'next';

export const metadata: Metadata = generateMetadata(
  'Create an Account || ByteSpace',
  'Join ByteSpace for free and get access to hundreds of courses.'
);

const Page = () => {
  return (
    <AuthSplit
      title="Sign up and come in"
      description="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
      mutedRating={false}
    >
      <RegisterForm />
    </AuthSplit>
  );
};

export default Page;
