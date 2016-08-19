import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';

import Paragraph from '../Paragraph';
import styles from './styles.scss';

describe('Component: <Paragraph>', () => {
  it('should render a paragraph', () => {
    const wrapper = shallow(<Paragraph />);
    const found = wrapper.find(`.${styles.paragraph}`);

    expect(found).to.have.length(1);
  });

  it('should render children, if passed', () => {
    const child = 'Text';
    const wrapper = shallow(<Paragraph>{child}</Paragraph>);
    const found = wrapper.contains(child);

    expect(found).to.equal(true);
  });

  it('should accept custom classnames', () => {
    const className = 'customParagraphClass';
    const wrapper = shallow(<Paragraph customClassName={className} />);
    const found = wrapper.find(`.${className}`);

    expect(found).to.have.length(1);
  });
});
