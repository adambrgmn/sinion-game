import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { spy } from 'sinon';
import React from 'react';

import Menu from '../Menu';
import styles from './styles.scss';

import Button from '../Button';

describe('Component: <Menu>', () => {
  it('should render a menu containing two <Button>', () => {
    const wrapper = shallow(<Menu />);
    const menu = wrapper.find(`.${styles.menu}`);
    const button = wrapper.find(Button);

    expect(menu).to.have.length(1);
    expect(button).to.have.length(2);
  });

  it('should render different messages depending on game state', () => {
    const wrapper = shallow(<Menu gameRunning={false} />);

    expect(wrapper.html()).to.contain('Start new game');

    wrapper.setProps({ gameRunning: true });

    expect(wrapper.html()).to.contain('Reset game');
  });

  it('should fire a function when button is clicked', () => {
    const onButtonClick = spy();
    const wrapper = mount(<Menu onNewGameButtonClick={onButtonClick} />);
    const button = wrapper.find(`.${styles.menuButton}`).first();
    button.simulate('click');

    expect(onButtonClick.calledOnce).to.equal(true);
  });

  it('should accept and render children', () => {
    const wrapper = shallow(<Menu><div className="child">Hello</div></Menu>);
    const child = wrapper.find('.child');

    expect(child).to.have.length(1);
  });
});
