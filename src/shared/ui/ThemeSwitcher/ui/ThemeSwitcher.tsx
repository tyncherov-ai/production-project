import { memo } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { classNames } from 'shared/lib/classNames/classNames';

import './ThemeSwitcher.scss';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className={classNames('theme-switcher', {}, [className])}
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {theme === Theme.DARK ? <MdLightMode /> : <MdDarkMode />}
    </button>
  );
});

ThemeSwitcher.displayName = 'ThemeSwitcher';
