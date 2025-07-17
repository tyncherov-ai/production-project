import { useTranslation } from 'react-i18next';
import './MainPage.scss';
import { Counter } from 'entities/Counter';

const MainPage = () => {
  const { t } = useTranslation();

  return (
    <div className="page__main main">
      <div className="main__container">
        <div> {t('Main')}</div>
        <Counter />
      </div>
    </div>
  );
};

export default MainPage;
