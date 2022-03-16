import React, { Component } from 'react';


class CreateHabit extends Component {
    constructor() {
        super();
        this.state = {
            name: ''
        };
    }

render(){
    return (
        <form>
            <input value={this.state.name} onChange={ ev => this.setState({ name: ev.target.value })}/>
            <button> Add New Habit</button>
        </form>
        );
    }
}

export default CreateHabit; 