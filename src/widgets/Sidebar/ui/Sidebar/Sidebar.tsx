import { memo, useMemo, useState } from 'react';
import { GoSidebarExpand } from 'react-icons/go';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { getSidebarItems } from 'widgets/Sidebar/model/selectors/getSidebarItems';

import { SidebarItem } from '../SidebarItem/SidebarItem';

import './Sidebar.scss';

interface SidebarProps {
  className?: string;
}

const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(true);

  const sidebarItemsList = useSelector(getSidebarItems);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  const itemsList = useMemo(() => {
    return sidebarItemsList.map((item) => (
      <SidebarItem key={item.path} item={item} className="sidebar__item" />
    ));
  }, [sidebarItemsList]);

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
