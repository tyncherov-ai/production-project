import { useTranslation } from 'react-i18next';
import './AboutPage.scss';

const AboutPage = () => {
  const { t } = useTranslation();
  return (
    <div className="page__about about">
      <div className="about__container">{t('About')}</div>
    </div>
  );
};

export default AboutPage;
