import { lazy } from 'react';

export const MainPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-expect-error ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!! ЭТО ДЛЯ КУРСА!!
      setTimeout(() => resolve(import('./MainPage')), 1500);
    }),
);
