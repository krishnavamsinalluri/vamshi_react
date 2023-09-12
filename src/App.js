import logo from './logo.svg';

import { Provider } from 'react-redux';
import store from './store/store';
import Counter from './Counter';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Counter></Counter>
      </Provider>
   </div>
  );
}

export default App;
