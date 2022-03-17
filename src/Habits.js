import React from 'react';
import { connect } from 'react-redux';


const Habits = ({ habits }) => {
    
    return (
        <div>
          {habits.map(habit => {
                return (
                 <div key={habit.id}>
                    <div>
                    {habit.habitName}
                    <button onClick={ () => this.delete(habit) }> x </button>
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