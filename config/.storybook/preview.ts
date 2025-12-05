import { Preview, type Decorator } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator';
import { RouteDecorator } from '../../src/shared/config/storybook/RouteDecorator';
import { Theme } from '../../src/app/providers/ThemeProvider';
import '../../src/app/styles/index.scss';

const decorators: Decorator[] = [
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
