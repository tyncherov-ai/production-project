import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';

import './NotFoundPage.scss';

interface NotFoundPageProps {
  className?: string;
}

const NotFoundPage = ({ className }: NotFoundPageProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames('page__not-found not-found', {}, [className])}>
      <section className="not-found__container">
        <div className="not-found__body">
          <h1 className="not-found__title">{t('pageNotFound')}</h1>
          <Link to="/" className="not-found__link">
            {t('returnToHomepage')}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default NotFoundPage;
