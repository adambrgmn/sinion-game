import React from 'react';

import Message from '../Message';

import styles from './styles.scss';

export default function App() {
  return (
    <div className={styles.appContainer}>
      <div className={styles.menu}>
        <button className={styles.menuButton}>Start a new game</button>
      </div>

      <Message message="Let's get started!" />

      <div className={styles.game}>
        <button className={styles.gameButton}>1</button>
        <button className={styles.gameButton}>2</button>
        <button className={styles.gameButton}>3</button>
        <button className={styles.gameButton}>4</button>
      </div>
    </div>
  );
}
