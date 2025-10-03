import { classNames } from 'shared/lib/classNames/classNames';
import './ProfileCard.scss';
import { useTranslation } from 'react-i18next';
import { Profile } from '../../model/types/profile';
import { PageLoader } from 'widgets/PageLoader';
import { Input } from 'shared/ui/Input';
import { Avatar } from 'shared/ui/Avatar';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string;
  readonly?: boolean;
  onChangeFirstName?: (value?: string) => void;
  onChangeLastName?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeCurrency?: (value?: Currency) => void;
  onChangeCountry?: (value?: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
  const {
    className,
    data,
    isLoading,
    error,
    readonly,
    onChangeFirstName,
    onChangeLastName,
    onChangeAge,
    onChangeCity,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
  } = props;
  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <div className={classNames('profile-card', {}, [className])}>
        <PageLoader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames('profile-card', {}, [className])}>
        <p className="profile-card__error">
          {t('An error occurred while loading the profile')}
        </p>
      </div>
    );
  }

  return (
    <div className={classNames('profile-card', {}, [className])}>
      <Avatar size={120} src={data?.avatar} className="profile-card__avatar" />
      <div className="profile-card__form">
        <div className="profile-card__row">
          <label className="profile-card__label">{t('Your name')}</label>
          <Input
            value={data?.firstname}
            placeholder={t('Your name')}
            onChange={(e) => onChangeFirstName?.(e.target.value)}
            readOnly={readonly}
            className="profile-card__input"
          />
        </div>
        <div className="profile-card__row">
          <label className="profile-card__label">{t('Your surname')}</label>
          <Input
            value={data?.lastname}
            placeholder={t('Your surname')}
            onChange={(e) => onChangeLastName?.(e.target.value)}
            readOnly={readonly}
            className="profile-card__input"
          />
        </div>
        <div className="profile-card__row">
          <label className="profile-card__label">{t('Your age')}</label>
          <Input
            value={data?.age}
            placeholder={t('Your age')}
            onChange={(e) => onChangeAge?.(e.target.value)}
            readOnly={readonly}
            className="profile-card__input"
          />
        </div>
        <div className="profile-card__row">
          <label className="profile-card__label">{t('Your city')}</label>
          <Input
            value={data?.city}
            placeholder={t('Your city')}
            onChange={(e) => onChangeCity?.(e.target.value)}
            readOnly={readonly}
            className="profile-card__input"
          />
        </div>
        <div className="profile-card__row">
          <label className="profile-card__label">{t('Your username')}</label>
          <Input
            value={data?.username}
            placeholder={t('Your username')}
            onChange={(e) => onChangeUsername?.(e.target.value)}
            readOnly={readonly}
            className="profile-card__input"
          />
        </div>
        <div className="profile-card__row">
          <label className="profile-card__label">{t('Your avatar link')}</label>
          <Input
            value={data?.avatar}
            placeholder={t('Your avatar link')}
            onChange={(e) => onChangeAvatar?.(e.target.value)}
            readOnly={readonly}
            className="profile-card__input"
          />
        </div>
        <div className="profile-card__row">
          <label className="profile-card__label">
            {t('Choose your currency')}
          </label>
          <CurrencySelect
            value={data?.currency}
            onChange={onChangeCurrency}
            readonly={readonly}
            className="profile-card__input"
          />
        </div>
        <div className="profile-card__row">
          <label className="profile-card__label">
            {t('Choose your country')}
          </label>
          <CountrySelect
            value={data?.country}
            onChange={onChangeCountry}
            readonly={readonly}
            className="profile-card__input"
          />
        </div>
      </div>
    </div>
  );
};
