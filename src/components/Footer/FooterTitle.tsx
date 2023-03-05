import classNames from 'classnames';
import type { ComponentProps, ElementType, FC, PropsWithChildren } from 'react';
import type { DeepPartial } from '~/src';
import { useTheme } from '~/src';
import { mergeDeep } from '~/src/helpers/merge-deep';

export interface FlowbiteFooterTitleTheme {
  base: string;
}

export interface FooterTitleProps extends PropsWithChildren<ComponentProps<'h2'>> {
  as?: ElementType;
  theme?: DeepPartial<FlowbiteFooterTitleTheme>;
  title: string;
}

export const FooterTitle: FC<FooterTitleProps> = ({
  as: Component = 'h2',
  className,
  theme: customTheme = {},
  title,
  ...props
}) => {
  const theme = mergeDeep(useTheme().theme.footer.title, customTheme);

  return (
    <Component data-testid="flowbite-footer-title" className={classNames(theme.base, className)} {...props}>
      {title}
    </Component>
  );
};
