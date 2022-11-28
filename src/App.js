import logo from './logo.svg';
import  styles from './App.module.css';
import Card from './Components/Card';
import data from '../src/Components/data'

function App() {
  return (
    <div className= {styles.App}>
    {data.map((datas) => {
     return <Card
     image = {datas.image}
     name = {datas.name}
     key = {datas.id}

     />
    })}
    </div>
  );
}

export default App;
