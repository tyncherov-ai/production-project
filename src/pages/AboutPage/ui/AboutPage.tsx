import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui';

import './AboutPage.scss';

const AboutPage = () => {
  const { t } = useTranslation();
  return (
    <Page className="page-about">
      <div className="page-about__container">{t('about')}</div>
    </Page>
  );
};

export default AboutPage;
