import React from "react";
import {Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div>
     <button> <Link to="/aboutus" >
        Home
      </Link></button>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <button>      <Link to="/canner">States</Link>
        </button>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <button>      <Link to="/Country">Countrys</Link>
        </button>
      <Outlet></Outlet>

    </div>
  );
}

export default App;
