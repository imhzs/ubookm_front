import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import todoApp from 'reducers';
import App from 'components/App';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise';

import 'element-theme-default';

const logger = createLogger();

let store = createStore(todoApp, applyMiddleware(thunk, promise, logger));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
