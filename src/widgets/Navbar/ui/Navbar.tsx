import { classNames } from 'shared/lib/classNames/classNames';
import './Navbar.scss';
import { useTranslation } from 'react-i18next';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { memo, useCallback, useState } from 'react';
import { LoginModal } from 'features/AuthByUsername';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { LogoutModal } from 'features/AuthByUsername/ui/LogoutModal/LogoutModal';

interface NavbarProps {
  className?: string;
}

const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const authNavbar = (
    <header className={classNames('header', {}, [className])}>
      <div className="header__container">
        <div className="header__items">
          <button onClick={onShowModal} className="header__button login-btn">
            {t('logOut')}
          </button>
          <LangSwitcher />
        </div>
        <LogoutModal isOpen={isAuthModal} onClose={onCloseModal} />
      </div>
    </header>
  );

  const guestNavbar = (
    <header className={classNames('header', {}, [className])}>
      <div className="header__container">
        <div className="header__items">
          <button onClick={onShowModal} className="header__button login-btn">
            {t('logIn')}
          </button>
          <LangSwitcher />
        </div>
        <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
      </div>
    </header>
  );

  return authData ? authNavbar : guestNavbar;
});

Navbar.displayName = 'Navbar';

export default Navbar;
