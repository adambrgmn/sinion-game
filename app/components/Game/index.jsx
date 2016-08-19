import React, { PropTypes } from 'react';

import Button from '../Button';

import styles from './styles.scss';

export default function Game({
  activeButton,
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
        >
          {num}
        </Button>
      ))}
    </div>
  );
}

Game.propTypes = {
  activeButton: PropTypes.number,
  onButtonClick: PropTypes.func,
};
