import { Meta, StoryObj } from '@storybook/react';
import { Code } from './Code';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof Code> = {
  title: 'shared/Code',
  component: Code,
  argTypes: {
    className: { control: 'text' },
  },
  args: {
    className: '',
    text: "const newFeatures = ['decorators', 'pattern matching', 'realms'];\nconst es2025Release = {\n  version: 'ES2025',\n  date: 'June 2025',\n  features: newFeatures.map(f => `Stage 4: ${f}`)\n};\nconsole.log(es2025Release);",
  },
};

export default meta;

type Story = StoryObj<typeof Code>;

export const Default: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
