import { classNames } from 'shared/lib/classNames/classNames';
import './Navbar.scss';
import { useTranslation } from 'react-i18next';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { Modal } from 'widgets/Modal';
import { useCallback, useState } from 'react';

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  return (
    <header className={classNames('header', {}, [className])}>
      <div className="header__container">
        <div className="header__items">
          <button onClick={onToggleModal} className="header__button login-btn">
            {t('Login')}
          </button>
          <LangSwitcher />
        </div>
        {/* eslint-disable-next-line i18next/no-literal-string */}
        <Modal isOpen={isAuthModal} onClose={onToggleModal}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          aperiam sint distinctio asperiores consectetur. Omnis excepturi sed
          debitis delectus dolorem dicta velit nemo, libero ea atque dolore.
          Ipsa, illum amet?
        </Modal>
      </div>
    </header>
  );
};

export default Navbar;
