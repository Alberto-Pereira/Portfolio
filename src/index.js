import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import "bootswatch/dist/minty/bootstrap.min.css"; // Caso dê problema voltar para a versão .min
import "../src/css/custom.css"
import "../src/css/dark-theme.css"
import 'toastr/build/toastr.css'


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
