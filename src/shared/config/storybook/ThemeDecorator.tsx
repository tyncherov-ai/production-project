import { StoryFn } from '@storybook/react';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';

export const ThemeDecorator = (theme: Theme) => {
  const Decorator = (StoryComponent: StoryFn) => (
    <ThemeProvider initialTheme={theme}>
      <html data-theme={theme}>
        <body style={{ height: '100vh' }}>
          <StoryComponent />
        </body>
      </html>
    </ThemeProvider>
  );
  return Decorator;
};
