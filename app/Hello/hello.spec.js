import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Hello from './index';

describe('Component: Hello', () => {
  it('should render text', () => {
    const wrapper = shallow(<Hello />);
    expect(wrapper.find('#child')).to.have.text('Hello world.');
  });
});
