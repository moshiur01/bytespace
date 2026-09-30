'use client';

import DropdownMenu from '@/components/courses/dropdown-menu';
import { ChevronDownIcon } from '@/components/shared/icon';
import { searchScopes } from '@/data/course-search';
import { useState } from 'react';

type Scope = (typeof searchScopes)[number];

const options = searchScopes.map((scope) => ({ value: scope, label: scope }));

const ScopeSelect = () => {
  const [scope, setScope] = useState<Scope>(searchScopes[0]);

  return (
    <>
      <input type="hidden" name="in" value={scope.toLowerCase()} />
      <DropdownMenu
        label="Search in"
        options={options}
        value={scope}
        onChange={setScope}
        align="right"
        className="shrink-0"
        triggerClassName="flex h-[52px] w-full cursor-pointer items-center justify-center gap-2 rounded-3xl bg-accent-400 px-6 text-label-l font-medium text-shuttle-950 transition-colors duration-300 aria-expanded:bg-accent-500 can-hover:hover:bg-accent-500 sm:w-[147px]"
        trigger={
          <>
            {scope}
            <ChevronDownIcon className="shrink-0" />
          </>
        }
      />
    </>
  );
};

export default ScopeSelect;
