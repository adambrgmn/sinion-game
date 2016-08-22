import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';

import App from '../../App';
import styles from '../styles.scss';

import { Menu, Message, Game, Progress } from '../../../components';

export default function rendering() {
  return describe('Rendering:', () => {
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
  });
}
