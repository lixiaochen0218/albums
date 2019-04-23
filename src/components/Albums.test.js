import React from 'react';
import ReactDOM from 'react-dom';
import Albums from './Albums';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Albums />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders App Bar', () => {
  const wrapper = shallow(<Albums />);
  expect(wrapper.find('.App')).to.have.lengthOf(1);
});

it('renders list inside Grid', () => {
  const wrapper = shallow(<Albums />);
  wrapper.find('.List').forEach((node) => {
    expect(node.hasClass('ListItem')).to.equal(true)
  })
});
