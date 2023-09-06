import React from "react";
import {Link, Outlet } from "react-router-dom";



function App() {
  return (
    
    <div className="box">
    <img  style={{width:"10rem"}}src="https://www.ammammapodi.com/assets/frontend/images/ammaicon.png" alt="" /> 
      <Link to="/aboutus">About us</Link>
      &nbsp;&nbsp;&nbsp; 

      <Link to="/contactus">Contact us</Link>
      &nbsp;&nbsp;&nbsp; 
      <Link to="/sweetitems">Sweeat iteams</Link>
      <div className="card">
      <Outlet>
        
     </Outlet>
    
      </div>
</div>
  );
}

export default App;
