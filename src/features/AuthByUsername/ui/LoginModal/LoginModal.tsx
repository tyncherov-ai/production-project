import { Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui';
import { Modal } from 'widgets/Modal';

import { LoginFormAsync } from '../LoginForm/LoginForm.async';

import './LoginModal.scss';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose?: () => void;
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className={classNames('login-modal', {}, [className])}
      lazy
    >
      <Suspense fallback={<Loader />}>
        {isOpen && <LoginFormAsync onSuccess={onClose} />}
      </Suspense>
    </Modal>
  );
};
