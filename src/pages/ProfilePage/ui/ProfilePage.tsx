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
  profileActions,
  ProfileCard,
  profileReducer,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = () => {
  const dispatch = useAppDispatch();

  const formData = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const readonly = useSelector(getProfileReadonly);

  useEffect(() => {
    dispatch(fetchProfileData());
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
          <ProfilePageHeader />
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
        </div>
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
