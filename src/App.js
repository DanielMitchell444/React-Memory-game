import logo from './logo.svg';
import  styles from './App.module.css';
import Card from './Components/Card';
import data from '../src/Components/data';
import score from './Components/score';
import { useState } from 'react';
import {useEffect} from 'react';
import Scoreboard from './Components/Scoreboard';

function App() {
  const [cardArray, setCardArray] = useState(data);
  const [images, setImages] = useState(data);
  const [count, setCount] = useState(0);
  const [clickedCard, setClickedCard] = useState([])
  const [guess, clickedGuess] = useState([]);

 

    function shuffle(array) {
      
      let currentIndex = array.length,  randomIndex;
    
      // While there remain elements to shuffle.
      while (currentIndex != 0) {
    
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
    
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]];

      }
    
      setCardArray([...array])



      console.log(count);

      

      return array;
    }

    const addScore = () => {

      let count = 0;
     
      setCount(count + 1);

      console.log(count);

      
    }

    const resetScore = () => {
      setCount(0);
    }

    const matchCard = (value) => {
    
     const scoreClick = value;
     
     if(guess.includes(value)){

      shuffle(data);

      setCount(0);

      clickedGuess([]);


     }

    else {
      let seenPokemon = [...guess, value];

      clickedGuess(seenPokemon);


      setCount(count + 1);

      shuffle(data);

     }
    
    }


  return (
    <div>
   <h1>Score: {count}</h1>
    <div className= {styles.App}>
    {cardArray.map((datas) => {
     <Scoreboard />
     return <Card
     image = {datas.image}
     name = {datas.name}
     keys = {datas.id}
     data-value = {datas.name}
     onClick = {() => matchCard(datas)}

     />
    })}
     </div>
    </div>
    
  );

}
export default App;
