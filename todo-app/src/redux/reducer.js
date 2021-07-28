import { combineReducers } from 'redux';

const todos = (state = [], action) => {
    switch(action.type){
        default: //nikad ne izostaviti return state;
            return state;
    }
};

export default combineReducers({
    todos
}); // combineom šaljemo sve reducere 