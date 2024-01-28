import React from "react"
import { Link, Outlet } from "react-router-dom";
function App() { 
  return (
      <div className="box">
        <h1>vamsai</h1>  
        <Link to="/countrys">Countries</Link>&nbsp;&nbsp;
        <Link to="/products">Productes</Link>
        <div>
          <Outlet></Outlet>
        </div>
      </div>

 );
}

export default App;
