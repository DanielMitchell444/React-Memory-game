import React from 'react';
import styles from '../App.module.css';
import { useState } from 'react';

const Card = (props) => {


 return(

<div className = {styles.content}>
 <div className= {styles.card}
 onClick = {props.onClick}
 >

  <img src = {props.image}
  onClick = {props.matchCard}
  

  /> 
  <h1>{props.name}</h1>
  <h2>{props.keys}</h2>
 </div>
 </div>

 )
}

export default Card;