import { LaptopMockup } from "flowbite-react";
import { type CodeData } from "~/components/code-demo";

const code = `
import { LaptopMockup } from "flowbite-react";

export function Component() {
  return (
    <LaptopMockup>
      <img
        src="https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen.png"
        className="dark:hidden"
        alt=""
      />
      <img
        src="https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen-dark.png"
        className="hidden dark:block"
        alt=""
      />
    </LaptopMockup>
  );
}
`;

export function Component() {
  return (
    <LaptopMockup>
      <img
        src="https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen.png"
        className="dark:hidden"
        alt=""
      />
      <img
        src="https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen-dark.png"
        className="hidden dark:block"
        alt=""
      />
    </LaptopMockup>
  );
}

export const laptop: CodeData = {
  type: "single",
  code: [
    {
      fileName: "client",
      language: "tsx",
      code,
    },
    {
      fileName: "server",
      language: "tsx",
      code,
    },
  ],
  githubSlug: "mockup/mockup.laptop.tsx",
  component: <Component />,
};
