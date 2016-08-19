import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import React from 'react';

import Message from '../Message';
import styles from './styles.scss';

describe('Component: <Message>', () => {
  it('should render a message', () => {
    const wrapper = shallow(<Message />);
    const found = wrapper.find(`.${styles.message}`);

    expect(found).to.have.length(1);
  });

  it('should accept a prop "message"', () => {
    const message = 'test message';
    const wrapper = shallow(<Message message={message} />);
    const found = wrapper.contains(message);

    expect(found).to.equal(true);
  });

  it('should display new message when provided', () => {
    const message = 'test message';
    const wrapper = mount(<Message message={message} />);

    expect(wrapper.props().message).to.equal(message);

    wrapper.setProps({ message: 'new message' });
    expect(wrapper.props().message).to.equal('new message');
  });
});
