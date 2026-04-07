import { Counter } from 'entities/Counter';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page';

import './MainPage.scss';

const MainPage = () => {
  const { t } = useTranslation();

  return (
    <Page className="page-main">
      <div className="page-main__container">
        <div> {t('main')}</div>
        <Counter />
      </div>
    </Page>
  );
};

export default MainPage;
