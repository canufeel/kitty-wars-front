import React from 'react';
import { render } from 'react-dom';
import 'whatwg-fetch';
import 'assets/sass/styles.scss';

function renderRoot() {
  // eslint-disable-next-line global-require
  const RootContainer = require('./components/root').default;
  render(
    <RootContainer />,
    document.getElementById('root'),
  );
}

renderRoot();

if (module.hot) {
  module.hot.accept('./components/root', renderRoot);
}
