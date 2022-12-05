import logo from './logo.svg';
import  styles from './App.module.css';
import Card from './Components/Card';
import data from '../src/Components/data';
import score from './Components/score';
import { useState } from 'react';
import {useEffect} from 'react';

function App() {
  const [cardArray, setCardArray] = useState(data);
  const [images, setImages] = useState(data);
  const [count, setCount] = useState(0);
  const [clickedCard, setClickedCard] = useState([])
  const [guess, clickedGuess] = useState([]);

 

    function shuffle(array, ) {
      
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

      setCount(count + 1);


      console.log(count);

      

      return array;
    }

    const addScore = () => {
     
      setCount(count + 1);

      console.log(count);

      
    }

    const resetScore = () => {
      setCount(count + 0);
    }

    const matchCard = (e) => {
    
     const scoreClick = e.target.name;
     
     if(!clickedCard.includes(scoreClick)){

      shuffle(data);
      console.log(e.target.name);
     }

     else {
      console.log('player loses');
     }
    
    }


  return (
    <div className= {styles.App}>
    {cardArray.map((datas) => {

     return <Card
     image = {datas.image}
     name = {datas.name}
     keys = {datas.id}
     onClick = {matchCard}

     />
    })}


    </div>
  );

}
export default App;
