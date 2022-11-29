import logo from './logo.svg';
import  styles from './App.module.css';
import Card from './Components/Card';
import data from '../src/Components/data';
import { useState } from 'react';

function App() {
  const [cardArray, card] = useState([]);

  const matchCard = (e) => {
      console.log(e.target);
  }

  const shuffleArray = (array) => {
   for(let i = 0; i > 0; i--){
   const j = Math.floor(Math.random() * ( i + 1));
   const temp = array[i];
   array[i] = array[j];
   array[j] = temp;
   }

   return array;
  }


  return (
    <div className= {styles.App}>
    {data.map((datas) => {
     return <Card
     image = {datas.image}
     name = {datas.name}
     keys = {datas.id}
     click = {matchCard}
     shuffle = {shuffleArray}

     />
    })}
    </div>
  );

}
export default App;
