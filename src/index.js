import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import "bootswatch/dist/minty/bootstrap.min.css";
import "../src/css/custom.css"


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
