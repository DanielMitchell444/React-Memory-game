import React from 'react';
import styles from '../App.module.css';
import { useState } from 'react';

const Card = (props) => {

let array = [];
const [card, clickCard] = useState('')

const randomizeCard = () => {
    
}



 return(
<body>
<div className = {styles.content}>
 <div className= {styles.card}>
  <img src = {props.image}  
  onClick = {props.matchCard}
  /> 
  <h1>{props.name}</h1>
 </div>
 </div>
 </body>

 )
}

export default Card;