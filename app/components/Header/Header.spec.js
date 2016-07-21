import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import Header from '../Header';
import styles from './styles.scss';

describe('Component: Header', () => {
  it('should render a logo', () => {
    const wrapper = shallow(<Header />);
    const logo = wrapper.find(`.${styles.headerLogo}`);

    expect(logo).to.have.length(1);
  });

  it('should render a button', () => {
    const wrapper = shallow(<Header />);
    const button = wrapper.find(`.${styles.buttonHowTo}`);

    expect(button).to.have.length(1);
  });

  it.skip('should fire event when clicking button', () => {
    const onButtonHowToClick = sinon.spy();
    const wrapper = mount(<Header onButtonHowToClick={onButtonHowToClick} />);

    wrapper.find('.buttonHowTo').simulate('click');
    expect(onButtonHowToClick.calledOnce).to.be.true; // eslint-disable-line no-unused-expressions
  });
});
