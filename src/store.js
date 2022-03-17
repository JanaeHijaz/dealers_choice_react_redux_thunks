import React from 'react';
import thunks from 'redux-thunk'
import { createStore } from 'redux';

const reducer = (state = [], action) => {
    return state;
}

const store = createStore(reducer);

export default store; 