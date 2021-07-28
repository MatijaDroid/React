//ovaj file drži konfiguraciju store-a i ovdje ćemo kreirati store
import { createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist'; // koristimo persist reducer i persistStore iz redux-persistora
import storage from 'redux-persist/lib/storage';
import { rootReducer } from './redux'; //import glavnog redux reducera

const persistConfig = {
    key: 'todo-app', // key za local storage
    storage  // služi nam za peristor da usporedi stanje storagea i storea
};

const persistedReducer = persistReducer(persistConfig, rootReducer); // koristimo persistReducer funkciju koja kreira reducer, treba mu reduxov standardni reducer

export default () => { // exportamo anonimnu funkciju
        const store = createStore(persistedReducer); 
        const persistor = persistStore(store); // persistor koristi funkciju persist store kojem prosljeđujemo store, on omogućuje čuvanje statea u storageu
    return { store, persistor }
};