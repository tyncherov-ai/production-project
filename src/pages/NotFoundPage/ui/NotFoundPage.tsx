import { classNames } from 'shared/lib/classNames/classNames';
import './NotFoundPage.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface NotFoundPageProps {
  className?: string;
}

const NotFoundPage = ({ className }: NotFoundPageProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames('page__not-found not-found', {}, [className])}>
      <section className="not-found__container">
        <div className="not-found__body">
          <h1 className="not-found__title">{t('Page Not Found')}</h1>
          <Link to="/" className="not-found__link">
            {t('Return to Homepage')}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default NotFoundPage;
