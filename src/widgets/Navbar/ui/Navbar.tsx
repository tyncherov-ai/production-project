import { classNames } from "shared/lib/classNames/classNames";
import './Navbar.scss';
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { useTheme } from 'app/providers/ThemeProvider';
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { toggleTheme } = useTheme();
    return (
        <header className={classNames('header', {}, [className])}>
            <div className='header__container'>
                <div className="header__links">
                    <AppLink theme={AppLinkTheme.PRIMARY} to={'/'} >
                        Main
                    </AppLink>
                    <AppLink theme={AppLinkTheme.PRIMARY} to={'/about'}>
                        About
                    </AppLink>
                </div>
                <ThemeSwitcher className="header__button" />
            </div>
        </header>
    );
};
