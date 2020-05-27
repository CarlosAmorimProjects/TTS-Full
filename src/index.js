import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import App from './App';

const options = {
  position: 'top center',
  type: 'error',
  timeout: 3500,
  offset: '330px',
  transition: 'fade'
}

ReactDOM.render(
  <React.StrictMode>
  <AlertProvider template={AlertTemplate} {...options}>
  <App />
  </AlertProvider>
  </React.StrictMode>,
  document.getElementById('root')
  
);

