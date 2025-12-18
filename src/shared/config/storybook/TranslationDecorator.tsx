import { Decorator } from '@storybook/react';
import { I18nextProvider } from 'react-i18next';
import i18n from 'shared/config/i18n/i18n';
import { Suspense } from 'react';

export const TranslationDecorator: Decorator = (Story) => {
  return (
    <I18nextProvider i18n={i18n}>
      <Suspense fallback="">
        <Story />
      </Suspense>
    </I18nextProvider>
  );
};
