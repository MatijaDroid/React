import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; 
import { PersistGate } from 'redux-persist/es/integration/react'; //pristup svim child komponentama store-u, drži store kod sebe
import { BrowserRouter as Router, Route} from 'react-router-dom';
import configureStore from './configureStore'; // import confg storea koji exportamo kao anonimnu funkciju
import App from './App';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const { store, persistor } = configureStore(); // pozivamo configureStore funkciju iz configureStore.js

// jedan router, jedna komponenta, radi preko visibility-a i const.js i redux selectori će određivati što se prikazuje
ReactDOM.render(
  <React.StrictMode>
    <Provider store ={store}> {/* store je u njemu i preko njega je dostupan child komponentama */}
        <PersistGate loading={null} persistor={persistor}> { /*gleda dali dozvoljava render podataka ili ne jer uspoređuje stateove koji se nalaze u storeu */}
          <Router>  {}
              <Route path='/' component={App} /> {/* preko route dižemo App i preko selectora radimo routing */}
          </Router>
        </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
