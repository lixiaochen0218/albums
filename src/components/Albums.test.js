import React from 'react';
import ReactDOM from 'react-dom';
import Albums from './Albums';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import MOCK_DATA from '../Mock_data';
fetch = require('jest-fetch-mock')

const setup = () => {
  const props = {
  }

  const wrapper = shallow(<Albums {...props} />)
  return {
    props,
    wrapper
  }
}

const { wrapper, props } = setup();




beforeAll(()=> {
  fetch.mockResponseOnce(JSON.stringify({ data: MOCK_DATA }))
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Albums />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders App Bar', () => {
  expect(wrapper.find('.App')).to.have.lengthOf(1);
});

it('List exists', () => {
  expect(wrapper.find('.List').exists());
});

it('renders list inside Grid', () => {
  wrapper.find('.List').forEach((node,index) => {
    console.log(index);
    assert.isTrue(node.hasClass('ListItem'));
  })
});

