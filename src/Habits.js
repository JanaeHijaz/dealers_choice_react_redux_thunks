import React from 'react';
import { connect } from 'react-redux';
import { deleteHabit } from './store';
import { updateHabit } from './store';

const Habits = ({ habits, update }) => {
    
    return (
        <div>
            <ul>
          {habits.map(habit => {
                return (
                 <li 
                 onClick={ ()=> update(habit)} key={ habit.id } className={ habit.completed ? 'completed': ''}> 
                    {habit.habitName}
                        <button onClick={ () => deleteHabit(habit) }>
                        x 
                        </button> 
                </li>
                );
            })}  
            </ul> 
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        update: (habit) => {
            dispatch(updateHabit(habit));
        }
    }
}

export default connect(state => state, mapDispatchToProps)(Habits)