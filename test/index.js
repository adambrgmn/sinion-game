import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { jsdom } from 'jsdom';

// const hook = require('css-modules-require-hook');
// const sass = require('node-sass');
import hook from 'css-modules-require-hook';
import { renderSync } from 'node-sass';

chai.use(chaiEnzyme());

const exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach(property => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js',
};

hook({
  generateScopedName: '[name]__[local]___[hash:base64:5]',
  extensions: ['.scss', '.css'],
  preprocessCss: (data, filename) => (
    renderSync({
      data,
      file: filename,
    }).css
  ),
});
