import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import "./static/css/common.less";
import "./static/css/font.css";
import AppRouter from './router/AppRouter.js';
import { Provider } from 'react-redux'
import rootStore from "./store/cityStore"
const store = rootStore();

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('root'));
