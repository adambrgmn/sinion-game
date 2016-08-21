import React, { PropTypes } from 'react';
import classNames from 'classnames';

import Button from '../Button';

import styles from './styles.scss';

export default function Menu({
  gameRunning,
  onMenuButtonClick,
}) {
  const cx = {
    [styles.menu]: true,
  };

  return (
    <div className={classNames(cx)}>
      <Button
        customClassName={styles.menuButton}
        onButtonClick={onMenuButtonClick}
      >
        {gameRunning ? 'Reset game' : 'Start new game'}
      </Button>
    </div>
  );
}

Menu.propTypes = {
  gameRunning: PropTypes.bool,
  onMenuButtonClick: PropTypes.func,
};
