import { DesktopMockup } from "flowbite-react";
import { type CodeData } from "~/components/code-demo";

const code = `
import { DesktopMockup } from "flowbite-react";

export function Component() {
  return (
    <DesktopMockup>
      <img
        src="https://flowbite.s3.amazonaws.com/docs/device-mockups/screen-image-imac.png"
        className="h-[140px] w-full rounded-xl md:h-[262px] dark:hidden"
        alt=""
      />
      <img
        src="https://flowbite.s3.amazonaws.com/docs/device-mockups/screen-image-imac-dark.png"
        className="hidden h-[140px] w-full rounded-xl md:h-[262px] dark:block"
        alt=""
      />
    </DesktopMockup>
  );
}
`;

export function Component() {
  return (
    <DesktopMockup>
      <img
        src="https://flowbite.s3.amazonaws.com/docs/device-mockups/screen-image-imac.png"
        className="h-[140px] w-full rounded-xl md:h-[262px] dark:hidden"
        alt=""
      />
      <img
        src="https://flowbite.s3.amazonaws.com/docs/device-mockups/screen-image-imac-dark.png"
        className="hidden h-[140px] w-full rounded-xl md:h-[262px] dark:block"
        alt=""
      />
    </DesktopMockup>
  );
}

export const desktop: CodeData = {
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
  githubSlug: "mockup/mockup.desktop.tsx",
  component: <Component />,
};
