import { expect } from 'chai';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import React from 'react';

import Game from '../Game';
import styles from './styles.scss';
import buttonStyles from '../Button/styles.scss';

describe('Component: <Game>', () => {
  it('should render a gameplan containing four buttons', () => {
    const wrapper = mount(<Game />);
    const found = wrapper.find(`.${styles.gameButton}`);

    expect(found).to.have.length(4);
  });

  it('should fire event when button is clicked', () => {
    const onButtonClick = spy();
    const wrapper = mount(<Game onButtonClick={onButtonClick} />);
    const firstButton = wrapper.find(`.${styles.gameButton}`).first();
    firstButton.simulate('click');

    expect(onButtonClick.calledOnce).to.equal(true);
  });

  it('should activate a button when computer provides active button', () => {
    const wrapper = mount(<Game activeButton={1} />);
    const found = wrapper.find(`.${buttonStyles.buttonActive}`);

    expect(found).to.have.length(1);
  });
});
