import { combineReducers } from 'redux';
import {  // nemoramo ovako pisati ali je preglednije
    ADD_TODO, 
    TOGGLE_TODO, 
    REMOVE_TODO, 
    REMOVE_ALL_COMPLETED 
} from './actions';

const todos = (state = [], action) => {
    switch(action.type){
        case ADD_TODO:
            return [
                ...state, // sa spread operatorom riješimo da dodamo novi task ali da ne narušavamo postojeći niz taskova
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
        case TOGGLE_TODO:
            return;
        case REMOVE_TODO:
            return;
        case REMOVE_ALL_COMPLETED:
            return;
        default: //nikad ne izostaviti return state;
            return state;
    }
};

export default combineReducers({
    todos
}); // combineom šaljemo sve reducere 