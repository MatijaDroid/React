const ADD_COUNT = 'ADD_COUNT'; // hardcodirani podatak upper case se koristi da naglasimo da je konstanta
const SUBB_COUNT = 'SUBB_COUNT';
const SET_COUNT = 'SET_COUNT';

export function addToCount(number = 1){ //default je da je number 1 ako ništa ne pošaljemo metodi
    return { type: ADD_COUNT, number }; // ova metoda vraća objekt u kojem imamo type: ADDCOUNT i number i završava u parametru action u reduceru
}

export function subbFromCount(number = 1){ //default je da je number 1 ako ništa ne pošaljemo metodi
    return { type: SUBB_COUNT, number }; // ova metoda vraća objekt u kojem imamo type: SUBB_COUNT i number i završava u parametru action u reduceru
}

export function setCount(number = 0){ //default je da je number 1 ako ništa ne pošaljemo metodi
    return { type: SET_COUNT, number }; // ova metoda vraća objekt u kojem imamo type: SUBB_COUNT i number i završava u parametru action u reduceru
}

//moramo kreirati da možemo exportat reducer
export function reducer( state = 0, action) { //action je objekt koji je vezan za state i ima 3 akcije za potrebu vjezbe
    switch(action.type){
        case ADD_COUNT:
            return state + action.number; //vraća trenutni state + number koji je u funkciji addToCount
        case SUBB_COUNT:
            return state - action.number; //vraća trenutni state - number koji je u funkciji subbFromCount
        case SET_COUNT:
            return action.number; //resetira number na 0
        default:
            return state; // default je da vrati cijeli state
    }
}