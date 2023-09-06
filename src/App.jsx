import React from "react";
import {Link, Outlet } from "react-router-dom";



function App() {
  return (
    <div className="box">
      <Link to="/aboutus">About us</Link>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
