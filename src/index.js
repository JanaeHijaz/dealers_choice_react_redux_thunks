import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import axios from 'axios';


// set up Main component and methods

class Main extends React.Component {
    constructor() {
     super()
     this.state = {
         habits: []
     };

    }

    async componentDidMount(){
        const response = await axios.get('/api/habits');
        const habits = response.data;
        this.setState({habits: habits});
    };

    // create method
    // delete method
    async delete(habit) {
        await axios.delete(`/api/habits/${habit.id}`);
        const habits = this.state.habits.filter(_habit => _habit.id !== habit.id);
        this.setState({ habits });
    };
    // update method

    render() {
        return (
            <div id='main'>
                <h1>Self Care Habit Tracker</h1>
                <button> Add New Habit</button>
                <div>
                    {this.state.habits.map(habit => {
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
            </div>
        )
    }

}


render( <Main />, 
document.querySelector('#root'));