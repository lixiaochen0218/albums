import React from 'react';
import { shallow } from 'enzyme';
import Photos from './Photos';

const setup = () => {
  const props = {
    match : {
      params : { aid: 5 }
    }
  }

  const wrapper = shallow(<Photos {...props} />)
  return {
    props,
    wrapper
  }
}

const { wrapper, props } = setup();

it('renders without crashing', () => {
  shallow(<Photos match={{ params: { aid: 5 } }} />);
});

it('thumbnails exists', () => {
  expect(wrapper.find('.image').exists());
});

it('renders list inside Grid', () => {
  wrapper.find('GridList').forEach((node) => {
    assert.isTrue(node.hasClass('GridListTile'))
  })
});