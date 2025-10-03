import { classNames } from 'shared/lib/classNames/classNames';
import './ProfilePageHeader.scss';
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

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
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
    <div className={classNames('profile-header', {}, [className])}>
      <h4 className="profile-header__title">{t('Profile')}</h4>
      {readonly ? (
        <Button
          theme="outline"
          className="profile-header__edit"
          onClick={onEdit}
        >
          {t('Edit')}
        </Button>
      ) : (
        <div className="profile-header__buttons">
          <Button className="profile-header__save" onClick={onSave}>
            {t('Save')}
          </Button>
          <Button
            theme="outline"
            className="profile-header__cancel"
            onClick={onCancelEdit}
          >
            {t('Cancel')}
          </Button>
        </div>
      )}
    </div>
  );
};
