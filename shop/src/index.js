import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SearchStore from './Store/store';
import MainContext from './Context/MainContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode store={SearchStore}>
<MainContext>
    <App />
</MainContext>
  
  </React.StrictMode>
);


