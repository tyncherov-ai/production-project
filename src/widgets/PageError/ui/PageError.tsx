import { classNames } from 'shared/lib/classNames/classNames';
import './PageError.scss';
import { useTranslation } from 'react-i18next';

interface PageErrorProps {
  className?: string;
}

const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation();
  const reloadPage = () => {
    location.reload();
  };

  return (
    <div className={classNames('page-error', {}, [className])}>
      <p className="page-error__text">{t('Something went wrong')};)</p>
      <button className="page-error__button" onClick={reloadPage}>
        {t('Reload page')}
      </button>
    </div>
  );
};

export default PageError;
