import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import React from 'react';

import Button from '../Button';
import styles from './styles.scss';

describe('Component: <Button>', () => {
  it('should render a button', () => {
    const wrapper = shallow(<Button />);
    const foundButton = wrapper.find(`.${styles.button}`);

    expect(foundButton).to.have.length(1);
  });

  it('should fire a function when clicked', () => {
    const onButtonClick = sinon.spy();
    const wrapper = shallow(<Button onButtonClick={onButtonClick} />);
    wrapper.find(`.${styles.button}`).simulate('click');

    expect(onButtonClick.calledOnce).to.equal(true);
  });

  it('should render children, when passed', () => {
    const child = 'Text';
    const wrapper = shallow(<Button>child</Button>);
    const found = wrapper.contains(child);

    expect(found).to.equal(true);
  });

  it('should accept custom classnames', () => {
    const className = 'customButtonClass';
    const wrapper = shallow(<Button customClassName={className} />);
    const foundButton = wrapper.find(`.${className}`);

    expect(foundButton).to.have.length(1);
  });
});
