import { useTranslation } from 'react-i18next';
import './MainPage.scss'

const MainPage = () => {
    const { t } = useTranslation();
    return (
        <div className='page__main main'>
            <div className='main__container'>
                {t('Main')}
            </div>
        </div>
    )
}

export default MainPage