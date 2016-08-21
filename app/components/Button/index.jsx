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
      >
        {children}
      </button>
    );
  }
}

Button.propTypes = {
  active: PropTypes.bool,
  onButtonClick: PropTypes.func,
  onButtonMouseDown: PropTypes.func,
  onButtonMouseUp: PropTypes.func,
  customClassName: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  children: PropTypes.any,
};
