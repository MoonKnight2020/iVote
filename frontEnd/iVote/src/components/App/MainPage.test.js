import React from 'react';
import MainPage from './MainPage';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<MainPage />).toJSON();
  expect(rendered).toBeTruthy();
});