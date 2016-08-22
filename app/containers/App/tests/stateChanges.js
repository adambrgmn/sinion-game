import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import React from 'react';

import App from '../../App';

import menuStyles from '../../../components/Menu/styles.scss';

export default function stateChanges() {
  return describe('State changes:', () => {
    it('should have an initial state', () => {
      const wrapper = shallow(<App />);
      const state = wrapper.state();
      const expectedState = {
        computerSeq: [],
        playerSeq: [],
        gameRunning: false,
        computerPlaying: false,
        activeButton: undefined,
        error: false,
        message: 'Let\'s get started! (Click the button 👆)',
        progress: {
          computerTotal: 0,
          playerCurrent: 0,
        },
      };

      expect(state).to.deep.equal(expectedState);
    });

    it('should set state of gameRunning to true when clicking "start game"-button', () => {
      const wrapper = mount(<App />);
      const startButton = wrapper.find(`.${menuStyles.menuButton}`);
      startButton.simulate('click');

      const gameRunning = wrapper.state('gameRunning');

      expect(gameRunning).to.equal(true);
    });

    it('should update state of message when clicking "start game"-button', () => {
      const wrapper = mount(<App />);
      const button = wrapper.find(`.${menuStyles.menuButton}`);
      button.simulate('click');

      expect(wrapper.state('message'))
        .to.equal('Okey, great. I will go first and you just follow along...');
    });
  });
}
