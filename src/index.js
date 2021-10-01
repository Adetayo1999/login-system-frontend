import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TokenProvider from './Context/Context';
import reducer, { initialState } from './Context/reducer';

ReactDOM.render(

  <TokenProvider reducer={reducer} initialState={initialState}>
    <App />
  </TokenProvider>
  ,
  document.getElementById('root')
);
