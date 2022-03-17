import React from 'react';
import thunks from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import axios from 'axios';

const CREATE_HABIT = 'CREATE_HABIT';
const LOAD_HABITS = 'LOAD_HABITS';
const DELETE_HABIT = 'DELETE_HABIT';
const UPDATE_HABIT = 'UPDATE_HABIT';

const initialState = {
    habits: []
}

const habitsReducer = (habits =[], action) => {
if (action.type === LOAD_HABITS){
   return action.habits; 
}
if (action.type === CREATE_HABIT){
    return [...habits, action.habits];
}
if (action.type === DELETE_HABIT){
    return 
}
if (action.type === UPDATE_HABIT){
    return habits.map(habit => habit.id === action.habit.id ? action.habit : habit);
}
    return habits;
}
const reducer = combineReducers({habits: habitsReducer});

// purpose: get the habits from the server and dispatch it to the store
const loadHabits = () => {
    return async function(dispatch){
        const habits = (await axios.get('/api/habits')).data;
        dispatch({ type: LOAD_HABITS, habits });
    }
};
const store = createStore(reducer, applyMiddleware(thunks));

export default store; 
export {
    loadHabits
}

window.store = store;