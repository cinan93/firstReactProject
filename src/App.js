import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Can', age: 26},
      {name: 'Kyle', age: 23},
      {name: 'Nico',age: 30}
    ]
  }

  switchNameHandler = () => {
   // console.log('was clicked');
   // DOnt do that   this.state.persons[0].name = 'Inan';
    this.setState({persons:[
        {name: 'Can', age: 26},
        {name: 'Blerim', age: 23},
        {name: 'Nico',age: 21}
      ]})
  }

  render(){
    return (
        <div className = "App">
          <h1>Hi I am a react App</h1>
          <p>This is really working</p>
          <button onClick={this.switchNameHandler}>Switch Name</button>
          <Person name ={this.state.persons[0].name} age={this.state.persons[0].age}>My Hobbies: Soccer,Basketball</Person>
          <Person name ={this.state.persons[1].name} age={this.state.persons[1].age} ></Person>
          <Person name ={this.state.persons[2].name} age={this.state.persons[2].age}></Person>
        </div>
)
}
    }


export default App;
