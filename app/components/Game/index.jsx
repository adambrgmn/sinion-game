import React, { PropTypes } from 'react';

import Button from '../Button';

import styles from './styles.scss';

export default function Game({
  activeButton,
  gamePlanDisabled,
  onButtonClick,
}) {
  return (
    <div className={styles.game}>
      {[1, 2, 3, 4].map(num => (
        <Button
          key={num}
          customClassName={styles.gameButton}
          onButtonClick={() => onButtonClick(num)}
          active={activeButton === num}
          disabled={gamePlanDisabled}
        >
          {num}
        </Button>
      ))}
    </div>
  );
}

Game.propTypes = {
  activeButton: PropTypes.number,
  gamePlanDisabled: PropTypes.bool,
  onButtonClick: PropTypes.func,
};
