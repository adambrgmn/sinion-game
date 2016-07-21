import React from 'react';
import ReactDOM from 'react-dom';

import styles from './styles.scss';
import './favicon.ico';

if (process.env.NODE_ENV !== 'production') {
  React.Perf = require('react-addons-perf'); // eslint-disable-line global-require
}

ReactDOM.render(
  <div>
    <h1 className={styles.header}>Hello World!</h1>
  </div>,
  document.getElementById('app')
);
