import React from 'react';
import { render } from 'react-dom';
import { connect, Provider } from 'react-redux';
import store from './store';
import { loadHabits } from './store';
import Habits from './Habits';
import CreateHabit from './CreateHabit';
import Header from './Header';


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

    render() {
        return (
            <div id='main'>
                <h1>Self Care Habit Tracker</h1>
                <Header />
                <CreateHabit />
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

