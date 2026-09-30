'use client';

import ButtonLime from '@/components/shared/ui/button/button-lime';
import { useState } from 'react';

const FollowButton = () => {
  const [following, setFollowing] = useState(false);

  return (
    <ButtonLime
      aria-pressed={following}
      onClick={() => setFollowing((value) => !value)}
      className="text-vulcan-950"
    >
      {following ? 'Following' : 'Follow'}
    </ButtonLime>
  );
};

export default FollowButton;
