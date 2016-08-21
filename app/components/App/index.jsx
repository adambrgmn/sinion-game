import React from 'react';

import Menu from '../Menu';
import Message from '../Message';
import Game from '../Game';
import Progress from '../Progress';

import styles from './styles.scss';

export default function App() {
  return (
    <div className={styles.appContainer}>
      <Menu />
      <Message message="Let's get started!" />
      <Game />
      <Progress computerTotal={5} playerCurrent={1} />
    </div>
  );
}
