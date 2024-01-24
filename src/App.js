import React from "react"
import Country from "./Countrys";
import { Link, Outlet } from "react-router-dom";
function App() { 
  return (
    <div className="Box">
    <Link to="/countrys">Countrys</Link>
        <div>
          <Outlet>
            
          </Outlet>
        </div>
       </div>
       
  );
  
}

export default App;
