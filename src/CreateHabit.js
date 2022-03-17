import React, { Component } from 'react';


class CreateHabit extends Component {
    constructor() {
        super();
        this.state = {
            name: ''
        };
    }

    // maybe move create function here?

render(){
    return (
        <form>
            {/*<input value={this.state.name} onChange={ ev => this.setState({ name: ev.target.value })}/> */}
            <input type="text" id="habit" name="habit"/>
            <button onClick={ ()=> this.create(this.state.name)}> Add New Habit</button>
        </form>
        );
    }
}

export default CreateHabit; 




// const CreateHabit = (props) => 
//     const habits = props.habits
//      const name = props.name;
//      const create = props.create;

//         return (
//             <form>
//                 <input value={name} onChange={ ev => this.setState({ name: ev.target.value })}/>
//                 <button onClick={ ()=> create(name)}> Add New Habit</button>
//             </form>
//             );
//  }


