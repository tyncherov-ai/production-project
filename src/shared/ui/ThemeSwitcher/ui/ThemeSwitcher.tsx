import { classNames } from 'shared/lib/classNames/classNames';
import './ThemeSwitcher.scss';
import { MdDarkMode } from "react-icons/md";
import { useTheme } from 'app/providers/ThemeProvider';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { toggleTheme } = useTheme();

    return (
        <button
            className={classNames('theme-switcher', {}, [className])}
            onClick={toggleTheme}
            aria-label="Toggle theme"
        >
            <MdDarkMode />
        </button>
    );
};
