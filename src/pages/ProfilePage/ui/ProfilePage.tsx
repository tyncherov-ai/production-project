import { useEffect } from 'react';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
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
import { getUserAuthData } from 'entities/User';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

import { ProfilePageFooter } from './ProfilePageFooter/ProfilePageFooter';

import './ProfilePage.scss';

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation('profile');
  const { id } = useParams<{ id: string }>();

  const authData = useSelector(getUserAuthData);
  const formData = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const readonly = useSelector(getProfileReadonly);
  const validateErrors = useSelector(getProfileValidateErrors);

  const profileId = id || authData?.id;

  const validateErrorsTranslates = {
    [ValidateProfileError.INCORRECT_USER_DATA]: t('errors.incorrectUserData'),
    [ValidateProfileError.INCORRECT_AGE]: t('errors.incorrectAge'),
    [ValidateProfileError.INCORRECT_COUNTRY]: t('errors.incorrectCountry'),
    [ValidateProfileError.NO_DATA]: t('errors.noData'),
    [ValidateProfileError.SERVER_ERROR]: t('errors.serverError'),
    [ValidateProfileError.INCORRECT_USERNAME]: t('errors.incorrectUsername'),
  };

  useEffect(() => {
    if (__PROJECT__ !== 'storybook' && profileId)
      dispatch(fetchProfileData(profileId));
  }, [dispatch, profileId]);

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
          <h4 className="profile-header__title">{t('profile')}</h4>
          {validateErrors?.length &&
            validateErrors.map((err: ValidateProfileError) => (
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
