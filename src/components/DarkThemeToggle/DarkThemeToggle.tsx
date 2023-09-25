'use client';

import type { ComponentProps, FC } from 'react';
import { HiMoon, HiSun } from 'react-icons/hi';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '~/src/helpers/merge-deep';
import { useThemeMode } from '~/src/helpers/use-theme-mode';
import { getTheme } from '~/src/theme-store';
import type { DeepPartial } from '~/src/types';

export interface FlowbiteDarkThemeToggleTheme {
  root: FlowbiteDarkThemeToggleRootTheme;
}

export interface FlowbiteDarkThemeToggleRootTheme {
  base: string;
  icon: string;
}

export interface DarkThemeToggleProps extends ComponentProps<'button'> {
  iconDark?: string;
  iconLight?: string;
  theme?: DeepPartial<FlowbiteDarkThemeToggleTheme>;
}

export const DarkThemeToggle: FC<DarkThemeToggleProps> = ({
  className,
  theme: customTheme = {},
  iconDark: IconDark = HiSun,
  iconLight: IconLight = HiMoon,
  ...props
}) => {
  const { mode, toggleMode } = useThemeMode();

  const theme = mergeDeep(getTheme().darkThemeToggle, customTheme);

  return (
    <button
      aria-label="Toggle dark mode"
      data-testid="dark-theme-toggle"
      onClick={() => toggleMode?.()}
      type="button"
      className={twMerge(theme.root.base, className)}
      {...props}
    >
      {mode === 'dark' ? (
        <IconLight aria-label="Currently dark mode" className={theme.root.icon} />
      ) : (
        <IconDark aria-label="Currently light mode" className={theme.root.icon} />
      )}
    </button>
  );
};

DarkThemeToggle.displayName = 'DarkThemeToggle';
