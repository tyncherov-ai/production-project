import { StoryFn } from '@storybook/react/*';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn) => (
  <html data-theme={theme}>
    <body style={{ height: '100vh' }}>
      <StoryComponent />
    </body>
  </html>
);
