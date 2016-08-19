import React from 'react';

import styles from './styles.scss';

export default function App() {
  return (
    <div className={styles.appContainer}>
      <div className={styles.message}>
        <p className={styles.messageText}>Let's get started</p>
      </div>

      <div className={styles.menu}>
        <button className={styles.menuButton}>Start game</button>
      </div>

      <div className={styles.game}>
        <button className={styles.gameButton}>1</button>
        <button className={styles.gameButton}>2</button>
        <button className={styles.gameButton}>3</button>
        <button className={styles.gameButton}>4</button>
      </div>
    </div>
  );
}
