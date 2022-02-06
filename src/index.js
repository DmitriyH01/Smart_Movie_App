import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './services/redux';
import './index.css';
import Movies from './containers/Movies';

ReactDOM.render(
  <Provider store={store}>
    <Movies />
  </Provider>,
  document.getElementById('root')
);
