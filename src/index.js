import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import reportWebVitals from './reportWebVitals';
import Store from "./store"

// 通过服务端注入的全局变量得到初始 state
const preloadedState = window.__INITIAL_STATE__

// 使用初始 state 创建 Redux store
const store = Store(preloadedState)

ReactDOM.render(
    <App store={store}/>,
    document.getElementById('root')
);
reportWebVitals();
