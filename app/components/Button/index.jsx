import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

import styles from './styles.scss';

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  onClickStart = () => { this.setState({ active: true }); }

  onClickEnd = () => { this.setState({ active: false }); }

  render() {
    const {
      active,
      disabled,
      onButtonClick,
      onClickStart,
      onClickEnd,
      customClassName,
      children,
    } = this.props;

    const cx = {
      [styles.button]: true,
      [styles.buttonActive]: this.state.active || active,
    };

    return (
      <button
        className={classNames(cx, customClassName)}
        onClick={onButtonClick}
        onMouseDown={onClickStart}
        onMouseUp={onClickEnd}
        onTouchStart={onClickStart}
        onTouchEnd={onClickEnd}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }
}

Button.propTypes = {
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  onButtonClick: PropTypes.func,
  onClickStart: PropTypes.func,
  onClickEnd: PropTypes.func,
  customClassName: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  children: PropTypes.any,
};
