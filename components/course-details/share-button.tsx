'use client';

import { ShareIcon } from '@/components/shared/icon';
import { cn } from '@/utils/cn';
import { useState } from 'react';

interface ShareButtonProps {
  title: string;
  className?: string;
}

const ShareButton = ({ title, className }: ShareButtonProps) => {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({ title, url });
        return;
      }
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // share sheet dismissed or clipboard blocked: nothing to do
    }
  };

  return (
    <button
      type="button"
      onClick={handleShare}
      className={cn(
        'bg-accent-400 text-label-m text-shuttle-950 can-hover:hover:bg-accent-500 inline-flex h-10 shrink-0 cursor-pointer items-center justify-center gap-2 rounded-3xl px-6 leading-6 font-medium whitespace-nowrap backdrop-blur-[20px] transition-colors duration-300',
        className
      )}
    >
      <ShareIcon />
      <span aria-live="polite">{copied ? 'Copied' : 'Share'}</span>
    </button>
  );
};

export default ShareButton;
