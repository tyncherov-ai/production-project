import { lazy } from 'react';

export const AboutPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-expect-error ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!! ЭТО ДЛЯ КУРСА!!
      setTimeout(() => resolve(import('./AboutPage')), 1500);
    }),
);
