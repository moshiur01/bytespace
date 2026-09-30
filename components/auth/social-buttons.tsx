import { FacebookIcon, GoogleIcon } from '@/components/auth/icons';

const providers = [
  { label: 'Continue with Facebook', icon: FacebookIcon },
  { label: 'Continue with Google', icon: GoogleIcon },
];

const SocialButtons = () => {
  return (
    <div className="space-y-10">
      <div className="flex w-full items-center justify-center gap-[11px]">
        <span className="h-px max-w-[200px] flex-1 bg-neutral-200" />
        <span className="text-body-l text-neutral-400">or</span>
        <span className="h-px max-w-[200px] flex-1 bg-neutral-200" />
      </div>
      <div className="flex items-center justify-center gap-4">
        {providers.map(({ label, icon: Icon }) => (
          <button
            key={label}
            type="button"
            aria-label={label}
            className="hover:bg-shuttle-50 flex size-[72px] cursor-pointer items-center justify-center rounded-3xl text-black ring-1 ring-neutral-200 transition-colors ring-inset"
          >
            <Icon />
          </button>
        ))}
      </div>
    </div>
  );
};

export default SocialButtons;
