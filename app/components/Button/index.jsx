import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

import styles from './styles.scss';

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };

    this.onClickStart = this.onClickStart.bind(this);
    this.onClickEnd = this.onClickEnd.bind(this);
  }

  onClickStart() {
    this.setState({ active: true });

    if (this.props.onClickStart) {
      this.props.onClickStart();
    }
  }

  onClickEnd() {
    this.setState({ active: false });

    if (this.props.onClickEnd) {
      this.props.onClickEnd();
    }
  }

  render() {
    const {
      active,
      disabled,
      onButtonClick,
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
        onMouseDown={this.onClickStart}
        onMouseUp={this.onClickEnd}
        onTouchStart={this.onClickStart}
        onTouchEnd={this.onClickEnd}
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
