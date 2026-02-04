import { memo } from 'react';
import { getUserAuthData } from 'entities/User';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';

import { SidebarItemType } from '../../model/types/sidebar';

interface SidebarItemProps {
  className?: string;
  item: SidebarItemType;
}

export const SidebarItem = memo(({ item, className }: SidebarItemProps) => {
  const { t } = useTranslation();
  const isAuth = useSelector(getUserAuthData);

  if (item.authOnly && !isAuth) {
    return null;
  }

  return (
    <AppLink className={className} theme={AppLinkTheme.PRIMARY} to={item.path}>
      <item.Icon />
      <p>{t(item.text)}</p>
    </AppLink>
  );
});

SidebarItem.displayName = 'SidebarItem';
