import React from 'react';
import Elections from './Elections';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<Elections />).toJSON();
  expect(rendered).toBeTruthy();
});