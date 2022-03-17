import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createHabit } from './store';

/*const CreateHabit = ({ create }) => {
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
}*/
//export default connect(null, mapDispatchToProps)(CreateHabit); 
class CreateHabit extends Component {
    constructor(){
        super();
        this.state = {
            newHabit: ''
        };
        this.onChange = this.onChange.bind(this);
        this.onSave = this.onSave.bind(this);
    }
    onSave(ev){
        ev.preventDefault();
        this.props.create(this.state.newHabit);
    }
    onChange(ev) {
        const change = {};
        change[ev.target.name] = ev.target.value;
        this.setState(change);
    }
    render() {
        const { newHabit } = this.state;
        const { onChange, onSave } = this;
        return (
            <form onSubmit={onSave}>
                <input name='newHabit' value={ newHabit } onChange={ onChange } />
                <button> Add New Habit </button>
            </form>
        )
    }
}

export default connect(
    null, 
    (dispatch) => {
        return {
            create: (newHabit) => dispatch(createHabit(newHabit))
        }
    }
    )(CreateHabit);




// needs to be a class component with its own state...?
//first 12 mins of react form pre-lecture video

