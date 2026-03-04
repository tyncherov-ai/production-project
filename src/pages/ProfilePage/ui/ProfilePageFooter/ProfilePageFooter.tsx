import { useCallback } from 'react';
import {
  getProfileData,
  getProfileReadonly,
  profileActions,
  updateProfileData,
} from 'entities/Profile';
import { getUserAuthData } from 'entities/User';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Button } from 'shared/ui';

import './ProfilePageFooter.scss';

interface ProfilePageFooterProps {
  className?: string;
}

export const ProfilePageFooter = ({ className }: ProfilePageFooterProps) => {
  const { t } = useTranslation('profile');
  const readonly = useSelector(getProfileReadonly);
  const dispatch = useAppDispatch();
  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);
  const canEdit = authData?.id === profileData?.id;

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
      {canEdit && (
        <>
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
        </>
      )}
    </div>
  );
};
