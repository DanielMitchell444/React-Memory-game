import logo from './logo.svg';
import  styles from './App.module.css';
import Card from './Components/Card';
import data from '../src/Components/data';
import { useState } from 'react';
import {useEffect} from 'react';

function App() {
  const [cardArray, setCardArray] = useState(data);
  const [images, setImages] = useState(data);

  const matchCard = () => {
     
  }

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
    
      return array;
    }


  return (
    <div className= {styles.App}>
    {cardArray.map((datas) => {
     return <Card
     image = {datas.image}
     name = {datas.name}
     keys = {datas.id}
     click = {matchCard}
     shuffle = {shuffle(data)}

     />
    })}


    </div>
  );

}
export default App;
