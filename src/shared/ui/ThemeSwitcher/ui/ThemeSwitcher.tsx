import { classNames } from 'shared/lib/classNames/classNames';
import './ThemeSwitcher.scss';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { useTheme } from 'app/providers/ThemeProvider';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { memo } from 'react';

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
