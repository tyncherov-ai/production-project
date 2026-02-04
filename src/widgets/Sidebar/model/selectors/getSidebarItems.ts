import { getUserAuthData } from 'entities/User';
import { GoHome, GoNote, GoPeople, GoPerson } from 'react-icons/go';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

import { createSelector } from '@reduxjs/toolkit';

import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
  const sidebarItemsList: SidebarItemType[] = [
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
  ];

  if (userData) {
    sidebarItemsList.push(
      {
        path: RoutePath.profile + userData.id,
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
    );
  }

  return sidebarItemsList;
});
