//ovaj file drži konfiguraciju store-a i ovdje ćemo kreirati store
import { createStore } from 'redux';
import { persistReducer } from 'redux-persist'; // koristimo persist reducer
import storage from 'redux-persist/lib/storage';
import { rootReducer } from './redux/reducer'; //import glavnog redux reducera

const persistConfig = {
    key: 'todo-app', // key za local storage
    storage 
};

const persistedReducer = persistReducer(persistConfig, ); // koristimo persisReducer funkciju koja kreira reducer, treba mu reduxov standardni reducer

export default () => { // exportamo anonimnu funkciju
    const store = createStore(  ); 

    return { store };
};