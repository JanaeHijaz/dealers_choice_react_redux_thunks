import React from 'react';
import { render } from 'react-dom';
import { connect, Provider } from 'react-redux';
import store from './store';
import axios from 'axios';
import { loadHabits } from './store';
import Habits from './Habits';

const Main = connect(
   (state) => {
       return {habits: state}
    },
    (dispatch) => {
        return {
            bootstrap: async() => {
                dispatch(loadHabits());
            },
        };
    }
)
( class Main extends React.Component {
  
     componentDidMount(){ 
        this.props.bootstrap();
    }

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
                <Habits />
            </div>
        );
    }
});

render( 
    <Provider store={ store }>
    <Main />
    </Provider>
    , 
document.querySelector('#root'));



/*
const Main = connect(
    (state) => {
        return state;
    },
    (dispatch) => {
        return {
            bootstrap: async() => {
                dispatch(loadHabits());
            },
        };
    }
)
( class Main extends React.Component {
    // constructor() {
    //  super()
    //  this.state = {
    //      habits: [],
    //      name: ''
    //  };
    //  this.create = this.create.bind(this);
    // }

     componentDidMount(){ // this is LOADING
        // let response = await axios.get('/api/habits');
        // const habits = response.data;
        // store.dispatch({ type: LOAD_HABITS, habits: habits })
        //this.setState({habits: habits});
        //store.dispatch(loadHabits());
        this.props.bootstrap();
    }

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
                <Habits />
                {/*<CreateHabit create={this.create} name={this.state.name} habits={this.state.habits}/>*/
                /* <div>
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
                );
            }
        });
        */

