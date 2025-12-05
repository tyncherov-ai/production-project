import { StoryFn } from '@storybook/react';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';

export const ThemeDecorator = (theme: Theme) => {
  const Decorator = (StoryComponent: StoryFn) => (
    <ThemeProvider initialTheme={theme}>
      <div
        data-theme={theme}
        style={{
          minHeight: '100vh',
          backgroundColor: 'var(--bg-primary)',
          color: 'var(--text-primary)',
        }}
      >
        <StoryComponent />
      </div>
    </ThemeProvider>
  );
  return Decorator;
};
