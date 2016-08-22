import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { spy } from 'sinon';
import React from 'react';

import App from '../App';
import styles from './styles.scss';

import { Menu, Message, Game, Progress } from '../../components';
import menuStyles from '../../components/Menu/styles.scss';
import messageStyles from '../../components/Message/styles.scss';

describe('Container: <App>', () => {
  let shallowWrapper;

  before(() => {
    shallowWrapper = shallow(<App />);
  });

  it('should render an App container', () => {
    const found = shallowWrapper.find(`.${styles.appContainer}`);
    expect(found).to.have.length(1);
  });

  [Menu, Message, Game, Progress].forEach((Component) => {
    it(`should render a <${Component.name}>-component`, () => {
      const found = shallowWrapper.find(Component);
      expect(found).to.have.length(1);
    });
  });

  it('should set state of gameRunning to true when clicking "start game"-button', () => {
    const wrapper = mount(<App />);
    const startButton = wrapper.find(`.${menuStyles.menuButton}`);
    startButton.simulate('click');

    const gameRunning = wrapper.state('gameRunning');
    expect(gameRunning).to.equal(true);
  });

  it('should update the on screen message when clicking "start game"-button', () => {
    const wrapper = mount(<App />);
    const instance = wrapper.instance();
    spy(instance, 'updateMessage');

    const startButton = wrapper.find(`.${menuStyles.menuButton}`);
    startButton.simulate('click');

    expect(instance.updateMessage.calledOnce).to.equal(true);
    expect(wrapper.state('message'))
      .to.equal('Okey, great. I will go first and you just follow along...');
  });

  it('should have an initial state', () => {
    const state = shallowWrapper.state();
    const expectedState = {
      computerSeq: [],
      playerSeq: [],
      gameRunning: false,
      message: 'Let\'s get started! (Click the button 👆)',
      progress: {
        computerTotal: 0,
        playerCurrent: 0,
      },
    };

    expect(state).to.deep.equal(expectedState);
  });

  it('should keep track of players current progress');
  it('should be able to play a sequence of a computer round');
});
