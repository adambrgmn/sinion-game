import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Header from '../Header';
import styles from './styles.scss';

describe('Component: Header', () => {
  it('should render a logo', () => {
    const wrapper = shallow(<Header />);
    const logo = wrapper.find(`.${styles.headerLogo}`);

    expect(logo).to.have.length(1);
  });
});
