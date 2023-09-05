import React from "react";
import {Link, Outlet } from "react-router-dom";



function App() {
  return (
    <div className="box">
      <Link to="/aboutus" >
        Aboutus
      </Link>
      &nbsp;&nbsp;&nbsp;&nbsp;

      <Link to="/canner">Couses</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/Country">Countrys</Link>
      <Outlet></Outlet>

    </div>
  );
}

export default App;
