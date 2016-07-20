import React from 'react';
import ReactDOM from 'react-dom';

import styles from './styles.scss';

import Hello from './Hello';

if (process.env.NODE_ENV !== 'production') {
  React.Perf = require('react-addons-perf'); // eslint-disable-line global-require
}

ReactDOM.render(
  <div>
    <Hello />
  </div>,
  document.getElementById('app')
);
