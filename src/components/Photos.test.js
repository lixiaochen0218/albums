import React from 'react';
import { shallow } from 'enzyme';
import Photos from './Photos';

it('renders without crashing', () => {
  shallow(<Photos match={{ params: { aid: 5 } }} />);
});