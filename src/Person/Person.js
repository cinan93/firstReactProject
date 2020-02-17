import React from 'react';
import styled from 'styled-components'; 


const StyledDiv =   styled.div`
  width: 60%;
  margin: auto; 
  border: 1px solid #eee; 
  box-shadow: 16px;
  padding:16px; 
  text-align: center; 

@media(min-width:500px){ 
      width: 450px; 
} 
`;

const person = (props) =>{
  return(
  // <div className="Person" style={style}>
<StyledDiv>
  <p onClick={props.click}> I'm  {props.name} an I am  {props.age} years old</p>   
  <p>{props.children}</p>
  <input type="text" onChange={props.changed} value={props.name}/>
</StyledDiv> 
 )
};

export default  person;
