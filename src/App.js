import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id : 'asdfsd', name: 'Can', age: 26},
      {id : 'kjklkj', name: 'Kyle', age: 23},
      {id : 'uejdj', name: 'Nico',age: 30}
    ],
    showPersons: false 
  }

 deletePersonHandler = (personIndex)=>{
   // const persons = this.state.persons.slice(); 
   const persons =[...this.state.persons]; 
   persons.splice(personIndex,1); 
   this.setState({persons:persons}); 
 }
  
  nameChangedHandler = (event,id) =>{
    const personIndex = this.state.persons.findIndex(p =>{
      return p.id === id; 
    }) ; 

    const person ={...this.state.persons[personIndex]};
    person.name= event.target.value; 
    
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

    if(this.state.showPersons === true){
      persons = (
        <div>
          {this.state.persons.map((person,index) => {
            return <Person 
            click ={()=> this.deletePersonHandler(index)}
            name = {person.name}
            age ={person.age}
            key = {person.id} 
            changed  ={(event) =>this.nameChangedHandler(event, person.id)}/>
          })}
      </div>
      ) 
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
