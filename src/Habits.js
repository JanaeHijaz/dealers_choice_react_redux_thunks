import React from 'react';
import { connect } from 'react-redux';
import { deleteHabit } from './store';

const Habits = ({ habits }) => {
    
    return (
        <div>
          {habits.map(habit => {
                return (
                 <div key={habit.id}>
                    <div>
                    {habit.habitName}
                    <button onClick={ () => deleteHabit(habit) }> x </button>
                    </div>
                </div>
                )
            })}   
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(state => state, mapDispatchToProps)(Habits)