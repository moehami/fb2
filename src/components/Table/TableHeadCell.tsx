import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import { getTheme } from '~/src/theme-store';
import type { DeepPartial } from '../../';
import { mergeDeep } from '../../helpers/merge-deep';

export interface FlowbiteTableHeadCellTheme {
  base: string;
}

export interface TableHeadCellProps extends PropsWithChildren, ComponentProps<'th'> {
  theme?: DeepPartial<FlowbiteTableHeadCellTheme>;
}

export const TableHeadCell: FC<TableHeadCellProps> = ({ children, className, theme: customTheme = {}, ...props }) => {
  const theme = mergeDeep(getTheme().table.head.cell, customTheme);

  return (
    <th className={twMerge(theme.base, className)} {...props}>
      {children}
    </th>
  );
};
