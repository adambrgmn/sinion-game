import React, { PropTypes } from 'react';
import classNames from 'classnames';

import styles from './styles.scss';

export default function Button({
  onButtonClick,
  customClassName,
  children,
}) {
  const cx = {
    [styles.button]: true,
  };

  return (
    <button
      className={classNames(cx, customClassName)}
      onClick={onButtonClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  onButtonClick: PropTypes.func,
  customClassName: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  children: PropTypes.string,
};
