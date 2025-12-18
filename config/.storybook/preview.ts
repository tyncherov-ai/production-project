import { Preview, type Decorator } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator';
import { RouteDecorator } from '../../src/shared/config/storybook/RouteDecorator';
import { Theme } from '../../src/app/providers/ThemeProvider';
import '../../src/app/styles/index.scss';

import { TranslationDecorator } from '../../src/shared/config/storybook/TranslationDecorator';

const decorators: Decorator[] = [
  TranslationDecorator,
  StyleDecorator,
  ThemeDecorator(Theme.LIGHT),
  RouteDecorator,
];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators,
};

export default preview;
