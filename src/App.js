import React, { Component } from 'react';
import styled from 'styled-components'; 
import './App.css';
import Person from './Person/Person';

const StyledButton = styled.button ` 
background-color: ${props => props.alt ?'red' : 'green'};
color: white;
font: inherit; 
border: 1px solid blue ; 
padding: 8px; 
cursor: pointer ; 

&:hover{
  background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};; 
  color: black; 
}
`; 

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
    
    
    let classes = []; 
    if(this.state.persons.length<=2){
      classes.push('red'); 
    }
    if(this.state.persons.length <=1){
      classes.push('bold'); 
    }
    
    return (
      
        <div className = "App">
          <h1>Hi I am a react App</h1>
          <p className ={classes.join(' ')}>This is really working</p>
          <StyledButton alt = {this.state.showPersons} onClick={this.togglePersonsHandler}>Toggle Persons</StyledButton>
          {persons}
        </div>
        
)     
}
    }


export default App;
