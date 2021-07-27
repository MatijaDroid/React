import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducer } from './redux'

import App from './App';
import './index.css';

const store = createStore(reducer); //stvaramo store tako da metodi createStore prosljedimo reducer, kroz reducer upravljamo stateom
// u provider stavljamo store da bude globalno dostupan
ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

