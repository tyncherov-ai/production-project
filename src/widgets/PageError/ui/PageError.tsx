import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

import './PageError.scss';

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
      <p className="page-error__text">{t('somethingWentWrong')};)</p>
      <button className="page-error__button" onClick={reloadPage}>
        {t('reloadPage')}
      </button>
    </div>
  );
};

export default PageError;
