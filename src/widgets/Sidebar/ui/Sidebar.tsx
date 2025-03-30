import { classNames } from 'shared/lib/classNames/classNames';
import './Sidebar.scss';
import { GoSidebarExpand, GoHome, GoPeople } from 'react-icons/go';
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import { useTranslation } from 'react-i18next';

interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState(true);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <aside
      data-testid="sidebar"
      className={classNames('sidebar', { collapsed }, [className])}
    >
      <div className="sidebar__body">
        <button
          data-testid="sidebar-btn"
          className="sidebar__open-button icon-btn"
          onClick={onToggle}
        >
          <GoSidebarExpand />
        </button>
        <div className="sidebar__items">
          <AppLink
            className="sidebar__item"
            theme={AppLinkTheme.PRIMARY}
            to={'/'}
          >
            <GoHome />
            <p>{t('Main')}</p>
          </AppLink>
          <AppLink
            className="sidebar__item"
            theme={AppLinkTheme.PRIMARY}
            to={'/about'}
          >
            <GoPeople />
            <p>{t('About')}</p>
          </AppLink>
        </div>
        <ThemeSwitcher className="sidebar__theme-button icon-btn" />
      </div>
    </aside>
  );
};

export default Sidebar;
