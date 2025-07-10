import { classNames } from 'shared/lib/classNames/classNames';
import './LoginForm.scss';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/ui/Input';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  return (
    <form className={classNames('login-form', {}, [className])}>
      <Input className="login-form__input" placeholder={t('Username')} />
      <Input className="login-form__input" placeholder={t('Password')} />
      <button className="login-form__button" type="submit">
        {t('Log in')}
      </button>
    </form>
  );
};
