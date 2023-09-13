
import './App.css';
import {store}  from './app/store';
import { Provider } from 'react-redux';
import Counter from './features/counter/counter';
import Todolist from './features/todolist/Todolist';

function App() {
  return (
    <div className="box">
      <Provider store={store}>
      <Counter></Counter>
      <Todolist></Todolist>
      </Provider>


   </div>
  );
}

export default App;
