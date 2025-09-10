import { classNames } from 'shared/lib/classNames/classNames';
import './LoginForm.scss';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/ui/Input';
import { useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { Button } from 'shared/ui/Button/ui/Button';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

export interface LoginFormProps {
  className?: string;
  onSuccess?: () => void;
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch],
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch],
  );

  const onLoginClick = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      const result = await dispatch(loginByUsername({ username, password }));
      if (result.meta.requestStatus === 'fulfilled') onSuccess?.();
    },
    [dispatch, username, password, onSuccess],
  );

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount={true}>
      <form
        className={classNames('login-form', {}, [
          className,
          error ? 'error' : '',
        ])}
      >
        <h5 className="login-form__title">{t('Log in')}</h5>
        <Input
          className="login-form__input"
          placeholder={t('Username')}
          value={username}
          onChange={(e) => onChangeUsername(e.target.value)}
        />
        <Input
          className="login-form__input"
          placeholder={t('Password')}
          value={password}
          onChange={(e) => onChangePassword(e.target.value)}
        />
        <div className="login-form__error">
          {t('Incorrect username or password')}
        </div>
        <Button
          className="login-form__button"
          onClick={onLoginClick}
          disabled={isLoading}
        >
          {t('Log in')}
        </Button>
      </form>
    </DynamicModuleLoader>
  );
});

LoginForm.displayName = 'LoginForm';

export default LoginForm;
