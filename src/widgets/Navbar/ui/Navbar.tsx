import { classNames } from 'shared/lib/classNames/classNames';
import './Navbar.scss';
import { useTranslation } from 'react-i18next';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
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

export default Navbar;
