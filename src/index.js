import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import '@fortawesome/fontawesome-free/js/all.js'
import App from './app';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);