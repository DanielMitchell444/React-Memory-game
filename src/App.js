import logo from './logo.svg';
import  styles from './App.module.css';
import Card from './Components/Card';
import data from '../src/Components/data';
import { useState } from 'react';

function App() {
  const [cardArray, card] = useState(data);
  const [images, setImages] = useState(data);

  const matchCard = () => {
      console.log(shuffleArray(data));
  }

  const shuffleArray = (array) => {
   for(let i = 0; i > 0; i--){
   const j = Math.floor(Math.random() * ( i + 1));
   const temp = array[i];
   array[i] = array[j];
   array[j] = temp;
   cardArray(card => [...card, array]);

   console.log(cardArray);
   }
   return array;
  }


  const compareCards = (index) => {
  console.log(cardArray);
  }

  let shuffle = shuffleArray(data);

  return (
    <div className= {styles.App}>
    {cardArray.map((datas) => {
     return <Card
     image = {datas.image}
     name = {datas.name}
     keys = {datas.id}
     click = {matchCard}
     shuffle = {shuffleArray}
     compare = {compareCards}

     />
    })}


    </div>
  );

}
export default App;
