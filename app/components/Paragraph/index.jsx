import React, { PropTypes } from 'react';
import classNames from 'classnames';

import styles from './styles.scss';

export default function Paragraph({
  customClassName,
  children,
}) {
  const cx = {
    [styles.paragraph]: true,
  };

  return (
    <p className={classNames(cx, customClassName)}>{children}</p>
  );
}

Paragraph.propTypes = {
  customClassName: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  children: PropTypes.any,
};
