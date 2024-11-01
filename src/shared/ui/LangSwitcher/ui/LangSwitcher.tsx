import { classNames } from 'shared/lib/classNames/classNames';
import './LangSwitcher.scss';
import { useTranslation } from 'react-i18next';

interface LangSwitcherProps {
    className?: string;
}

const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const langToggle = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
    }

    return (
        <button
            className={classNames('lang-switcher', {}, [className])}
            onClick={langToggle}
        >
            {t('language')}
        </button>
    )
}

export default LangSwitcher