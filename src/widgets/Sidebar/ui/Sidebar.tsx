import { classNames } from 'shared/lib/classNames/classNames';
import './Sidebar.scss';
import { GoSidebarExpand } from 'react-icons/go';
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';

interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
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
        <div className="sidebar__labels"></div>
        <ThemeSwitcher className="sidebar__theme-button icon-btn" />
      </div>
    </aside>
  );
};

export default Sidebar;
