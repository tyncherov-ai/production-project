import { classNames } from 'shared/lib/classNames/classNames';
import './Navbar.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import LangSwitcher from 'shared/ui/LangSwitcher/ui/LangSwitcher';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();

  return (
    <header className={classNames('header', {}, [className])}>
      <div className="header__container">
        <div className="header__links">
          <AppLink theme={AppLinkTheme.PRIMARY} to={'/'}>
            {t('Main')}
          </AppLink>
          <AppLink theme={AppLinkTheme.PRIMARY} to={'/about'}>
            {t('About')}
          </AppLink>
          <LangSwitcher />
        </div>
      </div>
    </header>
  );
};
