import { ReactNode, useCallback, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import './Modal.scss';
import { Portal } from 'shared/ui/Portal';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  portal?: boolean;
  onClose?: () => void;
}

const Modal = (props: ModalProps) => {
  const { className, children, isOpen, onClose, portal = true } = props;
  const mods: Record<string, boolean> = {
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
          {children}
        </div>
      </div>
    </div>
  );

  return portal ? <Portal>{modal}</Portal> : modal;
};

export default Modal;
