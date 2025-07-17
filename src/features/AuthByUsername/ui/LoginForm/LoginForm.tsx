import { classNames } from 'shared/lib/classNames/classNames';
import './LoginForm.scss';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/ui/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { loginActions } from '../../model/slice/loginSlice';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { AppDispatch } from 'app/providers/StoreProvider/config/store';
import { Button } from 'shared/ui/Button/ui/Button';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const { username, password, error, isLoading } = useSelector(getLoginState);

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
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      dispatch(loginByUsername({ username, password }));
    },
    [dispatch, username, password],
  );

  return (
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
  );
});

LoginForm.displayName = 'LoginForm';
