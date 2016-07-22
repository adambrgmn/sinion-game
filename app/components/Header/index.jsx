import React/* , { PropTypes }*/ from 'react';
import classNames from 'classnames';

import styles from './styles.scss';

export default function Header() {
  return (
    <header className={classNames(styles.header)}>
      <h1 className={classNames(styles.headerLogo)}>Sinion</h1>
    </header>
  );
}

Header.propTypes = {};
