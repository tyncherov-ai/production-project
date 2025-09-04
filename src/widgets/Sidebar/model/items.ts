import { IconType } from 'react-icons';
import { GoHome, GoPeople, GoPerson } from 'react-icons/go';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

export interface SidebarItemType {
  path: string;
  text: string;
  Icon: IconType;
}

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: RoutePath.main,
    Icon: GoHome,
    text: 'Main',
  },
  {
    path: RoutePath.about,
    Icon: GoPeople,
    text: 'About',
  },
  {
    path: RoutePath.profile,
    Icon: GoPerson,
    text: 'Profile',
  },
];
