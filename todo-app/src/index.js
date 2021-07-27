import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; 
import { PersistGate } from 'redux-persist/es/integration/react'; //pristup svim child komponentama store-u, drži store kod sebe
import { BrowserRouter as Router, Route} from 'react-router-dom';

import App from './App';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
// jedan router, jedna komponenta, radi preko visibility-a i const.js i redux selectori će određivati što se prikazuje
ReactDOM.render(
  <React.StrictMode>
    <Provider> {/* store je u njemu */}
        <PersistGate> { /*drži podatke store-a */}
          <Router>  {}
              <Route path='/' component={App} /> {/* preko route dižemo App i preko selectora radimo routing */}
          </Router>
        </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
