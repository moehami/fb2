import type { CodeData } from '~/components/code-demo';
import { SkeletonCard } from '~/src';

const code = `
'use client';

import { Skeleton } from 'flowbite-react';

function Component() {
  return (
    <div>
      <Skeleton.Card />
    </div>
  )
}
`;

const codeRSC = `
import { SkeletonVideo } from 'flowbite-react';

function Component() {
  return (
    <div>
      <SkeletonCard />
    </div>
  )
}
`;

function Component() {
  return (
    <div>
      <SkeletonCard />
    </div>
  );
}

export const card: CodeData = {
  type: 'single',
  code: [
    {
      fileName: 'client',
      language: 'tsx',
      code,
    },
    {
      fileName: 'server',
      language: 'tsx',
      code: codeRSC,
    },
  ],
  githubSlug: 'skeleton/skeleton.card.tsx',
  component: <Component />,
};
