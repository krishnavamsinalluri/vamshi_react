
import { Provider } from 'react-redux';
import store from './store/store';
import Counters from './Counter';
import Todolist from './Todolist';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Counters></Counters>
      <Todolist></Todolist>
      </Provider>
   </div>
  );
}

export default App;
