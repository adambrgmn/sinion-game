import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { spy } from 'sinon';
import React from 'react';

import Hint from '../Hint';
import styles from './styles.scss';

const cx = {
  container: `.${styles.hintContainer}`,
  button: `.${styles.hintButton}`,
  window: `.${styles.hintWindow}`,
  exit: `.${styles.hintExit}`,
};

describe('Container: <Hint>', () => {
  it('should render container and a button as default', () => {
    const wrapper = mount(<Hint />);
    const container = wrapper.find(cx.container);
    const button = wrapper.find(cx.button);

    expect(container).to.have.length(1);
    expect(button).to.have.length(1);
  });

  it('should react to button getting clicked', () => {
    const wrapper = mount(<Hint />);
    const button = wrapper.find(cx.button);
    button.simulate('click');

    expect(wrapper.state().showHint).to.equal(true);
  });

  it('should render hint window when clicking button', () => {
    const wrapper = mount(<Hint />);
    const button = wrapper.find(cx.button);

    expect(wrapper.find(cx.window)).to.have.length(0);

    button.simulate('click');
    expect(wrapper.find(cx.window)).to.have.length(1);
  });

  it('should hide that window when clicking exit', () => {
    const wrapper = mount(<Hint />);
    wrapper.setState({ showHint: true });

    const exit = wrapper.find(cx.exit);
    exit.simulate('click');

    expect(wrapper.state().showHint).to.equal(false);
  });
});
