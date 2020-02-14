import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Can', age: 26},
      {name: 'Kyle', age: 23},
      {name: 'Nico',age: 30}
    ],
    showPersons: false 
  }

  switchNameHandler = (newName) => {
   // console.log('was clicked');
   // DOnt do that   this.state.persons[0].name = 'Inan';
    this.setState({persons:[
        {name: newName, age: 26},
        {name: 'Blerim', age: 23},
        {name: 'Nico',age: 21}
      ]})
  }
  
  nameChangedHandler = (event) =>{
    this.setState({persons:[
      {name: event.target.value, age: 23},
      {name: 'Nico',age: 21}
    ]})
  }

  togglePersonsHandler = () => {
  const doesShow = this.state.showPersons; 
  this.setState({showPersons: !doesShow}); 
  }

  render(){

    const style = {
      backgroundColor: 'white',
      font:'inherit',
      border: '1px solid blue', 
      padding: '8px',
      cursor: 'pointer'
    }; 

    let persons = null; 

    if(this.state.showPersons){
      persons = 
        <div>
          <Person 
          name ={this.state.persons[0].name}
          age={this.state.persons[0].age}>My Hobbies: Soccer,Basketball</Person>
          <Person 
          name ={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this,'John')} changed={this.nameChangedHandler}>My Hobbies are blabla
          </Person>
          <Person 
          name ={this.state.persons[2].name}
           age={this.state.persons[2].age}></Person>
           </div> 

      
    }

    return (
        <div className = "App">
          <h1>Hi I am a react App</h1>
          <p>This is really working</p>
          <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
        </div>
)
}
    }


export default App;
