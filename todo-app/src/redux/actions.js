//ne radi se o react komponentama pa nam netreba Pascal case
//definiramo action koji koristimo za reducer
import uniqueString from 'unique-string' // importamo modul koji omogućava stvaranje unique stringova za kreiranje unikatnih id-jeva

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const REMOVE_ALL_COMPLETED = 'REMOVE_ALL_COMPLETED';


export function addTodo(text){ //text šaljemo preko parametra iz user input valuea
    return {type: ADD_TODO, id: uniqueString(), text}; // pozivamo metodu unique string koja nam generira unikatan id za unos
}