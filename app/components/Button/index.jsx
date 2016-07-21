import React, { PropTypes } from 'react';
import classNames from 'classnames';

import styles from './styles.scss';

export default function Button({ text, customClassName, onButtonClick }) {
  const cx = {
    [styles.button]: true,
  };

  return (
    <button
      className={classNames(cx, customClassName)}
      onClick={onButtonClick}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  customClassName: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  onButtonClick: PropTypes.func,
};
