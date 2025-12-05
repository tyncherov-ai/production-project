import { FC, lazy } from 'react';
import { LoginFormProps } from './LoginForm';

export const LoginFormAsync = lazy<FC<LoginFormProps>>(
  () =>
    new Promise((resolve) => {
      //  ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!! ЭТО ДЛЯ КУРСА!!
      setTimeout(() => resolve(import('./LoginForm')), 1500);
    }),
);
