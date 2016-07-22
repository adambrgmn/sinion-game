import React from 'react';

import Header from '../Header';
import SectionWelcome from '../SectionWelcome';

import styles from './styles.scss';

export default function App() {
  return (
    <div className={styles.appContainer}>
      <Header />
      <SectionWelcome />
    </div>
  );
}
