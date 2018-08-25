import React from 'react';
import Representatives from './Representatives';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<Representatives />).toJSON();
  expect(rendered).toBeTruthy();
});