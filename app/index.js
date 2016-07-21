import React from 'react';
import ReactDOM from 'react-dom';

import './styles.scss';
import './favicon.ico';

import App from './components/App';

if (process.env.NODE_ENV !== 'production') {
  React.Perf = require('react-addons-perf'); // eslint-disable-line global-require
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
