import { StoryFn } from '@storybook/react/*';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn) => (
  <ThemeProvider initialTheme={theme}>
    <html data-theme={theme}>
      <body style={{ height: '100vh' }}>
        <StoryComponent />
      </body>
    </html>
  </ThemeProvider>
);
