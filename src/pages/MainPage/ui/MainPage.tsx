import { useTranslation } from 'react-i18next';
import './MainPage.scss';
import { Counter } from 'entities/Counter';
import { Input } from 'shared/ui/Input/ui/Input';
import { useState } from 'react';

const MainPage = () => {
  const { t } = useTranslation();
  const [value, setValue] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="page__main main">
      <div className="main__container">
        <div> {t('Main')}</div>
        <Counter />
        <Input onChange={onChange} value={value} placeholder="Login" />
      </div>
    </div>
  );
};

export default MainPage;
