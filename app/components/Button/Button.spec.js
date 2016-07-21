import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Button from '../Button';
import styles from './styles.scss';

describe('Component: Button', () => {
  it('should render a button', () => {
    const wrapper = shallow(<Button />);
    const button = wrapper.find(`.${styles.button}`);

    expect(button).to.have.length(1);
  });

  it('should fire an event on click', () => {
    const onButtonClick = sinon.spy();
    const wrapper = shallow(<Button onButtonClick={onButtonClick} />);
    wrapper.find(`.${styles.button}`).simulate('click');

    expect(onButtonClick.calledOnce).to.be.true; // eslint-disable-line no-unused-expressions
  });

  it('should accept custom class names', () => {
    const customClassName = 'custom';
    const wrapper = shallow(<Button customClassName={customClassName} />);
    const button = wrapper.find('.custom');

    expect(button).to.have.length(1);
  });
});
