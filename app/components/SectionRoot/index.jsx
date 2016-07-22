import React, { PropTypes } from 'react';
import classNames from 'classnames';

import styles from './styles.scss';

export default function SectionRoot({ customClassName, children }) {
  return (
    <div className={classNames(styles.section, customClassName)}>
      {children}
    </div>
  );
}

SectionRoot.propTypes = {
  customClassName: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  children: PropTypes.node,
};
