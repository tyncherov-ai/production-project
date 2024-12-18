import { useTranslation } from 'react-i18next';
import './MainPage.scss';

const MainPage = () => {
  const { t } = useTranslation();
  return (
    <div className="page__main main">
      <div className="main__container">
        <div> {t('Main')}</div>
      </div>
    </div>
  );
};

export default MainPage;
