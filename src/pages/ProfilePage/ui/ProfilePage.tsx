import './ProfilePage.scss';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  fetchProfileData,
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileReadonly,
  getProfileValidateErrors,
  profileActions,
  ProfileCard,
  profileReducer,
  ValidateProfileError,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ProfilePageFooter } from './ProfilePageFooter/ProfilePageFooter';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { useTranslation } from 'react-i18next';

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation('profile');

  const formData = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const readonly = useSelector(getProfileReadonly);
  const validateErrors = useSelector(getProfileValidateErrors);

  const validateErrorsTranslates = {
    [ValidateProfileError.INCORRECT_USER_DATA]: t('errors.Incorrect user data'),
    [ValidateProfileError.INCORRECT_AGE]: t('errors.Incorrect age'),
    [ValidateProfileError.INCORRECT_COUNTRY]: t('errors.Incorrect country'),
    [ValidateProfileError.NO_DATA]: t('errors.No data'),
    [ValidateProfileError.SERVER_ERROR]: t('errors.Server error'),
    [ValidateProfileError.INCORRECT_USERNAME]: t('errors.Incorrect username'),
  };

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') dispatch(fetchProfileData());
  }, [dispatch]);

  const onChangeFirstName = (value?: string) => {
    dispatch(profileActions.updateProfile({ firstname: value || '' }));
  };

  const onChangeLastName = (value?: string) => {
    dispatch(profileActions.updateProfile({ lastname: value || '' }));
  };
  const onChangeAge = (value?: string) => {
    if (!value || /^\d*$/.test(value)) {
      dispatch(profileActions.updateProfile({ age: Number(value) || 0 }));
    }
  };
  const onChangeCity = (value?: string) => {
    dispatch(profileActions.updateProfile({ city: value || '' }));
  };

  const onChangeUsername = (value?: string) => {
    dispatch(profileActions.updateProfile({ username: value || '' }));
  };

  const onChangeAvatar = (value?: string) => {
    dispatch(profileActions.updateProfile({ avatar: value || '' }));
  };

  const onChangeCurrency = (cur?: Currency) => {
    dispatch(profileActions.updateProfile({ currency: cur || Currency.UZS }));
  };

  const onChangeCountry = (country?: Country) => {
    dispatch(profileActions.updateProfile({ country: country || Country.UZ }));
  };

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className="page__profile profile">
        <div className="profile__container">
          <h4 className="profile-header__title">{t('Profile')}</h4>
          {validateErrors?.length &&
            validateErrors.map((err) => (
              <div
                key={err}
                className="profile__validate-error"
                data-testid="ProfilePage.Error"
              >
                {validateErrorsTranslates[err]}
              </div>
            ))}
          <ProfileCard
            data={formData}
            isLoading={isLoading}
            error={error}
            onChangeFirstName={onChangeFirstName}
            onChangeLastName={onChangeLastName}
            onChangeAge={onChangeAge}
            onChangeCity={onChangeCity}
            onChangeUsername={onChangeUsername}
            onChangeAvatar={onChangeAvatar}
            onChangeCurrency={onChangeCurrency}
            onChangeCountry={onChangeCountry}
            readonly={readonly}
          />
          <ProfilePageFooter />
        </div>
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
