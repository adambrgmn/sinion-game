import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import List from '../List';
import styles from './styles.scss';

describe('Component: List', () => {
  it('should render a list', () => {
    const wrapper = shallow(<List />);
    const list = wrapper.find(`.${styles.list}`);

    expect(list).to.have.length(1);
  });

  it('should render list items', () => {
    const wrapper = shallow(
      <List items={['item 1', 'item 2']} />
    );
    const listItems = wrapper.find(`.${styles.listItem}`);

    expect(listItems).to.have.length(2);
  });
});
