import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import axios from 'axios';

import CreateHabit from './CreateHabit'


// set up Main component and methods

class Main extends React.Component {
    constructor() {
     super()
     this.state = {
         habits: [],
         name: ''
     };
     this.create = this.create.bind(this);
    }

    async componentDidMount(){ // this is LOADING
        const response = await axios.get('/api/habits');
        const habits = response.data;
        this.setState({habits: habits});
    };

    // create method
    async create(){
        const response = await axios.post('/api/habits');
        const newHabit = response.data;
        const habits = [...this.state.habits, newHabit];
        console.log(newHabit)
        this.setState({ habits });
    }

    // delete method
    async delete(habit) {
        await axios.delete(`/api/habits/${habit.id}`);
        const habits = this.state.habits.filter(_habit => _habit.id !== habit.id);
        this.setState({ habits });
    };

    // update method
    async update(habit) {
        await axios.put(`/api/habits/${habit.id}`);
         
    }

    render() {
        return (
            <div id='main'>
                <h1>Self Care Habit Tracker</h1>
                <CreateHabit create={this.create} name={this.state.name} habits={this.state.habits}/>
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


render( 
    <Provider store={ store }>
    <Main />
    </Provider>
    , 
document.querySelector('#root'));