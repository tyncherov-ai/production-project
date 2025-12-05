import { IconType } from 'react-icons';
import { GoHome, GoNote, GoPeople, GoPerson } from 'react-icons/go';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

export interface SidebarItemType {
  path: string;
  text: string;
  Icon: IconType;
  authOnly?: boolean;
}

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: RoutePath.main,
    Icon: GoHome,
    text: 'main',
  },
  {
    path: RoutePath.about,
    Icon: GoPeople,
    text: 'about',
  },
  {
    path: RoutePath.profile,
    Icon: GoPerson,
    text: 'profile',
    authOnly: true,
  },
  {
    path: RoutePath.articles,
    Icon: GoNote,
    text: 'articles',
    authOnly: true,
  },
];
