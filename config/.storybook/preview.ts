import { type Decorator, Preview } from '@storybook/react-webpack5';

import { Theme } from '../../src/app/providers/ThemeProvider';
import { RouteDecorator } from '../../src/shared/config/storybook/RouteDecorator';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator';
import { TranslationDecorator } from '../../src/shared/config/storybook/TranslationDecorator';

import '../../src/app/styles/index.scss';

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
