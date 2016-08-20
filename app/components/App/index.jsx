import React from 'react';

import Button from '../Button';
import Message from '../Message';
import Game from '../Game';

import styles from './styles.scss';

export default function App() {
  return (
    <div className={styles.appContainer}>
      <div className={styles.menu}>
        <Button customClassName={styles.menuButton}>Start a new game</Button>
      </div>

      <Message message="Let's get started!" />

      <Game />

      <div className="progress">
        <p>You 0 / 1 Computer</p>
      </div>
    </div>
  );
}
