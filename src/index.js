import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { appInfo } from './constants/appInfo';
import Root from './routers/root';
import reportWebVitals from './reportWebVitals';
import './index.css';

const supportsHistory = 'pushState' in window.history && false

const { dir } = appInfo;

ReactDOM.render(
  <BrowserRouter
    basename={dir}
    forceRefresh={!supportsHistory}
  >
    <Root />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
