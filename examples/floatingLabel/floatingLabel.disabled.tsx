import { type CodeData } from '~/app/components/code-demo';
import { FloatingLabel } from '~/src';

const code = `
'use client';

import { Spinner } from 'flowbite-react';

function Component() {
  return (
    <div className="grid grid-flow-col justify-stretch space-x-4">
      <FloatingLabel variant="filled" label="Label" disabled={true} />
      <FloatingLabel variant="outlined" label="Label" disabled={true} />
      <FloatingLabel variant="standard" label="Label" disabled={true} />
    </div>
  );
}
`;

const codeRSC = `
import { Spinner } from 'flowbite-react';

function Component() {
  return (
    <div className="grid grid-flow-col justify-stretch space-x-4">
      <FloatingLabel variant="filled" label="Label" disabled={true} />
      <FloatingLabel variant="outlined" label="Label" disabled={true} />
      <FloatingLabel variant="standard" label="Label" disabled={true} />
    </div>
  );
}
`;

function Component() {
  return (
    <div className="grid grid-flow-col justify-stretch space-x-4">
      <FloatingLabel variant="filled" label="Label" disabled={true} />
      <FloatingLabel variant="outlined" label="Label" disabled={true} />
      <FloatingLabel variant="standard" label="Label" disabled={true} />
    </div>
  );
}

export const disabled: CodeData = {
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
  githubSlug: 'forms/floating-label.md#disabled-state',
  component: <Component />,
};
