import { BrowserRouter } from 'react-router-dom';

import { StoryFn } from '@storybook/react';

export const RouteDecorator = (StoryComponent: StoryFn) => (
  <BrowserRouter>
    <StoryComponent />
  </BrowserRouter>
);
