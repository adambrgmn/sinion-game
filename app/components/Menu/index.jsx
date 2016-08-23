import React, { PropTypes } from 'react';
import classNames from 'classnames';

import Button from '../Button';

import styles from './styles.scss';

export default function Menu({
  gameRunning,
  onNewGameButtonClick,
  onSettingsButtonClick,
  children,
}) {
  const cx = {
    [styles.menu]: true,
  };

  return (
    <div className={classNames(cx)}>
      <Button
        customClassName={styles.menuButton}
        onButtonClick={onNewGameButtonClick}
      >
        {gameRunning ? 'Reset game' : 'Start new game'}
      </Button>
      <Button
        customClassName={styles.menuButton}
        onButtonClick={onSettingsButtonClick}
      >
        Settings
      </Button>
      {children}
    </div>
  );
}

Menu.propTypes = {
  gameRunning: PropTypes.bool,
  onNewGameButtonClick: PropTypes.func,
  onSettingsButtonClick: PropTypes.func,
  children: PropTypes.element,
};
