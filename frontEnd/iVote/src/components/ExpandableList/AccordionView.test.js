import React from 'react';
import AccordionView from './AccordionView';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    const rendered = renderer.create(<AccordionView />).toJSON();
expect(rendered).toBeTruthy();
});