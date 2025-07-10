import { classNames } from 'shared/lib/classNames/classNames';
import './Navbar.scss';
import { useTranslation } from 'react-i18next';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { useCallback, useState } from 'react';
import { LoginModal } from 'features/AuthByUsername';

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  return (
    <header className={classNames('header', {}, [className])}>
      <div className="header__container">
        <div className="header__items">
          <button onClick={onShowModal} className="header__button login-btn">
            {t('Login')}
          </button>
          <LangSwitcher />
        </div>
        <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
      </div>
    </header>
  );
};

export default Navbar;
