// will contain the Completed / Not Completed/ toggle 
// which will have a count of habits completed or uncompleted

import React from 'react';
import { connect } from 'react-redux';

const Header = ({ habits }) => {
    const accomplished = habits.filter(habit => habit.completed);
    return (
        <div>
            <h3> Accomplished:{accomplished.length} </h3>
        </div>
    )
};

export default connect(state => state)(Header);