import { FC } from 'react';
import { useTheme } from '../Flowbite/ThemeContext';

export const FooterDivider: FC = () => {
  const theme = useTheme().theme.footer.divider;
  return <hr className={theme.base} />;
};
