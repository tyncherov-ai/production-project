import { classNames } from 'shared/lib/classNames/classNames';
import './LogoutModal.scss';
import { Modal } from 'widgets/Modal';
import { Button } from 'shared/ui/Button/ui/Button';
import { useCallback } from 'react';
import { userActions } from 'entities/User';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

interface LogoutModalProps {
  className?: string;
  isOpen: boolean;
  onClose?: () => void;
}

export const LogoutModal = ({
  className,
  isOpen,
  onClose,
}: LogoutModalProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const onLogoutClick = useCallback(() => {
    dispatch(userActions.logout());
    if (onClose) onClose();
  }, [dispatch, onClose]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className={classNames('logout-modal', {}, [className])}
    >
      <div className="logout-modal__body">
        <h4 className="logout-modal__title">
          {t('areYouSureYouWantToLogOut')}
        </h4>
        <div className="logout-modal__buttons">
          <Button className="logout-modal__button" onClick={onLogoutClick}>
            {t('confirm')}
          </Button>
          <Button
            className="logout-modal__button cancel"
            onClick={onClose}
            theme="outline"
          >
            {t('cancel')}
          </Button>
        </div>
      </div>
    </Modal>
  );
};
