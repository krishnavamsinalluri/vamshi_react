
import './App.css';
import Country from './Restcountries'
import Data from './Countrys';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (<div className='box' id="dd">
    <h1>Countries</h1>
      <Link to="/countrydetalis">Coutry details</Link>&nbsp;
      <Link to="/country">countrys</Link>

      <div>
        <Outlet></Outlet>
        
      </div>
  </div>
  );
}

export default App;
