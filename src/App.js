import logo from './logo.svg';

import { Provider } from 'react-redux';
import store from './store/store';
import Counter from './Counter';
import Todolist from './Todolist';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Counter></Counter>
      <Todolist></Todolist>
      </Provider>
   </div>
  );
}

export default App;
