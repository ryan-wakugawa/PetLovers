import React from 'react';
import ReactDOM from 'react-dom/client';
import { Roteador } from './components/roteador';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Roteador />
  </React.StrictMode>
);

reportWebVitals()