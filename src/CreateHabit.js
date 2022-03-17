import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createHabit } from './store';

const CreateHabit = ({ create }) => {
    return (
    <form>
    <input type="text" id="habit" name="habit"/>
    <button onClick={create}> Add New Habit</button>
    </form>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        create: (name) => {
            dispatch(createHabit(name))
        }
    };
}

export default connect(null, mapDispatchToProps)(CreateHabit); 



