import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import { SidebarItemType } from 'widgets/Sidebar/model/items';

interface SidebarItemProps {
  className?: string;
  item: SidebarItemType;
}

export const SidebarItem = memo(({ item, className }: SidebarItemProps) => {
  const { t } = useTranslation();

  return (
    <AppLink className={className} theme={AppLinkTheme.PRIMARY} to={item.path}>
      <item.Icon />
      <p>{t(item.text)}</p>
    </AppLink>
  );
});

SidebarItem.displayName = 'SidebarItem';
