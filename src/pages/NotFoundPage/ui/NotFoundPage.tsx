import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'shared/ui';

import './NotFoundPage.scss';

interface NotFoundPageProps {
  className?: string;
}

const NotFoundPage = ({ className }: NotFoundPageProps) => {
  const { t } = useTranslation();
  return (
    <Page className={classNames('page-not-found', {}, [className])}>
      <section className="page-not-found__container">
        <div className="page-not-found__body">
          <h1 className="page-not-found__title">{t('pageNotFound')}</h1>
          <Link to="/" className="page-not-found__link">
            {t('returnToHomepage')}
          </Link>
        </div>
      </section>
    </Page>
  );
};

export default NotFoundPage;
