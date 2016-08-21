import React from 'react';

import Button from '../Button';
import Message from '../Message';
import Game from '../Game';
import Progress from '../Progress';

import styles from './styles.scss';

export default function App() {
  return (
    <div className={styles.appContainer}>
      <div className={styles.menu}>
        <Button customClassName={styles.menuButton}>Start a new game</Button>
      </div>

      <Message message="Let's get started!" />

      <Game />
      <Progress computerTotal={5} playerCurrent={1} />
    </div>
  );
}
