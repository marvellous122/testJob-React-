// file: ./src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Router from './components/Router';
import registerServiceWorker from './registerServiceWorker';

import store from './reducers/';

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
