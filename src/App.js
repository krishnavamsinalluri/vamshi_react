
import './App.css';
import {store} from "./store"
import { Provider } from 'react-redux';

import Country from './features/countries/Countries';

function App() {
  return (
    <div className="box">
      <Provider store={store}>

      <Country></Country>

      </Provider>


   </div>
  );
}
export default App;
