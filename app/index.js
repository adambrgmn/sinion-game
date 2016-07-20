import React from 'react';
import ReactDOM from 'react-dom';

import styles from './styles.scss';

if (process.env.NODE_ENV !== 'production') {
  React.Perf = require('react-addons-perf'); // eslint-disable-line global-require
}

ReactDOM.render(
  <div>Hello world</div>,
  document.getElementById('app')
);
