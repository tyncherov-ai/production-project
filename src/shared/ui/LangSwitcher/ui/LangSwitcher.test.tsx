import { render, screen } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
import LangSwitcher from 'shared/ui/LangSwitcher/ui/LangSwitcher';

// Initialize i18n for testing
i18n.init({
  resources: {
    en: {
      translation: {
        language: 'English',
      },
    },
    ru: {
      translation: {
        language: 'Русский',
      },
    },
  },
  lng: 'en',
  fallbackLng: 'en',
});

describe('LangSwitcher component', () => {
  test('renders the component with English text', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <LangSwitcher />
      </I18nextProvider>,
    );
    expect(screen.getByText('English')).toBeInTheDocument();
  });
});
