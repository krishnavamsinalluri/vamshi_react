
import './App.css';
import Counter from './Counter';
import Todolist from './Todolist';

function App() {


  return (
    <div className="box">
      <h1>India vs Praskisan</h1>
      
      <Counter s={0} i={6}></Counter>
      <br/>
      <Counter s={0} i={4}></Counter>
      <br />
      <Todolist></Todolist>
    </div>
  );
}

export default App;
