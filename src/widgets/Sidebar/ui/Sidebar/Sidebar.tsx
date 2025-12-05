import { classNames } from 'shared/lib/classNames/classNames';
import './Sidebar.scss';
import { GoSidebarExpand } from 'react-icons/go';
import { memo, useMemo, useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { SidebarItemsList } from 'widgets/Sidebar/model/items';
import { SidebarItem } from '../SidebarItem/SidebarItem';

interface SidebarProps {
  className?: string;
}

const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(true);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  const itemsList = useMemo(() => {
    return SidebarItemsList.map((item) => (
      <SidebarItem key={item.path} item={item} className="sidebar__item" />
    ));
  }, []);

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
        <div className="sidebar__items">{itemsList}</div>
        <ThemeSwitcher className="sidebar__theme-button icon-btn" />
      </div>
    </aside>
  );
});

Sidebar.displayName = 'Sidebar';

export default Sidebar;
