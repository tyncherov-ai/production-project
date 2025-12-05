import { classNames } from 'shared/lib/classNames/classNames';
import './LoginModal.scss';
import { Modal } from 'widgets/Modal';
import { Suspense } from 'react';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';
import { Loader } from 'shared/ui/Loader';

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
