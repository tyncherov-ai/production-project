import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

import './LangSwitcher.scss';

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = memo(({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const langToggle = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
  };

  return (
    <button
      className={classNames('lang-switcher', {}, [className])}
      onClick={langToggle}
    >
      {t('language')}
    </button>
  );
});

LangSwitcher.displayName = 'LangSwitcher';
