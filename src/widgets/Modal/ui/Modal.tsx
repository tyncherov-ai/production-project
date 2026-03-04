import { ReactNode, useCallback, useEffect, useState } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Portal } from 'shared/ui';

import './Modal.scss';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  portal?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

const Modal = (props: ModalProps) => {
  const { className, children, isOpen, onClose, portal = true, lazy } = props;
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  const mods: Mods = {
    'modal-opened': isOpen,
  };

  const handleClose = useCallback(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    },
    [handleClose],
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', onKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  const modal = (
    <div className={classNames('modal', mods, [className])}>
      <div className="modal__overlay" onClick={handleClose}>
        <div className="modal__content" onClick={onContentClick}>
          {lazy && !isMounted ? null : children}
        </div>
      </div>
    </div>
  );

  //if (lazy && !isMounted) return null;

  return portal ? <Portal>{modal}</Portal> : modal;
};

export default Modal;
