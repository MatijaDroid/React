const ADD_COUNT = 'ADD_COUNT'; // hardcodirani podatak upper case se koristi da naglasimo da je konstanta
const SUBB_COUNT = 'SUBB_COUNT';
const SET_COUNT = 'SET_COUNT';

//moramo kreirati da možemo exportat reducer
export function reducer( state = 0, action) { //action je objekt koji je vezan za state
    switch(action.type){
        case ADD_COUNT:
            return;
        case SUBB_COUNT:
            return;
        case SET_COUNT:
            return;
        default:
            return state; // default je da vrati cijeli state
    }
}