import React from 'react';
import thunks from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import axios from 'axios';

const CREATE_HABIT = 'CREATE_HABIT';
const LOAD_HABITS = 'LOAD_HABITS';
const DELETE_HABIT = 'DELETE_HABIT';
const UPDATE_HABIT = 'UPDATE_HABIT';

// ------ comebineReducer -------

const habitsReducer = (habits =[], action) => {
if (action.type === LOAD_HABITS){
   return action.habits; 
}
if (action.type === CREATE_HABIT){
    return [...habits, action.habit];
}
if (action.type === DELETE_HABIT){
    return habits.filter(habit => habit.id !== action.habit.id)
}
if (action.type === UPDATE_HABIT){
    return habits.map(habit => habit.id === action.habit.id ? action.habit : habit);
}
    return habits;
}
const reducer = combineReducers({habits: habitsReducer});

// -----thunks-------

const loadHabits = () => {
    return async function(dispatch){
        const habits = (await axios.get('/api/habits')).data;
        dispatch({ type: LOAD_HABITS, habits });
    }
};

const createHabit = (name) => {
    return async function(dispatch) {
        const habit = (await axios.post('/api/habits', { name })).data;
        dispatch({ type: CREATE_HABIT, habit });
    }
};

const deleteHabit = async(habit) => {
    await axios.delete(`/api/habits/${habit.id}`);
    store.dispatch({ type: DELETE_HABIT, habit});
};

const updateHabit = (habit) => {
    return async function(dispatch){
        const updated = (await axios.put(`/api/habits/${habit.id}`, { completed: !habit.completed })).data;
        dispatch({ type: UPDATE_HABIT, habit: updated});
    }
};

const store = createStore(reducer, applyMiddleware(thunks));

export default store; 
export {
    loadHabits,
    createHabit,
    deleteHabit,
    updateHabit
}

window.store = store;