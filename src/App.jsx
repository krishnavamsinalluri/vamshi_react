import React from "react";
import { Link, Outlet } from "react-router-dom";



function App() {
  return (

    <div className="box">
      <img style={{ width: "10rem" }} src="https://www.ammammapodi.com/assets/frontend/images/ammaicon.png" alt="" />
      <div className="items">
        <Link to="/aboutus">About us</Link>
        &nbsp;&nbsp;&nbsp;
        <Link to="/contactus">Contact us</Link>
        &nbsp;&nbsp;&nbsp;
        <Link to="/sweetitems">Sweeat iteams</Link>
        &nbsp;&nbsp;&nbsp;
        <Link to="/hotitems">Hot iteams</Link>
      </div>
      <div className="card">
        <Outlet>
        <iframe width="688" height="387" src="https://www.youtube.com/embed/odCMxmQv6WA" title="Eggless Flour Sweets Snacks | Fried Flour Sweet Snacks | Easy Sweet Snacks | N&#39;Oven" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        </Outlet>
        

          </div>
      </div>
      );
}

      export default App;
