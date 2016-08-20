import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';

import Progress from '../Progress';
import styles from './styles.scss';

import Paragraph from '../Paragraph';

describe('Component: <Progress>', () => {
  it('should render a paragraph of completed and level', () => {
    const wrapper = shallow(<Progress />);
    const found = wrapper.find(Paragraph);

    expect(found).to.have.length(1);
  });

  it('should print out players current and computer total', () => {
    const props = {
      playerCurrent: 2,
      computerTotal: 10,
    };
    const wrapper = shallow(<Progress {...props} />);
    const foundPlayer = wrapper.contains(props.playerCurrent);
    const foundComputer = wrapper.contains(props.playerTotal);

    expect(foundPlayer).to.equal(true);
    expect(foundComputer).to.equal(true);
  });

  it('should update when props is updated');
});
