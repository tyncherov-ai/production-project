import { FC, lazy } from 'react';

import { AddCommentFormProps } from './AddCommentForm';

export const AddCommentFormAsync = lazy<FC<AddCommentFormProps>>(
  () =>
    new Promise((resolve) => {
      // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!! ЭТО ДЛЯ КУРСА!!
      setTimeout(() => resolve(import('./AddCommentForm')), 1500);
    }),
);
