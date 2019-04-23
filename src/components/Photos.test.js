import React from 'react';
import { shallow } from 'enzyme';
import Photos from './Photos';
import MOCK_DATA2 from '../Mock_data2';
import { APIRequest } from './Photos';

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
  // expect(wrapper.find('.image')).toHaveLength(10);
  expect(wrapper.find('.image').exists());
  expect(wrapper.instance().componentDidMount());
});

it('renders list inside Grid', () => {
  wrapper.find('GridList').forEach((node) => {
    assert.isTrue(node.hasClass('GridListTile'))
  })
});


