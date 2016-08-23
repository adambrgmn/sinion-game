require('web-audio-mock');

import rendering from './tests/rendering';
import stateChanges from './tests/stateChanges';
import gamePlay from './tests/gamePlay';

describe('Container: <App>', () => {
  rendering();
  stateChanges();
  gamePlay();
});
