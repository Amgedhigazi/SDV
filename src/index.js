// index.js
import React from 'react';
import App from './App';
import './App.css';
import 'antd/dist/antd.css';
import 'lightbox2/dist/css/lightbox.min.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
serviceWorker.register();



