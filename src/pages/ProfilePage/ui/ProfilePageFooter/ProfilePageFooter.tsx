import { classNames } from 'shared/lib/classNames/classNames';
import './ProfilePageFooter.scss';
import { Button } from 'shared/ui/Button/ui/Button';
import { useSelector } from 'react-redux';
import {
  getProfileReadonly,
  profileActions,
  updateProfileData,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

interface ProfilePageFooterProps {
  className?: string;
}

export const ProfilePageFooter = ({ className }: ProfilePageFooterProps) => {
  const { t } = useTranslation('profile');
  const readonly = useSelector(getProfileReadonly);
  const dispatch = useAppDispatch();

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={classNames('profile-footer', {}, [className])}>
      {readonly ? (
        <Button
          theme="outline"
          className="profile-footer__edit"
          onClick={onEdit}
        >
          {t('edit')}
        </Button>
      ) : (
        <div className="profile-footer__buttons">
          <Button
            theme="outline"
            className="profile-footer__cancel"
            onClick={onCancelEdit}
          >
            {t('cancel')}
          </Button>
          <Button className="profile-footer__save" onClick={onSave}>
            {t('save')}
          </Button>
        </div>
      )}
    </div>
  );
};
