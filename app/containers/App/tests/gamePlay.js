import { expect } from 'chai';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import React from 'react';

import App from '../../App';

export default function gamePlay() {
  return describe('Game play:', () => {
    it('should play a sequence of the computers round', () => {
      const wrapper = mount(<App />);
      const instance = wrapper.instance();
      spy(instance, 'playComputerRound');

      instance.playComputerRound();

      expect(wrapper.state().computerPlaying).to.equal(true);
      expect(instance.playComputerRound.calledOnce).to.equal(true);
    });

    it('should add one more tile to the game on each call', () => {
      const wrapper = mount(<App />);
      const instance = wrapper.instance();

      instance.playComputerRound();
      expect(wrapper.state().computerSeq).to.have.length(1);

      instance.playComputerRound();
      expect(wrapper.state().computerSeq).to.have.length(2);
    });

    it('should keep track of progress when player clicks on game plan', () => {
      const wrapper = mount(<App />);
      const instance = wrapper.instance();

      wrapper.setState({ computerSeq: [1, 2, 3] });

      instance.onPlayerPressEnd(1);
      expect(wrapper.state().playerSeq).to.deep.equal([1]);

      instance.onPlayerPressEnd(2);
      expect(wrapper.state().playerSeq).to.deep.equal([1, 2]);
    });

    it('should reset playerSeq when the player completed a full sequence', () => {
      const wrapper = mount(<App />);
      const instance = wrapper.instance();

      wrapper.setState({ computerSeq: [1, 2, 3] });

      instance.onPlayerPressEnd(1);
      instance.onPlayerPressEnd(2);
      instance.onPlayerPressEnd(3);

      expect(wrapper.state().playerSeq).to.deep.equal([]);
    });

    it('should fire an alert if player clicks the wrong button', () => {
      const wrapper = mount(<App />);
      const instance = wrapper.instance();

      wrapper.setState({ computerSeq: [1] });
      instance.onPlayerPressEnd(2);

      expect(wrapper.state().error).to.equal(true);
    });
  });
}
