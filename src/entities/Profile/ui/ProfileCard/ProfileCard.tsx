import { classNames } from 'shared/lib/classNames/classNames';
import './ProfileCard.scss';
import { useSelector } from 'react-redux';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { useTranslation } from 'react-i18next';

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
  const { t } = useTranslation('profile');
  const data = useSelector(getProfileData);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  return (
    <div className={classNames('profile-card', {}, [className])}>
      <h4 className="profile-card__title">{t('Profile')}</h4>
    </div>
  );
};
