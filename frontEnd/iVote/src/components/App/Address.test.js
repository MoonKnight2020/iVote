import React from 'react';
import Address from './Address';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<Address />).toJSON();
  expect(rendered).toBeTruthy();
});